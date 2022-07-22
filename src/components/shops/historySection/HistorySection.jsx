import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { getOrdersItems } from 'redux/selectors';
import { HistoryFilter, HistoryList } from '..';

import leaf from '../../../image/leaf.png';

import styles from './HistorySection.module.scss';

function HistorySection() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const orders = useSelector(getOrdersItems);

  const onChangeFilter = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const getVisibleHistoryOrders = useMemo(() => {
    const normalizedEmail = email.toLowerCase();
    let filteredList = [...orders];

    if (email !== '') {
      filteredList = filteredList.filter(item =>
        item.contact.email.toLowerCase().includes(normalizedEmail)
      );
    }

    if (phone !== '') {
      filteredList = filteredList.filter(item =>
        item.contact.tel.includes(phone)
      );
    }

    return filteredList;
  }, [email, orders, phone]);

  return (
    <div className={styles.container}>
      <HistoryFilter onChange={onChangeFilter} phone={phone} email={email} />
      {getVisibleHistoryOrders.length !== 0 ? (
        <HistoryList orders={getVisibleHistoryOrders} />
      ) : (
        <div className={styles.leaf_container}>
          <p className={styles.text}>Orders not found</p>
          <img className={styles.img} src={leaf} alt="leaf" />
        </div>
      )}
    </div>
  );
}

export default HistorySection;
