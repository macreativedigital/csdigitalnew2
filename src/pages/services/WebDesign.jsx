import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Smartphone, Zap, Users, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WebDesign = () => {
  const features = [
    {
      icon: Palette,
      title: 'Bespoke Custom Design',
      description: 'Unique, brand-focused designs that set you apart from the competition and tell your story memorably.'
    },
    {
      icon: Smartphone,
      title: 'Fully Responsive Layout',
      description: 'A perfect, seamless viewing experience across all devices and screen sizes, from mobile to desktop.'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Loading',
      description: 'Optimized for speed to ensure an exceptional user experience, reduce bounce rates, and improve SEO.'
    },
    {
      icon: Users,
      title: 'User-Centric (UI/UX)',
      description: 'Designed with your users at the core for maximum engagement, intuitive navigation, and high conversion rates.'
    }
  ];

  const process = [
    { step: '1. Research & Discovery', description: 'We dive deep to understand your brand, audience, and objectives to build a solid strategic foundation.' },
    { step: '2. Wireframing & Prototyping', description: 'We create the structural blueprint and interactive prototypes to define user flow and layout.' },
    { step: '3. Visual Design (UI)', description: 'Our creative team crafts beautiful, on-brand visual elements that bring the design to life.' },
    { step: '4. User Experience (UX) Refinement', description: 'We build and test interactive prototypes to ensure an intuitive and delightful user journey.' },
    { step: '5. Design Handoff & Support', description: 'We deliver pixel-perfect assets and style guides to developers and provide ongoing support.' }
  ];

  const portfolio = [
    // {
    //   title: 'E-commerce Fashion Store',
    //   description: 'Modern, conversion-focused design for luxury fashion brand.',
    //   category: 'E-commerce',
    //   image: "Modern e-commerce fashion website on a laptop screen"
    // },
    // {
    //   title: 'Tech Startup Landing',
    //   description: 'Clean, professional design for SaaS company.',
    //   category: 'Technology',
    //   image: "Sleek landing page for a tech startup on a tablet"
    // },
    // {
    //   title: 'Restaurant Website',
    //   description: 'Appetizing design with online reservation system.',
    //   category: 'Hospitality',
    //   image: "Vibrant restaurant website showcasing delicious food"
    // },
    // {
    //   title: 'Healthcare Portal',
    //   description: 'User-friendly design for medical practice.',
    //   category: 'Healthcare',
    //   image: "Clean and professional healthcare portal on a desktop computer"
    // }
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
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Boutique Fashion',
      content: 'CS Digital Media transformed our online presence. The new website design is not only stunning but also incredibly user-friendly, and it increased our online sales by 250%. The team understood our vision perfectly.',
      rating: 5
    },
    {
      name: 'David Thompson',
      company: 'Tech Solutions Ltd',
      content: 'Working with them was a pleasure. We received a professional, modern design that perfectly represents our brand. Their attention to detail and creative input were outstanding.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Design Agency London | CS Digital Media</title>
        <meta name="description" content="Professional web design agency in London. Custom, responsive websites that convert visitors into customers. Expert UI/UX design by CS Digital Media." />
        <meta property="og:title" content="Web Design Agency London | CS Digital Media" />
        <meta property="og:description" content="Professional web design agency in London. Custom, responsive websites that convert visitors into customers. Expert UI/UX design by CS Digital Media." />
        <link rel="canonical" href="https://csdigitalmedia.co.uk/services/web-design" />
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
                <span className="gradient-text">Web Design</span> Agency London
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We create stunning, responsive websites that captivate your audience, drive business growth, and tell your brand's unique story. 
                Our expert designers craft digital experiences tailored to convert visitors into loyal customers.
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
                alt="Modern web design agency london showcasing on multiple devices"
               src="/web-design-promo-image-1.jpeg" />
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
              Our Web Design <span className="gradient-text">Philosophy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity with strategic functionality to deliver websites that not only look amazing 
              but also drive tangible business results and provide an exceptional user experience.
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Design <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we follow a meticulous, collaborative process to ensure your website 
              exceeds expectations and delivers results.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-5 left-0 w-full h-1 bg-gray-300"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center relative pt-8"
                >
                  <div className="hidden md:block absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full z-10 flex items-center justify-center">
                     <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{item.step}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Web Design <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore some of our recent web design projects and see how we've helped 
              businesses transform their online presence.
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
                    alt={`${project.title} web design project`}
                   src={`${project.imageUrl || "https://images.unsplash.com/photo-1524221629551-6dd14def5ffd"}`} />
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white hidden">
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
              See what our clients say about our web design services and the results we've achieved together.
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
                className="bg-gray-50 p-8 rounded-lg shadow-lg"
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Transform Your <span className="gradient-text">Website?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's create a stunning, high-performing website that represents your brand and drives business growth. 
              Contact us today for a free, no-obligation consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-black text-black hover:bg-black hover:text-white transition-all">
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

export default WebDesign;