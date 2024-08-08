import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./home1.module.css";

export type Home1Type = {
  className?: string;
};

const Home1: NextPage<Home1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  return (
    <div className={[styles.home, className].join(" ")}>
      <div className={styles.heroSection}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.neverStopExploringContainer}>
              <span>{`Never Stop Exploring `}</span>
              <span className={styles.theWorld}>The World</span>
            </h1>
            <div className={styles.list}>
              <b className={styles.local}>Local</b>
              <b className={styles.africa}>Africa</b>
              <b className={styles.europe}>Europe</b>
              <b className={styles.asia}>Asia</b>
              <b className={styles.cruise}>Cruise</b>
            </div>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <a className={styles.label}>Learn more</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home1;
