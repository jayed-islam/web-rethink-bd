import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { eSheba, hlink } from "./constants";

const HomeImportantLinkAndESheba = () => {
  return (
    <div className="w-full py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-0">
        {/* Left Side: Important Links */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            গুরুত্বপূর্ণ লিংক
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {hlink.map((link, index) => (
              <div
                key={index}
                className="bg-white shadow-md overflow-hidden p-3 flex flex-col items-center justify-center border border-transparent hover:border-lime-500 transition-all duration-500 group cursor-pointer"
              >
                <Image
                  src={link.image}
                  alt={link.title}
                  className="w-20 object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 transition-all duration-500 group-hover:underline text-center">
                    {link.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: E-Sheba */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            অভ্যন্তরীণ ই-সেবাসমূহ
          </h2>
          <ul className="space-y-4">
            {eSheba.map((sheba, index) => (
              <li
                key={index}
                className="flex items-center bg-white p-4 shadow-md hover:bg-gray-50 cursor-pointer group"
              >
                <FiArrowRight className="text-md text-gray-600 mr-4" />
                <span className="font-medium text-gray-800 group-hover:underline transition-all duration-500 text-md">
                  {sheba}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeImportantLinkAndESheba;
