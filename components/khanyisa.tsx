import type { NextPage } from "next";
import styles from "./khanyisa.module.css";

export type KhanyisaType = {
  className?: string;
};

const Khanyisa: NextPage<KhanyisaType> = ({ className = "" }) => {
  return (
    <div className={[styles.khanyisa, className].join(" ")}>
      <div className={styles.meetTheTeam}>
        <div className={styles.colMd3}>
          <div className={styles.cardItem}>
            <img
              className={styles.circleBoxIcon}
              alt=""
              src="/circlebox-1@2x.png"
            />
            <div className={styles.h6}>Travel coordinator</div>
            <b className={styles.h5}>Khanyisa</b>
          </div>
        </div>
        <div className={styles.meetTheTeamInner}>
          <div className={styles.whenJoiningTheJustgoCommunWrapper}>
            <div className={styles.whenJoiningThe}>
              Hi, I'm Khanyisa, your dedicated travel coordinator and host. My
              journey in the travel industry is driven by an unyielding passion
              for creating unforgettable experiences. With a youthful spirit and
              boundless energy, I am committed to ensuring that every traveler
              has an extraordinary and fulfilling time. Seeing people revel in
              the wonders of exploration brings me immense joy, and my
              infectious enthusiasm and genuine love for travel are the driving
              forces behind my dedication to making your travel dreams come
              true.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Khanyisa;
