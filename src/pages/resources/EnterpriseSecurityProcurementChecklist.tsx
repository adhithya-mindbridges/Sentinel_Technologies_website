import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Users,
  Cctv,
  Boxes,
  Fingerprint,
  ScanLine,
  Flame,
  Volume2,
  Activity,
  Network,
  Search,
  FileText,
  Wrench,
  LifeBuoy,
  Puzzle,
  Layers,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { fadeUp, revealOnce, revealOnceTight } from "@/lib/motion";

const stakeholders = [
  { icon: Users, label: "Facilities", note: "Building layout, access points, and day-to-day operational constraints." },
  { icon: ClipboardCheck, label: "Security", note: "Risk areas, monitoring priorities, and incident-response expectations." },
  { icon: Network, label: "IT", note: "Network capacity, cabling standards, and data/security policy requirements." },
  { icon: Activity, label: "Operations", note: "Workflows the systems need to support without disrupting daily activity." },
];

const checklistCategories = [
  {
    icon: Cctv,
    title: "CCTV & Video Surveillance",
    questions: [
      "Which areas need coverage, and is the goal general awareness or identification (faces, plates)?",
      "What lighting and environmental conditions (indoor, outdoor, low-light) apply at each location?",
      "How long does recorded footage need to be retained, and who needs access to it?",
    ],
  },
  {
    icon: Boxes,
    title: "Video Management (VMS)",
    questions: [
      "How many camera brands or generations already exist across the site, and do they need to be unified?",
      "Is monitoring needed from a single site or centralised across multiple locations?",
      "Who are the different user roles that need access, and what should each be able to see?",
    ],
  },
  {
    icon: Fingerprint,
    title: "Access Control",
    questions: [
      "Which zones need restricted access, and does sensitivity vary by zone?",
      "What credential types fit the organisation - cards, biometrics, mobile - and for which user groups?",
      "How are contractors and visitors expected to be granted temporary access?",
    ],
  },
  {
    icon: ScanLine,
    title: "Gate Automation",
    questions: [
      "What is the vehicle population - owned fleet, visitor traffic, logistics vehicles - at each gate?",
      "Is RFID, ANPR or a combination more appropriate for the vehicle mix expected?",
      "Who maintains the authorised-vehicle record, and how are additions and removals approved?",
    ],
  },
  {
    icon: Flame,
    title: "Fire Alarm & Life Safety",
    questions: [
      "What are the specific fire risks in each zone - server rooms, kitchens, storage, production areas?",
      "Does the fire system need to trigger other systems automatically, such as door release or PA messaging?",
      "What local fire code or building requirements apply to the facility?",
    ],
  },
  {
    icon: Volume2,
    title: "Public Address & Voice Alarm",
    questions: [
      "Does every zone need independent paging, or is facility-wide announcement sufficient?",
      "What ambient noise conditions affect speaker placement in each area?",
      "Should emergency messaging override background audio automatically?",
    ],
  },
  {
    icon: Activity,
    title: "Building Automation",
    questions: [
      "Which building systems - HVAC, lighting, energy, maintenance - need centralised visibility?",
      "Is the priority operational efficiency, maintenance workflow, or both?",
      "What existing building-management tools or data need to carry over into a new platform?",
    ],
  },
  {
    icon: Network,
    title: "IT & Network Infrastructure",
    questions: [
      "Can existing cabling and network capacity support the planned camera and device count?",
      "Should security-system traffic be segmented from general IT traffic?",
      "What power backup (UPS) and PoE budget does the design need to account for?",
    ],
  },
];

const integratorQuestions = [
  {
    icon: Search,
    title: "Design Scope",
    description: "What exactly is included in the proposed design, and what's explicitly out of scope for this phase?",
  },
  {
    icon: FileText,
    title: "Implementation Plan",
    description: "What's the sequence of work, and how is it staged across sites, buildings or system categories?",
  },
  {
    icon: ClipboardCheck,
    title: "Testing",
    description: "How is each system verified individually, and how are integration points between systems tested before go-live?",
  },
  {
    icon: LifeBuoy,
    title: "Handover & Support",
    description: "What documentation and training are provided at handover, and what does ongoing support actually cover?",
  },
  {
    icon: Puzzle,
    title: "Integration Requirements",
    description: "Which existing systems need to connect to the new design, and how is that integration scoped and tested?",
  },
  {
    icon: Wrench,
    title: "Maintenance Expectations",
    description: "What's the expected response time and process for a fault, and what falls under warranty versus a service contract?",
  },
];

const EnterpriseSecurityProcurementChecklistPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Enterprise Security Procurement Checklist | Sentinel Technologies"
        description="A planning checklist for enterprise security and ELV procurement - requirements by system category, questions to ask an integrator, and how to phase implementation."
        canonical={`${SITE_URL}/resources/enterprise-security-systems-procurement-checklist`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Enterprise Security Systems Procurement Checklist",
            about: "Enterprise Security Systems Procurement",
            description:
              "A planning checklist covering security and ELV system requirements by category, questions to ask a systems integrator, and how to phase an enterprise security implementation.",
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
        ]}
        breadcrumbs={[
          { name: "Solutions", url: `${SITE_URL}/solutions` },
          { name: "Enterprise Security Procurement Checklist", url: `${SITE_URL}/resources/enterprise-security-systems-procurement-checklist` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Solutions", path: "/solutions" }, { name: "Procurement Checklist" }]} />

      {/* Article header - informational, no sales CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.2em] text-primary-glow mb-5">
              <BookOpen className="w-4 h-4" />
              Planning Checklist
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Enterprise Security Systems Procurement Checklist
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Enterprise security and ELV procurement rarely fails because of a specific product choice - it fails
              because requirements weren&apos;t aligned across the teams who have to live with the result. This
              checklist is meant to help document what your organisation actually needs before you start evaluating
              vendors, category by category, and to give you a set of questions worth asking any systems integrator
              you talk to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Requirements alignment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="mb-10">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Getting Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-6 text-balance">
              Enterprise Security Procurement Starts With Requirements
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Facilities, security, IT and operations teams each see a different part of the same problem.
                Facilities knows the building layout and access points; security knows where the actual risk sits;
                IT knows what the network can support; operations knows which workflows the systems have to fit
                around without disrupting them. When these groups align on requirements before a design starts,
                the result reflects how the facility actually runs. When they don&apos;t, the gaps usually surface
                after installation - as a system that's technically correct but doesn't match how the building is
                really used.
              </p>
              <p>
                This is a checklist, not a substitute for a site assessment. It's designed to help your team document
                and prioritise its own requirements before a conversation with any integrator, so that conversation
                starts from what you need rather than a generic product list. An integrator worth working with should
                still walk the site, review these requirements against actual conditions, and refine them before
                finalising a design.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stakeholders.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={revealOnceTight}
                  variants={fadeUp}
                  className="p-4 rounded-xl border border-border bg-security-light/60 h-full"
                >
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-2.5">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <h3 className="font-bold text-security-dark text-sm mb-1">{s.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.note}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements checklist by category */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">The Checklist</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark text-balance">
              Security and ELV System Requirements Checklist
            </h2>
            <p className="text-muted-foreground mt-4">
              These questions are a starting point for documenting your own requirements, not a mandatory standard -
              which ones matter, and how much, depends entirely on your facility.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp}>
            <Accordion type="single" collapsible className="rounded-xl border border-border bg-white overflow-hidden">
              {checklistCategories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <AccordionItem
                    key={cat.title}
                    value={`cat-${i}`}
                    className={i === checklistCategories.length - 1 ? "border-b-0" : ""}
                  >
                    <AccordionTrigger className="px-5 hover:no-underline">
                      <span className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </span>
                        <span className="font-bold text-security-dark">{cat.title}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-5">
                      <ul className="space-y-2.5 pl-11">
                        {cat.questions.map((q) => (
                          <li key={q} className="text-sm text-muted-foreground leading-relaxed list-disc">
                            {q}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Questions to ask an integrator */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Vendor Evaluation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark text-balance">
              Questions to Ask a Systems Integrator
            </h2>
            <p className="text-muted-foreground mt-4">
              These are process questions, not a scorecard - the goal is understanding how an integrator actually
              works, not comparing marketing claims.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {integratorQuestions.map((q, i) => {
              const Icon = q.icon;
              return (
                <motion.div
                  key={q.title}
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
                  <h3 className="font-bold text-security-dark mb-2">{q.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{q.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Phased implementation plan */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp}>
            <p className="text-primary-glow text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Rollout Planning</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              Building a Phased Implementation Plan
            </h2>
            <div className="space-y-4 text-white/75 leading-relaxed text-lg">
              <p>
                Few organisations implement every system category from this checklist at once, and trying to often
                creates more disruption than it's worth. A phased plan usually starts with the areas carrying the
                highest consequence if something is missed - a restricted zone, a critical gate, a life-safety
                system - rather than the areas that are simplest to install first.
              </p>
              <p>
                Sequencing also has to work around how the facility actually operates: a production line that can't
                stop for cabling work, a building that can only take contractor access after hours, or a site where
                one gate has to remain the sole vehicle entry throughout a phased rollout. A realistic implementation
                plan accounts for those operational constraints explicitly, rather than assuming installation can
                happen around them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next steps / CTA */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp}>
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Next Step</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4 text-balance">
              Ready to Talk Through Your Requirements?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Once you&apos;ve worked through this checklist internally, our team can help translate it into a
              design scoped to your facility.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">
                Contact Sentinel Technologies
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            className="mt-12 pt-10 border-t border-border grid sm:grid-cols-3 gap-4 text-left"
          >
            <Link
              to="/solutions"
              className="group flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-white transition-colors"
            >
              <Layers className="w-5 h-5 text-primary flex-shrink-0" />
              <span>
                <span className="block text-sm font-semibold text-security-dark group-hover:text-primary transition-colors">
                  Explore Solutions
                </span>
                <span className="block text-xs text-muted-foreground">Security &amp; ELV categories</span>
              </span>
            </Link>
            <Link
              to="/industries"
              className="group flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-white transition-colors"
            >
              <Users className="w-5 h-5 text-primary flex-shrink-0" />
              <span>
                <span className="block text-sm font-semibold text-security-dark group-hover:text-primary transition-colors">
                  By Industry
                </span>
                <span className="block text-xs text-muted-foreground">Sector-specific requirements</span>
              </span>
            </Link>
            <Link
              to="/case-studies"
              className="group flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-white transition-colors"
            >
              <FileText className="w-5 h-5 text-primary flex-shrink-0" />
              <span>
                <span className="block text-sm font-semibold text-security-dark group-hover:text-primary transition-colors">
                  Case Studies
                </span>
                <span className="block text-xs text-muted-foreground">Real implementation examples</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSecurityProcurementChecklistPage;
