import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent10 from "../components/frame-component10";
import LESOTHO from "../components/l-e-s-o-t-h-o";
import NAMIBIA from "../components/n-a-m-i-b-i-a";
import FooterBig from "../components/footer-big";
import styles from "./africa.module.css";

const Africa: NextPage = () => {
  const router = useRouter();

  const onArrowG002ImageClick = useCallback(() => {
    router.push("/international");
  }, [router]);

  return (
    <div className={styles.africa}>
      <FrameComponent10 />
      <section className={styles.lesothoPackage}>
        <LESOTHO
          tHAILAND="LESOTHO"
          propMinWidth="115px"
          destination="/destination1@2x.png"
          propMaxHeight="unset"
          propOverflow="unset"
          propBorder="none"
          propBackgroundColor="transparent"
          propHeight="300px"
          propOutline="none"
          phuketPhiPhiIsland={`CLARENS FS & AFRISKI`}
          propWidth="344.9px"
          r22500="R5 850"
          depositR5000="Deposit R1000"
          travelDates0712November05="Travel Dates    26-09 July |  23-25 August 2024"
          propLeft="0px"
          propWidth1="459.5px"
          propDisplay="inline-block"
          rdPartyIntegratio="Road Transport"
          propWidth2="unset"
          rdPartyIntegratio1="Afriski entrance fees"
          propFlex="unset"
          rdPartyIntegratio2="2 Nights stay"
          rdPartyIntegratio3="Snow activity"
          rdPartyIntegratio4="Golden gate highlands"
          rdPartyIntegratio5="Horse riding"
          group153="/group-153-11@2x.png"
        />
        <div className={styles.lesothoPackage1}>
          <div className={styles.namibiaWrapper}>
            <NAMIBIA
              unsplash7uXn7nudorc="/unsplash7uxn7nudorc-1@2x.png"
              windhoekWalvisBayAndSwako="Windhoek, Walvis Bay and Swakopmund "
              r37000="R15 850"
              base="/base-151@2x.png"
              base1="/base-161@2x.png"
              rdPartyIntegratio="Windhoek city tour"
              base2="/base-171@2x.png"
              base3="/base-181@2x.png"
              rdPartyIntegratio1="Transfers to Swakopmund"
              base4="/base-191@2x.png"
              rdPartyIntegratio2="Sandwich Harbour"
              base5="/base-201@2x.png"
              rdPartyIntegratio3="Horse riding"
              base6="/base-211@2x.png"
              rdPartyIntegratio4="Camel riding"
              base7="/base-22@2x.png"
              group153="/group-153-21@2x.png"
              arrowG002="/arrowg002-21@2x.png"
              nAMIBIA="NAMIBIA"
              depositR5000="Deposit R2000"
              travelDates2024September2="Travel Dates   20-24 September 2024"
              rdPartyIntegratio5="4 Nights hotel stay"
              rdPartyIntegratio6="Daily breakfast"
            />
          </div>
          <NAMIBIA
            propFlex="unset"
            propPadding="26.4px 20px 26.3px"
            propWidth="1354px"
            unsplash7uXn7nudorc="/victoriafallsvictoriafallszimbabwetravelphotographyaigenerated@2x.png"
            windhoekWalvisBayAndSwako="ZIMBABWE, ZAMBIA AND BOTSWANA"
            r37000="R16 900"
            base="/base-23@2x.png"
            base1="/base-24@2x.png"
            rdPartyIntegratio="Victoria falls tour"
            base2="/base-25@2x.png"
            base3="/base-26@2x.png"
            rdPartyIntegratio1="Day visit in Zambia and Botswana"
            propHeight="unset"
            propDisplay="unset"
            base4="/base-27@2x.png"
            rdPartyIntegratio2="Sunset cruise luxury deck"
            base5="/base-28@2x.png"
            rdPartyIntegratio3="The boma dinner  drum show"
            propHeight1="unset"
            propMaxHeight="21.7px"
            base6="/base-29@2x.png"
            rdPartyIntegratio4="Airport transfers"
            base7="/base-30@2x.png"
            group153="/group-153-3@2x.png"
            arrowG002="/arrowg002-3@2x.png"
            onArrowG002ImageClick={onArrowG002ImageClick}
            propHeight2="54.1px"
            propWidth1="64.8px"
            nAMIBIAMarginRight="unset"
            nAMIBIA="NAMIBIA"
            nAMIBIADisplay="inline-block"
            nAMIBIAMinWidth="106px"
            unsplash7uXn7nudorcIconWidth="556.1px"
            windhoekWalvisBayWidth="unset"
            depositR5000="Deposit R2000"
            travelDates2024September2="Travel Dates   20-24 September 2024"
            bathPadding="0px 0px 0.1px"
            barPadding="0px 0px 0.1px"
            wifiPadding="0px 0px 0.1px"
            namibiaAmenityLabelsPadding="0px 0px 0.1px"
            rdPartyIntegratio5="4 Nights hotel stay"
            rdPartyIntegratio6="Daily breakfast"
          />
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

export default Africa;
