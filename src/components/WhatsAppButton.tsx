import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919628787500';
    const message = encodeURIComponent('Hello! I\'m interested in your podcast production services.');
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center shadow-elegant hover:shadow-glow transition-all duration-300 group border-2 border-white/20"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        delay: 1.5, 
        duration: 0.8, 
        type: 'spring',
        stiffness: 200,
        damping: 15
      }}
    >
      <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
      
      {/* Animated Pulse Rings */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-10" />
      
      {/* Enhanced Tooltip */}
      <motion.div 
        className="absolute right-full mr-4 px-4 py-2 bg-white text-primary text-sm font-body rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-elegant border border-neutral-200"
        initial={{ x: 10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        Chat with us on WhatsApp
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-r border-b border-neutral-200" />
      </motion.div>
    </motion.button>
  );
};

export default WhatsAppButton;