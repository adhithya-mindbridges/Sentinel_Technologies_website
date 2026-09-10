import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Layers,
  Cctv,
  Fingerprint,
  Flame,
  Volume2,
  Activity,
  Network,
  ArrowRight,
  Search,
  Compass,
  Wrench,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Factory,
  Warehouse,
  TrainFront,
  Hospital,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import SolutionHero from "@/components/solutions/SolutionHero";
import { fadeUp, iconSpring, revealOnce, revealOnceTight } from "@/lib/motion";

const integratedCategories = [
  { icon: Cctv, label: "CCTV & Video Surveillance", path: "/solutions/cctv" },
  { icon: Fingerprint, label: "Access Control & Identity", path: "/solutions/access-control" },
  { icon: Flame, label: "Fire Alarm & Life Safety", path: "/solutions/fire-alarm" },
  { icon: Volume2, label: "Public Address & Voice Alarm", path: "/solutions/public-address" },
  { icon: Activity, label: "Building Automation (TraqOPS)", path: "/solutions/building-automation" },
  { icon: Network, label: "IT & Network Infrastructure", path: "/solutions/it-infrastructure" },
];

const integrationStages = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "Reviewing the facility's layout, existing systems and operational workflows, and defining the specific outcomes the integration needs to support - centralized monitoring, faster incident response, or reduced manual reporting.",
  },
  {
    icon: Compass,
    title: "System Design",
    description:
      "Defining which categories are included, how they need to communicate, and where existing equipment is retained versus replaced - aligned to the facility's actual requirements, not a fixed template.",
  },
  {
    icon: Wrench,
    title: "Implementation",
    description:
      "Installation and configuration executed by category - cabling, cameras, access-control hardware, fire panels, PA equipment - under one coordinated project plan and timeline.",
  },
  {
    icon: CheckCircle2,
    title: "Testing",
    description:
      "Each system verified individually, then the integration points between systems tested against the scenarios defined at discovery - for example, confirming a fire event correctly triggers PA messaging and door release.",
  },
  {
    icon: ClipboardCheck,
    title: "Handover",
    description:
      "Documentation, training and a defined maintenance plan, so the facility's own team can operate, troubleshoot and maintain what's been delivered without depending on tribal knowledge.",
  },
];

const industryConsiderations = [
  {
    icon: Database,
    name: "Data Centres",
    note: "Multi-layer access control, fire detection and environmental monitoring need to sit on one command view without introducing a single point of failure into always-on infrastructure.",
    path: "/industries/data-centres",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    note: "Plant-wide CCTV, access control and fire systems typically need to fit around existing production and safety workflows rather than operate as a separate, disconnected layer.",
    path: "/industries/manufacturing-industrial",
  },
  {
    icon: Warehouse,
    name: "Logistics & Warehousing",
    note: "High-volume vehicle and personnel movement benefits from access control, gate automation and surveillance sharing one monitoring view across a large site.",
    path: "/industries/warehousing-logistics",
  },
  {
    icon: TrainFront,
    name: "Transportation",
    note: "Station and platform environments need CCTV, public address and access control coordinated across multiple sites from a centralized control room, not per-station panels.",
    path: "/industries/transportation-metro-rail",
  },
  {
    icon: Hospital,
    name: "Healthcare",
    note: "Continuous-operation facilities need access control, fire safety and public address integrated carefully around patient, staff and visitor zones that can't be treated identically.",
    path: "/industries/healthcare",
  },
  {
    icon: Building2,
    name: "Corporate & Institutional Campuses",
    note: "Multi-building corporate and education campuses benefit from visitor management, access control and building automation administered centrally rather than per building.",
    path: "/industries/commercial-corporate-campuses",
  },
];

const ELVSystemsIntegrationPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="ELV Systems Integration | Sentinel Technologies"
        description="Sentinel Technologies integrates CCTV, access control, fire alarm, public address, building automation and IT infrastructure into one unified ELV architecture for enterprise facilities."
        canonical={`${SITE_URL}/solutions/elv-systems-integration`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "ELV Systems Integration",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "IN",
            description:
              "Design and integration of CCTV, access control, fire alarm, public address, building automation and IT infrastructure into a single, coordinated ELV architecture for enterprise facilities.",
          },
        ]}
        breadcrumbs={[
          { name: "Solutions", url: `${SITE_URL}/solutions` },
          { name: "ELV Systems Integration", url: `${SITE_URL}/solutions/elv-systems-integration` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Solutions", path: "/solutions" }, { name: "ELV Systems Integration" }]} />

      <SolutionHero
        icon={Layers}
        eyebrow="ELV Systems Integration"
        title="ELV Systems Integration for Enterprise Facilities"
        description="Sentinel Technologies designs and integrates CCTV, access control, fire alarm, public address, building automation and IT infrastructure into a single, coordinated ELV architecture - so an enterprise facility operates as one connected system, not a collection of standalone installations."
        primaryLabel="Discuss Your Project"
        secondaryLabel="Request Quote"
        highlights={["CCTV & Video Surveillance", "Access Control", "Fire Alarm & Life Safety", "Building Automation"]}
      />

      {/* Definition + categories integrated */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="mb-12">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">
              What Is ELV Systems Integration
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-6 text-balance">
              ELV Systems Integration for Enterprise Environments
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Electronic Low Voltage (ELV) systems integration is the practice of designing, installing and
                managing a facility&apos;s security, safety and building-management technologies as a single
                coordinated architecture, rather than as separate systems bought and operated independently. In a
                typical enterprise facility, video surveillance, access control, fire alarm, public address, building
                automation and IT infrastructure are often installed by different vendors at different times, each
                with its own control interface, cabling run and maintenance contract.
              </p>
              <p>
                As an ELV systems integrator, Sentinel Technologies brings these categories together under one
                design, one project team and one point of accountability - so a facility manager is coordinating with
                a single partner instead of five, and the systems themselves can actually work together where it
                matters. Integrating these systems doesn&apos;t mean replacing everything a facility already has: in
                most engagements, existing cameras, panels or access-control hardware are retained and connected into
                the new architecture wherever they&apos;re compatible, with older or unsupported equipment upgraded
                only where necessary.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {integratedCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.path}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={revealOnceTight}
                  variants={fadeUp}
                >
                  <Link
                    to={cat.path}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-security-light transition-colors h-full"
                  >
                    <motion.div className="p-2 rounded-lg bg-primary/10 flex-shrink-0" whileHover={{ scale: 1.1, rotate: 6 }} transition={iconSpring}>
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <span className="text-sm font-medium text-security-dark">{cat.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Systems that work better together */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp}>
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Why Integrate</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-6 text-balance">
              Systems That Work Better Together
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                When security, safety and building systems are designed together, a single event can trigger a
                coordinated response instead of being handled by isolated panels that don&apos;t talk to each other.
                A fire alarm activation, for example, can automatically trigger public-address evacuation messaging,
                release access-controlled doors along an evacuation route, and shut down affected HVAC zones - one
                detected event, not three separate manual actions. A single access-control platform across multiple
                entry points gives a facility one audit trail instead of several disconnected logs. Video
                surveillance tied to access control lets an event at a door be reviewed against the camera covering
                it, without cross-referencing timestamps across two unrelated systems.
              </p>
              <p>
                None of this happens automatically just because multiple systems are installed in the same building.
                It depends on integration points being planned deliberately: which systems genuinely need to
                communicate, what should trigger what, and where a shared dependency would be unacceptable.
                Interoperability between brands and system generations also varies - some devices integrate cleanly
                over open protocols such as BACnet, Modbus or ONVIF, while others need a gateway, and a few are best
                left to operate independently rather than forced into a shared platform. Part of a structured
                integration project is establishing early which categories actually need to share data, rather than
                integrating for its own sake.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structured integration approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark text-balance">
              A Structured Integration Approach
            </h2>
            <p className="text-muted-foreground mt-4">
              Every ELV integration project is scoped against the facility&apos;s own requirements and operational
              workflows - a data centre&apos;s priorities look different from a hospital&apos;s or a logistics
              campus&apos;s.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {integrationStages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={revealOnceTight}
                  variants={fadeUp}
                  className="relative p-5 rounded-2xl border border-border bg-security-light/60 h-full"
                >
                  <span className="text-3xl font-bold text-primary/10 tabular-nums leading-none" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="p-2.5 rounded-lg bg-primary/10 w-fit -mt-2 mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-security-dark mb-2">{stage.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ELV integration by industry */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <p className="text-primary-glow text-[13px] font-bold uppercase tracking-[0.2em] mb-3">By Sector</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">ELV Integration by Industry</h2>
            <p className="text-white/70 mt-4">
              What matters most in an ELV integration project shifts by sector - here&apos;s what typically comes
              first.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {industryConsiderations.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.path} custom={i} initial="hidden" whileInView="visible" viewport={revealOnceTight} variants={fadeUp}>
                  <Link
                    to={ind.path}
                    className="group flex flex-col h-full p-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-primary/15 w-fit mb-3">
                      <Icon className="w-5 h-5 text-primary-glow" />
                    </div>
                    <h3 className="font-bold text-white mb-2 group-hover:text-primary-glow transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-4 flex-1">{ind.note}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-glow">
                      Explore {ind.name}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plan an ELV integration project - CTA */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp}>
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4 text-balance">
              Plan an ELV Integration Project
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Tell us what your facility already has and what you&apos;re trying to achieve - centralized monitoring,
              faster incident response, or simply fewer disconnected systems to manage. We&apos;ll scope an
              integration plan around it.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">
                Discuss an ELV Integration Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="mt-10 pt-10 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Or evaluate an individual system first:</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {integratedCategories.slice(0, 4).map((cat) => (
                <Link
                  key={cat.path}
                  to={cat.path}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark hover:underline underline-offset-4"
                >
                  {cat.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ELVSystemsIntegrationPage;
