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
      color: 'text-primary-400',
      bgGradient: 'from-primary-900/20 to-primary-800/20',
      borderColor: 'border-primary-500/20'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Python', 'C++', 'C', 'Node.js', 'REST APIs', 'Data Structures'],
      proficiency: 80,
      color: 'text-primary-500',
      bgGradient: 'from-primary-800/20 to-primary-700/20',
      borderColor: 'border-primary-600/20'
    },
    {
      icon: Database,
      title: 'Database & Storage',
      skills: ['SQL', 'MySQL', 'MongoDB', 'Database Design', 'Data Modeling'],
      proficiency: 80,
      color: 'text-primary-600',
      bgGradient: 'from-primary-900/20 to-accent-900/20',
      borderColor: 'border-primary-500/20'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'GenAI'],
      proficiency: 88,
      color: 'text-accent-500',
      bgGradient: 'from-accent-900/20 to-accent-800/20',
      borderColor: 'border-accent-500/20'
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'MS Office', 'Linux'],
      proficiency: 85,
      color: 'text-accent-600',
      bgGradient: 'from-accent-800/20 to-accent-700/20',
      borderColor: 'border-accent-600/20'
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Team Work', 'Leadership', 'Creativity'],
      proficiency: 88,
      color: 'text-accent-400',
      bgGradient: 'from-accent-900/20 to-primary-900/20',
      borderColor: 'border-accent-500/20'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisibleBars(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="section-padding bg-secondary-800/30 relative overflow-hidden">
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
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-600 mx-auto mb-8"></div>
          <p className="text-secondary-400 text-lg max-w-3xl mx-auto">
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
              whileHover={{ scale: 1.02, y: -3 }}
              className={`bg-gradient-to-r ${category.bgGradient} p-6 rounded-xl border ${category.borderColor} hover:border-primary-500/50 transition-all glow-effect`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary-800/50 rounded-lg">
                    <category.icon size={24} className={category.color} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent-400 fill-current" />
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
                    className="px-3 py-1 bg-secondary-800/50 text-secondary-300 text-sm rounded-full border border-secondary-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <div className="w-full bg-secondary-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${category.color === 'text-primary-400' ? 'from-primary-500 to-primary-600' :
                    category.color === 'text-primary-500' ? 'from-primary-600 to-primary-700' :
                    category.color === 'text-primary-600' ? 'from-primary-600 to-primary-700' :
                    category.color === 'text-accent-500' ? 'from-accent-500 to-accent-600' :
                    category.color === 'text-accent-600' ? 'from-accent-600 to-accent-700' :
                    'from-accent-400 to-accent-500'} rounded-full`}
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