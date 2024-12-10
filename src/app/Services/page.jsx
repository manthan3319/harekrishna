"use client";
import React from "react";
import Image from "next/image";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { service1 } from "../../../public/Image/Images/page";
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
    image: service1,
    title: "Sand operations",
    description:
      "Timely and efficient delivery of Ready-Mix Concrete tailored to meet project requirements with utmost reliability.",
  },
  {
    id: 3,
    image: service1,
    title: "Transport services",
    description:
      "Offering tailored solutions to meet diverse project needs, ensuring flexibility and precision in concrete applications.",
  },
  {
    id: 4,
    image: service1,
    title: "Construction Materials",
    description:
      "Providing high-quality construction materials for diverse projects, ensuring durability and cost-efficiency.",
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
    prevArrow: <FaLongArrowAltLeft className="custom-arrow slick-prev" />,
    nextArrow: <FaLongArrowAltRight className="custom-arrow slick-next" />,
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
      <div className="lg:max-w-[1440px] m-auto px-[20px] overflow-hidden">
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

        {/* Slider Section */}
        <motion.div
          className="mt-10"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Slider {...sliderSettings} className="flex flex-wrap justify-center gap-6">
            {serviceData.map((service) => (
              <motion.div
                key={service.id}
                className="max-w-[348px] h-[450px] border-l border-r border-b-seconderyYellow border-b-[4px] flex flex-col"
                variants={fadeInVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {/* Image Section */}
                <div className="h-[200px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`Image for ${service.title}`}
                    width={348}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Button Section */}
                <div className="mt-5 flex items-center justify-center gap-7 text-[18px] font-semibold text-gray-800 group duration-500 px-8 py-3 rounded-lg bg-seconderyYellow hover:bg-primaryColor hover:text-white">
                  <FaLongArrowAltRight className="hidden group-hover:flex" />
                  <button>{service.title}</button>
                </div>

                {/* Description Section */}
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
