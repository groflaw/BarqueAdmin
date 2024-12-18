import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FormInput, Option } from "../../components";
const Loacaion = () => {
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
            <span style={styles.title}>Location of the boat</span>
            <span style={styles.des}>
              Add your travel plans. You will be able to add up to 5 different
              plans for your boat indicating price, schedule, if captain is
              included and the description of the destinations and what is
              included in the plan.
            </span>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Model</span>
              <FormInput />
            </div>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Location Type</span>
              <Option
                defaultValue={null}
                width="w-full"
                options={options}
                name="example-select"
                onChange={handleOptionChange}
                placeholder="Select an option"
              />
            </div>
            <span style={styles.head}>Address</span>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Model</span>
              <FormInput />
            </div>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Model</span>
              <FormInput />
            </div>
            <div className="flex flex-row justify-center mt-3">
              <div
                style={styles.btn}
                className="py-2 text-center w-1/2 cursor-pointer"
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
  item: {
    color: "#17233c",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    lineHeight: "20px",
  },
  head: {
    color: "#17233c",
    fontSize: "16px",
    fontFamily: "Lexend Deca",
    fontWeight: "600",
    lineHeight: "21px",
  },
  btn: {
    boxSizing: "border-box",
    borderRadius: "6px",
    backgroundColor: "#2a8500",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "20px",
    outline: "none",
  },
};
export default Loacaion;
