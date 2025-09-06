import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, TrendingUp, Target, BarChart, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SEO = () => {
  const features = [
    {
      icon: Search,
      title: 'Strategic Keyword Research',
      description: 'In-depth keyword analysis to target high-intent, relevant search terms for your business.'
    },
    {
      icon: TrendingUp,
      title: 'Comprehensive On-Page SEO',
      description: 'We optimize your website content, structure, and meta-data for maximum search engine visibility.'
    },
    {
      icon: Target,
      title: 'Authoritative Link Building',
      description: 'We build high-quality, relevant backlinks to improve your domain authority and search rankings.'
    },
    {
      icon: BarChart,
      title: 'Transparent Analytics & Reporting',
      description: 'Detailed, easy-to-understand reporting and insights to track your SEO progress and ROI.'
    }
  ];

  const services = [
    {
      title: 'Technical SEO',
      description: 'We optimize your website\'s technical foundation for flawless search engine crawling and indexing.',
      features: ['Site Speed Optimization', 'Mobile-First Indexing', 'Schema Markup Implementation', 'XML Sitemaps & Robots.txt']
    },
    {
      title: 'Content SEO',
      description: 'We create and optimize high-value content that ranks well and provides real value to your audience.',
      features: ['Content Strategy & Creation', 'Keyword Optimization', 'Topical Authority Building', 'Content Gap Analysis']
    },
    {
      title: 'Local SEO',
      description: 'We improve your visibility in local search results and Google Maps to drive foot traffic and local leads.',
      features: ['Google Business Profile Optimization', 'Local Citation Building', 'Review Management Strategy', 'Local Keyword Targeting']
    },
    {
      title: 'E-commerce SEO',
      description: 'Specialized SEO strategies for online stores to increase product visibility, traffic, and sales.',
      features: ['Product & Category Page Optimization', 'Shopping Feed Management', 'Structured Data for Products', 'User Review Strategies']
    }
  ];

  const results = [
    { metric: '300%', description: 'Average Increase in Organic Traffic' },
    { metric: 'Top 3', description: 'Average Ranking for Target Keywords' },
    { metric: '200%', description: 'Boost in Organic Conversion Rates' },
    { metric: '90%', description: 'Client Retention Rate' }
  ];

  const testimonials = [
    {
      name: 'Rachel Green',
      company: 'Green Gardens Ltd',
      content: 'Our organic traffic skyrocketed by 400% in just 6 months. The SEO strategy was comprehensive, data-driven, and incredibly effective. We are now ranking on the first page for our most important keywords.',
      rating: 5
    },
    {
      name: 'Tom Wilson',
      company: 'Wilson Consulting',
      content: 'CS Digital Media delivered on their promise. Their professional SEO work brought us to the first page for our main keywords, generating a significant increase in qualified leads. Highly professional and transparent team.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>SEO Agency London | CS Digital Media</title>
        <meta name="description" content="Professional SEO agency in London. Boost your search rankings and drive organic traffic with proven SEO strategies. Expert SEO consultants at CS Digital Media." />
        <meta property="og:title" content="SEO Agency London | CS Digital Media" />
        <meta property="og:description" content="Professional SEO agency in London. Boost your search rankings and drive organic traffic with proven SEO strategies. Expert SEO consultants at CS Digital Media." />
        <link rel="canonical" href="https://csdigitalmedia.co.uk/services/seo" />
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
                <span className="gradient-text">SEO</span> Agency London
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Boost your search engine rankings, drive sustainable organic traffic, and get found by customers who are actively searching for your services with our proven, data-driven SEO strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                    Get a Free SEO Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/our-work">
                  <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all">
                    See Our Results
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
                alt="SEO agency london showing analytics dashboard with ranking improvements"
               src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Proven <span className="gradient-text">SEO Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our SEO strategies deliver measurable results that translate into real, sustainable business growth for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                  {result.metric}
                </div>
                <p className="text-gray-600 font-medium text-lg">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Holistic SEO <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use a comprehensive, 360-degree approach to SEO that covers all critical aspects of search engine optimization for long-term success.
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
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive SEO <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our full suite of SEO services is tailored to your specific business needs and industry requirements for maximum impact.
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
                Our SEO <span className="gradient-text">Process</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Technical & Content Audit</h3>
                    <p className="text-gray-600">A comprehensive analysis of your current SEO performance, competitor landscape, and opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Strategy Development</h3>
                    <p className="text-gray-600">We create a customized, data-driven SEO roadmap based on your unique goals and market position.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Implementation & Execution</h3>
                    <p className="text-gray-600">We execute our on-page, off-page, and technical optimization strategies with precision.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Monitoring & Optimization</h3>
                    <p className="text-gray-600">We provide continuous monitoring, analysis, and optimization to ensure sustained growth and adapt to algorithm changes.</p>
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
                alt="SEO specialist analyzing website performance"
               src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
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
              See how our tailored SEO services have helped businesses achieve remarkable growth in organic traffic and rankings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}whileInView={{ opacity: 1, y: 0 }}
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
              Ready to Dominate <span className="gradient-text">Search Results?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's boost your search rankings and drive more qualified organic traffic to your website. 
              Contact us today for a free, comprehensive SEO audit and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                  Get Your Free SEO Audit
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

export default SEO;