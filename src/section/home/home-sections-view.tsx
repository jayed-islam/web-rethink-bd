import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { homeSection } from "./constants";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          আমাদের সেকশন
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {homeSection.map((section, index) => (
            <div
              key={index}
              className="bg-white border shadow-sm overflow-hidden transition p-5"
            >
              <Image src={section.image} alt={section.title} className="w-24" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-black mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <FaArrowRight className="text-lime-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
