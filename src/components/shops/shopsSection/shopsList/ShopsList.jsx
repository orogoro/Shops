import PropTypes from 'prop-types';

import ShopsItem from './shopsItem/ShopsItem';

import styles from './ShopsList.module.scss';

function ShopsList({ menu }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Shops :</h2>
      <ul className={styles.list}>
        {menu.map(({ id, name }) => (
          <li className={styles.item} key={id}>
            <ShopsItem link={id} name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopsList;

ShopsList.propTypes = {
  menu: PropTypes.arrayOf(
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
