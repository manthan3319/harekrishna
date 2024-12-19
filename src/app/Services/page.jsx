"use client";
import React from "react";
import Image from "next/image";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { service1, Services2, services3, services4, services5, services6, services7, services8, services9 } from "../../../public/Image/Images/page";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Example service data
const serviceData = [
  {
    id: 1,
    image: service1,
    title: "Qualified Technician",
    description:
      "Qualified technicians ensure the highest standards of expertise and precision in every aspect of Ready-Mix Concrete services.",
  },
  {
    id: 2,
    image: Services2,
    title: "Sand operations",
    description:
      "Timely and efficient delivery of Ready-Mix Concrete tailored to meet project requirements with utmost reliability.",
  },
  {
    id: 3,
    image: services3,
    title: "Construction Materials",
    description:
      "Providing high-quality construction materials for diverse projects, ensuring durability and cost-efficiency.",
  },
  {
    id: 5,
    image: services4,
    title: "Manufacturing",
    description:
      "We specialize in the manufacturing and supply of premium-quality ready-mix concrete, designed to meet the precise structural requirements of any project. Whether for residential, commercial, or industrial use, our concrete mixes are tailored for durability, strength, and efficiency.",
  },
  {
    id: 6,
    image: services5,
    title: "Technical Consultancy",
    description:
      "Our team of experts offers specialized consultancy services for project plants. From setup and operation to optimizing concrete production processes, we provide paid consultancy to help you achieve operational excellence and cost efficiency.",
  },
  {
    id: 7,
    image: services6,
    title: "Custom Mix Design",
    description:
      "Every construction project is unique, and so are its requirements. Our custom mix design service ensures that the concrete blends are carefully tailored to meet exact project specifications, including strength, workability, and durability.",
  },
  {
    id: 8,
    image: services7,
    title: "Raw Material Testing Facility",
    description:
      "Quality begins with the raw materials. Our state-of-the-art laboratory is equipped to rigorously test and evaluate raw materials to ensure that the final concrete mix meets the highest industry standards for safety and performance.",
  },
  {
    id: 9,
    image: services8,
    title: "Technical Support",
    description:
      "Concrete-related challenges? Weve got you covered. From mix design optimization to practical application advice, our technical support team is here to assist you in achieving the best outcomes for your construction projects.",
  },
];

const Services = () => {
  const sliderSettings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 425, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  // Intersection Observer for triggering animation
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div ref={ref}>
      <div className="lg:max-w-[1440px] m-auto px-[30px] overflow-hidden relative">
        {/* Title Section */}
        <motion.div
          className="text-center font-poppins mt-20"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-primaryColor text-xl mb-3">Our Services</h3>
          <h4 className="text-4xl text-slate-700 mb-3">What We Specialize In</h4>
          <p className="max-w-[620px] m-auto text-lg font-assistance">
            We provide professional services in the field of Ready-Mix Concrete
            (RMC), delivering reliable solutions for your construction needs.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 m-auto"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Slider {...sliderSettings} className="flex flex-wrap justify-center gap-6 relative">
            {serviceData.map((service) => (
              <motion.div
                key={service.id}
                className="p-[20px] border-l border-r border-b-seconderyYellow border-b-[4px] flex flex-col h-[500px] justify-between" // Set a fixed height here
                variants={fadeInVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <div className="h-[200px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`Image for ${service.title}`}
                    width={348}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-5 flex items-center justify-center gap-7 text-[18px] font-semibold text-gray-800 group duration-500 px-8 py-3 rounded-lg bg-seconderyYellow hover:bg-primaryColor hover:text-white">
                  <FaLongArrowAltRight className="hidden group-hover:flex" />
                  <button>{service.title}</button>
                </div>

                <p className="py-5 px-3 text-center flex-grow">{service.description}</p>
              </motion.div>


            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
