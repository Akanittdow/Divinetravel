import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component9.module.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: NextPage<FrameComponent9Type> = ({ className = "" }) => {
  const router = useRouter();

  const onGroupImageClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onArrowG002ImageClick = useCallback(() => {
    router.push("/mzansi");
  }, [router]);

  return (
    <section className={[styles.mauritiusWrapper, className].join(" ")}>
      <div className={styles.mauritius}>
        <div className={styles.mozambique}>
          <h2 className={styles.mauritius1}>MAURITIUS</h2>
          <img
            className={styles.unsplash7uxn7nudorcIcon}
            loading="lazy"
            alt=""
            src="/unsplash7uxn7nudorc@2x.png"
          />
          <div className={styles.price}>
            <h1
              className={styles.portLouisAnd}
            >{`Port Louis and I'll aux cerfs Island `}</h1>
            <div className={styles.mauritiusDeposit}>
              <b className={styles.r37000}>R21 00</b>
              <div className={styles.mauritiusDepositLabel}>
                <b className={styles.pps}>PPS</b>
                <b className={styles.depositR5000}>Deposit R3000</b>
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.travelDates2428}>
              Travel Dates 24-28 October 2024
            </div>
          </div>
          <div className={styles.price1}>
            <div className={styles.packageIncludes}>Package Includes:</div>
            <div className={styles.mauritiusAmenities}>
              <div className={styles.bath}>
                <div className={styles.bathWrapper}>
                  <img className={styles.bathIcon} alt="" src="/bath.svg" />
                </div>
                <div className={styles.gym}>Bath</div>
              </div>
              <div className={styles.bath}>
                <div className={styles.glassAndBottleOfWineWrapper}>
                  <img
                    className={styles.glassAndBottleOfWineIcon}
                    alt=""
                    src="/glassandbottleofwine.svg"
                  />
                </div>
                <div className={styles.gym}>Bar</div>
              </div>
              <div className={styles.bath}>
                <div className={styles.wifiInner}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-1171278918.svg"
                  />
                </div>
                <div className={styles.gym}>Wifi</div>
              </div>
              <div className={styles.bath}>
                <div className={styles.clocks1Wrapper}>
                  <img
                    className={styles.clocks1Icon}
                    alt=""
                    src="/clocks-1.svg"
                  />
                </div>
                <div className={styles.gym}>Gym</div>
              </div>
            </div>
          </div>
          <div className={styles.integrationRowParent}>
            <div className={styles.integrationRow}>
              <div className={styles.integrationSet}>
                <img className={styles.baseIcon} alt="" src="/base-15@2x.png" />
                <div className={styles.rdPartyIntegratio}>
                  Return flights JHB
                </div>
              </div>
              <div className={styles.integrationSet1}>
                <img className={styles.baseIcon} alt="" src="/base-16@2x.png" />
                <div
                  className={styles.rdPartyIntegratio1}
                >{`Paradise island full day tour `}</div>
              </div>
            </div>
            <div className={styles.integrationRow1}>
              <div className={styles.baseParent}>
                <img className={styles.baseIcon} alt="" src="/base-17@2x.png" />
                <div className={styles.rdPartyIntegratio}>
                  4 Nights hotel stay
                </div>
              </div>
              <div className={styles.baseGroup}>
                <img className={styles.baseIcon} alt="" src="/base-18@2x.png" />
                <div className={styles.rdPartyIntegratio3}>
                  Port Louis waterfront tour
                </div>
              </div>
            </div>
            <div className={styles.integrationRow2}>
              <div className={styles.integrationSet}>
                <img className={styles.baseIcon} alt="" src="/base-19@2x.png" />
                <div className={styles.rdPartyIntegratio}>
                  Daily breakfast and dinner
                </div>
              </div>
              <div className={styles.frameDiv}>
                <img className={styles.baseIcon} alt="" src="/base-20@2x.png" />
                <div className={styles.rdPartyIntegratio}>
                  Airport transfers
                </div>
              </div>
            </div>
          </div>
          <div className={styles.price2}>
            <div className={styles.navigation}>
              <img
                className={styles.navigationChild}
                alt=""
                src="/group-153-2@2x.png"
                onClick={onGroupImageClick}
              />
              <img
                className={styles.arrowG002Icon}
                alt=""
                src="/arrowg002-2@2x.png"
                onClick={onArrowG002ImageClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
