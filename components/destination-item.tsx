import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./destination-item.module.css";

export type DestinationItemType = {
  className?: string;
  icon?: string;
  bestTravelAgency?: string;
  travelAgenciesThatProvide?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propPadding?: CSSProperties["padding"];
};

const DestinationItem: NextPage<DestinationItemType> = ({
  className = "",
  propHeight,
  propPadding,
  icon,
  bestTravelAgency,
  travelAgenciesThatProvide,
}) => {
  const destinationItemStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const memberStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.destinationItem, className].join(" ")}
      style={destinationItemStyle}
    >
      <div className={styles.member} style={memberStyle}>
        <img className={styles.icon} alt="" src={icon} />
        <h1 className={styles.bestTravelAgency}>{bestTravelAgency}</h1>
      </div>
      <div className={styles.memberDescription}>
        <div className={styles.travelAgenciesThat}>
          {travelAgenciesThatProvide}
        </div>
      </div>
    </div>
  );
};

export default DestinationItem;
