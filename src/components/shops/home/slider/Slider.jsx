import SliderItem from './sliderItem/SliderItem';

import place from '../../../../image/place1.jpeg';
import food from '../../../../image/food.jpg';
import insta from '../../../../image/insta.jpg';
import dr from '../../../../image/dr.jpg';

import './Slider.scss';

function Slider() {
  return (
    <div id="slider">
      <div className="slides">
        <SliderItem
          image={place}
          title={'Best Restaurants'}
          description={'The best restaurants in your city have been collected'}
        />
        <SliderItem
          image={food}
          title={'Food for every taste'}
          description={'The freshest and most delicious food'}
        />
        <SliderItem
          image={insta}
          title={'Best Moments'}
          description={'With us you will get good photos on Instagram'}
        />
        <SliderItem
          image={dr}
          title={'Birthday'}
          description={'Order on your birthday and get a discount'}
        />
      </div>
      <div className="switch">
        <ul>
          <li>
            <div className="on"></div>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Slider;
