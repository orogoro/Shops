import { ShoppingCartForm, ShoppingCartList } from '..';

import styles from './ShoppingCartSection.module.scss';

function ShoppingCartSection() {
  return (
    <div className={styles.container}>
      <ShoppingCartForm />
      <ShoppingCartList />
    </div>
  );
}

export default ShoppingCartSection;
