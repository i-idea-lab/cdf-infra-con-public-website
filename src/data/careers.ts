export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export const careerOpenings: CareerOpening[] = [
  {
    id: "resident-highway-engineer",
    title: "Resident Highway Engineer / Team Leader",
    department: "Construction Supervision & Authority Engineer",
    location: "Maharashtra / Gujarat Sites",
    experience: "10+ Years",
    type: "Full-Time (Site Based)",
    description:
      "Leading on-site supervision and Authority Engineer monitoring for multi-lane National Highway and Expressway EPC/HAM projects.",
    responsibilities: [
      "Review contractor working drawings, construction schedules, and quality assurance plans",
      "Lead site inspections, pavement layer acceptance tests, and bridge concrete checks",
      "Chair monthly coordination meetings with concessionaires and NHAI/PWD project directors",
      "Issue non-conformance notices, milestone certifications, and completion punch-lists",
    ],
    qualifications: [
      "B.E. / B.Tech in Civil Engineering (M.Tech Transportation is a plus)",
      "Prior experience as Resident Engineer on NHAI or State Highway projects",
      "Proficiency with IRC specifications and MoRTH manuals",
    ],
  },
  {
    id: "bridge-design-engineer",
    title: "Bridge & Structural Design Engineer",
    department: "Design Engineering",
    location: "Pune Head Office",
    experience: "5 - 8 Years",
    type: "Full-Time",
    description:
      "Responsible for structural analysis, detailed drawing preparation, and structural verification of highway bridges, flyovers, and culverts.",
    responsibilities: [
      "Develop structural models using STAAD.Pro / MIDAS Civil for PSC girders and pier caps",
      "Conduct seismic, hydraulic, and soil-structure interaction analysis",
      "Review proof checking reports and contractor structural calculations",
      "Prepare detailed structural bill of quantities and bar bending schedules",
    ],
    qualifications: [
      "M.Tech / M.E. in Structural Engineering or Civil Engineering",
      "Strong hands-on experience with IRC:112, IRC:21, and IRC:78",
      "Proficiency in CAD, STAAD.Pro, and structural analysis suites",
    ],
  },
  {
    id: "nsv-survey-engineer",
    title: "NSV & Pavement Evaluation Engineer",
    department: "Highway Testing & Survey",
    location: "Pune / Field Mobilization",
    experience: "3 - 6 Years",
    type: "Full-Time",
    description:
      "Operating high-tech Network Survey Vehicles (NSV) and Falling Weight Deflectometers (FWD) for pavement condition index (PCI) benchmarking.",
    responsibilities: [
      "Conduct field surveys using laser profilometers, NSV video logging, and FWD deflectometers",
      "Process raw profilometer data into International Roughness Index (IRI) ratings",
      "Perform modulus back-calculations for pavement structural overlay design (IRC:115)",
      "Prepare technical pavement evaluation reports for NHAI asset management audits",
    ],
    qualifications: [
      "Degree or Diploma in Civil Engineering / Geomatics",
      "Familiarity with highway survey equipment (NSV, FWD, ATCC, Retro-reflectometer)",
      "Strong analytical skills with Excel and pavement management software",
    ],
  },
  {
    id: "quantity-surveyor-billing",
    title: "Quantity Surveyor & Contract Billing Engineer",
    department: "Project Management & Contracts",
    location: "Pune / Site Offices",
    experience: "4 - 7 Years",
    type: "Full-Time",
    description:
      "Handling quantity takeoff, contractor Interim Payment Certificates (IPC), variation claims, and contract administration.",
    responsibilities: [
      "Verify contractor interim measurement sheets and bill of quantities (BOQ)",
      "Track project price escalation indices (WPI/CPI) and contract rate adjustments",
      "Maintain variation logs, extension of time (EOT) documentation, and delay registers",
      "Coordinate with client departments for timely invoice clearance and audit compliances",
    ],
    qualifications: [
      "B.E. Civil Engineering or NICMAR Post Graduate in Quantity Surveying",
      "Comprehensive understanding of FIDIC, EPC, and HAM standard contract forms",
    ],
  },
];
