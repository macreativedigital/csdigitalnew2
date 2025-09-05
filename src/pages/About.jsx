import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Award, Target, Zap, Heart, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that directly impact your business growth and success. Your goals are our metrics.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships based on trust, transparency, and mutual respect.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of digital trends, leveraging cutting-edge technologies and strategies to give you a competitive edge.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from strategic planning to pixel-perfect execution.'
    }
  ];

  const team = [
    {
      name: 'Chris Smith',
      role: 'Founder & CEO',
      description: 'With over a decade in digital marketing, Chris leads our strategic vision and is passionate about helping clients achieve their goals.',
      image: 'Professional CEO in modern London office'
    },
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      description: 'Sarah brings creative excellence and a keen eye for user experience to every project, ensuring designs are both beautiful and effective.',
      image: 'Creative director working on design projects'
    },
    {
      name: 'Michael Chen',
      role: 'Technical Lead',
      description: 'Michael is our tech guru, ensuring all our web solutions are robust, scalable, and built on the latest technologies.',
      image: 'Technical lead developer coding'
    },
    {
      name: 'Emma Williams',
      role: 'Marketing Strategist',
      description: 'Emma develops data-driven marketing strategies that deliver exceptional ROI and help clients dominate their markets.',
      image: 'Marketing strategist analyzing data'
    }
  ];

  const milestones = [
    { year: '2019', event: 'CS Digital Media Founded', description: 'Started with a vision to transform digital marketing in London, armed with passion and expertise.' },
    { year: '2020', event: '50+ Happy Clients', description: 'Reached our first major milestone of serving over 50 satisfied clients across various industries.' },
    { year: '2021', event: 'Award Recognition', description: 'Honored with the "Best Digital Agency" award from the prestigious London Business Awards.' },
    { year: '2022', event: 'Team Expansion', description: 'Grew our in-house team to 15+ specialists, covering all digital marketing disciplines.' },
    { year: '2023', event: '500+ Projects Completed', description: 'Successfully delivered over 500 impactful digital marketing projects, driving significant client growth.' },
    { year: '2024', event: 'Global Reach', description: 'Expanded our services to support clients across Europe and North America, delivering global strategies.' }
  ];

  return (
    <>
      <Helmet>
        <title>About CS Digital Media - London's Premier Digital Marketing Team</title>
        <meta name="description" content="Learn about CS Digital Media's journey, values, and expert team. Based in Mayfair London, we're passionate about transforming businesses through digital marketing excellence." />
        <meta property="og:title" content="About CS Digital Media - London's Premier Digital Marketing Team" />
        <meta property="og:description" content="Learn about CS Digital Media's journey, values, and expert team. Based in Mayfair London, we're passionate about transforming businesses through digital marketing excellence." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">CS Digital Media</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We are a passionate team of digital marketing experts based in the heart of London, 
              dedicated to helping businesses thrive in the digital age through strategy, creativity, and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2019 by Chris Smith, CS Digital Media began with a simple yet powerful vision: 
                  to demystify the digital world and help businesses unlock their full potential through innovative marketing strategies.
                </p>
                <p>
                  From our base at Level 1, Devonshire House, One Mayfair Place in London W1J, 
                  we've grown from a small, ambitious startup into one of London's most trusted digital marketing agencies, known for our personalised approach and tangible results.
                </p>
                <p>
                  Our journey has been one of continuous learning, adaptation, and an unwavering commitment 
                  to delivering exceptional results. Today, we're proud to have helped over 150 
                  businesses transform their digital presence and achieve remarkable growth.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img  
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
                alt="CS Digital Media London office in Mayfair"
               src="https://images.unsplash.com/photo-1690191886622-fd8d6cda73bd" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles are the bedrock of our agency. They guide our decisions, shape our culture, and define how we work with our clients and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="gradient-border card-hover">
                  <div className="gradient-border-content p-8 h-full">
                    <value.icon className="w-12 h-12 text-blue-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of strategists, creatives, and tech specialists brings together years of experience to deliver outstanding results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <img  
                    className="w-48 h-48 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform"
                    alt={`${member.name} - ${member.role} at CS Digital Media`}
                   src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-400 font-semibold mb-4">
                  {member.role}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming one of London's trusted digital marketing partners.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center w-full mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-white p-6 rounded-lg shadow-lg`}>
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50 hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Visit Us in <span className="gradient-text">Mayfair</span>
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Our office is strategically located at Level 1, Devonshire House, One Mayfair Place, 
                  London W1J, in the heart of one of London's most prestigious business districts.
                </p>
                <p>
                  This prime location allows us to stay connected with London's vibrant business community 
                  while providing easy access for our clients across the city and beyond. We'd love to welcome you for a coffee and a chat about your digital future.
                </p>
                <div className="flex items-center space-x-2 text-blue-600">
                  <Globe className="w-5 h-5" />
                  <span className="font-semibold">Level 1, Devonshire House, One Mayfair Pl, London W1J</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img  
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
                alt="Mayfair London business district where CS Digital Media is located"
               src="https://images.unsplash.com/photo-1683464099354-b609a9ac396a" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us on Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for passionate talent and ambitious clients. If you're ready to make a digital impact, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                  Work With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;