import styles from "./feedback.module.css";

const FEEDBACK_URL = "https://survey.alchemer.com/s3/6724624/Hack-Day-2022-Employee-Experience";

export const Feedback = () => {
  const onButtonClick = () => {
    window.open(FEEDBACK_URL, "_blank");
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Have feedback or suggestions?</span>
      <button className={styles.button} onClick={onButtonClick}>Submit Feedback</button>
    </div>
  );
};
