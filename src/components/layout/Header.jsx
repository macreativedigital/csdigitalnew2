import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Web Design', path: '/services/web-design-agency-london' },
    { name: 'Web Development', path: '/services/web-development-agency-london' },
    { name: 'SEO', path: '/services/seo-agency-london' },
    { name: 'PPC', path: '/services/ppc-agency-london' },
    { name: 'Social Media Marketing', path: '/services/social-media-agency-london' },
    { name: 'Graphic Design', path: '/services/graphic-design-agency-london' },
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '#', hasDropdown: true },
    { name: 'Work', path: '/our-work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text"
            >
              CS Digital Media
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-1 text-white hover:text-blue-400 transition-colors ${
                        location.pathname.startsWith('/services') ? 'text-blue-400' : ''
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-800 rounded-lg shadow-xl"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="block px-4 py-3 text-white hover:bg-gray-900 hover:text-blue-400 transition-colors first:rounded-t-lg last:rounded-b-lg"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-white hover:text-blue-400 transition-colors ${
                      location.pathname === item.path ? 'text-blue-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="btn-primary px-6 py-2 rounded-lg font-semibold">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black border-t border-gray-800"
            >
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-2 text-white hover:text-blue-400 transition-colors ${
                        location.pathname === item.path ? 'text-blue-400' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 space-y-1">
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 text-gray-300 hover:text-blue-400 transition-colors text-sm"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button className="btn-primary w-full px-6 py-2 rounded-lg font-semibold">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;