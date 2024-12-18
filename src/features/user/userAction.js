import {
  isValidEmail,
  isValidNumber,
  isValidPassword,
} from "../../utils/Validate";
import { Backend_API } from "../../utils/Constant";
import axios from "axios";
import { loginUser, logoutUser } from "./userSlice";

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

export const SignOut = ()=> async (dispatch)=>{
  await dispatch(logoutUser());
  
}
