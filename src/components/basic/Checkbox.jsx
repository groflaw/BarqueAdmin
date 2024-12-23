import React, { useState } from "react";

const Checkbox = ({ value, onValueChange, disabled }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={value}
        onChange={() => onValueChange(!value)}
        disabled={disabled}
        className={`form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
};

export default Checkbox;
