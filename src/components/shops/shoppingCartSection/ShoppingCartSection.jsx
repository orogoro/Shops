import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCartForm, ShoppingCartList } from '..';
import { getCartsItems } from 'redux/selectors';
import Notiflix from 'notiflix';

import cart from '../../../image/shopping-cart.png';
import * as action from '../../../redux/actions';

import styles from './ShoppingCartSection.module.scss';

function ShoppingCartSection() {
  const dispatch = useDispatch();
  const items = useSelector(getCartsItems);

  const total = items
    .map(item => item.price * item.counter)
    .reduce((acc, item) => acc + item, 0);

  const handleSubmit = (name, tel, email, address) => {
    console.log(name, tel, email, address);

    dispatch(action.orders({ items, total, name, tel, email, address }));
    Notiflix.Report.success(
      'Success',
      'Thank you for your order, we will contact you shortly.',
      'Ok'
    );

    dispatch(action.clearCart([]));
  };

  return (
    <div className={styles.container}>
      <ShoppingCartForm onSubmit={handleSubmit} total={total} />
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
