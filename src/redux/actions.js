import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addFood = createAction('shops/add', ({ name, price, src }) => ({
  payload: {
    id: nanoid(),
    name,
    price,
    src,
    counter: 1,
  },
}));

const orders = createAction(
  'shops/orders',
  ({ items, total, name, tel, email, address }) => ({
    payload: {
      id: nanoid(),
      cart: items,
      totalPrice: total,
      contact: { name, tel, email, address },
    },
  })
);

const deleteFood = createAction('shops/delete');
const clearCart = createAction('shops/clear');
const increment = createAction('shops/increment');
const decrement = createAction('shops/decrement');
const show = createAction('shops/show');

export { addFood, deleteFood, increment, decrement, orders, clearCart, show };
