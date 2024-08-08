import type { NextPage } from "next";
import Navbar1 from "./navbar1";
import PackagesFront from "./packages-front";
import MOZAMBIQUE1 from "./m-o-z-a-m-b-i-q-u-e1";
import styles from "./frame-component10.module.css";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: NextPage<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.navbarParent, className].join(" ")}>
      <Navbar1
        letNextcentDoBackgroundImage="url('/logo@3x.png')"
        propTextDecoration="unset"
      />
      <PackagesFront
        propBackgroundImage="url('/bg2@3x.png')"
        packages="Africa"
      />
      <MOZAMBIQUE1
        mOZAMBIQUE="MOZAMBIQUE"
        unsplash7uXn7nudorc="/unsplash7uxn7nudorc1@2x.png"
        maputoAndBilene="Maputo and bilene"
        r7200="R7 200"
        depositR5000="Deposit R2000"
        travelDates0609September1="Travel Dates    06-09 September |  14-17 December 2024"
        base="/base1@2x.png"
        rdPartyIntegratio="Road Transport"
        base1="/base-110@2x.png"
        rdPartyIntegratio1="Maputo South beach"
        base2="/base-21@2x.png"
        rdPartyIntegratio2={`Stay in Maputo & Bilene`}
        base3="/base-31@2x.png"
        rdPartyIntegratio3="Maputo city tour"
        base4="/base-41@2x.png"
        rdPartyIntegratio4="Bilene Market"
        base5="/base-51@2x.png"
        rdPartyIntegratio5="Maputo fish market"
        base6="/base-61@2x.png"
        base7="/base-71@2x.png"
        rdPartyIntegratio6="Sunset sandbar cruise"
        group153="/group-1531@2x.png"
        arrowG002="/arrowg0021@2x.png"
      />
    </section>
  );
};

export default FrameComponent10;
