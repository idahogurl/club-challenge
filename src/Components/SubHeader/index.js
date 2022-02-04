import styles from './subHeader.module.css';

import { NavLink } from "react-router-dom";

export function SubHeader() {

  // which page are we on?  
  return <div className={styles.subHeader}>
    <div className={styles.welcomeText}>Welcome, Sam</div>
    <div className="nav">
      <NavLink to="dash" className={({ isActive }) => isActive ? styles.unselected :''}><span className={styles.navButton}>Dash</span></NavLink>
      <NavLink to="/" className={({ isActive }) => isActive ? styles.unselected:''}><span className={styles.navButton}>QR</span></NavLink>
    </div>
  </div>;
}
