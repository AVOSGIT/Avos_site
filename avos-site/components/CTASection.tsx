"use client";

import styles from "./CTASection.module.css";

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 70;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function CTASection() {
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
            href="mailto:demo@avos.io?subject=Demo%20Request%20-%20AVOS%20Architecture%20Walkthrough"
            className="btn btn-primary"
            id="cta-book-walkthrough"
          >
            Book 15-Min Walkthrough
          </a>
          <a
            href="#specs"
            className="btn btn-ghost"
            id="cta-read-specs"
            onClick={(e) => { e.preventDefault(); scrollToHash("#specs"); }}
          >
            Read Technical Specs
          </a>
        </div>
      </div>
    </section>
  );
}
