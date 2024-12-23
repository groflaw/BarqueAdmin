import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Loading } from "../../components";
import { getAllowes } from "../../features/basic/basicAction";
import { submitAllowes } from "../../features/boats/boatsAction";
import { setLoading } from "../../features/global/globalSlice";

const Allowes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allowes = useSelector((state) => state.basicState.allowes);
  const curboat = useSelector((state) => state.globalState.curboat);
  const loading = useSelector((state) => state.globalState.loading);

  const [all, setAll] = useState(curboat.allowes ? curboat.allowes : []);

  const handleChange = async (checked, id) => {
    if (checked) {
      setAll((preAllow) => [...preAllow, id]);
    } else {
      setAll((preAllow) => preAllow.filter((itemId) => itemId !== id));
    }
  };
  useEffect(() => {
    if (curboat?._id === undefined) {
      navigate("/home/boat");
    }
    const fetchAllowes = async () => {
      dispatch(setLoading(true));
      let result = await dispatch(getAllowes());
      if (result?.errors) {
        for (let key in result.errors) {
          if (result.errors.hasOwnProperty(key)) {
            toast.error(`${result.errors[key]}`);
          }
        }
      }
      dispatch(setLoading(false));
    };
    fetchAllowes();
  }, []);

  const handleSubmit = async () => {
    const result = await dispatch(submitAllowes(curboat._id, all));
    if (result?.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div style={styles.container} className="flex flex-row gap-5">
          <Link to="/home/boat/option">
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
              <div
                style={styles.card}
                className="w-full px-10 py-10 flex flex-col gap-4"
              >
                <span style={styles.title}>What is allowed on the boat?</span>
                <span style={styles.des}>
                  Select the accessories your boat has.
                </span>
                {allowes.map((item, index) => {
                  return (
                    <div
                      className="flex flex-row justify-between items-center mt-2"
                      key={index}
                    >
                      <div className="flex flex-row gap-4 items-center">
                        <img src={item.icon} alt="" />
                        <span>{item.title}</span>
                      </div>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        style={{ width: 20, height: 20 }}
                        checked={all.includes(item._id)}
                        onChange={(checked) => {
                          handleChange(checked, item._id);
                        }}
                      />
                    </div>
                  );
                })}

                <div className="w-full flex justify-center mt-4">
                  <div
                    style={{ ...styles.btn, backgroundColor: "#2a8500" }}
                    className="w-4/5 text-center cursor-pointer"
                    onClick={() => handleSubmit()}
                  >
                    Save Changes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    padding: "15px",
  },
  card: {
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
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
  title: {
    color: "#17233c",
    fontSize: "20px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "26px",
  },
  item: {
    borderRadius: "12px",
    color: "#ffffff",
    fontSize: "10px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "18px",
    textAlign: "center",
    outline: "none",
  },
  des: {
    color: "#000000",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    lineHeight: "20px",
  },
  btn: {
    padding: "10px 10px",
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

export default Allowes;
