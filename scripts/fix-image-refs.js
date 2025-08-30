#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const publicImagesDir = path.join(repoRoot, 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
  console.error('ERROR: public/images directory not found. Please ensure images are in public/images.');
  process.exit(1);
}

const publicImages = fs.readdirSync(publicImagesDir).filter(f => {
  const p = path.join(publicImagesDir, f);
  return fs.statSync(p).isFile();
});

const normalize = s => (s||'').toLowerCase().replace(/[^a-z0-9]/g, '');

const imageMap = publicImages.map(f => ({ file: f, norm: normalize(f) }));

const exts = ['.js','.jsx','.ts','.tsx','.html','.css','.scss','.md','.json'];

function getAllFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const name of list) {
    if (['node_modules','.git','dist'].includes(name)) continue;
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) results = results.concat(getAllFiles(p));
    else if (exts.includes(path.extname(name))) results.push(p);
  }
  return results;
}

const scanDirs = [];
if (fs.existsSync(path.join(repoRoot,'src'))) scanDirs.push(path.join(repoRoot,'src'));
if (fs.existsSync(path.join(repoRoot,'public'))) scanDirs.push(path.join(repoRoot,'public'));
if (scanDirs.length === 0) {
  console.error('No src/ or public/ directories found.');
  process.exit(1);
}

let files = [];
scanDirs.forEach(d => files = files.concat(getAllFiles(d)));

let totalFilesUpdated = 0;

for (const filePath of files) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // collect refs from common patterns
  const refs = new Set();
  const patterns = [
    /src\\s*=\\s*["']([^"']+)["']/g,
    /url\\(\\s*['"]?([^'")]+)['"]?\\s*\\)/g,
    /require\\(\\s*['"]([^'"]+)['"]\\s*\\)/g,
    /backgroundImage\\s*:\\s*["'`]?[\\s\\S]*?url\\(\\s*['"]?([^'")]+)['"]?\\s*\\)[\\s\\S]*?["'`]?/g
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(content)) !== null) {
      if (m[1]) refs.add(m[1]);
    }
  }
  if (refs.size === 0) continue;

  for (const ref of Array.from(refs)) {
    // skip absolute urls and data URIs
    if (/^(https?:|\/\/|data:)/i.test(ref)) continue;

    const cleaned = ref.split('?')[0].split('#')[0];
    let rel = cleaned;
    if (rel.startsWith('/')) rel = rel.slice(1);

    // check common locations: repo root, public, src
    const checkPaths = [
      path.join(repoRoot, rel),
      path.join(repoRoot, 'public', rel),
      path.join(repoRoot, 'src', rel)
    ];
    const exists = checkPaths.some(p => fs.existsSync(p));
    if (exists) continue; // good, file exists

    // attempt to match basename to public/images candidates
    const base = path.basename(rel);
    const baseNorm = normalize(base);
    if (!baseNorm) continue;

    // exact/contains match
    let candidate = null;
    for (const img of imageMap) {
      if (img.norm.includes(baseNorm) || baseNorm.includes(img.norm)) { candidate = img.file; break; }
    }
    if (!candidate) {
      // fallback: choose candidate with minimal length difference (best-effort)
      let best = null; let bestScore = Infinity;
      for (const img of imageMap) {
        const score = Math.abs(img.norm.length - baseNorm.length);
        if (score < bestScore) { best = img.file; bestScore = score; }
      }
      candidate = best;
    }
    if (!candidate) continue;

    const newPath = '/images/' + candidate;
    // replace all literal occurrences of the ref with the newPath
    const escaped = ref.replace(/[-/\\\\^$*+?.()|[\\]{}]/g, '\\$&');
    const reAll = new RegExp(escaped, 'g');
    content = content.replace(reAll, newPath);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
    totalFilesUpdated++;
  }
}

console.log('Finished. Files updated:', totalFilesUpdated);
process.exit(0);
