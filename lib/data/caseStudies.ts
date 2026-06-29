export interface CaseStudy {
  slug: string;
  industry: "Manufacturing" | "Healthcare" | "Logistics" | "Mining";
  client: string;
  title: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: {
    roi: string;
    timeSaved: string;
    errorReduction: string;
    payback?: string;
  };
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  robotUsed: string;
  image: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "autotech-manufacturing",
    industry: "Manufacturing",
    client: "AutoTech Industries (Confidential)",
    title: "Automating a 12-Shift Assembly Line with ATLAS X1",
    challenge:
      "A leading automotive OEM faced critical bottlenecks in engine block assembly, with human error rates causing 2.3% defect rates and $4.7M in annual rework costs.",
    solution:
      "We deployed 18 ATLAS X1 units across three assembly cells, integrated with the client's existing SAP MES via PURTC Connect API. The robots handle torque-sensitive bolt assembly, gasket placement, and quality vision checks.",
    results:
      "Within 6 months of deployment, defect rates dropped to 0.07%, rework costs eliminated, and throughput increased by 34%. The 24/7 operation capability added equivalent of 5 full production shifts per week.",
    metrics: {
      roi: "340%",
      timeSaved: "12,400 hrs/year",
      errorReduction: "97%",
      payback: "14 months",
    },
    quote:
      "The PURTC team didn't just sell us robots — they redesigned our entire assembly philosophy. The ROI exceeded every projection we had.",
    quoteAuthor: "VP of Manufacturing Operations",
    quoteRole: "Tier-1 Automotive Supplier",
    robotUsed: "ATLAS X1 × 18 units",
    image: "/images/cases/manufacturing.jpg",
    featured: true,
  },
  {
    slug: "nordic-health-surgery",
    industry: "Healthcare",
    client: "Nordic Health Network",
    title: "Transforming Orthopedic Surgery Precision with HELIX M3",
    challenge:
      "A Nordic hospital network sought to reduce post-operative complications in knee replacement surgeries, where 8.2% of cases required revision due to implant misalignment.",
    solution:
      "5 HELIX M3 units were installed across the network's surgical suites. Surgeons use the robot in supervised autonomy mode for bone resection and implant positioning, with real-time CT scan overlay guidance.",
    results:
      "Revision surgery rates dropped to 0.9% — an 89% improvement. Average surgery time reduced by 22 minutes. Patient satisfaction scores rose from 78 to 94 out of 100.",
    metrics: {
      roi: "280%",
      timeSaved: "1,800 OR hours/year",
      errorReduction: "89%",
      payback: "18 months",
    },
    quote:
      "The haptic feedback system gives me a level of precision I never thought possible. It's transformed how I approach complex revisions.",
    quoteAuthor: "Dr. Chief of Orthopedics",
    quoteRole: "Nordic Health Network",
    robotUsed: "HELIX M3 × 5 units",
    image: "/images/cases/healthcare.jpg",
    featured: true,
  },
  {
    slug: "globalship-logistics",
    industry: "Logistics",
    client: "GlobalShip Express",
    title: "Scaling E-Commerce Fulfillment 3× with SWIFT L7",
    challenge:
      "A major e-commerce fulfillment operator needed to triple their pick-and-pack throughput during peak seasons without proportionally scaling headcount.",
    solution:
      "We deployed a fleet of 45 SWIFT L7 AMRs with centralized fleet management, integrated with their existing Manhattan WMS. The robots handle goods-to-person picking, replenishment, and sortation.",
    results:
      "Peak season throughput increased 312%. Labor for picking operations reduced by 60% while error rates dropped to 0.03%. The facility now handles 85,000 orders/day vs. the previous 28,000.",
    metrics: {
      roi: "420%",
      timeSaved: "62,000 hrs/year",
      errorReduction: "94%",
      payback: "11 months",
    },
    quote:
      "We went from dreading peak season to welcoming it. The SWIFT fleet just scales with demand — it's changed our entire business model.",
    quoteAuthor: "COO",
    quoteRole: "GlobalShip Express",
    robotUsed: "SWIFT L7 × 45 units",
    image: "/images/cases/logistics.jpg",
    featured: true,
  },
  {
    slug: "ironridge-mining",
    industry: "Mining",
    client: "IronRidge Resources",
    title: "Eliminating Human Risk in Deep Mine Inspections with SENTINEL D2",
    challenge:
      "A multinational mining corporation needed to conduct daily structural inspections in unstable tunnel sections — zones too dangerous for human entry.",
    solution:
      "SENTINEL D2 units were deployed for autonomous tunnel patrol, structural integrity scanning with LiDAR mapping, and atmospheric monitoring (methane, CO₂, oxygen). The fleet operates 24/7 with remote supervision.",
    results:
      "Zero human injuries in inspection zones since deployment (previously 3 incidents per year). Inspection frequency increased from weekly to continuous. Early warning system detected a critical structural weakness 72 hours before potential collapse.",
    metrics: {
      roi: "500%+",
      timeSaved: "8,760 hrs/year",
      errorReduction: "100%",
      payback: "8 months",
    },
    quote:
      "PURTC's robots went where our people couldn't. Three years in, they've paid for themselves many times over — but the real value is unmeasurable in money.",
    quoteAuthor: "Chief Safety Officer",
    quoteRole: "IronRidge Resources",
    robotUsed: "SENTINEL D2 × 8 units",
    image: "/images/cases/mining.jpg",
    featured: false,
  },
];
