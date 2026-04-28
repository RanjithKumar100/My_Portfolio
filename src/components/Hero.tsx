import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone, Download, Code, Terminal } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [projectCount, setProjectCount] = useState(0);
  const [certCount, setCertCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const roles = [
    'AI/ML Developer',
    'Software Engineer',
    'Problem Solver'
  ];

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]));
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]));

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

  // Handle mouse move for parallax and cursor effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="particle-bg"></div>

      {/* Interactive floating shapes that follow mouse */}
      <div className="floating-shapes">
        <motion.div
          className="floating-shape"
          style={{
            x: useTransform(mouseX, [-0.5, 0.5], [-20, 20]),
            y: useTransform(mouseY, [-0.5, 0.5], [-20, 20])
          }}
        />
        <motion.div
          className="floating-shape"
          style={{
            x: useTransform(mouseX, [-0.5, 0.5], [20, -20]),
            y: useTransform(mouseY, [-0.5, 0.5], [20, -20])
          }}
        />
        <motion.div
          className="floating-shape"
          style={{
            x: useTransform(mouseX, [-0.5, 0.5], [-30, 30]),
            y: useTransform(mouseY, [-0.5, 0.5], [15, -15])
          }}
        />
      </div>

      {/* Cursor glow effect */}
      <motion.div
        className="pointer-events-none fixed w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Interactive Icon with Terminal effect */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div
              className="relative p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-primary-500/30"
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                borderColor: "rgba(14, 165, 233, 0.6)"
              }}
              transition={{ duration: 0.5 }}
            >
              <Terminal className="text-primary-400 w-10 h-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Animated Title with letter reveal */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {"Hi, I'm ".split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
            <span className="gradient-text relative inline-block">
              {"Ranjith Kumar".split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  whileHover={{
                    scale: 1.2,
                    color: "#0ea5e9",
                    textShadow: "0 0 20px rgba(14, 165, 233, 0.8)"
                  }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          <motion.div
            className="text-2xl md:text-3xl text-secondary-300 mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I'm a <span className="text-primary-500 font-semibold">{displayText}</span>
            <span className="typing-cursor text-primary-400">|</span>
          </motion.div>
          
          <motion.p
            className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="relative inline-block px-6 py-2">
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-primary-400/30 to-primary-500/20 rounded-lg blur-sm"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-200 to-primary-300 font-semibold">
                "Building intelligent solutions for real-world impact."
              </span>
            </span>
          </motion.p>
          
          {/* Magnetic CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ranjithsivakumar2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 px-8 py-4 rounded-xl transition-all overflow-hidden cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <Mail size={20} className="relative z-10 pointer-events-none" />
              <span className="relative z-10 font-semibold pointer-events-none">Get In Touch</span>
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(14, 165, 233, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-2 border-2 border-primary-600/50 backdrop-blur-xl bg-white/5 hover:bg-white/10 px-8 py-4 rounded-xl transition-all overflow-hidden cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                transition={{ duration: 0.3 }}
              />
              <Code size={20} className="relative z-10 pointer-events-none" />
              <span className="relative z-10 font-semibold pointer-events-none">View My Work</span>
            </motion.a>

            <motion.a
              href="/Personal_Portfolio/RANJITH_KUMAR_RESUME.pdf"
              download="Ranjith_Kumar_Resume.pdf"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(3, 105, 161, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-2 bg-gradient-to-r from-primary-700 to-primary-800 hover:from-primary-600 hover:to-primary-700 px-8 py-4 rounded-xl transition-all overflow-hidden cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <Download size={20} className="relative z-10 pointer-events-none" />
              <span className="relative z-10 font-semibold pointer-events-none">Download CV</span>
            </motion.a>
          </motion.div>
          
          {/* Interactive Social Links with 3D effect */}
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
              whileHover={{
                scale: 1.2,
                rotate: 360,
                boxShadow: "0 10px 30px rgba(14, 165, 233, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group relative p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-secondary-700/50 hover:border-primary-400 transition-all"
            >
              <Github size={28} className="text-secondary-400 group-hover:text-primary-400 transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ranjithkumar5101/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: 360,
                boxShadow: "0 10px 30px rgba(14, 165, 233, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group relative p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-secondary-700/50 hover:border-primary-500 transition-all"
            >
              <Linkedin size={28} className="text-secondary-400 group-hover:text-primary-500 transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600/20 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="tel:+919150654888"
              whileHover={{
                scale: 1.2,
                rotate: 360,
                boxShadow: "0 10px 30px rgba(14, 165, 233, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group relative p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-secondary-700/50 hover:border-primary-600 transition-all"
            >
              <Phone size={28} className="text-secondary-400 group-hover:text-primary-600 transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-secondary-400 hover:text-primary-400 transition-colors group"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Scroll Down</span>
          <motion.div
            className="p-2 rounded-full border-2 border-primary-500/30 backdrop-blur-sm bg-white/5"
            animate={{
              borderColor: ["rgba(14, 165, 233, 0.3)", "rgba(14, 165, 233, 0.8)", "rgba(14, 165, 233, 0.3)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;