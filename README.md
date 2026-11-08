# CDF Infra Con Pvt. Ltd. — Public Website

Modernized corporate web platform for **CDF Infra Con Pvt. Ltd.** (CDF Infracon Private Limited) — premier highway, bridge, and infrastructure engineering consultants in India.

## 🚀 Built With

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static Site Generation / SSG)
- **UI Library:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📂 Site Architecture

- `/` — Corporate Homepage with interactive hero slider, stats, capabilities overview, and tender portals dock.
- `/about` — Company history, executive leadership, technical pillars, and corporate credo.
- `/projects` — Comprehensive highway and expressway portfolio with real-time search, category filters, and detail modals.
- `/services` — Services directory across all 7 consulting disciplines.
- `/services/[id]` — Dedicated static pages for each vertical:
  - Authority Engineer / Independent Engineer
  - Detailed Project Report (DPR)
  - Operation & Maintenance (O&M) Supervision
  - Road Safety Consulting & Audits
  - Project Management Consultancy (PMC)
  - Design Engineering & Pavement Design
  - Technical Arbitration & Dispute Resolution
- `/equipment` — Advanced non-destructive testing assets (ATCC, NSV, FWD, MBIU, Retro-reflectometer) with technical specifications.
- `/careers` — Civil engineering and highway consulting job openings with interactive application flow.
- `/contact` — Headquarters address, phone, email, QR digital vCard, Google Maps embed, and interactive inquiry form.
- `/leadership/[slug]` — Executive profiles (Chairman, MD, Director) and Senior Technical Advisors.

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (SSG)
npm run build

# Start production server
npm start
```

## 🔄 Backward Compatibility

All legacy routes from `cdfic.com` (e.g., `/pages/about`, `/pages/projects`, `/pages/ourEquipment`, `/pages/carrers`, `/pages/contact`) automatically issue permanent HTTP 308 redirects to their canonical modern endpoints.
