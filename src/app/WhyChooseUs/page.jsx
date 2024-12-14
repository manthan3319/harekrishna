"use client";
import Image from 'next/image';
import React from 'react';
import { ExpertiseandSupport, QualityAssurance, SustainabilityFocus, TimelyDelivery } from '../../../public/Image/Images/page';
import { motion } from 'framer-motion'; // Importing framer-motion


const WhyChooseUs = () => {
  return (
    <div className="mt-[150px] mb-[100px] relative overflow-hidden">
      <div className="absolute bg-primaryColor md:w-[25%] w-[50%] h-[598px] top-[-50px] left-0 z-[-1]"></div>
      <div className="lg:max-w-[1440px] px-[20px] m-auto">
        <div className="flex md:flex-row flex-col justify-between relative z-[99]">
          <motion.div
            className="md:w-[40%] w-[100%] bg-seconderyYellow p-[30px] book_call"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}  // Trigger animation when component comes into view
            transition={{ duration: 1 }}
            viewport={{ once: true }}  // Ensures the animation happens only once when the component comes into view
          >
            <h1 className="text-[22px] text-white font-poppins font-semibold">Book Your Call Now</h1>
            <p className="text-[18px] text-white font-poppins my-[15px]">
              Elevate your construction projects with top-quality concrete solutions Lets build success together!
            </p>

            <div className="flex flex-col gap-[15px]">
              <input
                type="text"
                placeholder="Enter Your Name:"
                className="w-full py-[15px] text-white placeholder-white font-poppins text-[15px] outline-none bg-transparent border-b border-black"
              />
              <input
                type="email"
                placeholder="Enter Your Email:"
                className="w-full py-[15px] text-white placeholder-white font-poppins text-[15px] outline-none bg-transparent border-b border-black"
              />
              <input
                type="Number"
                placeholder="Enter Your Number:"
                className="w-full py-[15px] text-white placeholder-white font-poppins text-[15px] outline-none bg-transparent border-b border-black"
              />
            </div>
            <div className="mt-[30px]">
              <button className="bg-primaryColor text-white font-assistance py-[15px] text-[18px] px-[25px] rounded-lg">Make a call right now</button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-[55%] w-[100%]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}  // Trigger animation when component comes into view
            transition={{ duration: 1 }}
            viewport={{ once: true }}  // Ensures the animation happens only once
          >
            <p className="bg-seconderyYellow py-[15px] px-[20px] text-white inline-block rounded-sm text-[18px] font-poppins">Benefits of working with us</p>
            <h1 className="text-[35px] font-poppins font-semibold my-[35px]">Why Choose Us</h1>

            <motion.div
              className="grid grid-cols-2 gap-[15px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}  // Trigger animation when component comes into view
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}  // Ensures the animation happens only once
            >
              <motion.div
                className="bg-white p-[10px] box-shadow_whychoose"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={QualityAssurance} className="w-[80px]" alt="Advanced Technology" />
                <h1>Advanced Technology</h1>
                <p>Consistent, high-quality concrete for reliable structures.</p>
              </motion.div>
              <motion.div
                className="bg-white p-[10px] box-shadow_whychoose"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={ExpertiseandSupport} className="w-[80px]" alt="Reliable Partnerships" />
                <h1>Reliable Partnerships</h1>
                <p>Guidance throughout the project lifecycle.</p>
              </motion.div>
              <motion.div
                className="bg-white p-[10px] box-shadow_whychoose"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={TimelyDelivery} className="w-[80px]" alt="Efficient Execution" />
                <h1>Efficient Execution</h1>
                <p>Minimizing delays, optimizing construction schedules.</p>
              </motion.div>
              <motion.div
                className="bg-white p-[10px] box-shadow_whychoose"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={SustainabilityFocus} className="w-[80px]" alt="Eco-Friendly Practices" />
                <h1>Eco-Friendly Practices</h1>
                <p>Eco-friendly practices for greener projects.</p>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
