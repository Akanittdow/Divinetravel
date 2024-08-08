import type { NextPage } from "next";
import styles from "./khensani.module.css";

export type KhensaniType = {
  className?: string;
};

const Khensani: NextPage<KhensaniType> = ({ className = "" }) => {
  return (
    <div className={[styles.khensani, className].join(" ")}>
      <div className={styles.meetTheTeam}>
        <div className={styles.cardItem}>
          <img
            className={styles.circleBoxIcon}
            loading="lazy"
            alt=""
            src="/circlebox@2x.png"
          />
          <div className={styles.h6}>Founder</div>
          <b className={styles.h5}>{`Munisi Nkhensani `}</b>
        </div>
        <div className={styles.meetTheTeamInner}>
          <div className={styles.meetTheTeamParent}>
            <h1 className={styles.meetTheTeam1}>MEET THE TEAM</h1>
            <div className={styles.whenJoiningThe}>
              I'm Munisi Nkhensani, the visionary founder of Divine Travel
              Experience. My journey in the travel industry began a decade ago,
              in 2014. Over the years, I've had the privilege of exploring 3
              continents and 14 countries, which has fueled my passion for the
              transformative power of travel. My favorite destinations include
              Bali, Zanzibar, Italy, and Dubai. My unwavering dedication to
              seeing people experience the magic of travel drives me to create
              exceptional, tailor-made journeys that leave a lasting impact on
              every traveler's heart and mind.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Khensani;
