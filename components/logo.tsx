import type { NextPage } from "next";
import styles from "./logo.module.css";

export type LogoType = {
  className?: string;
  image92?: string;
};

const Logo: NextPage<LogoType> = ({ className = "", image92 }) => {
  return (
    <div className={[styles.logo, className].join(" ")}>
      <img className={styles.image92Icon} loading="lazy" alt="" src={image92} />
      <div className={styles.letNextcentDo}>Divine Travel Experience</div>
    </div>
  );
};

export default Logo;
