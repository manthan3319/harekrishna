import React from "react";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


const TopNavbar = () => {
 
  return (
    <div className="bg-black">
      <div className="lg:max-w-[1440px] m-auto px-[20px] text-[17px] text-white py-[14px] flex md:flex-row flex-col items-center gap-y-[5px]  justify-between">
        <span className="flex flex-wrap gap-5">
          <p className="">Have Any Questions? </p>
        </span>
        <span className="flex  items-center">
            <MdEmail className="text-xl mr-2" />
            connect@suratrmc.com
          </span>

        <span className="flex items-center gap-7">
          <p className="flex items-center">
            <IoCallSharp className="mr-2" />
            <p>+91 9812106616</p>
          </p>
        </span>
        {/* <div className="flex flex-row gap-[15px]">
          <FaFacebookF className="text-gray-100  hover:text-black duration-200" />
          <FaTwitter className="text-gray-100    hover:text-black duration-200" />
          <FaLinkedinIn className="text-gray-100     hover:text-black duration-200" />
        </div> */}

      </div>
    </div>
  );
};

export default TopNavbar;
