import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Developer Intern',
      company: 'Lab of Future (LOF)',
      location: 'Chennai',
      period: 'Current',
      description: [
        'Currently working as a Developer at Lab of Future, contributing to real-world AI solutions',
        'Actively involved in building an intelligent chatbot for the Lab of Future website',
        'Leveraging Natural Language Processing and AI to enhance user interaction',
        'Working on LOF_Agent GitHub Repository for AI-powered solutions'
      ],
      technologies: ['Python', 'NLP', 'AI/ML', 'Chatbot Development', 'GitHub'],
      link: 'https://github.com/RanjithKumar100',
      current: true
    }
  ];

  const certifications = [
    {
      title: 'PrepInsta Certified C, C++ Developer',
      issuer: 'PrepInsta',
      type: 'Programming'
    },
    {
      title: 'Quantum Computing Certificate',
      issuer: 'Udemy',
      type: 'Emerging Tech'
    },
    {
      title: 'MySQL Certificate',
      issuer: 'Guvi',
      type: 'Database'
    },
    {
      title: 'Introduction to Cloud Computing',
      issuer: 'Infosys Springboard',
      type: 'Cloud'
    },
    {
      title: '5 Star Gold Badge in C++',
      issuer: 'HackerRank',
      type: 'Programming'
    }
  ];

  const activities = [
    {
      title: 'Hackmageddon',
      description: 'Attended 24-hour hackathon',
      type: 'Hackathon'
    },
    {
      title: 'Innoventz',
      description: 'Organised Department level symposium for the event KiminoCode',
      type: 'Organization'
    },
    {
      title: 'IEEE Computational Intelligence Society',
      description: 'Senior Domain Associate – Data Science',
      type: 'Leadership'
    },
    {
      title: 'Talos 3.0 Winner',
      description: 'Won first place in "Talos 3.0" (Cognitive Clues) at CIT college',
      type: 'Competition'
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="experience-card bg-gray-800/30 p-8 rounded-xl relative"
              >
                {exp.current && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-600/30">
                      Current
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <Briefcase size={18} />
                      <span className="text-xl font-semibold">{exp.company}</span>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-cyan-400 hover:text-cyan-300"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start gap-2">
                      <span className="text-blue-400 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <div className="mb-3">
                  <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs">
                    {cert.type}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-gray-400">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Active Engagement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Active Engagement</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/30 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="px-2 py-1 bg-cyan-600/20 text-cyan-300 rounded text-xs">
                      {activity.type}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{activity.title}</h4>
                    <p className="text-gray-400">{activity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;