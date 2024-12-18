import React, { useState } from "react";
import { Link } from "react-router-dom";
import boatImage from "../../assets/Icons/nav-boat.png";
import { useNavigate } from "react-router-dom";

const UserIcon = ({ isSelected }) => (
  <svg style={styles.Icon} viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z"></path>
    <path
      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
      style={{ fill: isSelected ? "white" : "#17233c" }}
    ></path>
  </svg>
);
const DashIcon = ({ isSelected }) => (
  <svg style={styles.Icon} viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path
      d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z"
      style={{ fill: isSelected ? "white" : "#17233c" }}
    ></path>
  </svg>
);
const BookIcon = ({ isSelected }) => (
  <svg style={styles.Icon} viewBox="0 0 512 512">
    <path
      d="M384 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM240 128c35.35 0 64 28.65 64 64s-28.65 64-64 64c-35.34 0-64-28.65-64-64S204.7 128 240 128zM336 384h-192C135.2 384 128 376.8 128 368C128 323.8 163.8 288 208 288h64c44.18 0 80 35.82 80 80C352 376.8 344.8 384 336 384zM496 64H480v96h16C504.8 160 512 152.8 512 144v-64C512 71.16 504.8 64 496 64zM496 192H480v96h16C504.8 288 512 280.8 512 272v-64C512 199.2 504.8 192 496 192zM496 320H480v96h16c8.836 0 16-7.164 16-16v-64C512 327.2 504.8 320 496 320z"
      style={{ fill: isSelected ? "white" : "#17233c" }}
    ></path>
  </svg>
);
const SalesIcon = ({ isSelected }) => (
  <svg style={styles.Icon} viewBox="0 0 512 512">
    <path
      d="M64 400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V400zM342.6 278.6C330.1 291.1 309.9 291.1 297.4 278.6L240 221.3L150.6 310.6C138.1 323.1 117.9 323.1 105.4 310.6C92.88 298.1 92.88 277.9 105.4 265.4L217.4 153.4C229.9 140.9 250.1 140.9 262.6 153.4L320 210.7L425.4 105.4C437.9 92.88 458.1 92.88 470.6 105.4C483.1 117.9 483.1 138.1 470.6 150.6L342.6 278.6z"
      style={{ fill: isSelected ? "white" : "#17233c" }}
    ></path>
  </svg>
);
const MessageIcon = ({ isSelected }) => (
  <svg style={styles.Icon} viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
      style={{ fill: isSelected ? "white" : "#17233c" }}
    ></path>
  </svg>
);
const RefoundIcon = ({ isSelected }) => (
  <svg style={styles.Icon} viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"
      style={{ fill: isSelected ? "white" : "#17233c" }}
    ></path>
  </svg>
);
const ReviewIcon = ({ isSelected }) => (
  <svg style={styles.Icon} viewBox="0 0 24 24">
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path
      d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10l-3.43 1.57z"
      style={{ fill: isSelected ? "white" : "#17233c" }}
    ></path>
  </svg>
);
const DataIcon = ({ isSelected }) => (
  <svg style={styles.Icon} viewBox="0 0 512 512">
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM199.2 312.6c14.94 15.06 34.8 23.38 55.89 23.38c.0313 0 0 0 0 0c21.06 0 40.92-8.312 55.83-23.38c9.375-9.375 24.53-9.469 33.97-.1562c9.406 9.344 9.469 24.53 .1562 33.97c-24 24.22-55.95 37.56-89.95 37.56c0 0 .0313 0 0 0c-33.97 0-65.95-13.34-89.95-37.56c-49.44-49.88-49.44-131 0-180.9c24-24.22 55.98-37.56 89.95-37.56c.0313 0 0 0 0 0c34 0 65.95 13.34 89.95 37.56c9.312 9.438 9.25 24.62-.1562 33.97c-9.438 9.344-24.59 9.188-33.97-.1562c-14.91-15.06-34.77-23.38-55.83-23.38c0 0 .0313 0 0 0c-21.09 0-40.95 8.312-55.89 23.38C168.3 230.6 168.3 281.4 199.2 312.6z"
      style={{ fill: isSelected ? "white" : "#17233c" }}
    ></path>
  </svg>
);
const AdminIcon = ({ isSelected }) => (
  <svg style={styles.Icon} viewBox="0 0 576 512">
    <path
      d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z"
      style={{ fill: isSelected ? "white" : "#17233c" }}
    ></path>
  </svg>
);
const SignoutIcon = ({ isSelected }) => (
  <svg style={styles.Icon} viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
      style={{ fill: isSelected ? "white" : "#17233c" }}
    ></path>
  </svg>
);
const styles = {
  Icon: {
    color: "#ffffff",
    fill: "none",
    fontSize: "26px",
    top: "132px",
    left: "54px",
    width: "26px",
    height: "26px",
  },
};
const Sidebar = () => {
  const [isactive, setIsactive] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen  bg-white ">
      <Link to="/home">
        <div
          className="flex items-center px-5 py-2 rounded-full hover:bg-gray-200 cursor-pointer gap-2"
          style={{ backgroundColor: isactive == 0 ? "#17233c" : "" }}
          onClick={() => {
            setIsactive(0);
          }}
        >
          <DashIcon isSelected={isactive == 0 ? true : false} />
          <span
            className=" font-semibold"
            style={{ color: isactive == 0 ? "white" : "" }}
          >
            Dashboard
          </span>
        </div>
      </Link>

      <Link to="/home/boat">
        <div
          className="flex items-center px-5 py-2 rounded-full hover:bg-gray-200 cursor-pointer gap-2"
          style={{ backgroundColor: isactive == 1 ? "#17233c" : "" }}
          onClick={() => {
            setIsactive(1);
          }}
        >
          <img src={boatImage}></img>
          <span
            className=" font-semibold"
            style={{ color: isactive == 1 ? "white" : "" }}
          >
            Boats
          </span>
        </div>
      </Link>
      <Link to="/home/users">
        <div
          className="flex items-center px-5 py-2 rounded-full hover:bg-gray-200 cursor-pointer gap-2"
          style={{ backgroundColor: isactive == 2 ? "#17233c" : "" }}
          onClick={() => {
            setIsactive(2);
          }}
        >
          <UserIcon isSelected={isactive == 2 ? true : false} />
          <span
            className=" font-semibold"
            style={{ color: isactive == 2 ? "white" : "" }}
          >
            Users
          </span>
        </div>
      </Link>
      <Link to="/home/bookings">
        <div
          className="flex items-center px-5 py-2 rounded-full hover:bg-gray-200 cursor-pointer gap-2"
          style={{ backgroundColor: isactive == 3 ? "#17233c" : "" }}
          onClick={() => {
            setIsactive(3);
          }}
        >
          <BookIcon isSelected={isactive == 3 ? true : false} />
          <span
            className=" font-semibold"
            style={{ color: isactive == 3 ? "white" : "" }}
          >
            Bookings
          </span>
        </div>
      </Link>
      <Link to="/home/sales">
        <div
          className="flex items-center px-5 py-2 rounded-full hover:bg-gray-200 cursor-pointer gap-2"
          style={{ backgroundColor: isactive == 4 ? "#17233c" : "" }}
          onClick={() => {
            setIsactive(4);
          }}
        >
          <SalesIcon isSelected={isactive == 4 ? true : false} />
          <span
            className=" font-semibold"
            style={{ color: isactive == 4 ? "white" : "" }}
          >
            Sales & Payments
          </span>
        </div>
      </Link>
      <Link to="/home/message">
        <div
          className="flex items-center px-5 py-2 rounded-full hover:bg-gray-200 cursor-pointer gap-2"
          style={{ backgroundColor: isactive == 5 ? "#17233c" : "" }}
          onClick={() => {
            setIsactive(5);
          }}
        >
          <MessageIcon isSelected={isactive == 5 ? true : false} />
          <span
            className=" font-semibold"
            style={{ color: isactive == 5 ? "white" : "" }}
          >
            Messages
          </span>
        </div>
      </Link>
      <Link to="/home/refunds">
        <div
          className="flex items-center px-5 py-2 rounded-full hover:bg-gray-200 cursor-pointer gap-2"
          style={{ backgroundColor: isactive == 6 ? "#17233c" : "" }}
          onClick={() => {
            setIsactive(6);
          }}
        >
          <RefoundIcon isSelected={isactive == 6 ? true : false} />
          <span
            className=" font-semibold"
            style={{ color: isactive == 6 ? "white" : "" }}
          >
            Refund Management
          </span>
        </div>
      </Link>
      <Link to="/home/reviews">
        <div
          className="flex items-center px-5 py-2 rounded-full hover:bg-gray-200 cursor-pointer gap-2"
          style={{ backgroundColor: isactive == 7 ? "#17233c" : "" }}
          onClick={() => {
            setIsactive(7);
          }}
        >
          <ReviewIcon isSelected={isactive == 7 ? true : false} />
          <span
            className=" font-semibold"
            style={{ color: isactive == 7 ? "white" : "" }}
          >
            Reviews
          </span>
        </div>
      </Link>
      <Link to="/home/data">
        <div
          className="flex items-center px-5 py-2 rounded-full hover:bg-gray-200 cursor-pointer gap-2"
          style={{ backgroundColor: isactive == 8 ? "#17233c" : "" }}
          onClick={() => {
            setIsactive(8);
          }}
        >
          <DataIcon isSelected={isactive == 8 ? true : false} />
          <span
            className=" font-semibold"
            style={{ color: isactive == 8 ? "white" : "" }}
          >
            Data
          </span>
        </div>
      </Link>
      <Link to="/home/adminusers">
        <div
          className="flex items-center px-5 py-2 rounded-full hover:bg-gray-200 cursor-pointer gap-2"
          style={{ backgroundColor: isactive == 9 ? "#17233c" : "" }}
          onClick={() => {
            setIsactive(9);
          }}
        >
          <AdminIcon isSelected={isactive == 9 ? true : false} />
          <span
            className=" font-semibold"
            style={{ color: isactive == 9 ? "white" : "" }}
          >
            Admin Users
          </span>
        </div>
      </Link>

      <div
        className="flex items-center px-5 py-2 rounded-full hover:bg-gray-200 cursor-pointer gap-2"
        style={{ backgroundColor: isactive == 10 ? "#17233c" : "" }}
        onClick={() => {
          setIsactive(10);
          navigate("/");
        }}
      >
        <SignoutIcon isSelected={isactive == 10 ? true : false} />
        <span className=" font-semibold" style={{ color: isactive == 10 ? "white" : "" }}>Sign Out</span>
      </div>
    </div>
  );
};

export default Sidebar;
