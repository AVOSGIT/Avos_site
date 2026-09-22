import React from "react";
import styles from "./Architecture.module.css";

const engines = [
  {
    num: "01",
    title: "Industrial IoT Telemetry Engine",
    desc: "Modbus & DNP3 variables ingested at the microsecond level directly from active PLCs.",
  },
  {
    num: "02",
    title: "Multi-Agent Intelligence Engine",
    desc: "Asynchronous neural nodes computing plant metrics to execute predictive controls.",
  },
  {
    num: "03",
    title: "MCP Industrial Server",
    desc: "Local context broker parsing raw liberated outputs into human-addressable telemetry assets.",
  },
  {
    num: "04",
    title: "AVOS UI Console",
    desc: "High-density charts, real-time command terminal, and alert panel access controls.",
  },
];

const workflowNodes = [
  {
    step: "01",
    title: "PLC / SENSOR",
    role: "Edge Signal Capture",
    spec: "Modbus · OPC-UA",
    rate: "10 kHz Raw",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
        <circle cx="18" cy="6" r="1" fill="currentColor" />
        <circle cx="18" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "TELEMETRY",
    role: "Real-Time Ingestion",
    spec: "MQTT · Time-Series",
    rate: "128k msgs/s",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "AI ENGINE",
    role: "Neural Inference",
    spec: "Anomaly Scoring",
    rate: "0.8ms Latency",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "MCP SERVER",
    role: "Context Broker",
    spec: "Dynamic Tools",
    rate: "JSON-RPC Bus",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "UI CONSOLE",
    role: "Autonomous Action",
    spec: "Closed-Loop Act",
    rate: "Zero Latency",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="m7 8 3 2-3 2" />
        <line x1="12" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
];

export default function Architecture() {
  return (
    <section className={styles.section} id="architecture">
      <div className="container">
        <p className="label">Platform Architecture</p>
        <h2 className={styles.heading}>
          Under the Hood: The AVOS Architecture
        </h2>
        <p className={styles.sub}>
          Four tightly integrated engines working in concert — from raw signal acquisition to autonomous control.
        </p>

        <div className={styles.grid}>
          {engines.map((e) => (
            <div key={e.num} className={styles.card}>
              <span className={styles.num}>{e.num}</span>
              <h3 className={styles.cardTitle}>{e.title}</h3>
              <p className={styles.cardDesc}>{e.desc}</p>
            </div>
          ))}
        </div>

        {/* Live Signal Flow Pipeline */}
        <div className={styles.pipeline}>
          {/* Top Bar: Pipeline Telemetry Status */}
          <div className={styles.pipelineHeader}>
            <div className={styles.pipelineStatus}>
              <span className={styles.pulseBeacon}>
                <span className={styles.pulseBeaconCore} />
                <span className={styles.pulseBeaconRing} />
              </span>
              <span className={styles.pipelineStatusText}>LIVE DATA PIPELINE</span>
              <span className={styles.pipelineTag}>ACTIVE STREAM</span>
            </div>
            <div className={styles.pipelineMetrics}>
              <span className={styles.metricItem}>
                <span className={styles.metricLabel}>THROUGHPUT:</span>
                <span className={styles.metricValue}>128.4k msg/s</span>
              </span>
              <span className={styles.metricDivider}>·</span>
              <span className={styles.metricItem}>
                <span className={styles.metricLabel}>LATENCY:</span>
                <span className={styles.metricValue}>0.38ms</span>
              </span>
              <span className={styles.metricDivider}>·</span>
              <span className={styles.metricItem}>
                <span className={styles.metricLabel}>EDGE BUS:</span>
                <span className={styles.metricHighlight}>VERIFIED</span>
              </span>
            </div>
          </div>

          {/* Workflow Nodes & Horizontally Centered Conduits */}
          <div className={styles.flowTrack}>
            {workflowNodes.map((node, i) => (
              <React.Fragment key={node.step}>
                {/* Node Card */}
                <div className={styles.nodeCard}>
                  <div className={styles.nodeTop}>
                    <span className={styles.nodeStep}>STEP {node.step}</span>
                    <span className={styles.nodeLed} />
                  </div>

                  <div className={styles.nodeMain}>
                    <span className={styles.nodeIcon}>{node.icon}</span>
                    <h4 className={styles.nodeTitle}>{node.title}</h4>
                  </div>

                  <p className={styles.nodeRole}>{node.role}</p>

                  <div className={styles.nodeBottom}>
                    <span className={styles.nodeSpec}>{node.spec}</span>
                    <span className={styles.nodeRate}>{node.rate}</span>
                  </div>

                  <div className={styles.nodeGlow} />
                </div>

                {/* Animated Horizontal Conduit (in between cards) */}
                {i < workflowNodes.length - 1 && (
                  <div className={styles.conduit} aria-hidden="true">
                    <div className={styles.conduitLine} />
                    <div className={`${styles.photon} ${styles.photon1}`} />
                    <div className={`${styles.photon} ${styles.photon2}`} />
                    <span className={styles.conduitArrow}>›</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom Telemetry Waveform Stream */}
          <div className={styles.waveformRow}>
            <span className={styles.waveformLabel}>SIGNAL BUS FREQUENCY</span>
            <div className={styles.waveformWrapper}>
              <svg className={styles.waveformSvg} viewBox="0 0 1000 32" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.2" />
                    <stop offset="30%" stopColor="#00d4aa" stopOpacity="0.8" />
                    <stop offset="60%" stopColor="#00ff88" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  className={styles.waveformPulse}
                  d="M0,16 L120,16 L130,6 L140,26 L150,16 L320,16 L330,4 L340,28 L350,16 L540,16 L550,8 L560,24 L570,16 L760,16 L770,3 L780,29 L790,16 L1000,16"
                  fill="none"
                  stroke="url(#waveGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className={styles.waveformBadge}>AUTONOMOUS DISPATCH: READY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
