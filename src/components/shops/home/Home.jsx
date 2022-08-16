import { Slider, SliderCard } from './';

import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <Slider />
      <SliderCard />
    </div>
  );
}

export default Home;
