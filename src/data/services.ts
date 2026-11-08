export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  scopeOfWork: string[];
  keyHighlights: string[];
  iconName: string;
}

export const servicesData: Record<string, ServiceItem> = {
  "authority-engineer": {
    id: "authority-engineer",
    title: "Authority Engineer / Independent Engineer",
    shortDescription: "Neutral monitoring and facilitation of infrastructure projects under PPP & HAM frameworks.",
    fullDescription:
      "In India, National Highway and State Highway projects executed under Public-Private Partnership (PPP), Hybrid Annuity Mode (HAM), and EPC frameworks mandate rigorous, independent oversight. As Authority Engineers and Independent Consultants, CDF Infra Con provides meticulous, neutral technical supervision, verifying contractual compliance, materials testing, workmanship standards, and milestone achievements.",
    scopeOfWork: [
      "Review of contractor drawings, design submissions, and methodology statements",
      "Comprehensive on-site inspection of earthwork, pavement layers, structures, and bridges",
      "Witnessing quality control tests for bituminous, concrete, and soil materials",
      "Issuance of Provisional & Final Commercial Operation Date (COD) Completion Certificates",
      "Independent monthly progress reporting to NHAI, MoRTH, and State PWD authorities",
    ],
    keyHighlights: [
      "Strict neutral adherence to IRC specifications and MoRTH green books",
      "Proactive dispute mitigation between concessionaire and highway authority",
      "Milestone-based progress verification to ensure uncompromised quality",
    ],
    iconName: "ShieldCheck",
  },
  dpr: {
    id: "dpr",
    title: "Detailed Project Report (DPR) & Feasibility",
    shortDescription: "End-to-end engineering surveys, alignment planning, and bankable project preparation.",
    fullDescription:
      "Our team delivers end-to-end Detailed Project Reports (DPR) and techno-economic feasibility studies for Greenfield and Brownfield expressways, National Highways, and state road networks. We combine satellite GIS alignment mapping, LiDAR data, traffic forecasting, hydrological modeling, and environmental impact assessments to create bankable, executable project blueprints.",
    scopeOfWork: [
      "Topographical surveys, digital terrain modeling, and LiDAR alignment studies",
      "Comprehensive traffic census, origin-destination surveys, and axle load spectrum analysis",
      "Hydrological and hydraulic design for bridges, culverts, and cross-drainage structures",
      "Pavement crust design adhering to IRC:37 (Flexible) and IRC:58 (Rigid/White Topping)",
      "Environmental & Social Impact Assessments (EIA/SIA) and statutory clearance documentation",
    ],
    keyHighlights: [
      "Optimized geometric designs minimizing land acquisition costs",
      "Life-cycle cost optimization for sustainable long-term asset performance",
      "Detailed bill of quantities (BOQ), tender drawings, and concession schedules",
    ],
    iconName: "FileSpreadsheet",
  },
  maintenance: {
    id: "maintenance",
    title: "O&M Supervision & Highway Asset Management",
    shortDescription: "Preserving highway longevity, toll plaza operations, and riding quality standards.",
    fullDescription:
      "Highway assets require continuous, preventive upkeep to retain safe operating speeds, structural integrity, and international roughness index (IRI) benchmarks. CDF Infra Con provides rigorous Operation & Maintenance (O&M) supervision for tollways, expressways, and bypass concessions.",
    scopeOfWork: [
      "Routine, periodic, and emergency pavement maintenance monitoring",
      "Roughness surveys using Network Survey Vehicles (NSV) and crack monitoring",
      "Toll plaza operations oversight, lane throughput audits, and FASTag validation",
      "Drainage clearance, road furniture maintenance, and slope stability inspections",
      "Bridge distress diagnostics and periodic rehabilitation planning",
    ],
    keyHighlights: [
      "Preservation of asset lifespan through preventative maintenance schedules",
      "Minimizing traffic disruption during re-carpeting and micro-surfacing works",
      "Ensuring concessionaire adherence to Key Performance Indicators (KPIs)",
    ],
    iconName: "Wrench",
  },
  safety: {
    id: "safety",
    title: "Road Safety Consulting & Safety Audits",
    shortDescription: "Design, construction, and operational stage safety audits adhering to IRC standards.",
    fullDescription:
      "Safety is paramount across the road transportation lifecycle. Our accredited Road Safety Auditors conduct comprehensive safety audits across all development stages—feasibility, preliminary design, construction zone traffic management, and post-construction operational stages—to eliminate hazard blackspots and safeguard motorists.",
    scopeOfWork: [
      "Blackspot identification, road hazard ranking, and mitigation design",
      "Traffic calming measures and junction/intersection geometry re-engineering",
      "Construction work-zone safety auditing and detour management",
      "Retroreflectivity testing for signboards, delineators, and road markings",
      "Crash barrier, pedestrian crossing, and street illumination audits",
    ],
    keyHighlights: [
      "Accredited by Indian Road Congress (IRC) safety guidelines",
      "Substantial measurable reduction in accident frequencies and fatalities",
      "Pedestrian, cyclist, and vulnerable road user safety prioritization",
    ],
    iconName: "AlertTriangle",
  },
  "project-management": {
    id: "project-management",
    title: "Project Management Consultancy (PMC)",
    shortDescription: "Integrated scheduling, cost engineering, contract administration, and site supervision.",
    fullDescription:
      "We deliver turnkey Project Management Consultancy (PMC) services that transform conceptual master plans into completed infrastructure assets on schedule and within budget. Our multidisciplinary PMC team oversees schedule compliance, contract administration, materials procurement, and statutory approvals.",
    scopeOfWork: [
      "Baseline CPM/PERT scheduling and continuous Earned Value Management (EVM)",
      "Contract administration under FIDIC, EPC, and Indian Standard Conditions",
      "Risk assessment, mitigation planning, and critical path management",
      "Inter-departmental coordination with power, forest, and revenue authorities",
      "Billing verification, variation claim verification, and cost containment",
    ],
    keyHighlights: [
      "Transparent digital dashboards and milestone tracking",
      "Proven track record of minimizing turnaround time on major state packages",
      "Strict cost control without compromising structural specifications",
    ],
    iconName: "Layers",
  },
  "design-engineering": {
    id: "design-engineering",
    title: "Design Engineering & Structural Pavement Design",
    shortDescription: "Specialized flexible and rigid pavement engineering, white-topping, and structural design.",
    fullDescription:
      "Our design engineering division creates resilient pavement and structural solutions engineered to withstand extreme commercial vehicle axle loads and severe climatic conditions. We specialize in both conventional flexible pavements and advanced rigid pavements, including thin white-topping (TWT) overlays.",
    scopeOfWork: [
      "Mechanistic-Empirical pavement design (IRC:37, IRC:58, AASHTO)",
      "White topping (WT) and ultra-thin white topping overlay design for ghat sections",
      "Structural analysis and design for minor bridges, flyovers, and underpasses",
      "Soil stabilization, subgrade soil improvement, and geosynthetic design",
      "Slope stability analysis in mountainous terrains and deep cut sections",
    ],
    keyHighlights: [
      "Optimized material usage saving significant capital expenditure",
      "Proven white-topping implementations in rugged terrains like Malshej Ghat",
      "Integration of sustainable recycled asphalt pavement (RAP) technologies",
    ],
    iconName: "Compass",
  },
  Arbitration: {
    id: "Arbitration",
    title: "Technical Arbitration & Contract Dispute Resolution",
    shortDescription: "Expert dispute resolution, techno-legal claim evaluation, and arbitration representation.",
    fullDescription:
      "Headed by our Chairman—a distinguished former Chief Engineer of PWD Maharashtra and IRC Empanelled Arbitrator—our techno-legal dispute resolution division resolves complex contract disagreements between contractors, concessionaires, and government authorities. We offer dispute advisory, delay analysis, quantum calculation, and expert arbitration services.",
    scopeOfWork: [
      "Delay and disruption analysis using Time Impact and As-Planned vs. As-Built methods",
      "Techno-legal evaluation of variation claims, price adjustments, and idling charges",
      "Preparation of comprehensive Statements of Claim and Defense for arbitral tribunals",
      "Dispute Adjudication Board (DAB) representation and amicable conciliation",
      "Empanelled arbitration hearings under Indian Arbitration and Conciliation Act",
    ],
    keyHighlights: [
      "Led by IRC Empanelled Arbitrators and former PWD Chief Engineers",
      "In-depth technical knowledge combined with Indian contract law acumen",
      "High win/settlement track record based on rigorous forensic engineering data",
    ],
    iconName: "Scale",
  },
};
