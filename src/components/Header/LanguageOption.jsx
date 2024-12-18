import React, { useState } from "react";

import usaflag from "../../assets/Icons/usaflag.png";
import gerflag from "../../assets/Icons/germanflag.png";
import italyflag from "../../assets/Icons/italyflag.png";


const LanguageOption = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 p-2 bg-white  rounded focus:outline-none focus:ring-2 focus:ring-blue-600 outline-none"
        >
          <img src={usaflag} alt="flag" className="w-6 h-6 rounded-full" />
          <span className="text-gray-800">Eng ( US )</span>
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 10l5 5 5-5H7z"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="flex flex-row cursor-pointer hover:bg-gray-400 p-3 gap-4">
              <img src={usaflag} alt="flag" className="w-6 h-6 rounded-full" />
              <span className="text-gray-800">Eng ( US )</span>
            </div>
            <div className="flex flex-row cursor-pointer hover:bg-gray-400 p-3 gap-4">
              <img src={gerflag} alt="flag" className="w-6 h-6 rounded-full" />
              <span className="text-gray-800">Ger ( GM )</span>
            </div>
            <div className="flex flex-row cursor-pointer hover:bg-gray-400 p-3 gap-4">
              <img src={italyflag} alt="flag" className="w-6 h-6 rounded-full" />
              <span className="text-gray-800">Ital ( IT )</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageOption;
