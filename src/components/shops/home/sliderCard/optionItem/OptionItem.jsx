import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './OptionItem.module.scss';

function OptionItem({
  image,
  title,
  text,
  price,
  name,
  active,
  id,
  isActive,
  number,
}) {
  const onActive = () => {
    isActive(id);
  };

  return (
    <div
      className={styles.option + ' ' + (active ? styles.active : '')}
      onClick={onActive}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.price}>Price : {price}$</p>
        </div>
        <img className={styles.image} src={image} alt="food" />
      </div>

      <div className={styles.shadow}></div>

      <div className={styles.label}>
        <div className={styles.icon}>
          <img className={styles.iconFood} src={image} alt="food" />
        </div>
        <div className={styles.info}>
          <div className={styles.main}>{title}</div>
          <div className={styles.sub}>{text}</div>
        </div>
        <Link className={styles.button} to={`/Shops/${number}`}>
          Go to shops
        </Link>
      </div>
    </div>
  );
}

export default OptionItem;

OptionItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  isActive: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
};
