import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { FormInput, Option } from "../../components";
import { Loading } from "../../components";

import { apiKey } from "../../utils/Constant";
import { getLocationType } from "../../features/basic/basicAction";
import { submitLocation } from "../../features/boats/boatsAction";
import { setLoading } from "../../features/global/globalSlice";

const Loacaion = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const loading = useSelector((state) => state.globalState.loading);
  const locationtypes = useSelector((state) => state.basicState.locationtype);
  const curboat = useSelector((state) => state.globalState.curboat);

  const [location, stLocation] = useState(
    curboat.location2
      ? curboat.location2
      : {
          boatname: "",
          locationtype: null,
          marinaname: "",
          address: "",
        }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    stLocation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    dispatch(setLoading(true));
    const result = await dispatch(submitLocation(curboat._id, location));
    if (result?.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    if (curboat?._id === undefined) {
      navigate("/home/boat");
    }
    const fetcLocationTypes = async () => {
      await dispatch(setLoading(true));
      let result = await dispatch(getLocationType());
      const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
            resolve();
          };
          document.body.appendChild(script);
        });
      };
      const initAutocomplete = () => {
        const autocomplete = new window.google.maps.places.Autocomplete(
          inputRef.current,
          {
            types: ["address"],
          }
        );

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          handleChange({ target: { address, value: place.formatted_address } });
        });
      };
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
      ).then(() => {
        initAutocomplete();
      });
      await dispatch(setLoading(false));
    };
    fetcLocationTypes();
  }, []);

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
                <span style={styles.title}>Location of the boat</span>
                <span style={styles.des}>
                  Add your travel plans. You will be able to add up to 5
                  different plans for your boat indicating price, schedule, if
                  captain is included and the description of the destinations
                  and what is included in the plan.
                </span>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Boat Name</span>
                  <FormInput
                    type="text"
                    name="boatname"
                    onChange={handleChange}
                    value={location.boatname}
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Location Type</span>
                  <Option
                    defaultValue={location.locationtype}
                    width="w-full"
                    options={locationtypes}
                    name="locationtype"
                    onChange={handleChange}
                    placeholder="Select the location type"
                  />
                </div>
                <span style={styles.head}>Address</span>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Marina Name</span>
                  <FormInput
                    type="text"
                    name="marinaname"
                    onChange={handleChange}
                    value={location.marinaname}
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Model</span>
                  <div style={styles.widget}>
                    <input
                      type="text"
                      ref={inputRef}
                      placeholder="Enter your address"
                      style={styles.input}
                      value={location.address}
                      name="address"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-center mt-3">
                  <div
                    style={styles.btn}
                    className="py-2 text-center w-1/2 cursor-pointer"
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
  des: {
    color: "#000000",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    lineHeight: "20px",
  },
  item: {
    color: "#17233c",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    lineHeight: "20px",
  },
  head: {
    color: "#17233c",
    fontSize: "16px",
    fontFamily: "Lexend Deca",
    fontWeight: "600",
    lineHeight: "21px",
  },
  widget: {
    width: "100%",
    padding: "0px 8px",
    border: "0",
    boxSizing: "border-box",
    borderRadius: "8px",
    boxShadow: "2px 2px 4px rgba(3,3,3,0.1)",
    backgroundColor: "#ffffff",
    placeholdercolor: "#94a3b8",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    lineHeight: "36px",
    outline: "none",
  },
  input: {
    width: "100%",
    border: "none",
    outline: "none",
  },
  btn: {
    boxSizing: "border-box",
    borderRadius: "6px",
    backgroundColor: "#2a8500",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "20px",
    outline: "none",
  },
};
export default Loacaion;
