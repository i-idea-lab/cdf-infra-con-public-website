export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  category: "Expressway" | "National Highway" | "State Highway" | "Corridor" | "Feasibility & DPR";
  location: string;
  mode: string;
  length?: string;
  clientAuthority: string;
  description: string;
  featured?: boolean;
  image: string;
  gallery?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "vadodara-mumbai-expressway-pkg16",
    title:
      "Construction of Eight lane access-controlled Expressway from Km 103.400 to Km 128.000 of Vadodara Mumbai Expressway in the State of Gujarat, UT of DNH and Maharashtra on Hybrid Annuity Mode under Bharatmala Pariyojana",
    shortTitle: "Vadodara Mumbai Expressway (Km 103.400 - Km 128.000) Package 16",
    category: "Expressway",
    location: "Gujarat / UT of DNH / Maharashtra",
    mode: "Hybrid Annuity Mode (HAM)",
    length: "24.60 Km (8-Lane Access Controlled)",
    clientAuthority: "NHAI / Bharatmala Pariyojana",
    description:
      "A flagship greenfield expressway corridor featuring rigid concrete pavements, high-speed interchanges, vehicular underpasses, wildlife crossings, and smart expressway traffic management systems.",
    featured: true,
    image: "/assets/Vadodra1.85753e81.jpeg",
    gallery: [
      "/assets/Vadodra1.85753e81.jpeg",
      "/assets/Vadodra4.d8559947.jpeg",
      "/assets/VadodraMumbai103_1281.53af4e4b.png",
      "/assets/VadodraMumbai103_1282.fd04c6af.jpeg",
    ],
  },
  {
    id: "vadodara-mumbai-expressway-pkg17",
    title:
      "Construction of Eight lane access-controlled Expressway from km 128.000 to km 154.600 of Vadodara Mumbai Expressway in the state of Gujarat on Hybrid Annuity mode under Bharatmala Pariyojna",
    shortTitle: "Vadodara Mumbai Expressway (Km 128.000 - Km 154.600)",
    category: "Expressway",
    location: "Gujarat",
    mode: "Hybrid Annuity Mode (HAM)",
    length: "26.60 Km (8-Lane Access Controlled)",
    clientAuthority: "NHAI",
    description:
      "Continuation of the premier economic corridor featuring high-capacity drainage, automated tolling infrastructure, and precision engineered pavement layers.",
    featured: true,
    image: "/assets/Vme128_1541.8efb9f9e.jpeg",
    gallery: [
      "/assets/Vme128_1541.8efb9f9e.jpeg",
      "/assets/Vme128_1542.b00ee355.jpeg",
      "/assets/Vme128_1543.33dc924c.png",
      "/assets/Vme128_1544.00789121.png",
    ],
  },
  {
    id: "khed-sinnar-nh50",
    title:
      "Four Laning of Khed-Sinnar Section of NH-50 from Km 42+000 to Km 177+000 (Design Length - 137.946 Km) under NHDP Phase IV in the state of Maharashtra on DBFOT Basis",
    shortTitle: "Four Laning of Khed - Sinnar NH-50 (137.95 Km)",
    category: "National Highway",
    location: "Maharashtra",
    mode: "DBFOT (Toll)",
    length: "137.95 Km (4-Lane)",
    clientAuthority: "NHAI / NHDP Phase IV",
    description:
      "Supervision and Authority Engineer monitoring of the heavy industrial freight corridor linking Pune, Khed, Narayangaon, Alephata, Sangamner, and Sinnar with major bypasses and flyovers.",
    featured: true,
    image: "/assets/Khed1.597ebadc.jpeg",
    gallery: [
      "/assets/Khed1.597ebadc.jpeg",
      "/assets/Khed-SinnarSectionofNH-50.d3d8bea0.jpg",
      "/assets/NarayanaonBypassKhedSinner1.ca6ffea2.jpeg",
      "/assets/NarayanaonBypassKhedSinner2.149cc165.jpeg",
    ],
  },
  {
    id: "fagne-gujarat-border-nh6",
    title:
      "Four laning of Fagne to Gujarat-Maharashtra Border section of NH 6 from Km 510 to Km 650.79 in Maharashtra under NHDP Phase IV",
    shortTitle: "Four Laning of Fagne to Gujarat-Maharashtra Border NH-6",
    category: "National Highway",
    location: "Maharashtra / Gujarat Border",
    mode: "EPC / Annuity",
    length: "140.79 Km (4-Lane)",
    clientAuthority: "NHAI",
    description:
      "Crucial east-west highway corridor expansion connecting northern Maharashtra with industrial hubs in Gujarat, including major bridge widenings and pavement quality concrete.",
    featured: false,
    image: "/assets/GujaratMaharashtra.c8467978.jpg",
  },
  {
    id: "amravati-chikhli-nh6-pkg1",
    title:
      "Four Laning of Amravati-Chikhli section of NH-6 [Package-1 from km 166.000 (Amravati) to km 220.000 (Near Kurankhed)] in the state of Maharashtra",
    shortTitle: "Amravati - Chikhli NH-6 (Package 1: Km 166 - Km 220)",
    category: "National Highway",
    location: "Vidarbha, Maharashtra",
    mode: "HAM / EPC",
    length: "54.00 Km",
    clientAuthority: "NHAI",
    description:
      "Capacity augmentation of National Highway 6 to 4 lanes with paved shoulders, pedestrian underpasses, and durable bitumen concrete wear courses.",
    featured: false,
    image: "/assets/Amravati-ChikhlisectionofNH-6.1f02ab45.jpg",
  },
  {
    id: "amravati-chikhli-nh6-pkg2",
    title:
      "Amravati-Chikhli section of NH-6 [Package-II from km 220.000 (Near Kurankhed) to km 270.000 (Near Shelad)] in the state of Maharashtra",
    shortTitle: "Amravati - Chikhli NH-6 (Package 2: Km 220 - Km 270)",
    category: "National Highway",
    location: "Maharashtra",
    mode: "HAM / EPC",
    length: "50.00 Km",
    clientAuthority: "NHAI",
    description:
      "Package II of the major Vidarbha highway modernizing interstate connectivity with enhanced bridge hydraulics and junction redesign.",
    featured: false,
    image: "/assets/AmravatiChikhliSection.cf2388b8.jpg",
  },
  {
    id: "pune-solapur-nh9",
    title: "Widening of existing road from Km 144.400 to Km 249.000 on the Pune Solapur Section of NH-9",
    shortTitle: "Pune - Solapur Section Widening NH-9 (Km 144.400 - 249.000)",
    category: "National Highway",
    location: "Maharashtra",
    mode: "Toll / BOT",
    length: "104.60 Km",
    clientAuthority: "NHAI",
    description:
      "High-density national corridor improvement connecting western Maharashtra with central and southern India, including reinforced concrete box culverts and toll plazas.",
    featured: false,
    image: "/assets/PuneSolapurSectionofNH-9.b8db950c.jpg",
  },
  {
    id: "bypasses-nh52-nh65",
    title:
      "Development of existing roads where bypasses are provided, in towns/village (Ule, Suratgaon, Malumbra, Tuljapur, Shingoli & Yedshi) On NH-211 (New-NH-52) & Naldurg, Omerga on NH-09 (New NH-65) in the State of Maharashtra on EPC Mode",
    shortTitle: "Urban Town Bypasses on NH-52 & NH-65 (EPC Mode)",
    category: "National Highway",
    location: "Tuljapur, Yedshi, Naldurg, Omerga, Maharashtra",
    mode: "EPC Mode",
    length: "Multiple Town Bypasses",
    clientAuthority: "MoRTH / PWD",
    description:
      "Urban bypass infrastructure diverting regional freight traffic around congested historical and commercial settlements.",
    featured: false,
    image: "/assets/TuIjapurShingoli&Yedshi.e5c4b150.jpg",
  },
  {
    id: "paud-kolvan-lonavala-mdr26",
    title:
      "Improvement to Paud Kolvan Lonavala Road, MDR 26, Km 16/400 to 41/300, Tal. Maval, Dist. Pune, and associated roads",
    shortTitle: "Paud - Kolvan - Lonavala Road (MDR 26)",
    category: "State Highway",
    location: "Maval / Pune District",
    mode: "State EPC",
    length: "24.90 Km",
    clientAuthority: "PWD Maharashtra",
    description:
      "Ghat section realignment, protective breast walls, side drains, and flexible bituminous surfacing in eco-sensitive Sahyadri mountain areas.",
    featured: false,
    image: "/assets/PaudKolvanLonavalaRoad.d49bff8f.jpg",
  },
  {
    id: "malharpeth-pandharpur-sh143",
    title:
      "Improvements to Malharpeth-Umbraj-Masur-Mayani-Diganchi-Mahud Pandharpur Road S.H.143 (Km 55/000 to 153/420) in the state of Maharashtra under MRIP on Hybrid Annuity Mode",
    shortTitle: "Malharpeth - Pandharpur Road SH-143 (98.42 Km)",
    category: "State Highway",
    location: "Satara / Solapur, Maharashtra",
    mode: "MRIP Hybrid Annuity Mode (HAM)",
    length: "98.42 Km",
    clientAuthority: "Maharashtra State Road Improvement Project (MRIP)",
    description:
      "Massive pilgrimage and agriculture corridor upgrade connecting Pandharpur shrine with western Maharashtra via 2-lane paved shoulder configuration.",
    featured: false,
    image: "/assets/MalharpethUmbrajMasurMayani1.359e3842.jpeg",
    gallery: [
      "/assets/MalharpethUmbrajMasurMayani1.359e3842.jpeg",
      "/assets/MalharpethUmbrajMasurMayani2.a798fd47.jpeg",
      "/assets/MalharpethUmbrajMasurMayani3.dd0ca32c.jpeg",
    ],
  },
  {
    id: "pune-tourist-corridors",
    title:
      "Improvement of roads connecting the tourist destinations in Pune District (Panshet, Lonavala, Rajmachi, Torna, Sinhgad, Purandar)",
    shortTitle: "Pune District Tourist Destinations Circuit Roads",
    category: "Corridor",
    location: "Pune District, Maharashtra",
    mode: "Tourism Infrastructure Fund",
    length: "51.00 Km Circuit",
    clientAuthority: "PWD Maharashtra / Tourism Dept.",
    description:
      "Enhancement of high-grade tourist access roads to historical Maratha forts and scenic reservoirs, featuring reinforced crash barriers and view points.",
    featured: false,
    image: "/assets/PanshetLonavalaRajmachiTornaSinhgad51km1.3bdca276.jpeg",
    gallery: [
      "/assets/PanshetLonavalaRajmachiTornaSinhgad51km1.3bdca276.jpeg",
      "/assets/PanshetLonavalaRajmachiTornaSinhgad51km2.47423d77.jpeg",
      "/assets/PanshetLonavalaRajmachiTornaSinhgad51km3.874f3f18.jpeg",
    ],
  },
  {
    id: "pune-industrial-corridors",
    title:
      "Improvements to Roads in Industrial Sector in Pune District (Hinjewadi, Chakan, Talegaon, Ranjangaon, Jejuri)",
    shortTitle: "Pune Industrial Corridors Network (58 Km)",
    category: "Corridor",
    location: "Pune District (MIDC Corridors)",
    mode: "Industrial Infrastructure",
    length: "58.00 Km",
    clientAuthority: "MIDC / PWD Maharashtra",
    description:
      "Heavy axle load road engineering connecting premier automobile, IT, and manufacturing hubs across Hinjewadi IT Park, Chakan Auto Cluster, and Ranjangaon.",
    featured: false,
    image: "/assets/HinjewadiChakanTalegaonRanjangaonJejuri58km1.4f478146.jpeg",
    gallery: [
      "/assets/HinjewadiChakanTalegaonRanjangaonJejuri58km1.4f478146.jpeg",
      "/assets/HinjewadiChakanTalegaonRanjangaonJejuri58km2.b15d0388.jpeg",
      "/assets/HinjewadiChakanTalegaonRanjangaonJejuri58km3.b421c4dc.jpeg",
    ],
  },
  {
    id: "mahabaleshwar-satara-sh140",
    title:
      "Improvements to Mahabaleshwar Satara Rahimatpur Pusesawali Vita Road, SH - 140 in the state of Maharashtra under MRIP on Hybrid Annuity Mode",
    shortTitle: "Mahabaleshwar - Satara - Vita Road SH-140 (71 Km)",
    category: "State Highway",
    location: "Satara / Western Ghats",
    mode: "MRIP Hybrid Annuity Mode",
    length: "71.00 Km",
    clientAuthority: "PWD / MRIP",
    description:
      "Scenic high-altitude highway rehabilitation with reinforced slope stabilization, retaining walls, and specialized ghat drainage systems.",
    featured: false,
    image: "/assets/MahabaleshwarSataraRahimatpur71km1.eba7f8c5.jpeg",
    gallery: [
      "/assets/MahabaleshwarSataraRahimatpur71km1.eba7f8c5.jpeg",
      "/assets/MahabaleshwarSataraRahimatpur71km2.6ea05bd8.jpeg",
      "/assets/MahabaleshwarSataraRahimatpur71km3.1e56a823.jpeg",
    ],
  },
  {
    id: "dpr-up-national-highways",
    title:
      "Consultancy Services for Feasibility study and preparation of Detail Project Report (DPR) for improvement and up-gradation of newly declared National Highways in the State of Uttar Pradesh",
    shortTitle: "Feasibility Study & DPR for Newly Declared National Highways (UP)",
    category: "Feasibility & DPR",
    location: "Uttar Pradesh",
    mode: "Consultancy / DPR",
    length: "Multi-corridor Feasibility",
    clientAuthority: "MoRTH / UP PWD",
    description:
      "Extensive alignment surveys, traffic census, bridge structural investigations, and techno-economic DPR preparation for interstate freight corridors.",
    featured: false,
    image: "/assets/NationalHighwaysUttarPradesh1.3bcab39a.jpeg",
  },
];
