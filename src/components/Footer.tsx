import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSpotify,
} from 'react-icons/fa';
import { Mic2, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FaYoutube, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: FaSpotify, href: '#', label: 'Spotify', color: 'hover:text-green-500' },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '+1234567890';
    const message = encodeURIComponent('Hello! I\'m interested in your podcast production services.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gradient-primary border-t border-highlight/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-contrast rounded-full flex items-center justify-center">
                <Mic2 className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xl font-heading font-bold text-accent">Master's Production</span>
            </div>
            <p className="text-accent/80 font-body text-sm leading-relaxed max-w-md">
              Professional podcast production house specializing in interviews with
              famous personalities from administration to politics. Creating
              compelling content that resonates and inspires.
            </p>
            
            {/* WhatsApp Contact */}
            <motion.button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with us</span>
            </motion.button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-accent">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Careers',
                'Press Kit',
                'Podcast Guidelines',
                'Guest Application'
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-accent/70 hover:text-highlight transition-colors duration-300 text-sm font-body hover:translate-x-1 transform transition-transform"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-accent">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`w-12 h-12 bg-highlight/10 hover:bg-highlight/20 rounded-full flex items-center justify-center transition-all duration-300 group ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-accent/70 group-hover:text-current transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
            <p className="text-accent/60 font-body text-sm">
              Stay updated with our latest podcasts and exclusive content.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-highlight/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-accent/60 font-body text-sm">
            © 2025 Master's Production. All rights reserved.
          </p>
          <p className="text-accent/60 font-body text-sm mt-2 sm:mt-0">
            Made with <span className="text-secondary">❤️</span> for exceptional podcast production.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;