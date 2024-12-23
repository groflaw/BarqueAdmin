import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import boatImage from "../../assets/Profile/boat.png";
import infoImage from "../../assets/Icons/boatdata.png";
import planImage from "../../assets/Icons/boatplan.png";
import locationImage from "../../assets/Icons/boatlocaiton.png";
import picImage from "../../assets/Icons/boatImage.png";
import cancelImage from "../../assets/Icons/boatcancel.png";
import accessImage from "../../assets/Icons/boataccesoris.png";
import allowImage from "../../assets/Icons/boatallow.png";
import docImage from "../../assets/Icons/vesseldata.png";

const Option = () => {
  const curboat = useSelector((state) => state.globalState.curboat);
  const curhost = useSelector((state) => state.globalState.curhost);

  useEffect(() => {
    if (curboat?._id === undefined) {
      navigate("/home/boat");
    }
  }, []);

  return (
    <div style={styles.container} className="flex flex-row gap-5">
      <Link to="/home/boat/detail">
        <svg
          style={styles.backIcon}
          viewBox="0 0 512 512"
          className="mt-2 hover:fill-slate-500 active:fill-slate-600"
        >
          <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z"></path>
        </svg>
      </Link>

      <div className="flex flex-col w-5/6">
        <div className="flex flex-col mt-4 w-1/2 m-auto gap-3">
          <div style={styles.card} className="w-full px-4 py-3">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-2">
                <span style={styles.des.name}>{curboat.model}</span>
                <span style={styles.des.content}>
                  Owner: {curhost.firstName + " " + curhost.lastName}
                </span>
                <span style={styles.des.content}>
                  Location: {curboat.location1}
                </span>
                <span style={styles.des.content}>
                  Submitted: {new Date(curboat.date).toLocaleDateString()}
                </span>
              </div>
              <img src={boatImage} alt="" style={{ width: 180, height: 90 }} />
            </div>
            <div style={{ width: "60%" }} className="m-auto mt-5 gap-4">
              <Link to="/home/boat/info">
                <div
                  style={{ ...styles.btn, backgroundColor: "#072d4c" }}
                  className="relative py-3 cursor-pointer w-full flex flex-row px-4 items-center mt-3 justify-center "
                >
                  <img src={infoImage} alt="" className="absolute left-3" />
                  <span>Boat Information</span>
                </div>
              </Link>
              <Link to="/home/boat/plan">
                <div
                  style={{ ...styles.btn, backgroundColor: "#072d4c" }}
                  className="py-3 cursor-pointer w-full flex flex-row px-4 items-center mt-3 justify-center relative"
                >
                  <img src={planImage} alt="" className="absolute left-3" />
                  <span>Plans and schedules</span>
                </div>
              </Link>
              <Link to="/home/boat/location">
                <div
                  style={{ ...styles.btn, backgroundColor: "#072d4c" }}
                  className="py-3 cursor-pointer w-full flex flex-row px-4 items-center mt-3 justify-center relative"
                >
                  <img src={locationImage} alt="" className="absolute left-3" />
                  <span>Locations</span>
                </div>
              </Link>
              <Link to="/home/boat/picture">
                <div
                  style={{ ...styles.btn, backgroundColor: "#072d4c" }}
                  className="py-3 cursor-pointer w-full flex flex-row px-4 items-center mt-3 justify-center relative"
                >
                  <img src={picImage} alt="" className="absolute left-3" />
                  <span>Pictures</span>
                </div>
              </Link>
              <Link to="/home/boat/cancellation">
                <div
                  style={{ ...styles.btn, backgroundColor: "#072d4c" }}
                  className="py-3 cursor-pointer w-full flex flex-row px-4 items-center mt-3 justify-center relative"
                >
                  <img src={cancelImage} alt="" className="absolute left-3" />
                  <span>Cancellation Policy</span>
                </div>
              </Link>
              <Link to="/home/boat/accessories">
                <div
                  style={{ ...styles.btn, backgroundColor: "#072d4c" }}
                  className="py-3 cursor-pointer w-full flex flex-row px-4 items-center mt-3 justify-center relative"
                >
                  <img src={accessImage} alt="" className="absolute left-3" />
                  <span>Accessories</span>
                </div>
              </Link>
              <Link to="/home/boat/allowes">
                <div
                  style={{ ...styles.btn, backgroundColor: "#072d4c" }}
                  className="py-3 cursor-pointer w-full flex flex-row px-4 items-center mt-3 justify-center relative"
                >
                  <img src={allowImage} alt="" className="absolute left-3" />
                  <span>Allowed</span>
                </div>
              </Link>
              <Link to="/home/boat/docimage">
                <div
                  style={{ ...styles.btn, backgroundColor: "#072d4c" }}
                  className="py-3 cursor-pointer w-full flex flex-row px-4 items-center mt-3 justify-center relative"
                >
                  <img src={docImage} alt="" className="absolute left-3" />
                  <span>Boat Documentation</span>
                </div>
              </Link>
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
  backIcon: {
    cursor: "pointer",
    color: "#17233c",
    fontSize: "25px",
    top: "136px",
    left: "342px",
    width: "25px",
    height: "25px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
  },
  des: {
    name: {
      color: "#17233c",
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "28px",
    },
    content: {
      color: "#17233c",
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
  btn: {
    boxSizing: "border-box",
    borderRadius: "6px",
    backgroundColor: "#072d4c",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "20px",
    outline: "none",
  },
};
export default Option;
