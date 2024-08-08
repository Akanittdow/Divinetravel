import type { NextPage } from "next";
import Navbar3 from "../components/navbar3";
import FrameComponent from "../components/frame-component";
import FrameComponent3 from "../components/frame-component3";
import Khensani from "../components/khensani";
import Khanyisa from "../components/khanyisa";
import WhyChooseUs1 from "../components/why-choose-us1";
import FrameComponent5 from "../components/frame-component5";
import FooterBig from "../components/footer-big";
import styles from "./about.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.about}>
      <Navbar3 />
      <section className={styles.bg}>
        <div className={styles.heroSection}>
          <div className={styles.packagesText}>
            <h1 className={styles.packages}>About</h1>
          </div>
        </div>
      </section>
      <FrameComponent />
      <FrameComponent3 />
      <section className={styles.khensaniParent}>
        <Khensani />
        <Khanyisa />
      </section>
      <WhyChooseUs1 />
      <FrameComponent5 />
      <FooterBig
        propTextDecoration="unset"
        propTextDecoration1="unset"
        image92="/image-92@2x.png"
      />
    </div>
  );
};

export default About;
