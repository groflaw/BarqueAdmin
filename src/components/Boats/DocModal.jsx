import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { setBoatStatus } from "../../features/boats/boatsAction";
import socket from "../../utils/Socket";

const DocModal = ({ isOpen, onClose, status, boatId, image }) => {
  const dispatch = useDispatch();
  if (!isOpen) return null;
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const submitStatus = async (id, sort, value) => {
    let result = await dispatch(setBoatStatus(id, sort, value));
    if (result?.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    } else {
      let message =
        value == 1
          ? `Admin Aprrove the document's ${sort}`
          : `Admin ask the document's ${sort}`;
      socket.emit("alertsetboatdoc", { message: message, userId: result.user });
    }
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 px-3 py-3"
        style={{ width: "22%" }}
      >
        <div className="flex flex-row justify-between items-center">
          <span style={styles.title}>Boat Documentation</span>
          <svg
            style={{ ...styles.Icon, fill: "#17233c" }}
            viewBox="0 0 24 24"
            className="cursor-pointer"
            onClick={() => {
              onClose();
            }}
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
          </svg>
        </div>
        <div className="flex flex-row mt-3 gap-4">
          <div style={styles.doccard} className="w-1/2 p-3 flex flex-col">
            <img
              src={image?.navigation}
              alt=""
              style={{ width: "100%", height: 150 }}
            />
            <div className="flex flex-row justify-start gap-2 mt-3 items-center">
              {status.navigation == 1 ? (
                <svg
                  style={{ ...styles.Icon, fill: "#2a8501" }}
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
              ) : (
                <svg
                  style={{ ...styles.Icon, fill: "#ff3b30" }}
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
                </svg>
              )}

              <span style={styles.item}>Navigation License</span>
            </div>
            {status.navigation == 1 && (
              <div
                style={{ ...styles.btn, backgroundColor: "#17233c" }}
                className="py-3 text-center mt-2 cursor-pointer"
                onClick={() => {
                  submitStatus(boatId, "navigation", 2);
                }}
              >
                <span>Ask Verification</span>
              </div>
            )}
            {status.navigation == 2 && (
              <div
                style={{ ...styles.btn, backgroundColor: "#f4bf64" }}
                className="py-3 text-center mt-2 cursor-pointer"
              >
                <span>Pending</span>
              </div>
            )}
            {status.navigation == 0 && (
              <div className="flex flex-row justify-between mt-2 gap-2">
                <div
                  style={{ ...styles.btn, backgroundColor: "#17233c" }}
                  className="py-2 text-center px-2 cursor-pointer w-1/2"
                  onClick={() => {
                    submitStatus(boatId, "navigation", 1);
                  }}
                >
                  Approve
                </div>
                <div
                  style={{ ...styles.btn, backgroundColor: "#ff3b30" }}
                  className="py-2 text-center px-2 cursor-pointer w-1/2"
                  onClick={() => {
                    submitStatus(boatId, "navigation", 2);
                  }}
                >
                  Reject
                </div>
              </div>
            )}
          </div>
          <div style={styles.doccard} className="w-1/2 p-3 flex flex-col">
            <img
              src={image?.authorization}
              alt=""
              style={{ width: "100%", height: 150 }}
            />
            <div className="flex flex-row justify-start gap-2 mt-3 items-center">
              {status.authorization == 1 ? (
                <svg
                  style={{ ...styles.Icon, fill: "#2a8501" }}
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
              ) : (
                <svg
                  style={{ ...styles.Icon, fill: "#ff3b30" }}
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
                </svg>
              )}
              <span style={styles.item}>Authorization</span>
            </div>
            {status.authorization == 1 && (
              <div
                style={{ ...styles.btn, backgroundColor: "#17233c" }}
                className="py-3 text-center mt-2 cursor-pointer"
                onClick={() => {
                  submitStatus(boatId, "authorization", 2);
                }}
              >
                <span>Ask Verification</span>
              </div>
            )}
            {status.authorization == 2 && (
              <div
                style={{ ...styles.btn, backgroundColor: "#f4bf64" }}
                className="py-3 text-center mt-2 cursor-pointer"
              >
                <span>Pending</span>
              </div>
            )}
            {status.authorization == 0 && (
              <div className="flex flex-row justify-between mt-2 gap-2">
                <div
                  style={{ ...styles.btn, backgroundColor: "#17233c" }}
                  className="py-2 text-center px-2 cursor-pointer w-1/2"
                  onClick={() => {
                    submitStatus(boatId, "authorization", 1);
                  }}
                >
                  Approve
                </div>
                <div
                  style={{ ...styles.btn, backgroundColor: "#ff3b30" }}
                  className="py-2 text-center px-2 cursor-pointer w-1/2"
                  onClick={() => {
                    submitStatus(boatId, "authorization", 2);
                  }}
                >
                  Reject
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row mt-3 justify-center">
          {/* <div
            style={{ ...styles.btn, backgroundColor: "#2a8500", width: "40%" }}
            className="py-2 text-center cursor-pointer"
          >
            OK
          </div> */}
          <span style={styles.des}>
            Confirmation message will appear here upon action.
          </span>
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
    borderRadius: "8px",
    border: "1px solid #efefef",
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
  item: {
    color: "#17233c",
    fontSize: "13px",
    lineHeight: "20px",
  },
  btn: {
    boxSizing: "border-box",
    borderRadius: "6px",
    backgroundColor: "#17233c",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
    outline: "none",
  },
  des: {
    color: "#17233c",
    fontSize: "14px",
    lineHeight: "20px",
  },
};
export default DocModal;
