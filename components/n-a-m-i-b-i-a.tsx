import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./n-a-m-i-b-i-a.module.css";

export type NAMIBIAType = {
  className?: string;
  unsplash7uXn7nudorc?: string;
  windhoekWalvisBayAndSwako?: string;
  r37000?: string;
  base?: string;
  base1?: string;
  rdPartyIntegratio?: string;
  base2?: string;
  base3?: string;
  rdPartyIntegratio1?: string;
  base4?: string;
  rdPartyIntegratio2?: string;
  base5?: string;
  rdPartyIntegratio3?: string;
  base6?: string;
  rdPartyIntegratio4?: string;
  base7?: string;
  group153?: string;
  arrowG002?: string;
  nAMIBIA?: string;
  depositR5000?: string;
  travelDates2024September2?: string;
  rdPartyIntegratio5?: string;
  rdPartyIntegratio6?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propHeight1?: CSSProperties["height"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propHeight2?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  nAMIBIAMarginRight?: CSSProperties["marginRight"];
  nAMIBIADisplay?: CSSProperties["display"];
  nAMIBIAMinWidth?: CSSProperties["minWidth"];
  unsplash7uXn7nudorcIconWidth?: CSSProperties["width"];
  windhoekWalvisBayWidth?: CSSProperties["width"];
  bathPadding?: CSSProperties["padding"];
  barPadding?: CSSProperties["padding"];
  wifiPadding?: CSSProperties["padding"];
  namibiaAmenityLabelsPadding?: CSSProperties["padding"];

  /** Action props */
  onArrowG002ImageClick?: () => void;
};

const NAMIBIA: NextPage<NAMIBIAType> = ({
  className = "",
  propFlex,
  propPadding,
  propWidth,
  unsplash7uXn7nudorc,
  windhoekWalvisBayAndSwako,
  r37000,
  base,
  base1,
  rdPartyIntegratio,
  base2,
  base3,
  rdPartyIntegratio1,
  propHeight,
  propDisplay,
  base4,
  rdPartyIntegratio2,
  base5,
  rdPartyIntegratio3,
  propHeight1,
  propMaxHeight,
  base6,
  rdPartyIntegratio4,
  base7,
  group153,
  arrowG002,
  onArrowG002ImageClick,
  propHeight2,
  propWidth1,
  nAMIBIAMarginRight,
  nAMIBIA,
  nAMIBIADisplay,
  nAMIBIAMinWidth,
  unsplash7uXn7nudorcIconWidth,
  windhoekWalvisBayWidth,
  depositR5000,
  travelDates2024September2,
  bathPadding,
  barPadding,
  wifiPadding,
  namibiaAmenityLabelsPadding,
  rdPartyIntegratio5,
  rdPartyIntegratio6,
}) => {
  const nAMIBIAStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
      width: propWidth,
      marginRight: nAMIBIAMarginRight,
    };
  }, [propFlex, propPadding, propWidth, nAMIBIAMarginRight]);

  const rdPartyIntegratio4Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const rdPartyIntegratio5Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      maxHeight: propMaxHeight,
    };
  }, [propHeight1, propMaxHeight]);

  const arrowG002IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
      width: propWidth1,
    };
  }, [propHeight2, propWidth1]);

  const nAMIBIA1Style: CSSProperties = useMemo(() => {
    return {
      display: nAMIBIADisplay,
      minWidth: nAMIBIAMinWidth,
    };
  }, [nAMIBIADisplay, nAMIBIAMinWidth]);

  const unsplash7uXn7nudorcIconStyle: CSSProperties = useMemo(() => {
    return {
      width: unsplash7uXn7nudorcIconWidth,
    };
  }, [unsplash7uXn7nudorcIconWidth]);

  const windhoekWalvisBayStyle: CSSProperties = useMemo(() => {
    return {
      width: windhoekWalvisBayWidth,
    };
  }, [windhoekWalvisBayWidth]);

  const bathStyle: CSSProperties = useMemo(() => {
    return {
      padding: bathPadding,
    };
  }, [bathPadding]);

  const barStyle: CSSProperties = useMemo(() => {
    return {
      padding: barPadding,
    };
  }, [barPadding]);

  const wifiStyle: CSSProperties = useMemo(() => {
    return {
      padding: wifiPadding,
    };
  }, [wifiPadding]);

  const namibiaAmenityLabelsStyle: CSSProperties = useMemo(() => {
    return {
      padding: namibiaAmenityLabelsPadding,
    };
  }, [namibiaAmenityLabelsPadding]);

  const router = useRouter();

  const onGroupImageClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <div className={[styles.namibia, className].join(" ")} style={nAMIBIAStyle}>
      <div className={styles.mozambique}>
        <h2 className={styles.namibia1} style={nAMIBIA1Style}>
          {nAMIBIA}
        </h2>
        <img
          className={styles.unsplash7uxn7nudorcIcon}
          alt=""
          src={unsplash7uXn7nudorc}
          style={unsplash7uXn7nudorcIconStyle}
        />
        <div className={styles.price}>
          <h1
            className={styles.windhoekWalvisBay}
            style={windhoekWalvisBayStyle}
          >
            {windhoekWalvisBayAndSwako}
          </h1>
          <div className={styles.namibiaDeposit}>
            <b className={styles.r37000}>{r37000}</b>
            <div className={styles.namibiaDepositLabel}>
              <b className={styles.pps}>PPS</b>
              <b className={styles.depositR5000}>{depositR5000}</b>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.travelDates2024}>
            {travelDates2024September2}
          </div>
        </div>
        <div className={styles.price1}>
          <div className={styles.packageIncludes}>Package Includes:</div>
          <div className={styles.namibiaAmenities}>
            <div className={styles.bath} style={bathStyle}>
              <div className={styles.bathWrapper}>
                <img className={styles.bathIcon} alt="" src="/bath.svg" />
              </div>
              <div className={styles.gym}>Bath</div>
            </div>
            <div className={styles.bath} style={barStyle}>
              <div className={styles.glassAndBottleOfWineWrapper}>
                <img
                  className={styles.glassAndBottleOfWineIcon}
                  alt=""
                  src="/glassandbottleofwine.svg"
                />
              </div>
              <div className={styles.gym}>Bar</div>
            </div>
            <div className={styles.bath} style={wifiStyle}>
              <div className={styles.wifiInner}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-1171278918.svg"
                />
              </div>
              <div className={styles.gym}>Wifi</div>
            </div>
            <div className={styles.bath} style={namibiaAmenityLabelsStyle}>
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
        <div className={styles.baseIntegration}>
          <div className={styles.baseIntegrationGrid}>
            <div className={styles.baseIntegrationRow}>
              <img className={styles.baseIcon} alt="" src={base} />
              <div className={styles.rdPartyIntegratio}>Return flights JHB</div>
            </div>
            <div className={styles.baseName}>
              <img className={styles.baseIcon} alt="" src={base1} />
              <div className={styles.rdPartyIntegratio}>
                {rdPartyIntegratio}
              </div>
            </div>
          </div>
          <div className={styles.baseIntegrationGrid1}>
            <div className={styles.baseParent}>
              <img className={styles.baseIcon} alt="" src={base2} />
              <div className={styles.rdPartyIntegratio}>
                {rdPartyIntegratio5}
              </div>
            </div>
            <div className={styles.baseGroup}>
              <img className={styles.baseIcon} alt="" src={base3} />
              <div
                className={styles.rdPartyIntegratio3}
                style={rdPartyIntegratio4Style}
              >
                {rdPartyIntegratio1}
              </div>
            </div>
          </div>
          <div className={styles.baseIntegrationGrid2}>
            <div className={styles.baseIntegrationRow}>
              <img className={styles.baseIcon} alt="" src={base4} />
              <div className={styles.rdPartyIntegratio}>
                {rdPartyIntegratio2}
              </div>
            </div>
            <div className={styles.frameDiv}>
              <img className={styles.baseIcon} alt="" src={base5} />
              <div
                className={styles.rdPartyIntegratio}
                style={rdPartyIntegratio5Style}
              >
                {rdPartyIntegratio3}
              </div>
            </div>
          </div>
          <div className={styles.baseIntegrationGrid2}>
            <div className={styles.baseIntegrationRow}>
              <img className={styles.baseIcon} alt="" src={base6} />
              <div className={styles.rdPartyIntegratio}>
                {rdPartyIntegratio4}
              </div>
            </div>
            <div className={styles.frameDiv}>
              <img className={styles.baseIcon} alt="" src={base7} />
              <div className={styles.rdPartyIntegratio}>
                {rdPartyIntegratio6}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.price2}>
          <div className={styles.frameParent}>
            <img
              className={styles.frameItem}
              alt=""
              src={group153}
              onClick={onGroupImageClick}
            />
            <img
              className={styles.arrowG002Icon}
              alt=""
              src={arrowG002}
              onClick={onArrowG002ImageClick}
              style={arrowG002IconStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NAMIBIA;
