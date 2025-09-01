import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TeamMember from '../components/TeamMember';
import ModernTimeline from '../components/ModernTimeline';
import { Target, Eye, Award, Users, Star, TrendingUp, Globe, Sparkles } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Vishal Raj',
      position: 'Founder & Executive Producer',
      bio: 'Founder & Director with expertise in creating compelling conversations with influential personalities.',
      image: '/images/team_vishal.jpeg',
    },
    {
      name: 'Vishal Singh',
      position: 'Podcast Co-Host',
      bio: 'Experienced co-host bringing dynamic energy and professional insights to every conversation.',
      image: '/images/team_vishal_singh.jpeg',
    },
    {
      name: 'Manish Zain',
      position: 'Chief Video Editor',
      bio: 'Expert video editor with years of experience in creating visually stunning content and seamless post-production.',
      image: '/images/team_manish.png',
    },
    {
      name: 'Rajesh Vikram',
      position: 'Content Analyst',
      bio: 'Strategic content analyst ensuring quality, relevance, and impact in every podcast episode and production.',
      image: '/images/team_rajesh.jpg',
    },
    {
      name: 'Janvi Singh',
      position: 'Content Researcher',
      bio: 'Dedicated researcher who ensures every interview is well-prepared with thorough background analysis and insights.',
      image: '/images/photo.jpeg',
    },
    {
      name: 'Avishek Singh',
      position: 'Edit & Motiongrapher',
      bio: 'Creative motion graphics specialist and editor bringing visual storytelling to life with innovative design.',
      image: '/images/photo1.jpeg',
    },
    {
      name: 'Abhimanyu Desai',
      position: 'IT & Digital Media Manager',
      bio: 'Technology expert managing our digital infrastructure and ensuring seamless online presence and distribution.',
      image: '/images/team_abhimanyu.png',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description:
        'To create compelling podcast content that bridges the gap between influential personalities and the public, fostering informed discourse on politics and administration.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description:
        'To become the leading platform for meaningful conversations with decision-makers, setting the standard for professional podcast production worldwide.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We are committed to delivering exceptional quality in every aspect of production, from technical execution to storytelling craftsmanship.',
    },
    {
      icon: Users,
      title: 'Impact',
      description:
        'Our content influences public understanding and contributes to more informed democratic participation and administrative transparency.',
    },
  ];

  return (
    <div className="pt-16 md:pt-20 font-body bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-primary section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
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
                  Our Journey
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                About Master's Production
              </h1>
              <p className="text-xl text-white/90 font-body leading-relaxed mb-8">
                We are a premier podcast production house dedicated to creating
                exceptional content featuring influential personalities from the
                worlds of politics, administration, and leadership.
              </p>
              <p className="text-lg text-white/80 font-body leading-relaxed">
                Since our founding, we've built a reputation for excellence,
                professionalism, and the ability to facilitate meaningful
                conversations that matter to society.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src="/images/WhatsApp Image 2025-08-10 at 11.26.40 AM.jpeg"
                  alt="Master's Production Studio"
                  className="w-full h-96 object-cover rounded-2xl shadow-premium"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl" />
                
                {/* Floating Stats */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-primary text-white p-4 rounded-2xl shadow-premium"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="text-2xl font-heading font-bold">500+</div>
                  <div className="text-sm font-body">Interviews</div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gradient-accent text-primary p-4 rounded-2xl shadow-premium"
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

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-primary/70 font-body">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center bg-white/20 backdrop-blur-sm p-8 rounded-2xl border border-white/20 card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-primary/70 font-body text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Timeline Section */}
      <ModernTimeline />

      {/* Team Section */}
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
              The talented professionals behind our award-winning productions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                {...member}
                delay={index * 0.1}
              />
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed font-body">
              Whether you're looking to share your story or need professional
              podcast production services, we're here to make it happen.
            </p>
            <motion.button
            <Link to="/contact">
              <motion.button
                className="btn-secondary px-8 py-4 text-lg font-heading font-semibold rounded-xl micro-bounce"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;