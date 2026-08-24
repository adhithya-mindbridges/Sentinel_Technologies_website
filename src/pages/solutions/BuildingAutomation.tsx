import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/use-count-up";
import { fadeUp, scaleIn, iconSpring } from "@/lib/motion";
import {
  Building2,
  Wrench,
  Leaf,
  Boxes,
  Lock,
  Layers,
  CircleCheck,
  LineChart,
  FileText,
  Brain,
  Cloud,
  Network,
  Smartphone,
  ShieldCheck,
  Factory,
  Hotel,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import chennaiMetroRail from "@/assets/customers/logos/chennai-metro-rail.png";
import bvg from "@/assets/customers/logos/bvg.png";
import voltas from "@/assets/customers/logos/voltas.png";
import sagtaur from "@/assets/customers/logos/sagtaur.png";
import cisb from "@/assets/customers/logos/cisb.png";
import kcic from "@/assets/customers/logos/kcic.png";
import firstman from "@/assets/customers/logos/firstman.png";

const coreCapabilities = [
  {
    icon: Building2,
    title: "Centralized Building Control",
    description: "Unify HVAC, lighting, energy, security and maintenance under a single digital platform.",
  },
  {
    icon: Wrench,
    title: "Preventive & Predictive Maintenance",
    description: "Detect faults before they cause downtime with condition-based and predictive scheduling.",
  },
  {
    icon: Leaf,
    title: "Energy & Sustainability Management",
    description: "Track consumption in real time and act on recommendations that cut waste.",
  },
  {
    icon: Boxes,
    title: "Smart Asset & Facility Management",
    description: "Maintain a live digital inventory of every asset, its condition and its service history.",
  },
  {
    icon: Lock,
    title: "Integrated Security & Access Control",
    description: "Bring physical security and access systems into the same operational view as building systems.",
  },
  {
    icon: Layers,
    title: "Multi-Site, Multi-Tenant Scalability",
    description: "Manage a single building or an entire portfolio of properties from one platform.",
  },
];

const keyBenefits = [
  "Reduce operational costs by up to 30%",
  "Improve energy efficiency",
  "Enhance occupant comfort and safety",
  "Gain actionable insights",
  "Minimize downtime",
  "Achieve smarter, data-driven management",
];

const analytics = [
  {
    icon: LineChart,
    title: "Real-Time Dashboards",
    description: "Visualize energy trends, asset performance, and environmental parameters.",
  },
  {
    icon: FileText,
    title: "Custom Reports",
    description: "Export insights for maintenance, consumption, and compliance.",
  },
  {
    icon: Brain,
    title: "AI-Driven Insights",
    description: "Detect inefficiencies, predict faults, and recommend optimization actions.",
  },
];

const techOverview = [
  { label: "Platform", value: "Cloud-based or On-premise", icon: Cloud },
  { label: "Integration", value: "BACnet, Modbus, MQTT, OPC-UA", icon: Network },
  { label: "Data Layer", value: "IoT-enabled architecture with API support", icon: Boxes },
  { label: "Interfaces", value: "Web dashboard, mobile app, analytics engine", icon: Smartphone },
  { label: "Security", value: "Role-based access, encrypted communication, audit logging", icon: ShieldCheck },
];

const industries = [
  { icon: Building2, label: "Commercial Buildings & Business Parks" },
  { icon: Factory, label: "Industrial Facilities & Warehouses" },
  { icon: Hotel, label: "Hotels & Smart Hospitality" },
  { icon: GraduationCap, label: "Campuses & Institutions" },
  { icon: HeartPulse, label: "Hospitals & Healthcare Centers" },
  { icon: ShoppingBag, label: "Malls & Mixed-Use Complexes" },
];

const clientele = [
  { name: "Chennai Metro Rail Limited", logo: chennaiMetroRail },
  { name: "bvg", logo: bvg },
  { name: "Voltas", logo: voltas },
  { name: "SagTaur", logo: sagtaur },
  { name: "CISB", logo: cisb },
  { name: "KCIC", logo: kcic },
  { name: "FIRSTMAN", logo: firstman },
];

const HeroStat = () => {
  const { ref, display } = useCountUp("30%");
  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
};

const BuildingAutomationPage = () => {
  return (
    <div className="min-h-screen overflow-x-clip">
      <SEO
        title="TraqOPS | Intelligent Building Management Solution | Sentinel Technologies"
        description="TraqOPS is Sentinel Technologies' cloud-enabled Building Management Solution - centralized control, predictive maintenance, energy management and AI-driven insights for smart, sustainable buildings."
        canonical={`${SITE_URL}/solutions/building-automation`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Intelligent Building Management Solution (TraqOPS)",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "IN",
            description:
              "TraqOPS is a cloud-enabled Building Management Solution that unifies, automates and optimizes HVAC, lighting, energy, security and maintenance under a single digital platform.",
          },
        ]}
        breadcrumbs={[
          { name: "Solutions", url: `${SITE_URL}/#solutions` },
          { name: "Building Automation", url: `${SITE_URL}/solutions/building-automation` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Solutions" }, { name: "Building Automation" }]} />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24 text-white overflow-hidden">
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

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                <Building2 className="w-12 h-12" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider opacity-90 mb-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Powered by TraqOPS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-balance"
            >
              Intelligent Building Management Solution
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="text-lg font-medium mb-6 opacity-90 italic"
            >
              Operate. Automate. Optimize.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="text-xl mb-10 opacity-90 leading-relaxed"
            >
              TraqOPS is an intelligent, cloud-enabled Building Management Solution (BMS) designed to
              unify, automate, and optimize all building operations under a single digital platform. From
              HVAC and lighting to energy, security, and maintenance, TraqOPS delivers real-time control,
              operational efficiency, and data-driven insights that redefine how modern facilities are managed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  Get Energy Assessment
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm">
                <span className="text-2xl font-bold">
                  <HeroStat />
                </span>
                <span className="opacity-80">lower operational costs</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm opacity-90">
                Single Platform Control
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm opacity-90">
                AI-Driven Insights
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to run a modern building from one unified platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                >
                  <Card className="h-full relative overflow-hidden group transition-shadow duration-300 hover:shadow-security">
                    <span className="absolute top-3 right-4 text-5xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-300 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <CardContent className="p-6 relative">
                      <div className="flex items-center space-x-4 mb-4">
                        <motion.div
                          className="p-3 rounded-lg bg-primary/10"
                          whileHover={{ scale: 1.12, rotate: 6 }}
                          transition={iconSpring}
                        >
                          <IconComponent className="w-8 h-8 text-primary" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-security-dark">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits + Technology Overview */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <Card className="border-2 border-primary/20 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-security-dark mb-6">Key Benefits</h3>
                  <ul className="space-y-4">
                    {keyBenefits.map((benefit, i) => (
                      <motion.li
                        key={benefit}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="flex items-start gap-3"
                      >
                        <CircleCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={1}
            >
              <Card className="border-2 border-primary/20 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-security-dark mb-6">Technology Overview</h3>
                  <ul className="space-y-4">
                    {techOverview.map((row, i) => {
                      const IconComponent = row.icon;
                      return (
                        <motion.li
                          key={row.label}
                          custom={i}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={fadeUp}
                          className="flex items-start gap-3"
                        >
                          <IconComponent className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-security-dark">{row.label}: </span>
                            <span className="text-muted-foreground">{row.value}</span>
                          </div>
                        </motion.li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics & Reporting */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">
              Analytics & Reporting
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {analytics.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className="text-center"
                >
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1, y: -4 }}
                    transition={iconSpring}
                  >
                    <div className="p-4 rounded-full bg-primary/10">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-security-dark mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose TraqOPS */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-6">
              Why Choose TraqOPS
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unlike traditional BMS systems, TraqOPS offers multi-system integration, predictive
              maintenance, cloud-based mobility, and enterprise-wide scalability. The AI-driven platform
              provides deep operational insights for better decision-making.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={industry.label}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={scaleIn}
                  whileHover={{ y: -4 }}
                  className="text-center group"
                >
                  <motion.div
                    className="flex justify-center mb-3"
                    whileHover={{ scale: 1.12, rotate: -4 }}
                    transition={iconSpring}
                  >
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                  </motion.div>
                  <p className="text-sm font-medium text-security-dark">{industry.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Empowering Smart Infrastructure */}
      <section className="py-16 bg-security-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={scaleIn}
          >
            <Card className="max-w-4xl mx-auto bg-primary/5 border-none">
              <CardContent className="p-8 md:p-10 text-center">
                <h3 className="text-2xl font-bold text-security-dark mb-4">
                  Empowering Smart Infrastructure with TraqOPS
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  TraqOPS bridges operational technology (OT) and information technology (IT) to create
                  intelligent, connected, and sustainable buildings. With real-time visibility, automated
                  control, and actionable analytics, it ensures that every building becomes a self-optimizing
                  environment.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Clientele */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold text-security-dark mb-2">Our Clientele</h3>
          </motion.div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {clientele.map((client, index) => (
              <motion.img
                key={client.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                whileHover={{ scale: 1.08 }}
                src={client.logo}
                alt={client.name}
                className="h-10 w-auto max-w-[140px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Optimize Your Building Performance
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={1}
            className="text-lg mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Get expert consultation for building automation and energy management solutions.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={2}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">Schedule Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white text-security-dark">
              <Link to="/solutions/it-infrastructure">View IT Infrastructure</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BuildingAutomationPage;
