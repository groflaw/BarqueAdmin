import React, { useState } from "react";

import ZelleImage from "../../assets/Icons/zelle.png";
import WireImage from "../../assets/Icons/bank.png";
import BinanceImage from "../../assets/Icons/binance.png";
import CheckImage from "../../assets/Icons/check.png";
import NoImage from '../../assets/Icons/no.png'
const PayDetailModal = ({ isOpen, onClose,openHost }) => {
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
          <span style={styles.title}>Payment Details</span>
          <svg
            style={{ ...styles.Icon, fill: "#17233c" }}
            viewBox="0 0 24 24"
            className="cursor-pointer "
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
          </svg>
        </div>
        <div className="flex flex-col mt-3">
          <span style={styles.header}>Host Details</span>
          <span style={styles.item}>Name : Emily Johnson</span>
          <span style={styles.item}>Email : Emily Johnson</span>
          <span style={styles.item}>Phone: +58 414 56576542</span>
          <span style={styles.header}>Booking Details</span>
          <span style={styles.item}>Booking ID : 12345678</span>
          <span style={styles.item}>Date : 2023-10-24</span>
          <span style={styles.item}>Total Amount: $250.00</span>
          <span style={styles.item}>Payment Status: Pending</span>
          <span style={styles.header} className="mt-3">
            Payment methods accepted by the host
          </span>
          <div className="flex flex-row gap-3 mt-2">
            <div className="flex flex-row gap-1 items-center">
              <img src={ZelleImage} alt="" style={{width : '30px',height : '30px'}}/>
              <div className=" flex flex-col">
                <div className="flex flex-row gap-1 items-center">
                  <span style={styles.item}>Zelle</span>
                  <img src={CheckImage} alt="" />
                </div>
                <span style={styles.detail}>See Data</span>
              </div>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <img src={WireImage} alt="" style={{width : '30px',height : '30px'}}/>
              <div className=" flex flex-col justify-start">
                <div className="flex flex-row gap-1 items-center">
                  <span style={styles.item}>Wire Transfer</span>
                  <img src={NoImage} alt="" />
                </div>
                <span style={styles.detail}>See Data</span>
              </div>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <img src={BinanceImage} alt="" style={{width : '30px',height : '30px'}}/>
              <div className=" flex flex-col">
                <div className="flex flex-row gap-1 items-center">
                  <span style={styles.item}>Binance Pay</span>
                  <img src={CheckImage} alt="" />
                </div>
                <span style={styles.detail}>See Data</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-5 mt-6">
          <div
            style={{ ...styles.btn, backgroundColor: "#367ec2" }}
            className="py-2 px-8 cursor-pointer"
          >
            Mark as Paid
          </div>
          <div
            style={{ ...styles.btn, backgroundColor: "#072d4c" }}
            className="py-2 px-8 cursor-pointer"
            onClick={openHost}
          >
            Resend Payout Details
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
  detail: {
    cursor : "pointer",
    color: "#367ec2",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
  },
};
export default PayDetailModal;
