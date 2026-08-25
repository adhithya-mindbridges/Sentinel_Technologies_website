import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Network,
  BrainCircuit,
  Zap,
  TrendingUp,
  Activity,
  Eye,
  Boxes,
  Target,
  Lightbulb,
  Award,
  Handshake,
  CheckCircle2,
  Layers,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-security.jpg";
import controlRoomImage from "@/assets/control-room.jpg";
import teamWorkImage from "@/assets/team-work.jpg";
import { industries } from "@/data/industries";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const milestones = [
  { year: "2012", title: "Inception with CCTV Solutions" },
  { year: "2015", title: "Access Control Capabilities" },
  { year: "2016", title: "IT Capabilities" },
  { year: "2017", title: "Network Capabilities" },
  { year: "2018", title: "IT Infrastructure Capabilities" },
  { year: "2019", title: "Analytics Capabilities" },
  { year: "2021", title: "Physical Security Capabilities" },
  { year: "2022", title: "Screening & ICCC Capabilities" },
  { year: "2023", title: "Hybrid Access Capabilities" },
  { year: "2024", title: "Identity Detection Capabilities" },
  { year: "2024", title: "AI Implementation Solution" },
  { year: "2025", title: "AI & Drone Capabilities" },
  {
    year: "2026-2027",
    title: "Global Expansion",
    desc: "Scaling across global markets with deployments in 11+ industries and 5+ countries, including UAE.",
  },
];

const journeySteps = [
  { icon: ShieldCheck, title: "Secure", desc: "We design and integrate comprehensive physical security and ELV infrastructure to protect people, property and critical assets." },
  { icon: Network, title: "Connect", desc: "We integrate cameras, access control, fire and life-safety systems, networks, sensors, IoT devices and enterprise platforms into unified environments." },
  { icon: BrainCircuit, title: "Analyse", desc: "Through AI and intelligent analytics, we convert video, events and operational data into meaningful real-time insights." },
  { icon: Zap, title: "Automate", desc: "We enable automated alerts, workflows, incident management and intelligent decision support to improve safety and efficiency." },
  { icon: TrendingUp, title: "Optimise", desc: "Our integrated platforms help organizations continuously improve security, asset utilization, energy performance and effectiveness." },
];

const transformations = [
  "A surveillance camera becomes an intelligent sensor.",
  "An access control system becomes an identity platform.",
  "A gate becomes an automated vehicle-management point.",
  "A command centre becomes a real-time decision environment.",
  "A building becomes a connected operational ecosystem.",
];

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We continuously explore emerging technologies and transform them into practical solutions that solve real-world challenges." },
  { icon: Award, title: "Engineering Excellence", desc: "Every solution is built around sound engineering, reliability, scalability and long-term performance." },
  { icon: Handshake, title: "Customer Commitment", desc: "We build relationships beyond project completion through responsive service, continuous support and lifecycle management." },
  { icon: ShieldCheck, title: "Integrity", desc: "Transparency, accountability and responsible business practices guide every customer and partner relationship." },
  { icon: CheckCircle2, title: "Reliability", desc: "For mission-critical infrastructure, reliability is fundamental. We design solutions to perform when they are needed most." },
  { icon: BrainCircuit, title: "Intelligence", desc: "We believe the future of infrastructure lies in systems that can understand events, generate insights and enable faster decisions." },
];

const whySentinel = [
  { icon: Layers, title: "End-to-End Capability", desc: "Consult, design, engineer, supply, integrate, implement, commission, maintain and optimise - one technology partner throughout the full lifecycle." },
  { icon: Network, title: "Multi-Technology Expertise", desc: "Expertise across ELV, Security, AI, VMS, Networking, IoT, Automation and Intelligent Building technologies - without isolated technology silos." },
  { icon: Boxes, title: "Open Integration Philosophy", desc: "Designed around interoperability, open standards and scalable architecture so customers can integrate technologies from multiple manufacturers." },
  { icon: BrainCircuit, title: "AI-Driven Future", desc: "Continuously investing in Artificial Intelligence and Computer Vision to transform conventional security infrastructure into intelligent platforms." },
  { icon: TrendingUp, title: "Enterprise Scalability", desc: "From a single facility to multi-location enterprise deployments, our architecture is designed to scale as customers grow." },
  { icon: Handshake, title: "Lifecycle Partnership", desc: "Preventive maintenance, technical support, system upgrades and lifecycle services - a long-term technology partner, not a one-time vendor." },
];

