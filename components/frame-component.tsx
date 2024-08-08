import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.aboutUsWrapper, className].join(" ")}>
      <div className={styles.aboutUs}>
        <div className={styles.content}>
          <div className={styles.content1}>
            <div className={styles.expertDescription}>
              <h1 className={styles.aTeamOfContainer}>
                <span>{`A Team of Reliable and `}</span>
                <span className={styles.experienced}>Experienced</span>
                <span> Travel Experts</span>
              </h1>
            </div>
            <div className={styles.weHaveEnjoyed}>
              Our mission is to provide excellently curated vacations for every
              budget and interest. We are dedicated to crafting extraordinary
              travel experiences that cater to diverse preferences and financial
              considerations. Our commitment to personalized and exceptional
              travel solutions ensures that each journey is memorable and
              transformative.
            </div>
          </div>
          <div className={styles.packageHighlight}>
            <div className={styles.packageLink}>
              <h3 className={styles.packages}>Packages</h3>
              <img
                className={styles.arrowsDirectionsright}
                loading="lazy"
                alt=""
                src="/24arrows--directionsright@2x.png"
              />
            </div>
          </div>
        </div>
        <img
          className={styles.image9Icon}
          loading="lazy"
          alt=""
          src="/image-9@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
