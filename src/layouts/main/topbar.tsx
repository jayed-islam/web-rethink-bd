"use client";

import React, { useState, useRef, useEffect } from "react";
import { Popover } from "@mui/material";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";

import bd from "../../../public/assets/bd.png";
import usa from "../../../public/assets/usa.png";

const languages = [
  { name: "English", image: usa },
  { name: "Bangla", image: bd },
];

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? "language-popover" : undefined;

  const selectLanguage = (language: { name: string; image: any }) => {
    setSelectedLanguage(language);
    handleClose();
  };

  return (
    <div className="border-b border-gray-200">
      <div className="w-full py-2 px-5 lg:px-0 flex justify-between items-center max-w-[81rem] mx-auto">
        {/* Language Dropdown */}
        <div className="relative">
          <div
            className="cursor-pointer flex items-center"
            onClick={handleClick}
          >
            <Image
              className="mr-2 h-3 w-4"
              src={selectedLanguage.image}
              alt=""
            />
            <h2 className="text-sm">{selectedLanguage.name}</h2>
            <RiArrowDropDownLine
              className={`text-2xl transform transition-transform duration-500 ${
                open ? "rotate-180" : ""
              }`}
            />
          </div>

          <Popover
            id={popoverId}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            // PaperProps={{
            //   className: "transition-width duration-300 ease-in-out",
            //   style: { height: open ? "auto" : 0 },
            // }}
          >
            <div className="bg-white text-black rounded shadow-lg p-2">
              {languages.map((language) => (
                <div
                  key={language.name}
                  className="p-2 cursor-pointer hover:bg-gray-100 flex items-center"
                  onClick={() => selectLanguage(language)}
                >
                  <Image
                    className="mr-2 h-3.5 w-5"
                    src={language.image}
                    alt=""
                  />
                  <h2 className="text-sm">{language.name}</h2>
                </div>
              ))}
            </div>
          </Popover>
        </div>

        {/* Right Side Menu Items */}
        <div className="flex items-center space-x-6">
          <div className="cursor-pointer text-sm hover:text-gray-500 duration-400">
            Account
          </div>
          <div className="cursor-pointer text-sm hover:text-gray-500 duration-500">
            Sign In
          </div>
          <div className="cursor-pointer text-sm hover:text-gray-500 duration-500">
            Help
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
