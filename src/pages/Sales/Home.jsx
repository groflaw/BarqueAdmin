import React, { useState } from "react";

import { FormInput, Checkbox } from "../../components";
import PayDetailModal from "../../components/Sales/PayDetailModal";
import HostAccountModal from "../../components/Sales/HostAccountModal";

const Home = () => {
  const [paydetail, setPayDetail] = useState(false); // State to control modal visibility
  const [hostaccount, setHostAccount] = useState(false);
  const data = [
    {
      HostName: "Albert Jusim",
      UserPayment: "adasdf",
      TotalAmount: "sdfsd",
      AmountPaid: "sdfsd",
      BookingDate: "sdfsd",
      BookingID: "sdfsdf",
      PaymentConfirmation: "sdfsdf",
      Status: "Due",
    },
    {
      HostName: "Albert Jusim",
      UserPayment: "adasdf",
      TotalAmount: "sdfsd",
      AmountPaid: "sdfsd",
      BookingDate: "sdfsd",
      BookingID: "sdfsdf",
      PaymentConfirmation: "sdfsdf",
      Status: "Paid",
    },
    {
      HostName: "Albert Jusim",
      UserPayment: "adasdf",
      TotalAmount: "sdfsd",
      AmountPaid: "sdfsd",
      BookingDate: "sdfsd",
      BookingID: "sdfsdf",
      PaymentConfirmation: "sdfsdf",
      Status: "Due",
    },
  ];
  const openPayModal = () => setPayDetail(true);
  const closePayModal = () => setPayDetail(false);

  const openHost = () => setHostAccount(true);
  const closeHost = () => setHostAccount(false);

  return (
    <div className="w-full flex flex-col gap-3" style={styles.container}>
      <div className="w-full flex flex-row gap-4  items-center">
        <div className="flex flex-row items-center gap-4 w-1/3">
          <FormInput />
          <div
            style={{ ...styles.btn, backgroundColor: "#17233c" }}
            className="text-center"
          >
            Search
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 w-2/3 justify-around">
          <div
            className="flex flex-row gap-2 items-center"
            style={{ ...styles.btn, backgroundColor: "#367ec2" }}
          >
            <svg style={styles.Icon} viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"></path>
            </svg>
            <span>Filter by Date</span>
          </div>
          <div className="flex flex-row items-center gap-3">
            <span>Total Amount : $1520.00</span>
            <span>Amount Paid : $1520.00</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Checkbox />
            <span>Show Due only</span>
          </div>
        </div>
      </div>

      <div style={styles.card}>
        <table className="w-full table-auto text-center">
          <thead>
            <tr className=" text-white" style={{ backgroundColor: "#04004d" }}>
              <th className="px-4 py-2">HostName</th>
              <th className="px-4 py-2">UserPayment</th>
              <th className="px-4 py-2">Total Amount</th>
              <th className="px-4 py-2">Amount Paid</th>
              <th className="px-4 py-2">Booking Date</th>
              <th className="px-4 py-2">BookingID</th>
              <th className="px-4 py-2">Payment Confirmation</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                onClick={() => {
                  openPayModal();
                }}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } border-b cursor-pointer hover:bg-slate-200`}
              >
                <td className="px-4 py-2">{row.HostName}</td>
                <td className="px-4 py-2">{row.UserPayment}</td>
                <td className="px-4 py-2">{row.TotalAmount}</td>
                <td className="px-4 py-2">{row.AmountPaid}</td>
                <td className="px-4 py-2">{row.BookingDate}</td>
                <td className="px-4 py-2">{row.BookingID}</td>
                <td className="px-4 py-2">{row.PaymentConfirmation}</td>
                <td className="px-4 py-2">
                  <div style={styles.status}>{row.Status}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PayDetailModal
        isOpen={paydetail}
        onClose={closePayModal}
        openHost={openHost}
      />
      <HostAccountModal isOpen={hostaccount} onClose={closeHost} />
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
  Icon: {
    fontSize: "21px",
    width: "21px",
    height: "21px",
    color: "#ffffff",
    fill: "#ffffff",
  },
};
export default Home;
