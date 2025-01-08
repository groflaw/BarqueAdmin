import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import socket from "../utils/Socket";

import { Header } from "../components";
import { Loading } from "../components";
import { Sidebar } from "../components";

import { checkToken } from "../features/user/userAction";

const HomeLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isPageLoading = navigation.state === "loading";

  const intialSetting = async () => {
    let result = await dispatch(checkToken());
    if (!result) {
      navigate("/");
    }
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    socket.emit("registerUser", decoded.id);
  };

  useEffect(() => {
    intialSetting();
  }, []);

  return (
    <>
      {isPageLoading ? (
        <Loading />
      ) : (
        <>
          <nav>
            <Header />
          </nav>
          <div className="flex flex-row w-full ">
            <div className="w-1/6 pl-8 pr-8 pt-2 shadow-md">
              <Sidebar />
            </div>
            <div className="w-5/6 ">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomeLayout;
