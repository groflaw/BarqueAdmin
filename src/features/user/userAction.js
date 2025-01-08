import {
  isValidEmail,
  isValidPassword,
  isValidString,
  isValidNumber,
} from "../../utils/Validate";
import { Backend_API } from "../../utils/Constant";
import axios from "axios";
import { toast } from "react-toastify";
import { loginUser, logoutUser, setAllUsers } from "./userSlice";

export const Signin = (personInfo) => async (dispatch) => {
  let errors = {};
  try {
    const emailValidation = isValidEmail(personInfo.email);
    const passwordValidation = isValidPassword(personInfo.password);
    if (!emailValidation.valid) {
      errors.email = emailValidation.message;
    }
    if (!passwordValidation.valid) {
      errors.password = passwordValidation.message;
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }
    const response = await axios.get(
      `${Backend_API}/admin/users/${personInfo.email}/${personInfo.password}`
    );
    if (response.data.flag == true) {
      dispatch(loginUser(response.data.existingUser));
      localStorage.setItem("token", response.data.token);
      return response.data.existingUser;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
};

export const checkToken = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (token == undefined) return false;
    const response = await axios.get(`${Backend_API}/admin/users/protected`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.flag == true) {
    
      return true;
    }
  } catch (error) {
    dispatch(loginUser({}));
    localStorage.removeItem("token");
    return false;
  }
};

export const SignOut = () => async (dispatch) => {
  await localStorage.removeItem("token");
  await dispatch(logoutUser());
};

export const getUser = (id) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/users/${id}`);
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
  }
};

export const getAllUsers = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/admin/users/getAllusers`);
    if (response.data.flag == true) {
      dispatch(setAllUsers(response.data.data));
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
};

export const updateUserInfo = (userId, data) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/admin/users/updateInfo/${userId}`,
      { data },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      toast.success("Operation Successfully");
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
};

export const blockUser = (userId, value) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/admin/users/blockUser/${userId}`,
      { value },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      toast.success("Operation Successfully");
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
};

export const AddAdmin = (data) => async (dispatch) => {
  let errors = {};
  try {
    const nameValidation = isValidString(data.firstName);
    const emailValidation = isValidEmail(data.email);
    const passwordValidation = isValidPassword(data.password);
    const roleValidation = isValidNumber(data.role);

    if (!nameValidation.valid) {
      errors.boattype = "Admin Name" + nameValidation.message;
    }
    if (!emailValidation.valid) {
      errors.email = emailValidation.message;
    }
    if (!passwordValidation.valid) {
      errors.password = passwordValidation.message;
    }
    if (!roleValidation.valid) {
      errors.role = "Role " + roleValidation.message;
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }
    const response = await axios.post(
      `${Backend_API}/admin/users`,
      { data },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      toast.success("Add new Admin Successfully");
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
};

export const getAllAdmins = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/admin/users`);
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
};

export const updateAdmin = (data) => async (dispatch) => {
  let errors = {};
  try {
    const nameValidation = isValidString(data.firstName);
    const emailValidation = isValidEmail(data.email);
    const passwordValidation = isValidPassword(data.password);
    const roleValidation = isValidNumber(data.role);
    if (!nameValidation.valid) {
      errors.boattype = "Admin Name" + nameValidation.message;
    }
    if (!emailValidation.valid) {
      errors.email = emailValidation.message;
    }
    if (!passwordValidation.valid) {
      errors.password = passwordValidation.message;
    }
    if (!roleValidation.valid) {
      errors.role = "Role " + roleValidation.message;
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }
    const response = await axios.put(
      `${Backend_API}/admin/users/${data._id}`,
      { data },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      toast.success("Update Admin Successfully");
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
};

export const deleteAdmin = (adminId) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.delete(
      `${Backend_API}/admin/users/${adminId}`
    );
    if (response.data.flag == true) {
      toast.success("Delete Admin Successfully");
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
};
