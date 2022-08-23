import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Loader } from '../../../';

import styles from './MenuItem.module.scss';

function MenuItem({ id, title, image, active }) {
  return (
    <div className={styles.containerOne + ' ' + (active ? styles.active : '')}>
      <Link
        to={`${id}`}
        className={styles.container}
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.shadow}></div>
      </Link>

      <Suspense fallback={<Loader />}>{active && <Outlet />}</Suspense>
    </div>
  );
}

export default MenuItem;
