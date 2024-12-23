import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  getAllBoatTypes,
  getAllBoatBrands,
  getEnginesCount,
  getBathroomCount,
  getCabinscount,
  getCapacity,
  getPowers,
} from "../../features/basic/basicAction";

import { apiKey } from "../../utils/Constant";
import { submitBasic } from "../../features/boats/boatsAction";
import { setLoading } from "../../features/global/globalSlice";
import { FormInput, Number, Option } from "../../components";

import { Spiner } from "../../components";

const BoatInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const boatTypes = useSelector((state) => state.basicState.boattypes);
  const boatBrands = useSelector((state) => state.basicState.boatbrands);
  const enginecount = useSelector((state) => state.basicState.enginecount);
  const bathroomcount = useSelector((state) => state.basicState.bathroomcount);
  const powers = useSelector((state) => state.basicState.powers);
  const capacity = useSelector((state) => state.basicState.capacity);
  const cabinscount = useSelector((state) => state.basicState.cabinscount);

  const loading = useSelector((state) => state.globalState.loading);
  const curboat = useSelector((state) => state.globalState.curboat);
  const curhost = useSelector((state) => state.globalState.curhost);

  const options = [
    { name: "Option 1", _id: "1" },
    { name: "Option 2", _id: "2" },
    { name: "Option 3", _id: "3" },
  ];

  const [boatdata, setBoatData] = useState({
    user: curhost._id,
    model: curboat.model || "",
    description: curboat.description || "",
    location1: curboat.location1 || "",
    year: curboat.year || 2010,
    size: curboat.size || 38,
    boattype: curboat.boattype || 0,
    boatbrand: curboat.boatbrand || 0,
    enginecount: curboat.enginecount || 0,
    bathroomcount: curboat.bathroomcount || 0,
    power: curboat.power || 0,
    capacity: curboat.capacity || 0,
    cabinscount: curboat.cabinscount || 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoatData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    await dispatch(setLoading(true));
    const result = await dispatch(submitBasic(boatdata, curboat?._id));
    if (result?.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    }
    await dispatch(setLoading(false));
  };

  useEffect(() => {
    if (curboat?._id === undefined) {
      navigate("/home/boat");
    }
    const fetchBasicData = async () => {
      await dispatch(setLoading(true));
      let result = await dispatch(getAllBoatTypes());
      result = await dispatch(getAllBoatBrands());
      result = await dispatch(getEnginesCount());
      result = await dispatch(getBathroomCount());
      result = await dispatch(getCabinscount());
      result = await dispatch(getCapacity());
      result = await dispatch(getPowers());
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
          handleChange({
            target: { location1, value: place.formatted_address },
          });
        });
      };

      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
      ).then(() => {
        initAutocomplete();
      });
      await dispatch(setLoading(false));
    };
    fetchBasicData();
  }, [curboat, navigate]);

  return (
    <>
      {loading ? (
        <Spiner />
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
                <span style={styles.title}>Boat Information</span>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Model</span>
                  <FormInput
                    type="text"
                    name="model"
                    onChange={handleChange}
                    value={boatdata.model}
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Description</span>
                  <FormInput
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={boatdata.description}
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Loaction</span>
                  <div style={styles.widget}>
                    <input
                      type="text"
                      ref={inputRef}
                      placeholder="Enter your address"
                      style={styles.input}
                      value={boatdata.location1}
                      name="location1"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Year</span>
                  <Number
                    value={boatdata.year}
                    onChange={handleChange}
                    name="year"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Size</span>
                  <Number
                    value={boatdata.size}
                    onChange={handleChange}
                    name="size"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>BoatType</span>
                  <Option
                    defaultValue={boatdata.boattype}
                    width="w-full"
                    options={boatTypes}
                    name="boattype"
                    onChange={handleChange}
                    placeholder="Select an option"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Brand</span>
                  <Option
                    defaultValue={boatdata.boatbrand}
                    width="w-full"
                    options={boatBrands}
                    name="boatbrand"
                    onChange={handleChange}
                    placeholder="Select an option"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Engines</span>
                  <Number
                    value={boatdata.enginecount}
                    onChange={handleChange}
                    name="enginecount"
                    max={enginecount.length}
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Bathrooms</span>
                  <Number
                    value={boatdata.bathroomcount}
                    onChange={handleChange}
                    name="bathroomcount"
                    max={bathroomcount.length}
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Powered By</span>
                  <Option
                    defaultValue={boatdata.power}
                    width="w-full"
                    options={powers}
                    name="power"
                    onChange={handleChange}
                    placeholder="Select an option"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Capacity</span>
                  <Number
                    value={boatdata.capacity}
                    onChange={handleChange}
                    name="capacity"
                    max={capacity.length}
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <span style={styles.item}>Cabins/Staterooms</span>
                  <Number
                    value={boatdata.cabinscount}
                    onChange={handleChange}
                    name="cabinscount"
                    max={cabinscount.length}
                  />
                </div>
                <div className="flex flex-row w-full mt-5 justify-center">
                  <div
                    style={styles.btn}
                    className="w-1/2 text-center py-3 cursor-pointer"
                    onClick={handleSubmit}
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
    color: "#17233c",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    lineHeight: "20px",
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

export default BoatInfo;
