import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Shield, Zap, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WebDevelopment = () => {
  const features = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored solutions built with modern technologies and best practices to meet your unique business needs.'
    },
    {
      icon: Database,
      title: 'Scalable Architecture',
      description: 'Robust database and backend solutions designed for complex data management and future growth.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-level security measures to protect your application, data, and users from threats.'
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Lightning-fast applications optimized for speed, efficiency, and a seamless user experience.'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Vite', category: 'Build Tool' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'Supabase', category: 'Backend/DB' },
    { name: 'Framer Motion', category: 'Animation' },
    { name: 'TailwindCSS', category: 'Styling' },
    { name: 'Stripe', category: 'Payments' },
    { name: 'REST APIs', category: 'Integration' }
  ];

  const services = [
    {
      title: 'E-commerce Development',
      description: 'Custom online stores with secure payment integration, inventory management, and powerful analytics.',
      features: ['Secure Payment Gateways', 'Inventory & Order Management', 'Customer Accounts', 'Analytics Dashboard']
    },
    {
      title: 'Custom Web Applications',
      description: 'Complex, interactive web applications tailored to your business processes and requirements.',
      features: ['Bespoke Functionality', 'User Authentication', 'Third-Party API Integration', 'Real-time Features']
    },
    {
      title: 'CMS Development',
      description: 'Flexible content management systems that empower you to update and manage your website content with ease.',
      features: ['Easy Content Editing', 'Custom User Roles', 'Built-in SEO Tools', 'Media Library Management']
    },
    {
      title: 'API Development & Integration',
      description: 'Secure and scalable RESTful APIs to connect your services and enable seamless third-party integrations.',
      features: ['RESTful API Design', 'Clear Documentation', 'Secure Authentication', 'Performance Monitoring']
    }
  ];

  const testimonials = [
    {
      name: 'Mark Johnson',
      company: 'TechCorp Solutions',
      content: 'The custom web application CS Digital Media built for us has revolutionized our business operations. Their technical expertise and ongoing support are second to none.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      company: 'E-commerce Plus',
      content: 'Our new e-commerce platform is fast, secure, and beautiful. It led to a 400% increase in sales in just one quarter. The development team exceeded all our expectations.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Agency London | CS Digital Media</title>
        <meta name="description" content="Professional web development agency in London. Custom web applications, e-commerce solutions, and API development. Expert developers at CS Digital Media." />
        <meta property="og:title" content="Web Development Agency London | CS Digital Media" />
        <meta property="og:description" content="Professional web development agency in London. Custom web applications, e-commerce solutions, and API development. Expert developers at CS Digital Media." />
        <link rel="canonical" href="https://csdigitalmedia.co.uk/services/web-development" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="gradient-text">Web Development</span> Agency London
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We build powerful, scalable web applications with cutting-edge technology. 
                Our expert developers create custom solutions that drive business growth, efficiency, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/our-work">
                  <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img  
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
                alt="Web development agency london showcasing code on multiple monitors"
               src="/web-development-promo-image-1.jpeg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Development <span className="gradient-text">Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with a strategic business focus to deliver 
              web applications that solve real-world problems and create lasting value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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
                    <feature.icon className="w-12 h-12 text-blue-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our <span className="gradient-text">Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest, most reliable technologies and frameworks to build robust, 
              scalable applications that stand the test of time.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-lg font-bold text-black mb-2">{tech.name}</div>
                <div className="text-sm text-gray-600">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Development <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple websites to complex enterprise applications, 
              we have the expertise to bring your digital vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 p-8 rounded-lg card-hover"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
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
                Our Development <span className="gradient-text">Process</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Planning & Architecture</h3>
                    <p className="text-gray-600">We start by understanding your requirements to design a scalable architecture and select optimal technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Agile Development Sprints</h3>
                    <p className="text-gray-600">We use an agile development process with regular sprints, ensuring transparency and flexibility.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Quality Assurance & Testing</h3>
                    <p className="text-gray-600">Rigorous testing is integrated throughout the development cycle to ensure a bug-free, reliable product.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Deployment & Support</h3>
                    <p className="text-gray-600">We handle the smooth deployment of your application and provide ongoing maintenance and support.</p>
                  </div>
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
                alt="Development team collaborating on project"
               src="/web-development-process-promo-image-1.jpeg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients say about our web development services and the transformative impact on their businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-black">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
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
              Ready to Build Your <span className="gradient-text">Next Big Thing?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss your project requirements and build a custom web application 
              that drives your business forward. Contact us for a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all">
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopment;