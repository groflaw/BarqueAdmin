import React from "react";

import { FormInput } from "../../components";

const Home = () => {
  const data = [
    {
      Name: "Eleanor Shellstrop",
      Email: "eleanor@barqua.com",
      Password: "123 Paradise St.",
      Role: "March 14, 1985",
    },
    {
      Name: "Eleanor Shellstrop",
      Email: "eleanor@barqua.com",
      Password: "123 Paradise St.",
      Role: "March 14, 1985",
    },
    {
      Name: "Eleanor Shellstrop",
      Email: "eleanor@barqua.com",
      Password: "123 Paradise St.",
      Role: "March 14, 1985",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-3" style={styles.container}>
      <div style={styles.card} className="p-5 flex flex-col gap-2">
        <div className="p-5 flex flex-row gap-2">
          <div className="w-1/2 flex flex-col gap-2">
            <span style={styles.title} className="mt-5">
              Add New Admin
            </span>
            <div className="flex flex-col gap-1 w-1/2">
              <span style={styles.item}>Name</span>
              <FormInput />
            </div>
            <div className="flex flex-col gap-1 w-1/2">
              <span style={styles.item}>Name</span>
              <FormInput />
            </div>
            <div className="flex flex-col gap-1 w-1/2">
              <span style={styles.item}>Name</span>
              <FormInput />
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-1">
            <span style={styles.title} className="mt-5">
              Select Role
            </span>
            <span style={styles.item}>Permission Level</span>
            <div className="flex flex-row gap-2">
              <div className="flex flex-row gap-2 w-1/3 items-baseline">
                <input type="radio" name="" id="" />
                <span style={styles.item}>full</span>
              </div>
              <div className="flex flex-row gap-2 w-1/3 items-baseline">
                <input type="radio" name="" id="" />
                <span style={styles.item}>
                  Manager ( Approve payments, refunds, see messages, block and
                  unblock users, comfirm or decline bookings, approve or refuse
                  new boats)
                </span>
              </div>
              <div className="flex flex-row gap-2 w-1/3 items-baseline">
                <input type="radio" name="" id="" />
                <span style={styles.item}>
                  Customer Support (Only messages, create refund request and see
                  data)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center">
          <div
            style={{ ...styles.btn, backgroundColor: "#17233c", width: "10%" }}
            className="text-center"
          >
            Add Admin
          </div>
        </div>
      </div>

      <div style={styles.card} className="p-5 gap-2 flex flex-col">
        <span style={styles.title}>List of Admins</span>
        <table className="w-full table-auto text-center">
          <thead>
            <tr className=" text-white" style={{ backgroundColor: "#04004d" }}>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Contact Number</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Actions</th>
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
                <td className="px-4 py-2">{row.Password}</td>
                <td className="px-4 py-2">{row.Role}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-row gap-2 justify-center">
                    <div style={{ ...styles.btn, backgroundColor: "#17233c" }}>
                      Edit
                    </div>
                    <div style={{ ...styles.btn, backgroundColor: "#d9534f" }}>
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
    lineHeight: "20px",
  },
};
export default Home;
