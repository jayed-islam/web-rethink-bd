import React from "react";
import logo from "../../../public/assets/bd-logo.png";
import fb from "../../../public/assets/facee.png";
import yt from "../../../public/assets/youtubb.png";
import technicalHelperImg from "../../../public/assets/tecnical--img.png";
import Image from "next/image";
import { links, linksSecond } from "@/constants";

const Footer = () => {
  const social = [fb, yt];

  return (
    <footer className="bg-gray-800">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 pt-16 pb-11 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Image src={logo} alt="" />

            <p className="mt-4 max-w-xs text-gray-300 cursor-pointer">
              পরিকল্পনা ও বাস্তবায়নে: মন্ত্রিপরিষদ বিভাগ, এটুআই, বিসিসি,
              ডিওআইসিটি ও বেসিস।
            </p>

            <div className="mt-8 flex gap-4">
              {social.map((item) => (
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <Image src={item} alt="fb" className="w-9" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-white">Quick Links</p>

              <div className="mt-6 space-y-2 text-sm">
                {links.map((item) => (
                  <h2 className="text-gray-400 transition hover:opacity-75  cursor-pointer hover:underline">
                    {item}
                  </h2>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium text-white">পরিকল্পনা ও বাস্তবায়নে</p>

              <div className="mt-6 space-y-2 text-sm">
                {linksSecond.map((item) => (
                  <h2 className="text-gray-400 transition hover:opacity-75  cursor-pointer hover:underline">
                    {item}
                  </h2>
                ))}
              </div>
            </div>

            <div className="col-span-2">
              <p className="font-medium text-white">কারিগরি সহায়তায়:</p>
              <Image
                src={technicalHelperImg}
                alt="Technical Helper"
                className="mt-11"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500">
        <div className="flex items-center flex-col lg:flex-row justify-between max-w-7xl mx-auto py-5">
          <p className="text-xs text-gray-400">
            &copy; 2024. বাংলাদেশ জাতীয় তথ্য বাতায়ন. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-xs text-gray-400">
            সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২৪-০৮-১৪ ১৪:০২:৩১
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
