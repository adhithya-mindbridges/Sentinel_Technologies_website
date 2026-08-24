import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerLogos from "@/components/PartnerLogos";
import portContainerTerminal from "@/assets/case-studies/port-container-terminal.jpg";
import dormakabaLogo from "@/assets/partners/logos/dormakaba.png";
import smithsDetectionLogo from "@/assets/partners/logos/smiths detection.png";
import gunneboLogo from "@/assets/partners/logos/gunnebo.png";
import gallagherLogo from "@/assets/partners/logos/gallagher.png";
import boonEdamLogo from "@/assets/partners/logos/boon edam.png";
import nemtekLogo from "@/assets/partners/logos/nemtek.png";
import parkZeusLogo from "@/assets/partners/logos/park zeus.png";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import SolutionHero from "@/components/solutions/SolutionHero";
import {
  ScanLine,
  Fingerprint,
  ScanEye,
  Car,
  ClipboardList,
  Truck,
  Server,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, iconSpring, revealOnce, revealOnceTight } from "@/lib/motion";

const GateAutomationPage = () => {
  const features = [
    {
      icon: Fingerprint,
      title: "RFID Vehicle Identification",
      description: "RFID-based vehicle identification paired with driver authentication for verified, contactless entry.",
    },
    {
      icon: ScanEye,
      title: "ANPR Recognition",
      description: "Automatic number-plate recognition mapped to registered vehicle-driver records for accurate identification.",
    },
    {
      icon: Car,
      title: "Automated Gate Control",
      description: "Boom barriers, automatic gate control and entry/exit automation working together at every checkpoint.",
    },
    {
      icon: ClipboardList,
      title: "Vehicle Access Management",
      description: "Structured access management for regular and visitor vehicles, with full traceability.",
    },
    {
      icon: Truck,
      title: "Parking & Weighbridge",
      description: "Integrated parking management and weighbridge connectivity for logistics-heavy sites.",
    },
    {
      icon: Server,
      title: "Enterprise & Central Monitoring",
      description: "ERP integration and central gate monitoring bring every checkpoint into one operational view.",
    },
  ];

  const gatePartners = [
    { name: "dormakaba", description: "Automatic entrance systems", logo: dormakabaLogo },
    { name: "Smiths Detection", description: "Screening and detection technology", logo: smithsDetectionLogo },
    { name: "Gunnebo", description: "Entrance control and security", logo: gunneboLogo },
    { name: "Gallagher", description: "Access and perimeter security", logo: gallagherLogo },
    { name: "Boon Edam", description: "Security entrances and turnstiles", logo: boonEdamLogo },
    { name: "Rapiscan Systems", description: "Vehicle and cargo screening" },
    { name: "Nemtek", description: "Perimeter security systems", logo: nemtekLogo },
    { name: "Park Zeus", description: "Parking and gate automation", logo: parkZeusLogo },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="RFID & ANPR Gate Automation | Sentinel Technologies"
        description="Automated vehicle and gate-management solutions for ports, factories, logistics facilities, warehouses and campuses. RFID identification, ANPR recognition, boom barriers and enterprise integration from Sentinel Technologies."
        canonical={`${SITE_URL}/solutions/gate-automation`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "RFID & ANPR Gate Automation",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "IN",
            description: "Automated vehicle and gate-management solutions combining RFID identification, ANPR recognition, boom barriers and enterprise software integration for ports, factories, logistics facilities and campuses.",
          },
        ]}
        breadcrumbs={[
          { name: "Solutions", url: `${SITE_URL}/#solutions` },
          { name: "Gate Automation", url: `${SITE_URL}/solutions/gate-automation` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Solutions", path: "/solutions" }, { name: "Gate Automation" }]} />

      <SolutionHero
        icon={ScanLine}
        eyebrow="Intelligent Vehicle Access"
        title="RFID & ANPR Gate Automation"
        description="Sentinel delivers automated vehicle and gate-management solutions for ports, factories, logistics facilities, warehouses, campuses and critical infrastructure."
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
              From Conventional Gates to Automated Checkpoints
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              By integrating RFID, ANPR, access control, physical barriers and enterprise software,
              conventional gates become intelligent automated checkpoints.
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

      {/* Real deployment - Kamarajar Port case study */}
      <section className="py-20 bg-security-light">
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
              Deployed at Critical Infrastructure Scale
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
                src={portContainerTerminal}
                alt="Shipping containers at a port terminal (representative image)"
                className="w-full h-80 lg:h-[420px] object-cover"
              />
            </div>
            <div>
              <Badge variant="secondary" className="mb-3">Ports &amp; Critical Infrastructure</Badge>
              <h3 className="text-2xl font-bold text-security-dark mb-3">Kamarajar Port Limited</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Sentinel Technologies implemented an integrated RFID and ANPR-based Gate Automation
                System for Kamarajar Port Limited, bringing together vehicle identification and
                automated gate-control technologies to streamline and secure vehicle movements within
                the port environment.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>&bull; RFID-based vehicle identification</li>
                <li>&bull; ANPR-based vehicle recognition</li>
                <li>&bull; Automated gate management and entry/exit workflows</li>
                <li>&bull; Access-control and physical gate equipment integration</li>
                <li>&bull; Centralized monitoring</li>
              </ul>
              <p className="text-security-dark font-medium mb-6">
                Result: digitized vehicle identification and gate operations, improving security,
                traceability and operational efficiency at a critical infrastructure facility.
              </p>
              <Link
                to="/case-studies/kamarajar-port"
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
        title="Gate Automation Technology Partners"
        partners={gatePartners}
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
              Turn Your Gates Into Intelligent Checkpoints
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get a free consultation on RFID and ANPR-based gate automation for your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white text-security-dark">
                <Link to="/solutions/access-control">View Access Control</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GateAutomationPage;
