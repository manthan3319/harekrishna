"use client";
import React from "react";
import { motion } from "framer-motion";
import WhyChooseUs from "../WhyChooseUs/page";

const ContactUs = () => {
    const backgroundStyle = {
        backgroundImage: "url('Image/contactus-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "350px"
    };

    const contactInfo = [
        {
            id: 1,
            title: "Email Us",
            description: "harekrishna.rmc16@gmail.com",
            icon: "fa-envelope",
            link: "mailto:harekrishna.rmc16@gmail.com"  // Mailto link for email
        },
        {
            id: 2,
            title: "WhatsApp",
            description: "+91 9812106616",
            icon: "fa-whatsapp",
            link: "https://wa.me/919812106616"  // WhatsApp link for direct messaging
        },
        {
            id: 3,
            title: "Location",
            description: "207, Pardi Arak, Navsari, Gujarat 396445",
            icon: "fa fa-map-marker",
            link: "https://www.google.com/maps?q=207,+Pardi+Arak,+Navsari,+Gujarat+396445"  // Google Maps link
        },
    ];

    return (
        <div>
            <motion.div
                style={backgroundStyle}
                className="flex flex-col items-center justify-center py-[20px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="text-white text-center inline-block py-[20px]">
                    <h1 className="text-[45px] font-bold font-assistance">Contact Us</h1>
                    <p className="mt-4 text-[20px] font-poppins">
                        Welcome to Hare Krishna RMC LLP! We are committed to delivering the
                        best ready-mix concrete solutions.
                    </p>
                </div>
            </motion.div>

            <motion.div
                className="container mx-auto py-[10px] px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contactInfo.map((info) => (
                        <motion.div
                            key={info.id}
                            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 * info.id }}
                        >
                            <div className="text-primary text-4xl mb-4">
                                <i className={`fa ${info.icon}`} aria-hidden="true"></i>
                            </div>
                            <h3 className="text-[24px] font-bold mb-2">{info.title}</h3>
                            <p className="text-gray-600 text-[16px]">
                                <a href={info.link} className="text-blue-500 hover:underline">
                                    {info.description}
                                </a>
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Inquiry Form Section */}
            <div className="">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <WhyChooseUs />
                </motion.div>
            </div>
        </div>
    );
};

export default ContactUs;
