import styles from "./Footer.module.css";

const footerLinks = {
  System: ["Architecture", "Telemetry Engine", "AI Engine", "MCP Server", "UI Console"],
  Support: ["Documentation", "Getting Started", "API Reference", "Community", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "Compliance", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" opacity="0.9"/>
              <rect x="13" y="2" width="9" height="9" rx="2" fill="currentColor" opacity="0.5"/>
              <rect x="2" y="13" width="9" height="9" rx="2" fill="currentColor" opacity="0.5"/>
              <rect x="13" y="13" width="9" height="9" rx="2" fill="currentColor" opacity="0.9"/>
            </svg>
            <span>AVOS</span>
          </a>
          <p className={styles.brandDesc}>
            AI-native industrial operating system for modern machine fleets. Industrial intelligence, delivered.
          </p>
          <div className={styles.protocols}>
            {["MQTT", "Modbus", "OPC-UA", "DNP3"].map((p) => (
              <span key={p} className={styles.protocolTag}>{p}</span>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className={styles.col}>
            <h4 className={styles.colHeading}>{group}</h4>
            <ul className={styles.colLinks}>
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.colLink}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span className={styles.copy}>
              © {new Date().getFullYear()} AVOS Systems. All rights reserved.
            </span>
            <span className={styles.secure}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Secure Connection Verified · IEC 62443 · Plant Line Security
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
