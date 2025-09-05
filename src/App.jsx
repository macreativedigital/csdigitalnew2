import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import WebDesign from '@/pages/services/WebDesign';
import WebDevelopment from '@/pages/services/WebDevelopment';
import SEO from '@/pages/services/SEO';
import PPC from '@/pages/services/PPC';
import SocialMediaMarketing from '@/pages/services/SocialMediaMarketing';
import GraphicDesign from '@/pages/services/GraphicDesign';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import OurWork from '@/pages/OurWork';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/ppc" element={<PPC />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;