import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary-800/30 relative overflow-hidden">
      <div className="particle-bg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Placeholder - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto group" style={{ aspectRatio: '3/4' }}>
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded-3xl rotate-6 group-hover:from-primary-400/30 group-hover:to-primary-600/30 transition-all duration-500"></div>

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-secondary-900 to-secondary-950 rounded-3xl overflow-hidden border-4 border-primary-500/50 group-hover:border-primary-400 shadow-2xl group-hover:shadow-[0_0_40px_rgba(14,165,233,0.5)] h-full transition-all duration-500">
                {/* Your Photo */}
                <img
                  src="/Personal_Portfolio/photo mine.PNG"
                  alt="Ranjith Kumar"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-400">
              AI/ML Developer & Software Engineer
            </h3>
            <div className="space-y-4 text-secondary-300 leading-relaxed">
              <p>
               I'm Ranjith Kumar, a B.Tech graduate in Artificial Intelligence and Machine Learning from Rajalakshmi Engineering College (CGPA: 8.25). Currently working as a Software Engineer at Lab of Future, I build AI-driven chatbots and intelligent applications.
              </p>
              <p>
                I'm skilled in frontend (HTML, CSS, JavaScript) and backend technologies (Python, C++, SQL), with a strong focus on creating efficient, user-friendly solutions. I'm passionate about learning new technologies and eager to contribute to innovative, dynamic teams.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;