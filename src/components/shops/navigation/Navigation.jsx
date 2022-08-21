import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : null]
                .filter(Boolean)
                .join(' ')
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Shops"
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : null]
                .filter(Boolean)
                .join(' ')
            }
          >
            Shops
          </NavLink>
        </div>
        <div className={styles.container}>
          <NavLink
            to="/Shopping_cart"
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active2 : null]
                .filter(Boolean)
                .join(' ')
            }
          >
            <div className={styles.img}></div>
          </NavLink>
          <NavLink
            to="/History"
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : null]
                .filter(Boolean)
                .join(' ')
            }
          >
            History
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
