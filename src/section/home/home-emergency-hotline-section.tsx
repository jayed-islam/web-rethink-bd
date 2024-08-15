import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { hotlines, innovationCorner } from "./constants";

const HomeEmergencyHotlineSection = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          বাংলাদেশের জরুরী সেবার হটলাইন নাম্বার সমূহ
        </h2>

        {/* Hotlines List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotlines.map((hotline, index) => (
            <div
              key={index}
              className="bg-gray-100 p-5 flex items-start space-x-4 border border-transparent hover:border-lime-500 transition-all duration-500 cursor-pointer"
            >
              <FiPhoneCall className="text-green-600 text-3xl flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  ☎ {hotline.number}
                </h3>
                <p className="text-lg font-medium text-gray-700 mt-1">
                  {hotline.shortTitle}
                </p>
                <p className="text-gray-600 mt-2 text-xs">
                  {hotline.description}
                </p>
              </div>
            </div>
            // <div
            //   key={index}
            //   className="bg-gray-100 p-5 flex items-start space-x-4"
            // >
            //   <FiPhoneCall className="text-green-600 text-3xl flex-shrink-0" />
            //   <div>
            //     <h3 className="text-2xl font-semibold text-gray-800">
            //       ☎ {hotline.number}
            //     </h3>
            //     <p className="text-gray-600 mt-2">{hotline.description}</p>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeEmergencyHotlineSection;
