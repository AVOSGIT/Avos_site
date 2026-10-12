"use client";

import styles from "./CTASection.module.css";
import { openContactMail } from "@/lib/contact";

export default function CTASection() {
  const handleWalkthroughClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openContactMail("Walkthrough Request - AVOS IoT Platform");
  };

  return (
    <section className={styles.section} id="cta">
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <p className="label-muted">Modernize Now</p>
        <h2 className={styles.heading}>
          Ready to modernize your<br />industrial operations?
        </h2>
        <p className={styles.sub}>
          Book a 15-minute architecture walk-through with our platform engineers.
        </p>
        <div className={styles.ctas}>
          <a
            href="#contact"
            className="btn btn-primary"
            id="cta-book-walkthrough"
            onClick={handleWalkthroughClick}
          >
            Book 15-Min Walkthrough
          </a>
        </div>
      </div>
    </section>
  );
}
