import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import MenuItem from './menuItem/MenuItem';

import styles from './MenuList.module.scss';

function MenuList({ menuItems }) {
  const { itemId } = useParams();

  return (
    <div className={styles.container}>
      {menuItems.map(({ id, name, image }) => (
        <MenuItem
          key={id}
          id={id}
          title={name}
          image={image}
          active={itemId === id}
        />
      ))}
    </div>
  );
}

export default MenuList;

MenuList.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          src: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};
