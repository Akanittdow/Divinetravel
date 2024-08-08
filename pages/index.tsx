import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Home1 from "../components/home1";
import Mozambique from "../components/mozambique";
import CAPETOWN from "../components/c-a-p-e-t-o-w-n";
import AboutUs from "../components/about-us";
import Achievements from "../components/achievements";
import WhyChooseUs from "../components/why-choose-us";
import Button from "../components/button";
import FooterBig from "../components/footer-big";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  const onBtnClick = useCallback(() => {
    router.push("/mzansi");
  }, [router]);

  const onBtnClick1 = useCallback(() => {
    router.push("/international");
  }, [router]);

  const onSocialIconsClick = useCallback(() => {
    window.open(
      "https://www.instagram.com/divine_travelexperience?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    );
  }, []);

  const onHeaderMenuDefaultClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMenuItemDefaultClick = useCallback(() => {
    router.push("/packages");
  }, [router]);

  const onLoginContainerClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onDestinationContainerClick = useCallback(() => {
    router.push("/africa");
  }, [router]);

  return (
    <div className={styles.home}>
      <section className={styles.navAndHeroWrapper}>
        <div className={styles.navAndHero}>
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
                <a className={styles.label1}>About Us</a>
                <div
                  className={styles.headerMenuDefault}
                  onClick={onMenuItemDefaultClick}
                >
                  <a className={styles.label2}>Packages</a>
                </div>
              </nav>
            </nav>
            <div className={styles.loginWrapper}>
              <div className={styles.login} onClick={onLoginContainerClick}>
                <div className={styles.button}>
                  <a className={styles.signUp}>Contact Us</a>
                </div>
              </div>
            </div>
          </header>
          <Home1 />
        </div>
      </section>
      <section className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.sectionTitleWrapper}>
            <h1 className={styles.sectionTitle}>UPCOMING TRIPS</h1>
          </div>
          <div className={styles.description}>
            Explore our range of packages
          </div>
        </div>
        <div className={styles.packagesWrapper}>
          <div className={styles.packages}>
            <Mozambique
              mOZAMBIQUE="MOZAMBIQUE"
              unsplash7uXn7nudorc="/unsplash7uxn7nudorc2@2x.png"
              depositR1000="Deposit R1000"
              sept2024="06-09 Sept 2024"
              dec2024="14-17 Dec 2024"
              r7200Person="R7 200/Person"
            />
            <Mozambique
              mOZAMBIQUE="ZANZIBAR"
              propDisplay="inline-block"
              propMinWidth="125px"
              propWidth="unset"
              unsplash7uXn7nudorc="/unsplash7uxn7nudorc-11@2x.png"
              depositR1000="Deposit R2000"
              sept2024="08-12 Aug 2024"
              propLeft="101px"
              dec2024="13-17 Dec 2024"
              r7200Person="R18 550/Person"
            />
            <Mozambique
              mOZAMBIQUE="NAMIBIA"
              propDisplay="inline-block"
              propMinWidth="unset"
              propWidth="116.1px"
              unsplash7uXn7nudorc="/unsplash7uxn7nudorc-2@2x.png"
              depositR1000="Deposit R2000"
              sept2024="20-24 Sept 2024"
              propLeft="96.7px"
              dec2024="13-17 Dec 2024"
              r7200Person="R15 850/Person"
            />
            <CAPETOWN
              cAPETOWN="CAPE TOWN"
              unsplash7uXn7nudorc="/unsplash7uxn7nudorc-3@2x.png"
              depositR1000="Deposit R1000"
              dec202402Jan2025="30 Dec 2024 - 02 Jan 2025"
              r10800Person="R10 800/Person"
              onBtnClick1={onBtnClick}
            />
            <CAPETOWN
              cAPETOWN="MAURITIUS"
              propDisplay="unset"
              propMinWidth="unset"
              unsplash7uXn7nudorc="/unsplash7uxn7nudorc-4@2x.png"
              depositR1000="Deposit R3000"
              dec202402Jan2025="24-28 Sept 2024"
              propLeft="99px"
              propWidth="113.4px"
              propDisplay1="inline-block"
              r10800Person="R21 000/Person"
              onBtnClick1={onBtnClick1}
            />
            <CAPETOWN
              cAPETOWN="DUBAI"
              propDisplay="inline-block"
              propMinWidth="76px"
              unsplash7uXn7nudorc="/unsplash7uxn7nudorc-5@2x.png"
              depositR1000="Deposit R3500"
              dec202402Jan2025="19 - 24 September 2024"
              propLeft="98.1px"
              propWidth="unset"
              propDisplay1="unset"
              r10800Person="R27 000/Person"
              onBtnClick1={onBtnClick1}
            />
          </div>
        </div>
      </section>
      <AboutUs />
      <Achievements />
      <section className={styles.whyChoose}>
        <WhyChooseUs />
        <div className={styles.destinationsYouShoudNotMisWrapper}>
          <div className={styles.destinationsYouShoudNotMis}>
            <div className={styles.community}>
              <h1 className={styles.sectionTitle1}>
                <span>DESTINATIONS</span>
                <span className={styles.youShouldntMiss}>
                  {" "}
                  YOU SHOULDN’T MISS
                </span>
              </h1>
            </div>
            <div className={styles.destinationGrid}>
              <div className={styles.destination} onClick={onBtnClick}>
                <h2 className={styles.mscCruise}>MSC Cruise</h2>
              </div>
              <div className={styles.destination1} onClick={onBtnClick1}>
                <h2 className={styles.thailand}>Thailand</h2>
              </div>
              <div
                className={styles.destination2}
                onClick={onDestinationContainerClick}
              >
                <h2 className={styles.lesotho}>Lesotho</h2>
              </div>
              <div className={styles.destination3} onClick={onBtnClick}>
                <h2 className={styles.mscCruise}>Mpumalanga</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.cientsWrapper}>
        <div className={styles.cients}>
          <div className={styles.clients}>
            <h1 className={styles.sectionTitle2}>
              WHAT OUR CLIENTS ARE SAYING
            </h1>
          </div>
          <div className={styles.clientsTestmonies}>
            <div className={styles.testimonial}>
              <div className={styles.client1}>
                <div className={styles.clientInfo}>
                  <img
                    className={styles.clientImageIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-14@2x.png"
                  />
                  <div className={styles.clientName}>
                    <div className={styles.thabisoMolefe}>
                      Rhandzu Makhubele
                    </div>
                  </div>
                </div>
                <img className={styles.ratingsIcon} alt="" src="/ratings.svg" />
                <div className={styles.theScholarshipService}>
                  Thank you for hosting me, enjoyed every moment of your trip
                  and hospitality. will definitely be seeing you soon in a
                  different location.
                </div>
              </div>
            </div>
            <div className={styles.testimonial1}>
              <div className={styles.client4}>
                <div className={styles.clientInfo1}>
                  <img
                    className={styles.imgIcon}
                    loading="lazy"
                    alt=""
                    src="/img@2x.png"
                  />
                  <div className={styles.clientName1}>
                    <div className={styles.thabisoMolefe1}>
                      <p className={styles.jamelaShingange}>Jamela Shingange</p>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.ratingsIcon1}
                  alt=""
                  src="/ratings-1.svg"
                />
                <blockquote className={styles.theScholarshipService1}>
                  "Our Namibia adventure was perfect, thanks to Divine Travel
                  Experience. The professional guidance and well-curated
                  itinerary made our trip stress-free and enjoyable. A must-try
                  travel agency!"
                </blockquote>
              </div>
            </div>
            <div className={styles.testimonial2}>
              <div className={styles.client2}>
                <div className={styles.clientInfo2}>
                  <img
                    className={styles.clientImageIcon1}
                    alt=""
                    src="/rectangle-14-1@2x.png"
                  />
                  <div className={styles.clientName2}>
                    <div className={styles.thabisoMolefe2}>
                      Princess Mnyakeni
                    </div>
                  </div>
                </div>
                <img
                  className={styles.ratingsIcon1}
                  alt=""
                  src="/ratings-2.svg"
                />
                <div className={styles.theScholarshipService2}>
                  Mozambique was fun, it was the best crossover ever!
                </div>
              </div>
            </div>
            <div className={styles.testimonial3}>
              <div className={styles.client6}>
                <div className={styles.clientInfo3}>
                  <img
                    className={styles.clientImageIcon1}
                    alt=""
                    src="/rectangle-14-2@2x.png"
                  />
                  <div className={styles.clientName3}>
                    <div className={styles.thabisoMolefe1}>
                      <p className={styles.jamelaShingange}>Lorato Molefe</p>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.ratingsIcon1}
                  alt=""
                  src="/ratings-3.svg"
                />
                <blockquote className={styles.theScholarshipService3}>
                  "Divine Travel Experience turned our Maputo getaway into a
                  memorable journey. Their expertise and local insights ensured
                  we had a fantastic time exploring the best spots in
                  Mozambique."
                </blockquote>
              </div>
            </div>
            <div className={styles.client3}>
              <div className={styles.clientContainer}>
                <img
                  className={styles.clientImageIcon3}
                  alt=""
                  src="/rectangle-14-3@2x.png"
                />
                <div className={styles.clientName4}>
                  <div className={styles.thabisoMolefe4}>
                    <p className={styles.jamelaShingange}>Thabiso Molefe</p>
                  </div>
                </div>
              </div>
              <img
                className={styles.ratingsIcon1}
                alt=""
                src="/ratings-4.svg"
              />
              <blockquote className={styles.theScholarshipService4}>
                "A huge thank you to Divine Travel Experience for making our
                Zanzibar vacation unforgettable. The itinerary was perfectly
                planned, and we got to explore so many hidden gems. Highly
                recommend!"
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.newsletter}>
        <div className={styles.footerContent}>
          <div className={styles.letNextcentDoContainer}>
            <span>{`Contact Us Today and Start Your Journey with `}</span>
            <span className={styles.divine}>Divine</span>
            <span> Travel Experience!</span>
          </div>
          <div className={styles.button1} onClick={onLoginContainerClick}>
            <Button />
          </div>
        </div>
      </section>
      <FooterBig
        onSocialIconsClick={onSocialIconsClick}
        propTextDecoration="none"
        propTextDecoration1="unset"
        image92="/image-92@2x.png"
      />
    </div>
  );
};

export default Home;
