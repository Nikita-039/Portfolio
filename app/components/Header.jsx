import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-4xl text-center mx-auto min-h-screen pt-28 pb-16 flex flex-col items-center justify-center gap-5'>
      
      {/* Profile Image with Glowing Gradient Ring */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
        className="relative group cursor-pointer"
      >
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand via-rose-400 to-coral opacity-70 blur-md group-hover:opacity-100 transition duration-500" />
        <div className="relative p-1 rounded-full bg-white dark:bg-darkCard">
          <Image src={assets.profile_img} alt='Nikita' className='rounded-full w-28 sm:w-32 object-cover'/>
        </div>
      </motion.div>

      {/* Statxo-style Overline Pill */}
      <motion.div
        initial={{ y: -15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-rose-50/80 text-brand border border-rose-200/70 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/60 shadow-sm"
      >
        <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
        Hi, I'm Nikita <Image src={assets.hand_icon} alt='' className='w-4 inline-block ml-0.5'/>
      </motion.div>

      {/* Main Impact Heading */}
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }} 
        className='text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]'
      >
        Crafting <span className='statxo-gradient'>Scalable Apps</span> &amp; Modern Web Experiences.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }} 
        className='max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed'
      >
        Java &amp; Full Stack Web Developer experienced in building production-ready interfaces, high-performance backends, and intelligent problem-solving with DSA.
      </motion.p>

      {/* Statxo-styled Action Buttons */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='flex flex-col sm:flex-row items-center gap-4 mt-3'
      >
        <a 
          href="#contact" 
          className='statxo-btn-gradient px-8 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2.5 shadow-lg shadow-brand/20 transition-all duration-300 hover:scale-105'
        >
          Contact me 
          <Image src={assets.right_arrow_white} alt='' className='w-3.5' />
        </a>

        <a 
          href="/Nikita_resume.pdf" 
          download="Nikita_resume.pdf" 
          className='px-8 py-3.5 rounded-full font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-300/80 dark:border-slate-700/80 hover:border-brand dark:hover:border-rose-400 hover:shadow-soft transition-all duration-300 flex items-center gap-2.5 hover:scale-105'
        >
          My Resume 
          <Image src={assets.download_icon} alt='' className='w-3.5' />
        </a>
      </motion.div>

    </div>
  )
}

export default Header
