import PropTypes from 'prop-types';

import styles from './HistoryFilter.module.scss';

function HistoryFilter({ onChange, phone, email }) {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label className={styles.lable}>
          Find order by email
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={onChange}
          />
        </label>

        <label className={styles.lable}>
          Find order by phone
          <input
            className={styles.input}
            type="tel"
            name="phone"
            value={phone}
            placeholder="Phone"
            onChange={onChange}
          />
        </label>
      </form>
    </div>
  );
}

export default HistoryFilter;

HistoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
