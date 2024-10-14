// store.js
import { configureStore } from "@reduxjs/toolkit";
import registerkReducer from "../reducer/registerReducer.jsx";
import loginReducer from "../reducer/loginReducer.jsx";
import forgetPasswordReducer from "../reducer/forgotPasswordReducer.jsx";
import resetPasswordReducer from "../reducer/resetPasswordReducer.jsx";
import getDataUserReducer from "../reducer/getDataUserReducer.jsx";
import changePasswordReducer from "../reducer/changePasswordReducer.jsx";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerkReducer,
    forgotPassword: forgetPasswordReducer,
    resetPassword: resetPasswordReducer,
    dataUser: getDataUserReducer,
    changePassword: changePasswordReducer,
  },
});
