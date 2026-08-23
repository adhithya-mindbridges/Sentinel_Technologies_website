import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerLogos from "@/components/PartnerLogos";
import ciscoLogo from "@/assets/partners/logos/cisco.png";
import dellLogo from "@/assets/partners/logos/dell.png";
import juniperLogo from "@/assets/partners/logos/juniper.png";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Network, Server, Cable, Shield, Database, Router } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, iconSpring, staggerContainer, staggerItem, revealOnce, revealOnceTight } from "@/lib/motion";

const ITInfrastructurePage = () => {
  const features = [
    {
      icon: Cable,
      title: "Structured Cabling",
      description: "Professional network cabling infrastructure for reliable data transmission."
    },
    {
      icon: Network,
      title: "Network Setup",
      description: "Enterprise-grade network design and implementation for optimal performance."
    },
    {
      icon: Server,
      title: "Server Installation",
      description: "Server room setup, installation, and configuration for business applications."
    },
    {
      icon: Database,
      title: "Data Centers",
      description: "Complete data center solutions with cooling, power, and security systems."
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Comprehensive cybersecurity solutions including firewalls and monitoring."
    },
    {
      icon: Router,
      title: "Wireless Systems",
      description: "Enterprise WiFi solutions with seamless coverage and management."
    }
  ];

  const itPartners = [
    { name: "Cisco", description: "Network infrastructure solutions", logo: ciscoLogo },
    { name: "HPE", description: "Enterprise server solutions" },
    { name: "Dell", description: "IT infrastructure hardware", logo: dellLogo },
    { name: "Juniper", description: "Network security solutions", logo: juniperLogo },
    { name: "Panduit", description: "Network cabling solutions" },
    { name: "Ubiquiti", description: "Enterprise wireless systems" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="IT & Network Infrastructure Solutions | Sentinel Technologies"
        description="Structured cabling, network setup, server installation and data-centre infrastructure - the IT backbone that supports modern security and automation systems."
        canonical={`${SITE_URL}/solutions/it-infrastructure`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "IT & Network Infrastructure",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "IN",
            description: "Structured cabling, network infrastructure, server installation and data-centre infrastructure supporting enterprise security systems.",
          },
        ]}
        breadcrumbs={[
          { name: "Solutions", url: `${SITE_URL}/#solutions` },
          { name: "IT Infrastructure", url: `${SITE_URL}/solutions/it-infrastructure` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Solutions" }, { name: "IT Infrastructure" }]} />
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 text-white overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-security-accent/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={staggerItem} className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                <Network className="w-12 h-12" />
              </div>
            </motion.div>
            <motion.h1 variants={staggerItem} className="text-4xl md:text-5xl font-bold mb-6">
              IT Infrastructure Solutions
            </motion.h1>
            <motion.p variants={staggerItem} className="text-xl mb-8 opacity-90 leading-relaxed">
              Structured cabling, network infrastructure, and IT solutions that form the 
              backbone of modern security systems and business operations.
            </motion.p>
            <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Get Network Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
              IT Infrastructure Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete IT infrastructure solutions for modern business requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
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

      {/* Solutions Types */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">
              IT Infrastructure Types
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImagePlaceholder
                label="Photo of a Sentinel-installed server room / structured cabling"
                className="rounded-lg shadow-security w-full h-80"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">Network Infrastructure</Badge>
                <h3 className="text-2xl font-bold text-security-dark mb-3">Enterprise Networks</h3>
                <p className="text-muted-foreground mb-4">
                  Robust network infrastructure for large organizations and campuses.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Core network design</li>
                  <li>• Redundant connections</li>
                  <li>• High-speed backbone</li>
                  <li>• Network monitoring tools</li>
                </ul>
              </div>

              <div>
                <Badge variant="secondary" className="mb-2">Data Centers</Badge>
                <h3 className="text-2xl font-bold text-security-dark mb-3">Data Center Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Complete data center infrastructure with power, cooling, and security.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Rack and stack services</li>
                  <li>• Power and cooling systems</li>
                  <li>• Cable management</li>
                  <li>• Environmental monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <PartnerLogos 
        title="IT Infrastructure Partners"
        partners={itPartners}
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
            Build Your IT Foundation
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get professional IT infrastructure consultation and implementation services.
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

export default ITInfrastructurePage;