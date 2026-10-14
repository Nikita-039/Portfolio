import { workData, assets } from '@/assets/assets';  
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id='projects' 
      className='w-full px-[8%] sm:px-[12%] py-16 scroll-mt-20'
    >
      <div className='text-center'>
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-rose-50/80 text-brand border border-rose-200/70 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/60 shadow-sm mb-3'
        >
          <span>04 // FEATURED WORK</span>
        </motion.div>

        <motion.h2
          initial={{ y: -15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white'
        >
          Highlighted <span className='statxo-gradient'>Engineering Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className='max-w-2xl mx-auto mt-4 mb-14 text-base text-slate-600 dark:text-slate-300 leading-relaxed'
        >
          Real-world applications engineered with modern frontend frameworks, cloud databases, RESTful APIs, and intelligent AI models.
        </motion.p>
      </div>

      {/* PROJECT CARDS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto'
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            key={index} 
            className='statxo-card p-6 flex flex-col justify-between group shadow-soft hover:shadow-xl transition-all duration-300'
          >
            <div>
              {/* Project Image with hover zoom */}
              <div className='relative w-full h-48 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-800/80'>
                <Image 
                  src={project.bgImage} 
                  alt={project.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Project Details */}
              <div className="mt-5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{project.description}</p>
                
                {/* Tech badges */}
                {project.tech && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-xs rounded-full font-medium bg-rose-50/80 text-brand border border-rose-200/60 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/50">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Statxo Styled Action Button */}
            {project.link && project.link !== '#' ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="statxo-btn-gradient px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 w-full mt-6 shadow-sm"
              >
                Live Demo 
                <Image src={assets.right_arrow_white} alt="" className="w-3" />
              </a>
            ) : (
              <div className="text-center py-2.5 mt-6 text-xs text-slate-500 dark:text-slate-400 border border-dashed border-slate-300 dark:border-slate-700 rounded-full">
                Live Demo Available
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;


