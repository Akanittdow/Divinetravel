import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent12 from "../components/frame-component12";
import NAMIBIA from "../components/n-a-m-i-b-i-a";
import FooterBig from "../components/footer-big";
import styles from "./mzansi.module.css";

const Mzansi: NextPage = () => {
  const router = useRouter();

  const onArrowG002ImageClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <div className={styles.mzansi}>
      <main className={styles.main}>
        <FrameComponent12 />
        <section className={styles.mpumalangaWrapper}>
          <div className={styles.mpumalanga}>
            <div className={styles.mpumalanga1}>
              <div className={styles.mpumalangaContainer}>
                <h2 className={styles.mpumalanga2}>MPUMALANGA</h2>
              </div>
              <div className={styles.destinationWrapper}>
                <div className={styles.destination}>
                  <h2 className={styles.thailand}>Thailand</h2>
                </div>
              </div>
              <div className={styles.price}>
                <h1
                  className={styles.panoramaRouteKruger}
                >{`Panorama Route, Kruger  Park `}</h1>
                <div className={styles.r37000Parent}>
                  <b className={styles.r37000Container}>
                    <span className={styles.r4500}>R4 500</span>
                    {`   `}
                  </b>
                  <div className={styles.ppsParent}>
                    <b className={styles.pps}>PPS</b>
                    <b className={styles.depositR5000}>Deposit R750</b>
                  </div>
                </div>
              </div>
              <div className={styles.travelDates2609July232Wrapper}>
                <div className={styles.travelDates2609}>
                  Travel Dates 26-09 July | 23-25 August 2024
                </div>
              </div>
              <div className={styles.price1}>
                <div className={styles.packageIncludes}>Package Includes:</div>
                <div className={styles.bathParent}>
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
              <div className={styles.mpumalangaInner}>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent}>
                    <div className={styles.frameGroup}>
                      <div className={styles.baseParent}>
                        <img
                          className={styles.baseIcon}
                          alt=""
                          src="/base-42@2x.png"
                        />
                        <div className={styles.rdPartyIntegratio}>
                          Road Transport
                        </div>
                      </div>
                      <div className={styles.baseGroup}>
                        <img
                          className={styles.baseIcon}
                          alt=""
                          src="/base-52@2x.png"
                        />
                        <div className={styles.rdPartyIntegratio}>
                          Graskop gorge
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameContainer}>
                      <div className={styles.baseParent}>
                        <img
                          className={styles.baseIcon}
                          alt=""
                          src="/base-62@2x.png"
                        />
                        <div className={styles.rdPartyIntegratio}>
                          2 Nights stay
                        </div>
                      </div>
                      <div className={styles.frameDiv}>
                        <img
                          className={styles.baseIcon}
                          alt=""
                          src="/base-72@2x.png"
                        />
                        <div className={styles.rdPartyIntegratio}>
                          Three rondavels
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameContainer}>
                      <div className={styles.baseParent}>
                        <img
                          className={styles.baseIcon}
                          alt=""
                          src="/base-81@2x.png"
                        />
                        <div className={styles.rdPartyIntegratio}>
                          Panorama tour
                        </div>
                      </div>
                      <div className={styles.frameDiv}>
                        <img
                          className={styles.baseIcon}
                          alt=""
                          src="/base-91@2x.png"
                        />
                        <div className={styles.rdPartyIntegratio}>
                          KNP Game drive
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.baseParent}>
                        <img
                          className={styles.baseIcon}
                          alt=""
                          src="/base-101@2x.png"
                        />
                        <div className={styles.rdPartyIntegratio}>
                          Gods window
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mpumalangaChild}>
                <div className={styles.frameParent2}>
                  <div className={styles.frameWrapper2}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-153-12@2x.png"
                      onClick={onArrowG002ImageClick}
                    />
                  </div>
                  <img
                    className={styles.arrowG002Icon}
                    alt=""
                    src="/arrowg002-11@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <NAMIBIA
          propFlex="unset"
          propPadding="26.3px 20px 26.4px"
          propWidth="1309px"
          unsplash7uXn7nudorc="/brentninaberl6ep96-w1fcunsplash@2x.png"
          windhoekWalvisBayAndSwako="Bo-Kaap, Camps bay, atlantis"
          r37000="R10 800"
          base="/base-112@2x.png"
          base1="/base-121@2x.png"
          rdPartyIntegratio="Red tour bus"
          base2="/base-131@2x.png"
          base3="/base-141@2x.png"
          rdPartyIntegratio1="Transfers to Swakopmund"
          propHeight="30px"
          propDisplay="inline-block"
          base4="/base-152@2x.png"
          rdPartyIntegratio2="Quad bike"
          base5="/base-162@2x.png"
          rdPartyIntegratio3="Sunset cruise"
          propHeight1="21.7px"
          propMaxHeight="unset"
          base6="/base-172@2x.png"
          rdPartyIntegratio4="Table mountain"
          base7="/base-182@2x.png"
          group153="/group-153-22@2x.png"
          arrowG002="/arrowg002-22@2x.png"
          onArrowG002ImageClick={onArrowG002ImageClick}
          propHeight2="54.2px"
          propWidth1="64.8px"
          nAMIBIAMarginRight="-2px"
          nAMIBIA="CAPE TOWN"
          nAMIBIADisplay="unset"
          nAMIBIAMinWidth="unset"
          unsplash7uXn7nudorcIconWidth="620.7px"
          windhoekWalvisBayWidth="393px"
          depositR5000="Deposit R1000"
          travelDates2024September2="Travel Dates    30 Dec ‘24 - 02 JAN ‘25  "
          bathPadding="unset"
          barPadding="unset"
          wifiPadding="unset"
          namibiaAmenityLabelsPadding="unset"
          rdPartyIntegratio5="3 Nights stay"
          rdPartyIntegratio6="Wine tasting"
        />
      </main>
      <FooterBig
        propTextDecoration="none"
        propTextDecoration1="unset"
        image92="/image-921@2x.png"
      />
    </div>
  );
};

export default Mzansi;
