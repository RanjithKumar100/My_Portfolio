import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone, Download, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const roles = [
    'AI/ML Developer',
    'Full Stack Developer',
    'Python Developer',
    'React Specialist',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeTimer = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeTimer);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="particle-bg"></div>
      <div className="floating-shapes">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Sparkle Animation */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative">
              <Sparkles className="text-purple-400 w-8 h-8" />
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="text-cyan-400 w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text">Ranjith Kumar</span>
          </motion.h1>
          
          <motion.div
            className="text-2xl md:text-3xl text-gray-300 mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I'm a <span className="text-purple-400 font-semibold">{displayText}</span>
            <span className="typing-cursor text-cyan-400">|</span>
          </motion.div>
          
          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            B.Tech graduate in Artificial Intelligence and Machine Learning with expertise in Python, 
            React, and modern web technologies. Passionate about building intelligent applications 
            that solve real-world problems.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="mailto:ranjithsivakumar2004@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-6 py-3 rounded-lg transition-all glow-effect"
            >
              <Mail size={20} />
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-purple-500 hover:border-cyan-400 hover:bg-purple-500/10 px-6 py-3 rounded-lg transition-all"
            >
              <Code size={20} />
              View My Work
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-6 py-3 rounded-lg transition-all"
              onClick={() => window.open('/Ranjith_Kumar_Resume.pdf', '_blank')}
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>
          
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a
              href="https://github.com/RanjithKumar100"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="text-gray-400 hover:text-purple-400 transition-colors p-3 rounded-full border border-gray-700 hover:border-purple-400"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ranjithkumar5101/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="text-gray-400 hover:text-cyan-400 transition-colors p-3 rounded-full border border-gray-700 hover:border-cyan-400"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="tel:+919150654888"
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="text-gray-400 hover:text-green-400 transition-colors p-3 rounded-full border border-gray-700 hover:border-green-400"
            >
              <Phone size={28} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;