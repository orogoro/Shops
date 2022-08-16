import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as action from '../../../redux/actions';

import styles from './MenuItem.module.scss';
import { useState } from 'react';

function MenuItem({ name, price, src }) {
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setDisable(true);

    setTimeout(() => {
      dispatch(action.addFood({ name, price, src }));
      toast.success('Added to cart', {
        theme: 'colored',
      });
      setDisable(false);
    }, 500);
  };

  return (
    <>
      <img className={styles.img} src={src} alt={name} />
      <p className={styles.name}>
        <span className={styles.span}>{name}</span>
      </p>
      <p className={styles.name}>Price: {price}$ </p>

      <button
        className={styles.button}
        type="button"
        onClick={handleSubmit}
        disabled={disable}
      >
        Add to Cart
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
