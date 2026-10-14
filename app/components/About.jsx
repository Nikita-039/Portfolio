import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[8%] sm:px-[12%] py-16 scroll-mt-20'
    initial ={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:0.8}}
    >
      <div className='text-center'>
        <motion.div
          initial ={{opacity: 0, y:-15}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5, delay:0.2}}
          className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-rose-50/80 text-brand border border-rose-200/70 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/60 shadow-sm mb-3'
        >
          <span>01 // WHO I AM</span>
        </motion.div>

        <motion.h2
          initial ={{opacity: 0, y:-15}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5, delay:0.3}}
          className='text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white'
        >
          Engineering with <span className='statxo-gradient'>Precision &amp; Purpose</span>
        </motion.h2>
      </div>

      <motion.div 
        initial ={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-16 my-16'
      >
        {/* Profile visual container */}
        <motion.div 
          initial ={{opacity: 0, scale:0.92}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:0.6}}
          className='w-64 sm:w-80 rounded-3xl relative group'
        >
          <div className='absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand/30 via-pink-400/20 to-coral/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-500' />
          <div className='relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-darkCard shadow-soft'>
            <Image src={assets.user_image} alt='Nikita' className='w-full object-cover rounded-2xl'/>
          </div>
        </motion.div>

        {/* Content & Cards */}
        <motion.div
          initial ={{opacity: 0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6, delay:0.4}}
          className='flex-1'
        >
          <p className='mb-8 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal'>
            Java and Full Stack Web Developer with hands-on experience in building scalable applications and solving real-world problems using Data Structures and Algorithms. Proficient in both frontend and backend technologies and database management, with a strong foundation in core Java and algorithmic problem-solving.
          </p>

          {/* Statxo Glass Cards Grid */}
          <motion.ul
            initial ={{opacity: 0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8, delay:0.6}}
            className='grid grid-cols-1 sm:grid-cols-3 gap-5'
          >
            {infoList.map(({icon, iconDark, title, description}, index)=>(
              <motion.li
                whileHover={{y: -4}}
                transition={{duration: 0.25}}
                className='statxo-card p-6 flex flex-col justify-between group cursor-pointer' 
                key={index}
              >
                <div>
                  <div className='w-12 h-12 rounded-xl flex items-center justify-center bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-900/50 group-hover:scale-110 transition-transform'>
                    <Image className='w-6' src={isDarkMode ? iconDark : icon} alt={title}/>
                  </div>
                  <h3 className='my-3 font-semibold text-base text-slate-800 dark:text-white tracking-tight'>{title}</h3>
                </div>
                <p className='text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.div
            initial ={{y:15, opacity: 0}}
            whileInView={{y:0, opacity:1}}
            transition={{delay:0.8, duration:0.5}}
            className='mt-10'
          >
            <h4 className='text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4'>
              Core Development Tools
            </h4>
            <div className='flex items-center gap-3 sm:gap-4 flex-wrap'>
              {toolsData.map((tool, index)=>(
                <motion.div 
                  whileHover={{scale:1.08, y: -2}}
                  transition={{duration: 0.2}}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square rounded-xl statxo-card border border-slate-200/80 dark:border-slate-800 p-2 cursor-pointer' 
                  key={index}
                >
                  <Image src={tool} alt='Tool' className='w-6 sm:w-7 object-contain'/>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
