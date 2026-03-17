export type ProductSectionData = {
  id: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  benefits: string[];
  features: Array<{ icon: "shield" | "bolt" | "wrench" | "sun" | "battery" | "car"; label: string }>;
};

export const productSections: ProductSectionData[] = [
  {
    id: "inverters",
    title: "Inverters",
    description:
      "Efficient inverter solutions for homes and businesses—designed for stable backup power and smooth performance.",
    image: { src: "/images/inverter.svg", alt: "Inverter illustration" },
    benefits: ["Stable backup power", "Optimized efficiency", "Safe, neat installation"],
    features: [
      { icon: "bolt", label: "High efficiency" },
      { icon: "shield", label: "Safety first" },
      { icon: "wrench", label: "Professional setup" }
    ]
  },
  {
    id: "home-batteries",
    title: "Home Batteries",
    description:
      "Long-lasting batteries to keep lights, fans, routers, and essential appliances running during power cuts.",
    image: { src: "/images/home-battery.svg", alt: "Home battery illustration" },
    benefits: ["Long backup", "Reliable performance", "Genuine, authorized products"],
    features: [
      { icon: "battery", label: "Long-lasting" },
      { icon: "shield", label: "Authorized products" },
      { icon: "bolt", label: "Consistent output" }
    ]
  },
  {
    id: "vehicle-batteries",
    title: "Vehicle Batteries",
    description:
      "Battery options for cars, bikes, trucks, and other vehicles—chosen for strong cranking power and durability.",
    image: { src: "/images/vehicle-battery.svg", alt: "Vehicle battery illustration" },
    benefits: ["Strong start performance", "Trusted brands", "Quick guidance & support"],
    features: [
      { icon: "car", label: "For cars & bikes" },
      { icon: "shield", label: "Reputed brands" },
      { icon: "wrench", label: "Support & replacement" }
    ]
  },
  {
    id: "solar-panels",
    title: "Solar Panels (On-Grid / Off-Grid)",
    description:
      "Government-approved solar panels and system solutions to reduce bills and increase energy independence.",
    image: { src: "/images/solar-panel.svg", alt: "Solar panel illustration" },
    benefits: ["Lower electricity bills", "Sustainable energy", "Right-fit system design"],
    features: [
      { icon: "sun", label: "Clean energy" },
      { icon: "shield", label: "Approved quality" },
      { icon: "bolt", label: "High performance" }
    ]
  },
  {
    id: "solar-installation",
    title: "Solar Installation & Maintenance",
    description:
      "End-to-end service—site assessment, installation, wiring, commissioning, and ongoing maintenance.",
    image: { src: "/images/installation.svg", alt: "Solar installation illustration" },
    benefits: ["Safe installation", "Transparent guidance", "Reliable after-sales support"],
    features: [
      { icon: "wrench", label: "Expert installation" },
      { icon: "shield", label: "Quality workmanship" },
      { icon: "sun", label: "Optimized yield" }
    ]
  }
];

