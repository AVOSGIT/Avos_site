import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TerminalDemo from "@/components/TerminalDemo";
import CoreCompetencies from "@/components/CoreCompetencies";
import Architecture from "@/components/Architecture";
import TargetScenarios from "@/components/TargetScenarios";
import Enterprise from "@/components/Enterprise";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
