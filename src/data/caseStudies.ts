import automotiveManufacturingRobotics from "@/assets/case-studies/automotive-manufacturing-robotics.jpg";
import networkServerCabling from "@/assets/case-studies/network-server-cabling.jpg";
import portContainerTerminal from "@/assets/case-studies/port-container-terminal.jpg";
import industrialAutomationFactory from "@/assets/case-studies/industrial-automation-factory.jpg";
import accessControlKeypad from "@/assets/case-studies/access-control-keypad.jpg";
import securityCameraInstallation from "@/assets/case-studies/security-camera-installation.jpg";
import electronicsCleanroomManufacturing from "@/assets/case-studies/electronics-cleanroom-manufacturing.jpg";

export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  industry: string;
  location?: string;
  scale?: string;
  highlights?: string[];
  solutionTags: string[];
  relatedSolutionSlugs: string[];
  summary: string;
  scope: string[];
  impact: string;
  /** Representative imagery (not an actual photo of this client's site - see alt text). */
  image: string;
  imageAlt: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "daimler-dicv",
    client: "Daimler India Commercial Vehicles",
    title: "Integrated Security & Gate Management Solutions",
    industry: "Automotive Manufacturing",
    image: automotiveManufacturingRobotics,
    imageAlt: "Robotic arms welding a car body on an automotive manufacturing line (representative image)",
    scale: "100+ Cameras",
    solutionTags: ["CCTV Surveillance", "Boom Barriers", "Gate Automation"],
    relatedSolutionSlugs: ["cctv", "access-control"],
    summary:
      "Sentinel Technologies delivered integrated security and gate-management solutions for Daimler India Commercial Vehicles (DICV), supporting the security requirements of its automotive manufacturing environment.",
    scope: [
      "CCTV surveillance systems",
      "Boom barrier systems",
      "Gate security solutions",
      "Security system integration",
      "Installation, testing and commissioning",
      "Ongoing system support",
    ],
    impact:
      "Enhanced perimeter visibility, controlled vehicular movement and strengthened security operations across the facility.",
  },
  {
    slug: "tvs-srichakra",
    client: "TVS Srichakra Limited",
    title: "Large-Scale CCTV & Industrial AI Deployment",
    industry: "Tyre Manufacturing",
    image: securityCameraInstallation,
    imageAlt: "Outdoor security cameras mounted on a pole (representative image)",
    scale: "400+ Cameras",
    solutionTags: ["CCTV Surveillance", "Industrial AI", "Video Analytics"],
    relatedSolutionSlugs: ["cctv"],
    summary:
      "Sentinel Technologies implemented a large-scale surveillance infrastructure integrated with Industrial AI capabilities for TVS Srichakra's manufacturing environment.",
    scope: [
      "400+ CCTV cameras",
      "Enterprise video surveillance",
      "Industrial AI analytics",
      "Manufacturing safety intelligence",
      "Centralized monitoring",
      "Network and surveillance infrastructure",
      "System integration and commissioning",
    ],
    impact:
      "Improved plant-wide visibility while enabling the transition from conventional surveillance toward intelligent, AI-assisted safety and operational monitoring.",
  },
  {
    slug: "foxconn-group",
    client: "Foxconn Group",
    title: "Enterprise Surveillance & Massive-Scale Network Infrastructure",
    industry: "Electronics Manufacturing",
    image: networkServerCabling,
    imageAlt: "Structured network cabling and switches in a server rack (representative image)",
    scale: "1,500+ Cameras | 10M+ Metres of CAT6 Cabling",
    highlights: ["1,500+ CCTV Cameras", "10M+ Metres of CAT6 Cable"],
    solutionTags: ["CCTV", "Data Centre", "Structured Cabling", "Network Infrastructure"],
    relatedSolutionSlugs: ["cctv", "it-infrastructure"],
    summary:
      "Sentinel Technologies executed one of its major large-scale infrastructure deployments for Foxconn Group, combining enterprise surveillance with extensive network and data infrastructure.",
    scope: [
      "Enterprise CCTV surveillance",
      "Large-scale CAT6 structured cabling",
      "Fibre and network infrastructure",
      "Data-centre infrastructure",
      "Rack and connectivity solutions",
      "Surveillance network integration",
      "Testing and commissioning",
    ],
    impact:
      "Created a scalable physical security and network foundation capable of supporting the demanding requirements of a high-volume electronics manufacturing environment.",
  },
  {
    slug: "kamarajar-port",
    client: "Kamarajar Port Limited",
    title: "RFID & ANPR-Based Intelligent Gate Automation",
    industry: "Ports & Critical Infrastructure",
    image: portContainerTerminal,
    imageAlt: "Shipping containers lined up at a port terminal (representative image)",
    solutionTags: ["RFID", "ANPR", "Gate Automation", "Vehicle Management"],
    relatedSolutionSlugs: ["access-control"],
    summary:
      "Sentinel Technologies implemented an integrated RFID and ANPR-based Gate Automation System for Kamarajar Port Limited. The solution brings together vehicle identification and automated gate-control technologies to streamline and secure vehicle movements within the port environment.",
    scope: [
      "RFID-based vehicle identification",
      "ANPR-based vehicle recognition",
      "Automated gate management",
      "Vehicle entry and exit workflows",
      "Access-control integration",
      "Physical gate equipment integration",
      "Centralized monitoring",
      "System integration and commissioning",
    ],
    impact:
      "Digitized vehicle identification and gate operations while improving security, traceability and operational efficiency at a critical infrastructure facility.",
  },
  {
    slug: "hero-motocorp",
    client: "Hero MotoCorp",
    title: "Enterprise CCTV Surveillance",
    industry: "Automotive Manufacturing",
    image: industrialAutomationFactory,
    imageAlt: "Robotic arms on an automated factory production line (representative image)",
    scale: "300+ Cameras",
    solutionTags: ["CCTV Surveillance"],
    relatedSolutionSlugs: ["cctv"],
    summary:
      "Sentinel Technologies delivered a comprehensive CCTV surveillance solution for Hero MotoCorp, supporting security monitoring across its manufacturing environment.",
    scope: [
      "300+ CCTV cameras",
      "Surveillance network infrastructure",
      "Centralized video monitoring",
      "Recording and storage integration",
      "Installation and commissioning",
    ],
    impact: "Strengthened facility-wide surveillance coverage and centralized security monitoring.",
  },
  {
    slug: "avnl-avadi",
    client: "AVNL - Avadi",
    title: "Integrated CCTV & Access Control",
    industry: "Defence Manufacturing",
    image: accessControlKeypad,
    imageAlt: "Illuminated numeric keypad on an access-controlled door (representative image)",
    location: "Avadi, Chennai",
    solutionTags: ["CCTV Surveillance", "Access Control"],
    relatedSolutionSlugs: ["cctv", "access-control"],
    summary:
      "Sentinel Technologies implemented integrated physical security solutions for AVNL at Avadi, combining video surveillance and access-control technologies.",
    scope: [
      "CCTV surveillance",
      "Access-control systems",
      "Security infrastructure",
      "System integration",
      "Testing and commissioning",
    ],
    impact:
      "Enhanced monitoring and controlled access across sensitive operational environments through an integrated physical-security architecture.",
  },
  {
    slug: "tata-electronics",
    client: "Tata Electronics Private Limited",
    title: "Turnkey Integrated Security & Command Centre Solution",
    industry: "Electronics Manufacturing",
    image: electronicsCleanroomManufacturing,
    imageAlt: "Technicians in protective suits working in an electronics cleanroom (representative image)",
    scale: "1,800+ Cameras | 100+ Access-Controlled Doors",
    highlights: [
      "1,800+ CCTV Cameras",
      "100+ Access-Controlled Doors",
      "Access Control-ERP Integration",
      "Integrated Command & Control Centre",
    ],
    solutionTags: [
      "CCTV",
      "Access Control",
      "Physical Barriers",
      "API/ERP Integration",
      "Command & Control Centre",
    ],
    relatedSolutionSlugs: ["cctv", "access-control"],
    summary:
      "Sentinel Technologies delivered a major turnkey integrated security deployment for Tata Electronics Private Limited, bringing together surveillance, access management, physical security and enterprise-system integration.",
    scope: [
      "1,800+ CCTV cameras",
      "100+ access-controlled doors",
      "Enterprise access-control system",
      "API-based integration",
      "Access-control integration with ERP",
      "Physical security barriers",
      "Surveillance infrastructure",
      "Centralized monitoring",
      "Command & Control Centre setup",
      "System integration",
      "Testing and commissioning",
      "Turnkey project execution",
    ],
    impact:
      "Created a unified security environment connecting physical security infrastructure with enterprise workflows and centralized command-and-control operations.",
  },
  {
    slug: "pegatron",
    client: "Pegatron",
    title: "Integrated Security & Infrastructure Deployment",
    industry: "Electronics Manufacturing",
    image: networkServerCabling,
    imageAlt: "Structured network cabling and switches in a server rack (representative image)",
    location: "Mahindra World City, Chengalpattu",
    scale: "800+ Cameras",
    solutionTags: ["CCTV", "Access Control", "Infrastructure Cabling"],
    relatedSolutionSlugs: ["cctv", "access-control", "it-infrastructure"],
    summary:
      "Sentinel Technologies delivered an integrated security and infrastructure solution for Pegatron's manufacturing facility at Mahindra World City, Chengalpattu.",
    scope: [
      "800+ CCTV cameras",
      "Access-control systems",
      "Structured infrastructure cabling",
      "Surveillance network infrastructure",
      "Centralized video monitoring",
      "System integration",
      "Installation, testing and commissioning",
    ],
    impact:
      "Established a robust and scalable surveillance, access-control and network infrastructure supporting the security requirements of a large electronics manufacturing operation.",
  },
];

export const getCaseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const enterpriseScaleStats = [
  { value: "10,000+", label: "Cameras Across Featured Deployments" },
  { value: "10M+", label: "Metres of CAT6 Infrastructure" },
  { value: "15", label: "Enterprise-Scale Projects Featured" },
];

export const technologyStrip = [
  "CCTV",
  "AI",
  "VMS",
  "Access Control",
  "Gate Automation",
  "RFID",
  "ANPR",
  "Data Centre",
  "Structured Cabling",
  "Command & Control",
];
