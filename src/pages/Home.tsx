import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import CreationsCarousel from '../components/CreationsCarousel';
import TeamMember from '../components/TeamMember';
import DigitalServices from '../components/DigitalServices';
import { Play, Users, Award, Mic, Star, TrendingUp, Globe, Sparkles } from 'lucide-react';
import { creations } from '../data/creations';

const Home = () => {
  const carouselItems = [
    {
      id: 1,
      title: 'Vibes Unplugged Podcast',
      description: 'Exclusive conversations with influential personalities',
      image: 'images/Banner1.jpeg',
      type: 'image' as const,
    },
    {
      id: 2,
      title: 'Professional Studio Setup',
      description: 'State-of-the-art recording facilities',
      image: 'public/images/Banner2.jpeg',
      type: 'image' as const,
    },
    {
      id: 3,
      title: 'Expert Interviews',
      description: 'In-depth conversations with industry leaders',
      image: 'images/Banner3.jpeg',
      type: 'image' as const,
    },
    {
      id: 4,
      title: 'Behind the Scenes',
      description: 'Professional podcast production process',
      image: 'images/Banner4.jpeg',
      type: 'image' as const,
    },
    {
      id: 5,
      title: 'Premium Content Creation',
      description: 'High-quality production standards',
      image: 'images/banner5.jpeg',
      type: 'image' as const,
    },
    {
      id: 6,
      title: 'Professional Excellence',
      description: 'Award-winning podcast production',
      image: 'images/banner6.jpeg',
      type: 'image' as const,
    },
  ];

  const teamMembers = [
    {
      name: 'Vishal Raj',
      position: 'Founder & Executive Producer',
      bio: 'Founder & Director with expertise in creating compelling conversations with influential personalities.',
      image: 'public/images/team3.jpeg',
    },
    {
      name: 'Vishal Singh',
      position: 'Podcast Co-Host',
      bio: 'Experienced co-host bringing dynamic energy and professional insights to every conversation.',
      image: 'public/images/team_vishal_singh1.jpeg',
    },
    {
      name: 'Rajesh Vikram',
      position: 'Content Analyst',
      bio: 'Expert content analyst ensuring quality and relevance in every podcast episode.',
      image: 'public/images/team_rajesh1.jpg',
    },
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Interviews Conducted', color: 'from-blue-400 to-purple-500' },
    { icon: Award, number: '50+', label: 'Industry Recognition', color: 'from-pink-400 to-red-400' },
    { icon: Mic, number: '1000+', label: 'Hours of Content', color: 'from-green-400 to-blue-500' },
    { icon: Play, number: '10M+', label: 'Total Views', color: 'from-yellow-400 to-orange-500' },
  ];

  const achievements = [
    { icon: Star, number: '4.9/5', label: 'Client Satisfaction', description: 'Based on 200+ reviews' },
    { icon: TrendingUp, number: '300%', label: 'Growth Rate', description: 'Year over year expansion' },
    { icon: Globe, number: '25+', label: 'Countries Reached', description: 'Global audience engagement' },
  ];

  return (
    <div className="pt-16 md:pt-20 font-body bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-elegant">
        <div className="absolute inset-0">
          <img
            src="public/images/banner_5.png"
            alt="Master's Production Studio"
            className="w-full h-full object-fit:contain opacity-40"
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
            <span className="inline-block px-6 py-3 bg-gradient-secondary text-primary font-body font-medium text-sm rounded-full border border-white/20 backdrop-blur-sm shadow-elegant">
              <Sparkles className="inline w-4 h-4 mr-2" />
              Premium Podcast Production
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Master's Production
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto font-body leading-relaxed"
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
            <Link to="/our-work">
              <motion.button
                className="btn-primary px-8 py-4 text-lg font-heading font-semibold rounded-xl micro-bounce"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Podcasts
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="btn-secondary px-8 py-4 text-lg font-heading font-semibold rounded-xl micro-bounce"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Service
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-float"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-float"
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </section>

      {/* Stats Section */}
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Featured Content
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-body">
              Discover our latest podcast episodes and exclusive interviews with
              prominent figures in politics and administration.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="gpu-accelerated"
          >
            <Carousel items={carouselItems} />
          </motion.div>
        </div>
      </section>

      {/* Digital Services Section */}
      <DigitalServices />

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
            className="gpu-accelerated"
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-white/80 font-body">
              Excellence backed by measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <achievement.icon className="w-16 h-16 text-white mx-auto mb-6" />
                <div className="text-4xl font-heading font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-2">
                  {achievement.label}
                </h3>
                <p className="text-white/70 font-body text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company - Our Story Section */}
      <section className="py-24 bg-gradient-cool section-divider relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="public/images/team_vishal.jpeg"
            alt="Our Story Background"
            className="w-full h-full object-contain opacity-10"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-body font-medium text-sm rounded-full border border-primary/20 backdrop-blur-sm mb-4">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                  Crafting Conversations That Matter
                </h2>
              </div>
              
              <p className="text-lg text-primary/80 font-body leading-relaxed">
                Master's Production was founded with a vision to create meaningful
                conversations that shape public discourse. We specialize in
                producing high-quality podcasts featuring influential
                personalities from the worlds of politics, administration, and
                leadership.
              </p>
              
              <p className="text-lg text-primary/80 font-body leading-relaxed">
                Our commitment to excellence and storytelling has made us the
                preferred choice for prominent figures who want to share their
                insights and experiences with the world.
              </p>

              <Link to="/about">
                <motion.button
                  className="btn-primary px-8 py-4 font-heading font-semibold rounded-xl micro-bounce"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
  className="relative"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <div className="relative w-full h-96 rounded-2xl overflow-hidden">
    {/* Blurred background */}
    <img
      src="public/images/photo3.jpeg"
      alt="background blurred"
      className="absolute inset-0 w-full h-full object-cover blur-3xl scale-110"
    />

    {/* Foreground sharp image */}
    <img
      src="public/images/photo3.jpeg"
      alt="Master's Production Studio"
      className="relative w-full h-96 object-contain rounded-2xl shadow-premium z-10"
      loading="eager"
    />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl z-20" />

    {/* Floating Stats */}
    <motion.div
      className="absolute -top-4 -right-4 bg-gradient-primary text-white p-4 rounded-2xl shadow-premium z-30"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="text-2xl font-heading font-bold">500+</div>
      <div className="text-sm font-body">Interviews</div>
    </motion.div>

    <motion.div
      className="absolute -bottom-4 -left-4 bg-gradient-accent text-primary p-4 rounded-2xl shadow-premium z-30"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
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
