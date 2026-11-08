export interface TenderPortal {
  name: string;
  category: string;
  url: string;
  logo: string;
  description: string;
}

export const tenderPortals: TenderPortal[] = [
  {
    name: "MoRTH",
    category: "Central Ministry",
    url: "https://morth.nic.in/",
    logo: "/assets/Morth.d29f2b32.webp",
    description: "Ministry of Road Transport and Highways, Government of India",
  },
  {
    name: "NHAI",
    category: "National Highway Authority",
    url: "https://nhai.gov.in/",
    logo: "/assets/Nhai.3f21a068.webp",
    description: "National Highways Authority of India e-Procurement & Tenders",
  },
  {
    name: "MahaTenders",
    category: "State Procurement",
    url: "https://www.mahatenders.gov.in/nicgep/app",
    logo: "/assets/mhTender.3532ae17.jpg",
    description: "Government of Maharashtra e-Procurement System",
  },
  {
    name: "PWD Maharashtra",
    category: "State Department",
    url: "https://pwd.maharashtra.gov.in/",
    logo: "/assets/pwd.f8f3a75a.jpeg",
    description: "Public Works Department, Government of Maharashtra",
  },
  {
    name: "PMGSY Tenders",
    category: "Rural Infrastructure",
    url: "https://pmgsytendersmah.gov.in/nicgep/app",
    logo: "/assets/PMGSY.2ef6d8c8.webp",
    description: "Pradhan Mantri Gram Sadak Yojana Maharashtra",
  },
  {
    name: "NHIDCL",
    category: "Hill Infrastructure",
    url: "https://nhidcl.com/",
    logo: "/assets/NHIDCL.c7738e24.jpg",
    description: "National Highways & Infrastructure Development Corporation Ltd.",
  },
  {
    name: "Central eProcure",
    category: "CPPP Portal",
    url: "https://eprocure.gov.in/eprocure/app",
    logo: "/assets/Pwa.a979bd1b.webp",
    description: "Central Public Procurement Portal (CPPP), Govt. of India",
  },
];
