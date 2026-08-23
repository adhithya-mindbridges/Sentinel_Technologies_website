import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Target,
  Layers,
  Handshake,
  Camera,
  Fingerprint,
  Flame,
  Volume2,
  Network,
  Server,
  Cable,
  DoorClosed,
  BrainCircuit,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const principles = [
  { icon: Boxes, title: "Open Architecture", desc: "Solutions designed to integrate across multiple technologies, manufacturers and enterprise platforms." },
  { icon: Target, title: "Best-Fit Technology", desc: "Selecting technologies based on the application and customer requirement rather than a one-brand approach." },
  { icon: Layers, title: "Engineering Integration", desc: "Our value goes beyond supplying products - we engineer multiple technologies to operate as a unified ecosystem." },
  { icon: Handshake, title: "Long-Term Support", desc: "We work closely with our technology partners throughout design, implementation, commissioning, upgrades and lifecycle support." },
];

interface EcosystemCategory {
  icon: typeof Camera;
  title: string;
  intro: string;
  brands: string[];
  solutions: string[];
  note?: string;
}

const ecosystem: EcosystemCategory[] = [
  {
    icon: Camera,
    title: "Video Surveillance & Security",
    intro: "Sentinel works with leading global surveillance technology providers to deliver solutions ranging from individual facilities to enterprise-scale, multi-site deployments.",
    brands: ["Bosch / Keenfinity", "Hanwha Vision", "Axis Communications", "i-PRO", "Pelco", "Honeywell", "Johnson Controls / Tyco", "Hikvision", "Dahua Technology", "Milestone Systems", "Network Optix"],
    solutions: ["IP Cameras", "PTZ & Long-Range Cameras", "Thermal Imaging", "Specialized Industrial Cameras", "Network Video Recorders", "Enterprise Storage", "Video Management Systems", "Perimeter Surveillance", "Video Analytics"],
  },
  {
    icon: Fingerprint,
    title: "Access Control & Identity Management",
    intro: "We integrate enterprise access-control and identity technologies for industrial facilities, corporate campuses and critical infrastructure.",
    brands: ["Gallagher", "HID Global", "Suprema", "IDEMIA", "Honeywell", "Johnson Controls", "Bosch", "dormakaba"],
    solutions: ["Enterprise Access Control", "Smart Card Authentication", "Biometrics", "Facial Authentication", "Visitor Management", "Turnstiles & Speed Gates", "Multi-Factor Authentication", "ERP / HRMS Integration", "API-Based Integration"],
  },
  {
    icon: Flame,
    title: "Fire & Life Safety",
    intro: "Sentinel collaborates with established fire and life-safety technology manufacturers to engineer reliable detection and emergency-response solutions.",
    brands: ["Bosch", "Honeywell", "Notifier", "Siemens", "Johnson Controls", "Edwards"],
    solutions: ["Addressable Fire Alarm", "Smoke & Heat Detection", "Beam Detection", "Aspirating Detection", "Gas Detection", "Emergency Notification", "Fire Command Centre Integration"],
  },
  {
    icon: Volume2,
    title: "Public Address & Voice Alarm",
    intro: "Our technology ecosystem supports enterprise and industrial communication systems for operational announcements and emergency evacuation.",
    brands: ["Bosch", "Honeywell", "TOA", "Bose Professional"],
    solutions: ["Public Address", "Voice Alarm", "IP-Based PA", "Emergency Communication", "Industrial PA", "Fire Alarm Integration"],
  },
  {
    icon: Network,
    title: "Network & Cyber Infrastructure",
    intro: "Every intelligent security environment depends on a resilient network foundation. Sentinel works with leading networking and cybersecurity technologies for secure, scalable infrastructure.",
    brands: ["Cisco", "HPE Aruba Networking", "Ruckus", "Juniper Networks", "Fortinet", "Sophos"],
    solutions: ["Enterprise Switching", "Routing", "Wi-Fi", "Industrial Networks", "Network Security", "Firewalls", "High Availability", "Network Monitoring"],
  },
  {
    icon: Server,
    title: "Servers, Storage & Data Centre",
    intro: "Our infrastructure partnerships enable us to build the compute and storage backbone required for enterprise surveillance, AI and mission-critical applications.",
    brands: ["HPE", "Dell Technologies", "Lenovo", "NetApp", "Synology", "Western Digital", "Seagate"],
    solutions: ["Enterprise Servers", "GPU Compute Infrastructure", "Video Storage", "SAN / NAS", "High-Availability Architecture", "Backup Infrastructure", "Data Centre Solutions", "AI Compute Infrastructure"],
  },
  {
    icon: Cable,
    title: "Structured Cabling & Fibre Infrastructure",
    intro: "Sentinel delivers structured cabling and fibre infrastructure for large manufacturing campuses, data centres and enterprise environments.",
    brands: [],
    solutions: ["CAT6 / CAT6A", "Fibre Optic Cabling", "Industrial Cabling", "Network Racks", "Patch Panels", "Fibre Management", "Testing & Certification"],
    note: "We have experience executing infrastructure projects involving more than 10 lakh metres of structured cabling.",
  },
  {
    icon: DoorClosed,
    title: "Gate Automation & Physical Security",
    intro: "We collaborate with specialized manufacturers to integrate physical barriers with intelligent access, RFID and ANPR systems.",
    brands: [],
    solutions: ["Boom Barriers", "Bollards", "Road Blockers", "Tyre Killers", "Turnstiles", "Speed Gates", "Automatic Gates", "RFID", "ANPR", "Vehicle Access Management"],
    note: "The real value comes from integration: ANPR + RFID + Access Control + Physical Barrier + ERP + Command Centre - creating a unified intelligent gate-management ecosystem.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence & Software Integration",
    intro: "The future of system integration is increasingly software-driven. Through our technology ecosystem and in-house capabilities, Sentinel integrates physical infrastructure with broader business and operational workflows.",
    brands: [],
    solutions: ["Artificial Intelligence", "Computer Vision", "Video Management", "ERP Platforms", "HRMS", "Building Management Systems", "IoT Platforms", "REST APIs", "Databases", "Third-Party Enterprise Applications"],
  },
];

