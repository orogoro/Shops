import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpinerBtn } from '..';

import * as action from '../../../redux/slice';

import styles from './MenuItem.module.scss';

function MenuItem({ name, price, src }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setLoading(true);

    const newFood = {
      id: nanoid(),
      name,
      price,
      src,
      counter: 1,
    };

    setTimeout(() => {
      dispatch(action.addFood(newFood));
      toast.success('Added to cart', {
        theme: 'colored',
      });
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <img className={styles.img} src={src} alt={name} />
      <p className={styles.name}>
        <span className={styles.span}>{name}</span>
      </p>
      <p className={styles.name}>Price: {price}$ </p>

      <button className={styles.button} type="button" onClick={handleSubmit}>
        {loading ? <SpinerBtn color={'white'} size={10} /> : 'Add to Cart'}
      </button>
    </>
  );
}

export default MenuItem;

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
