import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ShopMenuItem from './shopMenuItem/ShopMenuItem';

import menuItems from '../../../../helper/shops.json';

import styles from './ShopsMenuList.module.scss';

function ShopsMenuList() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const itemsMenu = menuItems.filter(item => {
      return item.id === itemId;
    });
    setItem(...itemsMenu);
  }, [itemId]);

  return (
    <ul className={styles.list}>
      {item?.menu.map(it => (
        <li className={styles.container2} key={it.id}>
          <ShopMenuItem name={it.name} price={it.price} src={it.src} />
        </li>
      ))}
    </ul>
  );
}

export default ShopsMenuList;
