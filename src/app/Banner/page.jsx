"use client";
import React, { useEffect, useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { MixerTruck } from "../../../public/Image/Images/page";
import Link from "next/link";

const Banner = () => {
  const images = [
    "/Image/ConstructionBanner.webp",
    "/Image/ConstructionBanner2.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [animationClass, setAnimationClass] = useState("");

  const [ref, inView] = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("fade-animation"); 
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setAnimationClass(""); 
      }, 1000); 
    }, 5000); 

    return () => clearInterval(interval);
  }, [nextImageIndex, images.length]);

  const backgroundStyle = {
    backgroundImage: "url('/Image/contactus-bg.svg')",
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
            animationClass === "fade-animation" ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
            url(${images[currentImageIndex]})`,
          }}
        ></div>

        <div
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ${
            animationClass === "fade-animation" ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
            url(${images[nextImageIndex]})`,
          }}
        ></div>

        {/* Banner Content */}
        <div ref={ref} className="text-gray-200 flex items-center m-auto pt-40 justify-center container relative z-10">
          <div
            className={`flex flex-row transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mr-auto font-poppins xl:w-[80%] px-[20px]">
              <h4 className="md:text-[28px] sm:text-[22px] text-[25px] mb-2">
                Transforming Dreams into
              </h4>
              <h1 className="lg:text-[66px] md:text-[50px] sm:text-[45px] text-[35px] mb-8 font-extrabold">
              Reliable Foundations with  <span className="text-[#34A3DB]">HARE KRISHNA RMC</span> Your Trusted Partner.
              </h1>
              <p className="font-assistance text-lg mb-[20px] text-[20px]">
              Crafting sturdy bases for your success.
              </p>
              <Link href="/ContactUs" className="text-white w-40 mt-[45px] text-center inline-block bg-primaryColor py-[10px] px-5 text-lg font-medium rounded-3xl hover:bg-[#34A3DB]">
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Image
            src={MixerTruck}
            alt="Mixer Truck"
            width={500}
            height={500}
            className="2xl:w-[700px] xl:w-[700px] absolute xl:right-[-125px] 2xl:right-0 hidden 2xl:block bottom-[-64px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
