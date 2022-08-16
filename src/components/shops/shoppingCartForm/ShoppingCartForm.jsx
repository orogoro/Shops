import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
// import Notiflix from 'notiflix';

// import { getCartsItems } from 'redux/selectors';
// import * as action from '../../../redux/actions';

import styles from './ShoppingCartForm.module.scss';

function ShoppingCartForm({ onSubmit, total }) {
  // const [name, setName] = useState('');
  // const [tel, setTel] = useState('');
  // const [email, setEmail] = useState('');
  // const [address, setAddress] = useState('');
  // const items = useSelector(getCartsItems);
  // const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    // phone: '+380',
    // },
  });

  // const name = watch('name');
  // const email = watch('email');
  // const tel = watch('phone');
  // const address = watch('position');

  // const total = items
  //   .map(item => item.price * item.counter)
  //   .reduce((acc, item) => acc + item, 0);

  const handleSubmitForm = ({ name, tel, email, address }) => {
    onSubmit(name, tel, email, address);

    reset();
  };

  // const onSubmitForm = e => {
  //   e.preventDefault();

  //   dispatch(action.orders({ items, total, name, tel, email, address }));
  //   Notiflix.Report.success(
  //     'Success',
  //     'Thank you for your order, we will contact you shortly.',
  //     'Ok'
  //   );

  //   dispatch(action.clearCart([]));
  //   setName('');
  //   setTel('');
  //   setEmail('');
  //   setAddress('');
  // };

  // const handleInputChange = e => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'tel':
  //       setTel(value);
  //       break;

  //     case 'email':
  //       setEmail(value);
  //       break;

  //     case 'address':
  //       setAddress(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  return (
    <div className={styles.conainer}>
      <div className={styles.conainer_form}>
        <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
          <div className={styles.input__container}>
            <label className={styles.lable}>Name</label>
            <input
              className={styles.input}
              type="text"
              {...register('name', {
                required: 'This is required',
                minLength: {
                  value: 2,
                  message: 'Min length is 2',
                },
                maxLength: {
                  value: 60,
                  message: 'Max length is 60',
                },
                pattern: {
                  value:
                    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                  message: 'Ivan Ivanov',
                },
              })}
              placeholder="Your name"
            />
            <p className={errors.name ? styles.error : styles.opacity}>
              {errors.name ? errors.name?.message : 'message error'}
            </p>
          </div>

          <div className={styles.input__container}>
            <label className={styles.lable}> Email</label>
            <input
              className={styles.input}
              type="email"
              {...register('email', {
                required: 'This is required',
                minLength: {
                  value: 2,
                  message: 'Min length is 2',
                },
                maxLength: {
                  value: 70,
                  message: 'Max length is 70',
                },
                pattern: {
                  value:
                    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                  message: 'example@gmail.com',
                },
              })}
              placeholder="Your e-mail"
            />
            <p className={errors.email ? styles.error : styles.opacity}>
              {errors.email ? errors.email?.message : 'message error'}
            </p>
          </div>

          <div className={styles.input__container}>
            <label className={styles.lable}>Phone</label>
            <input
              className={styles.input}
              type="tel"
              {...register('tel', {
                required: 'This is required',
                pattern: /^[+]{0,1}380([0-9]{9})$/,
              })}
              placeholder="Your number"
            />
            <p className={errors.tel ? styles.error : styles.form_phone}>
              +38 (XXX) XXX - XX - XX
            </p>
          </div>

          <div className={styles.input__container}>
            <label className={styles.lable}>Address</label>
            <input
              className={styles.input}
              type="text"
              {...register('address', {
                required: 'This is required',
                minLength: {
                  value: 2,
                  message: 'Min length is 2',
                },
                maxLength: {
                  value: 70,
                  message: 'Max length is 70',
                },
              })}
              placeholder="Your address"
            />
            <p className={errors.address ? styles.error : styles.opacity}>
              {errors.address ? errors.address?.message : 'message error'}
            </p>
          </div>

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
