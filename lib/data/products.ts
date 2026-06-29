export interface Product {
  slug: string;
  name: string;
  category: "Industrial" | "Medical" | "Logistics" | "Defense";
  tagline: string;
  description: string;
  longDescription: string;
  specs: {
    speed: string;
    payload: string;
    battery: string;
    dof: string;
    height?: string;
    weight?: string;
    ip_rating?: string;
    range?: string;
  };
  features: string[];
  applications: string[];
  price: string;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "atlas-x1",
    name: "ATLAS X1",
    category: "Industrial",
    tagline: "Precision meets endurance",
    description:
      "The ATLAS X1 is our flagship industrial robot designed for heavy manufacturing environments. With 28 degrees of freedom and AI-driven path planning, it performs complex assembly tasks with sub-millimeter precision.",
    longDescription:
      "The ATLAS X1 represents the pinnacle of industrial robotics engineering. Built for extreme conditions, it operates in temperatures from -20°C to 60°C and features our proprietary NeuroPath™ AI system for real-time adaptive decision making. Its modular end-effector system allows rapid tooling changes, reducing downtime to near zero. The X1 integrates seamlessly with existing MES/ERP systems via our PURTC Connect API.",
    specs: {
      speed: "3.2 m/s",
      payload: "50 kg",
      battery: "8 hours",
      dof: "28 DOF",
      height: "1.8 m",
      weight: "185 kg",
      ip_rating: "IP67",
      range: "2.5 m",
    },
    features: [
      "NeuroPath™ AI navigation system",
      "Sub-millimeter precision (±0.05mm)",
      "Self-diagnostic maintenance alerts",
      "OPC-UA & MQTT connectivity",
      "Modular end-effector system",
      "Emergency collision avoidance",
    ],
    applications: [
      "Automotive assembly lines",
      "Aerospace component manufacturing",
      "Heavy machinery production",
      "Metal fabrication",
    ],
    price: "Contact for pricing",
    image: "/images/products/atlas-x1.jpg",
    featured: true,
  },
  {
    slug: "helix-m3",
    name: "HELIX M3",
    category: "Medical",
    tagline: "Surgical precision, zero compromise",
    description:
      "The HELIX M3 is a surgical-grade robot engineered for medical environments. Its haptic feedback system and tremor-cancellation technology enable procedures with unprecedented accuracy.",
    longDescription:
      "The HELIX M3 redefines medical robotics. FDA-cleared and CE-marked, it delivers consistent performance in the most demanding clinical settings. Its 7-axis arm with haptic force feedback gives surgeons unparalleled tactile control, while the AI co-pilot system monitors vital parameters and adjusts in real-time. Sterilization-compatible housing ensures full OR compliance.",
    specs: {
      speed: "0.8 m/s",
      payload: "5 kg",
      battery: "12 hours",
      dof: "32 DOF",
      height: "1.4 m",
      weight: "95 kg",
      ip_rating: "IP69K",
      range: "1.2 m",
    },
    features: [
      "Haptic force feedback (0.01N resolution)",
      "Tremor cancellation < 0.1mm",
      "FDA 510(k) cleared",
      "OR-grade sterilization compatible",
      "AI co-pilot monitoring",
      "Remote telepresence capable",
    ],
    applications: [
      "Minimally invasive surgery",
      "Orthopedic procedures",
      "Neurosurgery assistance",
      "Rehabilitation therapy",
    ],
    price: "Contact for pricing",
    image: "/images/products/helix-m3.jpg",
    featured: true,
  },
  {
    slug: "swift-l7",
    name: "SWIFT L7",
    category: "Logistics",
    tagline: "Speed redefined, efficiency maximized",
    description:
      "The SWIFT L7 autonomous mobile robot (AMR) navigates complex warehouse environments at speed, optimizing picking routes with real-time AI path optimization.",
    longDescription:
      "The SWIFT L7 transforms warehouse operations. Using our proprietary SLAM 3.0 navigation system with LiDAR fusion and computer vision, it builds and updates facility maps dynamically. Its 360° obstacle avoidance operates at full speed, ensuring safety without sacrificing throughput. The L7 integrates with all major WMS platforms and coordinates with fleet management for optimal task distribution.",
    specs: {
      speed: "2.2 m/s",
      payload: "300 kg",
      battery: "10 hours",
      dof: "4 DOF",
      height: "0.3 m",
      weight: "120 kg",
      ip_rating: "IP54",
      range: "Unlimited (mapped)",
    },
    features: [
      "SLAM 3.0 LiDAR navigation",
      "300kg payload capacity",
      "Auto-charging (< 90 min)",
      "WMS/ERP native integration",
      "Fleet coordination AI",
      "Voice + app control interface",
    ],
    applications: [
      "E-commerce fulfillment",
      "Pharmaceutical warehousing",
      "Cold chain logistics",
      "Retail distribution centers",
    ],
    price: "Contact for pricing",
    image: "/images/products/swift-l7.jpg",
    featured: true,
  },
  {
    slug: "sentinel-d2",
    name: "SENTINEL D2",
    category: "Defense",
    tagline: "Vigilance without fatigue",
    description:
      "The SENTINEL D2 is a tactical autonomous ground vehicle designed for perimeter security, surveillance, and hazardous area reconnaissance missions.",
    longDescription:
      "The SENTINEL D2 operates in conditions where human presence is too dangerous or resource-intensive. Its mil-spec chassis handles terrain up to 45° inclines, while the multi-sensor suite (thermal, optical, acoustic) provides 360° situational awareness. The system operates fully autonomously or under human supervision, with encrypted communications and AI threat classification.",
    specs: {
      speed: "4.5 m/s",
      payload: "80 kg",
      battery: "16 hours",
      dof: "6 DOF",
      height: "0.9 m",
      weight: "240 kg",
      ip_rating: "IP68 MIL-STD",
      range: "5 km (autonomous)",
    },
    features: [
      "Mil-spec weatherproof chassis",
      "Thermal + optical + acoustic sensors",
      "Encrypted mesh networking",
      "AI threat classification",
      "NBC detection capability",
      "Remote EOD capability",
    ],
    applications: [
      "Military base perimeter",
      "Critical infrastructure protection",
      "Hazmat reconnaissance",
      "Border surveillance",
    ],
    price: "Government contracts only",
    image: "/images/products/sentinel-d2.jpg",
  },
  {
    slug: "purtcarm-pro",
    name: "PURTCARM PRO",
    category: "Industrial",
    tagline: "Collaborative intelligence at your side",
    description:
      "The PURTCARM PRO is a 7-axis collaborative robot arm that works safely alongside humans on the factory floor. No safety cage required.",
    longDescription:
      "The PURTCARM PRO redefines human-robot collaboration. Its force-torque sensing on all joints means it instantly detects contact and responds safely — enabling side-by-side operation without safety cages. The intuitive teach-by-demonstration interface reduces programming time from days to minutes. With 1,400mm reach and ±0.02mm repeatability, it handles precision tasks across automotive, electronics, and food production.",
    specs: {
      speed: "2.1 m/s",
      payload: "16 kg",
      battery: "Corded",
      dof: "28 DOF",
      height: "0.4 m (base)",
      weight: "47 kg",
      ip_rating: "IP54",
      range: "1.4 m",
    },
    features: [
      "Human-safe force-torque sensing",
      "Teach-by-demonstration",
      "±0.02mm repeatability",
      "No safety cage required",
      "1400mm reach",
      "Quick-change tool system",
    ],
    applications: [
      "Electronics assembly",
      "Quality inspection",
      "Machine tending",
      "Food & beverage packaging",
    ],
    price: "Contact for pricing",
    image: "/images/products/purtcarm-pro.jpg",
  },
  {
    slug: "aero-scout",
    name: "AERO SCOUT",
    category: "Logistics",
    tagline: "Eyes above, intelligence below",
    description:
      "The AERO SCOUT is an autonomous UAV system for large-scale inventory management, facility inspection, and indoor/outdoor mapping.",
    longDescription:
      "The AERO SCOUT brings aerial intelligence to industrial operations. Its patented collision-avoidance LIDAR array enables safe indoor flight at full operational speed. The onboard computer vision system reads barcodes, RFID tags, and identifies inventory discrepancies in real-time. With 10-hour flight time on a single charge and automatic return-to-base, it provides continuous aerial monitoring without human intervention.",
    specs: {
      speed: "8 m/s",
      payload: "2 kg",
      battery: "10 hours",
      dof: "6 DOF",
      height: "0.25 m",
      weight: "4.2 kg",
      ip_rating: "IP53",
      range: "2 km (RF range)",
    },
    features: [
      "3D LiDAR collision avoidance",
      "Indoor/outdoor capable",
      "Barcode & RFID reading",
      "10-hour continuous flight",
      "Auto-dock & charge",
      "Real-time inventory AI",
    ],
    applications: [
      "Warehouse inventory counting",
      "Facility inspection",
      "Asset tracking",
      "Aerial surveillance",
    ],
    price: "Contact for pricing",
    image: "/images/products/aero-scout.jpg",
  },
];
