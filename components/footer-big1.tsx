import type { NextPage } from "next";
import styles from "./footer-big1.module.css";

export type FooterBig1Type = {
  className?: string;
};

const FooterBig1: NextPage<FooterBig1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.footerBig4, className].join(" ")}>
      <div className={styles.companyInfo}>
        <div className={styles.logo}>
          <img className={styles.image92Icon} alt="" src="/image-92@2x.png" />
          <div className={styles.letNextcentDo}>Divine Travel Experience</div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.allRightsReserved}>
            Copyright © 2024 Divine travel experience.
          </div>
          <div className={styles.allRightsReserved}>All rights reserved.</div>
        </div>
        <div className={styles.socialLinks}>
          <img className={styles.socialIcons} alt="" src="/social-icons.svg" />
          <img
            className={styles.socialIcons}
            alt=""
            src="/social-icons-1.svg"
          />
          <img
            className={styles.socialIcons}
            alt=""
            src="/social-icons-2.svg"
          />
          <img
            className={styles.socialIcons}
            alt=""
            src="/social-icons-3.svg"
          />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.col1}>
          <div className={styles.quickLinks}>Quick links</div>
          <div className={styles.listItems}>
            <div className={styles.home}>Home</div>
            <div className={styles.home}>About</div>
            <div className={styles.home}>Packages</div>
            <div className={styles.home}>Contact Us</div>
          </div>
        </div>
        <div className={styles.col1}>
          <div className={styles.quickLinks}>Contact details</div>
          <div className={styles.listItems}>
            <div className={styles.home}>info@divinetravel.co.za</div>
            <div className={styles.home}>+27 62 042 6247</div>
            <div className={styles.home}>
              Richmond park, Oakdene, Johannesburg,2190.
            </div>
          </div>
        </div>
        <div className={styles.col1}>
          <div className={styles.quickLinks}>Make a booking</div>
          <div className={styles.emailInputField}>
            <div className={styles.inputFieldBg} />
            <img
              className={styles.essentialIconsSend}
              alt=""
              src="/essential-icons--send.svg"
            />
            <div className={styles.yourEmailAddress}>Your email address</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBig1;
