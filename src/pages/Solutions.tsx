import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, iconSpring } from "@/lib/motion";
import {
  Camera,
  BrainCircuit,
  Boxes,
  Fingerprint,
  ScanLine,
  ShieldCheck,
  Flame,
  Volume2,
  Activity,
  LayoutDashboard,
  Server,
  Network,
  Layers,
  Rocket,
  ArrowRight,
  Eye,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { industries } from "@/data/industries";

interface SolutionCategory {
  number: string;
  icon: typeof Camera;
  title: string;
  tagline: string;
  intro: string;
  groups?: { label: string; items: string[] }[];
  items?: string[];
  note?: string;
  path?: string;
}

const categories: SolutionCategory[] = [
  {
    number: "01",
    icon: Camera,
    title: "CCTV & Video Surveillance",
    tagline: "See More. Know More. Respond Faster.",
    intro:
      "We design and deploy enterprise-grade video surveillance systems for manufacturing plants, corporate facilities, ports, transportation, data centres and critical infrastructure.",
    items: [
      "IP CCTV Surveillance",
      "Fixed Bullet & Dome Cameras",
      "PTZ & Long-Range Surveillance",
      "Thermal Imaging",
      "Explosion-Proof Cameras",
      "Perimeter Surveillance",
      "Enterprise Video Recording",
      "Centralized Video Monitoring",
      "Multi-Site Surveillance",
      "Video Wall Solutions",
      "Control Room & Command Centre Integration",
      "Health Monitoring & Failover Architecture",
    ],
    note: "Our surveillance architecture is engineered for high availability, scalability and long-term reliability.",
    path: "/solutions/cctv",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "A.I - Intelligent Video Analytics",
    tagline: "Insights Beyond Vision.",
    intro:
      "A.I transforms conventional CCTV infrastructure into an intelligent platform capable of detecting, analysing and responding to events in real time.",
    groups: [
      {
        label: "Industrial Safety AI",
        items: [
          "PPE Compliance",
          "Helmet & Safety-Vest Detection",
          "Working-at-Height Monitoring",
          "Slip & Fall Detection",
          "Forklift-Pedestrian Safety",
          "Line-of-Fire Detection",
          "Restricted-Zone Monitoring",
          "Hot-Work Monitoring",
          "Confined-Space Monitoring",
          "LOTO Compliance",
          "Smoke & Fire Detection",
        ],
      },
      {
        label: "Security AI",
        items: [
          "Intrusion Detection",
          "Perimeter Analytics",
          "Loitering Detection",
          "Unattended Object Detection",
          "Crowd Detection",
          "Wrong-Way Movement",
          "Behaviour Analytics",
          "Object Classification",
          "Intelligent Tracking",
        ],
      },
      {
        label: "People Intelligence",
        items: [
          "Facial Recognition",
          "People Counting",
          "Occupancy Analytics",
          "Crowd Analytics",
          "Movement & Tracking",
          "Restricted-Area Detection",
        ],
      },
      {
        label: "Vehicle Intelligence",
        items: [
          "ANPR",
          "Vehicle Classification",
          "Make & Model Recognition",
          "Vehicle Counting",
          "Speed Analytics",
          "Illegal Parking Detection",
          "Wrong-Way Detection",
          "Vehicle Tracking",
        ],
      },
    ],
    note: "A.I turns every camera into an intelligent sensor.",
  },
  {
    number: "03",
    icon: Boxes,
    title: "VMS - Intelligent Video Management",
    tagline: "Unified Video. Simplified Operations.",
    intro:
      "VMS is an open and scalable Video Management platform designed for modern enterprise surveillance environments.",
    items: [
      "Centralized Camera Management",
      "ONVIF-Based Camera Integration",
      "Multi-Brand Camera Support",
      "Live & Recorded Video",
      "Intelligent Video Search",
      "Incident Investigation",
      "Event & Alarm Management",
      "Multi-Site Architecture",
      "User & Role Management",
      "System Health Monitoring",
      "Infrastructure Monitoring",
      "Failover Architecture",
      "AI Analytics Integration",
      "Command Centre Integration",
      "Web & Mobile Accessibility",
    ],
    note: "VMS provides the foundation for building a truly intelligent surveillance ecosystem - including Design View (visualize camera positions on facility layouts) and Infrastructure View (monitor cameras, servers, storage and network from one place).",
    path: "/solutions/vms",
  },
  {
    number: "04",
    icon: Fingerprint,
    title: "Access Control & Identity Management",
    tagline: "Secure Every Entry. Manage Every Identity.",
    intro:
      "Sentinel provides enterprise access-control solutions for employees, contractors, visitors and restricted environments.",
    items: [
      "Card-Based Access Control",
      "Biometric Access",
      "Facial Recognition Access",
      "Multi-Factor Authentication",
      "Door Controllers",
      "Turnstiles",
      "Speed Gates",
      "Flap Barriers",
      "Visitor Management",
      "Contractor Management",
      "Elevator Access Control",
      "Time & Attendance Integration",
      "ERP / HRMS Integration",
      "API-Based Integration",
      "Multi-Site Access Management",
    ],
    note: "Our solutions enable organizations to centrally manage who can enter, where they can enter and when they can enter.",
    path: "/solutions/access-control",
  },
  {
    number: "05",
    icon: ScanLine,
    title: "RFID & ANPR Gate Automation",
    tagline: "Intelligent Vehicle Access.",
    intro:
      "Sentinel delivers automated vehicle and gate-management solutions for ports, factories, logistics facilities, warehouses, campuses and critical infrastructure.",
    items: [
      "RFID Vehicle Identification",
      "ANPR",
      "Boom Barriers",
      "Automatic Gate Control",
      "Vehicle Access Management",
      "Driver Authentication",
      "Vehicle-Driver Mapping",
      "Visitor Vehicle Management",
      "Entry / Exit Automation",
      "Parking Management",
      "ERP Integration",
      "Weighbridge Integration",
      "Central Gate Monitoring",
    ],
    note: "By integrating RFID + ANPR + Access Control + Physical Barriers + Enterprise Software, conventional gates become intelligent automated checkpoints.",
    path: "/solutions/gate-automation",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Physical Security & Perimeter Protection",
    tagline: "Protecting the First Line of Defence.",
    intro:
      "We provide layered physical-security solutions designed to secure boundaries, entrances and high-security zones.",
    items: [
      "Boom Barriers",
      "Bollards",
      "Tyre Killers",
      "Road Blockers",
      "Turnstiles",
      "Speed Gates",
      "Automatic Gates",
      "Perimeter Intrusion Detection",
      "Fence Detection",
      "Long-Range Surveillance",
      "Thermal Surveillance",
      "Integrated Gate Security",
    ],
  },
  {
    number: "07",
    icon: Flame,
    title: "Fire Detection & Life Safety",
    tagline: "Detect Early. Respond Faster.",
    intro:
      "Sentinel provides integrated fire and life-safety systems for industrial, commercial and infrastructure environments.",
    items: [
      "Addressable Fire Alarm Systems",
      "Fire Detection",
      "Smoke Detection",
      "Heat Detection",
      "Beam Detection",
      "Aspirating Smoke Detection",
      "Gas Detection",
      "Fire Alarm Monitoring",
      "Emergency Notification",
      "Fire Command Centre Integration",
      "Third-Party System Integration",
    ],
    path: "/solutions/fire-alarm",
  },
  {
    number: "08",
    icon: Volume2,
    title: "Public Address & Voice Alarm",
    tagline: "Communication When It Matters Most.",
    intro:
      "Integrated communication systems for operational announcements, emergency notifications and evacuation management.",
    items: [
      "Public Address Systems",
      "Voice Alarm Systems",
      "Emergency Announcement",
      "IP-Based PA",
      "Industrial PA",
      "Background Music",
      "Zone-Based Announcements",
      "Automated Emergency Messages",
      "Fire Alarm Integration",
      "Command Centre Integration",
    ],
    path: "/solutions/public-address",
  },
  {
    number: "09",
    icon: Activity,
    title: "TraqOPS - Intelligent Building & Operations",
    tagline: "Connect. Analyse. Predict. Optimise.",
    intro:
      "TraqOPS brings building systems, assets, sensors and operational workflows into a unified intelligent environment.",
    groups: [
      {
        label: "Building Management",
        items: [
          "HVAC Monitoring",
          "Electrical Systems",
          "Lighting",
          "DG & UPS Monitoring",
          "Water Systems",
          "Indoor Air Quality",
          "Energy Monitoring",
          "Utility Monitoring",
        ],
      },
      {
        label: "IoT & Integration",
        items: ["BACnet", "Modbus", "MQTT", "KNX", "TCP/IP", "RS-485", "Sensors & IoT Devices"],
      },
      {
        label: "Operations Intelligence",
        items: [
          "Asset Management",
          "Preventive Maintenance",
          "Predictive Maintenance",
          "Alarm Management",
          "Digital Checklists",
          "Incident Management",
          "Service Ticketing",
          "Energy Analytics",
          "Equipment Performance Monitoring",
          "Centralized Dashboards",
        ],
      },
    ],
    note: "TraqOPS helps transform conventional facilities into connected and data-driven operational environments.",
    path: "/solutions/building-automation",
  },
  {
    number: "10",
    icon: LayoutDashboard,
    title: "Command & Control Centres",
    tagline: "One Screen. Complete Visibility.",
    intro:
      "Sentinel designs and implements integrated command-and-control environments that bring multiple technologies onto a centralized operational platform: CCTV + VMS + AI + Access Control + Fire Alarm + ANPR + RFID + PA/VA + IoT + Building Systems.",
    items: [
      "Centralized Monitoring",
      "Video Walls",
      "Operator Workstations",
      "Alarm Management",
      "Incident Management",
      "AI Alerts",
      "SOP-Based Workflows",
      "Multi-Site Monitoring",
      "Integrated Dashboards",
      "System Health Monitoring",
      "Reporting & Analytics",
    ],
    note: "The result is a unified environment that helps operators move from monitoring multiple systems to managing incidents intelligently.",
  },
  {
    number: "11",
    icon: Server,
    title: "Data Centre & IT Infrastructure",
    tagline: "The Digital Backbone of Intelligent Infrastructure.",
    intro:
      "Sentinel provides enterprise IT and network infrastructure required to support modern security, AI and operational technology environments.",
    items: [
      "Data Centre Infrastructure",
      "Server & Storage Solutions",
      "Network Switching",
      "Routing",
      "Firewall Infrastructure",
      "Enterprise Wi-Fi",
      "Network Architecture",
      "Server Virtualization",
      "High Availability",
      "Backup Infrastructure",
      "Network Monitoring",
      "Rack Infrastructure",
    ],
    path: "/solutions/it-infrastructure",
  },
  {
    number: "12",
    icon: Network,
    title: "Structured Cabling & Fibre Infrastructure",
    tagline: "Built for Scale. Engineered for Reliability.",
    intro:
      "Our infrastructure teams execute structured cabling projects ranging from individual facilities to large manufacturing campuses.",
    items: [
      "CAT6 Cabling",
      "CAT6A Cabling",
      "Fibre Optic Cabling",
      "OFC Backbone",
      "Copper Backbone",
      "Fibre Splicing",
      "Patch Panels",
      "Network Racks",
      "Industrial Network Infrastructure",
      "Testing & Certification",
      "Documentation & Labelling",
    ],
    note: "Our experience includes large-scale deployments exceeding 10 lakh metres of structured cabling infrastructure.",
  },
  {
    number: "13",
    icon: Layers,
    title: "ELV Systems Integration",
    tagline: "Multiple Technologies. One Integrated Architecture.",
    intro:
      "Sentinel provides complete ELV engineering and integration under a unified project-management framework.",
    items: [
      "CCTV",
      "Access Control",
      "Fire Alarm",
      "Public Address",
      "Voice Alarm",
      "Intrusion Detection",
      "Intercom",
      "Gate Automation",
      "Parking Management",
      "Structured Cabling",
      "Data Networks",
      "Building Management",
      "Command Centres",
    ],
  },
  {
    number: "14",
    icon: Rocket,
    title: "Sentinel X-Labs",
    tagline: "Engineering Autonomous Intelligence.",
    intro:
      "Sentinel X-Labs is the advanced research and innovation division of Sentinel Technologies - engineering AI-powered autonomous aerial, ground and underwater platforms.",
    items: [
      "Fixed Wing Intelligence Platform (SentraX VX1)",
      "Multi-Rotor Intelligence Platform (SentraX MX1)",
      "Underwater Intelligence Platform (SentraX-UX1)",
      "Edge AI",
      "Autonomous Navigation",
      "Swarm Intelligence",
      "Digital Twin",
      "Digital Command Center",
    ],
    note: "A dedicated innovation division - not a feature of any other Sentinel category.",
    path: "/solutions/sentinel-x-labs",
  },
];

const integrationSteps = [
  { icon: Eye, title: "Sense", desc: "Cameras, sensors, access readers, RFID, ANPR and IoT devices capture events." },
  { icon: Network, title: "Connect", desc: "Enterprise networks and infrastructure securely connect systems." },
  { icon: BrainCircuit, title: "Understand", desc: "AI and analytics transform events into intelligence." },
  { icon: Boxes, title: "Integrate", desc: "VMS, Access Control, ERP, BMS and enterprise applications exchange information." },
  { icon: Zap, title: "Act", desc: "Automated alerts, workflows and physical systems enable immediate response." },
  { icon: TrendingUp, title: "Optimise", desc: "Operational data enables continuous improvement and predictive decision-making." },
];

const transformations = [
  { from: "CCTV", to: "Intelligent Video" },
  { from: "Camera", to: "AI Sensor" },
  { from: "Access Control", to: "Identity Intelligence" },
  { from: "Gate", to: "Automated Security Checkpoint" },
  { from: "BMS", to: "Intelligent Building Operations" },
  { from: "Control Room", to: "AI-Powered Command Centre" },
  { from: "Data", to: "Actionable Intelligence" },
];

const lifecycle = [
  { step: "Consult", desc: "Understand requirements and operational challenges." },
  { step: "Design", desc: "Develop scalable system architecture and engineering." },
  { step: "Integrate", desc: "Bring multiple OEM technologies and platforms together." },
  { step: "Implement", desc: "Execute infrastructure, hardware and software deployment." },
  { step: "Commission", desc: "Test, optimize and validate complete system performance." },
  { step: "Support", desc: "Provide preventive and corrective lifecycle services." },
  { step: "Optimise", desc: "Use AI, analytics and automation to continuously improve operations." },
];

const CategoryCard = ({ category, index }: { category: SolutionCategory; index: number }) => {
  const Icon = category.icon;
  const flatItems = category.items ?? category.groups?.flatMap((g) => g.items) ?? [];
  const totalCount = flatItems.length;
  const preview = flatItems.slice(0, 6);
  const hiddenCount = totalCount - preview.length;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl bg-white border border-border overflow-hidden transition-shadow duration-300 hover:shadow-security scroll-mt-32"
      id={`solution-${category.number}`}
    >
      <span className="pointer-events-none absolute top-2 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-300 select-none">
        {category.number}
      </span>

      <div className="p-6 md:p-8 relative">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-4">
            <motion.div
              className="p-3 rounded-xl bg-primary/10 flex-shrink-0"
              whileHover={{ scale: 1.12, rotate: 6 }}
              transition={iconSpring}
            >
              <Icon className="w-6 h-6 text-primary" />
            </motion.div>
            <div>
              <span className="text-xs font-mono text-muted-foreground">{category.number}</span>
              <h3 className="text-xl font-bold text-security-dark leading-snug">{category.title}</h3>
            </div>
          </div>
        </div>

        <p className="text-primary font-semibold mb-3">{category.tagline}</p>
        <p className="text-muted-foreground leading-relaxed mb-5">{category.intro}</p>

        <div className="flex flex-wrap gap-2 mb-2">
          {preview.map((item) => (
            <Badge key={item} variant="secondary" className="font-normal text-xs px-2.5 py-1">
              {item}
            </Badge>
          ))}
        </div>

        {(hiddenCount > 0 || category.groups) && (
          <Accordion type="single" collapsible className="mb-2">
            <AccordionItem value="details" className="border-none">
              <AccordionTrigger className="py-2 text-sm font-semibold text-primary hover:no-underline justify-start gap-1.5 [&>svg]:ml-0">
                {hiddenCount > 0 ? `+${hiddenCount} more capabilities` : "View full capability breakdown"}
              </AccordionTrigger>
              <AccordionContent>
                {category.groups ? (
                  <div className="grid sm:grid-cols-2 gap-6 pt-2">
                    {category.groups.map((group) => (
                      <div key={group.label}>
                        <p className="text-xs font-bold uppercase tracking-wide text-security-dark mb-2">{group.label}</p>
                        <ul className="space-y-1.5">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {flatItems.slice(6).map((item) => (
                      <Badge key={item} variant="secondary" className="font-normal text-xs px-2.5 py-1">
                        {item}
                      </Badge>
                    ))}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}

        {category.note && (
          <p className="text-sm text-muted-foreground italic mb-6 border-t border-border pt-4">{category.note}</p>
        )}

        {category.path ? (
          <Button asChild variant="outline" size="sm">
            <Link to={category.path}>
              Learn More <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </Button>
        ) : (
          <Button asChild variant="outline" size="sm">
            <Link to="/contact">
              Talk to Our Team <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </Button>
        )}
      </div>
    </motion.div>
  );
};

const SolutionsPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Products & Solutions | Sentinel Technologies"
        description="Sentinel Technologies' complete portfolio - CCTV, AI video analytics, VMS, access control, gate automation, fire safety, command centres, TraqOPS building intelligence, IT infrastructure and structured cabling."
        canonical={`${SITE_URL}/solutions`}
        breadcrumbs={[{ name: "Products & Solutions", url: `${SITE_URL}/solutions` }]}
      />
      <Breadcrumbs items={[{ name: "Products & Solutions" }]} />

      {/* Hero */}
      <section className="relative bg-gradient-hero py-20 lg:py-28 text-white overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-32 -right-16 w-[28rem] h-[28rem] rounded-full bg-security-accent/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="container relative mx-auto px-4 text-center max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5"
          >
            Products &amp; Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
          >
            Integrated Technology. Intelligent Infrastructure. One Trusted Partner.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/80 leading-relaxed mb-8"
          >
            Sentinel Technologies delivers end-to-end Security, ELV, Artificial Intelligence, Building
            Intelligence, IT Infrastructure and Automation solutions for enterprise, industrial and
            critical infrastructure environments. From a single facility to multi-location deployments,
            we bring together hardware, software, networks, AI and automation into unified technology
            ecosystems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm">
              <span className="font-bold">{categories.length}</span> Solution Categories
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm">
              One Integrated Ecosystem
            </span>
          </motion.div>
        </div>
      </section>

      {/* Quick navigation */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <a
                  key={category.number}
                  href={`#solution-${category.number}`}
                  className="flex items-center gap-1.5 flex-shrink-0 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors duration-200 whitespace-nowrap"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {category.title.split(/[-–]/)[0].trim()}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category grid */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6">
            {categories.map((category, i) => (
              <CategoryCard key={category.number} category={category} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Philosophy */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Integration Philosophy</p>
            <h2 className="text-3xl font-bold text-balance">Don't Build Technology Silos. Build Intelligence.</h2>
            <p className="text-white/70 mt-4 leading-relaxed">
              Modern enterprises operate hundreds or thousands of cameras, sensors, doors, network
              devices and operational systems. The real value comes when these technologies communicate
              with each other.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {integrationSteps.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col items-center text-center">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={iconSpring}
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* From conventional to intelligent */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">The Transformation</p>
            <h2 className="text-3xl font-bold text-security-dark text-balance">
              From Conventional Infrastructure to Intelligent Infrastructure
            </h2>
          </motion.div>
          <div className="space-y-3">
            {transformations.map((t, i) => (
              <motion.div
                key={t.from}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="flex items-center justify-between gap-4 p-4 rounded-xl border border-border bg-white transition-shadow duration-300 hover:shadow-security"
              >
                <span className="font-medium text-muted-foreground">{t.from}</span>
                <motion.span whileHover={{ x: 3 }} className="flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </motion.span>
                <span className="font-semibold text-security-dark text-right">{t.to}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">One Technology Partner</p>
            <h2 className="text-3xl font-bold text-security-dark text-balance">End-to-End Responsibility</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {lifecycle.map(({ step, desc }, i) => (
              <motion.div
                key={step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="relative p-5 rounded-xl bg-white border border-border transition-shadow duration-300 hover:shadow-security"
              >
                <span className="absolute top-2 right-3 text-3xl font-bold text-primary/10 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">{step}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Industries We Serve</p>
            <h2 className="text-3xl font-bold text-security-dark text-balance">
              Engineered for demanding enterprise environments
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map(({ icon: Icon, name, slug }, i) => (
              <motion.div key={slug} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link
                  to={`/industries/${slug}`}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-white hover:border-primary/40 hover:shadow-security transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-security-dark">{name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 bg-gradient-hero text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-balance">Building the Intelligent Enterprise</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Sentinel Technologies brings together Security, ELV, Artificial Intelligence, VMS, IoT,
              Building Intelligence, IT Infrastructure and Automation to create connected environments
              capable of seeing, understanding, predicting and responding.
            </p>
            <p className="text-white/80 leading-relaxed mb-8">
              Whether it is a manufacturing facility, port, airport, data centre, corporate campus or
              multi-location enterprise, our objective remains the same:
            </p>
            <p className="text-lg font-semibold mb-10 text-balance">
              Protect People. Secure Assets. Connect Infrastructure. Create Intelligence.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">Talk to Our Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
