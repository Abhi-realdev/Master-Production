import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, TrendingUp, Award, Globe, Target, Rocket, Trophy } from 'lucide-react';

const ModernTimeline = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'Master\'s Production was founded with a vision to create impactful podcast content.',
      icon: Star,
      color: 'from-blue-400 to-purple-500',
    },
    {
      year: '2019',
      title: 'First Major Interview',
      description: 'Conducted our first high-profile political interview, setting the tone for our future work.',
      icon: Users,
      color: 'from-pink-400 to-red-400',
    },
    {
      year: '2020',
      title: 'Studio Expansion',
      description: 'Opened our state-of-the-art recording facilities with professional-grade equipment.',
      icon: TrendingUp,
      color: 'from-green-400 to-blue-500',
    },
    {
      year: '2021',
      title: 'Award Recognition',
      description: 'Received multiple industry awards for excellence in podcast production.',
      icon: Award,
      color: 'from-yellow-400 to-orange-500',
    },
    {
      year: '2022',
      title: 'Digital Innovation',
      description: 'Launched live streaming capabilities and enhanced digital distribution.',
      icon: Globe,
      color: 'from-purple-400 to-pink-500',
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded operations to serve international clients and global audiences.',
      icon: Target,
      color: 'from-indigo-400 to-cyan-500',
    },
    {
      year: '2024',
      title: 'Technology Integration',
      description: 'Integrated AI-powered editing and advanced streaming technologies.',
      icon: Rocket,
      color: 'from-emerald-400 to-teal-500',
    },
    {
      year: '2025',
      title: 'Industry Leadership',
      description: 'Established as the premier podcast production house for high-profile personalities.',
      icon: Trophy,
      color: 'from-amber-400 to-yellow-500',
    },
  ];

  return (
    <section className="py-24 bg-gradient-cool section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Our Creative Journey
          </h2>
          <p className="text-xl text-primary/70 font-body">
            Follow our path of growth, innovation, and excellence
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Modern Timeline Container */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-primary transform -translate-x-1/2 rounded-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Node */}
                  <motion.div 
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-elegant border-4 border-white`}>
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    <motion.div 
                      className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-elegant card-hover ${
                        index % 2 === 0 ? 'text-left' : 'text-right'
                      }`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`text-3xl font-heading font-bold text-gradient-primary mb-3 ${
                        index % 2 === 0 ? 'text-left' : 'text-right'
                      }`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-primary/70 font-body leading-relaxed text-sm">
                        {milestone.description}
                      </p>
                      
                      {/* Decorative Element */}
                      <div className={`mt-4 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <div className={`w-12 h-1 bg-gradient-to-r ${milestone.color} rounded-full`} />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernTimeline;