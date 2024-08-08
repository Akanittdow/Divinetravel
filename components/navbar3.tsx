import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./navbar3.module.css";

export type Navbar3Type = {
  className?: string;
};

const Navbar3: NextPage<Navbar3Type> = ({ className = "" }) => {
  const router = useRouter();

  const onHeaderMenuDefaultClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onMenuItemDefaultClick = useCallback(() => {
    router.push("/packages");
  }, [router]);

  const onLoginContainerClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.logo}>
        <div className={styles.image92} />
        <div className={styles.letNextcentDo}>{` `}</div>
      </div>
      <nav className={styles.navLinks}>
        <nav className={styles.headingNameWrapper}>
          <nav className={styles.headingName}>
            <div
              className={styles.headerMenuDefault}
              onClick={onHeaderMenuDefaultClick}
            >
              <a className={styles.label}>Home</a>
            </div>
            <div className={styles.menuItemDefault}>
              <a className={styles.label1}>About Us</a>
            </div>
            <div
              className={styles.headerMenuDefault}
              onClick={onMenuItemDefaultClick}
            >
              <a className={styles.label2}>Packages</a>
            </div>
          </nav>
        </nav>
      </nav>
      <div className={styles.navigationMenu}>
        <div className={styles.login} onClick={onLoginContainerClick}>
          <div className={styles.button}>
            <div className={styles.signUp}>Contact Us</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar3;
