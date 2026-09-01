import automotiveManufacturingRobotics from "@/assets/case-studies/automotive-manufacturing-robotics.webp";
import networkServerCabling from "@/assets/case-studies/network-server-cabling.webp";
import portContainerTerminal from "@/assets/case-studies/port-container-terminal.webp";
import industrialAutomationFactory from "@/assets/case-studies/industrial-automation-factory.webp";
import accessControlKeypad from "@/assets/case-studies/access-control-keypad.webp";
import securityCameraInstallation from "@/assets/case-studies/security-camera-installation.webp";
import electronicsCleanroomManufacturing from "@/assets/case-studies/electronics-cleanroom-manufacturing.webp";

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyChallenge {
  intro: string;
  points: string[];
}

export interface CaseStudyFAQ {
  question: string;
  answer: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  /** Outcome-led headline used as the page H1 - what changed, not just who the client is. */
  headline: string;
  title: string;
  industry: string;
  location?: string;
  scale?: string;
  highlights?: string[];
  /** At-a-glance proof tiles shown as a metrics grid. */
  metrics: CaseStudyMetric[];
  challenge: CaseStudyChallenge;
  solutionTags: string[];
  relatedSolutionSlugs: string[];
  summary: string;
  scope: string[];
  impact: string;
  /** Facility types this project is relevant to - lets a reader in a similar environment self-identify. */
  targetFacilities: string[];
  /** Buyer roles this case study is written for. */
  targetRoles: string[];
  /** Objection-handling FAQ, also rendered as FAQPage schema. */
  faqs: CaseStudyFAQ[];
  /** Representative imagery (not an actual photo of this client's site - see alt text). */
  image: string;
  imageAlt: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "daimler-dicv",
    client: "Daimler India Commercial Vehicles",
    headline: "How Daimler India Commercial Vehicles Secured 100+ Camera Points and Automated Gate Control",
    title: "Integrated Security & Gate Management Solutions",
    industry: "Automotive Manufacturing",
    image: automotiveManufacturingRobotics,
    imageAlt: "Robotic arms welding a car body on an automotive manufacturing line (representative image)",
    scale: "100+ Cameras",
    metrics: [
      { value: "100+", label: "CCTV cameras deployed" },
      { value: "3", label: "Integrated technologies: CCTV, boom barriers, gate automation" },
    ],
    challenge: {
      intro:
        "A commercial-vehicle manufacturing campus sees continuous vehicle movement - suppliers, staff, contractors and finished units - through a limited number of gates. Every ungoverned entry point is a potential gap in an otherwise controlled facility.",
      points: [
        "High vehicle throughput across a limited number of controlled entry points",
        "Need for centralised visibility rather than isolated camera feeds",
        "Requirement to physically control, not just observe, vehicle access via boom barriers",
      ],
    },
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
      "100+ cameras and automated boom barriers now give Daimler continuous perimeter visibility and controlled, auditable vehicle movement across the manufacturing campus.",
    targetFacilities: ["Automotive & commercial vehicle plants", "Industrial manufacturing campuses", "Large multi-gate facilities"],
    targetRoles: ["Plant Head", "Security Head", "Facility Manager", "Procurement Manager"],
    faqs: [
      {
        question: "Does adding boom barriers and gate automation disrupt a live manufacturing campus?",
        answer:
          "Sentinel scopes gate automation and boom barrier installation around a facility's existing traffic patterns, so vehicle movement continues through alternate points while work is completed section by section.",
      },
      {
        question: "Can CCTV and gate automation be managed from a single system?",
        answer:
          "Yes. Sentinel integrates surveillance, boom barriers and gate security into one architecture, so vehicle movement can be monitored and controlled from a unified interface rather than separate, disconnected systems.",
      },
      {
        question: "Is this approach specific to automotive manufacturing?",
        answer:
          "No. The same integrated CCTV, boom barrier and gate-automation approach applies to any high-throughput industrial or manufacturing campus where vehicle access needs to be secured and controlled, not just recorded.",
      },
    ],
  },
  {
    slug: "tvs-srichakra",
    client: "TVS Srichakra Limited",
    headline: "How TVS Srichakra Turned Conventional Surveillance Into Plant-Wide Safety Intelligence",
    title: "Large-Scale CCTV & Industrial AI Deployment",
    industry: "Tyre Manufacturing",
    image: securityCameraInstallation,
    imageAlt: "Outdoor security cameras mounted on a pole (representative image)",
    scale: "400+ Cameras",
    metrics: [
      { value: "400+", label: "CCTV cameras deployed" },
      { value: "AI", label: "Industrial AI & video analytics layer" },
    ],
    challenge: {
      intro:
        "Conventional CCTV in a large manufacturing plant produces footage, not insight. Without an analytics layer, safety and operational risks are only discoverable after the fact - by someone manually reviewing recorded video.",
      points: [
        "Plant-wide surveillance coverage needed across a large manufacturing footprint",
        "Manual, reactive video review does not scale with plant size",
        "Need to transition from recording-only surveillance to real-time, analytics-driven monitoring",
      ],
    },
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
      "400+ cameras integrated with Industrial AI give TVS Srichakra plant-wide visibility and the shift from conventional surveillance to intelligent, AI-assisted safety and operational monitoring.",
    targetFacilities: ["Tyre & rubber manufacturing", "Industrial plants", "High-throughput manufacturing facilities"],
    targetRoles: ["Plant Head", "Safety Manager", "Security Head", "Operations Director"],
    faqs: [
      {
        question: "What does Industrial AI add to conventional CCTV?",
        answer:
          "Industrial AI analyses live video for safety and operational events as they happen, rather than leaving footage to be reviewed manually after an incident.",
      },
      {
        question: "Does adding AI analytics require replacing existing cameras?",
        answer:
          "Not necessarily. Sentinel's Industrial AI capability is designed to work with a facility's surveillance infrastructure, so analytics can be layered onto a camera network rather than requiring a full hardware replacement.",
      },
      {
        question: "Can this scale across a large manufacturing plant?",
        answer:
          "Yes. This deployment covers 400+ cameras across TVS Srichakra's plant on one centralised monitoring architecture, and the same approach scales to other large manufacturing footprints.",
      },
    ],
  },
  {
    slug: "foxconn-group",
    client: "Foxconn Group",
    headline: "1,500+ Cameras. 10M+ Metres of Cabling. One Integrated Backbone for Foxconn's Campus.",
    title: "Enterprise Surveillance & Massive-Scale Network Infrastructure",
    industry: "Electronics Manufacturing",
    image: networkServerCabling,
    imageAlt: "Structured network cabling and switches in a server rack (representative image)",
    scale: "1,500+ Cameras | 10M+ Metres of CAT6 Cabling",
    highlights: ["1,500+ CCTV Cameras", "10M+ Metres of CAT6 Cable"],
    metrics: [
      { value: "1,500+", label: "CCTV cameras deployed" },
      { value: "10M+", label: "Metres of CAT6 structured cabling" },
    ],
    challenge: {
      intro:
        "A high-volume electronics manufacturing campus needs physical security and network connectivity that can support its production scale from day one - not infrastructure retrofitted after the fact as the facility grows.",
      points: [
        "Enterprise-scale surveillance required across a high-volume manufacturing campus",
        "Network and data infrastructure needed to support demanding production and security workloads together",
        "Physical security and IT infrastructure had to be built as one coordinated system, not two separate projects",
      ],
    },
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
      "1,500+ cameras and 10M+ metres of CAT6 cabling now run on one integrated backbone - a scalable physical security and network foundation built for a high-volume electronics manufacturing environment.",
    targetFacilities: ["Electronics manufacturing", "High-volume production campuses", "Large industrial parks"],
    targetRoles: ["IT Infrastructure Head", "Plant Head", "Security Head", "Procurement Manager"],
    faqs: [
      {
        question: "Can security cameras and structured cabling be deployed as one project?",
        answer:
          "Yes. Sentinel planned and executed Foxconn's CCTV surveillance alongside its CAT6 structured cabling and network infrastructure as a single coordinated build, rather than two separate projects.",
      },
      {
        question: "How is cabling planned at a scale of 10M+ metres?",
        answer:
          "A deployment of this size is planned in phases across the facility's zones, with rack, connectivity and data-centre infrastructure sequenced to support both surveillance and general network workloads on the same backbone.",
      },
      {
        question: "Does this approach work for other high-volume manufacturing campuses?",
        answer:
          "Yes. The same combined CCTV-and-network-infrastructure model applies to any electronics or high-volume manufacturing facility that needs security and connectivity to scale together.",
      },
    ],
  },
  {
    slug: "kamarajar-port",
    client: "Kamarajar Port Limited",
    headline: "How Kamarajar Port Made Every Vehicle Accountable, Not Just Visible",
    title: "RFID & ANPR-Based Intelligent Gate Automation",
    industry: "Ports & Critical Infrastructure",
    image: portContainerTerminal,
    imageAlt: "Shipping containers lined up at a port terminal (representative image)",
    metrics: [
      { value: "RFID + ANPR", label: "Automated vehicle identification" },
      { value: "Digitised", label: "Gate entry and exit workflows" },
    ],
    challenge: {
      intro:
        "Vehicle movement at a critical port facility used to depend on manual identification and logging at the gate - a process that creates delay, inconsistency, and no reliable digital record of who or what entered the port at any given time.",
      points: [
        "Manual vehicle identification and logging at gate points",
        "No automated, auditable record of vehicle entry and exit",
        "Need to secure and streamline movement without slowing port operations",
      ],
    },
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
      "RFID and ANPR-based gate automation has digitised vehicle identification at Kamarajar Port, improving security, traceability and operational efficiency at a critical infrastructure facility.",
    targetFacilities: ["Ports & critical infrastructure", "Logistics & warehousing", "Large industrial campuses with high vehicle throughput"],
    targetRoles: ["Port Operations Head", "Security Head", "Facility Manager", "Procurement Manager"],
    faqs: [
      {
        question: "How does RFID and ANPR-based gate automation reduce manual logging?",
        answer:
          "Vehicles are identified automatically via RFID tags and ANPR cameras, so entry and exit are recorded digitally the moment a vehicle passes the gate, without a security officer manually noting details.",
      },
      {
        question: "Does automated gate control slow down vehicle throughput at a busy port?",
        answer:
          "No - automated identification is designed to move vehicles through gates faster than manual logging, since verification happens as the vehicle approaches rather than after it stops.",
      },
      {
        question: "Can this integrate with existing access-control systems at a port or industrial facility?",
        answer:
          "Yes. Sentinel's RFID and ANPR gate automation is built to integrate with a facility's existing access-control and physical gate equipment rather than replacing it wholesale.",
      },
    ],
  },
  {
    slug: "hero-motocorp",
    client: "Hero MotoCorp",
    headline: "How Sentinel Gave Hero MotoCorp Continuous Coverage Across 300+ Cameras",
    title: "Enterprise CCTV Surveillance",
    industry: "Automotive Manufacturing",
    image: industrialAutomationFactory,
    imageAlt: "Robotic arms on an automated factory production line (representative image)",
    scale: "300+ Cameras",
    metrics: [
      { value: "300+", label: "CCTV cameras deployed" },
      { value: "1", label: "Centralized monitoring architecture" },
    ],
    challenge: {
      intro:
        "A high-throughput automotive manufacturing environment needs continuous, centralised surveillance - not isolated cameras monitored inconsistently across shifts and buildings.",
      points: [
        "Facility-wide coverage required across an active manufacturing environment",
        "Need for centralised, not fragmented, video monitoring",
        "Requirement for reliable recording and storage integration",
      ],
    },
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
    impact:
      "300+ cameras now give Hero MotoCorp facility-wide surveillance coverage and centralized security monitoring across its manufacturing environment.",
    targetFacilities: ["Automotive manufacturing", "Two-wheeler & component plants", "Large industrial campuses"],
    targetRoles: ["Plant Head", "Security Head", "Facility Manager"],
    faqs: [
      {
        question: "How is centralized monitoring different from standalone CCTV cameras?",
        answer:
          "Centralized monitoring brings every camera's feed into one surveillance network with unified recording and storage, so security teams monitor the facility from one system instead of checking cameras individually.",
      },
      {
        question: "Can a 300+ camera deployment be installed without disrupting production?",
        answer:
          "Sentinel installs and commissions surveillance infrastructure in phases aligned with a facility's operating schedule, so coverage expands without halting production.",
      },
      {
        question: "Does this scale to other automotive manufacturing sites?",
        answer:
          "Yes. The same centralized CCTV architecture applies to any manufacturing environment that needs facility-wide coverage rather than isolated cameras.",
      },
    ],
  },
  {
    slug: "avnl-avadi",
    client: "AVNL - Avadi",
    headline: "How AVNL Avadi Unified Surveillance and Access Into One Security Architecture",
    title: "Integrated CCTV & Access Control",
    industry: "Defence Manufacturing",
    image: accessControlKeypad,
    imageAlt: "Illuminated numeric keypad on an access-controlled door (representative image)",
    location: "Avadi, Chennai",
    metrics: [
      { value: "2 Systems", label: "CCTV and access control integrated into one architecture" },
    ],
    challenge: {
      intro:
        "Sensitive defence-manufacturing sites need continuous surveillance and controlled access working together - two systems operating independently gain little without a shared security architecture behind them.",
      points: [
        "Need for coordinated surveillance and access control on a sensitive operational site",
        "Requirement to integrate systems rather than operate them as separate installations",
        "Testing and commissioning demands specific to a defence-manufacturing environment",
      ],
    },
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
      "Integrated CCTV and access control now give AVNL enhanced monitoring and controlled access across sensitive operational environments at Avadi.",
    targetFacilities: ["Defence manufacturing", "Government & sensitive industrial sites", "Secure campuses"],
    targetRoles: ["Security Head", "Facility Manager", "Compliance / Security Officer"],
    faqs: [
      {
        question: "Why integrate CCTV and access control instead of running them separately?",
        answer:
          "A shared architecture lets a security event on one system - an access attempt, for instance - be cross-checked against the other, such as the relevant camera feed, which two independent systems can't do on their own.",
      },
      {
        question: "Does Sentinel work on sensitive or defence-manufacturing sites?",
        answer:
          "Yes. Sentinel's testing and commissioning process is scoped to the specific access and security requirements of sensitive operational environments, including defence-manufacturing facilities.",
      },
      {
        question: "Can this integrated approach apply to other secure facilities?",
        answer:
          "Yes. The same integrated CCTV-and-access-control architecture applies to any site where surveillance and controlled entry need to operate as one system rather than two.",
      },
    ],
  },
  {
    slug: "tata-electronics",
    client: "Tata Electronics Private Limited",
    headline: "1,800+ Cameras and 100+ Doors Later, Tata Electronics Runs on One Command Centre",
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
    metrics: [
      { value: "1,800+", label: "CCTV cameras deployed" },
      { value: "100+", label: "Access-controlled doors" },
      { value: "1", label: "Integrated Command & Control Centre" },
    ],
    challenge: {
      intro:
        "A turnkey electronics manufacturing facility at this scale needed surveillance, access management and enterprise-system integration to operate as one environment - not as separate security, IT and facilities projects.",
      points: [
        "Large-scale camera and access-control deployment across a major manufacturing facility",
        "Need to connect physical access events to enterprise ERP records, not just badge logs",
        "Requirement for a centralised command-and-control environment rather than siloed monitoring",
      ],
    },
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
      "1,800+ cameras and 100+ access-controlled doors, connected to enterprise ERP and a centralized Command & Control Centre, give Tata Electronics one unified security environment instead of separate systems.",
    targetFacilities: ["Electronics manufacturing", "Large turnkey industrial campuses", "Facilities requiring ERP-integrated access control"],
    targetRoles: ["CISO / IT Security Head", "Plant Head", "Facility Manager", "Procurement Manager"],
    faqs: [
      {
        question: "How does access control connect to an ERP system?",
        answer:
          "Sentinel integrates access-control events with the facility's ERP via API, so every door event is tied to an employee record rather than existing only as a standalone badge log.",
      },
      {
        question: "What does a Command & Control Centre add beyond individual cameras and doors?",
        answer:
          "A Command & Control Centre brings surveillance, access events and alarms into one operational view, so security teams manage the facility from a single environment instead of switching between separate systems.",
      },
      {
        question: "Can a turnkey deployment at this scale (1,800+ cameras, 100+ doors) go live without disrupting operations?",
        answer:
          "Sentinel scopes turnkey deployments of this size in phases across the facility, with testing and commissioning sequenced so operations continue while coverage expands.",
      },
    ],
  },
  {
    slug: "pegatron",
    client: "Pegatron",
    headline: "How Pegatron Built Security and Network Infrastructure Together, Not Bolted On",
    title: "Integrated Security & Infrastructure Deployment",
    industry: "Electronics Manufacturing",
    image: networkServerCabling,
    imageAlt: "Structured network cabling and switches in a server rack (representative image)",
    location: "Mahindra World City, Chengalpattu",
    scale: "800+ Cameras",
    metrics: [
      { value: "800+", label: "CCTV cameras deployed" },
      { value: "2", label: "Coordinated builds: security + network infrastructure" },
    ],
    challenge: {
      intro:
        "Pegatron's Mahindra World City facility needed security and network infrastructure planned and built together - not as two separate projects layered on top of each other.",
      points: [
        "Need for coordinated security and network infrastructure on one manufacturing site",
        "Structured cabling and surveillance systems required to share one integration plan",
        "Testing and commissioning across a combined security and IT infrastructure scope",
      ],
    },
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
      "800+ cameras plus structured cabling and access control now give Pegatron a robust, scalable surveillance, access-control and network infrastructure supporting a large electronics manufacturing operation.",
    targetFacilities: ["Electronics manufacturing", "Manufacturing parks & SEZs", "Facilities requiring combined security and IT infrastructure"],
    targetRoles: ["IT Infrastructure Head", "Plant Head", "Security Head", "Procurement Manager"],
    faqs: [
      {
        question: "Can security systems and structured cabling be planned as one integration plan?",
        answer:
          "Yes. Sentinel plans CCTV, access control and structured cabling together from the outset, so the network and security infrastructure share one design rather than being retrofitted to each other.",
      },
      {
        question: "Does combining security and network infrastructure add project risk?",
        answer:
          "Planning both together is designed to reduce risk relative to sequential projects, since cabling routes, rack space and connectivity are accounted for before installation begins, not adjusted afterward.",
      },
      {
        question: "Does this model apply to other electronics manufacturing facilities?",
        answer:
          "Yes. The same combined security-and-infrastructure build applies to any manufacturing facility that needs CCTV, access control and network cabling delivered as one coordinated project.",
      },
    ],
  },
];

export const getCaseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const enterpriseScaleStats = [
  { value: "10,000+", label: "Cameras Across Featured Deployments" },
  { value: "10M+", label: "Metres of CAT6 Infrastructure" },
  { value: `${caseStudies.length}`, label: "Enterprise-Scale Projects Featured" },
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
