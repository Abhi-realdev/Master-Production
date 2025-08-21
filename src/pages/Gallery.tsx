import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Award, Users, Star, Trophy } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
      title: 'Political Interview Session',
      category: 'interviews',
      type: 'image',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/6115756/pexels-photo-6115756.jpeg',
      title: 'Studio Recording Setup',
      category: 'behind-scenes',
      type: 'image',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg',
      title: 'Leadership Discussion',
      category: 'interviews',
      type: 'video',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/6114991/pexels-photo-6114991.jpeg',
      title: 'Production Team at Work',
      category: 'behind-scenes',
      type: 'image',
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg',
      title: 'Audio Engineering',
      category: 'production',
      type: 'image',
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      title: 'Live Streaming Setup',
      category: 'production',
      type: 'video',
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/6803516/pexels-photo-6803516.jpeg',
      title: 'High-Profile Guest Interview',
      category: 'interviews',
      type: 'image',
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
      title: 'Multi-Camera Production',
      category: 'production',
      type: 'video',
    },
  ];

  const achievements = [
    {
      icon: Users,
      number: '500+',
      title: 'Famous Personalities',
      description: 'Interviewed across politics and administration',
      color: 'from-secondary to-contrast',
    },
    {
      icon: Award,
      number: '50+',
      title: 'Industry Awards',
      description: 'Recognition for excellence in podcast production',
      color: 'from-highlight to-contrast',
    },
    {
      icon: Star,
      number: '1000+',
      title: 'Episodes Produced',
      description: 'High-quality content delivered consistently',
      color: 'from-contrast to-secondary',
    },
    {
      icon: Trophy,
      number: '25+',
      title: 'Major Events',
      description: 'Covered significant political and administrative events',
      color: 'from-secondary to-highlight',
    },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'interviews', label: 'Interviews' },
    { id: 'production', label: 'Production' },
    { id: 'behind-scenes', label: 'Behind Scenes' },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-16 md:pt-20 font-body">
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
              <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary font-body font-medium text-sm rounded-full border border-secondary/30 backdrop-blur-sm">
                📸 Visual Journey
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-accent mb-6">
              Gallery
            </h1>
            <p className="text-xl text-accent/80 max-w-4xl mx-auto font-body leading-relaxed">
              A visual journey through our productions, behind-the-scenes moments,
              and memorable interviews with influential personalities.
            </p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-highlight/20 rounded-full blur-xl"
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-accent section-divider">
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
                className="text-center bg-primary/5 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <achievement.icon className="w-8 h-8 text-accent" />
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
      <section className="py-24 bg-gradient-primary section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent mb-8">
              Visual Journey
            </h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filterOption) => (
                <button
                  key={filterOption.id}
                  onClick={() => setFilter(filterOption.id)}
                  className={`px-6 py-3 rounded-full font-body font-medium transition-all duration-300 ${
                    filter === filterOption.id
                      ? 'bg-gradient-to-r from-secondary to-contrast text-accent shadow-premium'
                      : 'bg-accent/10 text-accent hover:bg-accent/20 border border-accent/20'
                  }`}
                >
                  {filterOption.label}
                </button>
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
                  className="relative group cursor-pointer overflow-hidden rounded-2xl bg-accent/10 backdrop-blur-sm border border-accent/20 card-hover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(item.image)}
                  layout
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Video Play Icon */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-secondary/80 transition-colors duration-300 border border-accent/30">
                          <Play className="w-8 h-8 text-accent ml-1" />
                        </div>
                      </div>
                    )}
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-accent font-heading font-semibold text-sm">
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

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-12 h-12 bg-accent/20 hover:bg-accent/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors border border-accent/30"
              >
                <X className="w-6 h-6 text-accent" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery item"
                className="w-full h-full object-contain rounded-2xl shadow-premium"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;