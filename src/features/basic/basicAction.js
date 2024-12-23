import { Backend_API } from "../../utils/Constant";
import axios from "axios";

import {
  getalltypes,
  getaccessories,
  getallbrands,
  getallowes,
  getenginecount,
  getbathroomcount,
  getcabinscount,
  getcapacity,
  getpowers,
  getlocationtype,
} from "./basicSlice";

export const getAllBoatTypes = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getallboattype`);
    if (response.data.flag == true) {
      dispatch(getalltypes(response.data.data));
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

export const getAccessories = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getAccessories`);
    if (response.data.flag == true) {
      dispatch(getaccessories(response.data.data));
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

export const getAllBoatBrands = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getallboatbrand`);
    if (response.data.flag == true) {
      dispatch(getallbrands(response.data.data));
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
export const updateBrand =
  ({ id, name }) =>
  async (dispatch) => {
    let errors = {};
    try {
      const response = await axios.post(
        `${Backend_API}/boats/addboatbrand`,
        { id, name },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.flag == true) {
        dispatch(getallbrands(response.data.data));
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

export const getAllowes = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getAllowes`);
    if (response.data.flag == true) {
      dispatch(getallowes(response.data.data));
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

export const getEnginesCount = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getEnginesCount`);
    if (response.data.flag == true) {
      dispatch(getenginecount(response.data.data));
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

export const getBathroomCount = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getBathroomCount`);
    if (response.data.flag == true) {
      dispatch(getbathroomcount(response.data.data));
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

export const getCabinscount = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getCabinscount`);
    if (response.data.flag == true) {
      dispatch(getcabinscount(response.data.data));
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

export const getCapacity = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getCapacity`);
    if (response.data.flag == true) {
      dispatch(getcapacity(response.data.data));
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

export const getPowers = () => async (dispatch) => {
  let errors = {};

  try {
    const response = await axios.get(`${Backend_API}/boats/getallboatpower`);
    if (response.data.flag == true) {
      dispatch(getpowers(response.data.data));
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

export const getLocationType = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getLocationType`);
    if (response.data.flag == true) {
      dispatch(getlocationtype(response.data.data));
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
