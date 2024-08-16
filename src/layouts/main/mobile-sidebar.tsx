import { BooleanState } from "@/types/utils";
import { Drawer, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { configNavigationMenu } from "./config-navigation";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import logo from "../../../public/assets/bd-logo.png";
import Image from "next/image";
import motamotImage from "../../../public/assets/motamot.gif";
import pollIcon from "../../../public/assets/poll-icon.gif";
import acceci from "../../../public/assets/acceebility.svg";

type ExpandedMenusState = {
  [key: number]: boolean;
};

interface Props {
  drawer: BooleanState;
}

const MobileSidebarView: React.FC<Props> = ({ drawer }) => {
  const [expandedMenus, setExpandedMenus] = useState<ExpandedMenusState>({});

  const toggleMenu = (index: number) => {
    setExpandedMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

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
    <Drawer open={drawer.value} onClose={drawer.toggle}>
      <div className="p-5">
        {/* Close Icon */}

        <div className="flex justify-between">
          <Image src={logo} alt="logo" className="w-11" />
          <IconButton onClick={drawer.toggle}>
            <IoMdClose className="" />
          </IconButton>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-9">
          {configNavigationMenu.map((menu, index) => (
            <div key={index} className="mb-4">
              {/* Menu Title */}
              <div
                className="text-sm font-semibold cursor-pointer flex justify-between items-center"
                onClick={() => toggleMenu(index)}
              >
                <span>{menu.label}</span>
                {expandedMenus[index] ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              {/* Mega Menu (Collapsible) */}
              <div
                className={`mt-3 pl-4 overflow-hidden transition-all duration-300 ${
                  expandedMenus[index] ? "max-h-screen" : "max-h-0"
                }`}
              >
                {menu.categories.map((category, idx) => (
                  <div key={idx} className="mb-3">
                    <h4 className="font-medium text-sm">{category.title}</h4>
                    <div className="mt-2 flex flex-col gap-2">
                      {category.items.map((item, id) => (
                        <div
                          key={id}
                          className="text-sm hover:bg-gray-700 p-1 cursor-pointer"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="flex item gap-3">
          {sideIcons.map((item) => (
            <div className="cursor-pointer">
              <Tooltip title={item.title}>
                <Image src={item.image} alt="" className="w-9" />
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default MobileSidebarView;
