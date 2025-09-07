import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const OurWork = () => {
  const { toast } = useToast();

  const portfolio = [
    // {
    //   title: 'E-commerce Fashion Store',
    //   description: 'A modern, conversion-focused e-commerce platform for a luxury fashion brand, featuring a seamless user experience and stunning visuals.',
    //   category: 'E-commerce',
    //   image: 'Modern e-commerce fashion website on a laptop screen'
    // },
    // {
    //   title: 'Tech Startup Landing Page',
    //   description: 'A clean, professional landing page for a SaaS company, designed to generate leads and communicate value effectively.',
    //   category: 'Technology',
    //   image: 'Sleek landing page for a tech startup on a tablet'
    // },
    // {
    //   title: 'Restaurant Website & Booking',
    //   description: 'An appetizing website for an upscale restaurant, complete with an integrated online reservation system and beautiful food photography.',
    //   category: 'Hospitality',
    //   image: 'Vibrant restaurant website showcasing delicious food'
    // },
    // {
    //   title: 'Healthcare Patient Portal',
    //   description: 'A user-friendly and secure patient portal for a medical practice, designed to streamline communication and appointment management.',
    //   category: 'Healthcare',
    //   image: 'Clean and professional healthcare portal on a desktop computer'
    // },
    // {
    //   title: 'Corporate Rebranding',
    //   description: 'A complete brand identity overhaul for a financial services firm, including a new logo, website, and marketing materials.',
    //   category: 'Branding',
    //   image: 'Corporate branding materials including logo and website'
    // },
    // {
    //   title: 'Social Media Campaign',
    //   description: 'A highly engaging social media campaign for a consumer goods brand, resulting in a 300% increase in follower engagement.',
    //   category: 'Social Media',
    //   image: 'Social media campaign graphics on a smartphone screen'
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

  const categories = [
    'All',
    'Web Design',
    'Web Development',
    'SEO',
    'PPC',
    'Social Media',
    'Branding'
  ];

  const handleProjectClick = () => {
    toast({
      title: "🚧 Project details aren't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleCategoryClick = () => {
    toast({
      title: "🚧 Category filtering isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Our Work | CS Digital Media</title>
        <meta name="description" content="Explore the portfolio of CS Digital Media. See our successful projects in web design, SEO, PPC, and social media marketing for clients in London and beyond." />
        <meta property="og:title" content="Our Work | CS Digital Media" />
        <meta property="og:description" content="Explore the portfolio of CS Digital Media. See our successful projects in web design, SEO, PPC, and social media marketing for clients in London and beyond." />
        <link rel="canonical" href="https://csdigitalmedia.co.uk/our-work" />
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
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We're proud of the results we deliver. Explore our portfolio to see how we've helped 
              businesses like yours achieve their digital marketing goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50 hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-black mb-8">Filter by Service</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={handleCategoryClick}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={handleProjectClick}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img   
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={project.image} src={project.imageUrl || "https://images.unsplash.com/photo-1572177812156-58036aae439c"} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <Eye className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">View Project</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 rounded-b-lg">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-black mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
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
              Ready to Start Your <span className="gradient-text">Next Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's create something amazing together. Contact us today for a free consultation 
              and let's discuss how we can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              {/* <Link to="/services">
                <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all">
                  View Our Services
                </Button>
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurWork;