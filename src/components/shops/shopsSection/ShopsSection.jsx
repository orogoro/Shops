import { Suspense } from 'react';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { ShopsList, Loader } from '..';
// import { getShow } from 'redux/selectors';
// import order from '../../../image/order.png';

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
