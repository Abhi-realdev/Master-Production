import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Award, Users, Star, Trophy, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      image: 'images/Banner1.jpeg',
      title: 'Vibes Unplugged Podcast',
      category: 'podcasts',
      type: 'image',
    },
    {
      id: 2,
      image: 'images/Banner2.jpeg',
      title: 'Professional Studio Setup',
      category: 'studio',
      type: 'image',
    },
    {
      id: 3,
      image: 'images/Banner3.jpeg',
      title: 'Expert Interview Session',
      category: 'interviews',
      type: 'image',
    },
    {
      id: 4,
      image: 'images/Banner4.jpeg',
      title: 'Behind the Scenes',
      category: 'behind-scenes',
      type: 'image',
    },
    {
      id: 5,
      image: 'images/banner5.jpeg',
      title: 'Team Collaboration',
      category: 'team',
      type: 'image',
    },
    {
      id: 6,
      image: 'images/banner6.jpeg',
      title: 'Recording Session',
      category: 'studio',
      type: 'image',
    },
    {
      id: 7,
      image: 'images/photo1.jpeg',
      title: 'Live Interview',
      category: 'interviews',
      type: 'image',
    },
    {
      id: 8,
      image: 'images/photo2.jpeg',
      title: 'Production Process',
      category: 'behind-scenes',
      type: 'image',
    },
  ];

  const achievements = [
    {
      icon: Users,
      number: '500+',
      title: 'Famous Personalities',
      description: 'Interviewed across politics and administration',
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: Award,
      number: '50+',
      title: 'Industry Awards',
      description: 'Recognition for excellence in podcast production',
      color: 'from-pink-400 to-red-400',
    },
    {
      icon: Star,
      number: '1000+',
      title: 'Episodes Produced',
      description: 'High-quality content delivered consistently',
      color: 'from-green-400 to-blue-500',
    },
    {
      icon: Trophy,
      number: '25+',
      title: 'Major Events',
      description: 'Covered significant political and administrative events',
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'podcasts', label: 'Podcasts' },
    { id: 'interviews', label: 'Interviews' },
    { id: 'studio', label: 'Studio' },
    { id: 'behind-scenes', label: 'Behind Scenes' },
    { id: 'team', label: 'Team' },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

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
                📸 Visual Journey
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Gallery
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto font-body leading-relaxed">
              A visual journey through our productions, behind-the-scenes moments,
              and memorable interviews with influential personalities.
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

      {/* Achievements Section */}
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
              Our Achievements
            </h2>
            <p className="text-xl text-primary/70 font-body">
              Numbers that showcase our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="text-center bg-white/20 backdrop-blur-sm p-8 rounded-2xl border border-white/20 card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  {achievement.title}
                </h3>
                <p className="text-primary/70 font-body text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-cool section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
              Visual Journey
            </h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filterOption) => (
                <motion.button
                  key={filterOption.id}
                  onClick={() => setFilter(filterOption.id)}
                  className={`px-6 py-3 rounded-full font-body font-medium transition-all duration-300 ${
                    filter === filterOption.id
                      ? 'bg-gradient-primary text-white shadow-elegant'
                      : 'bg-white/30 text-primary hover:bg-white/50 border border-primary/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filterOption.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white/20 backdrop-blur-sm border border-white/20 gallery-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(item.image)}
                  layout
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 lazy-image"
                      loading="lazy"
                      onLoad={(e) => e.currentTarget.classList.add('loaded')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-white font-heading font-semibold text-sm">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl max-h-full"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors border border-white/30 z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <motion.img
                src={selectedImage}
                alt="Gallery item"
                className="w-full h-full object-contain rounded-2xl shadow-premium max-h-[80vh]"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
