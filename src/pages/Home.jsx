import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Scene3D from '../components/3D/Scene3D';
import VibrantCube from '../components/3D/VibrantCube';
import VibrantSphere from '../components/3D/VibrantSphere';
import VibrantTorus from '../components/3D/VibrantTorus';

const Home = () => {
  const developers = [
    {
      id: 'shreyash',
      name: 'Shreyash Mutha',
      role: 'AI & Data Science Student',
      description: 'Enthusiastic AI & Data Science student passionate about building real-world solutions with deep learning and GenAI.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      path: '/shreyash',
      skills: ['Deep Learning', 'GenAI', 'Data Science', 'Python']
    },
    {
      id: 'shrey',
      name: 'Shrey Rai',
      role: 'Web Developer',
      description: 'Creative web developer with an eye for design and detail, loves building UI and interactive experiences.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      path: '/shrey',
      skills: ['React', 'UI/UX', 'JavaScript', 'Design']
    },
    {
      id: 'omkar',
      name: 'Omkar Shinde',
      role: 'Backend Engineer',
      description: 'Backend-focused engineer with interest in scalable APIs and cloud infrastructure.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      path: '/omkar',
      skills: ['Node.js', 'APIs', 'DevOps', 'Cloud']
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section with 3D Background */}
      <section className="relative gradient-bg text-white pt-20 pb-16 overflow-hidden">
        {/* 3D Background Scene */}
        <div className="absolute inset-0 opacity-20">
          <Scene3D className="w-full h-full">
            <VibrantCube position={[-3, 0, 0]} speed={0.8} />
            <VibrantSphere position={[3, 0, 0]} speed={1.2} />
            <VibrantTorus position={[0, 0, 0]} speed={1} />
            <VibrantCube position={[-1.5, 2, 0]} speed={0.6} />
            <VibrantSphere position={[1.5, -2, 0]} speed={1.4} />
          </Scene3D>
        </div>
        
        <div className="container-max text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Portfolio Hub
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the amazing work of talented developers and explore their innovative projects
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {developers.map((dev) => (
              <Link
                key={dev.id}
                to={dev.path}
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                {dev.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Developers
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {developers.map((dev, index) => (
              <motion.div 
                key={dev.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* 3D Element for each card */}
                  <div className="absolute top-4 right-4 w-16 h-16 opacity-80">
                    <Scene3D className="w-full h-full">
                      {index === 0 && <VibrantCube position={[0, 0, 0]} size={0.3} speed={1} />}
                      {index === 1 && <VibrantSphere position={[0, 0, 0]} radius={0.15} speed={1.2} />}
                      {index === 2 && <VibrantTorus position={[0, 0, 0]} radius={0.2} tubeRadius={0.05} speed={0.8} />}
                    </Scene3D>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{dev.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{dev.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{dev.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {dev.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={dev.path}
                    className="inline-block w-full text-center bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors hover:scale-105"
                  >
                    View Portfolio
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Our Portfolio Hub?
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Professional Showcase</h3>
              <p className="text-gray-600 dark:text-gray-400">Beautifully designed portfolios that highlight skills and achievements</p>
            </motion.div>
            <motion.div 
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Diverse Expertise</h3>
              <p className="text-gray-600 dark:text-gray-400">From AI/ML to web development and backend engineering</p>
            </motion.div>
            <motion.div 
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Mobile Responsive</h3>
              <p className="text-gray-600 dark:text-gray-400">Optimized for all devices and screen sizes</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 