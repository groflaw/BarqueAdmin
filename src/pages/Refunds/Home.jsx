import React, { useState } from "react";

import { FormInput } from "../../components";
import NewRefundModal from "../../components/Refunds/NewRefundModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const data = [
    {
      refundId: "Eleanor Shellstrop",
      guestName: "eleanor@barqua.com",
      bookingId: "+1 234 567 890",
      reson: "123 Paradise St.",
      tAmount: "March 14, 1985",
      stauts: "Phoenix",
      confirmNumber: "USA",
      date: "Jan 5, 2023, 10:00",
    },
    {
      refundId: "Eleanor Shellstrop",
      guestName: "eleanor@barqua.com",
      bookingId: "+1 234 567 890",
      reson: "123 Paradise St.",
      tAmount: "March 14, 1985",
      stauts: "Phoenix",
      confirmNumber: "USA",
      date: "Jan 5, 2023, 10:00",
    },
    {
      refundId: "Eleanor Shellstrop",
      guestName: "eleanor@barqua.com",
      bookingId: "+1 234 567 890",
      reson: "123 Paradise St.",
      tAmount: "March 14, 1985",
      stauts: "Phoenix",
      confirmNumber: "USA",
      date: "Jan 5, 2023, 10:00",
    },
  ];
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full flex flex-col gap-3" style={styles.container}>
      <div className="w-full flex flex-row gap-4 justify-between items-center">
        <div
          style={{ ...styles.btn, backgroundColor: "#367ec2" }}
          className="text-center"
          onClick={() => {
            openModal();
          }}
        >
          + New Refund
        </div>

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
              <th className="px-4 py-2">Refund ID</th>
              <th className="px-4 py-2">Guest Name</th>
              <th className="px-4 py-2">Booking ID</th>
              <th className="px-4 py-2">Reason for Refund</th>
              <th className="px-4 py-2">Total Amount</th>
              <th className="px-4 py-2">Refund Status</th>
              <th className="px-4 py-2">Confirmation Number</th>
              <th className="px-4 py-2">Date of Request</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } border-b cursor-pointer hover:bg-slate-200`}
              >
                <td className="px-4 py-2">{row.refundId}</td>

                <td className="px-4 py-2">{row.guestName}</td>
                <td className="px-4 py-2">{row.bookingId}</td>
                <td className="px-4 py-2">{row.reson}</td>
                <td className="px-4 py-2">{row.tAmount}</td>
                <td className="px-4 py-2">{row.stauts}</td>
                <td className="px-4 py-2">{row.confirmNumber}</td>
                <td className="px-4 py-2">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NewRefundModal isOpen={isModalOpen} onClose={closeModal} />
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
    outline: "none",
  },
};
export default Home;
