import styles from "./myMetrics.module.css";
import { CardRow } from "../CardRow";
import { Card } from "../Card";

export const MyMetrics = ({ data }) => {
  const { referralLeads, yourSales } = data;

  return (
    <CardRow title="My Metrics">
      <>
        <Card title="Referral Leads" value={referralLeads.value} description="Tip: Share your QR code with friends of friends." />
        <Card
          title="Your Sales"
          value={yourSales.value}
          description={`Nice work! ${yourSales.percentage}% of all club sales this month.`}
          containerClass={styles.containerClass}
        />
      </>
    </CardRow>
  );
};

