import styles from "./dashboard.module.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { DataRow } from "../DataRow";
import { MemberExperience } from "../MemberExperience";
import { MyMetrics } from "../MyMetrics";
import { Feedback } from "../Feedback";
import { useFetchInfo } from "./hooks/useFetchInfo";

const antIcon = (
  <LoadingOutlined style={{ fontSize: 32, color: "black" }} spin />
);

export const Dashboard = () => {
  const [data, loading] = useFetchInfo();

  if (loading) {
    return (
      <div className={styles.content}>
        <Spin indicator={antIcon} />
      </div>
    );
  }

  if (!data) {
    return (
      <div className={styles.content}>
        <span>There was an error getting the club information</span>
      </div>
    );
  }

  const { value: salesValue, total: salesTotal } = data.clubSalesGoal;
  const { value: referralValue, total: referralTotal } = data.referralLeadsGoal;
  const { percentage } = data.memberCountGoal;
  const clubSalesPercentage = (salesValue * 100) / salesTotal;
  const referralPercentage = (referralValue * 100) / referralTotal;
  const { memberExperience, myMetrics, facility_name: facilityName } = data;
  const descriptionTextSuffix = facilityName !== "Club" ? " Club" : "";

  return (
    <div className={styles.container}>
      <DataRow
        title="Club Sales Goal"
        description={`MTD Sales Goal for ${facilityName}${descriptionTextSuffix}.`}
        value={`${salesValue}/${salesTotal}`}
        percentage={clubSalesPercentage}
      />
      <DataRow
        title="Referral Leads Goal"
        description={`MTD Referral Leads for ${facilityName}${descriptionTextSuffix}.`}
        value={`${referralValue}/${referralTotal}`}
        percentage={referralPercentage}
      />
      <DataRow
        title="Membership Goal"
        description={`Active Members to Goal for ${facilityName}${descriptionTextSuffix}.`}
        value={`${Math.floor(percentage)}%`}
        percentage={Math.floor(percentage)}
      />
      <MemberExperience data={memberExperience} />
      <MyMetrics data={myMetrics} />
      <Feedback />
    </div>
  );
};
