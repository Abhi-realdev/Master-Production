import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface RequestServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequestServiceModal: React.FC<RequestServiceModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
    // Reset form
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-primary/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-gradient-to-br from-accent to-highlight/20 rounded-2xl p-8 w-full max-w-md shadow-premium border border-primary/20"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors border border-primary/20"
            >
              <X className="w-5 h-5 text-primary" />
            </button>

            {/* Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                  Request Service
                </h2>
                <p className="text-primary/70 font-body text-sm">
                  Tell us about your project and we'll get back to you soon.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary/5 border border-primary/20 rounded-xl text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all font-body"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary/5 border border-primary/20 rounded-xl text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all font-body"
                  />
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary/5 border border-primary/20 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all font-body"
                  >
                    <option value="">Select Service</option>
                    <option value="podcast-production">Podcast Production</option>
                    <option value="interview-setup">Interview Setup</option>
                    <option value="recording-studio">Recording Studio</option>
                    <option value="live-streaming">Live Streaming</option>
                    <option value="content-strategy">Content Strategy</option>
                    <option value="digital-marketing">Digital Marketing</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-primary/5 border border-primary/20 rounded-xl text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all resize-none font-body"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-primary py-3 px-6 rounded-xl font-heading font-semibold flex items-center justify-center space-x-2 micro-bounce"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Request</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RequestServiceModal;