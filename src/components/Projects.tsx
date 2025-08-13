import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Filter, Star, Calendar, Brain, Shield, Bot } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'DeepClassify - Object Classification',
      description: 'A computer vision-based detection system designed for traffic lights to count vehicles and solve real-time problems of accidents and theft. Built using advanced Computer Vision and Machine Learning algorithms for accurate vehicle detection and classification.',
      image: 'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Computer Vision', 'Machine Learning', 'OpenCV', 'TensorFlow'],
      github: 'https://github.com/RanjithKumar100/Object_Detection_CV',
      demo: 'https://demo-link.com',
      featured: true,
      category: 'ai-ml',
      date: '2024',
      status: 'completed',
      icon: Brain
    },
    {
      title: 'PharmaAssist - Q&A Chatbot',
      description: 'An AI-powered PDF chatbot that extracts and processes information from uploaded documents using NLP and Generative AI. Integrated FAISS for vector-based search to provide accurate, context-aware responses with citations, enabling efficient document interaction.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'NLP', 'GenAI', 'FAISS', 'PDF Processing', 'Vector Search'],
      github: 'https://github.com/RanjithKumar100/Q-A-ChatBot-For-Documentation',
      demo: 'https://demo-link.com',
      featured: true,
      category: 'ai-ml',
      date: '2024', 
      status: 'completed',
      icon: Bot
    },
    {
      title: 'SecureNet - IoT Botnet Detection',
      description: 'A hybrid detection model combining Convolutional Neural Networks (CNN) for feature extraction and Reinforcement Learning (RL) for adaptive optimization. Leveraged the N-BaIoT dataset to identify anomalous network traffic with high accuracy.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'CNN', 'Reinforcement Learning', 'Cybersecurity', 'N-BaIoT Dataset'],
      github: 'https://github.com/RanjithKumar100',
      demo: 'https://demo-link.com',
      featured: true,
      category: 'ai-ml',
      date: '2024',
      status: 'completed',
      icon: Shield
    },
    {
      title: 'LOF_Agent - AI Chatbot',
      description: 'Currently developing an intelligent chatbot for Lab of Future website as part of my internship. The project leverages Natural Language Processing and AI to enhance user interaction and provide intelligent responses.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'NLP', 'AI', 'Chatbot Development', 'Web Integration'],
      github: 'https://github.com/RanjithKumar100/LOF_Agent',
      demo: 'https://demo-link.com',
      featured: false,
      category: 'ai-ml',
      date: '2025',
      status: 'in-progress',
      icon: Bot
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and advanced animations. Features smooth scrolling, interactive elements, and a clean design to showcase projects and skills effectively.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      github: 'https://github.com/RanjithKumar100/Personal_Portfolio',
      demo: 'https://demo-link.com',
      featured: false,
      category: 'web',
      date: '2025',
      status: 'completed',
      icon: Brain
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Comprehensive implementation of various data structures and algorithms in C++ and Python. Includes sorting algorithms, graph algorithms, dynamic programming solutions, and competitive programming solutions.',
      image: 'data_structures.png',
      technologies: ['C++', 'Python', 'Data Structures', 'Algorithms', 'Problem Solving'],
      github: 'https://github.com/RanjithKumar100/Coding-Problems',
      demo: 'https://demo-link.com',
      featured: false,
      category: 'programming',
      date: '2023-2024',
      status: 'completed',
      icon: Brain
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai-ml', label: 'AI/ML', count: projects.filter(p => p.category === 'ai-ml').length },
    { id: 'web', label: 'Web Dev', count: projects.filter(p => p.category === 'web').length },
    { id: 'programming', label: 'Programming', count: projects.filter(p => p.category === 'programming').length },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of my key projects that showcase my expertise in AI/ML, web development, and problem-solving
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                filter === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Filter size={16} />
              {category.label}
              <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`project-card bg-gray-900/50 rounded-xl overflow-hidden transition-all duration-300 ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-gray-800/80 rounded-full text-white hover:text-purple-400 transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-gray-800/80 rounded-full text-white hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'completed' 
                        ? 'bg-green-600/20 text-green-300 border border-green-600/30'
                        : 'bg-yellow-600/20 text-yellow-300 border border-yellow-600/30'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>

                  {/* Project Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="p-2 bg-gray-800/80 rounded-full">
                      <project.icon size={20} className="text-purple-400" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      )}
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Calendar size={14} />
                        {project.date}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-300 rounded text-sm border border-purple-600/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Eye size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Projects', value: '10+', color: 'text-purple-400' },
            { label: 'AI/ML Projects', value: '4+', color: 'text-cyan-400' },
            { label: 'Technologies Used', value: '15+', color: 'text-green-400' },
            { label: 'Code Commits', value: '500+', color: 'text-yellow-400' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-900/30 rounded-xl border border-purple-500/20"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;