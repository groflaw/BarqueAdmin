import React, { useState } from "react";
import { Link } from "react-router-dom";
const Cancellation = () => {
  return (
    <div style={styles.container} className="flex flex-row gap-5">
      <Link to="/home/boat/option">
        <svg
          style={styles.backIcon}
          viewBox="0 0 512 512"
          className="mt-2 hover:fill-slate-500 active:fill-slate-600"
        >
          <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z"></path>
        </svg>
      </Link>
      <div className="flex flex-col w-5/6">
        <div className="flex flex-col mt-4 w-1/2 m-auto gap-3">
          <div
            style={styles.card}
            className="w-full px-10 py-10 flex flex-col gap-4"
          >
            <span style={styles.title}>Select your cancellation policy</span>
            <div
              style={styles.card}
              className="flex flex-row px-10 py-16 items-center gap-8"
            >
              <div className="w-1/4 flex items-center flex-col gap-2">
                <input
                  type="radio"
                  name=""
                  id=""
                  style={{ width: 20, height: 20 }}
                />
                <div
                  style={{ ...styles.item, backgroundColor: "#2a8500" }}
                  className="px-5"
                >
                  FLEXIBLE
                </div>
              </div>
              <span style={styles.des} className="w-3/4">
                Free cancellations of reservations at any time with money back.
              </span>
            </div>
            <div
              style={styles.card}
              className="flex flex-row px-10 py-16 items-center gap-8"
            >
              <div className="w-1/4 flex items-center flex-col gap-2">
                <input
                  type="radio"
                  name=""
                  id=""
                  style={{ width: 20, height: 20 }}
                />
                <div
                  style={{ ...styles.item, backgroundColor: "#ff3b30" }}
                  className="px-5"
                >
                  FLEXIBLE
                </div>
              </div>
              <span style={styles.des} className="w-3/4">
                Cancellations of reservations are free of charge before 24 hours
                of the day the trip starts. Cancellations on the same day of the
                reservation will be charged 50% of the cost of one day's
                reservation
              </span>
            </div>
            <div
              style={styles.card}
              className="flex flex-row px-10 py-16 items-center gap-8"
            >
              <div className="w-1/4 flex items-center flex-col gap-2">
                <input
                  type="radio"
                  name=""
                  id=""
                  style={{ width: 20, height: 20 }}
                />
                <div
                  style={{ ...styles.item, backgroundColor: "#f4bf64" }}
                  className="px-5"
                >
                  FLEXIBLE
                </div>
              </div>
              <span style={styles.des} className="w-3/4">
                Free booking cancellations within 48 hours of the day the trip
                starts. Cancellations within 48 hours prior to the reservation
                will be charged 50% of the cost of one day's reservation
              </span>
            </div>
            <div className="w-full flex justify-center mt-4">
              <div
                style={{ ...styles.btn, backgroundColor: "#2a8500" }}
                className="w-4/5 text-center cursor-pointer"
              >
                Save Changes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "15px",
  },
  card: {
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
  },
  backIcon: {
    cursor: "pointer",
    color: "#17233c",
    fontSize: "25px",
    top: "136px",
    left: "342px",
    width: "25px",
    height: "25px",
  },
  title: {
    color: "#17233c",
    fontSize: "20px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "26px",
  },
  des: {
    color: "#000000",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    lineHeight: "20px",
  },
  btn: {
    padding: "10px 10px",
    boxSizing: "border-box",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "20px",
    outline: "none",
  },
  item: {
    borderRadius: "12px",
    color: "#ffffff",
    fontSize: "10px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "18px",
    textAlign: "center",
    outline: "none",
  },
};
export default Cancellation;
