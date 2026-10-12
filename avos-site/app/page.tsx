import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TerminalDemo from "@/components/TerminalDemo";
import CoreCompetencies from "@/components/CoreCompetencies";
import Architecture from "@/components/Architecture";
import TargetScenarios from "@/components/TargetScenarios";
import Enterprise from "@/components/Enterprise";
import ComplianceGateway from "@/components/ComplianceGateway";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AVOS IoT – AI-Powered Industrial IoT Platform",
  description:
    "AVOS IoT is the AI-powered industrial IoT platform for modern machine fleets. Connect PLCs, sensors, and RTU gateways via RS-485, Modbus, MQTT, and MCP (Model Context Protocol) for predictive maintenance and automated CPCB/SPCB compliance.",
  alternates: {
    canonical: "https://avosiot.com",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TerminalDemo />
        <CoreCompetencies />
        <Architecture />
        <TargetScenarios />
        <Enterprise />
        <ComplianceGateway />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
