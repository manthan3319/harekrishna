"use client";
import React, { useEffect, useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { MixerTruck } from "../../../public/Image/Images/page";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const images = [
    "/Image/ConstructionBanner.webp",
    "/Image/ConstructionBanner2.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [animationClass, setAnimationClass] = useState("");

  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger animation when 50% of the element is in view
    triggerOnce: true, // Animation should happen only once
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("out-in-animation"); // Trigger animation
      setTimeout(() => {
        // Update indices after animation completes
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setAnimationClass(""); // Reset animation
      }, 1000); // Match animation duration
    }, 5000); // 3 seconds pause + 1 second animation

    return () => clearInterval(interval);
  }, [nextImageIndex, images.length]);

  const backgroundStyle = {
    backgroundImage: "url('Image/contactus-bg.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  return (
    <div style={backgroundStyle} className="bg-primaryColor overflow-hidden">
      <div className="relative overflow-hidden h-screen">
        <div
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ${
            animationClass === "out-in-animation" ? "-translate-x-full" : "translate-x-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
            url(${images[currentImageIndex]})`,
          }}
        ></div>

        <div
          className={`absolute top-0 right-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ${
            animationClass === "out-in-animation" ? "-translate-x-0" : "-translate-x-full"
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
            url(${images[nextImageIndex]})`,
          }}
        ></div>

        <div ref={ref} className="text-gray-200 flex items-center m-auto pt-40 justify-center container relative z-10">
          <div className={`flex flex-row transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="mr-auto font-poppins xl:w-[60%] px-[20px]">
              <h4 className="md:text-[28px] sm:text-[22px] text-[25px] mb-2">
                Turn aspirations into
              </h4>
              <h1 className="lg:text-[66px] md:text-[50px] sm:text-[45px] text-[35px] mb-8 font-extrabold">
                Partner with Surat RMC for quality you can trust
              </h1>
              <p className="font-assistance text-lg mb-[20px] text-[20px]">
                Building unbreakable roots for your ambitions
              </p>
              <button className="text-white w-40 bg-primaryColor py-[10px] px-5 text-lg font-medium rounded-3xl">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Mixer Truck Image */}
        <div>
          <Image
            src={MixerTruck}
            alt="MixerTruck"
            className="2xl:w-[700px] xl:w-[700px] absolute xl:right-[-125px] 2xl:right-0 hidden 2xl:block bottom-[-64px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
