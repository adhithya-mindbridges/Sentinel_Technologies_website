import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Eye,
  Boxes,
  BrainCircuit,
  Camera,
  Database,
  Bell,
  Users,
  Cctv,
  Bot,
  ArrowRight,
  ShieldAlert,
  HardHat,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { fadeUp, revealOnce, revealOnceTight } from "@/lib/motion";

const layers = [
  {
    icon: Cctv,
    title: "Video Surveillance",
    description: "The cameras themselves - capturing footage of a location, indoors or outdoors, live or recorded.",
  },
  {
    icon: Boxes,
    title: "Video Management (VMS)",
    description: "Software that organises, centralises and lets operators view and search footage across many cameras and sites from one place.",
  },
  {
    icon: BrainCircuit,
    title: "Video Analytics",
    description: "Software that processes video content to detect specific, pre-defined events or patterns, rather than simply recording or displaying it.",
  },
];

const useCaseCategories = [
  {
    icon: ShieldAlert,
    title: "Restricted-Area & Perimeter Monitoring",
    description: "Detecting entry into a zone that should be empty or access-controlled, without a person watching that camera feed continuously.",
  },
  {
    icon: HardHat,
    title: "Safety-Compliance Monitoring",
    description: "Flagging conditions like PPE non-compliance or unsafe proximity between people and moving equipment in a specific work area.",
  },
  {
    icon: Car,
    title: "Vehicle & People Movement",
    description: "Tracking vehicle or foot traffic through a yard, gate or high-throughput area where manual counting or observation doesn't scale.",
  },
  {
    icon: Eye,
    title: "Investigation Efficiency",
    description: "Making it faster to search recorded footage for a specific incident after the fact, instead of scrubbing through hours of video manually.",
  },
];

const implementationConsiderations = [
  {
    icon: Camera,
    title: "Camera Coverage & Placement",
    description: "Analytics performance depends on camera angle, resolution and lighting for the specific function being planned - not every existing camera will suit every analytic use case without adjustment.",
  },
  {
    icon: Boxes,
    title: "Video Management Integration",
    description: "Whether analytics connects into the VMS a facility already runs determines if alerts and footage appear in one operator view or two disconnected ones.",
  },
  {
    icon: Database,
    title: "Retention Planning",
    description: "How long video and analytic event data need to be kept - driven by investigation needs, compliance requirements and storage cost - is worth settling before rollout, not after.",
  },
  {
    icon: Bell,
    title: "Alert Handling",
    description: "Who receives an alert, on what channel, and what they're expected to do with it. An analytic that generates alerts nobody acts on isn't adding operational value.",
  },
  {
    icon: Users,
    title: "Stakeholder Workflows",
    description: "Security, operations and facility teams often need different views of the same events - planning should reflect who actually needs to see what, and when.",
  },
];

const integrationLinks = [
  { icon: Cctv, label: "CCTV & Video Surveillance", path: "/solutions/cctv" },
  { icon: Boxes, label: "VMS - Video Management", path: "/solutions/vms" },
  { icon: Bot, label: "Sentinel X-Labs", path: "/solutions/sentinel-x-labs" },
];

const AIVideoAnalyticsSecurityPlanningPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Planning AI Video Analytics for Security | Sentinel Technologies"
        description="A planning guide to AI video analytics for security teams - what it adds to CCTV and VMS, how to prioritise use cases, and what to plan for during implementation."
        canonical={`${SITE_URL}/resources/ai-video-analytics-security-planning`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Plan AI Video Analytics for Security",
            about: "AI Video Analytics",
            description:
              "A planning guide covering what AI video analytics adds to video surveillance, how to identify operational use cases, implementation considerations, and how analytics integrates with CCTV, VMS and command-and-control operations.",
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
        ]}
        breadcrumbs={[
          { name: "AI Video Analytics", url: `${SITE_URL}/solutions/ai-video-analytics` },
          { name: "How to Plan AI Video Analytics for Security", url: `${SITE_URL}/resources/ai-video-analytics-security-planning` },
        ]}
      />
      <Breadcrumbs items={[{ name: "AI Video Analytics", path: "/solutions/ai-video-analytics" }, { name: "Planning Guide" }]} />

      {/* Article header - no sales CTA here; this is an informational guide */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.2em] text-primary-glow mb-5">
              <BookOpen className="w-4 h-4" />
              Planning Guide
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-balance">How to Plan AI Video Analytics for Security</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              AI video analytics is often talked about as if it&apos;s a single feature you switch on inside a
              camera system. In practice, it&apos;s a distinct layer that sits on top of video surveillance and
              video management - and planning for it well starts with understanding what that layer actually does
              before evaluating a specific product. This guide covers what analytics adds to conventional
              surveillance, how to identify the use cases worth solving for first, what to plan for during
              implementation, and how analytics fits alongside the CCTV, VMS and command-and-control systems already
              in place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What AI video analytics adds */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="mb-10">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">The Distinction</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-6 text-balance">
              What AI Video Analytics Adds to Video Surveillance
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              "Video surveillance," "video management" and "video analytics" get used loosely as if they&apos;re the
              same thing. They&apos;re related, but distinct layers, and it&apos;s worth being clear on which one
              does what before scoping a project:
            </p>
          </motion.div>

          <div className="space-y-4 mb-10">
            {layers.map((layer, i) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={revealOnceTight}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-security-light/60"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-security-dark mb-1">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{layer.description}</p>
                  </div>
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
            What any given analytics product can actually detect, and how reliably, varies by vendor, by camera
            conditions and by how the system is configured for a specific site. Detection performance and specific
            analytic functions are worth verifying directly against the product being evaluated for a given project,
            rather than assumed from general marketing material - including this one.
          </motion.p>
        </div>
      </section>

      {/* Start with operational use cases */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="mb-10 max-w-3xl">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Before Selecting a Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-6 text-balance">
              Start With Operational Security Use Cases
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The more useful starting question isn&apos;t &quot;what can this analytics platform do&quot; - it&apos;s
              &quot;what specific incidents, blind spots or manual review work are we actually trying to solve for.&quot;
              Teams that start with a product demo tend to end up with capabilities that don&apos;t map to a real
              monitoring or investigation workflow. Teams that start by naming the workflow end up evaluating
              products against something concrete. A few categories worth identifying and prioritising against site
              risk and operational need:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {useCaseCategories.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.div
                  key={uc.title}
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
                  <h3 className="font-bold text-security-dark mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed mt-8"
          >
            Prioritisation matters more than coverage: a facility rarely needs every category above on day one. The
            areas with the highest consequence if an incident is missed, or the workflows already consuming the most
            manual review time, are usually the right place to start.
          </motion.p>
        </div>
      </section>

      {/* Implementation considerations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Planning Topics</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark text-balance">Implementation Considerations</h2>
            <p className="text-muted-foreground mt-4">
              These are questions to plan around, not guarantees about how any specific system will perform - the
              right answers depend on the site and the product being evaluated.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {implementationConsiderations.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
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
                  <h3 className="font-bold text-security-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrating analytics into security operations */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="mb-10">
            <p className="text-primary-glow text-[13px] font-bold uppercase tracking-[0.2em] mb-3">How It Fits</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              Integrating Analytics Into Security Operations
            </h2>
            <div className="space-y-4 text-white/75 leading-relaxed text-lg">
              <p>
                Analytics doesn&apos;t replace CCTV or a VMS - it depends on both. Cameras remain the sensing layer;
                a VMS organises and centralises what those cameras capture; analytics processes that video for the
                specific events an organisation has decided are worth detecting automatically. Where a facility runs
                a command-and-control centre, analytics-generated alerts are typically one more input alongside
                manual monitoring, not a replacement for the operators watching it.
              </p>
              <p>
                For facilities looking to extend coverage beyond fixed cameras - into hard-to-reach, remote or mobile
                areas - autonomous platforms are a related consideration worth being aware of, though they&apos;re an
                extension to plan for once the fixed-camera and analytics foundation is in place, not a starting
                point for most projects.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
            {integrationLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.div key={link.path} custom={i} initial="hidden" whileInView="visible" viewport={revealOnceTight} variants={fadeUp}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 transition-colors h-full"
                  >
                    <div className="p-2 rounded-lg bg-primary/15 flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-glow" />
                    </div>
                    <span className="text-sm font-medium text-white">{link.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Discuss a project - the one clear commercial CTA */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp}>
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Next Step</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4 text-balance">
              Discuss an AI Video Analytics Project
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              If you&apos;ve identified the use cases that matter for your site, our team can help evaluate whether
              AI video analytics fits your existing CCTV and VMS setup, and what an implementation plan looks like.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">
                Talk to Our Team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <p className="mt-5 text-sm text-muted-foreground">
              Or explore the{" "}
              <Link to="/solutions/ai-video-analytics" className="font-semibold text-primary hover:underline underline-offset-4">
                AI Video Analytics solution
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIVideoAnalyticsSecurityPlanningPage;
