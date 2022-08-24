import { useState, useMemo } from 'react';

import { ShopsList, MenuList, FilterCategory } from './';

import filterItems from '../../../helper/shops.json';

import styles from './ShopsSection.module.scss';

function ShopsSection() {
  const [shopsItem] = useState(filterItems);
  const [category, setCategory] = useState('');

  const isCategory = (data, bool) => {
    switch (data) {
      case 'Street food':
        if (bool !== null) {
          setCategory(data);
        } else {
          setCategory('');
        }

        break;

      case 'Healthy food':
        if (bool !== null) {
          setCategory(data);
        } else {
          setCategory('');
        }
        break;

      case 'Chinese food':
        if (bool !== null) {
          setCategory(data);
        } else {
          setCategory('');
        }
        break;

      case 'Pizza':
        if (bool !== null) {
          setCategory(data);
        } else {
          setCategory('');
        }
        break;

      default:
        return;
    }
  };

  const getVisibleShopsItems = useMemo(() => {
    let filterList = [...shopsItem];

    if (category !== '') {
      filterList = filterList.filter(item => item.category.includes(category));
    }

    return filterList;
  }, [category, shopsItem]);

  return (
    <div className={styles.container}>
      <FilterCategory filterItems={shopsItem} onCategory={isCategory} />
      <div className={styles.containerMenu}>
        <ShopsList menu={getVisibleShopsItems} />
        <MenuList menuItems={getVisibleShopsItems} />
      </div>
    </div>
  );
}

export default ShopsSection;
