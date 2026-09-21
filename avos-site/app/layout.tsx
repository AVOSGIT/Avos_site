import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AVOS – Industrial Telemetry into Autonomous Action",
  description:
    "The first AI-native operating system for modern machine fleets. Connect any PLC or sensor, monitor in real time, and talk to your operations in plain English.",
  keywords: [
    "industrial IoT",
    "SCADA",
    "telemetry",
    "AI operating system",
    "OPC-UA",
    "MQTT",
    "Modbus",
    "machine intelligence",
    "predictive maintenance",
  ],
  authors: [{ name: "AVOS" }],
  openGraph: {
    title: "AVOS – Industrial Telemetry into Autonomous Action",
    description:
      "The first AI-native OS for modern machine fleets. Monitor, query, and autonomously act on industrial data in real time.",
    type: "website",
    siteName: "AVOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVOS – Industrial Telemetry into Autonomous Action",
    description:
      "The first AI-native OS for modern machine fleets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
