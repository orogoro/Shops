import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as action from 'redux/actions';

import styles from './Navigation.module.scss';

function Navigation() {
  const dispatch = useDispatch();
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
            onClick={() => dispatch(action.show(false))}
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
            onClick={() => dispatch(action.show(false))}
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
            onClick={() => dispatch(action.show(false))}
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
            onClick={() => dispatch(action.show(false))}
          >
            History
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
