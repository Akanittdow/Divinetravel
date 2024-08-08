import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./l-e-s-o-t-h-o.module.css";

export type LESOTHOType = {
  className?: string;
  tHAILAND?: string;
  destination?: string;
  phuketPhiPhiIsland?: string;
  r22500?: string;
  depositR5000?: string;
  travelDates0712November05?: string;
  rdPartyIntegratio?: string;
  rdPartyIntegratio1?: string;
  rdPartyIntegratio2?: string;
  rdPartyIntegratio3?: string;
  rdPartyIntegratio4?: string;
  rdPartyIntegratio5?: string;
  group153?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propOverflow?: CSSProperties["overflow"];
  propBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propHeight?: CSSProperties["height"];
  propOutline?: CSSProperties["outline"];
  propWidth?: CSSProperties["width"];
  propLeft?: CSSProperties["left"];
  propWidth1?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propWidth2?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
};

const LESOTHO: NextPage<LESOTHOType> = ({
  className = "",
  tHAILAND,
  propMinWidth,
  destination,
  propMaxHeight,
  propOverflow,
  propBorder,
  propBackgroundColor,
  propHeight,
  propOutline,
  phuketPhiPhiIsland,
  propWidth,
  r22500,
  depositR5000,
  travelDates0712November05,
  propLeft,
  propWidth1,
  propDisplay,
  rdPartyIntegratio,
  propWidth2,
  rdPartyIntegratio1,
  propFlex,
  rdPartyIntegratio2,
  rdPartyIntegratio3,
  rdPartyIntegratio4,
  rdPartyIntegratio5,
  group153,
}) => {
  const tHAILANDStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const destinationIconStyle: CSSProperties = useMemo(() => {
    return {
      maxHeight: propMaxHeight,
      overflow: propOverflow,
      border: propBorder,
      backgroundColor: propBackgroundColor,
      height: propHeight,
      outline: propOutline,
    };
  }, [
    propMaxHeight,
    propOverflow,
    propBorder,
    propBackgroundColor,
    propHeight,
    propOutline,
  ]);

  const phuketPhiPhiStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const travelDates0712Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth1,
      display: propDisplay,
    };
  }, [propLeft, propWidth1, propDisplay]);

  const thailandMoreIntegrationsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const rdPartyIntegratioStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const router = useRouter();

  const onGroupImageClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <section className={[styles.lesotho, className].join(" ")}>
      <div className={styles.thailand}>
        <h2 className={styles.thailand1} style={tHAILANDStyle}>
          {tHAILAND}
        </h2>
        <img
          className={styles.destinationIcon}
          loading="lazy"
          alt=""
          src={destination}
          style={destinationIconStyle}
        />
        <div className={styles.price}>
          <h1 className={styles.phuketPhiPhi} style={phuketPhiPhiStyle}>
            {phuketPhiPhiIsland}
          </h1>
          <div className={styles.thailandDeposit}>
            <b className={styles.r37000Container}>
              <span className={styles.r22500}>{r22500}</span>
              {`  `}
            </b>
            <div className={styles.thailandDepositLabel}>
              <b className={styles.pps}>PPS</b>
              <b className={styles.depositR5000}>{depositR5000}</b>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.travelDates0712} style={travelDates0712Style}>
            {travelDates0712November05}
          </div>
        </div>
        <div className={styles.price1}>
          <div className={styles.packageIncludes}>Package Includes:</div>
          <div className={styles.thailandAmenities}>
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
        <div className={styles.thailandIntegrationListWrapper}>
          <div className={styles.thailandIntegrationList}>
            <div className={styles.frameParent}>
              <div className={styles.baseParent}>
                <img className={styles.baseIcon} alt="" src="/base-8@2x.png" />
                <div className={styles.rdPartyIntegratio}>
                  {rdPartyIntegratio}
                </div>
              </div>
              <div
                className={styles.thailandMoreIntegrations}
                style={thailandMoreIntegrationsStyle}
              >
                <img className={styles.baseIcon} alt="" src="/base-9@2x.png" />
                <div
                  className={styles.rdPartyIntegratio}
                  style={rdPartyIntegratioStyle}
                >
                  {rdPartyIntegratio1}
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.baseParent}>
                <img className={styles.baseIcon} alt="" src="/base-10@2x.png" />
                <div className={styles.rdPartyIntegratio}>
                  {rdPartyIntegratio2}
                </div>
              </div>
              <div className={styles.baseContainer}>
                <img className={styles.baseIcon} alt="" src="/base-11@2x.png" />
                <div className={styles.rdPartyIntegratio}>
                  {rdPartyIntegratio3}
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.baseParent}>
                <img className={styles.baseIcon} alt="" src="/base-12@2x.png" />
                <div className={styles.rdPartyIntegratio}>
                  {rdPartyIntegratio4}
                </div>
              </div>
              <div className={styles.baseContainer}>
                <img className={styles.baseIcon} alt="" src="/base-13@2x.png" />
                <div className={styles.rdPartyIntegratio}>
                  {rdPartyIntegratio5}
                </div>
              </div>
            </div>
            <div className={styles.thailandIntegrationListInner}>
              <div className={styles.baseParent}>
                <img className={styles.baseIcon} alt="" src="/base-14@2x.png" />
                <div className={styles.rdPartyIntegratio}>Daily breakfast</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.price2}>
          <div className={styles.frameParent1}>
            <img
              className={styles.frameItem}
              alt=""
              src={group153}
              onClick={onGroupImageClick}
            />
            <img
              className={styles.arrowG002Icon}
              alt=""
              src="/arrowg002-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LESOTHO;
