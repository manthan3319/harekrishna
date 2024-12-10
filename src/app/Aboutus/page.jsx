"use client"
import React from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion for animation
import Experience from '../Experience/page';

const Aboutus = () => {
  const backgroundStyle = {
    backgroundImage: "url('Image/abouus-bg.svg')", 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
    height: '350px', 
    width: '100%', 
  };

  return (
    <div className=''>
      {/* Background section with animation */}
      <motion.div 
        style={backgroundStyle} 
        className='flex flex-col items-center justify-center'
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <div className="text-white text-center py-20">
          <motion.h1 
            className="text-[45px] font-bold font-assistance"
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p 
            className="mt-4 text-[20px] font-poppins"
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to Hare Krishna RMC LLP! We are committed to delivering the best ready-mix concrete solutions.
          </motion.p>
        </div>
      </motion.div>

      {/* Experience section with animation */}
      <motion.div 
        className='mb-[30px]'
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Experience/>
      </motion.div>
    </div>
  );
};

export default Aboutus;
