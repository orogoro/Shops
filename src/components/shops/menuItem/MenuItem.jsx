import food from '../../../image/balanced-diet.png';

import styles from './MenuItem.module.scss';

function MenuItem({ name }) {
  return (
    <li className={styles.container}>
      <img className={styles.img} src={food} alt="food" />
      <p className={styles.name}>{name}</p>
      <button className={styles.button} type="button">
        Add to Cart
      </button>
    </li>
  );
}

export default MenuItem;
