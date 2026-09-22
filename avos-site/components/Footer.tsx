import styles from "./Footer.module.css";

const footerLinks = {
  Platform: [
    { label: "Architecture", href: "#architecture" },
    { label: "Telemetry Engine", href: "#architecture" },
    { label: "AI Engine", href: "#architecture" },
    { label: "MCP Server", href: "#architecture" },
    { label: "UI Console", href: "#architecture" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
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
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className={styles.col}>
              <h4 className={styles.colHeading}>{group}</h4>
              <ul className={styles.colLinks}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.colLink}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <span className={styles.copy}>AVOS IoT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
