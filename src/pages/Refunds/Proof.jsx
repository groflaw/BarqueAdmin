import React from "react";

import { FormInput } from "../../components";

const Proof = () => {
  return (
    <div style={styles.container} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2 w-full px-4 py-3" style={styles.card}>
        <span style={styles.title}>Refund Proof Sectoin</span>
        <div className="flex flex-row gap-6">
          <div className="flex flex-col w-1/2">
            <span style={styles.des} className="mt-4">
              Confirmation Number
            </span>
            <FormInput />
          </div>
          <div className="flex flex-col w-1/2">
            <span style={styles.des} className="mt-4">
              Payment Method
            </span>
            <div className="flex flex-row gap-4 items-center pt-2">
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="" id="" />
                <span>Wire</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="" id="" />
                <span>Zelle</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="" id="" />
                <span>Binance</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="" id="" />
                <span>PayPal</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <input type="radio" name="" id="" />
                <span>Credit Card(Via Stripe)</span>
              </div>
              <div style={{...styles.btn, backgroundColor : '#17233c'}} className="px-5 py-2 cursor-pointer">Submit</div>
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

export default Proof;
