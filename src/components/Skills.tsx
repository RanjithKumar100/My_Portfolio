import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench, Zap, Palette, Brain, Server } from 'lucide-react';

const Skills = () => {
  const [visibleBars, setVisibleBars] = useState(false);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'HTML', level: 90, color: '#E34F26' },
        { name: 'CSS', level: 85, color: '#1572B6' },
        { name: 'JavaScript', level: 80, color: '#F7DF1E' },
        { name: 'React.js', level: 75, color: '#61DAFB' },
        { name: 'Responsive Design', level: 85, color: '#38BDF8' },
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Python', level: 90, color: '#3776AB' },
        { name: 'C++', level: 85, color: '#00599C' },
        { name: 'C', level: 80, color: '#A8B9CC' },
        { name: 'Node.js', level: 70, color: '#339933' },
        { name: 'REST APIs', level: 75, color: '#FF6B35' },
      ]
    },
    {
      icon: Database,
      title: 'Database & Storage',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'SQL', level: 85, color: '#336791' },
        { name: 'MySQL', level: 80, color: '#4479A1' },
        { name: 'MongoDB', level: 70, color: '#47A248' },
        { name: 'Database Design', level: 75, color: '#FF6B35' },
        { name: 'Data Structures', level: 85, color: '#8B5CF6' },
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Machine Learning', level: 85, color: '#FF6B35' },
        { name: 'Deep Learning', level: 80, color: '#8B5CF6' },
        { name: 'Computer Vision', level: 75, color: '#10B981' },
        { name: 'NLP', level: 80, color: '#F59E0B' },
        { name: 'GenAI', level: 75, color: '#EF4444' },
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Git', level: 85, color: '#F05032' },
        { name: 'GitHub', level: 85, color: '#181717' },
        { name: 'MS Office', level: 90, color: '#D83B01' },
        { name: 'VS Code', level: 85, color: '#007ACC' },
        { name: 'Jupyter', level: 80, color: '#F37626' },
      ]
    },
    {
      icon: Palette,
      title: 'Soft Skills',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Problem Solving', level: 90, color: '#8B5CF6' },
        { name: 'Communication', level: 85, color: '#10B981' },
        { name: 'Team Work', level: 85, color: '#F59E0B' },
        { name: 'Creativity', level: 80, color: '#EF4444' },
        { name: 'Leadership', level: 75, color: '#06B6D4' },
      ]
    }
  ];

  const CircularProgress = ({ percentage, color, size = 120 }) => {
    const radius = (size - 10) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="8"
            fill="transparent"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: visibleBars ? strokeDashoffset : circumference }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-lg">{percentage}%</span>
        </div>
      </div>
    );
  };

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gray-900/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all glow-effect"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      ></div>
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: visibleBars ? `${skill.level}%` : 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                            ease: "easeOut" 
                          }}
                        />
                      </div>
                      <span className="text-cyan-400 text-sm font-semibold w-8">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Skills with Circular Progress */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Core Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Python', level: 90, color: '#3776AB' },
              { name: 'AI/ML', level: 85, color: '#FF6B35' },
              { name: 'JavaScript', level: 80, color: '#F7DF1E' },
              { name: 'Problem Solving', level: 90, color: '#8B5CF6' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <CircularProgress 
                  percentage={skill.level} 
                  color={skill.color}
                  size={100}
                />
                <h4 className="text-white font-semibold mt-4">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;