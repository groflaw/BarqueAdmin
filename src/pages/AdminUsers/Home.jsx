import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { FormInput, Option } from "../../components";
import { setLoading } from "../../features/global/globalSlice";
import {
  AddAdmin,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
} from "../../features/user/userAction";

const Home = () => {
  const dispatch = useDispatch();

  const [roles, setRoles] = useState([
    { _id: 1, name: "FullAccess" },
    { _id: 2, name: "Manager" },
    { _id: 3, name: "Customer" },
  ]);
  const [admins, setAdmins] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "role") {
      setData((prevState) => ({
        ...prevState,
        [name]: Number(value),
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    let result = await dispatch(AddAdmin(data));
    if (result?.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    } else {
      setAdmins((prevAdmins) => [...prevAdmins, result]);
    }
  };

  const handleOption = (e) => {
    const { name, value, _id } = e.target;
    setAdmins((prevAdmins) =>
      prevAdmins.map((admin) =>
        admin._id === _id ? { ...admin, [name]: Number(value) } : admin
      )
    );
  };

  const handleEdit = (adminId, sort, value) => {
    setAdmins((prevAdmins) =>
      prevAdmins.map((admin) =>
        admin._id === adminId ? { ...admin, [sort]: value } : admin
      )
    );
  };

  const handleSave = async (data) => {
    let result = await dispatch(updateAdmin(data));
    if (result?.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    }
  };

  const handleDelete = async (adminId) => {
    let result = await dispatch(deleteAdmin(adminId));
    if (result?.errors) {
      for (let key in result.errors) {
        if (result.errors.hasOwnProperty(key)) {
          toast.error(`${result.errors[key]}`);
        }
      }
    } else {
      setAdmins((preadmins) =>
        preadmins.filter((itemId) => itemId._id !== adminId)
      );
    }
  };

  useEffect(() => {
    const fetchAdmins = async () => {
      await dispatch(setLoading(true));
      let result = await dispatch(getAllAdmins());
      setAdmins(result);
      await dispatch(setLoading(false));
    };
    fetchAdmins();
  }, []);

  return (
    <div className="w-full flex flex-col gap-3" style={styles.container}>
      <div style={styles.card} className="p-5 flex flex-col gap-2">
        <div className="p-5 flex flex-row gap-2">
          <div className="w-1/2 flex flex-col gap-2">
            <span style={styles.title} className="mt-5">
              Add New Admin
            </span>
            <div className="flex flex-col gap-1 w-1/2">
              <span style={styles.item}>User Name</span>
              <FormInput
                type="text"
                name="name"
                onChange={handleChange}
                value={data.name}
              />
            </div>
            <div className="flex flex-col gap-1 w-1/2">
              <span style={styles.item}>User Email</span>
              <FormInput
                type="text"
                name="email"
                onChange={handleChange}
                value={data.email}
              />
            </div>
            <div className="flex flex-col gap-1 w-1/2">
              <span style={styles.item}>New Password</span>
              <FormInput
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-1">
            <span style={styles.title} className="mt-5">
              Select Role
            </span>
            <span style={styles.item}>Permission Level</span>
            <div className="flex flex-row gap-2">
              <div className="flex flex-row gap-2 w-1/3 items-baseline">
                <input
                  type="radio"
                  name="role"
                  value="1"
                  checked={data.role === 1}
                  onChange={handleChange}
                />
                <span style={styles.item}>full</span>
              </div>
              <div className="flex flex-row gap-2 w-1/3 items-baseline">
                <input
                  type="radio"
                  name="role"
                  value="2"
                  checked={data.role === 2}
                  onChange={handleChange}
                />
                <span style={styles.item}>
                  Manager ( Approve payments, refunds, see messages, block and
                  unblock users, comfirm or decline bookings, approve or refuse
                  new boats)
                </span>
              </div>
              <div className="flex flex-row gap-2 w-1/3 items-baseline">
                <input
                  type="radio"
                  name="role"
                  value="3"
                  checked={data.role === 3}
                  onChange={handleChange}
                />
                <span style={styles.item}>
                  Customer Support (Only messages, create refund request and see
                  data)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center">
          <div
            style={{ ...styles.btn, backgroundColor: "#17233c", width: "10%" }}
            className="text-center"
            onClick={() => {
              handleSubmit();
            }}
          >
            Add Admin
          </div>
        </div>
      </div>

      <div style={styles.card} className="p-5 gap-2 flex flex-col">
        <span style={styles.title}>List of Admins</span>
        <table className="w-full table-auto text-center">
          <thead>
            <tr className=" text-white" style={{ backgroundColor: "#04004d" }}>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Password</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins?.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2">
                  <input
                    value={row.name}
                    onChange={(event) =>
                      handleEdit(row._id, "name", event.target.value)
                    }
                    type="text"
                    className="text-center p-0 m-0 border-none outline-none w-full"
                  />
                </td>
                <td className="px-4 py-2 cursor-pointer">
                  <input
                    value={row.email}
                    onChange={(event) =>
                      handleEdit(row._id, "email", event.target.value)
                    }
                    type="text"
                    className="text-center p-0 m-0 border-none outline-none w-full"
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    value={row.password}
                    onChange={(event) =>
                      handleEdit(row._id, "password", event.target.value)
                    }
                    type="text"
                    className="text-center p-0 m-0 border-none outline-none w-full"
                  />
                </td>
                <td className="px-4 py-2">
                  <Option
                    defaultValue={row.role}
                    width="w-full"
                    options={roles}
                    name="role"
                    onChange={handleOption}
                    _id={row._id}
                    placeholder="Select an option"
                  />
                </td>
                <td className="px-4 py-2">
                  <div className="flex flex-row gap-2 justify-center">
                    <div
                      style={{ ...styles.btn, backgroundColor: "#17233c" }}
                      onClick={() => {
                        handleSave(row);
                      }}
                    >
                      Save
                    </div>
                    <div
                      style={{ ...styles.btn, backgroundColor: "#d9534f" }}
                      onClick={() => {
                        handleDelete(row._id);
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
      </div>
    </div>
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
    lineHeight: "20px",
  },
};
export default Home;
