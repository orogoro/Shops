import { useDispatch } from 'react-redux';
import { MenuItem } from '../..';
import * as action from 'redux/actions';

import bibimbap from '../../../../image/Dziodzi/bibimbap.png';
import ramenNaruto from '../../../../image/Dziodzi/ramenNaruto.png';
import ramen from '../../../../image/Dziodzi/ramen.png';
import seafoodRamen from '../../../../image/Dziodzi/thai-food-min.png';

import styles from '../ShopsMenu.module.scss';

function ShopsMenuDziodzi() {
  const dispatch = useDispatch();
  dispatch(action.show(true));

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <MenuItem name={'Bibimbap'} price={'18'} src={bibimbap} />
        <MenuItem name={'Ramen Naruto'} price={'22'} src={ramenNaruto} />
        <MenuItem name={'Ramen'} price={'15'} src={ramen} />
        <MenuItem name={'Seafood ramen'} price={'20'} src={seafoodRamen} />
      </ul>
    </div>
  );
}

export default ShopsMenuDziodzi;
