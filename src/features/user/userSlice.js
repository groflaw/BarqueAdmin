import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  curuser: {},
  allusers: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.curuser = action.payload;
    },
    logoutUser: (state) => {
      state.curuser = null;
    },
    setAllUsers: (state, action) => {
      state.allusers = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setAllUsers } = userSlice.actions;
export default userSlice.reducer;
