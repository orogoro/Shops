import { useDispatch } from 'react-redux';
import { MenuItem } from '../..';
import * as action from 'redux/actions';

import combo_breakfast from '../../../../image/CFS/combo_breakfast.png';
import combo_dinner from '../../../../image/CFS/combo_dinner.png';
import salad from '../../../../image/CFS/salad.png';
import taco from '../../../../image/CFS/taco.png';

import styles from '../ShopsMenu.module.scss';

function ShopsMenuCFS() {
  const dispatch = useDispatch();
  dispatch(action.show(true));

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <MenuItem name={'Combo breakfast'} price={'15'} src={combo_breakfast} />
        <MenuItem name={'Combo lunch'} price={'25'} src={combo_dinner} />
        <MenuItem name={'Salad'} price={'13'} src={salad} />
        <MenuItem name={'Taco'} price={'18'} src={taco} />
      </ul>
    </div>
  );
}

export default ShopsMenuCFS;
