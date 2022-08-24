import logo from '../../../../image/logo.png';
import github from '../../../../image/githubIcon.svg';
import linkedin from '../../../../image/linkedinIcon.svg';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.img} src={logo} alt="logo" />
        <p className={styles.text}>Application</p>
      </div>
      <address className={styles.address}>
        <ul className={styles.listAddress}>
          <li className={styles.itemAddress}>
            <a
              className={styles.linkAddress}
              href="mailto:raen9880@gmail.com"
              target="blank"
            >
              raen9880@gmail.com
            </a>
          </li>
          <li className={styles.itemAddress}>
            <a
              className={styles.linkAddress}
              href="mailto:mega_se7en@ukr.net"
              target="blank"
            >
              mega_se7en@ukr.net
            </a>
          </li>
        </ul>
      </address>
      <div className={styles.container2}>
        <ul className={styles.listIcon}>
          <li className={styles.itemIcon}>
            <a
              className={styles.linkIcon}
              href="https://www.linkedin.com/in/yurii-dvornichenko-5948a1241/"
              target="blank"
            >
              <img className={styles.icon} src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li className={styles.itemIcon}>
            <a
              className={styles.linkIcon}
              href="https://github.com/orogoro"
              target="blank"
            >
              <img className={styles.icon2} src={github} alt="github" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.container3}>
        <p className={styles.title}>Libraries that I used for this project :</p>
        <ul className={styles.list}>
          <li className={styles.item}>React,</li>
          <li className={styles.item}>React Router,</li>
          <li className={styles.item}>Redux,</li>
          <li className={styles.item}>Redux Persist,</li>
          <li className={styles.item}>Redux Toolkit,</li>
          <li className={styles.item}>React hook form</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
