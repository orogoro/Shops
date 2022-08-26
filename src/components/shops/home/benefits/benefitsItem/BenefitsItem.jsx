import PropTypes from 'prop-types';

import styles from './BenefitsItem.module.scss';

function BenefitsItem({ image, title, text }) {
  return (
    <li className={styles.container}>
      <img className={styles.image} src={image} alt="Benefits" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </li>
  );
}

export default BenefitsItem;

BenefitsItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
