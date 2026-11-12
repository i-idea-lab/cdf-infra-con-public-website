export interface ClientItem {
  name: string;
  fullName: string;
  category: "National Highway Authority" | "Central Ministry" | "State Infrastructure" | "Rural Road Agency" | "Corporation";
  url: string;
  logo: string;
  description: string;
}

export const clientsData: ClientItem[] = [
  {
    name: "NHAI",
    fullName: "National Highways Authority of India",
    category: "National Highway Authority",
    url: "https://nhai.gov.in/",
    logo: "/assets/Nhai.3f21a068.webp",
    description: "Autonomous agency of Govt. of India managing 140,000+ km National Highway network and Bharatmala Pariyojana.",
  },
  {
    name: "MoRTH",
    fullName: "Ministry of Road Transport and Highways",
    category: "Central Ministry",
    url: "https://morth.nic.in/",
    logo: "/assets/Morth.d29f2b32.webp",
    description: "Apex central government ministry formulating policies for national highways, road transport, and safety standards.",
  },
  {
    name: "PWD Maharashtra",
    fullName: "Public Works Department, Maharashtra",
    category: "State Infrastructure",
    url: "https://pwd.maharashtra.gov.in/",
    logo: "/assets/pwd.f8f3a75a.jpeg",
    description: "Primary state road engineering authority executing major state highways, bypasses, bridges, and HAM corridors.",
  },
  {
    name: "NHIDCL",
    fullName: "National Highways & Infrastructure Development Corp.",
    category: "Corporation",
    url: "https://nhidcl.com/",
    logo: "/assets/NHIDCL.c7738e24.jpg",
    description: "Specialized public sector enterprise under MoRTH developing strategic border corridors and hill highways.",
  },
  {
    name: "PMGSY Maharashtra",
    fullName: "Pradhan Mantri Gram Sadak Yojana",
    category: "Rural Road Agency",
    url: "https://pmgsytendersmah.gov.in/nicgep/app",
    logo: "/assets/PMGSY.2ef6d8c8.webp",
    description: "Nationwide rural connectivity programme executing all-weather road upgrades across remote habitations.",
  },
  {
    name: "MRIP / PWA",
    fullName: "Maharashtra Road Improvement Project",
    category: "State Infrastructure",
    url: "https://pwd.maharashtra.gov.in/",
    logo: "/assets/Pwa.a979bd1b.webp",
    description: "High-capacity state arterial corridor modernizations implemented under Hybrid Annuity Mode (HAM).",
  },
  {
    name: "MahaTenders",
    fullName: "Govt. of Maharashtra Procurement Division",
    category: "State Infrastructure",
    url: "https://www.mahatenders.gov.in/nicgep/app",
    logo: "/assets/mhTender.3532ae17.jpg",
    description: "Official public procurement authority facilitating transparent contracting for state infrastructure assets.",
  },
];
