import { MenuItem } from '../..';

import dobleBurger from '../../../../image/McDonny/burger.png';
import frenchFries from '../../../../image/McDonny/free.png';
import combo from '../../../../image/McDonny/combo.png';
import hamburger from '../../../../image/McDonny/hamburger.png';

import styles from '../ShopsMenu.module.scss';

function ShopsMenu_McDonny() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <MenuItem name={'Combo menu'} price={'24'} src={combo} />
        <MenuItem name={'French fries'} price={'8'} src={frenchFries} />
        <MenuItem name={'Double burger'} price={'14'} src={dobleBurger} />
        <MenuItem name={'Cheeseburger'} price={'12'} src={hamburger} />
      </ul>
    </div>
  );
}

export default ShopsMenu_McDonny;
