import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FormInput } from "../../components";
import { Filter } from "../../components";

import boatImage from "../../assets/Profile/boat.png";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="pt-4 pb-4 pr-8 pl-8">
      <div className="flex flex-row justify-start gap-6 items-center">
        <div style={{ width: "30%" }}>
          <FormInput></FormInput>
        </div>
        <div
          className="bg-blue-950 hover:bg-blue-900 text-center active:bg-gray-600 "
          style={styles.btn}
          onClick={() => {
            openModal();
          }}
        >
          Filter
        </div>
        <div
          style={styles.btn}
          className="text-center bg-blue-950 hover:bg-blue-900 active:bg-gray-600 "
        >
          Filter By Status
        </div>
        <div
          style={styles.btn}
          className="text-center bg-blue-950 hover:bg-blue-900 active:bg-gray-600 "
        >
          Filter By Date
        </div>
      </div>
      <div className="flex flex-wrap mt-10 gap-8 justify-around">
        <div style={styles.card} className="flex flex-row gap-6">
          <div className="flex gap-2 flex-col">
            <span style={styles.card.name}>Boat Name</span>
            <span style={styles.card.des}>Owner: Sarah Johnson</span>
            <span style={styles.card.des}>Location: San Diego, CA</span>
            <span style={styles.card.des}>Status: Pending Approval</span>
            <span style={styles.card.des}>Submitted: 2023-10-12</span>
          </div>
          <div className="flex gap-2 flex-col">
            <img src={boatImage} alt="" style={styles.card.img} />
            <Link to="/home/boat/detail">
              <div
                style={{ ...styles.btn, width: "" }}
                className="text-center bg-yellow-400 hover:bg-yellow-350 active:bg-gray-600 "
              >
                Review Documents
              </div>
            </Link>
          </div>
        </div>
        <div style={styles.card} className="flex flex-row gap-6">
          <div className="flex gap-2 flex-col">
            <span style={styles.card.name}>Boat Name</span>
            <span style={styles.card.des}>Owner: Sarah Johnson</span>
            <span style={styles.card.des}>Location: San Diego, CA</span>
            <span style={styles.card.des}>Status: Pending Approval</span>
            <span style={styles.card.des}>Submitted: 2023-10-12</span>
          </div>
          <div className="flex gap-2 flex-col">
            <img src={boatImage} alt="" style={styles.card.img} />
            <Link to="/home/boat/detail">
            <div
              style={{ ...styles.btn, width: "" }}
              className="text-center bg-blue-950 hover:bg-blue-900 active:bg-gray-600 "
            >
              View
            </div>
            </Link>
          </div>
        </div>
      </div>
      <Filter isOpen={isModalOpen} onClose={closeModal}>
        <p>This is some content in the modal!</p>
      </Filter>
    </div>
  );
};
const styles = {
  btn: {
    cursor: "pointer",
    padding: "10px 18px",
    border: "0",
    boxSizing: "border-box",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "20px",
    width: "10%",
  },
  card: {
    padding: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
    name: {
      color: "#17233c",
      fontSize: "18px",
      fontFamily: "Lexend Deca",
      fontWeight: 700,
      lineHeight: "28px",
    },
    des: {
      color: "#17233c",
      fontSize: "14px",
      fontFamily: "Lexend Deca",
      lineHeight: "20px",
    },
    img: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100px",
    },
  },
};
export default Home;
