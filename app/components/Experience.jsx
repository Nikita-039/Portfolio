import { experienceData } from '@/assets/assets';
import React from 'react';
import { motion } from "motion/react";

const Experience = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='experience'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        My Journey
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Work Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/80'
      >
        Hands-on experience building web applications, designing scalable frontends, and engineering robust backend APIs.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='flex flex-col gap-8 max-w-4xl mx-auto'
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            className='border border-gray-400 rounded-xl p-8 bg-white/50 backdrop-blur-sm dark:border-white/40 dark:bg-darkHover/40 hover:shadow-lg transition-all duration-300'
          >
            <div className='flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 dark:border-white/20 pb-4 mb-4 gap-2'>
              <div>
                <h3 className='text-2xl font-semibold text-gray-800 dark:text-white font-Ovo'>
                  {exp.role}
                </h3>
                <p className='text-base font-medium text-blue-600 dark:text-blue-400 mt-0.5'>
                  {exp.company}
                </p>
              </div>
              <span className='px-4 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full dark:bg-white/10 dark:text-white/90 self-start sm:self-center'>
                {exp.period}
              </span>
            </div>

            <ul className='flex flex-col gap-2 list-disc list-inside text-gray-600 dark:text-white/80 text-sm leading-relaxed'>
              {exp.description.map((item, itemIdx) => (
                <li key={itemIdx} className='pl-1'>
                  <span className='-ml-1'>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
