import { MenuItem } from '../..';

import food from '../../../../image/menu.png';

import styles from '../ShopsMenu.module.scss';

function ShopsMenu_McDonny() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <MenuItem name={'Big burger'} price={'12'} src={food} />
        <MenuItem name={'Mini burger'} price={'8'} src={food} />
        <MenuItem name={'Double burger'} price={'15'} src={food} />
        <MenuItem name={'Big Double burger'} price={'20'} src={food} />
      </ul>
    </div>
  );
}

export default ShopsMenu_McDonny;
