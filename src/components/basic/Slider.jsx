import React from "react";

const Slider = ({ price, onChange, name }) => {
  const onValueChange = (value) => {
    onChange({ target: { name, value: value } });
  };
  return (
    <div className="flex flex-col mt-3 ">
      <div className="flex justify-between">
        <span className="text-gray-800 text-sm font-semibold">Price Range</span>
        <span className="text-gray-800 text-sm font-semibold">
          {price} - 1000 $
        </span>
      </div>

      <div className="mt-2 relative flex flex-col items-center">
        {/* Custom slider indicator */}
        <div
          className={`absolute h-1 bg-[#17233c] rounded-full z-10 left-1`}
          style={{
            width: `${price / 10}%`,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />

        {/* Range slider input */}
        <input
          type="range"
          min={1}
          max={1000}
          value={price}
          onChange={(e) => onValueChange(Number(e.target.value))}
          className="w-full opacity-100"
          style={{
            WebkitAppearance: "none", // Remove default styling for better cross-browser consistency
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
