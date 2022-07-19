import { ShopsList } from '..';
import styles from './ShopsSection.module.scss';

function ShopsSection() {
  return (
    <div className={styles.container}>
      <ShopsList />
    </div>
  );
}

export default ShopsSection;
