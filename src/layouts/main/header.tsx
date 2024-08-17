"use client";

import React, { useState } from "react";
import {
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Tooltip,
} from "@mui/material";
import { ExpandMore, Search, Notifications } from "@mui/icons-material";
import { deptType, notices, officeType } from "@/constants";
import { CgMenuRight } from "react-icons/cg";
import useBoolean from "@/hooks/use-boolean";
import { configNavigationMenu } from "./config-navigation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineSound } from "react-icons/ai";
import MobileSidebarView from "./mobile-sidebar";
import motamotImage from "../../../public/assets/motamot.gif";
import pollIcon from "../../../public/assets/poll-icon.gif";
import acceci from "../../../public/assets/acceebility.svg";
import Image from "next/image";

const Header = () => {
  const [district, setDistrict] = useState<string | null>(null);
  const [subDistrict, setSubDistrict] = useState<string | null>(null);

  const handleDistrictChange = (event: SelectChangeEvent<string>) => {
    setDistrict(event.target.value);
    setSubDistrict(null);
  };

  const handleSubDistrictChange = (event: SelectChangeEvent<string>) => {
    setSubDistrict(event.target.value);
  };

  const noticeState = useBoolean();

  const drawer = useBoolean();

  const sideIcons = [
    {
      image: motamotImage,
      title: "মতামত",
    },
    {
      image: pollIcon,
      title: "পোলিং",
    },
    {
      image: acceci,
      title: "Accessibility",
    },
  ];

  return (
    <div>
      <header className="bg-white">
        <div className="flex flex-col xl:flex-row justify-between items-center py-7 max-w-[81rem] mx-auto px-5 xl:px-0 gap-5">
          <h1 className="text-xl font-bold">বাংলাদেশ জাতীয় তথ্য বাতায়ন</h1>

          <div className=" flex items-center flex-col gap-5 md:flex-row w-full md:w-auto px-5 xl:px-0">
            <div className=" flex items-center w-full lg:min-w-[25rem]">
              <input
                placeholder="Search..."
                className="outline-none border-[2px] border-gray-200 px-3 h-[3rem] w-full"
              />
              <div className="bg-lime-500 w-[3.5rem] h-[3rem] flex items-center justify-center cursor-pointer">
                <Search className="text-white text-2xl" />
              </div>
            </div>

            <div className="flex items-center flex-col md:flex-row gap-4 w-full">
              <Select
                value={district || ""}
                onChange={handleDistrictChange}
                displayEmpty
                className="w-full md:min-w-[11rem] h-[3rem] rounded-none"
              >
                <MenuItem value="" disabled>
                  অফিসের ধরণ
                </MenuItem>
                {officeType.map((item, index) => (
                  <MenuItem value={item.value}>{item.label}</MenuItem>
                ))}
              </Select>

              <div className="flex items-center gap-2 flex-row w-full">
                <Select
                  value={subDistrict || ""}
                  onChange={handleSubDistrictChange}
                  displayEmpty
                  className="w-full md:min-w-[13rem] h-[3rem] rounded-none"
                  disabled={!district}
                >
                  <MenuItem value="" disabled>
                    মন্ত্রণালয় নির্বচন করুন
                  </MenuItem>
                  {deptType.map((item, index) => (
                    <MenuItem value={item.value}>{item.label}</MenuItem>
                  ))}
                </Select>
                <div className="bg-lime-500 w-[3.5rem] h-[3rem] flex items-center justify-center cursor-pointer text-white">
                  GO
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Layer */}
        <div className="bg-[#0e7346] h-[3rem]">
          <div className="flex items-center justify-between max-w-[81rem] mx-auto h-full px-5 xl:px-0">
            <div className="flex h-full items-center justify-start">
              <div className="h-full relative z-30 px-5 md:px-0">
                <div className="h-full w-full flex items-center gap-7 justify-between">
                  <div
                    className="flex items-center space-x-2 cursor-pointer w-full md:w-[21rem] bg-lime-500 h-full px-5 justify-between"
                    onClick={noticeState.toggle}
                  >
                    <h2 className="font-semibold text-lg text-white">
                      নোটিশ বোর্ড
                    </h2>
                    <AiOutlineSound className="text-white text-2xl" />
                  </div>
                  <IconButton className="md:hidden" onClick={drawer.setTrue}>
                    <CgMenuRight className="text-white text-3xl" />
                  </IconButton>
                </div>

                <div
                  style={{
                    height: noticeState.value ? "23rem" : "0",
                    overflow: "hidden",
                  }}
                  className="bg-gray-100 shadow-sm transition-all duration-500 w-full md:w-[21rem] "
                >
                  <div className="p-3 flex flex-col gap-3">
                    {notices.map((item, index) => (
                      <div className="flex items-start gap-2">
                        <div>
                          <MdOutlineKeyboardArrowRight className="text-xl text-lime-500" />
                        </div>
                        <h2 className="text-sm">
                          {item} <span className="text-red-500">(নতুন)</span>
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <nav className="space-x-6 ml-7 h-full  items-center z-30 hidden lg:flex">
                {configNavigationMenu.map((menu, index) => (
                  <div key={index} className="relative group h-full">
                    <div className="text-white text-md h-full flex items-center cursor-pointer">
                      {menu.label}
                    </div>

                    {/* Mega Menu */}
                    <div className="absolute left-0 p-4 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 min-w-[25rem] w-full">
                      <div className="grid grid-cols-2 gap-10 w-full">
                        {menu.categories.map((category, idx) => (
                          <div key={idx}>
                            <h4 className="font-bold whitespace-nowrap text-sm">
                              {category.title}
                            </h4>
                            <div className="mt-3 flex flex-col gap-1">
                              {category.items.map((item, id) => (
                                <div
                                  key={id}
                                  className="whitespace-nowrap text-sm hover:bg-gray-200 p-1 cursor-pointer"
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </nav>
            </div>
            <div className="hidden md:flex item gap-3">
              {sideIcons.map((item) => (
                <div className="cursor-pointer">
                  <Tooltip title={item.title}>
                    <Image src={item.image} alt="" className="w-9" />
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <MobileSidebarView drawer={drawer} />
    </div>
  );
};

export default Header;
