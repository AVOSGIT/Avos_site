"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./TerminalDemo.module.css";

const DEMO_LINES = [
  { type: "prompt", text: 'avos@fleet-01 $ prompt' },
  { type: "query", text: '"Show me which compressors experienced temperature anomalies over the weekend?"' },
  { type: "gap", text: "" },
  { type: "label", text: "◆ AVOS AGENT RESOLUTION" },
  { type: "gap", text: "" },
  { type: "thinking", text: "Analyzing weekend log profiles. Identified 1 unit exceeding threshold." },
  { type: "code", text: "UNIT · COMPRESSOR 3 · 04.7238-A (ZONE-2 ONLINE)" },
  { type: "alert", text: "Anomaly detected on Sat 18:30. Temp spiked to 93°C. Root cause identified: Contact valve soldered failure." },
];

export default function TerminalDemo() {
  const [visibleLines, setVisibleLines] = useState(0);
  const termRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          let i = 0;
          const interval = setInterval(() => {
            i += 1;
            setVisibleLines(i);
            if (i >= DEMO_LINES.length) clearInterval(interval);
          }, 280);
        }
      },
      { threshold: 0.3 }
    );
    if (termRef.current) observer.observe(termRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="terminal-demo">
      <div className={`container ${styles.inner}`}>
        {/* Left: text */}
        <div className={styles.textCol}>
          <p className="label">Operational Interface</p>
          <h2 className={styles.heading}>
            Human Intelligence<br />meets Machine<br />Performance
          </h2>
          <p className={styles.body}>
            The AVOS console turns raw telemetry into a readable workflow. Operators ask questions in plain English, and the system returns structured answers, anomalies, and machine context without requiring custom scripting or proprietary query languages.
          </p>

          <div className={styles.features}>
            {[
              {
                icon: "💬",
                title: "Ask the fleet",
                desc: "Use natural language to query compressors, pumps, and cooling systems without writing SQL or proprietary query language.",
              },
              {
                icon: "⚠️",
                title: "Review anomalies",
                desc: "The system identifies threshold breaches, surfaces the affected unit, and returns the root cause in a structured narrative.",
              },
              {
                icon: "🔍",
                title: "Inspect the signal",
                desc: "Trace the anomaly back to the source with live telemetry, threshold values, and a clear event timestamp.",
              },
            ].map((f) => (
              <div key={f.title} className={styles.feature}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <div>
                  <strong className={styles.featureTitle}>{f.title}</strong>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: terminal */}
        <div className={styles.terminalCol} ref={termRef}>
          <div className={styles.terminal}>
            {/* Terminal titlebar */}
            <div className={styles.titlebar}>
              <div className={styles.dots}>
                <span className={styles.dot} style={{ background: "#ff5f57" }} />
                <span className={styles.dot} style={{ background: "#febc2e" }} />
                <span className={styles.dot} style={{ background: "#28c840" }} />
              </div>
              <span className={styles.termTitle}>AVOS CO-PILOT TERMINAL</span>
              <div className={styles.termActions}>
                <span className={styles.termBtn}>↗</span>
                <span className={styles.termBtn}>⊡</span>
                <span className={styles.termBtn}>×</span>
              </div>
            </div>

            {/* Terminal body */}
            <div className={styles.termBody}>
              {DEMO_LINES.slice(0, visibleLines).map((line, i) => (
                <div
                  key={i}
                  className={`${styles.line} ${styles[line.type]}`}
                >
                  {line.text}
                </div>
              ))}
              {visibleLines < DEMO_LINES.length && (
                <span className={styles.cursor} aria-hidden="true" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
