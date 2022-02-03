import logo from '../../logo.png';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.headerLogo} alt="logo" />
      <p className={styles.headerText}>Employee Experience</p>
    </header>
  );
}