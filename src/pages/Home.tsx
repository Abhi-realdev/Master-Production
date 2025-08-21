import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import CreationsCarousel from '../components/CreationsCarousel';
import TeamMember from '../components/TeamMember';
import { Play, Users, Award, Mic, Star, TrendingUp, Globe } from 'lucide-react';
import { creations } from '../data/creations';

const Home = () => {
  const carouselItems = [
    {
      id: 1,
      title: 'Political Deep Dive',
      description: 'Exclusive interviews with leading political figures',
      image: 'https://images.pexels.com/photos/6115756/pexels-photo-6115756.jpeg',
      type: 'image' as const,
    },
    {
      id: 2,
      title: 'Administrative Excellence',
      description: 'Behind-the-scenes with top administrators',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
      type: 'image' as const,
    },
    {
      id: 3,
      title: 'Leadership Stories',
      description: 'Inspiring conversations with industry leaders',
      image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg',
      type: 'image' as const,
    },
    {
      id: 4,
      title: 'Policy Makers',
      description: 'Insights from policy creators and influencers',
      image: 'https://images.pexels.com/photos/6114991/pexels-photo-6114991.jpeg',
      type: 'image' as const,
    },
  ];

  const teamMembers = [
    {
      name: 'Alex Richardson',
      position: 'Executive Producer',
      bio: 'Award-winning producer with 15+ years in media production.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      name: 'Sarah Chen',
      position: 'Creative Director',
      bio: 'Visionary creative director specializing in compelling narratives.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg',
    },
    {
      name: 'Michael Torres',
      position: 'Senior Audio Engineer',
      bio: 'Technical expert ensuring pristine audio quality for all projects.',
      image: 'https://images.pexels.com/photos/3777947/pexels-photo-3777947.jpeg',
    },
  ];

  const clients = [
    'https://images.pexels.com/photos/6803516/pexels-photo-6803516.jpeg',
    'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
    'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg',
    'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg',
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Interviews Conducted', color: 'from-secondary to-contrast' },
    { icon: Award, number: '50+', label: 'Industry Awards', color: 'from-highlight to-contrast' },
    { icon: Mic, number: '1000+', label: 'Hours of Content', color: 'from-contrast to-secondary' },
    { icon: Play, number: '10M+', label: 'Total Views', color: 'from-secondary to-highlight' },
  ];

  const achievements = [
    { icon: Star, number: '4.9/5', label: 'Client Satisfaction', description: 'Based on 200+ reviews' },
    { icon: TrendingUp, number: '300%', label: 'Growth Rate', description: 'Year over year expansion' },
    { icon: Globe, number: '25+', label: 'Countries Reached', description: 'Global audience engagement' },
  ];

  return (
    <div className="pt-16 md:pt-20 font-body">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
            alt="Master's Production Studio"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary font-body font-medium text-sm rounded-full border border-secondary/30 backdrop-blur-sm">
              🎙️ Premium Podcast Production
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-gradient-primary leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Master's Production
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-accent/90 mb-8 max-w-4xl mx-auto font-body leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Creating compelling podcasts with influential personalities from
            administration to politics. Where important conversations happen.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              className="btn-primary px-8 py-4 text-lg font-heading font-semibold rounded-xl micro-bounce"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Podcasts
            </motion.button>
            <motion.button
              className="btn-secondary px-8 py-4 text-lg font-heading font-semibold rounded-xl micro-bounce"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Service
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-highlight/20 rounded-full blur-xl"
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </section>

      {/* Stats Section */}
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
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-primary/70 font-body">
              Measurable success in podcast production excellence
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
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-premium`}>
                  <stat.icon className="w-10 h-10 text-accent" />
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

      {/* Featured Content Carousel */}
      <section className="py-24 bg-gradient-primary section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent mb-4">
              Featured Content
            </h2>
            <p className="text-xl text-accent/80 max-w-3xl mx-auto font-body">
              Discover our latest podcast episodes and exclusive interviews with
              prominent figures in politics and administration.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Carousel items={carouselItems} />
          </motion.div>
        </div>
      </section>

      {/* Our Creation Section */}
      <section className="py-24 bg-gradient-highlight section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Our Creation
            </h2>
            <p className="text-xl text-primary/70 max-w-3xl mx-auto font-body">
              Explore our portfolio of compelling podcasts, video productions, and exclusive content
              featuring influential personalities from politics and administration.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CreationsCarousel creations={creations} />
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-primary section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-accent/80 font-body">
              Excellence backed by measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center bg-accent/10 backdrop-blur-sm p-8 rounded-2xl border border-highlight/20 card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <achievement.icon className="w-16 h-16 text-highlight mx-auto mb-6" />
                <div className="text-4xl font-heading font-bold text-accent mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-heading font-semibold text-accent mb-2">
                  {achievement.label}
                </h3>
                <p className="text-accent/70 font-body text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
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
              Trusted Partners
            </h2>
            <p className="text-xl text-primary/70 font-body">
              Collaborating with leading organizations and personalities
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="bg-primary/5 p-6 rounded-2xl hover:bg-primary/10 transition-all duration-300 card-hover border border-primary/10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={client}
                  alt={`Partner ${index + 1}`}
                  className="w-full h-24 object-cover rounded-xl opacity-70 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-24 bg-gradient-primary section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary font-body font-medium text-sm rounded-full border border-secondary/30 backdrop-blur-sm mb-4">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent mb-6">
                  Crafting Conversations That Matter
                </h2>
              </div>
              
              <p className="text-lg text-accent/90 font-body leading-relaxed">
                Master's Production was founded with a vision to create meaningful
                conversations that shape public discourse. We specialize in
                producing high-quality podcasts featuring influential
                personalities from the worlds of politics, administration, and
                leadership.
              </p>
              
              <p className="text-lg text-accent/90 font-body leading-relaxed">
                Our commitment to excellence and storytelling has made us the
                preferred choice for prominent figures who want to share their
                insights and experiences with the world.
              </p>

              <motion.button
                className="btn-secondary px-8 py-4 font-heading font-semibold rounded-xl micro-bounce"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg"
                  alt="Our Studio"
                  className="w-full h-96 object-cover rounded-2xl shadow-premium"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl" />
                
                {/* Floating Stats */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-secondary text-accent p-4 rounded-2xl shadow-premium"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl font-heading font-bold">500+</div>
                  <div className="text-sm font-body">Interviews</div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-highlight text-primary p-4 rounded-2xl shadow-premium"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl font-heading font-bold">50+</div>
                  <div className="text-sm font-body">Awards</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-gradient-highlight section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-primary/70 max-w-3xl mx-auto font-body">
              The creative minds behind our award-winning productions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                {...member}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;