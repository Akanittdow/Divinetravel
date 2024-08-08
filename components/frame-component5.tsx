import type { NextPage } from "next";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section className={[styles.picturesWrapper, className].join(" ")}>
      <div className={styles.pictures}>
        <div className={styles.galleryItemContainer}>
          <img
            className={styles.pictureIcon}
            loading="lazy"
            alt=""
            src="/picture@2x.png"
          />
        </div>
        <img
          className={styles.picturesChild}
          loading="lazy"
          alt=""
          src="/frame-30@2x.png"
        />
        <img className={styles.picturesChild} alt="" src="/picture-1@2x.png" />
      </div>
    </section>
  );
};

export default FrameComponent5;
