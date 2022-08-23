import { ShopsList, MenuList } from './';

import styles from './ShopsSection.module.scss';

function ShopsSection() {
  return (
    <div className={styles.container}>
      <ShopsList />
      <MenuList />
    </div>
  );
}

export default ShopsSection;
