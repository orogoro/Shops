import { useState } from 'react';
import PropTypes from 'prop-types';

import FilterCategoryItem from './filterCategoryItem/FilterCategoryItem';

import styles from './FilterCategory.module.scss';

function FilterCategory({ filterItems, onCategory }) {
  const [activeId, setActiveId] = useState(null);

  const currentId = (id, data) => {
    let bool;
    if (activeId !== id) {
      setActiveId(id);
    }

    if (activeId === id) {
      bool = null;
      setActiveId(bool);
    }

    onCategory(data, bool);
  };

  return (
    <div>
      <ul className={styles.list}>
        {filterItems.map(({ id, category }) => (
          <FilterCategoryItem
            key={id}
            category={category}
            id={id}
            active={activeId === id}
            onClick={currentId}
          />
        ))}
      </ul>
    </div>
  );
}

export default FilterCategory;

FilterCategory.propTypes = {
  onCategory: PropTypes.func.isRequired,
  filterItems: PropTypes.arrayOf(
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
