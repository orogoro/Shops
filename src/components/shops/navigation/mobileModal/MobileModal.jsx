import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import corseMobile from '../../../../image/corseMobile.png';

import styles from './MobileModal.module.scss';

function MobileModal({ active, setActive }) {
  return (
    <div
      className={styles.container + ' ' + (active ? styles.active : '')}
      onClick={() => setActive(false)}
    >
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : null]
              .filter(Boolean)
              .join(' ')
          }
          onClick={() => setActive(false)}
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
          onClick={() => setActive(false)}
        >
          Shops
        </NavLink>
        <NavLink
          to="/Shopping_cart"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active2 : null]
              .filter(Boolean)
              .join(' ')
          }
          onClick={() => setActive(false)}
        >
          Cart
        </NavLink>
        <NavLink
          to="/History"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : null]
              .filter(Boolean)
              .join(' ')
          }
          onClick={() => setActive(false)}
        >
          History
        </NavLink>

        <button className={styles.button} onClick={() => setActive(false)}>
          <img className={styles.imgB} src={corseMobile} alt="corseMobile" />
        </button>
      </div>
    </div>
  );
}

export default MobileModal;

MobileModal.propTypes = {
  setActive: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};
