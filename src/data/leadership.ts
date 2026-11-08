export interface LeaderMember {
  slug: string;
  idNumber: string;
  name: string;
  role: string;
  designation: string;
  photo: string;
  shortBio: string;
  fullBio: string[];
  credentials: string[];
  committees?: string[];
  isExecutive: boolean;
}

export const leadershipData: LeaderMember[] = [
  {
    slug: "11",
    idNumber: "11",
    name: "Mr. C. D. Fakir",
    role: "The Chairman",
    designation: "Chairman & Former Chief Engineer, PWD Maharashtra",
    photo: "/assets/cdFakir.b3109670.jpeg",
    shortBio:
      "Former Chief Engineer of Public Works Department (PWD) Maharashtra with over four decades of distinguished public service, empanelled arbitrator, and structural engineering luminary.",
    fullBio: [
      "Our Chairman, a former Chief Engineer of PWD Maharashtra, brings decades of deep institutional expertise in civil engineering, highway planning, and infrastructure development. After a distinguished government career leading major state highway portfolios, he now leads high-stakes technical arbitrations, securing resolutions with his sharp judgment and forensic engineering acumen.",
      "Known for his integrity, visionary leadership, and uncompromising technical standards, Mr. C. D. Fakir anchors the company's commitment to precision, transparency, and sustainable development.",
      "His guidance has been instrumental in positioning CDF Infra Con as an empanelled Authority Engineer and technical consultant for monumental national expressway corridors, including the Vadodara Mumbai Expressway and Bharatmala Pariyojana.",
    ],
    credentials: [
      "Former Chief Engineer, Public Works Department (PWD), Govt. of Maharashtra",
      "Empanelled Arbitrator with Indian Roads Congress (IRC): 17(1) / 2013",
      "Member of Indian Council of Arbitration (MICA No: IL/ICA/5179 - 2013)",
      "Fellow of the Institution of Engineers (India) FIE-F015922-7 (2001)",
      "Life Member of Indian Roads Congress (IRC LM-8347 since 1979)",
      "Member, Technical Advisory Committee (TAC) for Versova Bandra Sea Link Project, MSRDC Mumbai (2011-2014)",
      "Chairman, Institution of Engineers (India) Aurangabad Centre (2000-2002)",
      "Member, Disaster Management Committee formulated by IRC (2007-2009)",
      "Member, Steering Committee formulated by MSRDC Maharashtra State",
      "Life Member, Indian Society of Wind Engineering & Indian Building Congress",
    ],
    committees: [
      "Technical Advisory Committee (TAC), Versova Bandra Sea Link, MSRDC Mumbai",
      "Disaster Management Committee, Indian Roads Congress (IRC)",
      "Works Committee, Pravara Medical Trust Loni",
      "Inspecting Authority (IA), Maulana Azad Education Foundation, New Delhi",
    ],
    isExecutive: true,
  },
  {
    slug: "12",
    idNumber: "12",
    name: "Mr. Amer C. Fakir",
    role: "Managing Director",
    designation: "Managing Director & Chief Executive",
    photo: "/assets/Amer.a6427031.jpg",
    shortBio:
      "Strategic visionary and driving force behind company expansion, modern fleet acquisitions, and nationwide project execution.",
    fullBio: [
      "Mr. Amer C. Fakir has played a pivotal role in the modern development, strategic expansion, and technological modernization of CDF Infra Con Pvt. Ltd. With clear strategic vision, dynamic leadership, and hands-on operational discipline, he steers complex highway projects with exceptional efficiency.",
      "Under his guidance, the firm has acquired state-of-the-art non-destructive testing fleets including Network Survey Vehicles (NSV) and Falling Weight Deflectometers (FWD), transforming the organization into a technologically self-reliant engineering powerhouse.",
      "Whether conducting critical on-site inspections, resolving field engineering bottlenecks, or reviewing complex structural drawings, Mr. Amer Fakir remains actively involved across every operational milestone.",
    ],
    credentials: [
      "Executive Project Management & Strategic Infrastructure Leadership",
      "Fleet Modernization Architect for Highway Non-Destructive Testing",
      "Spearheaded multi-state operations across Maharashtra, Gujarat, and Uttar Pradesh",
      "Client liaison head with NHAI, MoRTH, and State Infrastructure Corporations",
    ],
    isExecutive: true,
  },
  {
    slug: "13",
    idNumber: "13",
    name: "Mr. Amman C. Fakir",
    role: "Director",
    designation: "Director & Head of Legal & Corporate Governance",
    photo: "/assets/AmmanFakir.8206883b.jpeg",
    shortBio:
      "Accomplished advocate and legal strategist specializing in infrastructure contract law, concession agreements, and corporate governance.",
    fullBio: [
      "Mr. Amman C. Fakir is a highly accomplished lawyer known for his deep legal expertise, contractual acumen, and strategic perspective on Public-Private Partnership frameworks.",
      "As Director, he heads the company's legal, regulatory, and corporate governance divisions, ensuring that all concession agreements, HAM contracts, and joint-venture consortiums comply with statutory frameworks and international standards.",
      "His analytical approach and deep comprehension of arbitration procedures have provided CDF Infra Con with an exceptional edge in techno-legal claim substantiations and contract dispute resolutions.",
    ],
    credentials: [
      "Specialist in Infrastructure Concession Contracts (EPC / BOT / HAM)",
      "Corporate Governance, Statutory Compliance & Joint Venture Agreements",
      "Dispute Strategy & Techno-Legal Risk Mitigation",
    ],
    isExecutive: true,
  },
  {
    slug: "advisory-1",
    idNumber: "1",
    name: "Mr. Dilip G. Palve",
    role: "Senior Technical Advisor",
    designation: "Advisor - Quality Assurance & Construction Supervision",
    photo: "/assets/dilipPalwe.c3a0fff2.jpg",
    shortBio:
      "Veteran civil engineer with over 30 years of field supervision expertise across highway widenings, bridges, and bituminous pavements.",
    fullBio: [
      "Mr. Dilip G. Palve provides senior technical advisory on highway construction quality assurance, materials testing, and contractor methodology compliance.",
      "His decades of on-ground field supervision ensure that work delivered under CDF Infra Con's supervision meets the highest tolerances prescribed by IRC and MoRTH manuals.",
    ],
    credentials: [
      "30+ Years in National & State Highway Construction Supervision",
      "Specialist in Bituminous Concrete & Subgrade Soil Mechanics",
      "Quality Assurance & Milestone Verification Auditor",
    ],
    isExecutive: false,
  },
  {
    slug: "advisory-2",
    idNumber: "2",
    name: "Mr. M. V. Patil",
    role: "Senior Technical Advisor",
    designation: "Advisor - Structural Engineering & Bridges",
    photo: "/assets/MrMVPatil .842ae29d.jpeg",
    shortBio:
      "Structural bridge expert with profound experience in river crossings, flyovers, and elevated highway viaducts.",
    fullBio: [
      "Mr. M. V. Patil serves as senior structural advisor, reviewing hydraulic models, bridge substructures, pre-stressed girders, and seismic design parameters across major highway packages.",
    ],
    credentials: [
      "Bridge & Structural Engineering Specialist",
      "Expertise in Pre-stressed Concrete (PSC) & Steel Girder Bridges",
      "IRC:21 and IRC:112 Structural Design Reviewer",
    ],
    isExecutive: false,
  },
  {
    slug: "advisory-3",
    idNumber: "3",
    name: "Mr. L. S. Joshi",
    role: "Senior Technical Advisor",
    designation: "Advisor - Project Planning & Feasibility",
    photo: "/assets/MrLSJoshi.d2dea60c.jpeg",
    shortBio:
      "Specialist in alignment optimization, Detailed Project Reports (DPR), and state infrastructure corridor planning.",
    fullBio: [
      "Mr. L. S. Joshi provides strategic oversight on preliminary surveys, traffic census interpretation, and economic feasibility assessments for state and national highway projects.",
    ],
    credentials: [
      "Feasibility Study & DPR Review Specialist",
      "Alignment Optimization & Geometric Design",
      "Former Senior Engineer with PWD Maharashtra",
    ],
    isExecutive: false,
  },
  {
    slug: "advisory-4",
    idNumber: "4",
    name: "Mr. V. B. Bhale",
    role: "Senior Technical Advisor",
    designation: "Advisor - Highway Maintenance & Safety",
    photo: "/assets/MrVBBhale.15da27b2.jpeg",
    shortBio:
      "Expert in road asset preservation, toll plaza operations, and road safety engineering audits.",
    fullBio: [
      "Mr. V. B. Bhale advises on long-term Operation & Maintenance (O&M) protocols, safety audits, and pavement preservation strategies for concessionaires.",
    ],
    credentials: [
      "Highway Maintenance & Asset Management Specialist",
      "Road Safety Audit & Blackspot Elimination Expert",
      "Toll Operations & Pavement Condition Index Specialist",
    ],
    isExecutive: false,
  },
];
