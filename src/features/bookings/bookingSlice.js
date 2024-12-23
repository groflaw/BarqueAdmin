import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  boattypes: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    getalltypes: (state, action) => {
      state.boattypes = action.payload;
    },
  },
});

export const { getalltypes } = bookingSlice.actions;
export default bookingSlice.reducer;
