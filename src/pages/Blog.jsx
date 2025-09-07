
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const { toast } = useToast();

  const featuredPost = {
    title: 'The Future of Digital Marketing: Trends to Watch in 2024',
    excerpt: 'Discover the latest digital marketing trends that will shape the industry in 2024, from AI-powered personalization to voice search optimisation.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Digital Marketing',
    image: 'Digital marketing trends 2024 with AI and automation technologies'
  };

  const blogPosts = [
    {
      title: 'How to Optimize Your Website for Voice Search',
      excerpt: 'Voice search is changing how people find information online. Learn how to optimize your website for this growing trend.',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'SEO',
      image: 'Voice search optimisation on mobile device'
    },
    {
      title: 'The Power of Video Marketing in 2024',
      excerpt: 'Video content continues to dominate social media. Discover how to leverage video marketing for your business.',
      author: 'Emma Williams',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Social Media',
      image: 'Video marketing content creation studio'
    },
    {
      title: 'PPC Advertising: Maximizing ROI with Smart Bidding',
      excerpt: 'Learn advanced PPC strategies and smart bidding techniques to maximize your advertising return on investment.',
      author: 'David Thompson',
      date: '2024-01-08',
      readTime: '9 min read',
      category: 'PPC',
      image: 'PPC advertising dashboard with bidding strategies'
    },
    {
      title: 'Building Brand Identity: A Complete Guide',
      excerpt: 'Create a strong brand identity that resonates with your audience and sets you apart from the competition.',
      author: 'Lisa Parker',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Branding',
      image: 'Brand identity design process with logos and colors'
    },
    {
      title: 'Local SEO: Dominating Your Local Market',
      excerpt: 'Master local SEO strategies to improve your visibility in local search results and attract nearby customers.',
      author: 'James Wilson',
      date: '2024-01-03',
      readTime: '8 min read',
      category: 'SEO',
      image: 'Local SEO optimisation for small businesses'
    },
    {
      title: 'Social Media Analytics: Measuring What Matters',
      excerpt: 'Learn which social media metrics to track and how to use analytics to improve your social media strategy.',
      author: 'Rachel Green',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Social Media',
      image: 'Social media analytics dashboard with engagement metrics'
    }
  ];

  const categories = [
    'All Posts',
    'Digital Marketing',
    'SEO',
    'PPC',
    'Social Media',
    'Web Design',
    'Branding'
  ];

  const handlePostClick = () => {
    toast({
      title: "🚧 Blog posts aren't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleCategoryClick = () => {
    toast({
      title: "🚧 Category filtering isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleNewsletterSubmit = () => {
    toast({
      title: "🚧 Newsletter signup isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Digital Marketing Blog - CS Digital Media London</title>
        <meta name="description" content="Stay updated with the latest digital marketing insights, tips, and trends. Expert advice on SEO, PPC, social media marketing, and web design from CS Digital Media." />
        <meta property="og:title" content="Digital Marketing Blog - CS Digital Media London" />
        <meta property="og:description" content="Stay updated with the latest digital marketing insights, tips, and trends. Expert advice on SEO, PPC, social media marketing, and web design from CS Digital Media." />
        <link rel="canonical" href="https://csdigitalmedia.co.uk/blog" />
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
              Digital Marketing <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Stay ahead of the curve with expert insights, tips, and trends in digital marketing. 
              Learn from our team of specialists and grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
              Featured <span className="gradient-text">Article</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img  
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  alt={featuredPost.image}
                 src="https://images.unsplash.com/photo-1619199059624-7335464ea7b0" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-black leading-tight">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">By {featuredPost.author}</span>
                </div>
                
                <Button 
                  onClick={handlePostClick}
                  className="btn-primary px-6 py-3 rounded-lg font-semibold"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-black mb-8">Browse by Category</h3>
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

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover actionable insights and expert tips to grow your business through digital marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    alt={post.image}
                   src="https://images.unsplash.com/photo-1606498679340-0aec3185edbd" />
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
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Subscribe to our newsletter and get the latest digital marketing insights delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <Button 
                onClick={handleNewsletterSubmit}
                className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
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
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Put these insights into action. Let's discuss how we can help you implement 
              these strategies for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              {/* <Link to="/services">
                <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-black text-black hover:bg-black hover:text-white transition-all">
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

export default Blog;
