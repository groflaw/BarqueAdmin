import React, { useState } from "react";
import { FormInput, Number, Option } from "../../components";
import { Link } from "react-router-dom";

const BoatInfo = () => {
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
            <span style={styles.title}>Boat Information</span>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Model</span>
              <FormInput />
            </div>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Description</span>
              <FormInput />
            </div>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Loaction</span>
              <FormInput />
            </div>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Year</span>
              <Number />
            </div>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Size</span>
              <Number />
            </div>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>BoatType</span>
              <Option
                defaultValue={null}
                width="w-full"
                options={options}
                name="example-select"
                onChange={handleOptionChange}
                placeholder="Select an option"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Brand</span>
              <Option
                defaultValue={null}
                width="w-full"
                options={options}
                name="example-select"
                onChange={handleOptionChange}
                placeholder="Select an option"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Engines</span>
              <Number />
            </div>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Bathrooms</span>
              <Number />
            </div>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Powered By</span>
              <Option
                defaultValue={null}
                width="w-full"
                options={options}
                name="example-select"
                onChange={handleOptionChange}
                placeholder="Select an option"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Capacity</span>
              <Number />
            </div>
            <div className="flex flex-col w-full gap-2">
              <span style={styles.item}>Cabins/Staterooms</span>
              <Number />
            </div>
            <div className="flex flex-row w-full mt-5 justify-center">
              <div
                style={styles.btn}
                className="w-1/2 text-center py-3 cursor-pointer"
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
    color: "#17233c",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    lineHeight: "20px",
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

export default BoatInfo;
