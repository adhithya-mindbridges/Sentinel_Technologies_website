import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ScanLine,
  Fingerprint,
  ScanEye,
  Car,
  ClipboardList,
  ShieldCheck,
  Cctv,
  Lock,
  ArrowRight,
  Warehouse,
  Factory,
  Building2,
  Ship,
  TrainFront,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import SolutionHero from "@/components/solutions/SolutionHero";
import { fadeUp, iconSpring, revealOnce, revealOnceTight } from "@/lib/motion";

const rfidPlanningPoints = [
  {
    icon: Car,
    title: "Vehicle Population",
    description:
      "How many vehicles need a tag, and whether they're a stable owned fleet or a mix of staff, visitor and contractor vehicles that turns over regularly.",
  },
  {
    icon: ClipboardList,
    title: "Tag Issuance & Lifecycle",
    description:
      "Who issues, tracks and deactivates tags as vehicles enter and leave service, and what happens when a tagged vehicle is sold or reassigned.",
  },
  {
    icon: ShieldCheck,
    title: "Authorised-Vehicle Records",
    description:
      "Who maintains the list of authorised vehicles, how additions and removals are approved, and how it stays in sync with who's actually still authorised on site.",
  },
];

const anprFitFactors = [
  {
    icon: ScanEye,
    title: "Plate Visibility & Lighting",
    description: "ANPR cameras need a clear, well-lit view of the plate at the point of capture, in all weather and lighting conditions the gate will see.",
  },
  {
    icon: Car,
    title: "Plate Format Consistency",
    description: "How consistent the plate formats are for the vehicles expected on site - a factor in read reliability that's worth checking before committing to a design.",
  },
  {
    icon: ClipboardList,
    title: "What a Read Should Trigger",
    description: "Whether a plate match should grant automatic entry, log the vehicle for review, or flag unrecognised plates for a security officer to check.",
  },
];

const useCases = [
  {
    icon: Warehouse,
    name: "Warehouses & Logistics",
    note: "High-volume vehicle movement through a limited number of loading-bay and yard gates, where manual logging can't keep pace with throughput.",
    path: "/industries/warehousing-logistics",
  },
  {
    icon: Factory,
    name: "Manufacturing Facilities",
    note: "Supplier, contractor and staff vehicle traffic through a small number of controlled entry points on an active plant site.",
    path: "/industries/manufacturing-industrial",
  },
  {
    icon: Building2,
    name: "Commercial Campuses",
    note: "Parking and visitor vehicle management across multiple buildings, where a single gate-access record is more useful than per-building logs.",
    path: "/industries/commercial-corporate-campuses",
  },
  {
    icon: Ship,
    name: "Ports & Maritime",
    note: "Continuous container and vehicle movement where every entry and exit needs a verifiable, auditable identification record.",
    path: "/industries/ports-maritime",
  },
  {
    icon: TrainFront,
    name: "Transportation Sites",
    note: "Staff and service-vehicle access at stations, depots and yards, coordinated alongside passenger-facing security systems.",
    path: "/industries/transportation-metro-rail",
  },
];

const designElements = [
  {
    icon: Lock,
    title: "Access Control",
    description: "The gate's authorised-vehicle logic follows the same access-control principles already governing doors and turnstiles on site.",
    path: "/solutions/access-control",
    linkLabel: "Explore Access Control",
  },
  {
    icon: Cctv,
    title: "Video Surveillance",
    description: "Camera coverage at the gate gives a visual record alongside the RFID or ANPR read, useful for reviewing any entry that needs a second look.",
    path: "/solutions/cctv",
    linkLabel: "Explore CCTV",
  },
];

const RFIDANPRGateAutomationPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="RFID & ANPR Gate Automation System | Sentinel Technologies"
        description="RFID and ANPR gate automation for managed vehicle entry and exit - how each technology works, planning considerations, and where it fits in a wider access-control design."
        canonical={`${SITE_URL}/solutions/rfid-anpr-gate-automation`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "RFID and ANPR Gate Automation",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "IN",
            description:
              "RFID and ANPR-based vehicle identification for automated gate entry and exit, designed alongside a facility's wider access-control and video-surveillance systems.",
          },
        ]}
        breadcrumbs={[
          { name: "Solutions", url: `${SITE_URL}/solutions` },
          { name: "Gate Automation", url: `${SITE_URL}/solutions/gate-automation` },
          { name: "RFID & ANPR Gate Automation", url: `${SITE_URL}/solutions/rfid-anpr-gate-automation` },
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Solutions", path: "/solutions" },
          { name: "Gate Automation", path: "/solutions/gate-automation" },
          { name: "RFID & ANPR Gate Automation" },
        ]}
      />

      <SolutionHero
        icon={ScanLine}
        eyebrow="Gate Automation"
        title="RFID and ANPR Gate Automation for Enterprises"
        description="RFID and ANPR are two ways of automating vehicle entry and exit at a facility gate - identifying a vehicle automatically instead of relying on a security officer to check each one by hand. Both extend the same access-control principle already used at doors and turnstiles out to vehicle movement."
        primaryLabel="Discuss Your Project"
        secondaryLabel="Request Quote"
        highlights={["RFID Vehicle Identification", "ANPR Recognition", "Boom Barrier Integration", "Automated Entry/Exit"]}
      />

      {/* Intro: automated vehicle and gate access */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp}>
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Getting Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-6 text-balance">
              Automated Vehicle and Gate Access
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Gate automation is the vehicle-side counterpart to the access control most facilities already use at
                doors and turnstiles. Instead of a security officer checking each vehicle by eye, RFID and ANPR
                technologies identify vehicles automatically as they approach a gate, and the barrier responds
                accordingly. The two technologies solve the same underlying problem - automated vehicle
                identification - in different ways: RFID reads a tag fitted to a vehicle, while ANPR reads the
                vehicle&apos;s number plate directly using a camera. Some facilities use one; others use both
                together, one as a cross-check on the other.
              </p>
              <p>
                Gate automation isn&apos;t a separate system from access control so much as an extension of it to
                the vehicle perimeter. Where access control governs which people can enter which doors, gate
                automation governs which vehicles can enter which gates - and the same underlying questions apply:
                who is authorised, for how long, and what record is kept of who came and went.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RFID Gate Automation */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="mb-10">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Tag-Based Identification</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-6 text-balance">RFID Gate Automation</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              RFID (Radio-Frequency Identification) gate automation works by fitting an RFID tag to an authorised
              vehicle - typically on the windscreen or bumper - which a reader at the gate detects as the vehicle
              approaches, without the driver needing to stop or present anything. The reader checks the tag against a
              list of authorised vehicles and, on a match, triggers the barrier to open.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Because RFID depends on every authorised vehicle carrying a working tag, planning an RFID deployment
              starts with the vehicle population itself - and the record that decides who&apos;s authorised:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5">
            {rfidPlanningPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={revealOnceTight}
                  variants={fadeUp}
                  className="p-5 rounded-2xl border border-border bg-white h-full"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 w-fit mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-security-dark mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ANPR Gate Automation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="mb-10">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Plate-Based Identification</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-6 text-balance">ANPR Gate Automation</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              ANPR (Automatic Number Plate Recognition) identifies a vehicle by reading its number plate with a
              camera as it approaches the gate, rather than relying on a tag fitted to the vehicle. That makes it
              useful where a facility can&apos;t guarantee every vehicle is tagged - visitor and contractor traffic,
              logistics fleets that vary day to day, or sites that want a record of every vehicle rather than only
              pre-authorised ones.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Whether ANPR suits a facility&apos;s entry-management workflow comes down to a few practical questions
              worth assessing before committing to a design:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {anprFitFactors.map((factor, i) => {
              const Icon = factor.icon;
              return (
                <motion.div
                  key={factor.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={revealOnceTight}
                  variants={fadeUp}
                  className="p-5 rounded-2xl border border-border bg-security-light/60 h-full"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 w-fit mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-security-dark mb-2">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{factor.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed"
          >
            ANPR is often paired with RFID rather than used as a full replacement for it: RFID handles the routine,
            high-confidence case of a known fleet vehicle, while ANPR provides a fallback identification method and a
            record of everything else passing through the gate.
          </motion.p>
        </div>
      </section>

      {/* Use cases by industry */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <p className="text-primary-glow text-[13px] font-bold uppercase tracking-[0.2em] mb-3">By Setting</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">Gate Automation Use Cases</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.div key={uc.path} custom={i} initial="hidden" whileInView="visible" viewport={revealOnceTight} variants={fadeUp}>
                  <Link
                    to={uc.path}
                    className="group flex flex-col h-full p-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-primary/15 w-fit mb-3">
                      <Icon className="w-5 h-5 text-primary-glow" />
                    </div>
                    <h3 className="font-bold text-white mb-2 group-hover:text-primary-glow transition-colors">{uc.name}</h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-4 flex-1">{uc.note}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-glow">
                      Explore {uc.name}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Designing an integrated gate access system + CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="mb-12">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Solution Design</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-6 text-balance">
              Designing an Integrated Gate Access System
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              RFID and ANPR rarely operate as standalone systems in practice. A gate that grants entry needs to fit
              into the same access-control logic already governing the rest of the facility, and a camera watching
              the gate gives a visual record to fall back on if a read is ever in question. The right mix of
              technologies - RFID, ANPR, or both, plus how they connect to physical barrier hardware - depends on the
              facility&apos;s vehicle population, gate count and operational workflow, not a fixed template.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 mb-14 max-w-2xl mx-auto">
            {designElements.map((el, i) => {
              const Icon = el.icon;
              return (
                <motion.div key={el.path} custom={i} initial="hidden" whileInView="visible" viewport={revealOnceTight} variants={fadeUp}>
                  <Link
                    to={el.path}
                    className="group flex flex-col h-full p-5 rounded-2xl border border-border hover:border-primary/40 hover:bg-security-light transition-colors"
                  >
                    <motion.div className="p-2.5 rounded-lg bg-primary/10 w-fit mb-3" whileHover={{ scale: 1.1, rotate: 6 }} transition={iconSpring}>
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <h3 className="font-bold text-security-dark mb-2 group-hover:text-primary transition-colors">{el.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{el.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      {el.linkLabel}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">
                Discuss a Gate Automation Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <p className="mt-5 text-sm text-muted-foreground">
              Or see the full{" "}
              <Link to="/solutions/gate-automation" className="font-semibold text-primary hover:underline underline-offset-4">
                Gate Automation solution overview
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RFIDANPRGateAutomationPage;
