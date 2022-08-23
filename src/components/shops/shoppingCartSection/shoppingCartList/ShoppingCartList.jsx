import { useSelector } from 'react-redux';

import ShoppingCartItem from './shoppingCartItem/ShoppingCartItem';
import { getCartsItems } from 'redux/selectors';

import styles from './ShoppingCartList.module.scss';

function ShoppingCartList() {
  const items = useSelector(getCartsItems);

  return (
    items.length > 0 && (
      <div className={styles.container}>
        <ul>
          {items.map(({ id, name, price, counter, src }) => (
            <li className={styles.item} key={id}>
              <ShoppingCartItem
                name={name}
                price={price}
                id={id}
                counter={counter}
                src={src}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

export default ShoppingCartList;
