import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./navbar1.module.css";

export type Navbar1Type = {
  className?: string;

  /** Style props */
  letNextcentDoBackgroundImage?: CSSProperties["backgroundImage"];
  propTextDecoration?: CSSProperties["textDecoration"];
};

const Navbar1: NextPage<Navbar1Type> = ({
  className = "",
  letNextcentDoBackgroundImage,
  propTextDecoration,
}) => {
  const logoStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: letNextcentDoBackgroundImage,
    };
  }, [letNextcentDoBackgroundImage]);

  const signUpStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const router = useRouter();

  const onHeaderMenuDefaultClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMenuItemDefaultClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  const onMenuItemDefaultClick1 = useCallback(() => {
    router.push("/packages");
  }, [router]);

  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.logo} style={logoStyle}>
        <div className={styles.image92} />
        <div className={styles.letNextcentDo}>{` `}</div>
      </div>
      <nav className={styles.navbarInner}>
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
            <div
              className={styles.headerMenuDefault}
              onClick={onMenuItemDefaultClick1}
            >
              <a className={styles.label2}>Packages</a>
            </div>
          </nav>
        </nav>
      </nav>
      <div className={styles.loginWrapper}>
        <div className={styles.login}>
          <div className={styles.button}>
            <a className={styles.signUp} style={signUpStyle}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar1;
