import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

import * as action from '../../../redux/actions';

import styles from './MenuItem.module.scss';

function MenuItem({ name, price, src }) {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(action.addFood({ name, price, src }));
    Notiflix.Notify.success('Added to cart');
  };

  return (
    <li className={styles.container}>
      <img className={styles.img} src={src} alt="food" />
      <p className={styles.name}>{name}</p>
      <p className={styles.name}>Price : {price}$ </p>

      <button className={styles.button} type="button" onClick={handleSubmit}>
        Add to Cart
      </button>
    </li>
  );
}

export default MenuItem;

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
