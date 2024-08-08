import type { NextPage } from "next";
import styles from "./button2.module.css";

export type Button2Type = {
  className?: string;
};

const Button2: NextPage<Button2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.typeprimarySizemediumSta, className].join(" ")}>
      <div className={styles.label}>Label</div>
    </div>
  );
};

export default Button2;