const valueChain = [
  { title: "Technology Partners", desc: "Provide world-class products and platforms." },
  { title: "Sentinel Engineering", desc: "Designs the architecture and integrates the technologies." },
  { title: "Sentinel Software & AI", desc: "Adds intelligence, analytics and enterprise integration." },
  { title: "Sentinel Services", desc: "Implements, commissions and supports the complete ecosystem." },
];

const partnerFocusAreas = [
  "Artificial Intelligence",
  "Cybersecurity",
  "Security",
  "ELV",
  "IoT",
  "Automation",
  "Robotics",
  "Drones",
  "Building Intelligence",
  "Cloud",
  "Edge Computing",
];

const CategorySection = ({ category, index }: { category: EcosystemCategory; index: number }) => {
  const Icon = category.icon;
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className="rounded-2xl bg-white border border-border p-6 md:p-8"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-security-dark leading-snug">{category.title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed mb-5">{category.intro}</p>

      {category.brands.length > 0 && (
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">Technology Ecosystem</p>
          <div className="flex flex-wrap gap-2">
            {category.brands.map((brand) => (
              <span key={brand} className="text-xs font-medium bg-security-light text-security-dark px-3 py-1.5 rounded-full border border-border">
                {brand}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-4">
        {category.solutions.map((item) => (
          <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>

      {category.note && (
        <p className="text-sm text-muted-foreground italic border-t border-border pt-4">{category.note}</p>
      )}
    </motion.div>
  );
};

const PartnersPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Our Partnerships | Sentinel Technologies"
        description="Sentinel Technologies' ecosystem of global technology manufacturers, OEMs and software providers across video surveillance, access control, fire safety, networking, storage and AI."
        canonical={`${SITE_URL}/partners`}
        breadcrumbs={[{ name: "Partners", url: `${SITE_URL}/partners` }]}
      />
      <Breadcrumbs items={[{ name: "Partners" }]} />

      {/* Hero */}
      <section className="bg-gradient-hero py-20 lg:py-28 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5"
          >
            Our Partnerships
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
          >
            Stronger Together. Delivering Technology Without Boundaries.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/80 leading-relaxed"
          >
            At Sentinel Technologies, we believe the most powerful technology solutions are built
            through strong partnerships, deep engineering expertise and open integration. Over the
            years, we have developed an ecosystem of leading global technology manufacturers, OEMs,
            software companies, distributors and specialist solution providers.
          </motion.p>
        </div>
      </section>

      {/* Partnership philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Partnership Philosophy</p>
            <h2 className="text-3xl font-bold text-security-dark text-balance">Customer First. Technology Next. Brand Neutral.</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Every customer's environment is different. Rather than designing solutions around a
              single manufacturer, Sentinel evaluates the customer's technical requirements, existing
              infrastructure, operational objectives, scalability and lifecycle expectations before
              recommending the appropriate technology architecture.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6 rounded-2xl bg-security-light border border-border">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-security-dark mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology ecosystem categories */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Technology Ecosystem</p>
            <h2 className="text-3xl font-bold text-security-dark text-balance">
              Best-fit technologies across every layer
            </h2>
            <p className="text-sm text-muted-foreground mt-4">
              Brand names reflect the technology ecosystem Sentinel designs and integrates with. Logos are
              displayed only where current partnership/authorization status has been confirmed.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-6">
            {ecosystem.map((category, i) => (
              <CategorySection key={category.title} category={category} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* From products to complete solutions */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">From Products to Complete Solutions</p>
            <h2 className="text-3xl font-bold text-balance">
              Multiple Technologies. Multiple OEMs. One Integrated Solution.
            </h2>
            <p className="text-white/70 mt-4 leading-relaxed">
              Our customers don't need dozens of disconnected products. They need one solution that
              works - that is where Sentinel creates value.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {valueChain.map(({ title, desc }, i) => (
              <motion.div key={title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative p-5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs font-mono text-primary mb-2">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with Sentinel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Partner With Sentinel</p>
            <h2 className="text-3xl font-bold text-security-dark mb-5 text-balance">Building Opportunities Together</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We continuously explore partnerships with innovative technology companies that
              complement our capabilities. For OEMs and technology companies looking to expand into
              India, the Middle East and other strategic markets, Sentinel offers engineering
              capability, enterprise customer access, project execution expertise and lifecycle
              support.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {partnerFocusAreas.map((area) => (
              <span key={area} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                {area}
              </span>
            ))}
          </motion.div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Explore a Partnership <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 bg-gradient-hero text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Lightbulb className="w-8 h-8 mx-auto mb-5 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Ecosystem. Your Advantage.</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              The strength of Sentinel Technologies lies not in representing one technology. It lies
              in our ability to bring together the right technologies for the right application.
            </p>
            <p className="text-lg font-semibold mb-10">
              Global Technology + Local Engineering + Intelligent Integration
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

export default PartnersPage;
