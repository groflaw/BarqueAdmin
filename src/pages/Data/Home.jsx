import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { setLoading } from "../../features/global/globalSlice";
import { Loading } from "../../components";
import { FormInput, Rating, ToggleSwitch } from "../../components";

import {
  getPayment,
  setPayment,
  getServiceFee,
  setServiceFee,
  getAllBoatTypes,
  updateType,
  deleteType,
  getAllBoatBrands,
  updateBrand,
  deleteBrand,
  getAllowes,
  updateAllow,
  deleteAllow,
  getAccessories,
  updateAccessories,
  deleteAccessories,
} from "../../features/basic/basicAction";

import ZelleImgae from "../../assets/Icons/zelle.png";
import BinanceImgae from "../../assets/Icons/binance.png";
import PaypalImgae from "../../assets/Icons/paypal.png";
import BankImage from "../../assets/Icons/bank.png";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.globalState.loading);

  const types = useSelector((state) => state.basicState.boattypes);
  const fee = useSelector((state) => state.basicState.servicefee);
  const payment = useSelector((state) => state.basicState.payment);
  const brands = useSelector((state) => state.basicState.boatbrands);
  const allowes = useSelector((state) => state.basicState.allowes);
  const accessories = useSelector((state) => state.basicState.accessories);

  const [btypes, setBtypes] = useState(types);
  const [bfee, setBfee] = useState(fee);
  const [bpayment, setBpayment] = useState(payment);
  const [bbrands, setBrands] = useState(brands);
  const [ballowes, setBallowes] = useState(allowes);
  const [baccessories, setBaccessories] = useState(accessories);

  const handleImageUpload = (event, sort, id) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (sort == "accessories") {
          setBaccessories((predata) =>
            predata.map((p) =>
              p._id === id
                ? { ...p, ...{ icon: reader.result, file: file } }
                : p
            )
          );
        }
        if (sort == "allowes") {
          setBallowes((predata) =>
            predata.map((p) =>
              p._id === id
                ? { ...p, ...{ icon: reader.result, file: file } }
                : p
            )
          );
        }
      };
      reader.readAsDataURL(file); // Convert the file to a base64 URL
    }
  };
  const convertForm = async (file) => {
    const formData = new FormData();
    formData.append("photo", file);
    return formData;
  };

  const handleChange = (sort, id, name, value, paysort) => {
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
    if (sort == "payment") {
      setBpayment({
        ...bpayment,
        [paysort]: { ...[paysort], ...{ [name]: value } },
      });
    }
  };

  const handlePayment = (paysort, name, newIsOn) => {
    setBpayment((prev) => ({
      ...prev,
      [paysort]: { ...prev[paysort], [name]: newIsOn },
    }));
  };
  const updatePayment = async () => {
    await dispatch(setLoading(true));
    let result = await dispatch(setPayment(bpayment));
    if (result?.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    } else {
      setBpayment(result);
    }
    await dispatch(setLoading(false));
  };

  const addnewtemp = (sort) => {
    if (sort == "brand") {
      const newBrand = {
        _id:
          bbrands.length > 0
            ? Math.max(...bbrands.map((item) => item._id)) + 1
            : 0,
        name: "",
      };
      setBrands([...bbrands, newBrand]);
    }
    if (sort == "type") {
      const newType = {
        _id:
          btypes.length > 0
            ? Math.max(...btypes.map((item) => item._id)) + 1
            : 0,
        name: "",
      };
      setBtypes([...btypes, newType]);
    }
    if (sort == "allowes") {
      const newAllow = {
        _id:
          ballowes.length > 0
            ? Math.max(...ballowes.map((item) => item._id)) + 1
            : 0,
        title: "",
        icon: "",
        file: null,
      };
      setBallowes([...ballowes, newAllow]);
    }
    if (sort == "accessories") {
      const newAccessory = {
        _id:
          baccessories.length > 0
            ? Math.max(...baccessories.map((item) => item._id)) + 1
            : 0,
        title: "",
        icon: "",
        file: null,
      };
      setBaccessories([...baccessories, newAccessory]);
    }
  };

  const update = async (sort, id, name) => {
    await dispatch(setLoading(true));
    let result;
    if (sort == "brand") {
      result = await dispatch(updateBrand(id, name));
      if (!result.errors) {
        setBrands(result);
      }
    }
    if (sort == "type") {
      result = await dispatch(updateType(id, name));
      if (!result.errors) {
        setBtypes(result);
      }
    }
    if (sort == "allowes") {
      const allow = ballowes.filter((item) => item._id == id)[0];
      const data = await convertForm(allow.file);
      result = await dispatch(updateAllow(data, allow.title));
      if (!result.errors) {
        setBallowes(result);
      }
    }
    if (sort == "accessories") {
      const accessories = baccessories.filter((item) => item._id == id)[0];
      const data = await convertForm(accessories.file);
      result = await dispatch(updateAccessories(data, accessories.title));
      if (!result.errors) {
        setBaccessories(result);
      }
    }
    if (result?.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    }
    await dispatch(setLoading(false));
  };

  const deleteItem = async (sort, id) => {
    await dispatch(setLoading(true));
    let result;
    if (sort == "brand") {
      result = await dispatch(deleteBrand(id));
      if (!result.errors) {
        setBrands(result);
      }
    }
    if (sort == "type") {
      result = await dispatch(deleteType(id));
      if (!result.errors) {
        setBtypes(result);
      }
    }
    if (sort == "allowes") {
      result = await dispatch(deleteAllow(id));
      if (!result.errors) {
        setBallowes(result);
      }
    }
    if (sort == "accessories") {
      result = await dispatch(deleteAccessories(id));
      if (!result.errors) {
        setBaccessories(result);
      }
    }
    if (result?.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    }
    await dispatch(setLoading(false));
  };

  const updateFee = async () => {
    await dispatch(setLoading(true));
    let result = await dispatch(setServiceFee(bfee));
    if (!result.errors) {
      setBfee(result);
    }
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
    const fetchbasic = async () => {
      await dispatch(setLoading(true));
      let result = await dispatch(getAllBoatBrands());
      result = await dispatch(getPayment());
      result = await dispatch(getServiceFee());
      result = await dispatch(getAllBoatTypes());
      result = await dispatch(getAllowes());
      result = await dispatch(getAccessories());
      await dispatch(setLoading(false));
    };
    fetchbasic();
  }, [dispatch]);

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
                value={bfee}
                onChange={(event) => {
                  setBfee(event.target.value);
                }}
              />
              <span>%</span>
            </div>
            <div
              style={{ ...styles.btn, backgroundColor: "#367ec2" }}
              className="w-1/5 text-center"
              onClick={() => {
                dispatch(updateFee(fee));
              }}
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
                    <tr key={index} className={`border-b `}>
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
                            onClick={() => {
                              deleteItem("brand", item._id);
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
                    <tr key={index} className={`border-b `}>
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
                            onClick={() => {
                              update("type", item._id, item.name);
                            }}
                          >
                            Save
                          </div>
                          <div
                            style={{
                              ...styles.btn,
                              backgroundColor: "#072d4c",
                            }}
                            onClick={() => {
                              deleteItem("type", item._id);
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
              <span style={styles.title}>Boat Allowes</span>
              <table className="w-full table-auto text-center">
                <thead>
                  <tr style={{ backgroundColor: "#f0f1ff" }}>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Icon</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {ballowes.map((item, index) => (
                    <tr key={index} className={`border-b `}>
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
                      <td className="px-4 py-2 ">
                        <input
                          type="file"
                          accept="image/*"
                          name={item._id}
                          onChange={(e) =>
                            handleImageUpload(e, "allowes", item._id)
                          }
                          style={{ display: "none" }}
                          id={`accessories-upload-${item._id}`}
                        />
                        <label
                          htmlFor={`accessories-upload-${item._id}`}
                          className="cursor-pointer"
                        >
                          {item.icon != "" ? (
                            <img
                              src={item.icon}
                              alt="Icon"
                              className="m-auto cursor-pointer"
                              style={{ width: "20px", height: "40px" }}
                            />
                          ) : (
                            <span className="cursor-pointer">Select Icon</span>
                          )}
                        </label>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex flex-row gap-2 justify-center">
                          <div
                            style={{
                              ...styles.btn,
                              backgroundColor: "#17233c",
                            }}
                            onClick={() => {
                              update("allowes", item._id);
                            }}
                          >
                            Save
                          </div>
                          <div
                            style={{
                              ...styles.btn,
                              backgroundColor: "#072d4c",
                            }}
                            onClick={() => {
                              deleteItem("allowes", item._id);
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
                  addnewtemp("allowes");
                }}
              >
                Add New Item
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-3 p-2" style={styles.card}>
              <span style={styles.title}>Boat Accessories</span>
              <table className="w-full table-auto text-center">
                <thead>
                  <tr style={{ backgroundColor: "#f0f1ff" }}>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Icon</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {baccessories.map((item, index) => (
                    <tr key={index} className={`border-b`}>
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
                        <input
                          type="file"
                          accept="image/*"
                          name={item._id}
                          onChange={(e) =>
                            handleImageUpload(e, "accessories", item._id)
                          }
                          style={{ display: "none" }}
                          id={`accessories-upload-${item._id}`}
                        />
                        <label
                          htmlFor={`accessories-upload-${item._id}`}
                          className="cursor-pointer"
                        >
                          {item.icon != "" ? (
                            <img
                              src={item.icon}
                              alt="Icon"
                              className="m-auto cursor-pointer"
                              style={{ width: "20px", height: "40px" }}
                            />
                          ) : (
                            <span className="cursor-pointer">Select Icon</span>
                          )}
                        </label>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex flex-row gap-2 justify-center">
                          <div
                            style={{
                              ...styles.btn,
                              backgroundColor: "#17233c",
                            }}
                            onClick={() => {
                              update("accessories", item._id);
                            }}
                          >
                            Save
                          </div>
                          <div
                            style={{
                              ...styles.btn,
                              backgroundColor: "#072d4c",
                            }}
                            onClick={() => {
                              deleteItem("accessories", item._id);
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
                  addnewtemp("accessories");
                }}
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
                  <ToggleSwitch
                    isOn={bpayment?.Zelle?.status} // Ensure this accesses the correct state
                    paysort="Zelle"
                    name="status"
                    setIsOn={handlePayment}
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Name:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                    value={bpayment?.Zelle?.name}
                    readOnly={!bpayment?.Zelle?.status}
                    onChange={(event) =>
                      handlePayment("Zelle", "name", event.target.value)
                    }
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Email:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                    value={bpayment?.Zelle?.email}
                    readOnly={!bpayment?.Zelle?.status}
                    onChange={(event) =>
                      handlePayment("Zelle", "email", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="w-1/5 flex flex-col gap-1 justify-center ">
                <div className="flex flex-row gap-5 items-center">
                  <img src={BinanceImgae} alt="" />
                  <span style={styles.title}>Binance Pay</span>
                  <ToggleSwitch
                    isOn={bpayment?.Binance?.status}
                    paysort="Binance"
                    name="status"
                    setIsOn={handlePayment}
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Name:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                    value={bpayment?.Binance?.name}
                    readOnly={!bpayment?.Binance?.status}
                    onChange={(event) =>
                      handlePayment("Binance", "name", event.target.value)
                    }
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Email:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                    value={bpayment?.Binance?.email}
                    readOnly={!bpayment?.Binance?.status}
                    onChange={(event) =>
                      handlePayment("Binance", "email", event.target.value)
                    }
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>ID:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                    readOnly={!bpayment?.Binance?.status}
                    value={bpayment?.Binance?.ID}
                    onChange={(event) =>
                      handlePayment("Binance", "ID", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="w-1/5 flex flex-col gap-1 justify-center ">
                <div className="flex flex-row gap-5 items-center">
                  <img src={PaypalImgae} alt="" />
                  <span style={styles.title}>PayPal</span>
                  <ToggleSwitch
                    isOn={bpayment?.PayPal?.status}
                    paysort="PayPal"
                    name="status"
                    setIsOn={handlePayment}
                  />
                </div>
                <div className="flex flex-row  items-center">
                  <span style={styles.item}>Name:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                    value={bpayment?.PayPal?.name}
                    readOnly={!bpayment?.PayPal?.status}
                    onChange={(event) =>
                      handlePayment("PayPal", "name", event.target.value)
                    }
                  />
                </div>
                <div className="flex flex-row  items-center">
                  <span style={styles.item}>Email:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                    value={bpayment?.PayPal?.email}
                    readOnly={!bpayment?.PayPal?.status}
                    onChange={(event) =>
                      handlePayment("PayPal", "email", event.target.value)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 justify-around">
              <div className="w-1/5 flex flex-col gap-1 justify-center ">
                <div className="flex flex-row gap-5 items-center">
                  <img src={BankImage} alt="" />
                  <span style={styles.title}>Bank Account info</span>
                  <ToggleSwitch
                    isOn={bpayment?.Bank?.status}
                    paysort="Bank"
                    name="status"
                    setIsOn={handlePayment}
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Bank:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                    value={bpayment?.Bank?.bank}
                    readOnly={!bpayment?.Bank?.status}
                    onChange={(event) =>
                      handlePayment("Bank", "bank", event.target.value)
                    }
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Name:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                    value={bpayment?.Bank?.name}
                    readOnly={!bpayment?.Bank?.status}
                    onChange={(event) =>
                      handlePayment("Bank", "name", event.target.value)
                    }
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Email:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                    value={bpayment?.Bank?.email}
                    readOnly={!bpayment?.Bank?.status}
                    onChange={(event) =>
                      handlePayment("Bank", "email", event.target.value)
                    }
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>AccountN*:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                    value={bpayment?.Bank?.accoountN}
                    readOnly={!bpayment?.Bank?.status}
                    onChange={(event) =>
                      handlePayment("Bank", "accoountN", event.target.value)
                    }
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
                    value={bpayment?.Bank?.aba}
                    readOnly={!bpayment?.Bank?.status}
                    onChange={(event) =>
                      handlePayment("Bank", "aba", event.target.value)
                    }
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Address:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                    value={bpayment?.Bank?.address}
                    readOnly={!bpayment?.Bank?.status}
                    onChange={(event) =>
                      handlePayment("Bank", "address", event.target.value)
                    }
                  />
                </div>
                <div className="flex flex-row  items-center justify-between">
                  <span style={styles.item}>Swift:</span>
                  <input
                    type="text"
                    className="border border-slate-950 p-1 text-center ml-5"
                    style={{ ...styles.detail, width: "auto" }}
                    value={bpayment?.Bank?.switf}
                    readOnly={!bpayment?.Bank?.status}
                    onChange={(event) =>
                      handlePayment("Bank", "switf", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="w-1/5 flex flex-col gap-1 justify-center ">
                <div
                  style={{ ...styles.btn, backgroundColor: "#367ec2" }}
                  className="text-center w-2/3"
                  onClick={() => {
                    updatePayment();
                  }}
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
