import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll,setIsScroll] = useState(false)
    const sideMenuRef = useRef();
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY>50){
                setIsScroll(true)

            }else{
                 setIsScroll(false)
            }
        })

    },[])
  return (
    <>
    <nav className={`w-full fixed top-0 left-0 px-5 lg:px-12 py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "bg-white/75 dark:bg-darkTheme/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm" : "bg-transparent"}`}>
        <a href="#top" className="flex items-center gap-2 group">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Nikita' className='w-24 sm:w-28 cursor-pointer transition-transform duration-300 group-hover:scale-105'/>
        </a>

        {/* Desktop Navigation Pill */}
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-2.5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/70 dark:border-slate-800/80 shadow-soft text-sm font-medium text-slate-600 dark:text-slate-300'>
            <li><a className='hover:text-brand dark:hover:text-rose-400 transition-colors' href="#top">Home</a></li>
            <li><a className='hover:text-brand dark:hover:text-rose-400 transition-colors' href="#about">About</a></li>
            <li><a className='hover:text-brand dark:hover:text-rose-400 transition-colors' href="#experience">Experience</a></li>
            <li><a className='hover:text-brand dark:hover:text-rose-400 transition-colors' href="#services">Services</a></li>
            <li><a className='hover:text-brand dark:hover:text-rose-400 transition-colors' href="#projects">Projects</a></li>
            <li><a className='hover:text-brand dark:hover:text-rose-400 transition-colors' href="#contact">Contact</a></li>
        </ul>

        <div className='flex items-center gap-3'>
            <button 
                onClick={()=>setIsDarkMode(prev =>!prev)} 
                aria-label="Toggle Theme"
                className='w-10 h-10 rounded-full flex items-center justify-center border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md hover:border-brand/50 dark:hover:border-brand/50 transition-colors'
            >
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-5'/>
            </button>

            <a href="#contact" className='hidden sm:flex items-center gap-2 px-5 py-2 rounded-full statxo-btn-gradient text-xs font-semibold tracking-wide uppercase transition-all duration-300'>
                Get in touch
                <Image src={assets.right_arrow_white} alt='' className='w-3'/>
            </a>

            <button className='block md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70' onClick={openMenu}>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='Menu' className='w-5'/>
            </button>
        </div>

        {/* Mobile Slide-out Menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white/95 dark:bg-darkTheme/95 backdrop-blur-2xl border-l border-slate-200 dark:border-slate-800 transition duration-500 shadow-2xl text-slate-800 dark:text-slate-100 font-medium'>
            <div className='absolute right-6 top-6 p-2 rounded-full border border-slate-200 dark:border-slate-800' onClick={closeMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='Close' className='w-4 cursor-pointer'/>
            </div>
            <li><a onClick={closeMenu} className='hover:text-brand dark:hover:text-rose-400 transition-colors' href="#top">Home</a></li>
            <li><a onClick={closeMenu} className='hover:text-brand dark:hover:text-rose-400 transition-colors' href="#about">About</a></li>
            <li><a onClick={closeMenu} className='hover:text-brand dark:hover:text-rose-400 transition-colors' href="#experience">Experience</a></li>
            <li><a onClick={closeMenu} className='hover:text-brand dark:hover:text-rose-400 transition-colors' href="#services">Services</a></li>
            <li><a onClick={closeMenu} className='hover:text-brand dark:hover:text-rose-400 transition-colors' href="#projects">Projects</a></li>
            <li><a onClick={closeMenu} className='hover:text-brand dark:hover:text-rose-400 transition-colors' href="#contact">Contact</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
