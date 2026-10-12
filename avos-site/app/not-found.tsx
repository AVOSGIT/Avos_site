import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Node Not Found | AVOS IoT",
  description: "The requested telemetry page or node does not exist on the AVOS IoT platform.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{
        minHeight: "calc(100vh - 200px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem 1.5rem 5rem",
        background: "var(--color-bg)",
        position: "relative",
        textAlign: "center",
      }}>
        {/* Ambient radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "350px",
            background: "radial-gradient(ellipse at center, rgba(0, 212, 170, 0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />

        <div style={{ maxWidth: "560px", position: "relative", zIndex: 1 }}>
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: "var(--color-primary)",
            background: "rgba(0, 212, 170, 0.08)",
            border: "1px solid rgba(0, 212, 170, 0.25)",
            padding: "0.25rem 0.75rem",
            borderRadius: "6px",
            display: "inline-block",
            marginBottom: "1.25rem",
            letterSpacing: "0.08em",
          }}>
            ERROR 404 // SIGNAL UNRESOLVED
          </div>

          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "var(--color-text-1)",
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            marginBottom: "1rem",
          }}>
            Node Not Found on the Telemetry Bus
          </h1>

          <p style={{
            fontSize: "0.95rem",
            color: "var(--color-text-2)",
            lineHeight: 1.65,
            marginBottom: "2rem",
          }}>
            The requested address does not exist or has been relocated.
            Verify the endpoint URL or return to the main console.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="btn btn-primary" id="404-home-btn">
              Return to Home →
            </Link>
            <ObfuscatedEmail
              subject="Broken Link Report - AVOS IoT"
              className="btn btn-ghost"
            >
              Report an Issue
            </ObfuscatedEmail>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
