import type { NextPage } from "next";
import { useCallback } from "react";
import FrameComponent6 from "../components/frame-component6";
import { useRouter } from "next/router";
import FooterBig from "../components/footer-big";
import styles from "./packages.module.css";

const Packages: NextPage = () => {
  const router = useRouter();

  const onPackageTypeNamesClick = useCallback(() => {
    router.push("/mzansi");
  }, [router]);

  const onPackageTypeNamesClick1 = useCallback(() => {
    router.push("/africa");
  }, [router]);

  const onPackageTypeNamesClick2 = useCallback(() => {
    router.push("/international");
  }, [router]);

  return (
    <div className={styles.packages}>
      <FrameComponent6 />
      <section className={styles.content}>
        <div className={styles.frameParent}>
          <div className={styles.packgesListWrapper}>
            <div className={styles.packgesList}>
              <div className={styles.travelTopDestinationOfTheWrapper}>
                <h1 className={styles.travelTopDestinationContainer}>
                  <p className={styles.travelTopDestination}>
                    <span className={styles.travel}>{`Travel `}</span>
                    <span>top destination</span>
                    <span className={styles.travel}>{` `}</span>
                  </p>
                  <p className={styles.ofTheWorld}>of the world</p>
                </h1>
              </div>
              <div className={styles.packageTypesWrapper}>
                <div className={styles.packageTypes}>
                  <button
                    className={styles.packageTypeNames}
                    onClick={onPackageTypeNamesClick}
                  >
                    <div className={styles.typeLabels}>
                      <div className={styles.mzansi}>MZANSI</div>
                    </div>
                    <img
                      className={styles.work1Icon}
                      alt=""
                      src="/work-1.svg"
                    />
                  </button>
                  <button
                    className={styles.packageTypeNames1}
                    onClick={onPackageTypeNamesClick1}
                  >
                    <div className={styles.typeLabels}>
                      <div className={styles.africa}>AFRICA</div>
                    </div>
                    <img
                      className={styles.work1Icon}
                      alt=""
                      src="/work-1.svg"
                    />
                  </button>
                  <button
                    className={styles.packageTypeNames1}
                    onClick={onPackageTypeNamesClick2}
                  >
                    <div className={styles.typeLabels}>
                      <div className={styles.international}>INTERNATIONAL</div>
                    </div>
                    <img
                      className={styles.work1Icon}
                      alt=""
                      src="/work-1-2.svg"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.weAlwaysMakeOurCustomerHaWrapper}>
                <div className={styles.weAlwaysMakeContainer}>
                  <p className={styles.travelTopDestination}>
                    We always make our customer happy by providing
                  </p>
                  <p
                    className={styles.travelTopDestination}
                  >{`as many choices as possible `}</p>
                </div>
              </div>
              <div className={styles.packagesList}>
                <div
                  className={styles.lowerContentWrapper}
                  onClick={onPackageTypeNamesClick1}
                >
                  <div className={styles.lowerContent}>
                    <div className={styles.packages1}>Packages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.layerImageParent}>
              <img
                className={styles.layerImageIcon}
                loading="lazy"
                alt=""
                src="/frame-1171278912@2x.png"
              />
              <div className={styles.iconsParent}>
                <div className={styles.icons}>
                  <img
                    className={styles.send1Icon}
                    loading="lazy"
                    alt=""
                    src="/send-1.svg"
                  />
                </div>
                <img
                  className={styles.pexelsMarekPiwnicki11032571Icon}
                  loading="lazy"
                  alt=""
                  src="/pexelsmarekpiwnicki11032571-2@2x.png"
                />
              </div>
            </div>
            <div className={styles.imageLayers}>
              <img className={styles.layerIcon} alt="" src="/layer.svg" />
              <div className={styles.frame}>
                <div className={styles.icon}>
                  <img
                    className={styles.addUser1Icon}
                    loading="lazy"
                    alt=""
                    src="/adduser-1.svg"
                  />
                </div>
                <img
                  className={styles.pexelsMarekPiwnicki11032571Icon1}
                  alt=""
                  src="/pexelsmarekpiwnicki11032571-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterBig
        propTextDecoration="none"
        propTextDecoration1="unset"
        image92="/image-92@2x.png"
      />
    </div>
  );
};

export default Packages;
