import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerLogos from "@/components/PartnerLogos";
import securityCameraInstallation from "@/assets/case-studies/security-camera-installation.jpg";
import aiDetectionImg from "@/assets/xlabs/xlabs-ai-detection.jpg";
import axisLogo from "@/assets/partners/logos/axis.png";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import SolutionHero from "@/components/solutions/SolutionHero";
import {
  BrainCircuit,
  HardHat,
  ShieldCheck,
  Users,
  Car,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, iconSpring, revealOnce, revealOnceTight } from "@/lib/motion";

const AIVideoAnalyticsPage = () => {
  const capabilityGroups = [
    {
      icon: HardHat,
      title: "Industrial Safety AI",
      description: "PPE compliance, working-at-height monitoring and hazard detection built for manufacturing and industrial safety.",
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
      icon: ShieldCheck,
      title: "Security AI",
      description: "Intrusion, perimeter and behaviour analytics that turn every camera into an active security sensor.",
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
      icon: Users,
      title: "People Intelligence",
      description: "Facial recognition, people counting and occupancy analytics for smarter space and crowd management.",
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
      icon: Car,
      title: "Vehicle Intelligence",
      description: "ANPR, vehicle classification and traffic analytics for gates, parking and road monitoring.",
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
  ];

  const aiPartners = [
    { name: "BriefCam", description: "Video analytics and investigation" },
    { name: "Milestone Systems", description: "Open-platform video management software" },
    { name: "Hanwha Vision", description: "AI-enabled camera technology" },
    { name: "i-PRO", description: "Edge AI camera systems" },
    { name: "Bosch / Keenfinity", description: "Intelligent video systems" },
    { name: "Axis Communications", description: "Network video and analytics", logo: axisLogo },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="A.I - Intelligent Video Analytics | Sentinel Technologies"
        description="AI transforms conventional CCTV infrastructure into an intelligent platform - Industrial Safety AI, Security AI, People Intelligence and Vehicle Intelligence that detect, analyse and respond to events in real time."
        canonical={`${SITE_URL}/solutions/ai-video-analytics`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "AI Video Analytics",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "IN",
            description: "AI-powered video analytics covering industrial safety, security, people intelligence and vehicle intelligence, transforming conventional CCTV infrastructure into an intelligent detection and response platform.",
          },
        ]}
        breadcrumbs={[
          { name: "Solutions", url: `${SITE_URL}/#solutions` },
          { name: "AI Video Analytics", url: `${SITE_URL}/solutions/ai-video-analytics` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Solutions", path: "/solutions" }, { name: "AI Video Analytics" }]} />

      <SolutionHero
        icon={BrainCircuit}
        eyebrow="Insights Beyond Vision"
        title="A.I - Intelligent Video Analytics"
        description="A.I transforms conventional CCTV infrastructure into an intelligent platform capable of detecting, analysing and responding to events in real time."
        primaryLabel="Get Free Consultation"
        secondaryLabel="Request Quote"
        highlights={capabilityGroups.map((g) => g.title)}
      />

      {/* Capability groups */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">
              A.I Turns Every Camera Into an Intelligent Sensor
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Four capability domains built on the same AI engine - deployed independently or together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilityGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <motion.div
                  key={group.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={revealOnceTight}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                >
                  <Card className="h-full relative overflow-hidden group transition-shadow duration-300 hover:shadow-security">
                    <span className="pointer-events-none absolute top-3 right-4 text-5xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-300 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <CardContent className="p-7 relative">
                      <div className="flex items-center space-x-4 mb-4">
                        <motion.div
                          className="p-3 rounded-lg bg-primary/10"
                          whileHover={{ scale: 1.12, rotate: 6 }}
                          transition={iconSpring}
                        >
                          <IconComponent className="w-8 h-8 text-primary" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-security-dark">
                          {group.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-5">
                        {group.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Badge key={item} variant="secondary" className="font-normal text-xs px-2.5 py-1">
                            {item}
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

      {/* Visual demonstration */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            className="max-w-2xl mx-auto text-center mb-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">See It In Action</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark text-balance">
              Detection, Classification and Tracking - In Real Time
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={scaleIn}
            className="max-w-3xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-security border border-border">
              <img
                src={aiDetectionImg}
                alt="Representative visualization of AI video analytics detecting and classifying vehicles and pedestrians with bounding boxes"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Representative visualization of AI object detection and classification.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Real deployment - TVS Srichakra case study */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Proven in the Field</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">
              Deployed at Manufacturing Scale
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-security">
              <img
                src={securityCameraInstallation}
                alt="Outdoor security cameras mounted on a pole (representative image)"
                className="w-full h-80 lg:h-[420px] object-cover"
              />
            </div>
            <div>
              <Badge variant="secondary" className="mb-3">Tyre Manufacturing</Badge>
              <h3 className="text-2xl font-bold text-security-dark mb-1">TVS Srichakra Limited</h3>
              <p className="text-primary font-semibold mb-4">400+ Cameras</p>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Sentinel Technologies implemented a large-scale surveillance infrastructure integrated
                with Industrial AI capabilities for TVS Srichakra's manufacturing environment.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>&bull; 400+ CCTV cameras</li>
                <li>&bull; Enterprise video surveillance</li>
                <li>&bull; Industrial AI analytics</li>
                <li>&bull; Manufacturing safety intelligence</li>
                <li>&bull; Centralized monitoring</li>
              </ul>
              <p className="text-security-dark font-medium mb-6">
                Result: improved plant-wide visibility while enabling the transition from conventional
                surveillance toward intelligent, AI-assisted safety and operational monitoring.
              </p>
              <Link
                to="/case-studies/tvs-srichakra"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                Read the full case study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Partners */}
      <PartnerLogos
        title="AI & Video Analytics Technology Partners"
        partners={aiPartners}
      />

      {/* CTA Section */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Turn Your Cameras Into Intelligent Sensors
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get a free consultation on AI video analytics for your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-security-dark">
                <Link to="/solutions/cctv">View CCTV Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIVideoAnalyticsPage;
