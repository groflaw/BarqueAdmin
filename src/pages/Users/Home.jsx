import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormInput, Loading } from "../../components";
import { toast } from "react-toastify";

import DatePicker from "../../components/Boats/DatePicker";

import { setBookStatus } from "../../features/bookings/bookingAction";
import { updateUserInfo, blockUser } from "../../features/user/userAction";
import { setLoading } from "../../features/global/globalSlice";
import { getAllUsers } from "../../features/user/userAction";
import profileImage from "../../assets/Profile/user.png";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.globalState.loading);
  const [users, setUsers] = useState([]);
  const [selectUser, setSelectUser] = useState({});
  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(setLoading(true));
      let result = await dispatch(getAllUsers());
      if (result?.errors) {
        for (let key in result.errors) {
          if (result.errors.hasOwnProperty(key)) {
            toast.error(`${result.errors[key]}`);
          }
        }
      } else {
        setUsers(result);
      }
      dispatch(setLoading(false));
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "name") {
      setSelectUser({
        ...selectUser,
        firstName: value.split(" ")[0] || "",
        lastName: value.split(" ")[1] || "",
      });
    } else {
      setSelectUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const handleUserSelect = (item) => {
    setSelectUser(item);
  };
  const handleSubmit = async (userId) => {
    let result = await dispatch(updateUserInfo(userId, selectUser));
    if (result?.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    } else {
      setUsers((prevuser) =>
        prevuser.map((p) =>
          p._id === selectUser._id ? { ...p, ...selectUser } : p
        )
      );
    }
  };
  const handleBlock = async (userId, value) => {
    setSelectUser({ ...selectUser, block: value });
    let result = await dispatch(blockUser(userId, value));
    if (result?.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    } else {
      setUsers((prevuser) =>
        prevuser.map((p) =>
          p._id === selectUser._id ? { ...p, ...result } : p
        )
      );
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full flex flex-col gap-3" style={styles.container}>
          <div className="w-full flex flex-row gap-4 justify-between items-center">
            <span style={styles.title}>Users Overview</span>
            <div className="flex flex-row items-center gap-4 w-1/3">
              <FormInput />
              <div
                style={{ ...styles.btn, backgroundColor: "#17233c" }}
                className="text-center"
              >
                Search
              </div>
            </div>
          </div>
          <div style={styles.card}>
            <table className="w-full table-auto text-center">
              <thead>
                <tr
                  className=" text-white"
                  style={{ backgroundColor: "#04004d" }}
                >
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Contact Number</th>
                  <th className="px-4 py-2">Address</th>
                  <th className="px-4 py-2">Birthday</th>
                  <th className="px-4 py-2">City</th>
                  <th className="px-4 py-2">Country</th>
                  <th className="px-4 py-2">Registration Date</th>
                  <th className="px-4 py-2">Host Status</th>
                  <th className="px-4 py-2">Boats Owned</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => handleUserSelect(item)}
                    className={` cursor-pointer ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } ${
                      selectUser?._id == item._id ? "bg-slate-400" : "bg-white"
                    } border-b`}
                  >
                    <td className="px-4 py-2">
                      {item.firstName + " " + item.lastName}
                    </td>
                    <td className="px-4 py-2 cursor-pointer">
                      <u>{item.email}</u>
                    </td>
                    <td className="px-4 py-2">{item.phoneNumber}</td>
                    <td className="px-4 py-2">
                      {item.address ? item.address : "-"}
                    </td>
                    <td className="px-4 py-2">
                      {`${new Date(item.birthDay).getUTCFullYear()}-${String(
                        new Date(item.birthDay).getUTCMonth() + 1
                      ).padStart(2, "0")}-${String(
                        new Date(item.birthDay).getUTCDate()
                      ).padStart(2, "0")}`}
                    </td>
                    <td className="px-4 py-2">{item.city ? item.city : "-"}</td>
                    <td className="px-4 py-2">
                      {item.country ? item.country : "-"}
                    </td>
                    <td className="px-4 py-2">{item.date ? item.date : "-"}</td>
                    <td className="px-4 py-2">
                      {item.boatCount == 0 ? "Guest" : "Boat Owner"}
                    </td>
                    <td className="px-4 py-2">
                      {item.boatCount != 0 ? item.boatCount : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <span style={styles.title} className="mt-5">
            User Details
          </span>
          <div style={styles.card} className="p-5">
            <img
              src={selectUser?.avatar ? selectUser.avatar : profileImage}
              alt=""
              className="m-auto"
              style={{ width: "91px", height: "85px" }}
            />
            <div className="w-full gap-2 flex flex-row items-center">
              <div className="w-1/3">
                <span style={styles.item}>Name</span>
                <FormInput
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={`${selectUser?.firstName || ""} ${
                    selectUser?.lastName || ""
                  }`.trim()}
                />
              </div>
              <div className="w-1/3">
                <span style={styles.item}>Email</span>
                <FormInput
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={selectUser.email}
                />
              </div>
              <div className="w-1/3">
                <span style={styles.item}>Contact Number</span>
                <FormInput
                  type="text"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={selectUser.phoneNumber}
                />
              </div>
            </div>
            <div className="w-full gap-2 flex flex-row mt-5 items-center">
              <div className="w-1/3">
                <span style={styles.item}>Address</span>
                <FormInput
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={selectUser?.address || ""}
                />
              </div>
              <div className="w-1/3">
                <span style={styles.item}>BirthDay</span>
                <DatePicker
                  date={selectUser?.birthDay ? selectUser.birthDay : new Date()}
                  onChange={handleChange}
                  name="birthDay"
                />
              </div>
              <div className="w-1/3">
                <span style={styles.item}>City</span>
                <FormInput
                  type="text"
                  name="city"
                  onChange={handleChange}
                  value={selectUser?.city || ""}
                />
              </div>
            </div>
            <div className="w-full flex gap-2 flex-row mt-5 items-center">
              <div className="w-1/3">
                <span style={styles.item}>Country</span>
                <FormInput
                  type="text"
                  name="country"
                  onChange={handleChange}
                  value={selectUser?.country || ""}
                />
              </div>
              <div className="w-1/3">
                <span style={styles.item}>ID Number</span>
                <FormInput
                  type="text"
                  name="idNumber"
                  onChange={handleChange}
                  value={selectUser?.idNumber || ""}
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col  gap-3">
              <span style={styles.title}>Boats Owned</span>
              <div className="flex flex-row gap-2">
                {selectUser?.boats?.map((item, index) => {
                  return (
                    <span
                      className="border border-black p-2 rounded-2xl cursor-pointer hover:bg-slate-200"
                      style={styles.boatname}
                    >
                      {item.model}
                    </span>
                  );
                })}
              </div>
              <div className="flex flex-row justify-start items-center gap-3 text-center">
                <div
                  style={{
                    ...styles.btn,
                    backgroundColor: selectUser.block ? "#2a8500" : "#ff3b30",
                  }}
                  onClick={() => {
                    handleBlock(selectUser._id, !selectUser.block);
                  }}
                >
                  {selectUser.block ? "Unblock User" : "Block User"}
                </div>
                <div
                  style={{ ...styles.btn, backgroundColor: "#072d4c" }}
                  onClick={() => {
                    handleSubmit(selectUser._id);
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
    color: "#17233c",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "28px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
  },
  item: {
    color: "#17233c",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
  },
  boatname: {
    color: "#357ec2",
    fontSize: "14px",
    lineHeight: "20px",
  },
};
export default Home;
