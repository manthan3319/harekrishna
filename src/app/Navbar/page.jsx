"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const Navbar = () => {
  const navlist = [
    { name: "Home", path: "/" },
    {
      name: "About Us", path: "/Aboutus"
    },
    { name: "Our Services", path: "/OurServices" },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // State to track scroll position
  const [isSticky, setIsSticky] = useState(false);

  // Use effect hook to add sticky class on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`bg-slate-50 transition-all duration-500 ${isSticky ? "sticky top-[-1px] shadow-lg z-[999]" : ""}`}>
      <div className="lg:max-w-[1440px] px-[20px] mx-auto">
        <div className="hidden md:block">
          <div className="flex justify-between items-center">
            <div>
              <Link href='/'>
                <Image
                  src="/Image/Hare-Krishna-Logo.jpeg"
                  width={100}
                  height={100}
                  alt="Hare-Krishna Logo"
                />
              </Link>
            </div>

            <ul className="flex items-center gap-8">
              {navlist.map((item, index) => (
                <li key={index} className="relative group">
                  <Link
                    href={item.path}
                    className="flex items-center gap-[6px] text-lg font-medium text-gray-800 hover:text-primaryColor transition"
                  >
                    {item.name}
                    <span className="mt-1"> {item.icon} </span>
                  </Link>

                  {item.dropdown && (
                    <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md h-[96px] z-10 w-48">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="py-[10px] px-2 transition hover:bg-gray-800 hover:text-primaryColor"
                        >
                          <Link href={subItem.path} className="block text-lg">
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              <button className="text-white bg-primaryColor py-2 px-5 text-lg font-medium rounded-3xl">
                <Link href='/ContactUs'>
                  Contact Us
                </Link>
              </button>
            </ul>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className="block md:hidden">
          <div className="flex flex-row justify-between items-center">
            <div>
              <Link href='/'>
                <Image
                  src="/Image/Hare-Krishna-Logo.jpeg"
                  width={100}
                  height={100}
                  alt="Hare-Krishna Logo"
                />
              </Link>
            </div>
            <div>
              <button onClick={toggleDrawer} className="text-[35px]"><i className="fa fa-bars" aria-hidden="true"></i></button>
            </div>
          </div>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            className='bla bla bla'
          >
            <div>
              <ul className="flex flex-col px-[10px] gap-8 mt-[25px]">
                {navlist.map((item, index) => (
                  <li key={index} className="relative group">
                    <Link
                      href={item.path}
                      className="flex items-center gap-[6px] text-lg font-medium text-gray-800 hover:text-primaryColor transition"
                    >
                      {item.name}
                      <span className="mt-1"> {item.icon} </span>
                    </Link>

                    {item.dropdown && (
                      <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md h-[96px] z-10 w-48">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="py-[10px] px-2 transition hover:bg-gray-800 hover:text-primaryColor"
                          >
                            <Link href={subItem.path} className="block text-lg">
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                <button className="text-white bg-primaryColor py-2 px-5 text-lg font-medium rounded-3xl">
                  <Link href='/ContactUs'>
                    Contact Us
                  </Link>
                </button>
              </ul>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
