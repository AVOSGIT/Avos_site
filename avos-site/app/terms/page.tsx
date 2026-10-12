import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AVOS IoT",
  description:
    "Terms of Service for AVOS IoT. Read the terms governing usage of our AI-powered IoT platform, edge RTU gateways, and regulatory compliance services.",
  keywords: ["AVOS IoT terms of service", "AVOS user agreement", "industrial IoT software terms"],
};

export default function TermsOfService() {
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
            Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the AVOS IoT website (avosiot.com), hardware gateways, or cloud platform services,
                you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of
                a company or other legal entity, you represent that you have the authority to bind such entity.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-1)", marginBottom: "0.5rem" }}>
                2. Platform &amp; Hardware Usage
              </h2>
              <p>
                AVOS IoT grants you a non-exclusive, non-transferable license to access the platform and deploy our edge
                RTU hardware in industrial environments. You agree to:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <li>Use the hardware and platform in compliance with all applicable industrial safety, electrical, and environmental regulations.</li>
                <li>Maintain the physical and network integrity of deployed edge gateways.</li>
                <li>Not attempt to reverse-engineer, decompile, or tamper with certified regulatory transmission firmware.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-1)", marginBottom: "0.5rem" }}>
                3. Regulatory Telemetry &amp; Compliance
              </h2>
              <p>
                When utilizing AVOS for statutory compliance reporting (including CPCB, SPCB, or CEMS/OCEMS feeds):
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <li>You are solely responsible for ensuring connected field sensors and analyzers are properly calibrated and maintained.</li>
                <li>AVOS ensures encrypted, tamper-proof transmission of acquired raw values to designated regulatory endpoints as configured.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-1)", marginBottom: "0.5rem" }}>
                4. Intellectual Property
              </h2>
              <p>
                All software, firmware, algorithms, trademarks, and documentation related to AVOS IoT remain the exclusive
                property of AVOS. You retain all ownership rights to your industrial operational data and telemetry.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-1)", marginBottom: "0.5rem" }}>
                5. Limitation of Liability
              </h2>
              <p>
                AVOS IoT is provided on an &quot;as is&quot; and &quot;as available&quot; basis for enterprise operations. In no event
                shall AVOS be liable for indirect, incidental, or consequential damages resulting from plant downtime,
                sensor drift, or network provider connectivity interruptions.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-1)", marginBottom: "0.5rem" }}>
                6. Contact &amp; Legal Notices
              </h2>
              <p>
                For questions regarding these Terms or enterprise licensing agreements, please contact us at:
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                <strong>Email:</strong>{" "}
                <ObfuscatedEmail
                  subject="Terms of Service Inquiry - AVOS IoT"
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
