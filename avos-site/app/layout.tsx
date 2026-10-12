import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://avosiot.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AVOS IoT – AI-Powered Industrial IoT Platform",
    template: "%s | AVOS IoT",
  },
  description:
    "AVOS IoT is the leading AI-powered industrial IoT platform for modern machine fleets. Connect PLCs, sensors, and RTU gateways via RS-485, Modbus, MQTT, and MCP (Model Context Protocol). Real-time telemetry, predictive maintenance, and automated CPCB/SPCB compliance.",
  keywords: [
    "AVOS",
    "AVOS IoT",
    "avos iot",
    "avos",
    "avos ai",
    "AVOS platform",
    "MCP",
    "Model Context Protocol",
    "MCP industrial server",
    "MCP IoT",
    "AI IoT platform",
    "AI-powered IoT platform",
    "industrial IoT",
    "CPCB compliance IoT",
    "SPCB compliance",
    "RTU gateway",
    "Modbus",
    "MQTT",
    "OPC-UA",
    "SCADA",
    "telemetry",
    "machine intelligence",
    "predictive maintenance",
    "industrial automation",
  ],
  authors: [{ name: "AVOS IoT", url: siteUrl }],
  creator: "AVOS IoT",
  publisher: "AVOS IoT",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "AVOS IoT – AI-Powered Industrial IoT Platform",
    description:
      "The AI-powered IoT platform for modern machine fleets. Connect any PLC or sensor, monitor in real time, and talk to your operations in plain English.",
    url: siteUrl,
    siteName: "AVOS IoT",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVOS IoT – AI-Powered Industrial IoT Platform",
    description:
      "The AI-powered IoT platform for modern machine fleets. Industrial telemetry into autonomous action.",
    creator: "@avosiot",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "AVOS IoT",
        alternateName: ["AVOS", "AVOS Platform", "avosiot"],
        url: siteUrl,
        logo: `${siteUrl}/icon.svg`,
        email: "contact@avosiot.com",
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "contact@avosiot.com",
            contactType: "customer service",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "AVOS IoT",
        alternateName: "AVOS",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "AI-powered IoT platform for modern machine fleets. Industrial telemetry into autonomous action.",
      },
      {
        "@type": "SoftwareApplication",
        name: "AVOS IoT Platform",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Linux, Embedded, Cloud",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description:
          "AI-powered industrial IoT platform and edge RTU gateway solutions for predictive maintenance and regulatory compliance.",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
