import { workData } from '@/assets/assets';  
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work' className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end and full-stack development.
      </motion.p>

      {/* PROJECT CARDS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 sm:grid-cols-2 gap-6 my-10'
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index} 
            className='border border-gray-400 rounded-lg overflow-hidden px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
          >
            {/* Project Image */}
            <Image 
              src={project.bgImage} 
              alt={project.title} 
              width={500}  
              height={300} 
              className="w-full h-48 object-cover rounded-lg"
              loading="lazy"
            />
            
            {/* Project Details */}
            <div className="mt-5">
              <h3 className="text-lg text-gray-700 dark:text-white">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-white/80 mt-2">{project.description}</p>
              
              {/* Button for Live Demo / GitHub */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm mt-5 text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project <img src="/right-arrow.png" alt="" className="w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;


