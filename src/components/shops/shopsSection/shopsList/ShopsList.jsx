import ShopsItem from './shopsItem/ShopsItem';

import styles from './ShopsList.module.scss';

function ShopsList({ menu }) {
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
