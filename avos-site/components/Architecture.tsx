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

export default function Architecture() {
  return (
    <section className={styles.section} id="architecture">
      <div className="container">
        <p className="label">System Topology</p>
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

        {/* Architecture diagram (SVG schematic) */}
        <div className={styles.diagram}>
          <div className={styles.diagramInner}>
            {["PLC / SENSOR", "TELEMETRY ENGINE", "AI ENGINE", "MCP SERVER", "UI CONSOLE"].map(
              (node, i, arr) => (
                <div key={node} className={styles.diagramRow}>
                  <div className={styles.diagramNode}>
                    <span>{node}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className={styles.diagramArrow}>
                      <span>→</span>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
