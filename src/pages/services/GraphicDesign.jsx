import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Eye, Layers, Zap, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GraphicDesign = () => {
  const features = [
    {
      icon: Palette,
      title: 'Creative Excellence',
      description: 'Stunning visual designs that capture attention and communicate your message effectively.'
    },
    {
      icon: Eye,
      title: 'Brand Consistency',
      description: 'Cohesive visual identity across all your marketing materials and touchpoints.'
    },
    {
      icon: Layers,
      title: 'Multi-Format Design',
      description: 'Designs optimized for print, digital, and social media applications.'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Quick delivery without compromising on quality or attention to detail.'
    }
  ];

  const services = [
    {
      title: 'Brand Identity Design',
      description: 'Complete brand identity packages including logos, color schemes, and brand guidelines.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palettes', 'Typography Selection']
    },
    {
      title: 'Marketing Materials',
      description: 'Eye-catching marketing collateral that drives engagement and conversions.',
      features: ['Brochures & Flyers', 'Business Cards', 'Posters & Banners', 'Trade Show Materials']
    },
    {
      title: 'Digital Graphics',
      description: 'Optimized graphics for websites, social media, and digital advertising.',
      features: ['Social Media Graphics', 'Web Banners', 'Email Templates', 'Digital Ads']
    },
    {
      title: 'Packaging Design',
      description: 'Product packaging that stands out on shelves and communicates brand values.',
      features: ['Product Packaging', 'Label Design', 'Box Design', 'Retail Displays']
    }
  ];

  const portfolio = [
    {
      title: 'Tech Startup Branding',
      description: 'Complete brand identity for innovative technology company',
      category: 'Brand Identity'
    },
    {
      title: 'Restaurant Menu Design',
      description: 'Elegant menu design for upscale dining establishment',
      category: 'Print Design'
    },
    {
      title: 'E-commerce Graphics',
      description: 'Product graphics and promotional materials for online store',
      category: 'Digital Design'
    },
    {
      title: 'Event Branding',
      description: 'Complete visual identity for corporate conference',
      category: 'Event Design'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      company: 'Adams Creative Agency',
      content: 'The brand identity they created perfectly captures our vision. Professional, creative, and delivered on time.',
      rating: 5
    },
    {
      name: 'Paul Richardson',
      company: 'Richardson Retail',
      content: 'Outstanding packaging design that increased our product sales by 40%. Highly recommend their services.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Graphic Design Agency London | CS Digital Media</title>
        <meta name="description" content="Professional graphic design agency London. Brand identity, marketing materials, digital graphics, and packaging design. Creative excellence by CS Digital Media designers." />
        <meta property="og:title" content="Graphic Design Agency London | CS Digital Media" />
        <meta property="og:description" content="Professional graphic design agency London. Brand identity, marketing materials, digital graphics, and packaging design. Creative excellence by CS Digital Media designers." />
        <link rel="canonical" href="https://csdigitalmedia.co.uk/services/graphic-design-agency-london" />
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
                <span className="gradient-text">Graphic Design</span> Agency London
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Need a graphic design agency London to create compelling visual content that communicates your brand message and captivates your audience? 
                CS Digital are expert designers who bring creativity and strategy together for maximum impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                    Start Your Design Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                {/* <Link to="/services">
                  <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all">
                    View All Services
                  </Button>
                </Link> */}
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
                alt="Graphic design agency london creating stunning designs"
               src="https://images.unsplash.com/photo-1495224814653-94f36c0a31ea" />
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
              Why Choose Our London <br /><span className="gradient-text">Graphic Design Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine artistic creativity with strategic thinking to create designs that not only look great but also drive results.
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
              Our<br /> <span className="gradient-text">Design Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive graphic design services to meet all your visual communication needs.
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
                className="bg-white p-8 rounded-lg card-hover shadow-md"
              >
                <h3 className="text-2xl font-bold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
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

      {/* Portfolio Section */}
      <section className="py-20 bg-black hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Design <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore some of our recent graphic design projects and see how we've helped brands communicate visually.
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
                <div className="relative overflow-hidden rounded-lg">
                  <img  
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={`${project.title} graphic design project`}
                   src="https://images.unsplash.com/photo-1495224814653-94f36c0a31ea" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-sm text-blue-400 mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
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
                Our Design <span className="gradient-text">Process</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Discovery & Brief</h3>
                    <p className="text-gray-600">Understanding your brand, goals, and design requirements through detailed consultation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Concept Development</h3>
                    <p className="text-gray-600">Creating initial design concepts and exploring different creative directions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Design & Refinement</h3>
                    <p className="text-gray-600">Developing chosen concepts into polished designs with your feedback and input.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Final Delivery</h3>
                    <p className="text-gray-600">Delivering final designs in all required formats with comprehensive brand guidelines.</p>
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
                alt="Design process from concept to final delivery"
               src="https://images.unsplash.com/photo-1578401057158-0e58789f5947" />
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
              See how our graphic design services have helped businesses create compelling visual identities and marketing materials.
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
                className="bg-white p-8 rounded-lg shadow-md"
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
              Ready to Elevate Your <span className="gradient-text">Visual Brand?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's create compelling visual designs that communicate your brand message and captivate your audience. 
              Contact us today to discuss your design project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                  Start Your Design Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              {/* <Link to="/services">
                <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all">
                  View All Services
                </Button>
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GraphicDesign;