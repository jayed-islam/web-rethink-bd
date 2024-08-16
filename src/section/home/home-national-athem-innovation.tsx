import React from "react";
import { FaCheck } from "react-icons/fa";
// import audio from '../../../public/audio/amar-sonar-bangla-national-anthem-of-bangladesh.mp3'

const nationalAnthem = {
  title: "বাংলাদেশের জাতীয় সংগীত",
  description: "ক্লিক করুন নিচের প্লে বাটনে বাংলাদেশের জাতীয় সংগীত শুনতে।",
  audioSrc: "/assets/audio/amar-sonar-bangla-national-anthem-of-bangladesh.mp3",
};

const innovationCornerItems = [
  "ইনোভেশন কর্নার",
  "ইনোভেশন টিম",
  "ইনোভেশন টিমের বার্ষিক কর্ম-পরিকল্পনা",
  "অগ্রগতি প্রতিবেদন",
];

const HomeNationalAnthemAndInnovation = () => {
  return (
    <section className="w-full py-7">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          {/* National Anthem Section */}
          <div className="flex-1 bg-gray-50 p-7">
            <h2 className="text-3xl font-bold text-black mb-4 text-center">
              {nationalAnthem.title}
            </h2>
            <p className="text-gray-700 text-center mb-6">
              {nationalAnthem.description}
            </p>
            <div className="flex justify-center">
              <audio controls className="w-full max-w-lg">
                <source src={nationalAnthem.audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          {/* Innovation Corner Section */}
          <div className="flex-1 bg-gray-50 p-7">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">
              ইনোভেশন কর্নার
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {innovationCornerItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-3 border transition flex items-center cursor-pointer"
                >
                  <div className="bg-lime-500 rounded-full p-2">
                    <FaCheck className="text-md text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 ml-4 hover:underline ">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNationalAnthemAndInnovation;
