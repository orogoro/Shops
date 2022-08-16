import styles from './CardItem.module.scss';

function CardItem({ title, text, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.column}>Name</span>
          {title}
        </h2>
        <p className={styles.text}>
          <span className={styles.column}>Price</span> {text}
        </p>
      </div>
      <img className={styles.img} src={image} alt="food" />
    </div>
  );
}

export default CardItem;
