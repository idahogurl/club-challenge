
import { Carousel } from 'antd';
import QRCodeComponent  from "react-qr-code";

import styles from './qrcode.module.css';
import logoImage from '../../Equinox+_White_sm 1.png';

function QRSlide({ title, text, value }) {
  return <div className={styles.qrCodeSlide}>
      <h3 className={styles.headerText}>{title}</h3>
      <p>{text}</p>
      <div className={styles.qrCodeWrapper}>
          <img src={logoImage} className={styles.qrCodeLogo} alt=""/>
          <div className={styles.qrCode}>
            <QRCodeComponent value={value} size={151} />
          </div>
      </div>
    </div>;
}

export const QRCode = ({ value }) => {
  return (
    <div className={styles.container}>
      <Carousel>
        <QRSlide value={value} title="Refer Friends &amp; Family" text="Scan QR to load the referral form." />
        <QRSlide value={value} title="Sign Up Online" text="Scan QR to load the sign up form to join online." />
      </Carousel>
    </div>
  );
}