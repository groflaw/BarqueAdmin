import React, { useState } from "react";

import { FormInput,Rating } from "../../components";
import EditReview from "../../components/Reviews/EditReview";

const Home = () => {
  const [reviewdetail, setReviewDetail] = useState(false); // State to control modal visibility
  const data = [
    {
      BoatName: "Albert Jusim",
      ReviewName: "adasdf",
      Review: "sdfsd",
      Rating: "sdfsd",
      ReviewDate: "sdfsd",
    },
    {
      BoatName: "Albert Jusim",
      ReviewName: "adasdf",
      Review: "sdfsd",
      Rating: "sdfsd",
      ReviewDate: "sdfsd",
     
    },
    {
      BoatName: "Albert Jusim",
      ReviewName: "adasdf",
      Review: "sdfsd",
      Rating: "sdfsd",
      ReviewDate: "sdfsd",
     
    },
  ];
  const openPayModal = () => setReviewDetail(true);
  const closePayModal = () => setReviewDetail(false);

  return (
    <div className="w-full flex flex-col gap-3" style={styles.container}>
      <div className="w-full flex flex-row gap-4  items-center justify-end">
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

      <div style={styles.card} className="px-3 py-5 flex flex-col gap-2">
        <span style={styles.title}>Host Reviews</span>
        <table className="w-full table-auto text-center">
          <thead>
            <tr className=" text-white" style={{ backgroundColor: "#04004d" }}>
              <th className="px-4 py-2">BoatName</th>
              <th className="px-4 py-2">Reviewer Name</th>
              <th className="px-4 py-2">Review</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Review Date</th>
              <th className="px-4 py-2">Actions</th>
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
                <td className="px-4 py-2">{row.BoatName}</td>
                <td className="px-4 py-2">{row.ReviewName}</td>
                <td className="px-4 py-2">{row.Review}</td>
                <td className="px-4 py-2"><div className="flex flex-row justify-center"><Rating /></div></td>
                <td className="px-4 py-2">{row.ReviewDate}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-row gap-2 justify-center">
                    <div style={{...styles.btn, backgroundColor : '#17233c'}}>Edit</div>
                    <div style={{...styles.btn, backgroundColor : '#d9534f'}}>Delete</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EditReview
        isOpen={reviewdetail}
        onClose={closePayModal}
        
      />
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
};
export default Home;
