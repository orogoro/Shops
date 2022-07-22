import { ShopsItem } from '..';

import styles from './ShopsList.module.scss';

function ShopsList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Shops :</h2>
      <ul className={styles.list}>
        <ShopsItem link={'McDonny'} name={'Mc Donny'} />
        <ShopsItem link={'CFS'} name={'CFS'} />
        <ShopsItem link={'Dziodzi'} name={'Dziodzi'} />
      </ul>
    </div>
  );
}

export default ShopsList;
