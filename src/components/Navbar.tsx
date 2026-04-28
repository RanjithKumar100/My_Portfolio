import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setIsScrolled(scrollTop > 100);
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-indicator fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 z-50"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-secondary-900/70 backdrop-blur-xl border-b border-primary-500/30 shadow-lg shadow-primary-500/10'
            : 'bg-secondary-900/20 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="p-2 bg-gradient-to-r from-primary-700 to-primary-600 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold gradient-text">Ranjith Kumar</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="relative text-secondary-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-xl backdrop-blur-sm hover:backdrop-blur-md hover:bg-white/10 hover:shadow-lg hover:shadow-primary-500/20 border border-transparent hover:border-primary-400/30"
                >
                  {item.label}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-primary-500/10 to-primary-400/10 rounded-xl opacity-0 hover:opacity-100 -z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-secondary-300 hover:text-white p-2 rounded-lg backdrop-blur-md hover:bg-white/10 border border-transparent hover:border-primary-400/30 transition-all duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-secondary-800/70 backdrop-blur-xl rounded-2xl mb-4 border border-primary-500/30 shadow-xl shadow-primary-500/10">
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="block text-secondary-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-xl backdrop-blur-sm hover:backdrop-blur-md hover:bg-white/10 hover:shadow-lg hover:shadow-primary-500/20 border border-transparent hover:border-primary-400/30"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;