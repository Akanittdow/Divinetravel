import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./about-us.module.css";

export type AboutUsType = {
  className?: string;
};

const AboutUs: NextPage<AboutUsType> = ({ className = "" }) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  return (
    <section className={[styles.aboutUs, className].join(" ")}>
      <img
        className={styles.image9Icon}
        loading="lazy"
        alt=""
        src="/image-91@2x.png"
      />
      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.aboutTitle}>
            <h1 className={styles.theBestAndContainer}>
              <span>{`THE BEST AND MOST TRUSTED `}</span>
              <span className={styles.service}>SERVICE</span>
            </h1>
          </div>
          <div className={styles.weHaveEnjoyed}>
            At Divine Travel Experience, we are dedicated to providing
            exceptional travel services and unforgettable experiences. With a
            global network of partners and destinations, we prioritize customer
            satisfaction and seamless service.
          </div>
        </div>
        <div
          className={styles.learnLinkWrapper}
          onClick={onFrameContainerClick}
        >
          <div className={styles.learnLink}>
            <h3 className={styles.learnMore}>Learn more</h3>
            <img
              className={styles.arrowsDirectionsright}
              loading="lazy"
              alt=""
              src="/24arrows--directionsright1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
