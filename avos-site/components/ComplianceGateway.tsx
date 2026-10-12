import React from "react";
import styles from "./ComplianceGateway.module.css";

const complianceHighlights = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Direct Regulatory Push",
    desc: "Data is transmitted directly from on-site RTU hardware to CPCB or SPCB servers based on statutory requirements — with zero intermediate tampering.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Tamper-Proof Edge RTU",
    desc: "Industrial-grade hardware with immutable logs, 4GB+ offline storage buffer, and automatic back-fill the moment network connectivity recovers.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <polyline points="8 21 12 17 16 21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "CEMS & OCEMS Integration",
    desc: "Ready out of the box for stack gas analyzers (PM, SO₂, NOₓ, CO) and effluent monitors (pH, COD, BOD, TSS, Flow) via standard RS-485 Modbus.",
  },
];

export default function ComplianceGateway() {
  return (
    <section className={styles.section} id="compliance">
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <p className="label">Compliance as a Service</p>
          <h2 className={styles.heading}>
            CPCB & SPCB Regulatory Telemetry
          </h2>
          <p className={styles.sub}>
            AVOS provides direct, automated regulatory compliance for industrial plants. Our on-site RTU
            gateway interfaces with analyzers via RS-485 and transmits certified data directly to CPCB or SPCB
            servers based on plant requirements.
          </p>
        </div>

        {/* Compact Flow Pipeline */}
        <div className={styles.pipeline}>
          {/* Header Status */}
          <div className={styles.pipelineHeader}>
            <div className={styles.statusIndicator}>
              <span className={styles.pulseDot} />
              <span className={styles.statusTitle}>COMPLIANCE DATA TRANSMISSION</span>
            </div>
            <span className={styles.statusSubtitle}>
              RS-485 Modbus → Edge RTU → Direct Government Push
            </span>
          </div>

          {/* 3-Step Uniform Flow */}
          <div className={styles.flowTrack}>
            {/* Step 1: Sensors */}
            <div className={styles.nodeCard}>
              <div className={styles.nodeTop}>
                <span className={styles.nodeStep}>01 · FIELD LAYER</span>
                <span className={styles.nodeLed} />
              </div>

              <div className={styles.nodeMain}>
                <span className={styles.nodeIcon}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M2 12h4M18 12h4M12 2v4M12 18v4" />
                  </svg>
                </span>
                <h4 className={styles.nodeTitle}>Analyzers & Sensors</h4>
              </div>

              <p className={styles.nodeRole}>CEMS & OCEMS Stack & Effluent Monitors</p>

              <div className={styles.nodeBottom}>
                <span className={styles.nodeSpec}>Modbus RTU · 4–20mA</span>
                <span className={styles.nodeRate}>Raw Analyzer Feed</span>
              </div>
            </div>

            {/* Conduit 1: RS-485 */}
            <div className={styles.conduit} aria-hidden="true">
              <span className={styles.conduitTag}>RS-485</span>
              <div className={styles.conduitLine} />
              <div className={`${styles.photon} ${styles.photon1}`} />
              <div className={`${styles.photon} ${styles.photon2}`} />
              <span className={styles.conduitArrow}>›</span>
            </div>

            {/* Step 2: AVOS RTU */}
            <div className={`${styles.nodeCard} ${styles.nodeCardActive}`}>
              <div className={styles.nodeTop}>
                <span className={styles.nodeStepActive}>02 · EDGE HARDWARE</span>
                <span className={styles.nodeLedActive} />
              </div>

              <div className={styles.nodeMain}>
                <span className={`${styles.nodeIcon} ${styles.nodeIconActive}`}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M16 9h2M16 12h2M16 15h2" />
                    <rect x="5" y="8" width="7" height="8" rx="1" />
                  </svg>
                </span>
                <h4 className={styles.nodeTitleActive}>AVOS RTU Gateway</h4>
              </div>

              <p className={styles.nodeRoleActive}>On-Site Certified Tamper-Proof Unit</p>

              <div className={styles.nodeBottomActive}>
                <span className={styles.nodeSpecActive}>4GB Buffer · Dual-SIM 4G</span>
                <span className={styles.nodeRateActive}>Auto Back-Fill</span>
              </div>
            </div>

            {/* Conduit 2: Direct Uplink */}
            <div className={styles.conduit} aria-hidden="true">
              <span className={styles.conduitTagGreen}>Direct Push</span>
              <div className={`${styles.conduitLine} ${styles.conduitLineGreen}`} />
              <div className={`${styles.photon} ${styles.photonGreen} ${styles.photon1}`} />
              <div className={`${styles.photon} ${styles.photonGreen} ${styles.photon2}`} />
              <span className={`${styles.conduitArrow} ${styles.conduitArrowGreen}`}>›</span>
            </div>

            {/* Step 3: CPCB / SPCB */}
            <div className={`${styles.nodeCard} ${styles.nodeCardDest}`}>
              <div className={styles.nodeTop}>
                <span className={styles.nodeStep}>03 · REGULATORY</span>
                <span className={styles.nodeLedGreen} />
              </div>

              <div className={styles.nodeMain}>
                <span className={`${styles.nodeIcon} ${styles.nodeIconDest}`}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </span>
                <h4 className={styles.nodeTitle}>CPCB / SPCB Servers</h4>
              </div>

              <p className={styles.nodeRole}>Direct to Central or State Board</p>

              <div className={styles.nodeBottom}>
                <span className={styles.nodeSpec}>Mandate-Based Routing</span>
                <span className={styles.nodeRate}>HTTPS · TLS 1.3</span>
              </div>
            </div>
          </div>

          {/* Simple Parameters Strip */}
          <div className={styles.paramsRow}>
            <span className={styles.paramsLabel}>SUPPORTED PARAMETERS:</span>
            <div className={styles.paramChips}>
              <span className={styles.chip}>PM</span>
              <span className={styles.chip}>SO₂</span>
              <span className={styles.chip}>NOₓ</span>
              <span className={styles.chip}>CO</span>
              <span className={styles.chipEffluent}>pH</span>
              <span className={styles.chipEffluent}>COD</span>
              <span className={styles.chipEffluent}>BOD</span>
              <span className={styles.chipEffluent}>TSS</span>
              <span className={styles.chipEffluent}>Flow</span>
            </div>
          </div>
        </div>

        {/* 3 Simple Value Proposition Cards */}
        <div className={styles.grid}>
          {complianceHighlights.map((item) => (
            <div key={item.title} className={styles.card}>
              <span className={styles.cardIcon}>{item.icon}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
