import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  servicefee: 10,
  payment : {},
  boattypes: [],
  boatbrands: [],
  enginecount: [],
  powers: [],
  bathroomcount: [],
  capacity: [],
  cabinscount: [],
  locationtype: [],
  accessories: [],
  allowes: [],
};

const basicSlice = createSlice({
  name: "basic",
  initialState,
  reducers: {
    getpayment : (state, action) =>{
      state.payment = action.payload
    },
    getservicefee: (state, action) => {
      state.servicefee = action.payload;
    },
    getalltypes: (state, action) => {
      state.boattypes = action.payload;
    },
    getallbrands: (state, action) => {
      state.boatbrands = action.payload;
    },
    getenginecount: (state, action) => {
      state.enginecount = action.payload;
    },
    getpowers: (state, action) => {
      state.powers = action.payload;
    },
    getbathroomcount: (state, action) => {
      state.bathroomcount = action.payload;
    },
    getcapacity: (state, action) => {
      state.capacity = action.payload;
    },
    getcabinscount: (state, action) => {
      state.cabinscount = action.payload;
    },
    getlocationtype: (state, action) => {
      state.locationtype = action.payload;
    },
    getaccessories: (state, action) => {
      state.accessories = action.payload;
    },
    getallowes: (state, action) => {
      state.allowes = action.payload;
    },
  },
});

export const {
  getpayment,
  getservicefee,
  getalltypes,
  getallbrands,
  getenginecount,
  getpowers,
  getbathroomcount,
  getcapacity,
  getcabinscount,
  getlocationtype,
  getaccessories,
  getallowes,
} = basicSlice.actions;
export default basicSlice.reducer;
