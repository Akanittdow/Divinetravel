import type { NextPage } from "next";
import FrameComponent8 from "../components/frame-component8";
import LESOTHO from "../components/l-e-s-o-t-h-o";
import FrameComponent9 from "../components/frame-component9";
import FooterBig from "../components/footer-big";
import styles from "./international.module.css";

const International: NextPage = () => {
  return (
    <div className={styles.international}>
      <FrameComponent8 />
      <LESOTHO
        tHAILAND="THAILAND"
        destination="/destination@2x.png"
        phuketPhiPhiIsland="Phuket phi phi island"
        r22500="R22 500"
        depositR5000="Deposit R3500"
        travelDates0712November05={`Travel Dates    07-12 November |  05-09 & 13-17 December 2024`}
        rdPartyIntegratio="Return flights"
        rdPartyIntegratio1="Phuket city tour"
        rdPartyIntegratio2="5 nights hotel stay"
        rdPartyIntegratio3="Patong beach"
        rdPartyIntegratio4="Elephant trekking"
        rdPartyIntegratio5="Yona beach"
        group153="/group-153-1@2x.png"
      />
      <FrameComponent9 />
      <FooterBig
        propTextDecoration="none"
        propTextDecoration1="unset"
        image92="/image-92@2x.png"
      />
    </div>
  );
};

export default International;
