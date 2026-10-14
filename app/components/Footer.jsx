import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className='mt-24 pb-12'>
      <div className='text-center'>
        <a 
          href="mailto:nikita.nik393@gmail.com"
          className='inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-brand dark:hover:border-rose-400 hover:text-brand dark:hover:text-rose-400 transition-all duration-300 shadow-sm'
        >
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-4'/>
          nikita.nik393@gmail.com
        </a>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-slate-200/70 dark:border-slate-800/80 mx-[8%] sm:mx-[12%] mt-10 pt-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400'>
        <p>© 2026 Nikita. All rights reserved.</p>
        <ul className='flex items-center gap-8 justify-center mt-4 sm:mt-0 font-medium'>
          <li>
            <a 
              target='_blank' 
              rel='noopener noreferrer' 
              href="https://github.com/Nikita-039"
              className='hover:text-brand dark:hover:text-rose-400 transition-colors'
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              target='_blank' 
              rel='noopener noreferrer' 
              href="https://www.linkedin.com/in/nikita-8ba1a028b"
              className='hover:text-brand dark:hover:text-rose-400 transition-colors'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
