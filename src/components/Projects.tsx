import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Calendar, Brain, Shield, Bot } from 'lucide-react';

const Projects = () => {
  
  const projects = [
    // === FEATURED AI/ML PROJECTS ===
    {
      title: 'DeepClassify - Object Classification',
      description: 'AI-powered traffic system for real-time vehicle counting and detection using computer vision and machine learning.',
      image: 'deepclassify.png',
      technologies: ['Python', 'Computer Vision', 'Machine Learning', 'OpenCV'],
      github: 'https://github.com/RanjithKumar100/Object_Detection_CV',
      featured: false,
      date: '2024',
      status: 'completed',
      icon: Brain
    },
    {
      title: 'PharmaAssist - Q&A Chatbot',
      description: 'AI-powered PDF chatbot that uses NLP and Generative AI with FAISS for fast, context-aware document search and accurate, citation-based responses.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'NLP', 'GenAI', 'FAISS'],
      github: 'https://github.com/RanjithKumar100/Q-A-ChatBot-For-Documentation',
      demo: 'https://demo-link.com',
      featured: false,      
      date: '2024',
      status: 'completed',
      icon: Bot
    },
    {
      title: 'SecureNet - IoT Botnet Detection',
      description: 'Hybrid CNN and RL model for detecting anomalous network traffic using the N-BaIoT dataset with high accuracy.',
      image: '/Personal_Portfolio/projects/securenet.png',
      technologies: ['Python', 'CNN', 'Reinforcement Learning','N-BaIoT Dataset'],
      github: 'https://github.com/RanjithKumar100',
      demo: 'https://demo-link.com',
      featured: false,
      date: '2024',
      status: 'completed',
      icon: Shield
    },
    {
      title: 'LOF_Agent - AI Chatbot',
      description: 'Developing an AI-powered chatbot using NLP to enhance user interaction and deliver intelligent responses for the Lab of Future website.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'NLP', 'AI', 'Chatbot Development', 'Web Integration'],
      github: 'https://github.com/RanjithKumar100/LOF_Agent',
      demo: 'https://demo-link.com',
      featured: false,
      date: '2025',
      status: 'in-progress',
      icon: Bot
    },
    // === WEB DEVELOPMENT PROJECTS ===
    {
      title: 'TimeWise',
      description: 'TimeWise CRM is a full-stack time management system built with Next.js and MongoDB, featuring time tracking, role-based access, analytics, secure authentication, leave management, and real-time monitoring with a modern UI.',
      image: '/Personal_Portfolio/projects/Timewise.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      github: 'https://github.com/RanjithKumar100/Personal_Portfolio',
      demo: 'https://demo-link.com',
      featured: false,
      date: '2025',
      status: 'completed',
      icon: Brain
    },

    // === PROGRAMMING & ALGORITHMS ===
    {
      title: 'Data Structures & Algorithms',
      description: 'Comprehensive implementation of various data structures and algorithms in C++ and Python. Includes sorting algorithms, graph algorithms, dynamic programming solutions, and competitive programming solutions.',
      image: 'data_structures.png',
      technologies: ['C++', 'Python', 'Data Structures', 'Algorithms', 'Problem Solving'],
      github: 'https://github.com/RanjithKumar100/Coding-Problems',
      demo: 'https://demo-link.com',
      featured: false,
      date: '2023-2024',
      status: 'completed',
      icon: Brain
    }
  ];

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
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`project-card bg-secondary-900/50 rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden group h-48 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-secondary-800/80 rounded-full text-white hover:text-primary-400 transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="p-2 bg-secondary-800/80 rounded-full text-white hover:text-primary-500 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'completed'
                        ? 'bg-primary-600/20 text-primary-300 border border-primary-600/30'
                        : 'bg-accent-600/20 text-accent-300 border border-accent-600/30'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>

                  {/* Project Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="p-2 bg-secondary-800/80 backdrop-blur-sm rounded-full">
                      <project.icon size={20} className="text-primary-400" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <h3 className="text-xl font-bold text-white flex-grow">{project.title}</h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {project.featured && (
                        <Star className="w-4 h-4 text-accent-400 fill-current" />
                      )}
                      <div className="flex items-center gap-1 text-secondary-400 text-sm whitespace-nowrap">
                        <Calendar size={14} />
                        {project.date}
                      </div>
                    </div>
                  </div>

                  <p className="text-secondary-400 mb-4 leading-relaxed text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-primary-600/20 to-primary-700/20 text-primary-300 rounded-md text-xs border border-primary-600/30 font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto pt-4 border-t border-secondary-800/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary-400 hover:text-primary-400 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">View Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;