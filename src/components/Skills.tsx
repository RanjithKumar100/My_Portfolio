import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Brain, Wrench, Users, Award, Zap, Target, Star } from 'lucide-react';

const Skills = () => {
  const [visibleBars, setVisibleBars] = useState(false);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Responsive Design'],
      proficiency: 85,
      color: 'text-purple-400',
      bgGradient: 'from-purple-900/20 to-pink-900/20',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: Server,
      title: 'Backend Development', 
      skills: ['Python', 'C++', 'C', 'Node.js', 'REST APIs', 'Data Structures'],
      proficiency: 80,
      color: 'text-cyan-400',
      bgGradient: 'from-cyan-900/20 to-blue-900/20',
      borderColor: 'border-cyan-500/20'
    },
    {
      icon: Database,
      title: 'Database & Storage',
      skills: ['SQL', 'MySQL', 'MongoDB', 'Database Design', 'Data Modeling'],
      proficiency: 80,
      color: 'text-green-400',
      bgGradient: 'from-green-900/20 to-emerald-900/20', 
      borderColor: 'border-green-500/20'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'GenAI'],
      proficiency: 88,
      color: 'text-orange-400',
      bgGradient: 'from-orange-900/20 to-red-900/20',
      borderColor: 'border-orange-500/20'
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'MS Office', 'Linux'],
      proficiency: 85,
      color: 'text-indigo-400',
      bgGradient: 'from-indigo-900/20 to-purple-900/20',
      borderColor: 'border-indigo-500/20'
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Team Work', 'Leadership', 'Creativity'],
      proficiency: 88,
      color: 'text-pink-400',
      bgGradient: 'from-pink-900/20 to-rose-900/20',
      borderColor: 'border-pink-500/20'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisibleBars(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="section-padding bg-gray-800/30 relative overflow-hidden">
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are the technologies and skills I've mastered throughout my journey in AI/ML and Full Stack Development
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`bg-gradient-to-r ${category.bgGradient} p-6 rounded-xl border ${category.borderColor} hover:border-purple-500/50 transition-all glow-effect`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-800/50 rounded-lg">
                    <category.icon size={24} className={category.color} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className={`text-sm font-semibold ${category.color}`}>{category.proficiency}%</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${category.color === 'text-purple-400' ? 'from-purple-500 to-purple-600' :
                    category.color === 'text-cyan-400' ? 'from-cyan-500 to-cyan-600' :
                    category.color === 'text-green-400' ? 'from-green-500 to-green-600' :
                    category.color === 'text-orange-400' ? 'from-orange-500 to-orange-600' :
                    category.color === 'text-indigo-400' ? 'from-indigo-500 to-indigo-600' :
                    'from-pink-500 to-pink-600'} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: visibleBars ? `${category.proficiency}%` : 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: index * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Skills;