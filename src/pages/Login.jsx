import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import { Form, Link, useNavigate } from "react-router-dom";

import { FormInput, Checkbox } from "../components";
import markTitle from "../assets/Icons/headermark.png";
import userShield from "../assets/Icons/userShield.png";

import { Signin } from "../features/user/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [personInfo, setPersonInfo] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    const result = await dispatch(Signin(personInfo));
    if (result.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    } else {
      navigate("/home");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="bg-white rounded-lg pt-5 pl-8 pr-8 pb-4 w-1/5"
        style={styles.shadow}
      >
        <div className="flex w-full justify-center">
          <img src={markTitle} alt="" />
        </div>
        <div className="flex flex-row items-center justify-center gap-2 pt-4">
          <img src={userShield} alt="" />
          <span style={styles.title}>Admin Portal</span>
        </div>
        <div className="flex flex-row justify-center pt-3">
          <span style={styles.head} className="text-center">
            Welcome Back
          </span>
        </div>
        <div className="flex flex-col mt-4">
          <span style={styles.des}>Username</span>
          <FormInput
            type="text"
            name="email"
            onChange={handleChange}
            value={personInfo.email}
          />
        </div>
        <div className="flex flex-col mt-4">
          <span style={styles.des}>Password</span>
          <FormInput
            type="password"
            name="password"
            onChange={handleChange}
            value={personInfo.password}
          ></FormInput>
        </div>
        <div className="flex flex-row items-center gap-2 mt-4">
          <Checkbox></Checkbox>
          <span style={styles.remember}>Remember me</span>
        </div>
        <div
          style={styles.btn}
          className="mt-5 flex justify-center"
          onClick={() => {
            login();
          }}
        >
          <span style={styles.btntext} className="text-center">
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  shadow: {
    boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
  },
  title: {
    color: "#17233c",
    fontSize: "24px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "32px",
  },
  head: {
    color: "#17233c",
    fontSize: "20px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "28px",
    textAlign: "center",
  },
  des: {
    color: "#17233c",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    lineHeight: "20px",
  },
  remember: {
    color: "#17233c",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    lineHeight: "20px",
  },
  btn: {
    cursor: "pointer",
    padding: "10px 0px",
    border: "0",
    boxSizing: "border-box",
    borderRadius: "6px",
    backgroundColor: "#17233c",
  },
  btntext: {
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "20px",
    outline: "none",
  },
};

export default Login;
