import SyncLoader from 'react-spinners/SyncLoader';
import styles from './Loader.module.scss';

function Loader() {
  return (
    <SyncLoader
      className={styles.loader}
      color="black"
      // loading={loading}
      size={15}
    />
  );
}

export default Loader;
