import styles from "./TargetScenarios.module.css";

const scenarios = [
  {
    badge: "10× Faster Deployment",
    tag: "System Deployment",
    title: "Deploy & Connect in Hours",
    desc: "Stop spending weeks writing custom mapping scripts and proprietary PLC interfaces. Leverage standard instrumented stacks with self-documenting JSON journals.",
  },
  {
    badge: "3× Added Machine Margin",
    tag: "Business Mindset / OEM",
    title: "Ship Intelligent Hardware",
    desc: "Differentiate your machines by building AVOS directly into your hardware. Provide your clients with turn-key predictive alerts and natural language query planes.",
  },
  {
    badge: "28% Reduction in MTTR",
    tag: "Plant Operations",
    title: "Zero-Latency Anomaly Oversight",
    desc: "Get context instantly. No more parsing cryptic terminal errors or digging through compliance forklifts while systems are experiencing heavy fault loops.",
  },
];

export default function TargetScenarios() {
  return (
    <section className={styles.section} id="solutions">
      <div className="container">
        <p className="label">Target Scenarios</p>
        <h2 className={styles.heading}>
          Engineered for All Levels of Production
        </h2>

        <div className={styles.grid}>
          {scenarios.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.badge}>{s.badge}</div>
              <span className={styles.tag}>{s.tag}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
