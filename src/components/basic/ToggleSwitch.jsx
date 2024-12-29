import React, { useState } from "react";

const ToggleSwitch = ({ isOn, paysort,name, setIsOn }) => {
  const handleToggle = () => {
    setIsOn(paysort,name,!isOn);
  };

  return (
    <div className="flex items-center cursor-pointer">
      <div
        className={`relative inline-block w-12 h-6 ${
          isOn ? "bg-blue-400" : "bg-gray-300"
        } rounded-full transition`}
        onClick={handleToggle}
      >
        <span
          className={`absolute left-2 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
            isOn ? "transform translate-x-full" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
