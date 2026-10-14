import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
const Services = ({ isDarkMode }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id='services' 
      className='w-full px-[8%] sm:px-[12%] py-16 scroll-mt-20'
    >
      <div className='text-center'>
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-rose-50/80 text-brand border border-rose-200/70 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/60 shadow-sm mb-3'
        >
          <span>03 // CAPABILITIES &amp; EXPERTISE</span>
        </motion.div>

        <motion.h2 
          initial={{ y: -15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white'
        >
          End-to-End <span className='statxo-gradient'>Engineering Solutions</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className='max-w-2xl mx-auto mt-4 mb-14 text-base text-slate-600 dark:text-slate-300 leading-relaxed'
        >
          Architecting reliable web products from intuitive, high-performance user interfaces to resilient APIs and structured database models.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto'
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            key={index} 
            className='statxo-card p-8 flex flex-col justify-between group relative overflow-hidden shadow-soft'
          >
            {/* Top Statxo Gradient Accent Bar */}
            <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-rose-500 to-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

            <div>
              <div className='w-14 h-14 rounded-2xl flex items-center justify-center bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/50 mb-6 group-hover:scale-110 transition-transform'>
                <Image src={icon} alt={title} className='w-7' />
              </div>
              <h3 className='text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-3'>{title}</h3>
              <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>{description}</p>
            </div>

            <div className='mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/60'>
              <a href={link || "#projects"} className='inline-flex items-center gap-2 text-sm font-semibold text-brand dark:text-rose-400 group-hover:gap-3 transition-all duration-300'>
                Explore projects 
                <Image alt='' src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} className='w-3.5'/>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
