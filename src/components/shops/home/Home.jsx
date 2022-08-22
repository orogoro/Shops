import { Slider, SliderCard, Benefits, Footer, ScrollToTop } from './';

import wave1 from '../../../image/wave1.svg';
import wave2 from '../../../image/wave2.svg';

import styles from './Home.module.scss';

function Home() {
  return (
    <>
      <Slider />
      <div className={styles.reletiveConteiner}>
        <SliderCard />
        <img className={styles.img1} src={wave1} alt="wave1" />
      </div>
      <div className={styles.reletiveConteiner}>
        <Benefits />
        <img className={styles.img2} src={wave2} alt="wave2" />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
