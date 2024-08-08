import type { NextPage } from "next";
import DestinationItem from "./destination-item";
import styles from "./why-choose-us.module.css";

export type WhyChooseUsType = {
  className?: string;
};

const WhyChooseUs: NextPage<WhyChooseUsType> = ({ className = "" }) => {
  return (
    <div className={[styles.whyChooseUs, className].join(" ")}>
      <div className={styles.destinations}>
        <div className={styles.content}>
          <h1 className={styles.sectionTitle}>
            <span>WHY-CHOOSE</span>
            <span className={styles.us}> US?</span>
          </h1>
          <div className={styles.description}>
            We ensure that you’ll embark on a perfectly planned, safe vacation
            at a price you can afford.
          </div>
        </div>
        <div className={styles.content1}>
          <DestinationItem
            icon="/icon.svg"
            bestTravelAgency="Best Travel agency"
            travelAgenciesThatProvide="Travel agencies that provide round trip, one way, and multi trip services."
          />
          <DestinationItem
            propHeight="224px"
            propPadding="unset"
            icon="/icon-1.svg"
            bestTravelAgency="Competitive price"
            travelAgenciesThatProvide="The price offered are affordable starting from the ordinary to the exclusive."
          />
          <DestinationItem
            propHeight="204px"
            propPadding="0px 18px"
            icon="/icon-2.svg"
            bestTravelAgency="Global coverage"
            travelAgenciesThatProvide="There are many tourist attractions, hotels and interesting entertainment."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
