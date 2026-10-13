"use client";

import styles from "./Footer.module.css";
import { CONTACT_DISPLAY, openContactMail } from "@/lib/contact";

export default function Footer() {
  const handleContactClick = (e: React.MouseEvent, subject: string) => {
    e.preventDefault();
    openContactMail(subject);
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="/" className={styles.logo} aria-label="AVOS IoT Home">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" role="img" aria-label="AVOS Logo">
              <title>AVOS Logo</title>
              <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" opacity="0.9"/>
              <rect x="13" y="2" width="9" height="9" rx="2" fill="currentColor" opacity="0.5"/>
              <rect x="2" y="13" width="9" height="9" rx="2" fill="currentColor" opacity="0.5"/>
              <rect x="13" y="13" width="9" height="9" rx="2" fill="currentColor" opacity="0.9"/>
            </svg>
            <span>AVOS</span>
          </a>
          <p className={styles.brandDesc}>
            AI-powered IoT platform for modern machine fleets. Industrial intelligence, delivered.
          </p>
          <div className={styles.protocols}>
            {["MQTT", "Modbus", "OPC-UA", "DNP3"].map((p) => (
              <span key={p} className={styles.protocolTag}>{p}</span>
            ))}
          </div>
        </div>

        {/* Link columns container */}
        <div className={styles.linksGroup}>
          {/* Platform Links */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Platform</h4>
            <ul className={styles.colLinks}>
              <li><a href="#architecture" className={styles.colLink}>Architecture</a></li>
              <li><a href="#architecture" className={styles.colLink}>Telemetry Engine</a></li>
              <li><a href="#architecture" className={styles.colLink}>AI Engine</a></li>
              <li><a href="#architecture" className={styles.colLink}>MCP Server</a></li>
              <li><a href="#compliance" className={styles.colLink}>Compliance</a></li>
            </ul>
          </div>

          {/* Contact Column with Bot-Safe Obfuscation */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Contact</h4>
            <ul className={styles.colLinks}>
              {/* <li>
                <a
                  href="#contact"
                  className={styles.colLink}
                  onClick={(e) => handleContactClick(e, "General Inquiry - AVOS IoT")}
                  title="Click to email our team"
                >
                  {CONTACT_DISPLAY}
                </a>
              </li> */}
              <li>
                <a
                  href="#contact"
                  className={styles.colLink}
                  onClick={(e) => handleContactClick(e, "Demo Request - AVOS IoT Platform")}
                >
                  Request a Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Legal</h4>
            <ul className={styles.colLinks}>
              <li><a href="/privacy" className={styles.colLink}>Privacy Policy</a></li>
              <li><a href="/terms" className={styles.colLink}>Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span className={styles.copy}>AVOS IoT</span>
            <span
              className={styles.copy}
              style={{ color: "var(--color-text-3)", fontSize: "0.75rem", cursor: "pointer" }}
              onClick={(e) => handleContactClick(e, "General Inquiry - AVOS IoT")}
              title="Click to email our team"
            >
              {CONTACT_DISPLAY}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
