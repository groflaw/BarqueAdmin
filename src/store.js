import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import globalReducer from './features/global/globalSlice';
import basicReducer from './features/basic/basicSlice';

export const store = configureStore({
  reducer: {
    userState: userReducer,
    globalState : globalReducer,
    basicState : basicReducer
  },
});
