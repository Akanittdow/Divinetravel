import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/africa");
  }, [router]);

  return (
    <section className={[styles.countriesWrapper, className].join(" ")}>
      <div className={styles.countries}>
        <div className={styles.letNextcentDoContainer}>
          <span>{`ZIMBABWE, BOTSWANA AND ZAMBIA IN `}</span>
          <span className={styles.one}>ONE</span>
          <span> TRIP</span>
        </div>
        <div className={styles.exploreButton}>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.label}>Book Now</div>
            <div className={styles.arrowsDirectionsrightWrapper}>
              <img
                className={styles.arrowsDirectionsright}
                alt=""
                src="/16arrows--directionsright@2x.png"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
