import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, DollarSign, BarChart, Zap, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PPC = () => {
  const features = [
    {
      icon: Target,
      title: 'Hyper-Targeted Campaigns',
      description: 'Reach your ideal customers with precision-targeted advertising campaigns based on demographics, interests, and behavior.'
    },
    {
      icon: DollarSign,
      title: 'Maximized ROI',
      description: 'We maximize your return on investment with smart bidding strategies, continuous A/B testing, and budget optimization.'
    },
    {
      icon: BarChart,
      title: 'Data-Driven Performance',
      description: 'Leverage detailed analytics and transparent reporting to measure campaign effectiveness and make informed decisions.'
    },
    {
      icon: Zap,
      title: 'Immediate Impact',
      description: 'Start seeing tangible results and valuable traffic almost immediately with rapid campaign deployment and optimization.'
    }
  ];

  const platforms = [
    {
      name: 'Google Ads',
      description: 'Capture high-intent users with Search, Display, Shopping, and YouTube advertising campaigns.',
      features: ['Search & Display Network', 'Google Shopping Ads', 'YouTube Video Ads', 'Performance Max']
    },
    {
      name: 'Meta Ads (Facebook & Instagram)',
      description: 'Engage a massive audience with social media advertising across Facebook and Instagram platforms.',
      features: ['Advanced Audience Targeting', 'Dynamic Retargeting', 'Lead Generation Forms', 'Instagram & Facebook Stories']
    },
    {
      name: 'LinkedIn Ads',
      description: 'Target professionals and B2B decision-makers with sophisticated advertising on the world\'s largest professional network.',
      features: ['Sponsored Content & Messaging', 'Lead Gen Forms', 'Account-Based Marketing', 'Website Demographics']
    },
    {
      name: 'Microsoft Advertising (Bing)',
      description: 'Tap into a unique and valuable audience on the Bing search network to capture additional search traffic.',
      features: ['Bing Search Network', 'Audience Ads', 'LinkedIn Profile Targeting', 'Easy Google Ads Import']
    }
  ];

  const results = [
    { metric: '400%', description: 'Average Return on Ad Spend (ROAS)' },
    { metric: '60%', description: 'Typical Reduction in Cost-Per-Click' },
    { metric: '250%', description: 'Average Increase in Conversion Rates' },
    { metric: '95%', description: 'Client Satisfaction Rate' }
  ];

  const testimonials = [
    {
      name: 'James Parker',
      company: 'Parker Industries',
      content: 'Our PPC campaigns delivered an incredible 5x ROI in the first quarter alone. The team\'s expertise in campaign optimization and strategic targeting is truly outstanding. A game-changer for our lead generation.',
      rating: 5
    },
    {
      name: 'Sophie Davis',
      company: 'Davis Marketing',
      content: 'CS Digital Media provided excellent PPC management that significantly reduced our cost per acquisition while dramatically increasing our lead quality. The results speak for themselves.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>PPC Agency London | CS Digital Media</title>
        <meta name="description" content="Professional PPC agency in London. Google Ads, Facebook Ads, and more. Maximize ROI with targeted campaigns by CS Digital Media experts." />
        <meta property="og:title" content="PPC Agency London | CS Digital Media" />
        <meta property="og:description" content="Professional PPC agency in London. Google Ads, Facebook Ads, and more. Maximize ROI with targeted campaigns by CS Digital Media experts." />
        <link rel="canonical" href="https://csdigitalmedia.co.uk/services/ppc" />
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
                <span className="gradient-text">PPC</span> That Maximizes ROI
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Drive immediate, high-quality traffic with targeted pay-per-click advertising campaigns. 
                Our expert PPC management delivers qualified leads and maximizes your return on every penny spent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                    Launch Your Campaign
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
                alt="PPC advertising dashboard showing campaign performance"
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
              Results That <span className="gradient-text">Speak Volumes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data-driven PPC campaigns consistently deliver exceptional results and a strong return on ad spend for our clients.
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
              Our Strategic PPC <span className="gradient-text">Advantage</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine data-driven strategies with creative excellence to deliver PPC campaigns that not only perform but dominate.
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

      {/* Platforms Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Multi-Platform <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We manage campaigns across all major advertising platforms to maximize your reach, engagement, and results where it matters most.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 p-8 rounded-lg card-hover"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {platform.name}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {platform.description}
                </p>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
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
                Our PPC <span className="gradient-text">Methodology</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Strategy & Research</h3>
                    <p className="text-gray-600">We conduct comprehensive keyword research, audience analysis, and competitor analysis to build a winning strategy from day one.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Campaign Build & Ad Copy</h3>
                    <p className="text-gray-600">We create meticulously structured campaigns with compelling, high-converting ad copy and creative.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Launch, Monitor & Test</h3>
                    <p className="text-gray-600">We launch campaigns and provide continuous, vigilant monitoring and A/B testing for optimal performance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Optimize, Scale & Report</h3>
                    <p className="text-gray-600">We provide ongoing optimization, scale successful campaigns for maximum ROI, and deliver transparent performance reports.</p>
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
                alt="PPC specialist optimizing advertising campaigns"
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
              See how our strategic PPC campaigns have delivered exceptional ROI and transformative growth for our clients.
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
              Ready to Maximize Your <span className="gradient-text">Advertising ROI?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's build high-performing PPC campaigns that drive qualified leads and maximize your advertising budget. 
              Contact us today for a free, no-obligation consultation and campaign audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                  Get Your Free PPC Audit
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

export default PPC;