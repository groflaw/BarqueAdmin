import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  curboat : {},
  curhost : {}
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurboat : (state, action) =>{
      state.curboat = action.payload
    },
    setCurhost : (state, action) =>{
      state.curhost = action.payload
    }
  },
});

export const { setLoading, setCurboat, setCurhost } = globalSlice.actions;
export default globalSlice.reducer;
