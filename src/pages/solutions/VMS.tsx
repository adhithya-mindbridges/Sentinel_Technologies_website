import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerLogos from "@/components/PartnerLogos";
import controlRoomImg from "@/assets/control-room.jpg";
import hikvisionLogo from "@/assets/partners/logos/hikvision.png";
import dahuaLogo from "@/assets/partners/logos/dahua.png";
import axisLogo from "@/assets/partners/logos/axis.png";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import SolutionHero from "@/components/solutions/SolutionHero";
import {
  Boxes,
  Video,
  Search,
  Bell,
  Network,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, iconSpring, revealOnce, revealOnceTight } from "@/lib/motion";

const VMSPage = () => {
  const features = [
    {
      icon: Boxes,
      title: "Camera & Integration",
      description: "Centralized camera management with ONVIF-based integration and multi-brand camera support across the estate.",
    },
    {
      icon: Video,
      title: "Live & Recorded Video",
      description: "Unified access to live and recorded footage with intelligent video search across every connected site.",
    },
    {
      icon: Search,
      title: "Incident Investigation",
      description: "Fast, structured incident investigation backed by event and alarm management workflows.",
    },
    {
      icon: Network,
      title: "Multi-Site Architecture",
      description: "A single platform spanning multiple sites, with role-based user management for every operator.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability & Health Monitoring",
      description: "Continuous system health and infrastructure monitoring, backed by failover architecture for uptime.",
    },
    {
      icon: BrainCircuit,
      title: "AI & Command Centre Integration",
      description: "AI analytics integration and command centre connectivity, with full web and mobile accessibility.",
    },
  ];

  const vmsPartners = [
    { name: "Milestone Systems", description: "Open-platform video management software" },
    { name: "Network Optix", description: "Nx Witness video management platform" },
    { name: "BriefCam", description: "Video analytics and investigation" },
    { name: "Hikvision", description: "Video surveillance technology", logo: hikvisionLogo },
    { name: "Dahua Technology", description: "Video surveillance solutions", logo: dahuaLogo },
    { name: "Axis Communications", description: "Network video systems", logo: axisLogo },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="VMS - Intelligent Video Management | Sentinel Technologies"
        description="An open, scalable Video Management System with centralized camera management, multi-site architecture, AI analytics integration and command centre connectivity. Sentinel designs VMS platforms for enterprise surveillance."
        canonical={`${SITE_URL}/solutions/vms`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Video Management System (VMS)",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "IN",
            description: "Open and scalable Video Management System with centralized camera management, ONVIF integration, multi-site architecture, AI analytics and command centre integration for enterprise surveillance environments.",
          },
        ]}
        breadcrumbs={[
          { name: "Solutions", url: `${SITE_URL}/#solutions` },
          { name: "VMS", url: `${SITE_URL}/solutions/vms` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Solutions", path: "/solutions" }, { name: "VMS" }]} />

      <SolutionHero
        icon={Boxes}
        title="VMS - Intelligent Video Management"
        description="VMS is an open and scalable Video Management platform designed for modern enterprise surveillance environments."
        primaryLabel="Get Free Consultation"
        secondaryLabel="Request Quote"
        highlights={features.slice(0, 4).map((f) => f.title)}
      />

      {/* Features Section */}
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
              Unified Video. Simplified Operations.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              VMS provides the foundation for building a truly intelligent surveillance ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
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

      {/* Solution Types - Design View / Infrastructure View */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">
              Two Views. One Platform.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={controlRoomImg}
                alt="Sentinel Technologies video management control room with multi-camera video wall (representative image)"
                className="rounded-lg shadow-security w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">Facility Visualization</Badge>
                <h3 className="text-2xl font-bold text-security-dark mb-3">Design View</h3>
                <p className="text-muted-foreground mb-4">
                  Visualize camera positions directly on facility layouts for faster spatial
                  understanding and response.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>&bull; Camera placement mapped to facility layouts</li>
                  <li>&bull; Faster spatial understanding for operators</li>
                  <li>&bull; Quicker on-site response during incidents</li>
                </ul>
              </div>

              <div>
                <Badge variant="secondary" className="mb-2">System Oversight</Badge>
                <h3 className="text-2xl font-bold text-security-dark mb-3">Infrastructure View</h3>
                <p className="text-muted-foreground mb-4">
                  Monitor cameras, servers, storage and network health from a single unified view.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>&bull; Cameras, servers, storage and network in one place</li>
                  <li>&bull; System health monitoring across all infrastructure</li>
                  <li>&bull; Failover architecture visibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <PartnerLogos
        title="VMS Technology Partners"
        partners={vmsPartners}
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
              Build a Truly Intelligent Surveillance Ecosystem
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get a free consultation and see how Sentinel's VMS platform can unify your video
              operations.
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

export default VMSPage;
