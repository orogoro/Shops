import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  orders: [],
  show: false,
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addFood: (state, { payload }) => {
      state.cart = [payload, ...state.cart];
    },
    deleteFood: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload);
    },
    setCount: (state, { payload: { id, step } }) => {
      state.cart = state.cart.map(item => {
        return item.id === id
          ? {
              ...item,
              counter: item.counter + step,
            }
          : item;
      });
    },
    clearCart: (state, { payload }) => {
      state.cart = payload;
    },
    orders: (state, { payload }) => {
      state.orders = [payload, ...state.orders];
    },
    show: (state, { payload }) => {
      state.show = payload;
    },
  },
});

export const { addFood, deleteFood, setCount, orders, clearCart, show } =
  shopSlice.actions;

export default shopSlice.reducer;
