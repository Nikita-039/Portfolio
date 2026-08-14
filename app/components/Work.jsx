import { workData, assets } from '@/assets/assets';  
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='projects' className='w-full px-[12%] py-10 scroll-mt-20'
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
        Featured Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/80'
      >
        Explore my full-stack web development projects built with React, Node.js, Express, MongoDB, and modern AI integrations.
      </motion.p>

      {/* PROJECT CARDS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6 my-10'
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={index} 
            className='border border-gray-400 rounded-xl overflow-hidden p-6 hover:shadow-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white/30 dark:hover:bg-darkHover dark:hover:shadow-white/10 flex flex-col justify-between'
          >
            <div>
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
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white font-Ovo">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-white/80 mt-2 leading-relaxed">{project.description}</p>
                
                {/* Tech badges */}
                {project.tech && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-xs rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Button for Live Demo / GitHub */}
            {project.link && project.link !== '#' ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm font-semibold mt-6 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Live Demo / Code <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="" className="w-3.5" />
              </a>
            ) : (
              <span className="text-xs text-gray-500 dark:text-white/60 mt-6 inline-block">
                Project Code / Live Demo Available
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;


