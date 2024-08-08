import type { NextPage } from "next";
import styles from "./arrows-directions-right.module.css";

export type ArrowsDirectionsRightType = {
  className?: string;
};

const ArrowsDirectionsRight: NextPage<ArrowsDirectionsRightType> = ({
  className = "",
}) => {
  return (
    <img
      className={[styles.arrowsDirectionsright, className].join(" ")}
      alt=""
      src="/24arrows--directionsright2@2x.png"
    />
  );
};

export default ArrowsDirectionsRight;
