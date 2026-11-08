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
    icon: "/assets/favicon.ico",
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
