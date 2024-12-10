"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import {
  CustomMixDesign,
  InfraRental,
  Manufacturing,
  RawMaterialTesting,
  TechnicalConsultancy,
  TechnicalSupport
} from '../../../public/Image/Images/page';

// Dynamic data array for services
const services = [
  {
    id: 1,
    title: 'Manufacturing',
    description:
      'We specialize in the manufacturing and supply of premium-quality ready-mix concrete, designed to meet the precise structural requirements of any project. Whether for residential, commercial, or industrial use, our concrete mixes are tailored for durability, strength, and efficiency.',
    image: Manufacturing,
  },
  {
    id: 2,
    title: 'Technical Consultancy',
    description:
      'Our team of experts offers specialized consultancy services for project plants. From setup and operation to optimizing concrete production processes, we provide paid consultancy to help you achieve operational excellence and cost efficiency.',
    image: TechnicalConsultancy,
  },
  {
    id: 3,
    title: 'Custom Mix Design',
    description:
      'Every construction project is unique, and so are its requirements. Our custom mix design service ensures that the concrete blends are carefully tailored to meet exact project specifications, including strength, workability, and durability.',
    image: CustomMixDesign,
  },
  {
    id: 4,
    title: 'Raw Material Testing Facility',
    description:
      'Quality begins with the raw materials. Our state-of-the-art laboratory is equipped to rigorously test and evaluate raw materials to ensure that the final concrete mix meets the highest industry standards for safety and performance.',
    image: RawMaterialTesting,
  },
  {
    id: 5,
    title: 'Technical Support',
    description:
      'Concrete-related challenges? Weve got you covered. From mix design optimization to practical application advice, our technical support team is here to assist you in achieving the best outcomes for your construction projects.',
    image: TechnicalSupport,
  },
  {
    id: 6,
    title: 'Infra Rental',
    description:
      'Seamlessly execute your projects with our reliable infrastructure rental services. We provide high-quality transit mixers, pumps, and other equipment, ensuring timely project completion without compromising quality.',
    image: InfraRental,
  },
];

const WhatWeDo = () => {
  return (
    <div>
      <div className="lg:max-w-[1440px] px-[20px] m-auto overflow-hidden">
        <div className="text-center my-[50px]">
          <p className="text-[16px] font-poppins text-primaryColor">
            Our Expertise in Construction Solutions
          </p>
          <h1 className="text-[49px] font-bold font-assistance">What We Do</h1>
        </div>

        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[30px]">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="p-[20px] box-shadow1 bg-white rounded-lg shadow-md border-[1px] border-gray-200 hover:shadow-xl hover:border-primaryColor transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}  // Initial state
              whileInView={{ opacity: 1, y: 0 }}  // Animate to full opacity and slide up
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}  // Trigger animation only when the component is in view
            >
              <div className="w-[200px] m-auto h-[200px] bg-primaryColor rounded-full flex items-center justify-center hover:scale-105 transform transition-transform duration-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-[80%] img-filter"
                />
              </div>
              <div className="mt-[20px] text-center">
                <h1 className="text-[20px] font-poppins font-semibold text-black">
                  {service.title}
                </h1>
                <p className="font-assistance text-[16px] text-gray-600 mt-[10px]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
