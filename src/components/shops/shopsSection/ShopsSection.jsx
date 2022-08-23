// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

// import { Loader } from '..';
import { ShopsList, MenuList } from './';

import styles from './ShopsSection.module.scss';

function ShopsSection() {
  return (
    <div className={styles.container}>
      <ShopsList />
      <MenuList />

      {/* <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
    </div>
  );
}

export default ShopsSection;
