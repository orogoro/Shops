import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';

import { getCartsItems } from 'redux/selectors';
import * as action from '../../../redux/actions';

import styles from './ShoppingCartForm.module.scss';

function ShoppingCartForm() {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const items = useSelector(getCartsItems);
  const dispatch = useDispatch();

  const total = items
    .map(item => item.price * item.counter)
    .reduce((acc, item) => acc + item, 0);

  const onSubmitForm = e => {
    e.preventDefault();

    dispatch(action.orders({ items, total, name, tel, email, address }));
    Notiflix.Report.success(
      'Success',
      'Thank you for your order, we will contact you shortly.',
      'Ok'
    );

    dispatch(action.clearCart([]));
    setName('');
    setTel('');
    setEmail('');
    setAddress('');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'tel':
        setTel(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'address':
        setAddress(value);
        break;

      default:
        return;
    }
  };

  return (
    <div className={styles.conainer}>
      <div className={styles.conainer_form}>
        <form className={styles.form} onSubmit={onSubmitForm}>
          <label className={styles.lable}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              placeholder="Your name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              onChange={handleInputChange}
            />
          </label>
          <label className={styles.lable}>
            Email
            <input
              className={styles.input}
              name="email"
              type="email"
              value={email}
              placeholder="Your e-mail"
              onChange={handleInputChange}
            />
          </label>
          <label className={styles.lable}>
            Phone
            <input
              className={styles.input}
              name="tel"
              type="tel"
              value={tel}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              placeholder="Your number"
              onChange={handleInputChange}
            />
          </label>
          <label className={styles.lable}>
            Address
            <input
              className={styles.input}
              name="address"
              type="text"
              value={address}
              placeholder="Your address"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              onChange={handleInputChange}
            />
          </label>

          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className={styles.container_total}>
        <p className={styles.text}>
          Total price : <span className={styles.span}>{total}</span> $
        </p>
      </div>
    </div>
  );
}

export default ShoppingCartForm;
