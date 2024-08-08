import type { NextPage } from "next";
import styles from "./button.module.css";

export type ButtonType = {
  className?: string;
};

const Button: NextPage<ButtonType> = ({ className = "" }) => {
  return (
    <div className={[styles.button, className].join(" ")}>
      <div className={styles.label}>Contact us</div>
      <img
        className={styles.arrowsDirectionsright}
        alt=""
        src="/16arrows--directionsright@2x.png"
      />
    </div>
  );
};

export default Button;
