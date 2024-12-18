import React, { useState } from "react";

import FirstDoc from "../../assets/Background/doc1.png";
import SecondDoc from "../../assets/Background/doc2.png";
import FormInput from "../basic/FormInput";
import Option from "../basic/Option";
const NewRefundModal = ({ isOpen, onClose }) => {
  const options = [
    { name: "Option 1", _id: "1" },
    { name: "Option 2", _id: "2" },
    { name: "Option 3", _id: "3" },
  ];
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  if (!isOpen) return null;
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
      <div
        className="bg-white rounded-lg shadow-lg p-6 px-5 py-10"
        style={{ width: "33%" }}
      >
        <div className="flex flex-row justify-between items-center">
          <span style={styles.title}>Upload Refund Details</span>
          <svg
            style={{ ...styles.Icon, fill: "#17233c" }}
            viewBox="0 0 24 24"
            className="cursor-pointer "
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
          </svg>
        </div>
        <div className="flex flex-col mt-3 gap-3">
          <div className="flex flex-col gap-1 ">
            <span>Customer Email</span>
            <FormInput />
          </div>
          <div className="flex flex-col gap-1 ">
            <span>Booking ID</span>
            <FormInput />
          </div>
          <div className="flex flex-col gap-1 ">
            <span>Cancellation</span>
            <FormInput />
          </div>
          <div className="flex flex-col gap-1 ">
            <span>Refound</span>
            <FormInput />
          </div>
          <div className="flex flex-col gap-1 ">
            <span>Refund</span>
            <Option
              defaultValue={null}
              width="w-full"
              options={options}
              name="example-select"
              onChange={handleOptionChange}
              placeholder="Select an option"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <span>Upload Images(optional)</span>
            <div style={{...styles.btn, backgroundColor : '#17233c', width : '20%'}} className="text-center py-2 cursor-pointer mt-2">
              + Add Image
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-5 mt-5">
          <div
            style={{ ...styles.btn, backgroundColor: "#2a8500" }}
            className="py-2 px-8 cursor-pointer"
          >
            Submit
          </div>
          <div
            style={{ ...styles.btn, backgroundColor: "#17233c" }}
            className="py-2 px-8 cursor-pointer"
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  title: {
    color: "#030303",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "28px",
  },
  doccard: {
    backgroundColor: "#ffffff",

    boxSizing: "border-box",
  },
  Icon: {
    color: "#17233c",
    fontSize: "25px",
    top: "270px",
    left: "925px",
    width: "25px",
    height: "25px",
  },

  btn: {
    boxSizing: "border-box",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
    outline: "none",
  },
  item: {
    color: "#17233c",
    fontSize: "14px",
    fontFamily: "Mulish",
    lineHeight: "20px",
  },
};
export default NewRefundModal;
