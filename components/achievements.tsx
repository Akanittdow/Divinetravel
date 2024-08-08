import type { NextPage } from "next";
import styles from "./achievements.module.css";

export type AchievementsType = {
  className?: string;
};

const Achievements: NextPage<AchievementsType> = ({ className = "" }) => {
  return (
    <section className={[styles.achievements, className].join(" ")}>
      <div className={styles.achievementsContent}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionHeading1}>
            <h1 className={styles.sectionTitle}>
              <span>{`Ready to Embark on Your Next `}</span>
              <span className={styles.adventure}>Adventure</span>
              <span>?</span>
            </h1>
          </div>
          <div className={styles.description}>
            We reached here with our hard work and dedication
          </div>
        </div>
      </div>
      <div className={styles.counts}>
        <div className={styles.countItems}>
          <div className={styles.row2}>
            <div className={styles.achievementItem}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon1.svg"
              />
              <div className={styles.details}>
                <b className={styles.number}>{`300+ `}</b>
                <div className={styles.label}>Clients serviced</div>
              </div>
            </div>
            <div className={styles.achievementItem1}>
              <img className={styles.icon1} alt="" src="/icon-11.svg" />
              <div className={styles.details}>
                <b className={styles.number}>50+</b>
                <div className={styles.label}>Completed trips</div>
              </div>
            </div>
          </div>
          <div className={styles.row3}>
            <div className={styles.div}>
              <div className={styles.icon2}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className={styles.details}>
                <h1 className={styles.number2}>1 Year</h1>
                <div className={styles.label}>Celebrating one year</div>
              </div>
            </div>
            <div className={styles.gridItemContent}>
              <div className={styles.frameParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/frame-1171278939.svg"
                />
                <div className={styles.details}>
                  <h1 className={styles.number2}>Mozambique</h1>
                  <div className={styles.label}>Top trip</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
