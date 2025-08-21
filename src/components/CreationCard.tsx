import React from 'react';
import { motion } from 'framer-motion';
import { Play, Mic, Video, Radio } from 'lucide-react';

interface CreationCardProps {
  title: string;
  description: string;
  image: string;
  type: string;
}

const CreationCard: React.FC<CreationCardProps> = ({
  title,
  description,
  image,
  type,
}) => {
  const getTypeIcon = () => {
    switch (type) {
      case 'podcast':
        return <Mic className="w-5 h-5" />;
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'live-event':
        return <Radio className="w-5 h-5" />;
      default:
        return <Play className="w-5 h-5" />;
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'podcast':
        return 'Podcast';
      case 'video':
        return 'Video';
      case 'live-event':
        return 'Live Event';
      case 'documentary':
        return 'Documentary';
      case 'interview-series':
        return 'Interview Series';
      default:
        return 'Content';
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'podcast':
        return 'from-secondary to-contrast';
      case 'video':
        return 'from-highlight to-contrast';
      case 'live-event':
        return 'from-contrast to-secondary';
      case 'documentary':
        return 'from-secondary to-highlight';
      default:
        return 'from-primary to-secondary';
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-accent to-highlight/20 rounded-2xl overflow-hidden shadow-premium group cursor-pointer min-w-[280px] md:min-w-[320px] border border-primary/10 hover:border-secondary/30 transition-all duration-500 card-hover"
      whileHover={{ 
        scale: 1.05,
        y: -5
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <div className={`bg-gradient-to-r ${getTypeColor()} text-accent px-3 py-1 rounded-full text-xs font-body font-medium flex items-center space-x-1 shadow-premium backdrop-blur-sm`}>
            {getTypeIcon()}
            <span>{getTypeLabel()}</span>
          </div>
        </div>

        {/* Play Button Overlay */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-20 h-20 bg-gradient-to-r from-secondary to-contrast rounded-full flex items-center justify-center shadow-premium backdrop-blur-sm border-2 border-accent/20">
            <Play className="w-10 h-10 text-accent ml-1" />
          </div>
        </motion.div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h3 className="text-accent font-heading font-semibold text-sm mb-1">
            {title}
          </h3>
          <p className="text-accent/80 font-body text-xs line-clamp-1">
            {description}
          </p>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-heading font-bold text-primary mb-2 line-clamp-1 group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-primary/70 font-body text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-primary/60 font-body text-xs">Featured</span>
          </div>
          <motion.div 
            className="text-secondary font-body text-sm font-medium group-hover:text-contrast transition-colors duration-300 flex items-center space-x-1"
            whileHover={{ x: 5 }}
          >
            <span>View</span>
            <Play className="w-3 h-3" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CreationCard;