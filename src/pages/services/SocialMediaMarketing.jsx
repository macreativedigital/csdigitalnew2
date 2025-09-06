import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Share2, TrendingUp, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialMediaMarketing = () => {
  const features = [
    {
      icon: Users,
      title: 'Audience Growth & Community',
      description: 'We build and nurture a loyal community of followers and brand advocates across all relevant platforms.'
    },
    {
      icon: Heart,
      title: 'Authentic Brand Engagement',
      description: 'We create meaningful, two-way connections with your audience through authentic content and conversations.'
    },
    {
      icon: Share2,
      title: 'Strategic Content That Converts',
      description: 'We develop and execute a compelling content strategy that resonates with your target audience and drives action.'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Performance',
      description: 'We track, measure, and analyze social media performance with detailed insights to optimize for ROI.'
    }
  ];

  const platforms = [
    {
      name: 'Meta (Facebook & Instagram)',
      description: 'Build brand awareness and engage with a massive community on the world\'s largest social networks.',
      features: ['Page & Profile Management', 'Creative Content Production', 'Community Engagement', 'Targeted Meta Ads']
    },
    {
      name: 'TikTok & Reels',
      description: 'Capture attention and drive trends with short-form video content on the fastest-growing platforms.',
      features: ['Viral Video Concepts', 'Trending Audio Strategy', 'Creator Collaborations', 'In-Feed Advertising']
    },
    {
      name: 'LinkedIn',
      description: 'Establish thought leadership, generate B2B leads, and connect with professionals in your industry.',
      features: ['Expert Content Creation', 'Company Page Growth', 'Employee Advocacy Programs', 'B2B Lead Generation']
    },
    {
      name: 'X (Twitter) & Threads',
      description: 'Join real-time conversations, share timely updates, and build brand personality through direct engagement.',
      features: ['Real-time Engagement', 'Community Management', 'Brand Voice Development', 'Customer Service Channel']
    }
  ];

  const services = [
    {
      title: 'Strategic Content Creation',
      description: 'High-quality, engaging, and platform-native content tailored to your brand voice and objectives.',
      features: ['High-Impact Visual Design', 'Persuasive Copywriting', 'Short & Long-Form Video', 'Interactive Content']
    },
    {
      title: 'Proactive Community Management',
      description: 'Active engagement with your audience to build strong relationships, foster loyalty, and manage reputation.',
      features: ['Timely Response Management', 'Community Building Initiatives', 'Crisis & Reputation Monitoring', 'UGC Amplification']
    },
    {
      title: 'Social Media Advertising',
      description: 'Data-driven, targeted advertising campaigns to reach new audiences, generate leads, and drive conversions.',
      features: ['Campaign Strategy & Funnels', 'Creative Ad Development', 'Advanced Audience Targeting', 'Performance Optimization']
    },
    {
      title: 'Influencer & Creator Marketing',
      description: 'We partner with relevant influencers and creators to expand your reach, build trust, and drive authentic engagement.',
      features: ['Influencer Identification & Vetting', 'Partnership Management', 'Campaign Coordination & Execution', 'ROI Tracking & Reporting']
    }
  ];

  const results = [
    { metric: '300%', description: 'Average Follower Growth' },
    { metric: '250%', description: 'Increase in Engagement Rates' },
    { metric: '180%', description: 'Boost in Website Referral Traffic' },
    { metric: '92%', description: 'Client Satisfaction Rate' }
  ];

  const testimonials = [
    {
      name: 'Amanda Foster',
      company: 'Foster Fashion',
      content: 'Our Instagram following grew by an incredible 500% in just 6 months. The content quality, engagement strategies, and creative campaigns are exceptional. It has completely transformed our brand online.',
      rating: 5
    },
    {
      name: 'Robert Taylor',
      company: 'Taylor Tech Solutions',
      content: 'CS Digital Media provided professional LinkedIn management that has truly positioned us as industry leaders. The thought leadership content has generated high-quality leads. Excellent results and a pleasure to work with.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Social Media Agency London | CS Digital Media</title>
        <meta name="description" content="Professional social media marketing agency in London. Build brand awareness and engage audiences across Facebook, Instagram, LinkedIn, and Twitter. Expert social media management by CS Digital Media." />
        <meta property="og:title" content="Social Media Agency London | CS Digital Media" />
        <meta property="og:description" content="Professional social media marketing agency in London. Build brand awareness and engage audiences across Facebook, Instagram, LinkedIn, and Twitter. Expert social media management by CS Digital Media." />
        <link rel="canonical" href="https://csdigitalmedia.co.uk/services/social-media-marketing" />
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
                <span className="gradient-text">Social Media</span> That Connects
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Build brand loyalty and engage your audience across all major social media platforms. 
                Our expert social media marketing strategies drive real business results through authentic, meaningful connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                    Boost Your Social Presence
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/our-work">
                  <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all">
                    See Our Work
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
                alt="Social media marketing content creation and engagement"
               src="https://images.unsplash.com/photo-1676276374882-d4bcf1c06c1a" />
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
              Impactful Social Media <span className="gradient-text">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our social media strategies deliver measurable growth in followers, engagement, and most importantly, business results.
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
              Our Social Media <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create authentic, engaging, and strategic social media experiences that build lasting relationships with your audience.
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
              We manage your brand presence across all major social media platforms to maximize reach and engagement.
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Comprehensive <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A full suite of social media marketing services designed to build your brand and engage your audience.
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
                className="bg-gray-50 p-8 rounded-lg card-hover"
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
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our social media marketing has helped businesses build engaged communities and drive tangible growth.
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
                className="bg-gray-900 p-8 rounded-lg"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Amplify Your <span className="gradient-text">Social Presence?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's build an engaged community around your brand and drive real business results through social media. 
              Contact us today for a free social media audit and strategic consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg">
                  Get Your Free Social Audit
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

export default SocialMediaMarketing;