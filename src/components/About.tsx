import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users,FolderKanban, Code2, Computer, Trophy, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: FolderKanban, label: 'Projects Completed', value: '5+', color: 'text-purple-400' },
    { icon: Computer, label: 'Technologies Mastered', value: '4+', color: 'text-cyan-400' },
    { icon: Award, label: 'CGPA', value: '8.25', color: 'text-green-400' },
    { icon: Code2, label: 'Hours of Coding', value: '500+', color: 'text-yellow-400' },
    { icon: Trophy, label: 'Certifications', value: '8+', color: 'text-orange-400' },
    { icon: Target, label: 'Goals Achieved', value: '100%', color: 'text-pink-400' },
  ];

  const achievements = [
    "🏆 B.Tech in AI & ML with 8.25 CGPA",
    "🚀 Developer Intern at Lab of Future",
    "🎯 5 Star Gold Badge in C++ (HackerRank)",
    "🥇 First place in 'Talos 3.0' competition",
    "📜 Multiple industry certifications"
  ];

  return (
    <section id="about" className="section-padding bg-gray-800/30 relative overflow-hidden">
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
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
              AI/ML Developer & Full Stack Engineer
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm Ranjith Kumar, a recent B.Tech graduate in Artificial Intelligence and Machine Learning 
                from Rajalakshmi Engineering College with a CGPA of 8.25. I'm a well-skilled, enthusiastic 
                programmer and developer who loves building efficient, organized, and user-friendly applications.
              </p>
              <p>
                Currently working as a Developer Intern at Lab of Future, I'm actively involved in building 
                intelligent chatbots and AI solutions. My expertise spans across frontend technologies like 
                HTML, CSS, JavaScript, and backend development with Python, C++, and SQL.
              </p>
              <p>
                I have a strong commitment to learning and development, continually keeping up-to-date with 
                new emerging industry trends and technologies. I'm looking for opportunities where I can apply 
                my experience to contribute to innovative projects and work with dynamic teams.
              </p>
            </div>

            {/* Achievements */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-cyan-400 mb-4">Key Achievements</h4>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-300"
                  >
                    {achievement}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20 hover:border-purple-500/50 transition-all glow-effect"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon size={40} className={stat.color} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-center text-white mb-8">Education</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 p-6 rounded-xl border border-purple-500/20">
              <h4 className="text-lg font-semibold text-purple-400 mb-2">B.Tech - AI & ML</h4>
              <p className="text-white font-medium">Rajalakshmi Engineering College</p>
              <p className="text-gray-400 text-sm">Oct 2021 - May 2025</p>
              <p className="text-cyan-400 font-semibold">CGPA: 8.25</p>
            </div>
            <div className="bg-gradient-to-r from-cyan-900/20 to-green-900/20 p-6 rounded-xl border border-cyan-500/20">
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">HSC (PCB)</h4>
              <p className="text-white font-medium">Velammal Vidhyashram Surapet</p>
              <p className="text-gray-400 text-sm">Mar 2020 - May 2021</p>
              <p className="text-green-400 font-semibold">Percentage: 82.60%</p>
            </div>
            <div className="bg-gradient-to-r from-green-900/20 to-purple-900/20 p-6 rounded-xl border border-green-500/20">
              <h4 className="text-lg font-semibold text-green-400 mb-2">SSLC</h4>
              <p className="text-white font-medium">Velammal Vidhyashram Surapet</p>
              <p className="text-gray-400 text-sm">Mar 2018 - May 2019</p>
              <p className="text-purple-400 font-semibold">Percentage: 83.20%</p>
            </div>
          </div>
        </motion.div>

        {/* Tech Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-purple-900/20 to-cyan-900/20 p-8 rounded-2xl border border-purple-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">My Development Philosophy</h3>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            "I believe in building applications that not only solve problems but also enhance user experience. 
            Every line of code should serve a purpose, and every solution should be scalable and maintainable. 
            My goal is to bridge the gap between Artificial Intelligence and practical applications that make a real difference."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;