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
