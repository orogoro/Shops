import CardItem from './cardItem/CardItem';
import food from '../../../../image/CFS/taco.png';
import burger from '../../../../image/McDonny/burger.png';
import bibimbap from '../../../../image/Dziodzi/bibimbap.png';
import ramenNaruto from '../../../../image/Dziodzi/ramenNaruto.png';
import salad from '../../../../image/CFS/salad.png';

import styles from './SliderCard.module.scss';

function SliderCard() {
  return (
    <div className={styles.bcolor}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Popular dishes of the week</h2>
        <CardItem title={'Taco'} text={'18$'} image={food} />
        <CardItem title={'Double burger'} text={'14$'} image={burger} />
        <CardItem title={'Bibimbap'} text={'18$'} image={bibimbap} />
        <CardItem title={'Ramen Naruto'} text={'22$'} image={ramenNaruto} />
        <CardItem title={'Salad'} text={'13$'} image={salad} />
      </div>
    </div>
  );
}

export default SliderCard;
