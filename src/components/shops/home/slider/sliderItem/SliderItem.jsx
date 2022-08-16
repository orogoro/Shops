import './SliderItem.scss';

function SliderItem({ image, title, description }) {
  return (
    <div className="slider">
      <div className="legend"></div>
      <div className="content">
        <div className="content-txt">
          <h1> {title} </h1>
          <h2> {description} </h2>
        </div>
      </div>
      <div className="images">
        <img src={image} alt="foto" />
      </div>
    </div>
  );
}

export default SliderItem;
