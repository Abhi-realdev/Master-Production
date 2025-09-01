import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  bio,
  image,
  delay = 0,
}) => {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-elegant group cursor-pointer border border-white/20 hover:border-primary/30 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        boxShadow: "0 20px 40px rgba(26, 32, 44, 0.15)"
      }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="text-center w-full">
            <motion.div
              className="w-12 h-12 bg-gradient-accent rounded-full mx-auto mb-3 flex items-center justify-center shadow-elegant"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-heading font-bold text-lg">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-secondary font-body font-medium mb-3 text-xs">
          {position}
        </p>
        <p className="text-primary/70 font-body text-xs leading-relaxed line-clamp-3">
          {bio}
        </p>
      </div>
    </motion.div>
  );
};

export default TeamMember;