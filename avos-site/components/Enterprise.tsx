import styles from "./Enterprise.module.css";

const capabilities = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "On-Prem or Cloud",
    desc: "Run AVOS on an air-gapped secure edge, or scale globally with secure hybrid cloud configurations.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Role-Based Access Control",
    desc: "Granular authorization profiles built to align with ISO-27001 / SOC 2 point safety standard requirements.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "MCP Standard Inspection",
    desc: "Control Protocol profiles in arbitrary high-reliability and security compliance.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Docker-Ready Deployments",
    desc: "No complex installation needed. Launch edge agent telemetry pipelines in single-shot terminal scripts.",
  },
];

export default function Enterprise() {
  return (
    <section className={styles.section} id="specs">
      <div className="container">
        <p className="label">Enterprise Capabilities</p>
        <h2 className={styles.heading}>
          Secure. Compliant.<br />Ready for Heavy Workloads.
        </h2>

        <div className={styles.grid}>
          {capabilities.map((c) => (
            <div key={c.title} className={styles.card}>
              <span className={styles.icon}>{c.icon}</span>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
