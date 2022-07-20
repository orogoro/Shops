import { MenuItem } from '../..';
import styles from '../ShopsMenu.module.scss';

function ShopsMenu_McDonny() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <MenuItem name={'Big burger'} />
        <MenuItem name={'Mini burger'} />
        <MenuItem name={'Double burger'} />
        <MenuItem name={'Big Double burger'} />
      </ul>
    </div>
  );
}

export default ShopsMenu_McDonny;
