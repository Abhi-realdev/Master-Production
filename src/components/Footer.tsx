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
import { Mic2, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: FaInstagram, 
      href: 'https://www.instagram.com/vibes.unplugged2024?utm_source=qr&igsh=MXUxdjh1bHd2YnJ2cA==', 
      label: 'Instagram', 
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/20'
    },
    { 
      icon: FaFacebook, 
      href: 'https://www.facebook.com/profile.php?id=100086320209180', 
      label: 'Facebook', 
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-500/20'
    },
    { 
      icon: FaYoutube, 
      href: 'https://youtube.com/@vibes.unplugged?si=8rAACP7MgE6JmeDw', 
      label: 'YouTube', 
      color: 'hover:text-red-500',
      bgColor: 'hover:bg-red-500/20'
    },
    { 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/vishal-raj-08827b184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
      label: 'LinkedIn', 
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-600/20'
    },
    { 
      icon: FaTwitter, 
      href: 'https://x.com/VishalRaj84424?t=JmKNOuHrOvVUT8zsOr5Bpw&s=08', 
      label: 'Twitter/X', 
      color: 'hover:text-gray-800',
      bgColor: 'hover:bg-gray-800/20'
    },
    { 
      icon: FaSpotify, 
      href: '#', 
      label: 'Spotify', 
      color: 'hover:text-green-500',
      bgColor: 'hover:bg-green-500/20'
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 96287 87500',
      color: 'text-blue-400'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'vibes.unplugged2024@gmail.com',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Nirala Nagar, Ballia, UP',
      color: 'text-purple-400'
    },
  ];

  const quickLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Careers',
    'Press Kit',
    'Podcast Guidelines',
    'Guest Application'
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919628787500';
    const message = encodeURIComponent('Hello! I\'m interested in your podcast production services.');
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gradient-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-elegant border-2 border-white/20">
                <img 
                  src="/images/logo.png" 
                  alt="Master's Production Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-heading font-bold text-white">Master's Production</span>
            </motion.div>
            
            <motion.p 
              className="text-white/80 font-body leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Professional podcast production house specializing in interviews with
              influential personalities from administration to politics. Creating
              compelling content that resonates and inspires meaningful conversations.
            </motion.p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <info.icon className={`w-5 h-5 ${info.color}`} />
                  <span className="text-white/70 font-body text-sm">{info.details}</span>
                </motion.div>
              ))}
            </div>
            
            {/* WhatsApp Contact */}
            <motion.button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-body font-medium transition-all duration-300 shadow-elegant group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Chat with us on WhatsApp</span>
            </motion.button>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <motion.h3 
              className="text-xl font-heading font-semibold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="block text-white/70 hover:text-white transition-all duration-300 text-sm font-body hover:translate-x-2 transform"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <motion.h3 
              className="text-xl font-heading font-semibold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Connect With Us
            </motion.h3>
            
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 bg-white/10 ${social.bgColor} rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/20 social-icon ${social.color}`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-white/70 group-hover:text-current transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
            
            <motion.p
              className="text-white/60 font-body text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Stay updated with our latest podcast episodes, guest announcements,
              and exclusive behind-the-scenes content.
            </motion.p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 pt-12 border-t border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Stay in the Loop
            </h3>
            <p className="text-white/70 font-body mb-6">
              Subscribe to our newsletter for exclusive updates and behind-the-scenes content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all backdrop-blur-sm font-body"
              />
              <motion.button
                className="btn-secondary px-6 py-3 font-body font-medium rounded-xl whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 font-body text-sm">
            © 2025 Master's Production. All rights reserved.
          </p>
          <p className="text-white/60 font-body text-sm mt-2 sm:mt-0">
            Made with <span className="text-pink-400 animate-pulse-soft">❤️</span> for exceptional podcast production.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;