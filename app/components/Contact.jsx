import { assets } from '@/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending message...");
    const formData = new FormData(event.target);

    formData.append("access_key", "c51e162a-e8d2-4525-bd61-43602136de94");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message has been sent successfully.");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setResult("Network error. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id='contact' 
      className='w-full px-[8%] sm:px-[12%] py-16 scroll-mt-20'
    >
      <div className='text-center'>
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-rose-50/80 text-brand border border-rose-200/70 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/60 shadow-sm mb-3'
        >
          <span>05 // LET'S TALK</span>
        </motion.div>

        <motion.h2 
          initial={{ y: -15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white'
        >
          Start a <span className='statxo-gradient'>Conversation</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className='max-w-xl mx-auto mt-4 mb-12 text-base text-slate-600 dark:text-slate-300 leading-relaxed'
        >
          Whether you're interested in collaborating on full-stack web applications, discussing roles, or exploring tech opportunities, I'd love to connect.
        </motion.p>
      </div>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        onSubmit={onSubmit} 
        className='statxo-card p-8 sm:p-10 max-w-2xl mx-auto shadow-soft'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5'>
          <input
            type="text" 
            placeholder='Your name' 
            className='p-3.5 outline-none border border-slate-200 dark:border-slate-800 rounded-xl bg-white/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:border-brand dark:focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all text-sm' 
            required 
            name='name'
          />
          <input
            type="email" 
            placeholder='Your email' 
            className='p-3.5 outline-none border border-slate-200 dark:border-slate-800 rounded-xl bg-white/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:border-brand dark:focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all text-sm' 
            required 
            name='email' 
          />
        </div>

        <textarea 
          rows='5' 
          placeholder='How can I help you?' 
          required 
          className='w-full p-4 outline-none border border-slate-200 dark:border-slate-800 rounded-xl bg-white/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:border-brand dark:focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all text-sm mb-6 resize-none' 
          name='message'
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className='statxo-btn-gradient py-3.5 px-8 rounded-full text-sm font-semibold tracking-wide uppercase flex items-center justify-center gap-2.5 mx-auto shadow-md' 
          type='submit'
        >
          Send Message 
          <Image src={assets.right_arrow_white} alt='' className='w-3.5'/>
        </motion.button>

        {result && (
          <p className='mt-4 text-center text-sm font-medium statxo-gradient'>{result}</p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
