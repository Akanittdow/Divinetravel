import type { NextPage } from "next";
import styles from "./logo1.module.css";

export type Logo1Type = {
  className?: string;
};

const Logo1: NextPage<Logo1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.logo, className].join(" ")}>
      <img className={styles.image92Icon} alt="" src="/image-922@2x.png" />
      <div className={styles.letNextcentDo}>Divine Travel Experience</div>
    </div>
  );
};

export default Logo1;
