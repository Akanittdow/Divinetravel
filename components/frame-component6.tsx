import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Navbar from "./navbar";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <section className={[styles.navbarParent, className].join(" ")}>
      <Navbar onButtonClick={onButtonContainerClick} />
      <div className={styles.bg}>
        <div className={styles.heroSection}>
          <div className={styles.packagesText}>
            <h1 className={styles.packages}>Packages</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
