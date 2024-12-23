import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setLoading } from "../../features/global/globalSlice";
import { Loading } from "../../components";
import { FormInput, Rating, ToggleSwitch } from "../../components";

import {
  getAllBoatTypes,
  getAllBoatBrands,
  updateBrand,
  getAllowes,
  getAccessories,
} from "../../features/basic/basicAction";

import ZelleImgae from "../../assets/Icons/zelle.png";
import BinanceImgae from "../../assets/Icons/binance.png";
import PaypalImgae from "../../assets/Icons/paypal.png";
import BankImage from "../../assets/Icons/bank.png";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.globalState.loading);

  const types = useSelector((state) => state.basicState.boattypes);
  const brands = useSelector((state) => state.basicState.boatbrands);
  const allowes = useSelector((state) => state.basicState.allowes);
  const accessories = useSelector((state) => state.basicState.accessories);

  const [btypes, setBtypes] = useState(types);
  const [bbrands, setBrands] = useState(brands);
  const [ballowes, setBallowes] = useState(allowes);
  const [baccessories, setBaccessories] = useState(accessories);

  const handleImageUpload = (event, sort, _id) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (sort == "type") {
        }
        if (sort == "brand") {
        }
        if (sort == "allowes") {
        }
        if (sort == "accessories") {
        }
        // setImage((prevState) => ({
        //   ...prevState,
        //   [name]: reader.result,
        // }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (sort, id, name, value) => {
    if (sort == "type") {
      setBtypes((predata) =>
        predata.map((p) => (p._id === id ? { ...p, ...{ [name]: value } } : p))
      );
    }
    if (sort == "brand") {
      setBrands((predata) =>
        predata.map((p) => (p._id === id ? { ...p, ...{ [name]: value } } : p))
      );
    }
    if (sort == "allowes") {
      setBallowes((predata) =>
        predata.map((p) => (p._id === id ? { ...p, ...{ [name]: value } } : p))
      );
    }
    if (sort == "accessories") {
      setBaccessories((predata) =>
        predata.map((p) => (p._id === id ? { ...p, ...{ [name]: value } } : p))
      );
    }
  };

  const addnewtemp = (sort) => {
    if (sort == "brand") {
      const lastBrand = bbrands[bbrands.length - 1];
      const newBrand = { _id: lastBrand._id + 1, name: "" };
      setBrands([...bbrands, newBrand]);
    }
    if (sort == "type") {
      const lasttype = btypes[btypes.length - 1];
      const newtype = { _id: lasttype._id + 1, name: "" };
      setBtypes([...btypes, newtype]);
    }
    if (sort == "allowes") {
    }
    if (sort == "accessories") {
    }
  };

  const update = (sort, id, name) => {
    if (sort == "brand") {
      let response = dispatch(updateBrand(id, name));
      console.log(response);
    }
    if (sort == "type") {
    }
    if (sort == "allowes") {
    }
    if (sort == "accessories") {
    }
  };

  useEffect(() => {
    const fetchbasic = async () => {
      dispatch(setLoading(true));
      let result = await dispatch(getAllBoatBrands());
      result = await dispatch(getAllBoatTypes());
      result = await dispatch(getAllowes());
      result = await dispatch(getAccessories());
      dispatch(setLoading(false));
    };
    fetchbasic();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full flex flex-col gap-3" style={styles.container}>
          <div
            className="w-1/3 px-3 py-2 flex flex-row justify-between items-center"
            style={styles.card}
          >
            <div className="flex flex-row items-center  gap-2">
              <span style={styles.title}>Baraquea Service Fee:</span>
              <input
                type="text"
                className="border border-slate-950 p-2 text-center ml-5"
                style={styles.detail}
              />
              <span>%</span>
            </div>
            <div
              style={{ ...styles.btn, backgroundColor: "#367ec2" }}
              className="w-1/5 text-center"
            >
              Save
            </div>
          </div>
          <div className=" flex flex-row gap-5 justify-around">
            <div className="w-1/2 flex flex-col gap-3 p-2" style={styles.card}>
              <span style={styles.title}>Boat Brands</span>
              <table className="w-full table-auto text-center">
                <thead>
                  <tr style={{ backgroundColor: "#f0f1ff" }}>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bbrands.map((item, index) => (
                    <tr key={index} className={`border-b cursor-pointer`}>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          className="text-center p-0 m-0 border-none outline-none"
                          value={item.name}
                          onChange={(event) =>
                            handleChange(
                              "brand",
                              item._id,
                              "name",
                              event.target.value
                            )
                          }
                        />
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex flex-row gap-2 justify-center">
                          <div
                            style={{
                              ...styles.btn,
                              backgroundColor: "#17233c",
                            }}
                            onClick={() => {
                              update("brand", item._id, item.name);
                            }}
                          >
                            Save
                          </div>
                          <div
                            style={{
                              ...styles.btn,
                              backgroundColor: "#072d4c",
                            }}
                          >
                            Delete
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                style={{ ...styles.btn, backgroundColor: "#367ec2" }}
                className="w-1/5 text-center"
                onClick={() => {
                  addnewtemp("brand");
                }}
              >
                Add New Item
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-3 p-2" style={styles.card}>
              <span style={styles.title}>Boat Types</span>
              <table className="w-full table-auto text-center overflow-auto">
                <thead>
                  <tr style={{ backgroundColor: "#f0f1ff" }}>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {btypes.map((item, index) => (
                    <tr key={index} className={`border-b cursor-pointer`}>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={item.name}
                          onChange={(event) =>
                            handleChange(
                              "type",
                              item._id,
                              "name",
                              event.target.value
                            )
                          }
                          className="text-center p-0 m-0 border-none outline-none"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex flex-row gap-2 justify-center">
                          <div
                            style={{
                              ...styles.btn,
                              backgroundColor: "#17233c",
                            }}
                          >
                            Save
                          </div>
                          <div
                            style={{
                              ...styles.btn,
                              backgroundColor: "#072d4c",
                            }}
                          >
                            Delete
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                style={{ ...styles.btn, backgroundColor: "#367ec2" }}
                className="w-1/5 text-center"
                onClick={() => {
                  addnewtemp("type");
                }}
              >
                Add New Item
              </div>
            </div>
          </div>
          <div className=" flex flex-row gap-5 justify-around">
            <div className="w-1/2 flex flex-col gap-3 p-2" style={styles.card}>
              <span style={styles.title}>Boat Brands</span>
              <table className="w-full table-auto text-center">
                <thead>
                  <tr style={{ backgroundColor: "#f0f1ff" }}>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {ballowes.map((item, index) => (
                    <tr key={index} className={`border-b cursor-pointer`}>
                      <td className="px-4 py-2">
                        <input
                          value={item.title}
                          type="text"
                          className="text-center p-0 m-0 border-none outline-none"
                          onChange={(event) =>
                            handleChange(
                              "allowes",
                              item._id,
                              "title",
                              event.target.value
                            )
                          }
                        />
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex flex-row gap-2 justify-center">
                          <div
                            style={{
                              ...styles.btn,
                              backgroundColor: "#17233c",
                            }}
                          >
                            Save
                          </div>
                          <div
                            style={{
                              ...styles.btn,
                              backgroundColor: "#072d4c",
                            }}
                          >
                            Delete
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                style={{ ...styles.btn, backgroundColor: "#367ec2" }}
                className="w-1/5 text-center"
              >
                Add New Item
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-3 p-2" style={styles.card}>
              <span style={styles.title}>Boat Brands</span>
              <table className="w-full table-auto text-center">
                <thead>
                  <tr style={{ backgroundColor: "#f0f1ff" }}>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {baccessories.map((item, index) => (
                    <tr key={index} className={`border-b cursor-pointer`}>
                      <td className="px-4 py-2">
                        <input
                          value={item.title}
                          onChange={(event) =>
                            handleChange(
                              "accessories",
                              item._id,
                              "title",
                              event.target.value
                            )
                          }
                          type="text"
                          className="text-center p-0 m-0 border-none outline-none"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex flex-row gap-2 justify-center">
                          <div
                            style={{
                              ...styles.btn,
                              backgroundColor: "#17233c",
                            }}
                          >
                            Save
                          </div>
                          <div
                            style={{
                              ...styles.btn,
                              backgroundColor: "#072d4c",
                            }}
                          >
                            Delete
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                style={{ ...styles.btn, backgroundColor: "#367ec2" }}
                className="w-1/5 text-center"
              >
                Add New Item
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 p-4" style={styles.card}>
            <span style={styles.title}>Barquea Payment Information</span>
            <div className="flex flex-row gap-3 justify-around">
              <div className="w-1/5 flex flex-col gap-1 justify-center ">
                <div className="flex flex-row gap-5 items-center">
                  <img src={ZelleImgae} alt="" />
                  <span style={styles.title}>Zelle</span>
                  <ToggleSwitch />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Name:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Email:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                  />
                </div>
              </div>
              <div className="w-1/5 flex flex-col gap-1 justify-center ">
                <div className="flex flex-row gap-5 items-center">
                  <img src={BinanceImgae} alt="" />
                  <span style={styles.title}>Binance Pay</span>
                  <ToggleSwitch />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Name:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Email:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>ID:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                  />
                </div>
              </div>
              <div className="w-1/5 flex flex-col gap-1 justify-center ">
                <div className="flex flex-row gap-5 items-center">
                  <img src={PaypalImgae} alt="" />
                  <span style={styles.title}>PayPal</span>
                  <ToggleSwitch />
                </div>
                <div className="flex flex-row  items-center">
                  <span style={styles.item}>Name:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                  />
                </div>
                <div className="flex flex-row  items-center">
                  <span style={styles.item}>Email:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 justify-around">
              <div className="w-1/5 flex flex-col gap-1 justify-center ">
                <div className="flex flex-row gap-5 items-center">
                  <img src={BankImage} alt="" />
                  <span style={styles.title}>Bank Account info</span>
                  <ToggleSwitch />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Bank:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Name:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Email:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>AccountN*:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                  />
                </div>
              </div>
              <div className="w-1/5 flex flex-col gap-1 justify-center ">
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>ABA:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Address:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Swift:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                  />
                </div>
              </div>
              <div className="w-1/5 flex flex-col gap-1 justify-center ">
                <div
                  style={{ ...styles.btn, backgroundColor: "#367ec2" }}
                  className="text-center w-2/3"
                >
                  Save Changes
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
    padding: "20px 20px",
  },
  btn: {
    cursor: "pointer",
    padding: "10px 10px",
    border: "0",
    boxSizing: "border-box",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    fontWeight: 700,
    lineHeight: "20px",
  },
  title: {
    color: "#030303",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "28px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
  },
  detail: {
    outline: "none",
    borderRadius: "8px",
    width: "50px",
  },
  item: {
    color: "#17233c",
    fontSize: "14px",
    lineHeight: "20px",
  },
};
export default Home;
