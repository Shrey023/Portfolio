import React from 'react';
import { motion } from 'framer-motion';
import Scene3D from '../components/3D/Scene3D';
import VibrantCube from '../components/3D/VibrantCube';
import VibrantSphere from '../components/3D/VibrantSphere';
import VibrantTorus from '../components/3D/VibrantTorus';
import FullScreenScene from '../components/3D/FullScreenScene';

const ShreyashPortfolio = () => {
  const projects = [
    {
      title: 'BreatheX',
      description: 'Lung cancer detection system using multi-modal data',
      technologies: ['Python', 'Deep Learning', 'Computer Vision', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      title: 'Drug Discovery using GNNs',
      description: 'Advanced drug discovery system using Graph Neural Networks and Deep Learning',
      technologies: ['PyTorch', 'GNNs', 'Chemistry', 'Machine Learning'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop'
    },
    {
      title: 'AI Resume Evaluator',
      description: 'Intelligent resume evaluation system powered by Gemini API',
      technologies: ['Google Gemini API', 'NLP', 'Python', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop'
    }
  ];

  const extracurriculars = [
    {
      title: 'Podcast Host',
      organization: 'Bookwellcare',
      description: 'Hosting educational podcasts on healthcare and wellness topics'
    },
    {
      title: 'Hackathon Finalist',
      organization: 'IIT Indore Figma Hackathon',
      description: 'Reached finals in the prestigious IIT Indore Figma design hackathon'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Full Screen 3D Background */}
      <div className="fixed inset-0 -z-10">
        <FullScreenScene />
      </div>

      {/* Hero Section with 3D Background */}
      <section className="relative text-white pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        
        <div className="container-max text-center relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative inline-block"
              variants={floatingVariants}
              animate="animate"
            >
              <motion.img
                src={require('../images/shreyash.png')}
                alt="Shreyash Mutha"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-primary-400 rounded-full"
                variants={pulseVariants}
                animate="animate"
              />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Shreyash Mutha
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-6 text-primary-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI & Data Science Student
            </motion.p>
            <motion.p 
              className="text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Enthusiastic AI & Data Science student passionate about building real-world solutions with deep learning and GenAI.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="container-max">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
              variants={itemVariants}
            >
              I'm a passionate AI & Data Science student at VIT Pune, deeply interested in the intersection of 
              artificial intelligence and real-world applications. My journey in technology began with a curiosity 
              about how machines can learn and solve complex problems.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
              variants={itemVariants}
            >
              I specialize in deep learning, computer vision, and generative AI technologies. My goal is to 
              leverage these cutting-edge technologies to create solutions that make a meaningful impact on 
              healthcare, drug discovery, and other critical domains.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
              When I'm not coding or working on AI projects, you can find me hosting podcasts, participating 
              in hackathons, or exploring the latest developments in the AI/ML space.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container-max">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg p-8 hover-3d backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start space-x-6">
                <motion.div 
                  className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">B.Tech in Artificial Intelligence & Data Science</h3>
                  <p className="text-xl text-primary-600 dark:text-primary-400 mb-2">VIT Pune</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">2021 - 2025</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Currently pursuing my undergraduate degree with focus on AI/ML, deep learning, 
                    data science, and their practical applications in real-world scenarios.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="container-max">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Projects & Achievements
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50/90 dark:bg-gray-700/90 rounded-xl overflow-hidden card-hover hover-3d backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* 3D Element for each project */}
                  <div className="absolute top-4 right-4 w-16 h-16 opacity-80">
                    <Scene3D className="w-full h-full">
                      {index === 0 && <VibrantCube position={[0, 0, 0]} size={0.3} speed={1} />}
                      {index === 1 && <VibrantSphere position={[0, 0, 0]} radius={0.15} speed={1.2} />}
                      {index === 2 && <VibrantTorus position={[0, 0, 0]} radius={0.2} tubeRadius={0.05} speed={0.8} />}
                    </Scene3D>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Extra-curriculars Section */}
      <section className="section-padding bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container-max">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Extra-curricular Activities
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {extracurriculars.map((activity, index) => (
              <motion.div 
                key={index} 
                className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg p-6 hover-3d backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">{activity.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{activity.organization}</p>
                    <p className="text-gray-600 dark:text-gray-400">{activity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="container-max">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="max-w-2xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="text-center hover-3d"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <a href="mailto:shreyashmutha3@gmail.com" className="block">
                  <motion.div 
                    className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors cursor-pointer"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                </a>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">shreyashmutha3@gmail.com</p>
              </motion.div>
              <motion.div 
                className="text-center hover-3d"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <a href="https://github.com/shreyash-mutha" target="_blank" rel="noopener noreferrer" className="block">
                  <motion.div 
                    className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors cursor-pointer"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.div>
                </a>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-400">github.com/shreyash-mutha</p>
              </motion.div>
            </div>
            <motion.div 
              className="text-center mt-8 hover-3d"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <a href="https://www.linkedin.com/in/shreyas-mutha-6b0476299/" target="_blank" rel="noopener noreferrer" className="block">
                <motion.div 
                  className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors cursor-pointer"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.div>
              </a>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-400">linkedin.com/in/shreyas-mutha-6b0476299</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ShreyashPortfolio; 