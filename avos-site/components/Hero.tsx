"use client";

import styles from "./Hero.module.css";

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 70;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

const protocols = ["MQTT", "Modbus", "OPC-UA", "HTTP", "CoAP", "DNP3"];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background grid */}
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.gradientBlob} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Top status */}
        <div className={styles.statusRow}>
          <span className="status-badge">Platform Status · Active &amp; Connected</span>
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          Turn Industrial Telemetry<br />
          into <span className={styles.accent}>Autonomous Action.</span>
        </h1>

        <p className={styles.sub}>
          The AI-powered IoT platform for modern machine fleets. Connect any PLC or sensor,
          monitor in real time, and talk to your operations in plain English.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a
            href="#cta"
            className="btn btn-primary"
            id="hero-request-demo"
            onClick={(e) => { e.preventDefault(); scrollToHash("#cta"); }}
          >
            Request a Demo
          </a>
          <a
            href="#architecture"
            className="btn btn-ghost"
            id="hero-explore-arch"
            onClick={(e) => { e.preventDefault(); scrollToHash("#architecture"); }}
          >
            Explore the Architecture / Docs →
          </a>
        </div>

        {/* Protocol badges */}
        <div className={styles.protocolRow}>
          <span className="label-muted">Industrial IoT Connectivity &amp; Ingestion</span>
          <div className={styles.protocols}>
            {protocols.map((p) => (
              <span key={p} className={styles.protocolBadge}>
                <span className={styles.protocolDot} />
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
