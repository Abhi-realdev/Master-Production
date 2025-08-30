import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Search, 
  Share2, 
  PenTool, 
  TrendingUp, 
  Smartphone,
  Code,
  BarChart3
} from 'lucide-react';

const DigitalServices = () => {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies, responsive design, and optimized performance.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile First'],
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your online visibility with comprehensive search engine optimization strategies.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Analytics'],
      color: 'from-green-400 to-blue-500',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Engage your audience across all social platforms with strategic content and campaigns.',
      features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics'],
      color: 'from-pink-400 to-red-400',
    },
    {
      icon: PenTool,
      title: 'Content Support',
      description: 'Professional content creation and digital growth consulting for your brand.',
      features: ['Content Creation', 'Brand Strategy', 'Growth Consulting', 'Performance Tracking'],
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  const additionalServices = [
    { icon: TrendingUp, title: 'Digital Growth Consulting', description: 'Strategic guidance for digital expansion' },
    { icon: Smartphone, title: 'Mobile App Development', description: 'Native and cross-platform mobile solutions' },
    { icon: BarChart3, title: 'Analytics & Reporting', description: 'Data-driven insights for better decisions' },
    { icon: Globe, title: 'E-commerce Solutions', description: 'Complete online store development and management' },
  ];

  return (
    <section className="py-24 bg-gradient-accent section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-body font-medium text-sm rounded-full border border-primary/20 backdrop-blur-sm mb-4">
            💻 Digital Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Digital Support Services
          </h2>
          <p className="text-xl text-primary/70 max-w-3xl mx-auto font-body">
            Comprehensive digital solutions to elevate your online presence and drive growth
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card p-8 rounded-2xl text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-elegant`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-primary/70 font-body text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-secondary to-highlight rounded-full" />
                    <span className="text-primary/60 font-body text-xs">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                className="mt-6 btn-outline px-6 py-2 text-sm font-body font-medium rounded-lg w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold text-primary text-center mb-8">
            Additional Digital Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="text-center p-6 bg-white/30 rounded-xl hover:bg-white/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <service.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-secondary transition-colors duration-300" />
                <h4 className="font-heading font-semibold text-primary mb-2 text-sm">
                  {service.title}
                </h4>
                <p className="text-primary/60 font-body text-xs">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold text-primary mb-4">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-primary/70 font-body mb-6">
            Let's discuss how our digital services can help grow your business
          </p>
          <motion.button
            className="btn-primary px-8 py-4 font-heading font-semibold rounded-xl micro-bounce"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Digital Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalServices;