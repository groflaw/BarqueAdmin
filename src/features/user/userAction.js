import { isValidEmail, isValidPassword } from "../../utils/Validate";
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
      `${Backend_API}/users/${personInfo.email}/${personInfo.password}`
    );
    if (response.data.flag == true) {
      dispatch(loginUser(response.data.existingUser));
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data.";
    return { errors };
  }
  return {};
};

export const SignOut = () => async (dispatch) => {
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
