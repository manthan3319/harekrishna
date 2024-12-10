"use client";

import React from "react";
import Image from "next/image";
import { constructiionBuildingImg } from "../../../public/Image/Images/page";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2,    // Trigger when 20% of the section is visible
  });

  // Animation variants for smooth effects
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // Add delay between child animations
    },
  };

  return (
    <div className="mt-[40px] overflow-hidden" ref={ref}>
      <motion.div
        className="lg:max-w-[1440px] m-auto px-[20px]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex md:flex-row flex-col bg-normalbg rounded-r-[15px] border-l-0">
          {/* Left Image Section */}
          <motion.div
            className="relative flex-1 block md:hidden"
            variants={imageVariants}
          >
            <div>
              <Image
                src={constructiionBuildingImg}
                alt="year experience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white font-bold font-poppins absolute top-[35%] text-center left-[20%]">
              <h1 className="text-[146px] leading-none">20</h1>
              <p className="tracking-[5px]">YEAR EXPERIENCE WORKING</p>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 bg-cover bg-center relative hidden md:block"
            style={{
              backgroundImage: `url('Image/constructiion-building-img.png')`,
            }}
            variants={imageVariants}
          >
            <div className="text-white font-bold font-poppins absolute top-[35%] text-center left-[20%]">
              <h1 className="text-[146px] leading-none">20</h1>
              <p className="tracking-[5px]">YEAR EXPERIENCE WORKING</p>
            </div>
          </motion.div>

          {/* Right Text Section */}
          <motion.div className="flex-1 px-6" variants={textVariants}>
            <h2 className="text-[45px] font-bold font-assistance mb-6">
              About Us
            </h2>
            <p className="text-[18px] font-assistance mb-4">
              <b>Hare Krishna RMC LLP</b> is a leading ready-mix concrete supplier
              based in Navsari, Gujarat. Established with a vision to redefine
              the construction industry, we bring over 20 years of unparalleled
              experience and expertise in delivering high-quality concrete
              solutions to our clients.
            </p>
            <p className="text-[18px] font-assistance mb-4">
              We specialize in providing durable and sustainable construction
              materials that meet the highest industry standards. Our state-of-the-art
              manufacturing facilities and expert team ensure precision and reliability
              in every project we undertake.
            </p>
            <motion.h3
              className="text-2xl font-semibold mb-4"
              variants={textVariants}
            >
              Our Vision
            </motion.h3>
            <p className="text-[18px] font-assistance mb-4">
              To be recognized as a benchmark in the concrete industry by
              consistently delivering exceptional quality, innovation, and
              customer satisfaction while maintaining sustainable and eco-friendly
              practices.
            </p>
            <div>
              <motion.h3
                className="text-2xl font-semibold mb-4"
                variants={textVariants}
              >
                Our Mission
              </motion.h3>
              <p className="text-[18px] font-assistance">
                Our mission is to revolutionize the construction industry by delivering high-quality ready-mix concrete solutions tailored to meet the unique needs of our clients. We strive to foster long-lasting relationships by emphasizing precision, innovation, and reliability in every project. At Hare Krishna RMC LLP, we are dedicated to enhancing infrastructure while adhering to sustainable practices and eco-friendly principles, ensuring a better tomorrow for our communities.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
