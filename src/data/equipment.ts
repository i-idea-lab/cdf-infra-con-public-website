export interface EquipmentItem {
  id: string;
  name: string;
  acronym: string;
  category: string;
  tagline: string;
  description: string;
  images: string[];
  specs: { label: string; value: string }[];
  applications: string[];
}

export const equipmentData: EquipmentItem[] = [
  {
    id: "atcc",
    name: "Automatic Traffic Counter & Classifier",
    acronym: "ATCC",
    category: "Traffic Census & Classification",
    tagline: "Automated high-speed traffic census, vehicle categorization & axle count monitoring",
    description:
      "An Automatic Traffic Counter and Classifier (ATCC) is an advanced sensor-based system engineered to monitor and analyze vehicle traffic without manual human intervention. Utilizing piezometric sensors, inductive loops, and optical infrared detectors, it captures vehicle counts, vehicle categorization (per IRC classification), axle configuration, and directional speed 24/7.",
    images: [
      "/assets/Atcc1.717c7c7a.webp",
      "/assets/Atcc2.ba74330d.webp",
      "/assets/Atcc3.504a0a40.webp",
    ],
    specs: [
      { label: "Classification Standards", value: "IRC:SP:72 & MoRTH Classifications" },
      { label: "Accuracy Rate", value: "> 98.5% on multi-lane carriageways" },
      { label: "Speed Detection Range", value: "5 km/h to 180 km/h" },
      { label: "Data Logging", value: "Solar-powered real-time cloud telemetry" },
    ],
    applications: [
      "Highway feasibility studies and toll revenue traffic forecasting",
      "Axle load spectrum analysis for pavement crust thickness design",
      "Peak hour factor (PHF) and congestion management studies",
      "Origin-destination and commercial vehicle ratio estimation",
    ],
  },
  {
    id: "nsv",
    name: "Network Survey Vehicle",
    acronym: "NSV",
    category: "Laser Profilometry & Pavement Condition",
    tagline: "Laser profilometer, 360° right-of-way imagery & high-definition surface roughness measurement",
    description:
      "A Network Survey Vehicle (NSV) is a high-tech mobile measurement platform outfitted with high-resolution laser profilometers, GPS/INS georeferencing, optical cameras, and crack measurement software. It collects continuous millimeter-accurate data on pavement condition while driving at highway traffic speeds.",
    images: [
      "/assets/Nsv1.552b2dd3.jpeg",
      "/assets/Nsv2.3a8ec126.jpeg",
    ],
    specs: [
      { label: "Roughness Parameter", value: "International Roughness Index (IRI)" },
      { label: "Crack Detection", value: "Laser Crack Measurement System (LCMS)" },
      { label: "Imaging", value: "360° Right-of-Way (ROW) spatial mapping" },
      { label: "Operational Speed", value: "Up to 80 km/h survey speeds" },
    ],
    applications: [
      "Periodic pavement condition rating for NHAI / MoRTH concessionaires",
      "Rutting, cracking, ravelling, and pothole quantification",
      "Highway asset inventory and road safety signboards mapping",
      "Pre-monsoon and post-monsoon pavement health benchmarking",
    ],
  },
  {
    id: "fwd",
    name: "Falling Weight Deflectometer",
    acronym: "FWD",
    category: "Non-Destructive Testing (NDT)",
    tagline: "Non-destructive dynamic pavement deflection & subgrade structural capacity evaluation",
    description:
      "The Falling Weight Deflectometer (FWD) is an essential non-destructive testing instrument used to evaluate the structural integrity and load-bearing capacity of asphalt and concrete pavements. It simulates the dynamic impact of a heavy commercial vehicle wheel load and measures deflection across geophone sensor arrays.",
    images: [
      "/assets/Fwd1.45ccffe1.png",
      "/assets/Fwd2.12cda255.png",
    ],
    specs: [
      { label: "Impact Force Range", value: "30 kN to 120 kN impulse load" },
      { label: "Deflection Sensors", value: "Multiple high-sensitivity seismic geophones" },
      { label: "Calculation Model", value: "Modulus back-calculation (IRC:115-2014)" },
      { label: "Testing Cycle", value: "< 60 seconds per station" },
    ],
    applications: [
      "Structural pavement overlay design (IRC:115)",
      "Subgrade resilient modulus (Mr) back-calculation",
      "Void detection under rigid concrete pavement slabs",
      "Evaluating remaining structural pavement life",
    ],
  },
  {
    id: "mbiu",
    name: "Mobile Bridge Inspection Unit",
    acronym: "MBIU",
    category: "Bridge & Structural Diagnostics",
    tagline: "Articulated under-bridge aerial platform for non-destructive structural deck & pier audits",
    description:
      "A Mobile Bridge Inspection Unit (MBIU) is a vehicle-mounted articulating hydraulic platform designed to deploy inspectors safely below bridge superstructures, pier caps, bearings, and soffits without disrupting vehicular traffic above or needing ground scaffolding.",
    images: [
      "/assets/Mbiu1.86cdfbfc.jpeg",
      "/assets/Mbiu2.a76efb9b.jpeg",
      "/assets/Mbiu3.f49f4cf6.jpeg",
    ],
    specs: [
      { label: "Platform Reach", value: "Up to 18 meters horizontal under-bridge reach" },
      { label: "Drop Depth", value: "Up to 8 meters below bridge deck" },
      { label: "Payload Capacity", value: "Heavy duty basket (up to 300 kg)" },
      { label: "Safety System", value: "Interlocked hydraulic stabilization outriggers" },
    ],
    applications: [
      "Visual and ultrasonic testing of prestressed girders and bearings",
      "Expansion joint distress and water leakage diagnostics",
      "Rebound hammer and carbonation depth structural audits",
      "Structural health inspection over rivers, gorges, and railway crossings",
    ],
  },
  {
    id: "retro-reflectometer",
    name: "Retro-Reflectometer",
    acronym: "RRT",
    category: "Road Safety & Photometrics",
    tagline: "Precision optical retroreflectivity testing for highway signboards & thermoplastic markings",
    description:
      "A Retro-Reflectometer is a portable precision optical instrument that measures the retroreflective performance (RA / RL) of road traffic signs, hazard delineators, and thermoplastic pavement markings, ensuring night-time visibility and safety for motorists.",
    images: [
      "/assets/Rrt1.157f8813.jpeg",
      "/assets/Rrt2.4507f9f4.webp",
    ],
    specs: [
      { label: "Sign Measurement", value: "Coefficient of Retroreflection (RA in cd/lx/m²)" },
      { label: "Marking Measurement", value: "Night visibility RL (mcd/m²/lx) per ASTM E1710" },
      { label: "Observation Angle", value: "0.2°, 0.5°, and 1.0° standard geometries" },
      { label: "Standards Compliance", value: "IRC:67 and IRC:35 specifications" },
    ],
    applications: [
      "Road safety audit compliance verification",
      "Quality acceptance of newly laid thermoplastic road markings",
      "Scheduled replacement auditing of aged retroreflective signboards",
      "MoRTH safety guidelines verification on tollway corridors",
    ],
  },
];
