import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Mic2, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
    const message = encodeURIComponent('Hello! I\'m interested in your podcast production services.');
    const whatsappUrl = `https://wa.me/${+917800844260}?text=${Hello,Thanks for reaching out to us}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-elegant border-b border-neutral-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-elegant"
            >
              <Mic2 className="w-6 h-6 text-black" />
            </motion.div>
            <span className={`text-lg md:text-xl font-heading font-bold tracking-wide group-hover:text-secondary transition-colors duration-300 ${
              scrolled ? 'text-primary' : 'text-black'
            }`}>
              Master's Production
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-body font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === item.path
                    ? scrolled 
                      ? 'text-primary bg-gradient-secondary shadow-soft'
                      : 'text-black bg-black/20 shadow-elegant'
                    : scrolled
                      ? 'text-primary/80 hover:text-primary hover:bg-neutral-100'
                      : 'text-black/80 hover:text-black hover:bg-black/10'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      scrolled ? 'bg-gradient-primary' : 'bg-black'
                    }`}
                    initial={false}
                  />
                )}
              </Link>
            ))}
            
            {/* WhatsApp Button */}
            <motion.button
              onClick={handleWhatsAppClick}
              className="ml-4 p-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full transition-all duration-300 group shadow-elegant"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-300 rounded-lg ${
              scrolled 
                ? 'text-primary/80 hover:text-primary hover:bg-neutral-100'
                : 'text-black/80 hover:text-black hover:bg-black/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0, 
            opacity: isOpen ? 1 : 0 
          }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md border-t border-neutral-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-body font-medium transition-all duration-300 rounded-lg ${
                  location.pathname === item.path
                    ? 'text-primary bg-gradient-secondary shadow-soft'
                    : 'text-primary/80 hover:text-primary hover:bg-neutral-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <motion.button
              onClick={() => {
                handleWhatsAppClick();
                setIsOpen(false);
              }}
              className="w-full mt-2 p-3 bg-gradient-to-r from-green-500 to-green-600 text-black rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 shadow-elegant"
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
