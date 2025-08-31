import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Mic2, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Podcast', path: '/our-work' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '+917800844260';
    const message = encodeURIComponent("Hello! I'm interested in your podcast production services.");
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
        bg-neutral-900 ${scrolled ? 'shadow-elegant border-b border-neutral-800' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 rounded-full overflow-hidden shadow-elegant border-2 border-amber-400/30"
            >
              <img 
                src="/images/banner.png" 
                alt="Master's Production Logo" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <span className={`text-lg md:text-xl font-heading font-bold tracking-wide transition-colors duration-300 text-white`}>
              Master's Production
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-body font-medium transition-all duration-300 rounded-lg group
                    ${isActive
                      ? 'text-amber-300 bg-amber-900/10 shadow-soft'
                      : 'text-gray-200 hover:text-white hover:bg-neutral-800/40'}`}
                >
                  <span className="relative z-10">{item.name}</span>

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-amber-400"
                      initial={false}
                    />
                  )}
                </Link>
              );
            })}

            {/* WhatsApp Button (accent color matching palette) */}
            <motion.button
              onClick={handleWhatsAppClick}
              className="ml-4 p-2 bg-amber-400 hover:bg-amber-500 rounded-full transition-all duration-300 shadow-elegant"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5 text-neutral-900" />
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 text-gray-200 hover:text-white`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden bg-neutral-900 border-t border-neutral-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-body font-medium transition-all duration-300 rounded-lg
                  ${location.pathname === item.path
                    ? 'text-amber-300 bg-amber-900/10 shadow-soft'
                    : 'text-gray-200 hover:text-white hover:bg-neutral-800/40'}`}
              >
                {item.name}
              </Link>
            ))}

            <motion.button
              onClick={() => {
                handleWhatsAppClick();
                setIsOpen(false);
              }}
              className="w-full mt-2 p-3 bg-amber-400 text-neutral-900 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 shadow-elegant"
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
