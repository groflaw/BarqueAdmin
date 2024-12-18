import React from "react";

import stormImage from "../../assets/Background/storm.png";

const Detail = () => {
  return (
    <div style={styles.container} className="flex flex-col gap-5">
      <div className="flex flex-row gap-2 w-full">
        <div className="flex flex-col w-1/2 px-4 py-3" style={styles.card}>
          <span style={styles.title}>Booking Details</span>
          <span style={styles.des} className="mt-4">
            Booking ID: BK123456789
          </span>
          <span style={styles.des}>Host Name: Captain Jack Sparrow</span>
          <span style={styles.des}>Boat Name: Black Pearl</span>
          <span style={styles.des}>Booking Date: BK123456789</span>
          <span style={styles.des}>Cancellation: BK123456789</span>
        </div>
        <div className="flex flex-col w-1/2 px-4 py-3" style={styles.card}>
          <span style={styles.title}>Reason for Refund</span>
          <span style={styles.des} className="mt-4">
            Customer Comments
          </span>
          <span>
            The trip was canceled due to bad weather and safety concerns.
          </span>
          <div className="flex flex-row mt-2 gap-1">
            <img src={stormImage} alt="" style={{ width: 160, height: 120 }} />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-4 py-3" style={styles.card}>
        <span style={styles.title}>Payment Details</span>
        <span style={styles.des} className="mt-3">
          Total Amount Paid: $500.00
        </span>
        <span style={styles.des}>Payment Method: Credit Card (Visa)</span>
      </div>
      <div className="flex flex-row mt-2 gap-2">
        <div style={{...styles.btn, backgroundColor : '#367ec2'}} className="text-center py-2 px-5 cursor-pointer">Approve Refund</div>
        <div style={{...styles.btn, backgroundColor : '#ff3b30'}} className="text-center py-2 px-5 cursor-pointer">Approve Refund</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "15px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
  },
  title: {
    color: "#030303",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "28px",
  },
  des: {
    color: "#17233c",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
  },
  btn: {
    boxSizing: "border-box",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "20px",
    outline: "none",
  },
};

export default Detail;
