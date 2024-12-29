import { Backend_API } from "../../utils/Constant";
import axios from "axios";

import { isValidString } from "../../utils/Validate";
import {
  getpayment,
  getservicefee,
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
import { toast } from "react-toastify";

export const getServiceFee = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getfee`);
    if (response.data.flag == true) {
      dispatch(getservicefee(response.data.data));
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
    return { errors };
  }
};
export const setServiceFee = (fee) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/boats/setfee`,
      { fee },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(getservicefee(response.data.data));
      toast.success("Set Servicefee Successfully");
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
    return { errors };
  }
};

export const getPayment = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getPayment`);
    if (response.data.flag == true) {
      dispatch(getpayment(response.data.data));
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
    return { errors };
  }
};
export const setPayment = (payment) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/boats/setPayment`,
      { payment },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(getpayment(response.data.data));
      toast.success("Set Payment Successfully");
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
    return { errors };
  }
};

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
export const updateType = (id, name) => async (dispatch) => {
  let errors = {};
  try {
    const boattypeValidation = isValidString(name);
    if (!boattypeValidation.valid) {
      errors.boattype = "Type Name" + boattypeValidation.message;
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }
    const response = await axios.post(
      `${Backend_API}/boats/addboattype`,
      { id, name },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(getalltypes(response.data.data));
      toast.success("Add Type Successfully");
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
    return { errors };
  }
};
export const deleteType = (id) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/deletetype/${id}`);
    if (response.data.flag == true) {
      dispatch(getalltypes(response.data.data));
      toast.success("Delete Type Successfully");
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
export const updateBrand = (id, name) => async (dispatch) => {
  let errors = {};
  try {
    const boatBrandValidation = isValidString(name);
    if (!boatBrandValidation.valid) {
      errors.boatbrand = "Brand Name" + boatBrandValidation.message;
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }
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
      toast.success("Add Brand Successfully");
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
export const deleteBrand = (id) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/deletebrand/${id}`);
    if (response.data.flag == true) {
      dispatch(getallbrands(response.data.data));
      toast.success("Delete Brand Successfully");
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
export const updateAccessories = (data, title) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/boats/setAccessories/${title}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(getAccessories(response.data.data));
      toast.success("Add Allowes Successfully");
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
    return { errors };
  }
};
export const deleteAccessories = (id) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(
      `${Backend_API}/boats/deleteAccessories/${id}`
    );
    if (response.data.flag == true) {
      dispatch(getAccessories(response.data.data));
      toast.success("Delete Accessory Successfully");
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
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
export const updateAllow = (data, title) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/boats/setAllowes/${title}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(getallowes(response.data.data));
      toast.success("Add Allowes Successfully");
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
export const deleteAllow = (id) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/deleteallow/${id}`);
    if (response.data.flag == true) {
      dispatch(getallowes(response.data.data));
      toast.success("Delete Allow Successfully");
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
    return { errors };
  }
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
