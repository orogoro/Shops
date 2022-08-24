import { Link } from 'react-router-dom';

import arrowDown from '../../../../image/arrowDown.png';
import buyNow from '../../../../image/buyNow.png';
import bag from '../../../../image/bag.png';
import shopping from '../../../../image/shopping.png';

import styles from './MakeOrder.module.scss';

function MakeOrder() {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.containerImg}>
          <img className={styles.imgTwe} src={bag} alt="bag" />
          <img className={styles.imgOne} src={buyNow} alt="buyNow" />
          <img className={styles.imgTwe} src={shopping} alt="shopping" />
        </div>
        <p className={styles.text}>Come in soon and order your favorite food</p>
        <img className={styles.img} src={arrowDown} alt="arrowDown" />
        <Link className={styles.button} to={'/Shops'}>
          Go to Shop
        </Link>
      </div>
    </div>
  );
}

export default MakeOrder;
