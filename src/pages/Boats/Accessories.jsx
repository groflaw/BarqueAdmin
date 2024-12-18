import React, { useState } from "react";
import { Link } from "react-router-dom";
import AirCondition from "../../assets/Icons/aircondition.png";
import Gps from "../../assets/Icons/gps.png";
import Gril from "../../assets/Icons/grill.png";
import Kitchen from "../../assets/Icons/cocina.png";
import Freshwater from "../../assets/Icons/freshwater.png";
import Music from "../../assets/Icons/music.png";
import Blooth from "../../assets/Icons/bluetooth.png";
import TV from "../../assets/Icons/tv.png";
import Fishing from "../../assets/Icons/fishing.png";

const Accessories = () => {
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
            <span style={styles.title}>Available accessories</span>
            <span style={styles.des}>
              Select the accessories your boat has.
            </span>
            <div className="flex flex-row justify-between items-center mt-2">
              <div className="flex flex-row gap-4 items-center">
                <img src={AirCondition} alt="" />
                <span>Air Condition</span>
              </div>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ width: 20, height: 20 }}
              />
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <div className="flex flex-row gap-4 items-center">
                <img src={Gps} alt="" />
                <span>GPS Navigation</span>
              </div>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ width: 20, height: 20 }}
              />
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <div className="flex flex-row gap-4 items-center">
                <img src={Gril} alt="" />
                <span>Grill/Barbecue</span>
              </div>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ width: 20, height: 20 }}
              />
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <div className="flex flex-row gap-4 items-center">
                <img src={Kitchen} alt="" />
                <span>Kitchen</span>
              </div>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ width: 20, height: 20 }}
              />
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <div className="flex flex-row gap-4 items-center">
                <img src={Freshwater} alt="" />
                <span>FreshWater pump</span>
              </div>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ width: 20, height: 20 }}
              />
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <div className="flex flex-row gap-4 items-center">
                <img src={Music} alt="" />
                <span>Audio System</span>
              </div>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ width: 20, height: 20 }}
              />
            </div>
            <div className="flex flex-row justify-between items-center mt-3">
              <div className="flex flex-row gap-4 items-center">
                <img src={Blooth} alt="" />
                <span>Bluetooth for audio</span>
              </div>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ width: 20, height: 20 }}
              />
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <div className="flex flex-row gap-4 items-center">
                <img src={TV} alt="" />
                <span>TV</span>
              </div>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ width: 20, height: 20 }}
              />
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
              <div className="flex flex-row gap-4 items-center">
                <img src={Fishing} alt="" />
                <span>Fishing gear</span>
              </div>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ width: 20, height: 20 }}
              />
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
};

export default Accessories;
