import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
  name: "Admin",
  initialState: {
    isAdminLoggedIn: false,
    data: {},
    userList: [],
    productList: [],
  },

  reducers: {
    signInAdmin: (state, action) => {
      state.isAdminLoggedIn = true;
      state.data = action.payload;
    },

    signOutAdmin: (state, action) => {
      state.isAdminLoggedIn = false;
      state.data = {};
    },

    getUserList: (state, action) => {
      state.userList = action.payload;
    },
    getProductList: (state, action) => {
      state.productList = action.payload;
    },

    addProduct: (state, action) => {
      state.productList = [...state.productList, action.payload];
    },

    deleteProduct: (state, action) => {
      const itemIndex = state.productList.findIndex(
        (item) => item.slug === action.payload.slug
      );
      const item = state.productList[itemIndex];
      const tempList = state.productList.filter((e) => e.slug !== item.slug);

      state.productList = tempList;
    },

    updateProduct: (state, action) => {
      const itemIndex = state.productList.findIndex(
        (item) => item.slug === action.payload.slug
      );

      state.productList[itemIndex] = action.payload;
    },

    deleteUser: (state, action) => {
      const itemIndex = state.userList.findIndex(
        (item) => item._id === action.payload._id
      );
      const item = state.userList[itemIndex];
      const tempList = state.userList.filter((e) => e._id !== item._id);

      state.userList = tempList;
    },
  },
});

export const {
  signInAdmin,
  signOutAdmin,
  getUserList,
  getProductList,
  addProduct,
  deleteProduct,
  updateProduct,
  deleteUser,
} = AdminSlice.actions;
export default AdminSlice.reducer;
