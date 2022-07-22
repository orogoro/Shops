import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { ShopsList, Loader } from '..';
import { getShow } from 'redux/selectors';
import order from '../../../image/order.png';

import styles from './ShopsSection.module.scss';

function ShopsSection() {
  const onShow = useSelector(getShow);
  return (
    <div className={styles.container}>
      <ShopsList />

      <Suspense fallback={<Loader />}>
        {onShow ? (
          <Outlet />
        ) : (
          <img className={styles.img} src={order} alt="make your choise" />
        )}
      </Suspense>
    </div>
  );
}

export default ShopsSection;
