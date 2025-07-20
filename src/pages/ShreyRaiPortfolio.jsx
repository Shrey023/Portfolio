import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import FullScreenScene from '../components/3D/FullScreenScene';
import VibrantCube from '../components/3D/VibrantCube';
import VibrantSphere from '../components/3D/VibrantSphere';
import VibrantTorus from '../components/3D/VibrantTorus';
import Scene3D from '../components/3D/Scene3D';

const ShreyRaiPortfolio = () => {
  const { isDark } = useTheme();
  
  const projects = [
    {
      title: 'Electronics E-commerce Website',
      description: 'Full-stack e-commerce platform for electronics with user authentication and payment integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      title: 'Lung Cancer Prediction',
      description: 'Machine learning model for early detection of lung cancer using medical imaging data',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn'],
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop'
    },
    {
      title: 'Wildlife Detection by YOLO v5',
      description: 'Real-time wildlife detection system using YOLO v5 for conservation monitoring',
      technologies: ['YOLO v5', 'Python', 'OpenCV', 'PyTorch'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop'
    }
  ];

  const achievements = [
    {
      title: 'Core Team Member',
      organization: 'EPEC',
      description: 'Core team member of EPEC (Electronics and Programming Enthusiasts Club)'
    },
    {
      title: 'UI/UX Design Competition Finalist',
      organization: 'IIT Indore',
      description: 'Top 3 finalist in IIT Indore UI/UX design competition'
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

      {/* Hero Section */}
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
                src="/src/images/shrey.png"
                alt="Shrey Rai"
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
              Shrey Rai
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-6 text-primary-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-Stack Developer
            </motion.p>
            <motion.p 
              className="text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate developer creating impactful digital experiences with modern web technologies.
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
              I'm an enthusiastic B.Tech student in Artificial Intelligence & Data Science at VIT Pune with a strong passion for building impactful digital experiences. I specialize in full-stack web development using React, Node.js, and MongoDB, and enjoy creating interactive, user-centric interfaces.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
              variants={itemVariants}
            >
              Beyond development, I lead multimedia projects—from editing client videos to coordinating team efforts for college event coverage. I combine logic and creativity to solve problems, whether it's through code or compelling visual storytelling.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
              Currently learning <strong>Kubernetes</strong> and <strong>GoLang</strong>. When I'm not coding, 
              you can find me contributing to various clubs and events. I believe in the power of design 
              to solve problems and create meaningful connections between users and technology.
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
                  <p className="text-gray-600 dark:text-gray-400 mb-4">2023 - 2027</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Currently pursuing my undergraduate degree with focus on AI/ML, full-stack development, 
                    database systems, and software architecture principles.
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

      {/* Achievements Section */}
      <section className="section-padding bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container-max">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Achievements
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">{achievement.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{achievement.organization}</p>
                    <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
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
                <a href="mailto:shreyrai299@gmail.com" className="block">
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
                <p className="text-gray-600 dark:text-gray-400">shreyrai299@gmail.com</p>
              </motion.div>
              <motion.div 
                className="text-center hover-3d"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <a href="https://github.com/Shrey023" target="_blank" rel="noopener noreferrer" className="block">
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
                <p className="text-gray-600 dark:text-gray-400">github.com/Shrey023</p>
              </motion.div>
            </div>
            <motion.div 
              className="text-center mt-8 hover-3d"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <a href="https://www.linkedin.com/in/shrey-rai-/" target="_blank" rel="noopener noreferrer" className="block">
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
              <p className="text-gray-600 dark:text-gray-400">linkedin.com/in/shrey-rai-</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ShreyRaiPortfolio; 