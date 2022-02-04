import styles from './subHeader.module.css';

import { NavLink } from "react-router-dom";

export function SubHeader() {
  const urlParams = new URLSearchParams(window.location.search);
  const clubId = urlParams.get("clubId");

   const dashboardLink = clubId ? `/?clubId=${clubId}` : '/';
  // which page are we on?  
  return <div className={styles.subHeader}>
    <div className={styles.welcomeText}>Welcome, Sam</div>
    <div className="nav">
      <NavLink to={dashboardLink} className={({ isActive }) => isActive ? styles.unselected :''}><span className={styles.navButton}>Dash</span></NavLink>
      <NavLink to="qr" className={({ isActive }) => isActive ? styles.unselected:''}><span className={styles.navButton}>QR</span></NavLink>
    </div>
  </div>;
}
