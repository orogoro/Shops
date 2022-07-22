import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCartForm, ShoppingCartList } from '..';
import { getCartsItems } from 'redux/selectors';
import cart from '../../../image/shopping-cart.png';

import styles from './ShoppingCartSection.module.scss';

function ShoppingCartSection() {
  const items = useSelector(getCartsItems);
  return (
    <div className={styles.container}>
      <ShoppingCartForm />
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
