import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PodcastCard from '../components/PodcastCard';
import RequestServiceModal from '../components/RequestServiceModal';
import {
  Mic,
  Video,
  Radio,
  Camera,
  Headphones,
  PlayCircle,
  TrendingUp,
  Users,
  Award,
  Sparkles,
} from 'lucide-react';

const OurPodcast = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const podcasts = [
    {
      title: 'Vibes Unplugged Podcast',
      description: 'Engaging conversations with influential personalities from politics, administration, and leadership.',
      image: '/images/Banner1.jpeg',
      duration: '45 min',
      episodes: 24,
    },
    {
      title: 'Professional Interview Series',
      description: 'In-depth discussions with experts, advocates, and thought leaders.',
      image: '/images/Banner2.jpeg',
      duration: '38 min',
      episodes: 18,
    },
    {
      title: 'Leadership Chronicles',
      description: 'Inspiring conversations with industry leaders and visionaries who are shaping the future.',
      image: '/images/Banner3.jpeg',
      duration: '52 min',
      episodes: 31,
    },
    {
      title: 'Expert Conversations',
      description: 'Deep dive discussions with legal experts, advocates, and policy makers.',
      image: '/images/Banner4.jpeg',
      duration: '41 min',
      episodes: 15,
    },
    {
      title: 'Behind the Scenes',
      description: 'Exclusive look into our production process and the stories behind our content.',
      image: '/images/banner5.jpeg',
      duration: '35 min',
      episodes: 22,
    },
    {
      title: 'Future of Media',
      description: 'Forward-thinking discussions on the evolution of media and digital content.',
      image: '/images/banner6.jpeg',
      duration: '47 min',
      episodes: 12,
    },
  ];

  const stats = [
    { icon: PlayCircle, number: '1M+', label: 'Monthly Listeners', color: 'from-blue-400 to-purple-500' },
    { icon: TrendingUp, number: '95%', label: 'Completion Rate', color: 'from-green-400 to-blue-500' },
    { icon: Users, number: '500+', label: 'Featured Guests', color: 'from-pink-400 to-red-400' },
    { icon: Award, number: '25+', label: 'Podcast Awards', color: 'from-yellow-400 to-orange-500' },
  ];

  const features = [
    {
      icon: Mic,
      title: 'Professional Recording',
      description: 'State-of-the-art studio equipment ensuring crystal-clear audio quality for every episode.',
    },
    {
      icon: Video,
      title: 'Multi-Format Content',
      description: 'Audio podcasts, video interviews, and live streaming capabilities for maximum reach.',
    },
    {
      icon: Headphones,
      title: 'Expert Production',
      description: 'Professional editing, mixing, and mastering by our experienced audio engineers.',
    },
    {
      icon: Radio,
      title: 'Wide Distribution',
      description: 'Available on all major podcast platforms including Spotify, Apple Podcasts, and Google Podcasts.',
    },
  ];

  return (
    <div className="pt-16 md:pt-20 font-body bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-primary section-divider">
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
                Premium Podcast Collection
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Our Podcasts
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto font-body leading-relaxed">
              Discover our collection of compelling podcasts featuring influential 
              personalities from politics, administration, and leadership. Each episode 
              brings you closer to the minds that shape our world.
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-secondary section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Podcast Performance
            </h2>
            <p className="text-xl text-primary/70 font-body">
              Our podcasts reach millions of engaged listeners worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-elegant`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <motion.div 
                  className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-primary/70 font-body font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts Grid */}
      <section className="py-24 bg-gradient-cool section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Featured Podcasts
            </h2>
            <p className="text-xl text-primary/70 font-body">
              Listen to our most popular episodes and exclusive interviews
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {podcasts.map((podcast, index) => (
              <PodcastCard
                key={podcast.title}
                {...podcast}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="btn-primary px-8 py-4 text-lg font-heading font-semibold rounded-xl micro-bounce"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Listen to All Episodes
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-soft section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Why Our Podcasts Stand Out
            </h2>
            <p className="text-xl text-primary/70 font-body">
              Professional production meets compelling content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white/20 card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <feature.icon className="w-16 h-16 text-secondary mx-auto mb-6" />
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-primary/70 font-body text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-primary section-divider">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Start Your Podcast?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed font-body">
              Whether you're looking to share your story or need professional
              podcast production services, we're here to make it happen.
            </p>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="btn-secondary px-8 py-4 text-lg font-heading font-semibold rounded-xl micro-bounce"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Service
            </motion.button>
          </motion.div>
        </div>
      </section>

      <RequestServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default OurPodcast;