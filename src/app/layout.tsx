import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CDF Infra Con Pvt. Ltd. | Premier Highway & Infrastructure Consultants",
  description:
    "Leading highway, bridge and infrastructure consultancy in India. Specializing in Authority Engineer supervision, DPR solutions, O&M oversight, Road Safety audits, and Technical Arbitration.",
  keywords: [
    "CDF Infra Con",
    "CDF Infracon Private Limited",
    "Highway Consultancy India",
    "Authority Engineer",
    "Independent Engineer NHAI",
    "Detailed Project Report DPR",
    "Vadodara Mumbai Expressway PKG 16",
    "Road Safety Audits",
    "Pavement Design White Topping",
    "Infrastructure Arbitration",
  ],
  authors: [{ name: "CDF Infra Con Pvt. Ltd." }],
  openGraph: {
    title: "CDF Infra Con Pvt. Ltd. | Infrastructure & Highway Engineering Consultants",
    description:
      "Premier infrastructure consultancy providing Authority Engineer supervision, DPR preparation, and highway asset management for monumental national corridors.",
    url: "https://www.cdfic.com",
    siteName: "CDF Infra Con",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-brand-gold selection:text-brand-dark">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
