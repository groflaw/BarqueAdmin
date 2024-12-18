import React, { useState } from "react";

const DetailModal = ({ isOpen, onClose }) => {
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
          <span style={styles.title}>Booking Details</span>
          <svg
            style={{ ...styles.Icon, fill: "#17233c" }}
            viewBox="0 0 24 24"
            className="cursor-pointer "
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
          </svg>
        </div>
        <div className="flex flex-col mt-3 ">
          <span style={styles.header}>Guest Details</span>
          <span>Name: John Doe</span>
          <span>Email: Sea Explorer</span>
          <span>Phone: Alice Johnson</span>
          <span style={styles.header}>Booking Details</span>
          <span>Booking ID: 5</span>
          <span>Date: Miami, FL USA</span>
          <span>Total Amount: Marina the good life</span>
        </div>
        <div className="flex flex-row justify-center gap-5 mt-5">
          <div
            style={{ ...styles.btn, backgroundColor: "#2a8500" }}
            className="py-2 px-8 cursor-pointer"
          >
            Confirm Booking
          </div>
          <div
            style={{ ...styles.btn, backgroundColor: "#ff3b30" }}
            className="py-2 px-8 cursor-pointer"
          >
            Cancel Booking
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
    lineHeight: "20px",
  },
  header: {
    color: "#17233c",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
  },
};
export default DetailModal;
