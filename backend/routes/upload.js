import express from 'express';
import multer from 'multer';
import cloudinary from '../config/cloudinary.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow images and videos
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image and video files are allowed'), false);
    }
  }
});

// @desc    Upload single file
// @route   POST /api/upload/single
// @access  Private
router.post('/single', protect, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: 'auto',
          folder: 'media-website',
          allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'mov', 'avi'],
          transformation: [
            { quality: 'auto:good' },
            { fetch_format: 'auto' }
          ]
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      uploadStream.end(req.file.buffer);
    });

    res.json({
      success: true,
      message: 'File uploaded successfully',
      data: {
        publicId: result.public_id,
        url: result.secure_url,
        format: result.format,
        size: result.bytes,
        width: result.width,
        height: result.height,
        duration: result.duration,
        resourceType: result.resource_type
      }
    });
  } catch (error) {
    console.error('File upload error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to upload file'
    });
  }
});

// @desc    Upload multiple files
// @route   POST /api/upload/multiple
// @access  Private
router.post('/multiple', protect, upload.array('files', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No files uploaded'
      });
    }

    const uploadPromises = req.files.map(async (file) => {
      try {
        const result = await new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              resource_type: 'auto',
              folder: 'media-website',
              allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'mov', 'avi'],
              transformation: [
                { quality: 'auto:good' },
                { fetch_format: 'auto' }
              ]
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );

          uploadStream.end(file.buffer);
        });

        return {
          originalName: file.originalname,
          publicId: result.public_id,
          url: result.secure_url,
          format: result.format,
          size: result.bytes,
          width: result.width,
          height: result.height,
          duration: result.duration,
          resourceType: result.resource_type
        };
      } catch (error) {
        return {
          originalName: file.originalname,
          error: error.message
        };
      }
    });

    const results = await Promise.all(uploadPromises);
    const successful = results.filter(r => !r.error);
    const failed = results.filter(r => r.error);

    res.json({
      success: true,
      message: `Uploaded ${successful.length} files successfully`,
      data: {
        successful,
        failed,
        total: results.length
      }
    });
  } catch (error) {
    console.error('Multiple file upload error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to upload files'
    });
  }
});

// @desc    Delete file from Cloudinary
// @route   DELETE /api/upload/:publicId
// @access  Private/Admin
router.delete('/:publicId', protect, authorize('admin'), async (req, res) => {
  try {
    const { publicId } = req.params;
    const { resourceType = 'auto' } = req.query;

    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType
    });

    if (result.result === 'ok') {
      res.json({
        success: true,
        message: 'File deleted successfully'
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Failed to delete file'
      });
    }
  } catch (error) {
    console.error('File deletion error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to delete file'
    });
  }
});

// @desc    Get upload statistics
// @route   GET /api/upload/stats
// @access  Private/Admin
router.get('/stats', protect, authorize('admin'), async (req, res) => {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'media-website',
      max_results: 1000
    });

    const stats = {
      totalFiles: result.resources.length,
      totalSize: result.resources.reduce((sum, file) => sum + file.bytes, 0),
      byFormat: {},
      byResourceType: {}
    };

    result.resources.forEach(file => {
      // Count by format
      stats.byFormat[file.format] = (stats.byFormat[file.format] || 0) + 1;
      
      // Count by resource type
      stats.byResourceType[file.resource_type] = (stats.byResourceType[file.resource_type] || 0) + 1;
    });

    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Get upload stats error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to get upload statistics'
    });
  }
});

// @desc    Test Cloudinary connection
// @route   GET /api/upload/test
// @access  Private
router.get('/test', protect, async (req, res) => {
  try {
    // Test by getting account info
    const result = await cloudinary.api.ping();
    
    res.json({
      success: true,
      message: 'Cloudinary connection successful',
      data: {
        status: result.status,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Cloudinary test error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Cloudinary connection failed',
      error: error.message
    });
  }
});

export default router;
