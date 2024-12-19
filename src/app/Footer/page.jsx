"use client"
import Image from 'next/image';
import React from 'react';
import { hklogo, whatshappicon } from '../../../public/Image/Images/page';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className='relative'>


      <motion.div
        className="bg-[#d7f2ff] py-[55px] overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}  // Trigger opacity change when in view
        transition={{ duration: 1 }}
      >
        <div className="lg:max-w-[1440px] px-[20px] m-auto">
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-[25px] sm:gap-[25px] md:gap-[25px] ld:gap-0'>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}  // Trigger when section comes into view
              transition={{ duration: 0.8 }}
            >
              <Image src={hklogo} alt="logo" width={100} height={100} />
              <div className='flex flex-col gap-[15px]'>
                <div>
                  <Link href="https://www.google.com/maps/place/21%C2%B002'38.7%22N+72%C2%B059'49.6%22E/@21.0451439,72.9961302,156m/data=!3m1!1e3!4m4!3m3!8m2!3d21.0440941!4d72.9971085?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" className="flex flex-row items-center gap-2">
                    <div className='text-[30px]'>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p className='text-[18px] font-assistance'>
                        <p target="_blank" rel="noopener noreferrer">
                          207, Vill. PARDI ARAK, NEAR PALSANA CHOKDI,
                          Distt. NAVSARI, GUJARAT 396475
                        </p>
                      </p>
                    </div>
                  </Link>
                </div>

                <div>
                  <Link href="mailto:harekrishna.rmc16@gmail.com" className="flex flex-row items-center gap-2">
                    <div className='text-[22px]'>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p className='text-[18px] font-assistance'>
                        <a href="mailto:harekrishna.rmc16@gmail.com">harekrishna.rmc16@gmail.com</a>
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <div className='text-[25px]'>
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                  </div>
                  <div>
                    <Link href="tel:+919812106616">
                      <p className='text-[18px] font-assistance'>+91 9812106616</p>
                    </Link>
                    <Link href="tel:+919828025116">
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
                <li><Link href="/Aboutus">About Us</Link></li>
                <li><Link href="/OurServices">Our Services</Link></li>
                <li><Link href="/ContactUs">Contact</Link></li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          className='pt-[25px] mt-[30px] text-center border-t border-primaryColor'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}  // Trigger opacity change when in view
          transition={{ duration: 1 }}
        >
          <Link href="https://brightensolutions.com/" className='font-assistance text-[18px]'>© Copyright 2024 by Brighten Solutions</Link>
        </motion.div>


      </motion.div>
      <Link
        href="https://wa.me/919812106616"
        className="bottom-[21px] fixed right-[5px] animate-zoom"
      >
        <Image
          src={whatshappicon}
          alt="whatsapp"
          width={60}
          height={60}
        />
      </Link>


    </div>
  );
};

export default Footer;
