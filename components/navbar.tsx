import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";

export type NavbarType = {
  className?: string;

  /** Style props */
  letNextcentDoBackgroundImage?: CSSProperties["backgroundImage"];

  /** Action props */
  onButtonClick?: () => void;
};

const Navbar: NextPage<NavbarType> = ({
  className = "",
  letNextcentDoBackgroundImage,
  onButtonClick,
}) => {
  const logo1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: letNextcentDoBackgroundImage,
    };
  }, [letNextcentDoBackgroundImage]);

  const router = useRouter();

  const onHeaderMenuDefaultClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMenuItemDefaultClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.logo} style={logo1Style}>
        <div className={styles.image92} />
        <div className={styles.letNextcentDo}>{` `}</div>
      </div>
      <nav className={styles.menuWrapper}>
        <nav className={styles.headingNameWrapper}>
          <nav className={styles.headingName}>
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
            <div className={styles.menuItemDefault1}>
              <a className={styles.label2}>Packages</a>
            </div>
          </nav>
        </nav>
      </nav>
      <div className={styles.navLinks}>
        <div className={styles.login}>
          <div className={styles.button} onClick={onButtonClick}>
            <a className={styles.signUp}>Contact Us</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
