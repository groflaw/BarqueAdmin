import { Backend_API } from "../../utils/Constant";
import axios from "axios";
import { toast } from "react-toastify";

export const getAllBookings = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(
      `${Backend_API}/admin/booking/getAllBooking`
    );
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
  return {};
};

export const setBookStatus = (bookId, value) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/reservation/setBookStatus/${bookId}`,
      { value },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error tobeconfirm";
    return { errors };
  } 
};
