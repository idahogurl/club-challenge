import styles from "./cardRow.module.css";

export const CardRow = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.row}>
        {children}
      </div>
    </div>
  );
};
