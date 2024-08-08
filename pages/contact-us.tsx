import type { NextPage } from "next";
import Navbar1 from "../components/navbar1";
import DesignContactUs from "../components/design-contact-us";
import FooterBig from "../components/footer-big";
import styles from "./contact-us.module.css";

const ContactUs: NextPage = () => {
  return (
    <div className={styles.contactUs}>
      <section className={styles.navbarParent}>
        <Navbar1 />
        <div className={styles.packagesFront}>
          <div className={styles.bg}>
            <div className={styles.heroSection}>
              <div className={styles.packagesText}>
                <h1 className={styles.packages}>CONTACT US</h1>
              </div>
            </div>
          </div>
        </div>
        <DesignContactUs />
      </section>
      <section className={styles.bookingProcessParent}>
        <div className={styles.bookingProcess}>
          <div className={styles.bookingStepsContainer}>
            <div className={styles.bookingStepsContainer1}>
              <div className={styles.bookingStepsRow}>
                <div className={styles.bookingIntro}>
                  <img
                    className={styles.element2Icon}
                    loading="lazy"
                    alt=""
                    src="/element-2.svg"
                  />
                  <div className={styles.followTheseSimpleContainer}>
                    <span className={styles.followTheseSimpleContainer1}>
                      <p className={styles.followTheseSimple}>
                        Follow these simple steps to book your next trip with
                        Divine Travel Experience:
                      </p>
                    </span>
                  </div>
                </div>
                <h1 className={styles.readyToEmbark}>
                  Ready to Embark on an Unforgettable Journey?
                </h1>
              </div>
            </div>
            <div className={styles.stepOne}>
              <div className={styles.explorePackagesContainer}>
                <div className={styles.explorePackagesWrapper}>
                  <div className={styles.explorePackagesWrapperInner}>
                    <div className={styles.ellipseParent}>
                      <div className={styles.frameChild} />
                      <img
                        className={styles.receiptIcon}
                        loading="lazy"
                        alt=""
                        src="/receipt.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.explorePackages}>
                    Explore Packages:
                  </div>
                  <div className={styles.browseAndChooseContainer}>
                    Browse and choose through our wide range of travel packages
                    available on our 
                    <a
                      className={styles.packages1}
                      href="https://www.figma.com/design/beRD2lPap7HBsusvX13jhy?node-id=273-859"
                      target="_blank"
                    >
                      <span className={styles.packages2}>Packages</span>
                    </a>
                     page.
                  </div>
                </div>
                <div className={styles.explorePackagesContainerInner}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/vector-5.svg"
                  />
                </div>
              </div>
              <div className={styles.submitRequestContainerWrapper}>
                <div className={styles.submitRequestContainer}>
                  <div className={styles.submitRequestWrapper}>
                    <div className={styles.submitRequestRow}>
                      <img
                        className={styles.timerStartIcon}
                        loading="lazy"
                        alt=""
                        src="/timerstart.svg"
                      />
                    </div>
                    <div className={styles.submitRequestTitle}>
                      <div className={styles.submitRequestHeading}>
                        <div className={styles.submitYourBooking}>
                          Submit Your Booking Request:
                        </div>
                      </div>
                      <div className={styles.clickOnThe}>
                        Click on the "Book Now" button for your selected package
                        and fill in your details, our consultant will contact
                        you.
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.submitRequestContainerChild}
                    loading="lazy"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
              </div>
              <div className={styles.stepThree}>
                <div className={styles.makePaymentContainer}>
                  <div className={styles.makePaymentWrapper}>
                    <div className={styles.makePaymentRow}>
                      <div className={styles.makePaymentIcon}>
                        <div className={styles.paymentIcon} />
                      </div>
                      <img
                        className={styles.iconCreditCard}
                        loading="lazy"
                        alt=""
                        src="/-icon-credit-card.svg"
                      />
                    </div>
                    <div className={styles.makePaymentTitle}>
                      <div className={styles.makePayment}>Make Payment</div>
                    </div>
                  </div>
                  <div className={styles.makePaymentDescription}>
                    <div className={styles.onceYourBooking}>
                      Once your booking is confirmed, you will receive an
                      invoice with payment details.
                    </div>
                  </div>
                </div>
                <img
                  className={styles.submitRequestContainerChild}
                  loading="lazy"
                  alt=""
                  src="/vector-7.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.stepFour}>
            <div className={styles.stepFourContent}>
              <div className={styles.ellipseParent}>
                <div className={styles.checkIcon} />
                <img
                  className={styles.iconCheck}
                  loading="lazy"
                  alt=""
                  src="/-icon-check.svg"
                />
              </div>
            </div>
            <div className={styles.confirmationContainer}>
              <div className={styles.receiveConfirmation}>
                Receive Confirmation
              </div>
            </div>
            <div className={styles.afterThePayment}>
              After the payment is received, you will get a booking confirmation
              email with all the trip details.
            </div>
          </div>
        </div>
        <FooterBig image92="/image-92@2x.png" />
      </section>
    </div>
  );
};

export default ContactUs;
