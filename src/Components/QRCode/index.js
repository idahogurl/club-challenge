
import { Carousel } from 'antd';
import QRCodeComponent  from "react-qr-code";

import styles from './qrcode.module.css';
import logoImage from '../../Equinox+_White_sm 1.png';

function QRCodeSlide({ title, text, codeValue }) {
  return <div className={styles.qrCodeSlide}>
      <h3 className={styles.headerText}>{title}</h3>
      <p>{text}</p>
      <div className={styles.qrCodeWrapper}>
          <img src={logoImage} className={styles.qrCodeLogo} alt=""/>
          <div className={styles.qrCode}>
            <QRCodeComponent value={codeValue} size={151} />
          </div>
      </div>
    </div>;
}

export const QRCode = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const referrerId = urlParams.get("referrerId");

  return (
    <div className={styles.container}>
      <Carousel>
        <QRCodeSlide codeValue={`https://www.equinox.com/referrals/${referrerId}`} title="Refer Friends &amp; Family" text="Scan QR to load the referral form." />
        <QRCodeSlide codeValue="https://www.equinox.com/join/step1/115?icmp=topnav-join" title="Sign Up Online" text="Scan QR to load the sign up form to join online." />
      </Carousel>
    </div>
  );
}