import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as action from 'redux/slice';
import cross from '../../../image/cross.png';

import styles from './ShoppingCartItem.module.scss';

function ShoppingCartItem({ name, price, id, counter, src }) {
  const [totalPrice, setTotalPrice] = useState(price);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalPrice(price * counter);
  }, [counter, price]);

  return (
    <>
      <img className={styles.img} src={src} alt="food" />
      <div className={styles.container}>
        <p className={styles.name}>{name}</p>
        <p>
          Price: <span className={styles.span}>{totalPrice}</span> $
        </p>
        <div className={styles.btn_container}>
          <button
            className={styles.btn}
            type="button"
            onClick={() =>
              counter > 1 && dispatch(action.setCount({ id, step: -1 }))
            }
          >
            -
          </button>
          <p className={styles.p}>{counter}</p>
          <button
            className={styles.btn}
            type="button"
            onClick={() => dispatch(action.setCount({ id, step: 1 }))}
          >
            +
          </button>
        </div>
      </div>
      <button className={styles.button} type="bytton">
        <img
          className={styles.cross}
          src={cross}
          alt="cross"
          onClick={() => {
            dispatch(action.deleteFood(id));
            toast.success('Successfully removed', {
              theme: 'colored',
            });
          }}
        />
      </button>
    </>
  );
}

export default ShoppingCartItem;

ShoppingCartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};
