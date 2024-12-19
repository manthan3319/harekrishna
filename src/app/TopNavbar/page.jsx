import React from "react";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const TopNavbar = () => {
  return (
    <div className="bg-black">
      <div className="lg:max-w-[1440px] m-auto px-[20px] text-[17px] text-white py-[14px] flex md:flex-row flex-col items-center gap-y-[5px] justify-between">
        <span className="flex flex-wrap gap-5">
          <p>Have Any Questions?</p>
        </span>
        <span className="flex items-center">
          <MdEmail className="text-xl mr-2" />
          <a
            href="mailto:harekrishna.rmc16@gmail.com"
            className="hover:underline"
          >
            harekrishna.rmc16@gmail.com
          </a>
        </span>

        <span className="flex items-center gap-7">
          <p className="flex items-center">
            <IoCallSharp className="mr-2" />
            <a href="tel:+919812106616" className="hover:underline">
              +91 9812106616
            </a>
          </p>
        </span>
      </div>
    </div>
  );
};

export default TopNavbar;
