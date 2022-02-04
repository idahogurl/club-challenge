import logo from '../../Abbv_Equinox-Black_L 1.png';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.headerLogo} alt="logo" />
      <span className={styles.headerText}>Employee Exp</span>
    </header>
  );
}