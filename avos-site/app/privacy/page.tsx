import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AVOS IoT",
  description:
    "Privacy Policy for AVOS IoT. Learn how AVOS handles operational telemetry, user credentials, and plant data with enterprise confidentiality.",
  keywords: ["AVOS IoT privacy policy", "AVOS data security", "industrial IoT privacy"],
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "8rem 1.5rem 5rem", background: "var(--color-bg)", minHeight: "80vh" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="label">Legal &amp; Compliance</p>
          <h1 style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: 800,
            color: "var(--color-text-1)",
            margin: "0.5rem 0 1rem",
            letterSpacing: "-0.02em",
          }}>
            Privacy Policy
          </h1>
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--color-text-3)",
            marginBottom: "2.5rem",
          }}>
            LAST UPDATED: OCTOBER 2026 · AVOS IOT
          </p>

          <div style={{
            color: "var(--color-text-2)",
            fontSize: "0.925rem",
            lineHeight: 1.8,
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}>
            <section>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-1)", marginBottom: "0.5rem" }}>
                1. Overview
              </h2>
              <p>
                AVOS IoT (&quot;AVOS&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy and the
                confidentiality of your industrial telemetry and operational data. This Privacy Policy explains
                how we collect, use, and protect information when you visit our website (avosiot.com) or interact
                with our AI-powered IoT platform and hardware gateways.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-1)", marginBottom: "0.5rem" }}>
                2. Information We Collect
              </h2>
              <p>
                We only collect information necessary to deliver, maintain, and support our IoT solutions:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <li><strong>Contact Information:</strong> Names, business email addresses, and phone numbers provided when you request a demo or inquiry.</li>
                <li><strong>Machine Telemetry:</strong> Industrial sensor variables, PLC registers, and device statuses processed via our RTU gateways. Telemetry is encrypted in transit and at rest.</li>
                <li><strong>Website Logs:</strong> Standard technical information such as IP addresses, browser types, and access timestamps for security and performance diagnostics.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-1)", marginBottom: "0.5rem" }}>
                3. How We Use Information
              </h2>
              <p>
                Information collected is used solely for:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <li>Providing real-time telemetry ingestion, machine analytics, and autonomous alerting.</li>
                <li>Transmitting certified compliance records directly to mandated regulatory servers (e.g., CPCB/SPCB) per plant configuration.</li>
                <li>Responding to sales, support, and architecture walkthrough inquiries.</li>
                <li>Ensuring edge gateway uptime and system security.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-1)", marginBottom: "0.5rem" }}>
                4. Data Confidentiality &amp; Security
              </h2>
              <p>
                We do not sell, rent, or monetize your industrial telemetry or contact information to third parties.
                All edge-to-cloud communications utilize industry-standard TLS 1.3 encryption. For air-gapped on-premise
                deployments, plant operational data never leaves your local network perimeter.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-1)", marginBottom: "0.5rem" }}>
                5. Contact Us
              </h2>
              <p>
                If you have questions about our data practices or wish to review your stored contact information, please
                reach out to our security team:
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                <strong>Email:</strong>{" "}
                <ObfuscatedEmail
                  subject="Privacy Policy Inquiry - AVOS IoT"
                  style={{ color: "var(--color-primary)", textDecoration: "underline" }}
                />
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
