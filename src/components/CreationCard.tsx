import React from 'react';
import { motion } from 'framer-motion';
import { Play, Mic, Video, Radio, FileText, Users } from 'lucide-react';

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
      case 'documentary':
        return <FileText className="w-5 h-5" />;
      case 'interview-series':
        return <Users className="w-5 h-5" />;
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
        return 'from-blue-400 to-purple-500';
      case 'video':
        return 'from-pink-400 to-red-400';
      case 'live-event':
        return 'from-green-400 to-blue-500';
      case 'documentary':
        return 'from-yellow-400 to-orange-500';
      case 'interview-series':
        return 'from-purple-400 to-pink-500';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-elegant group cursor-pointer min-w-[280px] md:min-w-[320px] border border-white/20 hover:border-primary/30 transition-all duration-500 card-hover"
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
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 lazy-image"
          loading="lazy"
          onLoad={(e) => e.currentTarget.classList.add('loaded')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <div className={`bg-gradient-to-r ${getTypeColor()} text-white px-3 py-1 rounded-full text-xs font-body font-medium flex items-center space-x-1 shadow-elegant backdrop-blur-sm`}>
            {getTypeIcon()}
            <span>{getTypeLabel()}</span>
          </div>
        </div>

        {/* Play Button Overlay */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-elegant border-2 border-white/30">
            <Play className="w-10 h-10 text-white ml-1" />
          </div>
        </motion.div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h3 className="text-white font-heading font-semibold text-sm mb-1">
            {title}
          </h3>
          <p className="text-white/80 font-body text-xs line-clamp-1">
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
            <div className="w-2 h-2 bg-gradient-primary rounded-full animate-pulse-soft" />
            <span className="text-primary/60 font-body text-xs">Featured</span>
          </div>
          <motion.div 
            className="text-secondary font-body text-sm font-medium group-hover:text-primary transition-colors duration-300 flex items-center space-x-1"
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