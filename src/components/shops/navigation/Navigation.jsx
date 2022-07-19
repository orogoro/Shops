import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : null]
                .filter(Boolean)
                .join(' ')
            }
          >
            Shops
          </NavLink>
          <NavLink
            to="/Shopping_cart"
            className={({ isActive }) =>
              [styles.link, isActive ? styles.active : null]
                .filter(Boolean)
                .join(' ')
            }
          >
            Shopping cart
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
