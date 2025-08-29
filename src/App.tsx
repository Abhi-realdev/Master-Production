import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// ✅ Lazy load all page components (improves performance)
const Home = lazy(() => import('./pages/Home'));
const OurWork = lazy(() => import('./pages/OurWork'));
const Gallery = lazy(() => import('./pages/Gallery'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// ✅ Fallback loader while pages are loading
const Loader = () => (
  <div className="flex justify-center items-center h-[60vh] text-lg animate-pulse">
    Loading content...
  </div>
);

function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen flex flex-col bg-black text-white">
        {/* Navbar always on top */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Catch-all → redirect to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer always at bottom */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
