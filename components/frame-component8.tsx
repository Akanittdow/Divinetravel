import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import MOZAMBIQUE1 from "./m-o-z-a-m-b-i-q-u-e1";
import styles from "./frame-component8.module.css";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
  const router = useRouter();

  const onHeaderMenuDefaultClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMenuItemDefaultClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  const onLoginContainerClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <section className={[styles.navbarParent, className].join(" ")}>
      <header className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles.image92} />
          <div className={styles.letNextcentDo}>{` `}</div>
        </div>
        <nav className={styles.navbarInner}>
          <nav className={styles.headerMenuDefaultParent}>
            <div
              className={styles.headerMenuDefault}
              onClick={onHeaderMenuDefaultClick}
            >
              <a className={styles.label}>Home</a>
            </div>
            <div
              className={styles.headerMenuDefault}
              onClick={onMenuItemDefaultClick}
            >
              <a className={styles.label1}>About Us</a>
            </div>
            <a className={styles.label2}>Packages</a>
          </nav>
        </nav>
        <div className={styles.loginWrapper}>
          <div className={styles.login} onClick={onLoginContainerClick}>
            <div className={styles.button}>
              <div className={styles.signUp}>Contact Us</div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.packagesFront}>
        <div className={styles.bg}>
          <div className={styles.heroSection}>
            <div className={styles.packagesText}>
              <h1 className={styles.packages}>
                <p className={styles.international}>International</p>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <MOZAMBIQUE1
        barPadding="44.4px 20px 44.3px"
        mOZAMBIQUE="DUBAI"
        glassAndBottleOfWineIconDisplay="inline-block"
        glassAndBottleOfWineIconMinWidth="76px"
        unsplash7uXn7nudorc="/dubai001@2x.png"
        maputoAndBilene="habibi, dubai"
        frameDivWidth="225.5px"
        r7200="R27 200"
        clocks1IconPadding="0px 0px 0px"
        depositR5000="Deposit R3500"
        frameDivWidth1="308px"
        travelDates0609September1="Travel Dates    19-24 September 2024"
        frameDivHeight="unset"
        frameDivWidth2="459.5px"
        frameDivWidth3="506px"
        baseIconPadding="unset"
        base="/base@2x.png"
        rdPartyIntegratio="Return flights"
        baseIconWidth="195.9px"
        base1="/base-1@2x.png"
        rdPartyIntegratioMinHeight="18px"
        rdPartyIntegratio1="Desert Safari"
        priceHeight="unset"
        priceDisplay="unset"
        priceFlex="1"
        groupIconPadding="unset"
        base2="/base-2@2x.png"
        rdPartyIntegratio2="Airport transfers"
        propWidth="unset"
        base3="/base-3@2x.png"
        rdPartyIntegratio3="Dubai miracle garden"
        propFlex="unset"
        propPadding="unset"
        base4="/base-4@2x.png"
        rdPartyIntegratio4="5 nights hotel stay "
        propWidth1="144.4px"
        base5="/base-5@2x.png"
        rdPartyIntegratio5="Abu dhabi"
        propMinWidth="unset"
        propFlex1="1"
        propPadding1="unset"
        base6="/base-6@2x.png"
        base7="/base-7@2x.png"
        rdPartyIntegratio6="Dubai Marina sunset cruise"
        group153="/group-153@2x.png"
        arrowG002="/arrowg002@2x.png"
      />
    </section>
  );
};

export default FrameComponent8;
