"use client";
import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animation
import WhyChooseUs from "../WhyChooseUs/page";
import Experience from "../Experience/page";

const OurServices = () => {
  const backgroundStyle = {
    backgroundImage: "url('Image/services-bg.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "350px",
    width: "100%",
    backgroundAttachment: "fixed",
  };

  const services = [
    {
      id: 1,
      title: "Ready-Mix Concrete",
      description: "High-quality concrete solutions for your projects.",
      icon: "fa-cogs", // FontAwesome icon
    },
    {
      id: 2,
      title: "On-Time Delivery",
      description: "Ensuring your materials arrive exactly when needed.",
      icon: "fa-truck",
    },
    {
      id: 3,
      title: "Customized Mix",
      description: "Concrete mixes tailored to your specific requirements.",
      icon: "fa-wrench",
    },
    {
      id: 4,
      title: "Quality Assurance",
      description: "We maintain strict quality checks at every stage.",
      icon: "fa-check-circle",
    },
  ];

  return (
    <div>
      {/* Hero Section with animation */}
      <motion.div
        style={backgroundStyle}
        className="flex flex-col items-center justify-center"
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
            Our Services
          </motion.h1>
          <motion.p
            className="mt-4 text-[20px] font-poppins"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to Hare Krishna RMC LLP! We are committed to delivering the
            best ready-mix concrete solutions.
          </motion.p>
        </div>
      </motion.div>

      {/* Services Cards Section */}
      <motion.div
        className="container mx-auto py-16 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white flex flex-col flex-wrap justify-between rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-primary text-4xl mb-4">
                <i className={`fa ${service.icon}`} aria-hidden="true"></i>
              </div>
              <h3 className="text-[24px] font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-[16px]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Experience />
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <WhyChooseUs />
      </motion.div>
    </div>
  );
};

export default OurServices;
