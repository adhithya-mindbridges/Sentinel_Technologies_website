import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerLogos from "@/components/PartnerLogos";
import honeywellLogo from "@/assets/partners/logos/honeywell.png";
import boschLogo from "@/assets/partners/logos/bosch.png";
import siemensLogo from "@/assets/partners/logos/siemens.png";
import johnsonControlsLogo from "@/assets/partners/logos/johnson controls.png";
import notifierLogo from "@/assets/partners/logos/notifier.png";
import edwardsLogo from "@/assets/partners/logos/edwards.png";

import fireAlarmImg from "@/assets/fire alarm.png";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import SolutionHero from "@/components/solutions/SolutionHero";
import { Flame, AlertTriangle, Bell, Shield, Radio, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, iconSpring, revealOnce, revealOnceTight } from "@/lib/motion";

const FireAlarmPage = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Smoke Detection",
      description: "Advanced smoke sensors with multiple detection technologies for early fire detection."
    },
    {
      icon: Flame,
      title: "Heat Sensors",
      description: "Temperature-based detection systems for environments where smoke detectors aren't suitable."
    },
    {
      icon: Bell,
      title: "Emergency Alerts",
      description: "Loud audio and visual alarms with customizable notification patterns."
    },
    {
      icon: Radio,
      title: "Central Monitoring",
      description: "24/7 monitoring with automatic emergency services notification."
    },
    {
      icon: Eye,
      title: "Manual Call Points",
      description: "Strategically placed manual activation points for immediate alarm triggering."
    },
    {
      icon: Shield,
      title: "System Integration",
      description: "Integration with CCTV, access control, and building management systems."
    }
  ];

  const firePartners = [
    { name: "Honeywell", description: "Fire safety solutions", logo: honeywellLogo },
    { name: "Bosch", description: "Fire detection systems", logo: boschLogo },
    { name: "Siemens", description: "Building safety technology", logo: siemensLogo },
    { name: "Johnson Controls", description: "Fire protection systems", logo: johnsonControlsLogo },
    { name: "Notifier", description: "Fire alarm control panels", logo: notifierLogo },
    { name: "Edwards", description: "Fire safety devices", logo: edwardsLogo },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Fire Alarm & Life Safety Systems | Sentinel Technologies"
        description="Smoke detection, heat sensors, emergency alerts and central monitoring. Sentinel designs and installs fire alarm systems for commercial, industrial and residential buildings."
        canonical={`${SITE_URL}/solutions/fire-alarm`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Fire Alarm Systems",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "IN",
            description: "Smoke detection, heat sensors, emergency alerts and central fire-alarm monitoring for commercial, industrial and residential facilities.",
          },
        ]}
        breadcrumbs={[
          { name: "Solutions", url: `${SITE_URL}/#solutions` },
          { name: "Fire Alarm", url: `${SITE_URL}/solutions/fire-alarm` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Solutions" }, { name: "Fire Alarm Systems" }]} />
      <SolutionHero
        icon={Flame}
        title="Fire Alarm Systems"
        description="Comprehensive fire detection and notification systems designed to protect lives and property with early warning capabilities and reliable performance."
        primaryLabel="Get Free Assessment"
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
              Fire Safety Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced fire detection technology for comprehensive safety coverage
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
              Fire Safety Solutions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={fireAlarmImg}
                alt="Sentinel Technologies fire alarm control panel installation (representative image)"
                className="rounded-lg shadow-security w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">Commercial Systems</Badge>
                <h3 className="text-2xl font-bold text-security-dark mb-3">Commercial Fire Protection</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced fire alarm systems for offices, retail, and industrial facilities.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Addressable detection systems</li>
                  <li>• Emergency evacuation systems</li>
                  <li>• Sprinkler system integration</li>
                  <li>• Compliance with local codes</li>
                </ul>
              </div>

              <div>
                <Badge variant="secondary" className="mb-2">Residential Systems</Badge>
                <h3 className="text-2xl font-bold text-security-dark mb-3">Residential Fire Safety</h3>
                <p className="text-muted-foreground mb-4">
                  Residential fire detection systems for homes and apartment complexes.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Wireless smoke detectors</li>
                  <li>• Carbon monoxide detection</li>
                  <li>• Smart home integration</li>
                  <li>• Mobile notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <PartnerLogos 
        title="Fire Safety Technology Partners"
        partners={firePartners}
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
            Protect Lives and Property
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get expert fire safety consultation and ensure compliance with safety regulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">Schedule Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white text-security-dark">
              <Link to="/solutions/public-address">View PA Systems</Link>
            </Button>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FireAlarmPage;