import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, TrendingUp, Zap, Target, Globe, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Home = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Stunning, responsive websites that convert visitors into customers.',
      link: '/services/web-design'
    },
    {
      icon: Zap,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technology.',
      link: '/services/web-development'
    },
    {
      icon: TrendingUp,
      title: 'SEO',
      description: 'Boost your search rankings and drive organic traffic.',
      link: '/services/seo'
    },
    {
      icon: Target,
      title: 'PPC',
      description: 'Targeted advertising campaigns that maximize your ROI.',
      link: '/services/ppc'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand loyalty across platforms.',
      link: '/services/social-media-marketing'
    },
    {
      icon: Award,
      title: 'Graphic Design',
      description: 'Eye-catching visuals that communicate your brand message.',
      link: '/services/graphic-design'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Ltd',
      content: 'CS Digital Media transformed our online presence completely. Our website traffic increased by 300% in just 6 months!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      content: 'The team\'s expertise in PPC advertising helped us achieve a 400% ROI on our campaigns. Absolutely phenomenal results!',
      rating: 5
    },
    {
      name: 'Emma Williams',
      company: 'Creative Studios',
      content: 'Professional, creative, and results-driven. They delivered exactly what we needed and more. Highly recommended!',
      rating: 5
    }
  ];

  const portfolio = [
    // {
    //   title: 'E-commerce Fashion Store',
    //   description: 'Modern, conversion-focused design for luxury fashion brand',
    //   category: 'E-commerce',
    //   image: 'Modern e-commerce fashion website on a laptop screen'
    //   imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    // },
    {
      title: 'Ocean Pearl Villas',
      description: 'Luxury villa rental platform with seamless booking experience',
      category: 'Hospitality / Reservation',
      image: 'example of a beautiful web design for a villa rental service',
      imageUrl: '/ocean-pearl-villas-screenshot-1.png'
    },
    {
      title: 'Covenant Beard Care Store',
      description: 'Modern, conversion-focused design for luxury men\'s grooming brand',
      category: 'E-commerce',
      image: 'image of a modern e-commerce mens grooming website on a laptop screen',
      imageUrl: '/covenant-beardcare-co-screenshot-1.jpeg'
    },
    {
      title: 'Ultimate Damp & Mould Care',
      description: 'Local service website with strong calls to action and local SEO',
      category: 'Local Service',
      image: 'screenshot of a local service website for damp and mould care',
      imageUrl: '/ultimate-dmc-screenshot-1.png'
    },
    {
      title: 'Soul Of Scent Perfume Store',
      description: 'Modern, conversion-focused design for luxury perfume brand',
      category: 'E-commerce',
      image: 'image of a modern e-commerce perfume website on a laptop screen',
      imageUrl: '/the-soul-of-scent-screenshot-1.png'
    },
    // {
    //   title: 'Tech Startup Landing',
    //   description: 'Clean, professional design for SaaS company',
    //   category: 'Technology',
    //   image: 'Sleek landing page for a tech startup on a tablet'
    // },
    // {
    //   title: 'Restaurant Website',
    //   description: 'Appetizing design with online reservation system',
    //   category: 'Hospitality',
    //   image: 'Vibrant restaurant website showcasing delicious food'
    // },
    // {
    //   title: 'Healthcare Portal',
    //   description: 'User-friendly design for medical practice',
    //   category: 'Healthcare',
    //   image: 'Clean and professional healthcare portal on a desktop computer'
    // }
  ];

  const blogPosts = [
    {
      title: 'The Future of Digital Marketing: Trends to Watch in 2024',
      excerpt: 'Discover the latest digital marketing trends that will shape the industry in 2024...',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Digital Marketing',
      image: 'Digital marketing trends 2024 with AI and automation technologies'
    },
    {
      title: 'How to Optimize Your Website for Voice Search',
      excerpt: 'Voice search is changing how people find information online. Learn how to optimize...',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'SEO',
      image: 'Voice search optimization on mobile device'
    },
    {
      title: 'The Power of Video Marketing in 2024',
      excerpt: 'Video content continues to dominate social media. Discover how to leverage video...',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Social Media',
      image: 'Video marketing content creation studio'
    }
  ];

  const handleNewsletterSubmit = () => {
    toast({
      title: "🚧 Newsletter signup isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handlePostClick = () => {
    toast({
      title: "🚧 Blog posts aren't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency London | CS Digital Media</title>
        <meta name="description" content="Looking for a digital marketing agency in London? We offer web design, SEO, PPC, and social media marketing. Get in touch today to elevate your brand." />
        <meta property="og:title" content="Digital Marketing Agency London | CS Digital Media" />
        <meta property="og:description" content="Looking for a digital marketing agency in London? We offer web design, SEO, PPC, and social media marketing. Get in touch today to elevate your brand." />
        <link rel="canonical" href="https://csdigitalmedia.co.uk/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-gradient-radial"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white text-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Digital Marketing
                <span className="gradient-text block">Agency London</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We're CS Digital Media, London's premier digital marketing agency. 
                We help businesses grow through innovative web design, development, SEO, and cutting edge strategies.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/contact">
                  <Button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all">
                    View Our Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Core <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer comprehensive digital marketing solutions to help your business thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.link}>
                  <div className="gradient-border card-hover">
                    <div className="gradient-border-content p-8 h-full">
                      <service.icon className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-6 flex items-center text-blue-500 font-semibold">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/services">
              <Button className="btn-secondary px-8 py-3 text-lg font-semibold rounded-lg">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Who <span className="gradient-text">We Are</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Located in the heart of Mayfair, London, we combine local expertise with global digital marketing strategies. 
                Our team of experts is dedicated to delivering results that matter to your business.
              </p>
              <ul className="space-y-4 mb-8">
                {/* <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  Proven track record with 500+ successful projects
                </li> */}
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  Expert team with 5+ years of industry experience
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                  98% client satisfaction rate
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></div>
                  Cutting-edge strategies and technologies
                </li>
              </ul>
              <Link to="/about">
                <Button className="btn-primary px-8 py-3 text-lg font-semibold rounded-lg">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
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
                alt="example of a digital marketing agency london office" src="https://images.unsplash.com/photo-1567080185975-88eedc2b273a" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Recent <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud of the work we do. Explore some of our recent projects and see how we've helped businesses like yours succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to="/our-work">
                  <div className="relative overflow-hidden rounded-lg">
                    <img   
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={project.image} src={project.imageUrl || "https://images.unsplash.com/photo-1572177812156-58036aae439c"} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-sm text-blue-400 mb-2">{project.category}</div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/our-work">
              <Button className="btn-secondary px-8 py-3 text-lg font-semibold rounded-lg">
                View All Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-20 bg-gray-50 hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Latest <span className="gradient-text">Blogs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest digital marketing insights, tips, and trends from our expert team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden card-hover cursor-pointer"
                onClick={handlePostClick}
              >
                <div className="relative">
                  <img   
                    className="w-full h-48 object-cover"
                    alt={post.image} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/blog">
              <Button className="btn-secondary px-8 py-3 text-lg font-semibold rounded-lg">
                Read More Blogs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 p-8 rounded-lg card-hover"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how we can help you achieve your digital marketing goals. 
              Get in touch with our team today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email for updates"
                  className="px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
                <Button 
                  onClick={handleNewsletterSubmit}
                  variant="outline" 
                  className="px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all rounded-lg"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;