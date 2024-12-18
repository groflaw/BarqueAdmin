import React, { useState } from "react";

import { FormInput, Checkbox } from "../../components";
import DetailModal from "../../components/Guest/DetailModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

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
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="w-full flex flex-col gap-3" style={styles.container}>
      <div className="w-full flex flex-row gap-4  items-center justify-between">
        <div className="flex flex-row items-center gap-4 w-1/3">
          <FormInput />
          <div
            style={{ ...styles.btn, backgroundColor: "#17233c" }}
            className="text-center"
          >
            Search
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Checkbox />
          <span>Show Due only</span>
        </div>
      </div>

      <div style={styles.card}>
        <table className="w-full table-auto text-center">
          <thead>
            <tr className=" text-white" style={{ backgroundColor: "#04004d" }}>
              <th className="px-4 py-2">Guest Name</th>
              <th className="px-4 py-2">Payment Method</th>
              <th className="px-4 py-2">Total Amount</th>
              <th className="px-4 py-2">Boat Name</th>
              <th className="px-4 py-2">Booking Date</th>
              <th className="px-4 py-2">BookingID</th>
              <th className="px-4 py-2">Confirmation Number</th>
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
      <DetailModal isOpen={isModalOpen} onClose={closeModal} />

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
