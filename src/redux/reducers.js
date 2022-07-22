import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addFood,
  deleteFood,
  increment,
  decrement,
  orders,
  clearCart,
  show,
} from './actions';

const cartReducer = createReducer([], {
  [addFood]: (state, { payload }) => {
    return [payload, ...state];
  },
  [deleteFood]: (state, { payload }) => {
    const stateFilter = state.filter(({ id }) => id !== payload);
    return stateFilter;
  },
  [increment]: (state, { payload }) => {
    return state.map(item => {
      if (item.id === payload) {
        return {
          ...item,
          counter: item.counter + 1,
        };
      }
      return item;
    });
  },
  [decrement]: (state, { payload }) => {
    return state.map(item => {
      if (item.counter > 1 && item.id === payload) {
        return { ...item, counter: item.counter - 1 };
      }
      return item;
    });
  },
  [clearCart]: (_, { payload }) => payload,
});

const ordersReducer = createReducer([], {
  [orders]: (state, { payload }) => [payload, ...state],
});

const showReducer = createReducer(false, {
  [show]: (_, { payload }) => payload,
});

const ShoppingCartReducer = combineReducers({
  cart: cartReducer,
  orders: ordersReducer,
  show: showReducer,
});

export { ShoppingCartReducer };
