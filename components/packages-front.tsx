import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./packages-front.module.css";

export type PackagesFrontType = {
  className?: string;
  packages?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const PackagesFront: NextPage<PackagesFrontType> = ({
  className = "",
  propBackgroundImage,
  packages,
}) => {
  const bGStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={[styles.packagesFront, className].join(" ")}>
      <div className={styles.bg} style={bGStyle}>
        <div className={styles.heroSection}>
          <div className={styles.packagesText}>
            <h1 className={styles.packages}>{packages}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesFront;
