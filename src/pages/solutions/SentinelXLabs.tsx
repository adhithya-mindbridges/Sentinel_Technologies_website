import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, iconSpring, revealOnce, revealOnceTight } from "@/lib/motion";
import {
  ArrowRight,
  Sparkles,
  BrainCircuit,
  Bot,
  Waves,
  Cpu,
  ShieldCheck,
  Compass,
  Network,
  X,
  Check,
  PlaneTakeoff,
  Radar,
  Camera,
  Satellite,
  Thermometer,
  Activity,
  ScanEye,
  Eye,
  TrendingUp,
  Boxes,
  Video,
  MapPin,
  Wrench,
  Layers,
  Building2,
  Fuel,
  Ship,
  Sprout,
  Mountain,
  Brain,
  Lock,
  Award,
  TrainFront,
  Plane,
  Zap,
  Leaf,
  AlertTriangle,
  HardHat,
  Gauge,
  Bell,
  GitBranch,
  Crosshair,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroSwarm from "@/assets/xlabs/xlabs-hero-swarm.jpg";
import fixedWingImg from "@/assets/xlabs/xlabs-fixedwing.jpg";
import multiRotorImg from "@/assets/xlabs/xlabs-multirotor.jpg";
import underwaterImg from "@/assets/xlabs/xlabs-underwater.jpg";
import aiDetectionImg from "@/assets/xlabs/xlabs-ai-detection.jpg";
import rdTeamImg from "@/assets/xlabs/xlabs-rd-team.jpg";
import ctaFieldImg from "@/assets/xlabs/xlabs-cta-field.jpg";
import xlabsIcon from "@/assets/xlabs/xlabs-icon.png";
import xlabsWordmark from "@/assets/xlabs/xlabs-wordmark.png";

const heroChips = [
  { icon: BrainCircuit, label: "AI-Powered Drones" },
  { icon: Bot, label: "Autonomous Robotics" },
  { icon: Waves, label: "Underwater Intelligence" },
  { icon: Cpu, label: "Edge AI" },
  { icon: ShieldCheck, label: "Mission Critical Solutions" },
];

const techStack = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    desc: "Deep learning, neural networks, object detection, behavior analysis, terrain understanding, and predictive mission planning.",
    tags: ["Deep Learning", "Neural Networks", "Object Detection", "Behaviour Analysis", "Terrain Understanding", "Mission Planning", "Obstacle Avoidance", "Predictive Analytics"],
  },
  {
    icon: Cpu,
    title: "Edge AI",
    desc: "Real-time onboard processing with zero cloud dependency and ultra-low latency - enabling mission-critical autonomous decisions at the point of action.",
    tags: ["Real-time Processing", "No Cloud Dependency", "Ultra-low Latency", "Mission Critical Decisions"],
  },
  {
    icon: Compass,
    title: "Autonomous Navigation",
    desc: "GPS and GPS-denied navigation, SLAM, terrain following, obstacle avoidance, dynamic path planning, and autonomous mission recovery.",
    tags: ["GPS Navigation", "GPS-denied Navigation", "SLAM", "Terrain Following", "Obstacle Avoidance", "Mission Recovery", "Dynamic Path Planning"],
  },
  {
    icon: Network,
    title: "Swarm Intelligence",
    desc: "Multi-platform coordination, dynamic formation control, distributed target sharing, and autonomous mission allocation across drone fleets.",
    tags: ["Multi-drone Collaboration", "Coordinated Missions", "Dynamic Formation Control", "Target Sharing", "Mission Allocation"],
  },
];

const visionTech = [
  { icon: BrainCircuit, label: "Artificial Intelligence" },
  { icon: Eye, label: "Computer Vision" },
  { icon: Cpu, label: "Edge Computing" },
  { icon: Compass, label: "Autonomous Navigation" },
  { icon: Bot, label: "Robotics" },
  { icon: Network, label: "Swarm Intelligence" },
  { icon: GitBranch, label: "Sensor Fusion" },
  { icon: Layers, label: "Digital Twin Technologies" },
];

