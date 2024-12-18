import React from "react";

import { FormInput } from "../../components";
import profileImage from "../../assets/Profile/user.png";

const Home = () => {
  const data = [
    {
      Name: "Eleanor Shellstrop",
      Email: "eleanor@barqua.com",
      "Contact Number": "+1 234 567 890",
      Address: "123 Paradise St.",
      Birthday: "March 14, 1985",
      City: "Phoenix",
      Country: "USA",
      "Registration Date": "Jan 5, 2023, 10:00",
      "Host Status": "Boat Owner",
      "Boats Owned": 5,
    },
    {
      Name: "Jason Mendoza",
      Email: "jason@barqua.com",
      "Contact Number": "+1 987 654 321",
      Address: "456 Sunset Blvd.",
      Birthday: "April 1, 1990",
      City: "Miami",
      Country: "USA",
      "Registration Date": "Feb 12, 2023, 13:45",
      "Host Status": "Guest",
      "Boats Owned": 0,
    },
    {
      Name: "Tahani Al-Jamil",
      Email: "tahani@barqua.com",
      "Contact Number": "+44 20 7946 0958",
      Address: "789 Luxury Ave.",
      Birthday: "June 6, 1987",
      City: "London",
      Country: "UK",
      "Registration Date": "March 20, 2023, 15:15",
      "Host Status": "Boat Owner",
      "Boats Owned": 3,
    },
  ];
  return (
    <div className="w-full flex flex-col gap-3" style={styles.container}>
      <div className="w-full flex flex-row gap-4 justify-between items-center">
        <span style={styles.title}>Users Overview</span>
        <div className="flex flex-row items-center gap-4 w-1/3">
          <FormInput />
          <div
            style={{ ...styles.btn, backgroundColor: "#17233c" }}
            className="text-center"
          >
            Search
          </div>
        </div>
      </div>
      <div style={styles.card}>
        <table className="w-full table-auto text-center">
          <thead>
            <tr className=" text-white" style={{ backgroundColor: "#04004d" }}>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Contact Number</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Birthday</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Registration Date</th>
              <th className="px-4 py-2">Host Status</th>
              <th className="px-4 py-2">Boats Owned</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } border-b`}
              >
                <td className="px-4 py-2">{row.Name}</td>
                <td className="px-4 py-2 cursor-pointer">
                  <u>{row.Email}</u>
                </td>
                <td className="px-4 py-2">{row["Contact Number"]}</td>
                <td className="px-4 py-2">{row.Address}</td>
                <td className="px-4 py-2">{row.Birthday}</td>
                <td className="px-4 py-2">{row.City}</td>
                <td className="px-4 py-2">{row.Country}</td>
                <td className="px-4 py-2">{row["Registration Date"]}</td>
                <td className="px-4 py-2">{row["Host Status"]}</td>
                <td className="px-4 py-2">{row["Boats Owned"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <span style={styles.title} className="mt-5">
        User Details
      </span>
      <div style={styles.card} className="p-5">
        <img
          src={profileImage}
          alt=""
          className="m-auto"
          style={{ width: "91px", height: "85px" }}
        />
        <div className="w-full gap-2 flex flex-row">
          <div className="w-1/3">
            <span style={styles.item}>Name</span>
            <FormInput />
          </div>
          <div className="w-1/3">
            <span style={styles.item}>Name</span>
            <FormInput />
          </div>
          <div className="w-1/3">
            <span style={styles.item}>Name</span>
            <FormInput />
          </div>
        </div>
        <div className="w-full gap-2 flex flex-row mt-5">
          <div className="w-1/3">
            <span style={styles.item}>Name</span>
            <FormInput />
          </div>
          <div className="w-1/3">
            <span style={styles.item}>Name</span>
            <FormInput />
          </div>
          <div className="w-1/3">
            <span style={styles.item}>Name</span>
            <FormInput />
          </div>
        </div>
        <div className="w-full flex gap-2 flex-row mt-5">
          <div className="w-1/3">
            <span style={styles.item}>Name</span>
            <FormInput />
          </div>
          <div className="w-1/3">
            <span style={styles.item}>Name</span>
            <FormInput />
          </div>
        </div>
        <div className="mt-5 flex flex-col  gap-3">
          <span style={styles.title}>Boats Owned</span>
          <div className="flex flex-row justify-start items-center gap-3 text-center">
            <div style={{ ...styles.btn, backgroundColor: "#ff3b30" }}>
              Block
            </div>
            <div style={{ ...styles.btn, backgroundColor: "#367ec2" }}>
              Edit
            </div>
            <div style={{ ...styles.btn, backgroundColor: "#072d4c" }}>
              Save Changes
            </div>
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
    color: "#17233c",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "28px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
  },
  item: {
    color: "#17233c",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
  },
};
export default Home;
