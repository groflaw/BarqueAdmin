import React, { useState } from "react";

import NumberInput from "../basic/Number";
import Option from "../basic/Option";
import Slider from "../basic/Slider";

const Filter = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [price, setPrice] = useState(500); // Default price

  if (!isOpen) return null;

  const options = [
    { name: "Option 1", _id: "1" },
    { name: "Option 2", _id: "2" },
    { name: "Option 3", _id: "3" },
  ];

  const handleValueChange = (value) => {
    setPrice(value);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-1/5 p-6">
        <div style={styles.headbox}>
          <span style={styles.headbox.title}>Filter Search</span>
        </div>

        <div className="mt-2 gap-2 flex flex-col">
          <span style={styles.item}>Size(ft)</span>
          <NumberInput />
        </div>
        <div className="mt-2 gap-2 flex flex-col">
          <span style={styles.item}>Size(ft)</span>
          <Option
            defaultValue={null}
            width="w-full"
            options={options}
            name="example-select"
            onChange={handleOptionChange}
            placeholder="Select an option"
          />
        </div>
        <div className="mt-2 gap-2 flex flex-col">
          <span style={styles.item}>Size(ft)</span>
          <NumberInput />
        </div>
        <div className="mt-2 gap-2 flex flex-col">
          <span style={styles.item}>Size(ft)</span>
          <Option
            defaultValue={null}
            width="w-full"
            options={options}
            name="example-select"
            onChange={handleOptionChange}
            placeholder="Select an option"
          />
        </div>
        <div className="mt-2 gap-2 flex flex-col">
          <Slider price={price} onValueChange={handleValueChange} />
        </div>
        <div className="flex flex-row justify-center">
          <div
            className="bg-blue-950 hover:bg-blue-900 text-center active:bg-gray-600 mt-4"
            style={{ ...styles.btn, width: "45%" }}
          >
            Apply Filters
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  headbox: {
    backgroundColor: "#ffffff",
    boxShadow: "2px -2px 10px rgba(3,3,3,0.1)",
    padding: "15px",
    title: {
      color: "#030303",
      fontSize: "20px",
      fontFamily: "Lexend Deca",
      fontWeight: 700,
      lineHeight: "28px",
    },
  },
  item: {
    color: "#17233c",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    lineHeight: "20px",
  },
  btn: {
    cursor: "pointer",
    padding: "10px 18px",
    border: "0",
    boxSizing: "border-box",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "20px",
  },
};
export default Filter;