const intelligenceLoop = [
  { icon: Eye, label: "Observe" },
  { icon: Brain, label: "Learn" },
  { icon: ScanEye, label: "Analyse" },
  { icon: TrendingUp, label: "Predict" },
  { icon: Compass, label: "Decide" },
  { icon: Zap, label: "React" },
];

const comparison = {
  conventional: [
    "Relies on continuous human input",
    "Fixed pre-programmed routes",
    "Limited situational awareness",
    "Reacts only when commanded",
    "Single-purpose payloads",
  ],
  xlabs: [
    "Observes and learns from its environment",
    "Analyses threats and anomalies in real time",
    "Predicts risk and plans dynamically",
    "Decides and reacts autonomously",
    "Executes complex multi-objective missions",
  ],
};

const platforms = [
  {
    id: "fixed-wing",
    name: "Fixed Wing Intelligence Platform",
    model: "SentraX VX1",
    tagline: "Long Endurance Intelligence.",
    image: fixedWingImg,
    icon: PlaneTakeoff,
    intro:
      "Sentinel Fixed Wing UAVs are engineered for long-range surveillance, mapping, inspection, and defense applications - combining advanced aerodynamics with AI-powered onboard processing to deliver persistent intelligence over vast geographic areas.",
    applications: ["Border Security", "Coastal Surveillance", "Pipeline Monitoring", "Power Transmission", "Mining", "Agriculture", "Disaster Assessment", "Infrastructure Inspection", "Forest Monitoring", "Large Area Mapping"],
    capabilities: ["Long endurance flight", "AI-based object recognition", "Live mission analytics", "Automatic route optimisation", "Terrain following", "BVLOS ready", "Autonomous Return-to-Base", "Live video streaming", "Thermal imaging integration", "Multispectral payloads"],
  },
  {
    id: "multi-rotor",
    name: "Multi-Rotor Intelligence Platform",
    model: "SentraX MX1",
    tagline: "Precision Intelligence.",
    image: multiRotorImg,
    icon: Radar,
    intro:
      "Designed for close-range inspection, emergency response, industrial safety, and smart city operations. Powered by onboard AI, Sentinel multi-rotor platforms analyze live video, detect anomalies, and support fully autonomous decision-making in dynamic urban and industrial environments.",
    applications: ["Industrial Inspection", "Smart Cities", "Construction Monitoring", "Oil & Gas", "Solar Farms", "Wind Turbines", "Traffic Monitoring", "Emergency Response", "Police Surveillance", "Event Security"],
    capabilities: ["360° obstacle avoidance", "AI vision", "Thermal analytics", "Autonomous tracking", "Object recognition", "People detection", "Incident detection", "Emergency landing", "Mission replay", "Live Command Center integration"],
  },
  {
    id: "underwater",
    name: "Underwater Intelligence Platform",
    model: "SentraX-UX1",
    tagline: "Intelligence Beneath the Surface.",
    image: underwaterImg,
    icon: Waves,
    intro:
      "Sentinel Underwater Autonomous Vehicles deliver real-time inspection and intelligence in environments where human access is difficult, hazardous, or impossible - including ports, offshore infrastructure, dams, reservoirs, and defense-sensitive underwater domains.",
    applications: ["Port Inspection", "Bridge Inspection", "Dam Inspection", "Pipeline Inspection", "Ship Hull Inspection", "Harbour Security", "Underwater Search & Rescue", "Marine Research", "Offshore Platforms", "Hydroelectric Projects"],
    capabilities: ["AI vision", "SONAR integration", "Obstacle avoidance", "Autonomous navigation", "3D mapping", "Corrosion detection", "Crack detection", "Live streaming", "Acoustic positioning", "Digital twin integration"],
    specs: [
      { label: "Width", value: '440 mm (17.3")' },
      { label: "Height", value: '235 mm (9.3")' },
      { label: "Length", value: '717 mm (28.2")' },
      { label: "Weight (in air)", value: "26 kg (57 lb)" },
      { label: "Depth Rating", value: "305 m (1000 ft)" },
      { label: "Camera", value: "260° 4K rotating camera" },
    ],
  },
];

