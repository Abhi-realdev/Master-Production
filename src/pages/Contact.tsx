import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Sparkles } from 'lucide-react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSpotify,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919628787500';
    const message = encodeURIComponent('Hello! I\'m interested in your podcast production services.');
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 96287 87500', 'Available 24/7'],
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['vibes.unplugged2024@gmail.com', 'Quick Response Guaranteed'],
      color: 'from-green-400 to-blue-500',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Nirala Nagar', 'Ballia, UP, India'],
      color: 'from-pink-400 to-red-400',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
      color: 'from-yellow-400 to-orange-500',
    },
  ];

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

  return (
    <div className="pt-16 md:pt-20 font-body bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-primary section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-3 bg-white/20 text-white font-body font-medium text-sm rounded-full border border-white/20 backdrop-blur-sm shadow-elegant">
                <Sparkles className="inline w-4 h-4 mr-2" />
                Get In Touch
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto font-body leading-relaxed">
              Ready to start your next podcast project? Let's discuss how we can
              bring your vision to life with our professional production services.
            </p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-secondary section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-primary/70 font-body">
              Multiple ways to reach us for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="text-center bg-white/20 backdrop-blur-sm p-8 rounded-2xl border border-white/20 card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-primary/70 font-body text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-gradient-cool section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-heading font-bold text-primary mb-8">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-primary font-body text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all backdrop-blur-sm font-body"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-primary font-body text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all backdrop-blur-sm font-body"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-primary font-body text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all backdrop-blur-sm font-body"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-primary font-body text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-white/20 rounded-xl text-primary placeholder-primary/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all resize-none backdrop-blur-sm font-body"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-primary py-4 px-6 rounded-xl font-heading font-semibold flex items-center justify-center space-x-2 micro-bounce"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
              
              {/* WhatsApp Contact Option */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-primary font-heading font-semibold mb-2">Quick Contact</h4>
                    <p className="text-primary/70 font-body text-sm">Get instant response via WhatsApp</p>
                  </div>
                  <motion.button
                    onClick={handleWhatsAppClick}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-body font-medium transition-all duration-300 flex items-center space-x-2 shadow-elegant micro-bounce"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-3xl font-heading font-bold text-primary mb-8">
                  Find Our Studio
                </h3>
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center border border-white/20">
                  <div className="text-center">
                    <MapPin className="w-20 h-20 text-secondary mx-auto mb-4" />
                    <p className="text-primary font-body text-lg mb-2">
                      Interactive Map Placeholder
                    </p>
                    <p className="text-primary/60 font-body text-sm">
                      Google Maps integration would be added here
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-xl font-heading font-bold text-primary mb-6">
                  Why Choose Us?
                </h4>
                <ul className="space-y-4 text-primary/80 font-body">
                  {[
                    'Professional studio facilities',
                    'Experienced production team',
                    'High-profile guest network',
                    'End-to-end production services',
                    'Award-winning content quality',
                    '24/7 customer support'
                  ].map((item, index) => (
                    <motion.li 
                      key={item}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-gradient-soft section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Connect With Us
            </h2>
            <p className="text-xl text-primary/70 font-body mb-12">
              Follow us on social media for behind-the-scenes content and updates
            </p>

            <div className="flex justify-center flex-wrap gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 bg-white/20 ${social.bgColor} rounded-2xl flex items-center justify-center transition-all duration-300 group border border-white/20 ${social.color} shadow-elegant`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                >
                  <social.icon className="w-7 h-7 text-primary/70 group-hover:text-current transition-colors duration-300" />
                </motion.a>
              ))}
            </div>

            <motion.p
              className="text-primary/60 font-body mt-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Stay updated with our latest podcast episodes, guest announcements,
              and exclusive behind-the-scenes content from our productions.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;