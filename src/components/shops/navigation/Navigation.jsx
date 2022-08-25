import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import mobileBurger from '../../../image/mobileBurger.png';

import MobileModal from './mobileModal/MobileModal';

import styles from './Navigation.module.scss';

function Navigation() {
  const [modalActive, setModalActive] = useState(false);
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
        <div className={styles.burger}>
          <button
            className={styles.button}
            onClick={() => setModalActive(true)}
          >
            <img
              className={styles.imgB}
              src={mobileBurger}
              alt="mobileBurger"
            />
          </button>
        </div>
      </nav>
      <MobileModal active={modalActive} setActive={setModalActive} />
    </header>
  );
}

export default Navigation;