const sensorInputs = [
  { icon: Video, label: "Video" },
  { icon: Camera, label: "Thermal Images" },
  { icon: Radar, label: "LiDAR" },
  { icon: Radar, label: "Radar" },
  { icon: Satellite, label: "GPS" },
  { icon: Compass, label: "IMU" },
  { icon: Thermometer, label: "Environmental Sensors" },
  { icon: Activity, label: "Mission Data" },
];

const aiCapabilities = [
  { icon: ScanEye, label: "Object Detection" },
  { icon: Eye, label: "Behaviour Analysis" },
  { icon: Crosshair, label: "Target Classification" },
  { icon: TrendingUp, label: "Risk Prediction" },
  { icon: ShieldCheck, label: "Collision Prevention" },
  { icon: Compass, label: "Autonomous Navigation" },
  { icon: AlertTriangle, label: "Threat Identification" },
  { icon: GitBranch, label: "Decision Support" },
  { icon: Gauge, label: "Mission Optimisation" },
];

const commandCenter = [
  { icon: Boxes, title: "Fleet Management", desc: "Real-time health, status, and location of all active platforms." },
  { icon: Video, title: "Live Video", desc: "Multi-feed video streaming from every active platform." },
  { icon: MapPin, title: "Mission Planning", desc: "Dynamic route planning and mission replay tools." },
  { icon: Compass, title: "Geofencing", desc: "Defined operational boundaries with automated compliance." },
  { icon: Activity, title: "Health Monitoring", desc: "Continuous platform diagnostics across the fleet." },
  { icon: Bell, title: "Incident Alerts", desc: "Real-time notifications the moment an anomaly is detected." },
  { icon: Wrench, title: "Predictive Maintenance", desc: "AI-driven health monitoring and proactive maintenance scheduling." },
  { icon: Layers, title: "Digital Twin Visualization", desc: "Real-time virtual asset visualization and mission simulation." },
  { icon: BrainCircuit, title: "AI Analytics Dashboard", desc: "Unified analytics across every mission and platform." },
];

const industries = [
  { icon: ShieldCheck, name: "Defense & Homeland Security", desc: "Border surveillance, force protection, reconnaissance, and threat neutralization." },
  { icon: Building2, name: "Smart Cities", desc: "Traffic monitoring, public safety, perimeter security, and urban infrastructure inspection." },
  { icon: Fuel, name: "Oil & Gas", desc: "Pipeline monitoring and offshore platform inspection." },
  { icon: Mountain, name: "Mining", desc: "Site mapping, volumetric analysis, and safety monitoring at scale." },
  { icon: Ship, name: "Ports & Harbours", desc: "Underwater hull inspection, perimeter surveillance, and harbour security." },
  { icon: Plane, name: "Airports", desc: "Airspace management and perimeter surveillance." },
  { icon: Zap, name: "Power & Utilities", desc: "Transmission line corridor monitoring and asset inspection." },
  { icon: TrainFront, name: "Railways", desc: "Corridor inspection and infrastructure monitoring." },
  { icon: HardHat, name: "Construction", desc: "Progress tracking and site safety monitoring." },
  { icon: Sprout, name: "Agriculture", desc: "Crop health monitoring and large area mapping." },
  { icon: Leaf, name: "Environmental Monitoring", desc: "Forest surveillance and environmental compliance." },
  { icon: AlertTriangle, name: "Disaster Management", desc: "Rapid disaster assessment and emergency response." },
];

const differentiators = [
  { value: "3", label: "Operational Domains", desc: "Air, ground, and underwater - unified under a single intelligence architecture." },
  { value: "0ms", label: "Cloud Dependency", desc: "All AI inference runs fully onboard at the edge - no connectivity required for mission-critical decisions." },
  { value: "360°", label: "Situational Awareness", desc: "Full-sphere obstacle detection and sensor fusion across video, thermal, LiDAR, and radar." },
  { value: "100%", label: "Indigenous IP", desc: "Fully proprietary AI engine, navigation stack, and command software developed in-house." },
];

