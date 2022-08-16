import { ShopsItem } from '..';
import menu from '../../../helper/shops.json';

import styles from './ShopsList.module.scss';

function ShopsList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Shops :</h2>
      <ul className={styles.list}>
        {menu.map(({ id, name }) => (
          <li className={styles.item} key={id}>
            <ShopsItem link={id} name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopsList;
