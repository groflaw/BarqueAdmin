import React, { useState } from "react";

import { FormInput, Checkbox } from "../../components";
import FileImage from "../../assets/Icons/mms.png";
import Comment from "../../assets/Icons/comment.png";
const Home = () => {
  const data = [
    {
      User: "Albert Jusim",
      Host: "adasdf",
      "Last Message": "sdfsd",
      Timestamp: "sdfsd",
      Status: "Unread",
    },
    {
      User: "Albert Jusim",
      Host: "adasdf",
      "Last Message": "sdfsd",
      Timestamp: "sdfsd",
      Status: "Unread",
    },
    {
      User: "Albert Jusim",
      Host: "adasdf",
      "Last Message": "sdfsd",
      Timestamp: "sdfsd",
      Status: "Unread",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-3" style={styles.container}>
      <div className="flex flex-row justify-end">
        <div className="flex flex-row items-center gap-4 w-1/3">
          <FormInput />
          <div
            style={{ ...styles.btn, backgroundColor: "#17233c" }}
            className="text-center p-2"

          >
            Search
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 px-2">
          <span style={styles.title}>Conversations</span>
          <table className="w-full table-auto text-center mt-2">
            <thead>
              <tr
                className=" text-white"
                style={{ backgroundColor: "#04004d" }}
              >
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Host</th>
                <th className="px-4 py-2">Last Message</th>
                <th className="px-4 py-2">Timestamp</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    openModal();
                  }}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } border-b cursor-pointer hover:bg-slate-200`}
                >
                  <td className="px-4 py-2">{row.User}</td>
                  <td className="px-4 py-2">{row.Host}</td>
                  <td className="px-4 py-2">{row["Last Message"]}</td>
                  <td className="px-4 py-2">{row.Timestamp}</td>
                  <td className="px-4 py-2">
                    <div style={styles.status}>{row.Status}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-1/2 px-2  border-l border-gray-200">
          <span style={styles.title}>
            Conversation of John Doe with Jane Smith
          </span>
          <hr className="mt-2 h-2 bg-gray-300" />
          <div
            className="flex flex-col gap-1 overflow-y-auto"
            style={{ height: "350px" }}
          >
            <div className="flex flex-row justify-start px-2 py-3">
              <div style={styles.card} className="flex flex-col p-2">
                <span style={styles.des}>Hello World</span>
                <span style={styles.clocker}>10 : 30</span>
              </div>
            </div>
            <div className="flex flex-row justify-end px-2 py-3">
              <div style={styles.card} className="flex flex-col p-2">
                <span style={styles.des}>Hello World</span>
                <span style={styles.clocker}>10 : 30</span>
              </div>
            </div>
            <div className="flex flex-row justify-start px-2 py-3">
              <div style={styles.card} className="flex flex-col p-2">
                <span style={styles.des}>Hello World</span>
                <span style={styles.clocker}>10 : 30</span>
              </div>
            </div>
            <div className="flex flex-row justify-end px-2 py-3">
              <div style={styles.card} className="flex flex-col p-2">
                <span style={styles.des}>Hello World</span>
                <span style={styles.clocker}>10 : 30</span>
              </div>
            </div>
            <div className="flex flex-row justify-start px-2 py-3">
              <div style={styles.card} className="flex flex-col p-2">
                <span style={styles.des}>Hello World</span>
                <span style={styles.clocker}>10 : 30</span>
              </div>
            </div>
            <div className="flex flex-row justify-end px-2 py-3">
              <div style={styles.card} className="flex flex-col p-2">
                <span style={styles.des}>Hello World</span>
                <span style={styles.clocker}>10 : 30</span>
              </div>
            </div>
          </div>
          <hr className="mt-2 h-1 bg-gray-300" />
          <div className="flex flex-row gap-3 items-center px-2 py-1">
            <img src={FileImage} alt="" className="cursor-pointer" />
            <FormInput />
            <img src={Comment} alt="" className="cursor-pointer" />
            <div
              style={{ ...styles.btn, backgroundColor: "#2a8500" }}
              className="py-1 px-2"
            >
              Send
            </div>
          </div>
        </div>
      </div>
      <div style={styles.card} className="flex flex-row">
        <div className="w-1/3 px-2 flex flex-col gap-1">
          <span style={styles.title}>Push Notifications Management</span>
          <span style={styles.des} className="mt-2">
            Target Audience
          </span>
          <div className="flex flex-row gap-5 ">
            <div className="flex flex-row gap-1">
              <input type="radio" name="" id="" />
              <span>All</span>
            </div>
            <div className="flex flex-row gap-1">
              <input type="radio" name="" id="" />
              <span>Hosts</span>
            </div>
            <div className="flex flex-row gap-1">
              <input type="radio" name="" id="" />
              <span>Specific</span>
            </div>
          </div>
          <FormInput />
          <textarea style={{...styles.detail, height : '170px'}} className="px-2 py-1 mt-3"></textarea>
          <div
            style={{ ...styles.btn, backgroundColor: "#17233c" }}
            className="py-2 px-2 text-center mt-2"
          >
            Send Notifications
          </div>
        </div>
        <div className="w-2/3 px-2 border-l border-gray-200 flex flex-col gap-1">
          <span style={styles.title}>AutoMatic Messaging Setup</span>
          <span style={styles.des} className="mt-2">
            Select Template
          </span>
          <FormInput />
          <textarea style={{...styles.detail, height : '200px'}} className="px-2 py-1 mt-3"></textarea>
          <div
            style={{ ...styles.btn, backgroundColor: "#17233c" }}
            className="py-2 px-2 text-center mt-2"
          >
            Save Template
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
    color: "#17233c",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "28px",
  },
  card: {
    padding: "10px 20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
  },
  status: {
    boxSizing: "border-box",
    borderRadius: "100000px",
    backgroundColor: "#ef4444",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
    outline: "no  ne",
  },
  des: {
    color: "#17233c",
    fontSize: "14px",
    lineHeight: "20px",
  },
  clocker: {
    color: "#9ca3af",
    fontSize: "12px",
    lineHeight: "16px",
  },
  detail: {
    borderRadius: "8px",
    boxShadow: "2px 2px 4px rgba(3,3,3,0.1)",
    outline: "none",
    border: "none",
  },
};
export default Home;
