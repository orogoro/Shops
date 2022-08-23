import { useParams } from 'react-router-dom';

import MenuItem from './menuItem/MenuItem';

import menuItems from '../../../../helper/shops.json';

import styles from './MenuList.module.scss';

function MenuList() {
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
