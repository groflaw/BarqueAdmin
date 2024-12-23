import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NumberInput from "../basic/Number";
import Option from "../basic/Option";
import Slider from "../basic/Slider";
import Checkbox from "../basic/Checkbox";

import { getAllBoatTypes } from "../../features/basic/basicAction";
import { filterBoats } from "../../features/boats/boatsAction";

const Filter = ({ isOpen, onClose,setBoats }) => {
  const dispatch = useDispatch();
  if (!isOpen) return null;
  const [selectedOption, setSelectedOption] = useState(null);
  const [price, setPrice] = useState(500); // Default price
  const boatTypes = useSelector((state) => state.basicState.boattypes);

  useEffect(() => {
    const fectboattypes = async () => {
      await dispatch(getAllBoatTypes());
    };
    fectboattypes();
  }, []);

  const [filter, setFilter] = useState({
    size: 0,
    boattype: 0,
    capacity: 0,
    price: 10,
    any: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const toggleAnyCheckbox = (newValue) => {
    setFilter((prevData) => ({
      ...prevData,
      any: newValue,
    }));
  };
  const search = async () => {
    let result = await dispatch(filterBoats(filter));
    
    setBoats(result);
    onClose();
    setFilter({
      size: 0,
      boattype: 0,
      capacity: 0,
      price: 100,
      any : true
    });
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-1/5 p-6">
        <div style={styles.headbox}>
          <span style={styles.headbox.title}>Filter Search</span>
        </div>

        <div className="mt-2 gap-2 flex flex-col">
          <span style={styles.item}>Size(ft)</span>
          <NumberInput
            value={filter.size}
            onChange={handleChange}
            name="size"
          />
        </div>
        <div className="mt-2 gap-2 flex flex-col">
          <span style={styles.item}>Size(ft)</span>
          <Option
            defaultValue={filter.boattype}
            width="w-full"
            options={boatTypes}
            name="boattype"
            onChange={handleChange}
            placeholder="Select an option"
          />
        </div>
        <div className="mt-2 gap-2 flex flex-col">
          <span style={styles.item}>Capacity (Number of people)</span>
          <NumberInput
            value={filter.capacity}
            onChange={handleChange}
            name="capacity"
          />
        </div>
        <div className="mt-2 gap-2 flex flex-col">
          <Slider price={filter.price} onChange={handleChange} name="price" />
        </div>
        <div className="mt-2 gap-2 flex flex-row">
          <Checkbox value={filter.any} onValueChange={toggleAnyCheckbox} />
          <span style={styles.item}>Any</span>
        </div>
        <div className="flex flex-row justify-center">
          <div
            className="bg-blue-950 hover:bg-blue-900 text-center active:bg-gray-600 mt-4"
            style={{ ...styles.btn, width: "45%" }}
            onClick={() => {
              search();
            }}
          >
            Apply Filters
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  headbox: {
    backgroundColor: "#ffffff",
    boxShadow: "2px -2px 10px rgba(3,3,3,0.1)",
    padding: "15px",
    title: {
      color: "#030303",
      fontSize: "20px",
      fontFamily: "Lexend Deca",
      fontWeight: 700,
      lineHeight: "28px",
    },
  },
  item: {
    color: "#17233c",
    fontSize: "14px",
    fontFamily: "Lexend Deca",
    lineHeight: "20px",
  },
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
  },
};
export default Filter;
