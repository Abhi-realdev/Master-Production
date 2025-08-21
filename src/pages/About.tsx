import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from '../components/TeamMember';
import { Target, Eye, Award, Users, Star, TrendingUp, Globe } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Richardson',
      position: 'Executive Producer & Founder',
      bio: 'Award-winning producer with 15+ years in media production. Led productions for major political figures and administrative leaders.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      name: 'Sarah Chen',
      position: 'Creative Director',
      bio: 'Visionary creative director specializing in compelling narratives. Former journalist with expertise in political communication.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg',
    },
    {
      name: 'Michael Torres',
      position: 'Senior Audio Engineer',
      bio: 'Technical expert ensuring pristine audio quality. Grammy-nominated engineer with experience in broadcast television.',
      image: 'https://images.pexels.com/photos/3777947/pexels-photo-3777947.jpeg',
    },
    {
      name: 'Jessica Park',
      position: 'Video Director',
      bio: 'Cinematographer and video director with a passion for visual storytelling. Specializes in high-profile interview setups.',
      image: 'https://images.pexels.com/photos/6115756/pexels-photo-6115756.jpeg',
    },
    {
      name: 'David Wilson',
      position: 'Content Strategist',
      bio: 'Strategic content planner with expertise in audience development and distribution. Former political communications advisor.',
      image: 'https://images.pexels.com/photos/6114991/pexels-photo-6114991.jpeg',
    },
    {
      name: 'Maria Rodriguez',
      position: 'Guest Relations Manager',
      bio: 'Expert in high-profile guest coordination and relationship management. Background in diplomatic and administrative protocols.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
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

  const milestones = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'Master\'s Production was founded with a vision to create impactful podcast content.',
      icon: Star,
    },
    {
      year: '2019',
      title: 'First Major Interview',
      description: 'Conducted our first high-profile political interview, setting the tone for our future work.',
      icon: Users,
    },
    {
      year: '2020',
      title: 'Studio Expansion',
      description: 'Opened our state-of-the-art recording facilities with professional-grade equipment.',
      icon: TrendingUp,
    },
    {
      year: '2021',
      title: 'Award Recognition',
      description: 'Received multiple industry awards for excellence in podcast production.',
      icon: Award,
    },
    {
      year: '2022',
      title: 'Digital Innovation',
      description: 'Launched live streaming capabilities and enhanced digital distribution.',
      icon: Globe,
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded operations to serve international clients and global audiences.',
      icon: Target,
    },
  ];

  return (
    <div className="pt-16 md:pt-20 font-body">
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
                <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary font-body font-medium text-sm rounded-full border border-secondary/30 backdrop-blur-sm">
                  🎯 Our Journey
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-accent mb-6">
                About Master's Production
              </h1>
              <p className="text-xl text-accent/90 font-body leading-relaxed mb-8">
                We are a premier podcast production house dedicated to creating
                exceptional content featuring influential personalities from the
                worlds of politics, administration, and leadership.
              </p>
              <p className="text-lg text-accent/80 font-body leading-relaxed">
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
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
                  alt="Master's Production Studio"
                  className="w-full h-96 object-cover rounded-2xl shadow-premium"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl" />
                
                {/* Floating Stats */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-secondary text-accent p-4 rounded-2xl shadow-premium"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="text-2xl font-heading font-bold">500+</div>
                  <div className="text-sm font-body">Interviews</div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-highlight text-primary p-4 rounded-2xl shadow-premium"
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

      {/* Values Section */}
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
                className="text-center bg-primary/5 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-contrast rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
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

      {/* Our Journey Timeline Section */}
      <section className="py-24 bg-gradient-primary section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent mb-4">
              Our Creative Journey
            </h2>
            <p className="text-xl text-accent/80 font-body">
              Follow our winding path of growth and innovation
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Curved Snake Timeline Path */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 1400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M100 80 Q200 120 300 100 T500 180 Q650 220 550 300 T350 420 Q200 460 400 540 T650 680 Q750 720 650 800 T400 920 Q300 960 500 1040 T700 1180 Q800 1220 700 1300"
                stroke="url(#snakeGradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10,5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
              <defs>
                <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E63946" />
                  <stop offset="33%" stopColor="#A8DADC" />
                  <stop offset="66%" stopColor="#457B9D" />
                  <stop offset="100%" stopColor="#E63946" />
                </linearGradient>
              </defs>
            </svg>

            <div className="relative space-y-24">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 3 === 0 ? 'justify-start' : 
                    index % 3 === 1 ? 'justify-center' : 'justify-end'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Animated Timeline Node */}
                  <motion.div 
                    className="absolute w-8 h-8 bg-gradient-to-r from-secondary to-highlight rounded-full z-10 shadow-premium border-4 border-accent"
                    style={{
                      left: index % 3 === 0 ? '12%' : 
                            index % 3 === 1 ? '50%' : '88%',
                      transform: 'translateX(-50%)'
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <milestone.icon className="w-4 h-4 text-accent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </motion.div>

                  {/* Content */}
                  <div
                    className={`w-80 ${
                      index % 3 === 0 ? 'mr-auto text-left' : 
                      index % 3 === 1 ? 'mx-auto text-center' : 'ml-auto text-right'
                    }`}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-accent/10 to-highlight/10 backdrop-blur-sm p-8 rounded-2xl border border-highlight/20 shadow-premium card-hover"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-3xl font-heading font-bold text-gradient-primary mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-accent mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-accent/80 font-body leading-relaxed">{milestone.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              The talented professionals behind our award-winning productions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-accent mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-accent/80 mb-8 leading-relaxed font-body">
              Whether you're looking to share your story or need professional
              podcast production services, we're here to make it happen.
            </p>
            <motion.button
              className="btn-secondary px-8 py-4 text-lg font-heading font-semibold rounded-xl micro-bounce"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;