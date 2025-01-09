import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FormInput, Filter, Spiner } from "../../components";

import { getAllboats, getboatInfo } from "../../features/boats/boatsAction";
import { getUser } from "../../features/user/userAction";
import { BoatStatus } from "../../utils/Constant";
import socket from "../../utils/Socket";
import { showNotification } from "../../utils/notification";
import { setLoading, setCurhost } from "../../features/global/globalSlice";

import boatImage from "../../assets/Profile/boat.png";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [boats, setBoats] = useState([]);

  const loading = useSelector((state) => state.globalState.loading);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchboats = async () => {
    await dispatch(setLoading(true));
    let result = await dispatch(getAllboats());
    setBoats(result);
    await dispatch(setLoading(false));
  };
  
  useEffect(() => {
    fetchboats();
  }, []);

  const goDetail = async (id, hostId) => {
    let result = await dispatch(getboatInfo(id));
    result = await dispatch(getUser(hostId));
    await dispatch(setCurhost(result));
    navigate("/home/boat/detail");
  };
  const checkstatus = async (status) => {
    if (status.navigation == 1 && status.authorization == 1) return 1;
    if (status.navigate == 0 || status.authorization == 0) return 0;
    if (status.navigate == 2 || status.authorization == 2) return 2;
  };
  return (
    <>
      {loading ? (
        <Spiner />
      ) : (
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
          <div className="flex flex-wrap mt-10 gap-8 ">
            {boats.map((item, index) => (
              <div
                style={styles.card}
                className="flex flex-row gap-6"
                key={index}
              >
                <div className="flex gap-2 flex-col">
                  <span style={styles.card.name}>{item.model}</span>
                  <span style={styles.card.des}>
                    <b>Owner:</b>
                    {item.user.firstName + " " + item.user.lastName}
                  </span>
                  <span style={styles.card.des}>
                    <b>Location:</b> {item.location1}
                  </span>
                  <span style={styles.card.des}>
                    <b>Status:</b> {BoatStatus[checkstatus(item.status)]}
                  </span>
                  <span style={styles.card.des}>
                    <b>Submitted</b>: {new Date(item.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex gap-2 flex-col">
                  <img src={boatImage} alt="" style={styles.card.img} />

                  <div
                    style={{
                      ...styles.btn,
                      width: "",
                      backgroundColor:
                        item.status.navigation == 1 &&
                        item.status.authorization == 1
                          ? "#072d4c"
                          : "#f4bf64",
                    }}
                    className="text-center hover:bg-yellow-350 active:bg-gray-600 "
                    onClick={() => {
                      goDetail(item._id, item.user._id);
                    }}
                  >
                    {item.status.navigation == 1 &&
                    item.status.authorization == 1
                      ? "View"
                      : "Review Documents"}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Filter
            isOpen={isModalOpen}
            onClose={closeModal}
            setBoats={setBoats}
          ></Filter>
        </div>
      )}
    </>
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
      maxWidth: "300px",
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