const research = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: PlaneTakeoff, label: "Aerospace Engineering" },
  { icon: Cpu, label: "Embedded Systems" },
  { icon: Bot, label: "Robotics" },
  { icon: Eye, label: "Computer Vision" },
  { icon: Compass, label: "Autonomous Navigation" },
  { icon: Zap, label: "Edge Computing" },
  { icon: GitBranch, label: "Sensor Fusion" },
  { icon: Network, label: "Cloud Platforms" },
  { icon: Lock, label: "Cybersecurity" },
];

const whyXLabs = [
  { icon: Award, title: "Indigenous Research & Development" },
  { icon: BrainCircuit, title: "AI-First Autonomous Systems" },
  { icon: Boxes, title: "Modular Payload Architecture" },
  { icon: Layers, title: "Multi-Domain Platforms (Air, Ground & Underwater)" },
  { icon: GitBranch, title: "Open Integration APIs" },
  { icon: Cpu, title: "Edge AI Processing" },
  { icon: Lock, title: "Secure Communications" },
  { icon: MapPin, title: "Enterprise Command & Control Integration" },
  { icon: TrendingUp, title: "Scalable from Pilot Projects to National Deployments" },
];

const ctaOptions = [
  { title: "Talk to Our Innovation Team", desc: "Discuss your mission requirements with our autonomous systems engineers." },
  { title: "Request a Live Demonstration", desc: "See Sentinel AI platforms perform in a real-world operational environment." },
  { title: "Partner with Sentinel X-Labs", desc: "Explore joint development, licensing, and system integration opportunities." },
];

