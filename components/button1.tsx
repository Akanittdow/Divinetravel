import type { NextPage } from "next";
import styles from "./button1.module.css";

export type Button1Type = {
  className?: string;
};

const Button1: NextPage<Button1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.typeprimarySizemediumSta, className].join(" ")}>
      <div className={styles.label}>Label</div>
      <img
        className={styles.arrowsDirectionsright}
        alt=""
        src="/16arrows--directionsright@2x.png"
      />
    </div>
  );
};

export default Button1;
