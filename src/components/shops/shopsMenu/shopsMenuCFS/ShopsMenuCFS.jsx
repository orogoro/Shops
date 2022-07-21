import { MenuItem } from '../..';
import food from '../../../../image/balanced-diet.png';

import styles from '../ShopsMenu.module.scss';

function ShopsMenuCFS() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <MenuItem name={'Cheeseburger'} price={'10'} src={food} />
        <MenuItem name={'Mini Cheeseburger'} price={'6'} src={food} />
        <MenuItem name={'Double Cheeseburger'} price={'15'} src={food} />
        <MenuItem name={'Big roll'} price={'20'} src={food} />
      </ul>
    </div>
  );
}

export default ShopsMenuCFS;
