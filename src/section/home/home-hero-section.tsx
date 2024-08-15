import React from "react";
import Image from "next/image";
import nm from "../../../public/assets/nm.jpg";
import bd from "../../../public/assets/bd-logo.png";
import { leader } from "./constants";

const HomeHeroSection = () => {
  return (
    <div className="relative w-full md:h-[70vh]">
      {/* Background Image */}
      <Image
        src={nm}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col md:flex-row justify-between md:items-center max-w-[81rem] mx-auto p-4 xl:p-0">
        {/* Left Side: Text and Image */}
        <div className="text-white space-y-4 max-w-md md:max-w-lg">
          <div>
            <Image src={bd} alt="Sample Image" className="md:w-24" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            তথ্য ও সম্প্রচার মন্ত্রণালয়
          </h1>
          <p className="text-lg md:text-xl">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>
        </div>

        {/* Right Side: Two Cards */}
        <div className="grid grid-cols-2 gap-5 mt-8 md:mt-0">
          {leader.map((item, index) => (
            <div className="bg-white border border-lime-500 group cursor-pointer">
              <div className="w-full md:w-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="group-hover:scale-105 duration-500 transition-all"
                />
              </div>
              <div className="p-3 flex flex-col items-center ">
                <h3 className="font-bold text-sm group-hover:text-lime-600 transition-all duration-500 cursor-pointer">
                  {item.name}
                </h3>
                <p className="text-gray-700 text-sm mt-1">{item.desi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
