import BenefitsItem from './benefitsItem/BenefitsItem';

import restaurants from '../../../../image/Benefits/restaurants.png';
import chefs from '../../../../image/Benefits/chefs.png';
import mobile from '../../../../image/Benefits/mobile.png';

import styles from './Benefits.module.scss';

function Benefits() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Universal Application</h2>
      <ul className={styles.list}>
        <BenefitsItem
          title={'The best restaurants in your city'}
          image={restaurants}
          text={
            'Our application has a huge selection of restaurants. Order your favorite food.'
          }
        />
        <BenefitsItem
          title={'The best chefs'}
          image={chefs}
          text={
            'We have the best chefs from all over the world at your place, who will cook especially for you.'
          }
        />
        <BenefitsItem
          title={'Mobile friendly'}
          image={mobile}
          text={
            'You can order your favorite food on your smartphone from anywhere in the world.'
          }
        />
      </ul>
    </div>
  );
}

export default Benefits;
