import PropTypes from 'prop-types';

import styles from './FilterCategoryItem.module.scss';

function FilterCategoryItem({ category, active, id, onClick }) {
  const onActive = () => {
    onClick(id, category);
  };

  return (
    <li
      className={styles.item + ' ' + (active ? styles.active : '')}
      onClick={onActive}
    >
      <p>{category}</p>
    </li>
  );
}

export default FilterCategoryItem;

FilterCategoryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
