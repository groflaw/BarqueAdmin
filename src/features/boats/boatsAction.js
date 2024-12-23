import { Backend_API } from "../../utils/Constant";
import axios from "axios";
import { toast } from "react-toastify";
import { setCurboat } from "../global/globalSlice";
import { isValidNumber, isValidString } from "../../utils/Validate";

export const getAllboats = () => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/admin/boats/getAllboats`);
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the boats";
    return { errors };
  }
};

export const filterBoats = (filter) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/admin/boats/search/filter`,
      filter,
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
      // return { errors };
      toast.warning(response.data.error);
    }
  } catch (error) {
    errors.general = "There was an error fetching the boats";
    return { errors };
  }
};

export const getboatInfo = (id) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(`${Backend_API}/boats/getbasicInfo/${id}`);
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      return {};
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
    return { errors };
  }
};

export const getSimilar = (location, boatId) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.get(
      `${Backend_API}/boats/getSimilar/${location}/${boatId}`
    );
    if (response.data.flag == true) {
      return response.data.data;
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the boats";
    return { errors };
  }
};

export const submitBasic = (basicdata, boatId) => async (dispatch) => {
  let errors = {};
  try {
    const modelValidation = isValidString(basicdata.model);
    const descriptionValidation = isValidString(basicdata.description);
    const locationValidation = isValidString(basicdata.location1);
    const yearValidation = isValidNumber(basicdata.year);
    const sizeValidation = isValidNumber(basicdata.size);
    const boattypeValidation = isValidNumber(basicdata.boattype);
    const boatbrandValidation = isValidNumber(basicdata.boatbrand);
    const enginecountValidation = isValidNumber(basicdata.enginecount);
    const bathroomcountValidation = isValidNumber(basicdata.bathroomcount);
    const powerValidation = isValidNumber(basicdata.power);
    const capacityValidation = isValidNumber(basicdata.capacity);
    const cabinscountValidation = isValidNumber(basicdata.cabinscount);

    if (!modelValidation.valid) {
      errors.model = "Model " + modelValidation.message;
    }
    if (!descriptionValidation.valid) {
      errors.description = "Description " + descriptionValidation.message;
    }
    if (!locationValidation.valid) {
      errors.location1 = "Location " + locationValidation.message;
    }
    if (!yearValidation.valid) {
      errors.year = "Year " + yearValidation.message;
    }
    if (!sizeValidation.valid) {
      errors.size = "Size " + sizeValidation.message;
    }
    if (!boattypeValidation.valid) {
      errors.boattype = "Boat Type " + boattypeValidation.message;
    }
    if (!boatbrandValidation.valid) {
      errors.boatbrand = "Boat Brand " + boatbrandValidation.message;
    }
    if (!enginecountValidation.valid) {
      errors.enginecount = "Engine Count " + enginecountValidation.message;
    }
    if (!bathroomcountValidation.valid) {
      errors.bathroomcount =
        "Bathroom Count " + bathroomcountValidation.message;
    }
    if (!powerValidation.valid) {
      errors.powers = "Power " + powerValidation.message;
    }
    if (!capacityValidation.valid) {
      errors.capacity = "Capacity " + capacityValidation.message;
    }
    if (!cabinscountValidation.valid) {
      errors.cabinscount = cabinscountValidation.message;
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }
    let response = {};

    response = await axios.put(
      `${Backend_API}/boats/updateboat/${boatId}`,
      basicdata,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      toast.success("Update Boat Info Successfully");
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
    return { errors };
  }
};

export const addPlan = (id, plan) => async (dispatch) => {
  let errors = {};
  try {
    const priceValidation = isValidNumber(plan.price);
    const descriptionValidation = isValidString(plan.description);
    const captainValidation = isValidNumber(plan.captain);
    if (!priceValidation.valid) {
      errors.price = "Price" + priceValidation.message;
    }
    if (!descriptionValidation.valid) {
      errors.description = "Description" + descriptionValidation.message;
    }
    if (!captainValidation.valid) {
      errors.captain = "Captain" + captainValidation.message;
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }
    const response = await axios.post(
      `${Backend_API}/boats/addplan/${id}`,
      plan,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      toast.success("Update Boat Plans Successfully");
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

export const delPlan = (id, _id) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/boats/delplan/${id}`,
      { _id },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
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

export const submitLocation = (id, location) => async (dispatch) => {
  let errors = {};
  try {
    const boatnameValidation = isValidString(location.boatname);
    const locationtypeValidation = isValidNumber(location.locationtype);
    const marinanameValidation = isValidString(location.marinaname);
    const addressValidation = isValidString(location.address);
    if (!boatnameValidation.valid) {
      errors.boatname = "Name " + boatnameValidation.message;
    }
    if (!locationtypeValidation.valid) {
      errors.locationtype = "Location Type " + locationtypeValidation.message;
    }
    if (!marinanameValidation.valid) {
      errors.marinaname = "Marina" + marinanameValidation.message;
    }
    if (!addressValidation.valid) {
      errors.address = "Address " + addressValidation.message;
    }
    if (Object.keys(errors).length > 0) {
      return { errors };
    }
    const response = await axios.post(
      `${Backend_API}/boats/addLocation/${id}`,
      location,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      toast.success("Location update successfully");
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
    return { errors };
  }
};

export const uploadBoatImage = (id, data, type) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/boats/addboatImage/${id}/${type}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      toast.success("Image Update successfully");
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

export const uploadDocImage = (id, data, type) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/boats/adddocImage/${id}/${type}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      toast.success("Document Update Successfully");
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

export const submitCancellation = (id, cancellation) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/boats/addCancellation/${id}`,
      { cancellation },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      toast.success("Cancellation Update Successfully");
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
    return { errors };
  }
  return {};
};

export const submitAccessories = (id, accessories) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/boats/addAccessories/${id}`,
      { accessories },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      toast.success("Accessories update successfully");
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
    return { errors };
  }
};

export const submitAllowes = (id, allowes) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/boats/addAllowes/${id}`,
      { allowes },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      toast.success("Allow Updated Successfully");
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetching the data";
    return { errors };
  }
  return {};
};

export const setBoatStatus = (id, sort, result) => async (dispatch) => {
  let errors = {};
  try {
    const response = await axios.post(
      `${Backend_API}/admin/boats/setBoatStatus/${id}`,
      { sort, result },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.flag == true) {
      dispatch(setCurboat(response.data.data));
      toast.success("Operation Successfully");
    } else {
      errors[response.data.sort] = response.data.error;
      return { errors };
    }
  } catch (error) {
    errors.general = "There was an error fetchin the data";
    return { errors };
  }
};
