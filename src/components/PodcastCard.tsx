import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Hash } from 'lucide-react';

interface PodcastCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  episodes: number;
  delay?: number;
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  title,
  description,
  image,
  duration,
  episodes,
  delay = 0,
}) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-accent to-highlight/20 rounded-2xl overflow-hidden shadow-premium group cursor-pointer border border-primary/10 hover:border-secondary/30 transition-all duration-500 card-hover"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
        
        {/* Play Button */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-20 h-20 bg-gradient-to-r from-secondary to-contrast rounded-full flex items-center justify-center shadow-premium backdrop-blur-sm border-2 border-accent/20">
            <Play className="w-10 h-10 text-accent ml-1" />
          </div>
        </motion.div>

        {/* Episode Count Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-primary/80 backdrop-blur-sm text-accent px-3 py-1 rounded-full text-xs font-body font-medium flex items-center space-x-1 border border-highlight/20">
            <Hash className="w-3 h-3" />
            <span>{episodes} episodes</span>
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-secondary/80 backdrop-blur-sm text-accent px-3 py-1 rounded-full text-xs font-body font-medium flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300 line-clamp-1">
          {title}
        </h3>
        <p className="text-primary/70 font-body text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-primary/60 font-body text-xs">Now Playing</span>
          </div>
          <motion.div 
            className="text-secondary font-body text-sm font-medium group-hover:text-contrast transition-colors duration-300 flex items-center space-x-1"
            whileHover={{ x: 5 }}
          >
            <span>Listen Now</span>
            <Play className="w-3 h-3" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PodcastCard;