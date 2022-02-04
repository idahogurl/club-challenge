import React, { useMemo } from "react";
import styles from "./memberExperience.module.css";
import { CardRow } from "../CardRow";
import { Card } from "../Card";

export const MemberExperience = ({ data }) => {
  const { nps, disengaged } = data;
  const descriptionClass = useMemo(
    () => (nps.variantValue >= 0 ? styles.greenClass : styles.redClass),
    [nps]
  );
  const descriptionSign = useMemo(
    () => (nps.variantValue >= 0 ? '+' : '-'),
    [nps]
  );

  return (
    <CardRow title="Member Experience">
      <>
        <Card
          title="NPS"
          value={nps.value}
          description={`${descriptionSign}${nps.variantValue}pts last 90 days`}
          descriptionClass={descriptionClass}
        />
        <Card
          title="Disengaged"
          value={disengaged.value}
          description="Members"
          descriptionClass={styles.disengagedClass}
          helpText={`Nice work! ${disengaged.helpPercentage}% of all club sales this month.`}
          containerClass={styles.containerClass}
        />
      </>
    </CardRow>
  );
};
