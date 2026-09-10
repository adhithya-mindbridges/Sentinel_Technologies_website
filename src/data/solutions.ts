import { Camera, Lock, Flame, Volume2, Building, Network, ScanLine, BrainCircuit, Boxes, Bot, Layers, type LucideIcon } from "lucide-react";

export interface Solution {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  path: string;
}

export const solutions: Solution[] = [
  {
    slug: "cctv",
    icon: Camera,
    title: "Video Surveillance (CCTV)",
    description:
      "Advanced camera systems with high-definition recording, real-time monitoring, and intelligent analytics for comprehensive security coverage.",
    features: ["HD/4K Recording", "Night Vision", "Motion Detection", "Remote Access"],
    path: "/solutions/cctv",
  },
  {
    slug: "access-control",
    icon: Lock,
    title: "Access Control Systems",
    description:
      "Sophisticated entry management solutions including card readers, biometric systems, and mobile access control.",
    features: ["Biometric Access", "Card Readers", "Mobile Integration", "Audit Trails"],
    path: "/solutions/access-control",
  },
  {
    slug: "fire-alarm",
    icon: Flame,
    title: "Fire Alarm Systems",
    description:
      "Comprehensive fire detection and notification systems designed to protect lives and property with early warning capabilities.",
    features: ["Smoke Detection", "Heat Sensors", "Emergency Alerts", "Central Monitoring"],
    path: "/solutions/fire-alarm",
  },
  {
    slug: "public-address",
    icon: Volume2,
    title: "Public Address Systems",
    description:
      "Clear communication solutions for emergency announcements, background music, and general facility-wide communications.",
    features: ["Zone Control", "Emergency Override", "Background Music", "Clear Audio"],
    path: "/solutions/public-address",
  },
  {
    slug: "building-automation",
    icon: Building,
    title: "Building Automation",
    description:
      "Intelligent building management systems that optimize energy efficiency, comfort, and operational performance.",
    features: ["HVAC Control", "Lighting Automation", "Energy Management", "Remote Monitoring"],
    path: "/solutions/building-automation",
  },
  {
    slug: "it-infrastructure",
    icon: Network,
    title: "IT Infrastructure",
    description:
      "Structured cabling, network infrastructure, and IT solutions that form the backbone of modern security systems.",
    features: ["Structured Cabling", "Network Setup", "Server Installation", "Data Centers"],
    path: "/solutions/it-infrastructure",
  },
  {
    slug: "gate-automation",
    icon: ScanLine,
    title: "RFID & ANPR Gate Automation",
    description:
      "Automated vehicle and gate-management solutions for ports, factories, logistics facilities, warehouses and campuses.",
    features: ["RFID Vehicle Identification", "ANPR Recognition", "Boom Barrier Integration", "Automated Entry/Exit"],
    path: "/solutions/gate-automation",
  },
  {
    slug: "ai-video-analytics",
    icon: BrainCircuit,
    title: "AI Video Analytics",
    description:
      "AI that transforms conventional CCTV infrastructure into an intelligent platform, detecting, analysing and responding to events in real time.",
    features: ["Industrial Safety AI", "Security AI", "People Intelligence", "Vehicle Intelligence"],
    path: "/solutions/ai-video-analytics",
  },
  {
    slug: "vms",
    icon: Boxes,
    title: "VMS - Intelligent Video Management",
    description:
      "An open, scalable Video Management System with centralized camera control, multi-site architecture and AI analytics integration.",
    features: ["Camera & Integration", "Live & Recorded Video", "Multi-Site Architecture", "AI Analytics Integration"],
    path: "/solutions/vms",
  },
  {
    slug: "sentinel-x-labs",
    icon: Bot,
    title: "Sentinel X-Labs",
    description:
      "Autonomous intelligence platforms - AI-powered drones, robotics and underwater vehicles with edge AI and swarm intelligence.",
    features: ["Fixed-Wing & Multi-Rotor Drones", "Underwater Intelligence", "Edge AI", "Swarm Intelligence"],
    path: "/solutions/sentinel-x-labs",
  },
  {
    slug: "elv-systems-integration",
    icon: Layers,
    title: "ELV Systems Integration",
    description:
      "CCTV, access control, fire alarm, public address, building automation and IT infrastructure integrated into one coordinated ELV architecture.",
    features: ["Unified Project Management", "Cross-System Triggers", "Structured Integration Process", "Single Point of Accountability"],
    path: "/solutions/elv-systems-integration",
  },
];

export const getSolutionBySlug = (slug: string) => solutions.find((s) => s.slug === slug);
