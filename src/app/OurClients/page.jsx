"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:max-w-[1440px] px-[20px] m-auto my-10 overflow-hidden">
      <div className="flex md:flex-row flex-col md:items-center">
        <div className="">
          <h2 className="text-primaryColor text-[25px] font-medium">Our Clients</h2>
          <h1 className="text-[35px] font-poppins font-semibold">Honourable</h1>
          <p className="text-[18px] font-assistance">Clients</p>
        </div>
        <div className="overflow-hidden w-full">
          <Slider {...settings}>
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-center">Client 1</h3>
                <p className="text-center text-sm mt-2">Client description goes here.</p>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-center">Client 2</h3>
                <p className="text-center text-sm mt-2">Client description goes here.</p>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-center">Client 3</h3>
                <p className="text-center text-sm mt-2">Client description goes here.</p>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-center">Client 4</h3>
                <p className="text-center text-sm mt-2">Client description goes here.</p>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-center">Client 5</h3>
                <p className="text-center text-sm mt-2">Client description goes here.</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