const SentinelXLabsPage = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      <SEO
        title="Sentinel X-Labs | Autonomous AI Drones, Robotics & Underwater Intelligence"
        description="Sentinel X-Labs engineers autonomous intelligence platforms - AI-powered fixed wing, multi-rotor and underwater drones with edge AI, swarm intelligence and a unified digital command center."
        canonical={`${SITE_URL}/solutions/sentinel-x-labs`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Autonomous Intelligence Platforms (Sentinel X-Labs)",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "IN",
            description:
              "Sentinel X-Labs is Sentinel Technologies' research and innovation division, engineering AI-powered autonomous aerial, ground and underwater platforms for defense, energy, ports, smart cities, agriculture and mining.",
          },
        ]}
        breadcrumbs={[
          { name: "Solutions", url: `${SITE_URL}/#solutions` },
          { name: "Sentinel X-Labs", url: `${SITE_URL}/solutions/sentinel-x-labs` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Solutions", path: "/solutions" }, { name: "Sentinel X-Labs" }]} />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center text-white overflow-hidden">
        <img src={heroSwarm} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-security-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />

        <div className="container relative mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <img src={xlabsIcon} alt="Sentinel X-Labs" className="h-10 w-auto" />
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                Founded 2025 &middot; Sentinel Group R&amp;D
              </Badge>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04 }}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              An Autonomous Intelligence &amp; Robotics Company
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6 text-balance"
            >
              Engineering Autonomous Intelligence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-xl md:text-2xl font-medium italic text-white/90 mb-6 leading-relaxed text-balance"
            >
              &ldquo;We don&apos;t just build drones. We build intelligent autonomous systems that see, think, decide, and respond.&rdquo;
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="text-lg text-white/75 mb-10 leading-relaxed max-w-2xl"
            >
              Sentinel X-Labs is the advanced research and innovation division of Sentinel Technologies -
              purpose-built to develop next-generation autonomous systems powered by Artificial Intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
                <Link to="/contact">
                  Talk to Our Innovation Team
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-security-dark">
                <Link to="/contact">Request a Live Demonstration</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2.5"
            >
              {heroChips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-medium"
                  >
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    {chip.label}
                  </span>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT IS SENTINEL X-LABS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">What Is Sentinel X-Labs?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-5 text-balance">
                Purpose-built to develop next-generation autonomous systems
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Our mission is to redefine the future of unmanned systems by embedding intelligence into
                aerial, ground, and underwater platforms - enabling them to perceive, decide, and act with
                minimal human intervention.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike conventional drones that depend on constant operator control, our intelligent
                platforms continuously analyze their surroundings, understand mission objectives, predict
                risks, and respond autonomously to dynamic, real-world situations.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} custom={1}>
                <Card className="h-full border-2 border-primary/15">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-security-dark mb-2">Vision</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      To continuously enhance surveillance capabilities within the Sentinel Group, ensuring
                      that we provide sustainable solutions to our customers that are far ahead of time.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} custom={2}>
                <Card className="h-full border-2 border-primary/15">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-security-dark mb-2">Mission</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Continuously invest in innovation to deliver new solutions to the surveillance
                      industry, and disruptive outcomes that are cost effective and sustainable long-term.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* THE FUTURE IS AUTONOMOUS + COMPARISON */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">The Future Is Autonomous</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark text-balance">
              Most drones simply fly. Sentinel X-Labs drones understand.
            </h2>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              Our proprietary AI engine transforms conventional unmanned platforms into intelligent
              autonomous systems capable of adapting to changing environments - without constant operator
              intervention.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            custom={1}
            className="flex flex-wrap items-center justify-center gap-2.5 mb-14"
          >
            {visionTech.map((v) => {
              const Icon = v.icon;
              return (
                <span
                  key={v.label}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-border text-xs font-semibold text-security-dark"
                >
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  {v.label}
                </span>
              );
            })}
          </motion.div>

          {/* Observe -> React intelligence loop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            custom={2}
            className="max-w-4xl mx-auto mb-14"
          >
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
              In Real Time
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {intelligenceLoop.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-2">
                    <div className="flex flex-col items-center gap-2">
                      <motion.div
                        className="w-14 h-14 rounded-full bg-white border-2 border-primary/30 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={iconSpring}
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <span className="text-xs font-semibold text-security-dark">{step.label}</span>
                    </div>
                    {i < intelligenceLoop.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-primary/40 flex-shrink-0 hidden sm:block" />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp}>
              <Card className="h-full bg-white/60 border-border">
                <CardContent className="p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-4">Conventional Drone</h3>
                  <ul className="space-y-3">
                    {comparison.conventional.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                        <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground/60" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} custom={1}>
              <Card className="h-full border-2 border-primary/30 bg-white shadow-security">
                <CardContent className="p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-primary mb-4">Sentinel X-Labs Platform</h3>
                  <ul className="space-y-3">
                    {comparison.xlabs.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span className="text-sm text-security-dark font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE TECHNOLOGY STACK */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Platform Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark text-balance">Core Technology Stack</h2>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              A deeply integrated stack of enabling technologies - each engineered to work in concert,
              delivering unprecedented autonomy across operational domains.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div key={tech.title} custom={index} initial="hidden" whileInView="visible" viewport={revealOnceTight} variants={fadeUp} whileHover={{ y: -6 }}>
                  <Card className="h-full relative overflow-hidden group transition-shadow duration-300 hover:shadow-security">
                    <span className="pointer-events-none absolute top-2 right-3 text-5xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-300 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <CardContent className="p-6 relative">
                      <motion.div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4" whileHover={{ scale: 1.12, rotate: 6 }} transition={iconSpring}>
                        <Icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-security-dark mb-2">{tech.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tech.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {tech.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="font-normal text-[11px] px-2 py-0.5">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Platforms</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark text-balance">
              Intelligence Across Every Domain
            </h2>
          </motion.div>

          <div className="space-y-16">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              const reversed = index % 2 === 1;
              return (
                <motion.div
                  key={platform.id}
                  id={platform.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={revealOnce}
                  variants={fadeUp}
                  className="grid lg:grid-cols-2 gap-10 items-center scroll-mt-24"
                >
                  <div className={reversed ? "lg:order-2" : ""}>
                    <div className="relative rounded-2xl overflow-hidden shadow-security">
                      <img src={platform.image} alt={`${platform.name} - ${platform.model}`} className="w-full h-[420px] object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <Badge className="bg-primary text-white border-none">{platform.model}</Badge>
                      </div>
                    </div>
                  </div>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <motion.div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4" whileHover={{ scale: 1.12, rotate: 6 }} transition={iconSpring}>
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold text-security-dark mb-1">{platform.name}</h3>
                    <p className="text-primary font-semibold mb-4">{platform.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{platform.intro}</p>

                    <div className="space-y-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-security-dark mb-2.5">Mission Applications</p>
                        <div className="flex flex-wrap gap-2">
                          {platform.applications.map((a) => (
                            <Badge key={a} variant="secondary" className="font-normal text-xs px-2.5 py-1">
                              {a}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-security-dark mb-2.5">Platform Capabilities</p>
                        <div className="flex flex-wrap gap-2">
                          {platform.capabilities.map((c) => (
                            <Badge key={c} variant="secondary" className="font-normal text-xs px-2.5 py-1">
                              {c}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {platform.specs && (
                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-xs font-bold uppercase tracking-wide text-security-dark mb-3">Specifications</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                          {platform.specs.map((s) => (
                            <div key={s.label} className="text-sm">
                              <span className="text-muted-foreground">{s.label}: </span>
                              <span className="font-semibold text-security-dark">{s.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI ENGINE + VISUAL DEMO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark text-balance">The Sentinel AI Engine</h2>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              At the core of every Sentinel X-Labs platform is a proprietary AI engine that continuously
              fuses multi-source sensor data into real-time situational awareness.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp}>
              <Card className="h-full border-2 border-border">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-security-dark mb-5">Sensor Inputs Processed</h3>
                  <ul className="space-y-4">
                    {sensorInputs.map((s) => {
                      const Icon = s.icon;
                      return (
                        <li key={s.label} className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-security-dark">{s.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} custom={1}>
              <Card className="h-full border-2 border-primary/30 bg-primary/[0.03]">
                <CardContent className="p-8">
                  <h3 className="text-lg font-bold text-primary mb-5">AI Capabilities Delivered</h3>
                  <ul className="space-y-4">
                    {aiCapabilities.map((s) => {
                      const Icon = s.icon;
                      return (
                        <li key={s.label} className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-security-dark">{s.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Visual demonstration */}
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={scaleIn} className="max-w-3xl mx-auto text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Visual Demonstration</p>
            <h3 className="text-2xl font-bold text-security-dark">AI Detection, Live</h3>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={scaleIn} custom={1} className="max-w-3xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-security border border-border">
              <img src={aiDetectionImg} alt="Sentinel AI engine detecting and classifying vehicles and pedestrians in real time from an aerial feed" className="w-full h-auto" loading="lazy" />
            </div>
          </motion.div>

          {/* Digital Command Center */}
          <div className="mt-20">
            <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="max-w-2xl mx-auto text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-security-dark text-balance">Digital Command Center</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Every platform connects to a unified, enterprise-grade command center - full situational
                awareness, fleet control, and predictive intelligence across all active missions.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {commandCenter.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div key={c.title} custom={i} initial="hidden" whileInView="visible" viewport={revealOnceTight} variants={fadeUp} className="text-center">
                    <motion.div className="flex justify-center mb-3" whileHover={{ scale: 1.1, y: -4 }} transition={iconSpring}>
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </motion.div>
                    <h4 className="font-semibold text-security-dark text-sm mb-1">{c.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Industries We Serve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark text-balance">
              Deployed wherever autonomous intelligence creates an advantage
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.name} custom={i} initial="hidden" whileInView="visible" viewport={revealOnceTight} variants={fadeUp} whileHover={{ y: -4 }}>
                  <Card className="h-full transition-shadow duration-300 hover:shadow-security">
                    <CardContent className="p-5">
                      <div className="p-2.5 rounded-lg bg-primary/10 inline-flex mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-security-dark text-sm mb-1.5">{ind.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.p initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
            Sentinel X-Labs solutions are also referenced across manufacturing, tourism, hospitality,
            insurance and healthcare contexts in Sentinel Group materials.
          </motion.p>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">At a Glance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Technology Differentiators</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((d, i) => (
              <motion.div key={d.label} custom={i} initial="hidden" whileInView="visible" viewport={revealOnceTight} variants={scaleIn} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 tabular-nums">{d.value}</div>
                <div className="font-semibold mb-2">{d.label}</div>
                <p className="text-sm text-white/60 leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY X-LABS + INNOVATION & RESEARCH */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Why Sentinel X-Labs?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark text-balance">
              Not a hardware vendor - an autonomous intelligence company
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 max-w-5xl mx-auto">
            {whyXLabs.map((w, i) => {
              const Icon = w.icon;
              return (
                <motion.div
                  key={w.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={revealOnceTight}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-security-light/60"
                >
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-security-dark leading-snug pt-1">{w.title}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="rounded-2xl overflow-hidden shadow-security">
              <img src={rdTeamImg} alt="Sentinel X-Labs multidisciplinary research and development team" className="w-full h-[360px] object-cover" loading="lazy" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} custom={1}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Innovation & Research</p>
              <h3 className="text-2xl md:text-3xl font-bold text-security-dark mb-4 text-balance">
                A multidisciplinary team across the full autonomy stack
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our R&amp;D team combines deep expertise across the full autonomy stack - continuously
                pushing the boundaries of what unmanned systems can perceive, decide, and accomplish in
                the field.
              </p>
              <div className="flex flex-wrap gap-2">
                {research.map((r) => {
                  const Icon = r.icon;
                  return (
                    <span
                      key={r.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-xs font-semibold text-security-dark"
                    >
                      <Icon className="w-3.5 h-3.5 text-primary" />
                      {r.label}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 text-white overflow-hidden">
        <img src={ctaFieldImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-[center_30%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-security-dark/85 via-security-dark/90 to-security-dark" />

        <div className="container relative mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="max-w-2xl mx-auto text-center mb-14">
            <img src={xlabsWordmark} alt="Sentinel X-Labs - Smarter Decisions, Powered by Innovation" className="h-8 w-auto mx-auto mb-6 brightness-0 invert" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Let&apos;s Build the Future of Autonomous Intelligence
            </h2>
            <p className="text-white/75 leading-relaxed">
              Whether your objective is protecting critical infrastructure, modernizing industrial
              inspections, enabling smart-city operations, or strengthening defense capabilities - Sentinel
              X-Labs delivers intelligent autonomous platforms built for real-world missions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {ctaOptions.map((c, i) => (
              <motion.div key={c.title} custom={i} initial="hidden" whileInView="visible" viewport={revealOnceTight} variants={fadeUp}>
                <Link to="/contact" className="block h-full">
                  <Card className="h-full bg-white/5 border-white/15 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{c.title}</h3>
                      <p className="text-sm text-white/60 leading-relaxed mb-4">{c.desc}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Get Started <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={revealOnce} variants={fadeUp} className="text-center mt-14">
            <p className="text-sm text-white/50 mb-4">Explore more of what Sentinel Technologies builds</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/solutions/building-automation" className="text-sm font-medium text-white/80 hover:text-primary transition-colors underline underline-offset-4">
                TraqOPS Building Intelligence
              </Link>
              <span className="text-white/30">&middot;</span>
              <Link to="/solutions" className="text-sm font-medium text-white/80 hover:text-primary transition-colors underline underline-offset-4">
                All Products &amp; Solutions
              </Link>
              <span className="text-white/30">&middot;</span>
              <Link to="/about" className="text-sm font-medium text-white/80 hover:text-primary transition-colors underline underline-offset-4">
                About Sentinel Technologies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SentinelXLabsPage;
