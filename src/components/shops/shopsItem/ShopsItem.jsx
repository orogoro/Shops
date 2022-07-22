import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import * as action from 'redux/actions';

import styles from './ShopsItem.module.scss';

function ShopsItem({ link, name }) {
  const dispatch = useDispatch();
  return (
    <li className={styles.item}>
      <NavLink
        to={link}
        className={({ isActive }) =>
          [styles.link, isActive ? styles.active : null]
            .filter(Boolean)
            .join(' ')
        }
        onClick={() => dispatch(action.show(true))}
      >
        {name}
      </NavLink>
    </li>
  );
}

export default ShopsItem;

ShopsItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
