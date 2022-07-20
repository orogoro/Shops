import { MenuItem } from '../..';

import styles from '../ShopsMenu.module.scss';

function ShopsMenuCFS() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <MenuItem name={'Cheeseburger'} />
        <MenuItem name={'Mini Cheeseburger'} />
        <MenuItem name={'Double Cheeseburger'} />
        <MenuItem name={'Big roll'} />
      </ul>
    </div>
  );
}

export default ShopsMenuCFS;
