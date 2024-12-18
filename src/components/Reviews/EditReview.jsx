import React, { useState } from "react";

import FormInput from "../basic/FormInput";
import Rating from "./Rating";
const EditReview = ({ isOpen, onClose }) => {
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
          <span style={styles.title}>Edit Customer Review</span>
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
            <span>Review Name</span>
            <FormInput />
          </div>
          <div className="flex flex-col gap-1 ">
            <span>Boat Name</span>
            <FormInput />
          </div>
          <div className="flex flex-col gap-1 ">
            <span>Review Content</span>
            <textarea
              name=""
              id=""
              cols="20"
              rows="5"
              style={styles.content}
            ></textarea>
          </div>
          <div className="flex flex-col gap-1 ">
            <span>Rating</span>
            <Rating />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-5 mt-5">
          <div
            style={{ ...styles.btn, backgroundColor: "#2a8500" }}
            className="py-2 px-8 cursor-pointer"
          >
            Save Changes
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
  content: {
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "2px 2px 4px rgba(3,3,3,0.1)",
    backgroundColor: "#ffffff",
    fontSize: "14px",
    outline: "none",
    border: "none",
  },
};
export default EditReview;
