import { useState } from 'react';
import { useSelector } from 'react-redux';

import OptionItem from './optionItem/OptionItem';
import { getPopularItems } from 'redux/selectors';

import styles from './SliderCard.module.scss';

function SliderCard() {
  const items = useSelector(getPopularItems);
  const [activeId, setActiveId] = useState('1');

  const currentId = id => {
    setActiveId(id);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular dishes</h2>
      <div className={styles.options}>
        {items.map(({ id, name, title, src, text, price }) => (
          <OptionItem
            active={activeId === id}
            id={id}
            image={src}
            title={title}
            text={text}
            price={price}
            name={name}
            key={id}
            isActive={currentId}
          />
        ))}
      </div>
    </div>
  );
}

export default SliderCard;
