import styles from "./card.module.css";

export const Card = ({
  title,
  value,
  description,
  descriptionClass = "",
  helpText,
  containerClass,
}) => {
  return (
    <div className={`${styles.externalContainer} ${containerClass}`}>
      <div className={styles.container}>
        <span className={styles.title}>{title}</span>
        <span className={styles.value}>{value}</span>
        <span className={`${styles.description} ${descriptionClass}`}>
          {description}
        </span>
      </div>
      {!!helpText && (
        <div className={styles.helpTextContainer}>
          <span className={styles.helpText}>{helpText}</span>
        </div>
      )}
    </div>
  );
};
