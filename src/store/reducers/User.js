import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: {
    isLoggedIn: false,
    basket: [],
    totalCount: 0,
    user: {},
  },

  reducers: {
    addBasket: (state, action) => {
      const existBasketItemIndex = state.basket.findIndex(
        (item) => item.slug === action.payload.slug
      );
      const existBasketItem = state.basket[existBasketItemIndex];
      let tempBasket;

      if (existBasketItem) {
        const updateItem = {
          ...existBasketItem,
          quantity: existBasketItem.quantity + action.payload.quantity,
        };
        tempBasket = [...state.basket];
        tempBasket[existBasketItemIndex] = updateItem;
      } else {
        tempBasket = state.basket.concat(action.payload);
      }

      const changeTotalCount =
        state.totalCount + action.payload.price * action.payload.quantity;
      state.basket = tempBasket;
      state.totalCount = changeTotalCount;
    },

    removeBasket: (state, action) => {
      const existBasketItemIndex = state.basket.findIndex(
        (item) => item.slug === action.payload.slug
      );
      const existBasketItem = state.basket[existBasketItemIndex];

      let tempBasket;
      if (existBasketItem.quantity === 1) {
        tempBasket = state.basket.filter(
          (item) => item.slug !== action.payload.slug
        );
      } else {
        const updateItem = {
          ...existBasketItem,
          quantity: existBasketItem.quantity - action.payload.quantity,
        };

        tempBasket = [...state.basket];
        tempBasket[existBasketItemIndex] = updateItem;
      }

      const changeTotalCount =
        state.totalCount - action.payload.price * action.payload.quantity;

      state.basket = tempBasket;
      state.totalCount = changeTotalCount;
    },

    clearBasket: (state, action) => {
      state.basket = [];
      state.totalCount = 0;
    },

    signIn: (state, action) => {
      state.isLoggedIn = true;
      state.user = { ...action.payload };
    },

    signOut: (state, action) => {
      state.isLoggedIn = false;
      state.user = {};
    },

    createCard: (state, action) => {
      state.user.cards.push({ ...action.payload });
    },
  },
});

export const {
  addBasket,
  removeBasket,
  clearBasket,
  signIn,
  signOut,
  createCard,
} = UserSlice.actions;
export default UserSlice.reducer;
