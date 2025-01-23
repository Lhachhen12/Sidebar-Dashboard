import React, { useState, useEffect } from "react";
import logo from "/logo.png"; // Adjust path to your logo
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  SendToBack,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircle,
} from "lucide-react";

const navLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Activity",
    icon: Clock3,
  },
  {
    name: "Orders",
    icon: SendToBack,
  },
  {
    name: "Analytics",
    icon: BarChart2,
  },
  {
    name: "Transaction",
    icon: ArrowRightLeft,
  },
  {
    name: "Help Center",
    icon: HelpCircle,
  },
];

const variants = {
  expanded: { width: "220px" },
  nonexpanded: { width: "60px" },
};

const NavigationBar = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  // Screen resize
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth < 768) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  const handleNavItemClick = (index) => {
    setActiveNavIndex(index);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      transition={{ duration: 0.5 }} // Smooth transition
      className={`py-4 flex flex-col border-r h-screen relative ${
        isExpanded ? "px-10" : "px-2"
      }`}
    >
      <div className="logo-div flex space-x-4 items-center">
        <img src={logo} alt="Logo" className="h-10 w-12" />
        <span
          className={`font-bold text-xl ${isExpanded ? "block" : "hidden"}`}
        >
          Mero Order
        </span>
      </div>

      <div
        onClick={toggleExpand}
        className="w-5 h-5 absolute left-[280px] top-6 flex items-center justify-center cursor-pointer"
      >
        <Menu size={24} />
      </div>

      <div className="mt-10 flex flex-col space-y-8">
        {navLinks.map((item, index) => (
          <div className="nav-links w-full" key={index}>
            <div
              onClick={() => handleNavItemClick(index)}
              className={`flex space-x-3 w-full p-2 cursor-pointer hover:bg-blue-200 rounded ${
                activeNavIndex === index
                  ? "bg-blue-700 text-white font-semibold"
                  : ""
              } ${isExpanded ? "pl-3" : ""}`}
            >
              <item.icon size={24} className="md:w-6 w-4" />
              <span className={!isExpanded ? "hidden" : "block"}>
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default NavigationBar;
