import { configureStore } from "@reduxjs/toolkit";
import User from "./reducers/User";
import Admin from "./reducers/Admin";

const store = configureStore({
  reducer: {
    User,
    Admin,
  },
});

export default store;
