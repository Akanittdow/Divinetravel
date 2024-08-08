import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./navbar2.module.css";

export type Navbar2Type = {
  className?: string;
};

const Navbar2: NextPage<Navbar2Type> = ({ className = "" }) => {
  const router = useRouter();

  const onMenuItemDefaultClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  const onMenuItemDefaultClick1 = useCallback(() => {
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
      <nav className={styles.menu}>
        <nav className={styles.headingName}>
          <a className={styles.label}>Home</a>
          <div
            className={styles.menuItemDefault}
            onClick={onMenuItemDefaultClick}
          >
            <a className={styles.label1}>About Us</a>
          </div>
          <div
            className={styles.menuItemDefault}
            onClick={onMenuItemDefaultClick1}
          >
            <a className={styles.label2}>Packages</a>
          </div>
        </nav>
      </nav>
      <div className={styles.login} onClick={onLoginContainerClick}>
        <div className={styles.button}>
          <a className={styles.signUp}>Contact Us</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar2;