const ecosystem = [
  { icon: Eye, name: "Artificial Intelligence", tagline: "Insights Beyond Vision", desc: "AI-powered Computer Vision, Video Analytics, Facial Recognition, ANPR, Intelligent Video Management and industry-specific analytics that transform surveillance video into actionable intelligence." },
  { icon: Activity, name: "TraqOPS - iBMS", tagline: "Intelligent Building & Operations Management", desc: "A unified approach to building intelligence, IoT integration, energy monitoring, asset management and maintenance-workflow digitization.", path: "/solutions/building-automation" },
  { icon: Rocket, name: "Sentinel X-Labs", tagline: "Engineering Autonomous Intelligence", desc: "Our research and innovation division engineering AI-powered autonomous aerial, ground and underwater platforms.", path: "/solutions/sentinel-x-labs" },
];

const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="About Sentinel Technologies - Intelligent Security, AI & Automation"
        description="Founded in 2012, Sentinel Technologies engineers intelligent security, AI-powered surveillance, automation and digital infrastructure for enterprises, industries, transportation and government."
        canonical="https://sentinel-technologies.net/about"
      />

      {/* Hero */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <img
          src={heroImage}
          alt="Sentinel Technologies security operations"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[13px] font-bold uppercase tracking-[0.2em] text-primary mb-6"
          >
            About Sentinel &middot; Founded 2012
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight"
          >
            Engineering Security.<br />Empowering Intelligence.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto"
          >
            Sentinel Technologies Private Limited is a technology and engineering company delivering
            intelligent security, ELV, AI-powered surveillance, automation and digital infrastructure
            solutions for enterprises, industries, transportation, infrastructure and government
            organizations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">Talk to Our Team</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white text-security-dark">
              <Link to="/industries">Explore Industries</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-6 text-balance">
                Security infrastructure should understand, predict, alert and enable action
              </h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                Founded in 2012, Sentinel has evolved from a security and ELV systems integrator into a
                technology-driven organization focused on creating safer, smarter, connected and more
                intelligent environments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine traditional physical security and ELV engineering with Artificial Intelligence,
                Computer Vision, Intelligent Video Management, IoT, Building Intelligence and Automation -
                transforming conventional infrastructure into connected ecosystems built for complex,
                mission-critical environments where reliability, scalability and continuous availability matter.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src={controlRoomImage} alt="Sentinel command and control centre" loading="lazy" className="rounded-2xl shadow-security w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-security-dark/30 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secure / Connect / Analyse / Automate / Optimise */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">From Integration to Intelligent Infrastructure</p>
            <h2 className="text-3xl font-bold text-balance">How we transform conventional infrastructure</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {journeySteps.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions (teaser) */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mx-auto text-center">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Our Solutions</p>
            <h2 className="text-3xl font-bold text-security-dark mb-5 text-balance">
              14 integrated technology categories, one architecture
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From CCTV and AI video analytics to access control, gate automation, command centres,
              intelligent building operations and structured infrastructure - explore the complete
              Sentinel product and solutions portfolio.
            </p>
            <Button asChild size="lg">
              <Link to="/solutions">
                Explore Products &amp; Solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Beyond System Integration */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <img src={teamWorkImage} alt="Sentinel engineers integrating systems" loading="lazy" className="rounded-2xl shadow-security w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-security-dark/30 to-transparent rounded-2xl" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2">
              <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Beyond System Integration</p>
              <h2 className="text-3xl font-bold text-security-dark mb-5 text-balance">
                We don't deploy isolated technologies. We build integrated ecosystems.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our engineering teams work across hardware, software, networking, AI and automation to
                create solutions where multiple technologies operate together as one intelligent environment.
              </p>
              <ul className="space-y-3">
                {transformations.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Industries We Serve</p>
            <h2 className="text-3xl font-bold text-security-dark text-balance">
              Built for complex, mission-critical environments
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map(({ icon: Icon, name, slug }, i) => (
              <motion.div key={slug} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link
                  to={`/industries/${slug}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border hover:border-primary/40 hover:shadow-security transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-security-dark">{name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Looking for detailed coverage &amp; typical priorities? See our{" "}
            <Link to="/industries" className="text-primary font-semibold hover:underline">
              Industries pages
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-2xl bg-security-light">
              <Target className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-security-dark mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To engineer and deliver secure, intelligent and connected technology ecosystems that
                protect people and infrastructure while enabling organizations to operate with greater
                visibility, efficiency and confidence.
              </p>
            </motion.div>
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-2xl bg-security-light">
              <Eye className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-security-dark mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a globally trusted technology company in Intelligent Security, Artificial
                Intelligence, Automation and Integrated Infrastructure - transforming conventional
                environments into safer, smarter and more autonomous ecosystems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Our Core Values</p>
            <h2 className="text-3xl font-bold text-security-dark">Principles that guide every project</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-6 rounded-2xl bg-white border border-border">
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-security-dark mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sentinel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Why Sentinel?</p>
            <h2 className="text-3xl font-bold text-security-dark">One partner, the full lifecycle</h2>
          </motion.div>

          {/* Lifecycle strip */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-2 mb-14"
          >
            {["Consult", "Design", "Engineer", "Supply", "Integrate", "Implement", "Commission", "Maintain", "Optimise"].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">{step}</span>
                {i < arr.length - 1 && <ArrowRight className="w-3 h-3 text-muted-foreground" />}
              </span>
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whySentinel.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-start gap-4 p-5 rounded-xl border border-border">
                <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-security-dark mb-1">{title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Ecosystem */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Our Technology Ecosystem</p>
            <h2 className="text-3xl font-bold text-balance">
              Bridging physical infrastructure and digital intelligence
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {ecosystem.map(({ icon: Icon, name, tagline, desc, path }, i) => (
              <motion.div key={name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-7 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">{name}</h3>
                <p className="text-primary text-sm font-semibold mb-3">{tagline}</p>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                {path && (
                  <Link to={path} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all mt-4">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="relative py-24 md:py-32 bg-background overflow-hidden">
        {/* Oversized background year - brand anchor, echoes the ghost-numeral
            treatment already used on Solutions/TraqOPS cards */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold leading-none text-primary/[0.06] tabular-nums whitespace-nowrap"
            style={{ fontSize: "clamp(6rem, 24vw, 22rem)" }}
          >
            2012
          </motion.span>
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-security-dark/70">
                Since
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="h-px w-8 bg-primary origin-left"
              />
              <span className="text-sm font-bold tracking-[0.15em] text-primary tabular-nums">
                2012
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-security-dark leading-[1.08] tracking-tight text-balance"
            >
              One Fundamental
              <br />
              Objective
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative pl-8 sm:pl-0">
              {/* vertical line */}
              <div className="absolute left-[7px] sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-1/2" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={`${m.year}-${m.title}`}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className={`relative flex sm:items-center gap-4 sm:gap-0 ${
                      i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-0 sm:left-1/2 top-1 sm:top-1/2 w-3.5 h-3.5 rounded-full bg-primary border-4 border-background sm:-translate-x-1/2 sm:-translate-y-1/2 z-10" />
                    <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10 sm:text-left"}`}>
                      <span className="text-xs font-mono font-bold text-primary">{m.year}</span>
                      <p className="font-semibold text-security-dark leading-snug">{m.title}</p>
                      {m.desc && (
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1">{m.desc}</p>
                      )}
                    </div>
                    <div className="hidden sm:block sm:w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Using technology to make environments safer, smarter and more efficient. What began with
              security and ELV integration has progressively expanded into enterprise surveillance,
              intelligent access, integrated command centres, AI-powered video analytics, intelligent
              building management and next-generation automation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Today, we are building the next chapter of Sentinel around the convergence of{" "}
              <span className="font-semibold text-security-dark">
                Security + Artificial Intelligence + Automation + IoT + Data + Engineering
              </span>
              .
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Because the future of security is not simply about seeing what happened. It is about
              understanding what is happening - and enabling action before it becomes a problem.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="inline-block text-[13px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Quality &amp; Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-3">
              ISO Certified
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sentinel Technologies holds internationally recognised certifications that reflect our commitment to quality, information security and responsible AI management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                code: "ISO 9001:2015",
                title: "Quality Management System",
                desc: "Defines our framework for consistent engineering quality, customer focus and continual improvement across all projects and services.",
              },
              {
                code: "ISO/IEC 27001:2022",
                title: "Information Security Management",
                desc: "Demonstrates our systematic approach to managing sensitive information, data security risks and cybersecurity across operations.",
              },
              {
                code: "ISO/IEC 42001:2023",
                title: "AI Management System",
                desc: "Recognises our responsible development and deployment of Artificial Intelligence technologies with governance, transparency and accountability.",
              },
            ].map((cert, i) => (
              <motion.div
                key={cert.code}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="h-full border border-border rounded-xl p-6 bg-security-light hover:shadow-security transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mb-4">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-[13px] font-bold font-mono tracking-wider text-primary mb-1 uppercase">{cert.code}</p>
                  <h3 className="text-lg font-bold text-security-dark mb-2 leading-snug">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-gradient-hero text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Building Intelligence. Securing Tomorrow.
            </h2>
            <p className="text-white/75 mb-8 leading-relaxed">
              From securing a single facility to creating an intelligent command-and-control ecosystem
              across multiple locations, Sentinel Technologies brings together the people, engineering
              expertise and technology platforms required to transform complex requirements into
              dependable solutions.
            </p>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-8">
              Securing Spaces. Empowering Enterprises.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
