import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./mozambique.module.css";

export type MozambiqueType = {
  className?: string;
  mOZAMBIQUE?: string;
  unsplash7uXn7nudorc?: string;
  depositR1000?: string;
  sept2024?: string;
  dec2024?: string;
  r7200Person?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propLeft?: CSSProperties["left"];
};

const Mozambique: NextPage<MozambiqueType> = ({
  className = "",
  mOZAMBIQUE,
  propDisplay,
  propMinWidth,
  propWidth,
  unsplash7uXn7nudorc,
  depositR1000,
  sept2024,
  propLeft,
  dec2024,
  r7200Person,
}) => {
  const mOZAMBIQUE2Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propDisplay, propMinWidth, propWidth]);

  const sept2024Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const router = useRouter();

  const onBtnClick = useCallback(() => {
    router.push("/africa");
  }, [router]);

  return (
    <div className={[styles.mozambique, className].join(" ")}>
      <h2 className={styles.mozambique1} style={mOZAMBIQUE2Style}>
        {mOZAMBIQUE}
      </h2>
      <img
        className={styles.unsplash7uxn7nudorcIcon}
        loading="lazy"
        alt=""
        src={unsplash7uXn7nudorc}
      />
      <div className={styles.info}>
        <div className={styles.label}>
          <div className={styles.depositR1000}>{depositR1000}</div>
        </div>
        <div className={styles.sept2024} style={sept2024Style}>
          {sept2024}
        </div>
        <div className={styles.dec2024}>{dec2024}</div>
      </div>
      <div className={styles.price}>
        <div className={styles.r7200person}>{r7200Person}</div>
        <button className={styles.btn} onClick={onBtnClick}>
          <div className={styles.bookNow}>Book Now</div>
        </button>
      </div>
    </div>
  );
};

export default Mozambique;
