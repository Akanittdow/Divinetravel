import type { NextPage } from "next";
import { useCallback } from "react";
import Navbar from "./navbar";
import PackagesFront from "./packages-front";
import { useRouter } from "next/router";
import styles from "./frame-component12.module.css";

export type FrameComponent12Type = {
  className?: string;
};

const FrameComponent12: NextPage<FrameComponent12Type> = ({
  className = "",
}) => {
  const router = useRouter();

  const onGroupImageClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <section className={[styles.navbarParent, className].join(" ")}>
      <Navbar letNextcentDoBackgroundImage="url('/logo2@3x.png')" />
      <PackagesFront packages="Mzansi" />
      <div className={styles.mscCruise}>
        <div className={styles.mozambique}>
          <div className={styles.mscCruiseWrapper}>
            <h2 className={styles.mscCruise1}>MSC CRUISE</h2>
          </div>
          <div className={styles.destinationWrapper}>
            <div className={styles.destination}>
              <img
                className={styles.image93Icon}
                alt=""
                src="/image-93@2x.png"
              />
              <img
                className={styles.image94Icon}
                loading="lazy"
                alt=""
                src="/image-94@2x.png"
              />
            </div>
          </div>
          <div className={styles.price}>
            <h1
              className={styles.pomeneInhacaIslands}
            >{`Pomene, Inhaca islands `}</h1>
            <div className={styles.r37000Parent}>
              <b className={styles.r37000Container}>
                <span className={styles.r27000}>R27 000</span>
                {`   `}
              </b>
              <div className={styles.ppsParent}>
                <b className={styles.pps}>PPS</b>
                <b className={styles.depositR5000}>Deposit R3500</b>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.travelDates1924September2Wrapper}>
              <div className={styles.travelDates1924}>
                Travel Dates 19-24 September 2024
              </div>
            </div>
            <div className={styles.price1}>
              <div className={styles.packageIncludes}>Package Includes:</div>
              <div className={styles.bathParent}>
                <div className={styles.bath}>
                  <div className={styles.bathWrapper}>
                    <img
                      className={styles.bathIcon}
                      loading="lazy"
                      alt=""
                      src="/bath.svg"
                    />
                  </div>
                  <div className={styles.gym}>Bath</div>
                </div>
                <div className={styles.bath}>
                  <div className={styles.glassAndBottleOfWineWrapper}>
                    <img
                      className={styles.glassAndBottleOfWineIcon}
                      loading="lazy"
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
                      loading="lazy"
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
                      loading="lazy"
                      alt=""
                      src="/clocks-1.svg"
                    />
                  </div>
                  <div className={styles.gym}>Gym</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mozambiqueInner}>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.baseParent}>
                      <img
                        className={styles.baseIcon}
                        loading="lazy"
                        alt=""
                        src="/base2@2x.png"
                      />
                      <div className={styles.rdPartyIntegratio}>
                        3 Nights onboard MSC cruise
                      </div>
                    </div>
                    <div className={styles.baseGroup}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base-111@2x.png"
                      />
                      <div className={styles.rdPartyIntegratio}>
                        Maputo South beach
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.baseContainer}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base-210@2x.png"
                      />
                      <div className={styles.rdPartyIntegratio2}>
                        Onboard entertainment
                      </div>
                    </div>
                    <div className={styles.baseParent1}>
                      <img
                        className={styles.baseIcon}
                        alt=""
                        src="/base-32@2x.png"
                      />
                      <div className={styles.rdPartyIntegratio3}>
                        A day at Portuguese island with live entertainment and
                        activities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.frameWrapper1}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-1532@2x.png"
                    onClick={onGroupImageClick}
                  />
                </div>
                <img
                  className={styles.arrowG002Icon}
                  loading="lazy"
                  alt=""
                  src="/arrowg0022@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
