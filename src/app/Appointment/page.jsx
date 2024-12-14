"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Appointment = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initially hidden
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="mt-32 inline-block w-[100%] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url(/Image/appointment.jpg)`,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container font-poppins py-20 px-4 text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="md:text-[28px] mb-2">
            Get Your Quote or Call: +91 9812106616
          </p>
          <h3 className="md:text-[36px] mb-12">
            Are You Ready? Book Appointment Now!
          </h3>
          <Link href="/ContactUs"
            className="py-3 px-7 text-lg bg-primaryColor font-assistance hover:bg-secondaryColor duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Appointment;
