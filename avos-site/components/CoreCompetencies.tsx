import styles from "./CoreCompetencies.module.css";

const cards = [
  {
    tag: "Natural Intelligence",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="7" height="7" rx="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5"/>
      </svg>
    ),
    title: "Natural Language Fleet Control",
    desc: "Talk to your equipment without learning proprietary interfaces. Translate SQL, histograms, and PLC states into clear insights on any device.",
  },
  {
    tag: "Industrial Link",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    title: "Multi-Protocol Edge-to-Cloud",
    desc: "Bridge critical boundaries instantly. Ingest Modbus registers, MQTT telemetry, and OPC-UA variables directly to a centralized zero-config neural broker.",
  },
  {
    tag: "Zero Reaction Latency",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: "Autonomous Anomaly Detection",
    desc: "Stop waiting for hard thresholds. Intelligent edge agent pipelines continually calculate dynamic machine states to intercept operational failures before they occur.",
  },
];

export default function CoreCompetencies() {
  return (
    <section className={styles.section} id="pillars">
      <div className={`container`}>
        <p className="label">Core Competencies</p>
        <h2 className={styles.heading}>
          Engineered for Heavy Industry<br />and High Density
        </h2>

        <div className={styles.grid}>
          {cards.map((c) => (
            <div key={c.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.iconWrap}>{c.icon}</span>
                <span className={styles.tag}>{c.tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
