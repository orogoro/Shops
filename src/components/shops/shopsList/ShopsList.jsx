import { ShopsItem } from '..';

import styles from './ShopsList.module.scss';

function ShopsList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Shops :</h2>
      <ul className={styles.list}>
        <ShopsItem link={'McDonny'} name={'Mc Donny'} />
        <ShopsItem link={'/Donny'} name={'Donny'} />
      </ul>
    </div>
  );
}

export default ShopsList;
