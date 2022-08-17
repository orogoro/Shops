import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';

import { ShoppingCartForm, ShoppingCartList } from '..';
import { getCartsItems } from 'redux/selectors';
import * as action from 'redux/slice';

import cart from '../../../image/shopping-cart.png';

import styles from './ShoppingCartSection.module.scss';

function ShoppingCartSection() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(getCartsItems);

  const total = items
    .map(item => item.price * item.counter)
    .reduce((acc, item) => acc + item, 0);

  const handleSubmit = (name, tel, email, address, reset) => {
    setLoading(true);

    const newOrder = {
      id: nanoid(),
      cart: items,
      totalPrice: total,
      contact: { name, tel, email, address },
    };

    setTimeout(() => {
      dispatch(action.orders(newOrder));
      Notiflix.Report.success(
        'Success',
        'Thank you for your order, we will contact you shortly.',
        'Ok'
      );
      setLoading(false);
      reset();
      dispatch(action.clearCart([]));
    }, 500);
  };

  return (
    <div className={styles.container}>
      <ShoppingCartForm
        onSubmit={handleSubmit}
        total={total}
        loading={loading}
        items={items}
      />
      {items.length === 0 ? (
        <div className={styles.cart_container}>
          <img className={styles.cart} src={cart} alt="cart"></img>
          <Link className={styles.link} to="/Shops">
            Go to shops
          </Link>
        </div>
      ) : (
        <ShoppingCartList />
      )}
    </div>
  );
}

export default ShoppingCartSection;
