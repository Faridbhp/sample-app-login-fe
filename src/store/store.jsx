// store.js
import { configureStore } from '@reduxjs/toolkit';
import registerkReducer from '../reducer/registerReducer.jsx';
import loginReducer from '../reducer/loginReducer.jsx';
import forgetPasswordReducer from '../reducer/forgotPasswordReducer.jsx';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerkReducer,
    forgotPassword: forgetPasswordReducer,
  },
});
