import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./design-contact-us.module.css";

export type DesignContactUsType = {
  className?: string;
};

const DesignContactUs: NextPage<DesignContactUsType> = ({ className = "" }) => {
  const onSocialMediaIconsClick = useCallback(() => {
    window.open(
      "https://www.instagram.com/divine_travelexperience?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    );
  }, []);

  const onSocialMediaIconsClick1 = useCallback(() => {
    window.location.href = "tel:+27620426247";
  }, []);

  const onSocialMediaIconsClick2 = useCallback(() => {
    window.location.href =
      "mailto:Info@divinetravel.co.za?subject=Divine Travel Experience Booking Request";
  }, []);

  return (
    <div className={[styles.designContactUs, className].join(" ")}>
      <div className={styles.contactUs}>
        <div className={styles.contactFormContainer}>
          <div className={styles.contactFormWrapper}>
            <div className={styles.contactFormRow}>
              <div className={styles.contactFormColumn}>
                <div className={styles.contactFormInputArea}>
                  <div className={styles.contactFormHeading}>
                    <div className={styles.contactFormTitle}>
                      <div className={styles.getInTouchContainer}>
                        <b>{`Get in `}</b>
                        <span className={styles.touch}>Touch</span>
                      </div>
                      <div className={styles.forAnyInquiries}>
                        For any inquiries or to start planning your next
                        adventure, feel free to reach out to us using the
                        contact details below. Our dedicated team is here to
                        assist you
                      </div>
                    </div>
                  </div>
                  <form className={styles.contactFormFields}>
                    <div className={styles.textField}>
                      <input
                        className={styles.name}
                        placeholder="Name*"
                        type="text"
                      />
                      <div className={styles.inputPlaceholders}>*</div>
                      <img
                        className={styles.textFieldChild}
                        alt=""
                        src="/vector-2.svg"
                      />
                    </div>
                    <div className={styles.textField1}>
                      <input
                        className={styles.email}
                        placeholder="Email*"
                        type="text"
                      />
                      <div className={styles.inputPlaceholders}>*</div>
                      <img
                        className={styles.textFieldChild}
                        alt=""
                        src="/vector-2.svg"
                      />
                    </div>
                    <div className={styles.textField2}>
                      <input
                        className={styles.phoneNumber}
                        placeholder="Phone number*"
                        type="text"
                      />
                      <div className={styles.inputPlaceholders}>*</div>
                      <img
                        className={styles.textFieldChild}
                        alt=""
                        src="/vector-2.svg"
                      />
                    </div>
                    <button className={styles.button}>
                      <b className={styles.send}>send</b>
                    </button>
                  </form>
                </div>
                <div className={styles.socialMedia}>
                  <div
                    className={styles.socialMediaIcons}
                    onClick={onSocialMediaIconsClick}
                  >
                    <img
                      className={styles.instagramWhiteIcon}
                      loading="lazy"
                      alt=""
                      src="/instagram-white@2x.png"
                    />
                    <div className={styles.instagramDivineTravelexperie}>
                      <p className={styles.instagram}>INSTAGRAM</p>
                      <p className={styles.divineTravelexperience}>
                        divine_travelexperience
                      </p>
                    </div>
                  </div>
                  <div
                    className={styles.socialMediaIcons1}
                    onClick={onSocialMediaIconsClick1}
                  >
                    <img
                      className={styles.whatsappWhiteIcon}
                      loading="lazy"
                      alt=""
                      src="/whatsapp-white@2x.png"
                    />
                    <div className={styles.instagramDivineTravelexperie}>
                      <p className={styles.instagram}>WHATSAPP</p>
                      <p className={styles.divineTravelexperience}>
                        +27 62 0426 247
                      </p>
                    </div>
                  </div>
                  <div
                    className={styles.socialMediaIcons2}
                    onClick={onSocialMediaIconsClick2}
                  >
                    <img
                      className={styles.socialMediaIconsChild}
                      loading="lazy"
                      alt=""
                      src="/frame-833.svg"
                    />
                    <div className={styles.instagramDivineTravelexperie}>
                      <p className={styles.instagram}>EMAIL</p>
                      <p className={styles.divineTravelexperience}>
                        Info@divinetravel.co.za
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.component6}>
              <img
                className={styles.elmapMarkerIcon}
                loading="lazy"
                alt=""
                src="/elmapmarker.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.contactUsChild} />
      </div>
    </div>
  );
};

export default DesignContactUs;
