import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Option } from "../../components";

import clockImage from "../../assets/Icons/schedule.png";
import calendarImage from "../../assets/Icons/calendar.png";

const Plan = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { name: "Option 1", _id: "1" },
    { name: "Option 2", _id: "2" },
    { name: "Option 3", _id: "3" },
  ];
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
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
            <span style={styles.title}>Add your plans</span>
            <span style={styles.des}>
              Add your travel plans. You will be able to add up to 5 different
              plans for your boat indicating price, schedule, if captain is
              included and the description of the destinations and what is
              included in the plan.
            </span>
            <div className="flex flex-row w-full">
              <div
                style={{ ...styles.btn, backgroundColor: "#2a8500" }}
                className="py-3 w-1/6 text-center cursor-pointer"
              >
                + ADD
              </div>
            </div>
            <div
              className="flex flex-col px-2 py-2 w-full"
              style={styles.plancard}
            >
              <div className="flex flex-row w-full justify-between items-center">
                <span style={styles.item}>Plan1</span>
                <div style={styles.price} className="px-1 py-1">
                  <span style={styles.price.text}>$292</span>
                </div>
              </div>
              <textarea
                style={styles.detail}
                className="px-2 py-1 mt-3"
              ></textarea>
              <div className="flex flex-row justify-around items-center mt-2 w-2/3 m-auto">
                <span style={styles.time.name}>Duration</span>
                <span style={styles.time.number}>09 : 00</span>
                <span style={styles.time.name}>to</span>
                <span style={styles.time.number}>18:00</span>
                <img src={clockImage} alt="" />
              </div>
              <div className="flex flex-row w-full mt-2">
                <div
                  style={{ ...styles.btn, backgroundColor: "#17233c" }}
                  className="px-2 py-2"
                >
                  + Custom Plan
                </div>
              </div>
              <span style={styles.item} className="mt-3">
                Custom Plan
              </span>
              <div className="flex flex-row relative justify-center items-center">
                <img
                  src={calendarImage}
                  alt=""
                  style={{ width: 30, height: 30 }}
                />
                <div className="w-3/5 flex flex-col gap-2">
                  <div className="flex flex-row gap-5 justify-around">
                    <span style={styles.time.number}>09:00</span>
                    <span style={styles.time.number}>09:00</span>
                  </div>
                  <div className="flex flex-row gap-5 justify-around">
                    <span style={styles.time.number}>09:00</span>
                    <span style={styles.time.number}>09:00</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-3 gap-4">
                <Option
                  defaultValue={null}
                  width="w-full"
                  options={options}
                  name="example-select"
                  onChange={handleOptionChange}
                  placeholder="Select an option"
                />
                <div
                  style={{ ...styles.btn, backgroundColor: "#2a8500" }}
                  className="py-3 w-1/4 text-center cursor-pointer"
                >
                  Save
                </div>
                <div
                  style={{ ...styles.btn, backgroundColor: "#ff3b30" }}
                  className="py-3 w-1/4 text-center cursor-pointer"
                >
                  Delete
                </div>
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
    fontSize: "12px",
    fontFamily: "Lexend Deca",
    lineHeight: "16px",
  },
  btn: {
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "20px",
    outline: "none",
  },
  plancard: {
    backgroundColor: "#fefffe",
    borderRadius: "10px",
    border: "1px solid #bec0e3",
    boxSizing: "border-box",
  },
  item: {
    color: "#17233c",
    fontSize: "16px",
    fontFamily: "Lexend Deca",
    fontWeight: "500",
    lineHeight: "22px",
  },
  price: {
    backgroundColor: "#fefffe",
    borderRadius: "10px",
    border: "1px solid #bec0e3",
    boxSizing: "border-box",
    text: {
      color: "#0751c1",
      fontSize: "14px",
      fontFamily: "Lexend Deca",
      fontWeight: "500",
      lineHeight: "18px",
    },
  },
  detail: {
    backgroundColor: "#fefffe",
    borderRadius: "10px",
    border: "1px solid #bec0e3",
    boxSizing: "border-box",
    outline: "none",
    height: "100px",
  },
  time: {
    name: {
      color: "#17233c",
      fontSize: "14px",
      fontFamily: "Lexend Deca",
      fontWeight: "500",
      lineHeight: "18px",
    },
    number: {
      padding: "5px 10px",
      border: "1px solid #505050",
      boxSizing: "border-box",
      borderRadius: "8px",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#ffffff",
      color: "#000000",
      fontSize: "14px",
      fontFamily: "Lexend Deca",
      lineHeight: "24px",
      textAlign: "center",
      outline: "none",
    },
  },
};

export default Plan;
