import styles from './HistoryItem.module.scss';

function HistoryItem({ cart, totalPrice }) {
  return (
    <>
      <ul className={styles.container}>
        {cart.map(({ id, src, name, price, counter }) => (
          <li className={styles.li} key={id}>
            <img className={styles.img} src={src} alt="food" />
            <div className={styles.text_container}>
              <p className={styles.name}>{name}</p>
              <p>Price: {price}$</p>
              <p>Amount: {counter}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.total}>Total price: {totalPrice} $</p>
    </>
  );
}

export default HistoryItem;
