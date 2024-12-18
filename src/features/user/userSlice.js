import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  user: {}
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      toast.success("Logged in succesfully");
    },
    logoutUser: (state) => {
      state.user = null;
      toast.success("Logged out succesfully");
    }
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
