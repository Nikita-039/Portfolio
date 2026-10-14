import { experienceData } from '@/assets/assets';
import React from 'react';
import { motion } from "motion/react";

const Experience = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id='experience'
      className='w-full px-[8%] sm:px-[12%] py-16 scroll-mt-20'
    >
      <div className='text-center'>
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-rose-50/80 text-brand border border-rose-200/70 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/60 shadow-sm mb-3'
        >
          <span>02 // EXPERIENCE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white'
        >
          Work Experience &amp; <span className='statxo-gradient'>Internships</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='max-w-2xl mx-auto mt-4 mb-14 text-base text-slate-600 dark:text-slate-300 leading-relaxed'
        >
          Hands-on software engineering experience delivering production features, responsive UIs, and robust backend integrations.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className='flex flex-col gap-6 max-w-4xl mx-auto'
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className='statxo-card p-6 sm:p-8 relative overflow-hidden group shadow-soft'
          >
            {/* Soft Ambient Corner Glow */}
            <div className='absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-brand/10 via-coral/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-brand/20 transition-all duration-500' />

            <div className='flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/70 dark:border-slate-800/80 pb-4 mb-5 gap-2'>
              <div>
                <h3 className='text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight'>
                  {exp.role}
                </h3>
                <div className='flex items-center gap-2 mt-1'>
                  <span className='w-2 h-2 rounded-full bg-brand' />
                  <span className='text-sm font-semibold statxo-gradient'>
                    {exp.company}
                  </span>
                </div>
              </div>
              <span className='px-4 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 rounded-full border border-slate-200/70 dark:border-slate-700/70 self-start sm:self-center shadow-sm'>
                {exp.period}
              </span>
            </div>

            <ul className='flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
              {exp.description.map((item, itemIdx) => (
                <li key={itemIdx} className='flex items-start gap-3'>
                  <span className='w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0' />
                  <span>{item}</span>
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
