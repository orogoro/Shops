import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { SpinerBtn } from '..';

import styles from './ShoppingCartForm.module.scss';

function ShoppingCartForm({ onSubmit, total, loading, items }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tel: '+380',
    },
  });

  const handleSubmitForm = ({ name, tel, email, address }) => {
    if (items.length === 0) {
      toast.error('Сart is empty', {
        theme: 'colored',
      });
      return;
    }

    onSubmit(name, tel, email, address, reset);
  };

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
              +38 XXX XXX XX XX
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
            {loading ? <SpinerBtn color={'white'} size={10} /> : 'Submit'}
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
