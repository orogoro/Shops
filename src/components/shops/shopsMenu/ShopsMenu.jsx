import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as action from 'redux/actions';

import { MenuItem } from '../';
import menuItems from '../../../helper/shops.json';

import styles from './ShopsMenu.module.scss';

function ShopsMenu() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const dispatch = useDispatch();

  dispatch(action.show(true));

  useEffect(() => {
    const itemsMenu = menuItems.filter(item => {
      return item.id === itemId;
    });
    setItem(...itemsMenu);
  }, [itemId]);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {item?.menu.map(it => (
          <li className={styles.container2} key={it.id}>
            <MenuItem name={it.name} price={it.price} src={it.src} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopsMenu;
