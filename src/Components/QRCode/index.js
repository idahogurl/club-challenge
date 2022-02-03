import QRCodeComponent  from "react-qr-code";
import styles from './qrcode.module.css';

export const QRCode = ({ value }) => {
  return (
    <div className={styles.container}>
      <QRCodeComponent value={value} />
    </div>
  );
}