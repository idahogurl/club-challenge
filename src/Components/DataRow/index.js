import styles from './dataRow.module.css';
import { Progress } from 'antd';

export const DataRow = ({ title, description, value, percentage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <span>{title}</span>
        <span>{value}</span>
      </div>
      <span className={styles.description}>
        {description}
      </span>
      <div>
        <Progress percent={percentage} showInfo={false} strokeColor="#43D147" trailColor="#333333" />
      </div>
    </div>
  );
}