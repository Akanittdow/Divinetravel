import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Logo from "./logo";
import styles from "./footer-big.module.css";

export type FooterBigType = {
  className?: string;
  image92?: string;

  /** Style props */
  propTextDecoration?: CSSProperties["textDecoration"];
  propTextDecoration1?: CSSProperties["textDecoration"];

  /** Action props */
  onSocialIconsClick?: () => void;
};

const FooterBig: NextPage<FooterBigType> = ({
  className = "",
  onSocialIconsClick,
  propTextDecoration,
  propTextDecoration1,
  image92,
}) => {
  const homeStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const contactUsStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]);

  return (
    <footer className={[styles.footerBig5, className].join(" ")}>
      <div className={styles.companyInfo}>
        <Logo image92={image92} />
        <div className={styles.copyright}>
          <div className={styles.allRightsReserved}>
            Copyright © 2024 Divine travel experience
          </div>
          <div className={styles.allRightsReserved}>All rights reserved.</div>
        </div>
        <div className={styles.socialLinks}>
          <img
            className={styles.socialIcons}
            loading="lazy"
            alt=""
            src="/social-icons.svg"
            onClick={onSocialIconsClick}
          />
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
          <h3 className={styles.quickLinks}>Quick links</h3>
          <div className={styles.listItems}>
            <a className={styles.home} style={homeStyle}>
              Home
            </a>
            <a className={styles.home}>About</a>
            <div className={styles.allRightsReserved}>Packages</div>
            <div className={styles.allRightsReserved} style={contactUsStyle}>
              Contact Us
            </div>
          </div>
        </div>
        <div className={styles.col1}>
          <h3 className={styles.quickLinks}>Contact details</h3>
          <div className={styles.listItems}>
            <div className={styles.infodivinetravelcoza}>
              info@divinetravel.co.za
            </div>
            <div className={styles.contactDetailsList}>+27 62 042 6247</div>
            <div className={styles.allRightsReserved}>
              Richmond park, Oakdene, Johannesburg,2190.
            </div>
          </div>
        </div>
        <div className={styles.col3}>
          <h3 className={styles.makeABooking}>Make a booking</h3>
          <div className={styles.emailInputField}>
            <div className={styles.inputFieldBg} />
            <input
              className={styles.yourEmailAddress}
              placeholder="Your email address"
              type="text"
            />
            <div className={styles.sendButton}>
              <img
                className={styles.essentialIconsSend}
                alt=""
                src="/essential-icons--send.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBig;
