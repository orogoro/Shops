import PropTypes from 'prop-types';

import { HistoryItem } from '..';

import styles from './HistoryList.module.scss';

function HistoryList({ orders }) {
  return (
    <div className={styles.container}>
      <ul>
        {orders.map(({ id, cart, totalPrice }) => (
          <li className={styles.li} key={id}>
            <HistoryItem cart={cart} totalPrice={totalPrice} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryList;

HistoryList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cart: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          src: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.string.isRequired,
          counter: PropTypes.number.isRequired,
        })
      ),
      contact: PropTypes.shape({
        tel: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
      }),
      totalPrice: PropTypes.number.isRequired,
    })
  ),
};
