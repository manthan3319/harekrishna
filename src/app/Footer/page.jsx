"use client"
import Image from 'next/image';
import React from 'react';
import { callicon, gmailicon, hklogo, location } from '../../../public/Image/Images/page';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div 
      className="bg-[#d7f2ff] py-[55px] overflow-hidden" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }}  // Trigger opacity change when in view
      transition={{ duration: 1 }}
    >
      <div className="lg:max-w-[1440px] px-[20px] m-auto">
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-[25px] sm:gap-[25px] md:gap-[25px] ld:gap-0'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}  // Trigger when section comes into view
            transition={{ duration: 0.8 }}
          >
            <Image src={hklogo} alt="logo" width={100} height={100} />
            <div className='flex flex-col gap-[15px]'>
              <div>
                <Link href="/" className="flex flex-row items-center gap-2">
                  <div className='text-[30px]'>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className='text-[18px] font-assistance'>207, PARDI ARAK, NAVSARI, GUJARAT 396445</p>
                  </div>
                </Link>
              </div>

              <div>
                <Link href="/" className="flex flex-row items-center gap-2">
                  <div className='text-[22px]'>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className='text-[18px] font-assistance'>harekrishna.rmc16@gmail.com</p>
                  </div>
                </Link>
              </div>

              <div className="flex flex-row items-center gap-2">
                <div className='text-[25px]'>
                  <i className="fa fa-phone-square" aria-hidden="true"></i>
                </div>
                <div>
                  <Link href="/">
                    <p className='text-[18px] font-assistance'>+91 9812106616</p>
                  </Link>
                  <Link href="/">
                    <p className='text-[18px] font-assistance'>+91 9828025116</p>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}  // Trigger when section comes into view
            transition={{ duration: 0.8 }}
          >
            <h1 className='mb-[11px] font-poppins font-bold'>OUR SERVICES</h1>
            <ul className='flex flex-col gap-[25px]'>
              <li>Mix Concrete Production</li>
              <li>On-Site Delivery</li>
              <li>Quality Control Testing</li>
              <li>Technical Support</li>
              <li>Pumping Services</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}  // Trigger when section comes into view
            transition={{ duration: 0.8 }}
          >
            <h1 className='mb-[11px] font-poppins font-bold'>QUICK LINKS</h1>
            <ul className='flex flex-col gap-[25px]'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">About Us</Link></li>
              <li><Link href="/">Our Services</Link></li>
              <li><Link href="/">Blog</Link></li>
              <li><Link href="/">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}  // Trigger when section comes into view
            transition={{ duration: 0.8 }}
          >
            <h1 className='mb-[11px] font-poppins font-bold'>Social Connect</h1>
            <div className='flex flex-row gap-[19px]'>
              <Link href="/" className='text-[30px] text-primaryColor'><i className="fa fa-instagram" aria-hidden="true"></i></Link>
              <Link href="/" className='text-[30px] text-primaryColor'><i className="fa fa-facebook-official" aria-hidden="true"></i></Link>
              <Link href="/" className='text-[30px] text-primaryColor'><i className="fa fa-twitter" aria-hidden="true"></i></Link>
              <Link href="/" className='text-[30px] text-primaryColor'><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
              <Link href="/" className='text-[30px] text-primaryColor'><i className="fa fa-whatsapp" aria-hidden="true"></i></Link>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className='pt-[25px] mt-[30px] text-center border-t border-primaryColor'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}  // Trigger opacity change when in view
        transition={{ duration: 1 }}
      >
        <Link href="/" className='font-assistance text-[18px]'>© Copyright 2024 by Brighten Solutions</Link>
      </motion.div>
    </motion.div>
  );
};

export default Footer;