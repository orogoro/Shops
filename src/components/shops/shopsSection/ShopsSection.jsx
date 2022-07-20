import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ShopsList, Loader } from '..';
import styles from './ShopsSection.module.scss';

function ShopsSection() {
  return (
    <div className={styles.container}>
      <ShopsList />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default ShopsSection;
