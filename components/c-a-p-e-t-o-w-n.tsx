import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./c-a-p-e-t-o-w-n.module.css";

export type CAPETOWNType = {
  className?: string;
  cAPETOWN?: string;
  unsplash7uXn7nudorc?: string;
  depositR1000?: string;
  dec202402Jan2025?: string;
  r10800Person?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propDisplay1?: CSSProperties["display"];

  /** Action props */
  onBtnClick1?: () => void;
};

const CAPETOWN: NextPage<CAPETOWNType> = ({
  className = "",
  cAPETOWN,
  propDisplay,
  propMinWidth,
  unsplash7uXn7nudorc,
  depositR1000,
  dec202402Jan2025,
  propLeft,
  propWidth,
  propDisplay1,
  r10800Person,
  onBtnClick1,
}) => {
  const cAPETOWNStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const dec2024Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
      display: propDisplay1,
    };
  }, [propLeft, propWidth, propDisplay1]);

  const router = useRouter();

  const onBtnClick = useCallback(() => {
    router.push("/mzansi");
  }, [router]);

  return (
    <div className={[styles.capeTown, className].join(" ")}>
      <h2 className={styles.capeTown1} style={cAPETOWNStyle}>
        {cAPETOWN}
      </h2>
      <img
        className={styles.unsplash7uxn7nudorcIcon}
        alt=""
        src={unsplash7uXn7nudorc}
      />
      <div className={styles.info}>
        <div className={styles.label}>
          <div className={styles.depositR1000}>{depositR1000}</div>
        </div>
        <div className={styles.dec2024} style={dec2024Style}>
          {dec202402Jan2025}
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.r10800person}>{r10800Person}</div>
        <button className={styles.btn} onClick={onBtnClick1}>
          <div className={styles.bookNow}>Book Now</div>
        </button>
      </div>
    </div>
  );
};

export default CAPETOWN;
