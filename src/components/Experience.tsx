import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ExternalLink, X } from 'lucide-react';

const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Lab of Future',
      location: 'Chennai',
      period: 'Current',
      description: [
        'Currently working as a Software Engineer at Lab of Future, contributing to real-world AI solutions',
        'Actively involved in building an intelligent chatbot for the Lab of Future website',
        'Leveraging NLP and AI to enhance user interaction',
      ],
      technologies: ['Python', 'NLP', 'AI/ML', 'Docker', 'GitHub'],
      link: 'https://github.com/RanjithKumar100/LOF_Agent',
      current: true
    }
  ];

  const certifications = [
    {
      title: 'PrepInsta Certified C++ Developer',
      issuer: 'PrepInsta',
      type: 'Programming',
      image: '/Personal_Portfolio/certificates/certificate_DSA in C++.jpg'
    },
    {
      title: 'Big Data in AI',
      issuer: 'LinkedIn',
      type: 'Emerging Tech',
      image: '/Personal_Portfolio/certificates/Big Data in AI.jpg'
    },
    {
      title: 'MySQL Certificate',
      issuer: 'Guvi',
      type: 'Database',
      image: '/Personal_Portfolio/certificates/MySQL.jpg'
    },
    {
      title: 'Introduction to Cloud Computing',
      issuer: 'Infosys Springboard',
      type: 'Cloud',
      image: '/Personal_Portfolio/certificates/Cloud_Computing.jpg'
    },
    {
      title: 'IOT and ES',
      issuer: 'InternEzy',
      type: 'IOT',
      image: '/Personal_Portfolio/certificates/IOT_With_ES.jpg'
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'Cisco',
      type: 'Data Science',
      image: '/Personal_Portfolio/certificates/Introduction_to_DataScience.jpg'
    }
  ];

  const activities = [
    {
      icon: '📄',
      title: 'IEEE Publication',
      description: '"SecureNet" - Adaptive IoT Botnet Attack Detection ',
      link: 'View Publication',
      image: '/Personal_Portfolio/active engagements/Paper Presentation.jpg'
    },
    {
      icon: '🥇',
      title: 'IEEE CIS',
      description: 'Senior Domain Associate',
      link: 'View Certificate',
      image: '/Personal_Portfolio/active engagements/IEEE_CS.jpg'
    },
    {
      icon: '🏆',
      title: 'Talos 3.0 (Cognitive Clues)',
      description: '1st place - Built an AI-driven puzzle solver at CIT College inter-college competition.',
      link: 'View Award',
      image: '/Personal_Portfolio/active engagements/cognitive clues.jpeg'
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
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-600 mx-auto"></div>
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
                className="experience-card bg-secondary-800/30 p-8 rounded-xl relative"
              >
                {exp.current && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-sm border border-primary-600/30">
                      Current
                    </span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-primary-400 mb-2">
                      <Briefcase size={18} />
                      <span className="text-xl font-semibold">{exp.company}</span>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-primary-500 hover:text-primary-400"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-secondary-400">
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
                    <li key={idx} className="text-secondary-300 flex items-start gap-2">
                      <span className="text-primary-400 mt-0 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-sm border border-primary-600/30"
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
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => {
                  console.log('Opening certificate:', cert.image);
                  setSelectedCertificate(cert.image);
                }}
                className="relative bg-gradient-to-br from-secondary-900/80 to-secondary-950/80 backdrop-blur-xl p-8 rounded-2xl border border-primary-500/20 hover:border-primary-400/50 transition-all cursor-pointer group overflow-hidden"
              >
                {/* Decorative corner badge */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full"></div>

                {/* Certificate icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" className="text-primary-500"/>
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Platform badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary-600/20 text-primary-300 rounded-full text-xs font-medium border border-primary-500/30">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Certificate title */}
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {cert.title}
                  </h4>

                  {/* Certificate type */}
                  <p className="text-secondary-400 text-sm mb-4">{cert.type}</p>

                  {/* View Certificate button */}
                  <div className="flex items-center gap-2 text-primary-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Certificate</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                  initial={false}
                />
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
          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-gradient-to-br from-secondary-900/80 to-secondary-950/80 backdrop-blur-xl p-8 rounded-2xl border border-primary-500/20 hover:border-primary-400/50 transition-all group overflow-hidden flex flex-col h-full"
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"
                  initial={false}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{activity.icon}</div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {activity.title}
                  </h4>

                  {/* Description */}
                  <p className="text-secondary-400 text-sm mb-6 leading-relaxed flex-grow">
                    {activity.description}
                  </p>

                  {/* Link */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Clicking activity:', activity.title, 'Image:', activity.image);
                      setSelectedCertificate(activity.image);
                    }}
                    className="inline-flex items-center gap-2 text-primary-500 text-sm font-medium hover:text-primary-400 transition-colors mt-auto relative z-20"
                  >
                    <span>{activity.link}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4 md:p-8"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute -top-14 right-0 bg-primary-600/20 hover:bg-primary-600/40 text-white p-2 rounded-full transition-all hover:scale-110 border border-primary-500/30"
              >
                <X size={28} />
              </button>

              {/* Certificate image */}
              <img
                src={selectedCertificate}
                alt="Certificate"
                className="w-full h-auto rounded-xl shadow-2xl border-4 border-primary-500/30"
                style={{ maxHeight: '85vh', objectFit: 'contain', backgroundColor: 'white' }}
                onLoad={() => console.log('Certificate loaded successfully:', selectedCertificate)}
                onError={(e) => {
                  console.error('Failed to load certificate:', selectedCertificate);
                  alert('Certificate path: ' + selectedCertificate);
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;