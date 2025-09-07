import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Contact form submission isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Level 1, Devonshire House', 'One Mayfair Pl, London W1J 8AJ', 'United Kingdom'],
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+44 (0) 20 4540 4542', 'Mon - Fri: 9:00 AM - 5:00 PM', 'Weekend: Closed'],
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@csdigitalmedia.co.uk', 'support@csdigitalmedia.co.uk', 'Response within 24 hours'],
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: Closed', 'Sunday: Closed'],
      color: 'orange'
    }
  ];

  const services = [
    'Web Design',
    'Web Development',
    'SEO',
    'PPC Advertising',
    'Social Media Marketing',
    'Graphic Design',
    'Digital Strategy',
    'Other'
  ];

  const budgetRanges = [
    'Under £5,000',
    '£5,000 - £10,000',
    '£10,000 - £25,000',
    '£25,000 - £50,000',
    '£50,000+',
    'Not sure yet'
  ];

  return (
    <>
      <Helmet>
        <title>Contact | CS Digital Media</title>
        <meta name="description" content="Contact CS Digital Media for expert digital marketing services. Located in Mayfair London. Get your free consultation today and transform your business online." />
        <meta property="og:title" content="Contact | CS Digital Media" />
        <meta property="og:description" content="Contact CS Digital Media for expert digital marketing services. Located in Mayfair London. Get your free consultation today and transform your business online." />
        <link rel="canonical" href="https://csdigitalmedia.co.uk/contact" />
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
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Ready to transform your digital presence? Get in touch with our team of experts 
              and let's discuss how we can help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you succeed. Reach out to us through any of these channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
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
                    <info.icon className="w-12 h-12 text-blue-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-400 text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Start Your <span className="gradient-text">Project</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours with a 
                customized proposal for your digital marketing needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-black mb-2">Free Consultation</h3>
                    <p className="text-gray-600">Get expert advice tailored to your business needs at no cost.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-black mb-2">Custom Strategy</h3>
                    <p className="text-gray-600">Receive a personalised digital marketing strategy for your goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-black mb-2">Quick Response</h3>
                    <p className="text-gray-600">Our team responds to all inquiries within 24 hours.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+44 20 1234 5678"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full btn-secondary px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Visit Our <span className="gradient-text">Office</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Located in the heart of Mayfair, London. We're easily accessible by public transport 
              and happy to meet in person to discuss your project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-lg h-96 flex items-center justify-center"
          >
            <div className="text-center text-gray-600">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">CS Digital Media</h3>
              <p>Level 1, Devonshire House</p>
              <p>One Mayfair Pl, London W1J 8AJ</p>
              <p className="mt-4 text-sm">Interactive map would be integrated here</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on scope and complexity. Web design projects typically take 4-8 weeks, while comprehensive digital marketing campaigns can take 3-6 months to show significant results."
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer: "Yes, we work with startups, SMEs, and large enterprises. Our services are scalable and can be tailored to fit businesses of any size and budget."
              },
              {
                question: "What makes CS Digital Media different?",
                answer: "Our London-based team combines local market knowledge with global digital marketing expertise. We focus on data-driven strategies and maintain transparent communication throughout every project."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Absolutely. We offer ongoing maintenance, optimisation, and support packages to ensure your digital marketing continues to deliver results long after the initial project completion."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold text-black mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;