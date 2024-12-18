import React, { useState } from "react";

import { FormInput, Rating, ToggleSwitch } from "../../components";
import ZelleImgae from "../../assets/Icons/zelle.png";
import BinanceImgae from "../../assets/Icons/binance.png";
import PaypalImgae from "../../assets/Icons/paypal.png";
import BankImage from '../../assets/Icons/bank.png';

const Home = () => {
  const brands = ["Sea Reay", "Bayliner"];
  return (
    <div className="w-full flex flex-col gap-3" style={styles.container}>
      <div
        className="w-1/3 px-3 py-2 flex flex-row justify-between items-center"
        style={styles.card}
      >
        <div className="flex flex-row items-center  gap-2">
          <span style={styles.title}>Baraquea Service Fee:</span>
          <input
            type="text"
            className="border border-slate-950 p-2 text-center ml-5"
            style={styles.detail}
          />
          <span>%</span>
        </div>
        <div
          style={{ ...styles.btn, backgroundColor: "#367ec2" }}
          className="w-1/5 text-center"
        >
          Save
        </div>
      </div>
      <div className=" flex flex-row gap-5 justify-around">
        <div className="w-1/2 flex flex-col gap-3 p-2" style={styles.card}>
          <span style={styles.title}>Boat Brands</span>
          <table className="w-full table-auto text-center">
            <thead>
              <tr style={{ backgroundColor: "#f0f1ff" }}>
                <th className="px-4 py-2">BoatName</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((row, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    openModal();
                  }}
                  className={`border-b cursor-pointer`}
                >
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      className="text-center p-0 m-0 border-none outline-none"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex flex-row gap-2 justify-center">
                      <div
                        style={{ ...styles.btn, backgroundColor: "#17233c" }}
                      >
                        Save
                      </div>
                      <div
                        style={{ ...styles.btn, backgroundColor: "#072d4c" }}
                      >
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            style={{ ...styles.btn, backgroundColor: "#367ec2" }}
            className="w-1/5 text-center"
          >
            Add New Item
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-3 p-2" style={styles.card}>
          <span style={styles.title}>Boat Brands</span>
          <table className="w-full table-auto text-center">
            <thead>
              <tr style={{ backgroundColor: "#f0f1ff" }}>
                <th className="px-4 py-2">BoatName</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((row, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    openModal();
                  }}
                  className={`border-b cursor-pointer`}
                >
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      className="text-center p-0 m-0 border-none outline-none"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex flex-row gap-2 justify-center">
                      <div
                        style={{ ...styles.btn, backgroundColor: "#17233c" }}
                      >
                        Save
                      </div>
                      <div
                        style={{ ...styles.btn, backgroundColor: "#072d4c" }}
                      >
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            style={{ ...styles.btn, backgroundColor: "#367ec2" }}
            className="w-1/5 text-center"
          >
            Add New Item
          </div>
        </div>
      </div>
      <div className=" flex flex-row gap-5 justify-around">
        <div className="w-1/2 flex flex-col gap-3 p-2" style={styles.card}>
          <span style={styles.title}>Boat Brands</span>
          <table className="w-full table-auto text-center">
            <thead>
              <tr style={{ backgroundColor: "#f0f1ff" }}>
                <th className="px-4 py-2">BoatName</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((row, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    openModal();
                  }}
                  className={`border-b cursor-pointer`}
                >
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      className="text-center p-0 m-0 border-none outline-none"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex flex-row gap-2 justify-center">
                      <div
                        style={{ ...styles.btn, backgroundColor: "#17233c" }}
                      >
                        Save
                      </div>
                      <div
                        style={{ ...styles.btn, backgroundColor: "#072d4c" }}
                      >
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            style={{ ...styles.btn, backgroundColor: "#367ec2" }}
            className="w-1/5 text-center"
          >
            Add New Item
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-3 p-2" style={styles.card}>
          <span style={styles.title}>Boat Brands</span>
          <table className="w-full table-auto text-center">
            <thead>
              <tr style={{ backgroundColor: "#f0f1ff" }}>
                <th className="px-4 py-2">BoatName</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((row, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    openModal();
                  }}
                  className={`border-b cursor-pointer`}
                >
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      className="text-center p-0 m-0 border-none outline-none"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex flex-row gap-2 justify-center">
                      <div
                        style={{ ...styles.btn, backgroundColor: "#17233c" }}
                      >
                        Save
                      </div>
                      <div
                        style={{ ...styles.btn, backgroundColor: "#072d4c" }}
                      >
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            style={{ ...styles.btn, backgroundColor: "#367ec2" }}
            className="w-1/5 text-center"
          >
            Add New Item
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 p-4" style={styles.card}>
        <span style={styles.title}>Barquea Payment Information</span>
        <div className="flex flex-row gap-3 justify-around">
          <div className="w-1/5 flex flex-col gap-1 justify-center ">
            <div className="flex flex-row gap-5 items-center">
              <img src={ZelleImgae} alt="" />
              <span style={styles.title}>Zelle</span>
              <ToggleSwitch />
            </div>
            <div className="flex flex-row  items-center justify-between">
              <span style={styles.item}>Name:</span>
              <input
                type="text"
                className="border border-slate-950 p-1 text-center ml-5"
                style={{ ...styles.detail, width: "auto" }}
              />
            </div>
            <div className="flex flex-row  items-center justify-between">
              <span style={styles.item}>Email:</span>
              <input
                type="text"
                className="border border-slate-950 p-1 text-center ml-5"
                style={{ ...styles.detail, width: "auto" }}
              />
            </div>
          </div>
          <div className="w-1/5 flex flex-col gap-1 justify-center ">
            <div className="flex flex-row gap-5 items-center">
              <img src={BinanceImgae} alt="" />
              <span style={styles.title}>Binance Pay</span>
              <ToggleSwitch />
            </div>
            <div className="flex flex-row  items-center justify-between">
              <span style={styles.item}>Name:</span>
              <input
                type="text"
                className="border border-slate-950 p-1 text-center ml-5"
                style={{ ...styles.detail, width: "auto" }}
              />
            </div>
            <div className="flex flex-row  items-center justify-between">
              <span style={styles.item}>Email:</span>
              <input
                type="text"
                className="border border-slate-950 p-1 text-center ml-5"
                style={{ ...styles.detail, width: "auto" }}
              />
            </div>
            <div className="flex flex-row  items-center justify-between">
              <span style={styles.item}>ID:</span>
              <input
                type="text"
                className="border border-slate-950 p-1 text-center ml-5"
                style={{ ...styles.detail, width: "auto" }}
              />
            </div>
          </div>
          <div className="w-1/5 flex flex-col gap-1 justify-center ">
            <div className="flex flex-row gap-5 items-center">
              <img src={PaypalImgae} alt="" />
              <span style={styles.title}>PayPal</span>
              <ToggleSwitch />
            </div>
            <div className="flex flex-row  items-center">
              <span style={styles.item}>Name:</span>
              <input
                type="text"
                className="border border-slate-950 p-1 text-center ml-5"
                style={{ ...styles.detail, width: "auto" }}
              />
            </div>
            <div className="flex flex-row  items-center">
              <span style={styles.item}>Email:</span>
              <input
                type="text"
                className="border border-slate-950 p-1 text-center ml-5"
                style={{ ...styles.detail, width: "auto" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-around">
          <div className="w-1/5 flex flex-col gap-1 justify-center ">
            <div className="flex flex-row gap-5 items-center">
              <img src={BankImage} alt="" />
              <span style={styles.title}>Bank Account info</span>
              <ToggleSwitch />
            </div>
            <div className="flex flex-row  items-center justify-between">
              <span style={styles.item}>Bank:</span>
              <input
                type="text"
                className="border border-slate-950 p-1 text-center ml-5"
                style={{ ...styles.detail, width: "auto" }}
              />
            </div>
            <div className="flex flex-row  items-center justify-between">
              <span style={styles.item}>Name:</span>
              <input
                type="text"
                className="border border-slate-950 p-1 text-center ml-5"
                style={{ ...styles.detail, width: "auto" }}
              />
            </div>
            <div className="flex flex-row  items-center justify-between">
              <span style={styles.item}>Email:</span>
              <input
                type="text"
                className="border border-slate-950 p-1 text-center ml-5"
                style={{ ...styles.detail, width: "auto" }}
              />
            </div>
            <div className="flex flex-row  items-center justify-between">
              <span style={styles.item}>AccountN*:</span>
              <input
                type="text"
                className="border border-slate-950 p-1 text-center ml-5"
                style={{ ...styles.detail, width: "auto" }}
              />
            </div>
          </div>
          <div className="w-1/5 flex flex-col gap-1 justify-center ">
            <div className="flex flex-row  items-center justify-between">
              <span style={styles.item}>ABA:</span>
              <input
                type="text"
                className="border border-slate-950 p-1 text-center ml-5"
                style={{ ...styles.detail, width: "auto" }}
              />
            </div>
            <div className="flex flex-row  items-center justify-between">
              <span style={styles.item}>Address:</span>
              <input
                type="text"
                className="border border-slate-950 p-1 text-center ml-5"
                style={{ ...styles.detail, width: "auto" }}
              />
            </div>
            <div className="flex flex-row  items-center justify-between">
              <span style={styles.item}>Swift:</span>
              <input
                type="text"
                className="border border-slate-950 p-1 text-center ml-5"
                style={{ ...styles.detail, width: "auto" }}
              />
            </div>
          </div>
          <div className="w-1/5 flex flex-col gap-1 justify-center ">
              <div style={{...styles.btn, backgroundColor : "#367ec2"}} className="text-center w-2/3">Save Changes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px 20px",
  },
  btn: {
    cursor: "pointer",
    padding: "10px 10px",
    border: "0",
    boxSizing: "border-box",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "20px",
  },
  title: {
    color: "#030303",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "28px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
  },
  detail: {
    outline: "none",
    borderRadius: "8px",
    width: "50px",
  },
  item: {
    color: "#17233c",
    fontSize: "14px",
    lineHeight: "20px",
  },
};
export default Home;
