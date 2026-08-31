import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerLogos from "@/components/PartnerLogos";
import hikvisionLogo from "@/assets/partners/logos/hikvision.png";
import dahuaLogo from "@/assets/partners/logos/dahua.png";
import axisLogo from "@/assets/partners/logos/axis.png";
import boschLogo from "@/assets/partners/logos/bosch.png";

import heroSecurityImg from "@/assets/hero-security.jpg";

import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import SolutionHero from "@/components/solutions/SolutionHero";
import { Camera, Eye, Shield, Smartphone, Monitor, AlertTriangle, Cctv } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, iconSpring, revealOnce, revealOnceTight } from "@/lib/motion";

const CCTVPage = () => {
  const features = [
    {
      icon: Eye,
      title: "HD/4K Recording",
      description: "Crystal clear video quality with high-definition and 4K resolution options for detailed surveillance."
    },
    {
      icon: Shield,
      title: "Night Vision",
      description: "Advanced infrared technology ensures clear visibility even in complete darkness."
    },
    {
      icon: Smartphone,
      title: "Remote Access",
      description: "Monitor your premises from anywhere using our mobile apps and web interfaces."
    },
    {
      icon: Monitor,
      title: "Real-time Monitoring",
      description: "24/7 live monitoring with instant alerts and notifications for security events."
    },
    {
      icon: AlertTriangle,
      title: "Motion Detection",
      description: "Intelligent motion sensing with customizable zones and sensitivity settings."
    },
    {
      icon: Camera,
      title: "Analytics Integration",
      description: "AI-powered video analytics for people counting, behavior analysis, and more."
    }
  ];

  const cctvPartners = [
    { name: "Hikvision", description: "World's leading video surveillance brand", logo: hikvisionLogo },
    { name: "Dahua", description: "Innovative video surveillance solutions", logo: dahuaLogo },
    { name: "Axis", description: "Network video pioneer", logo: axisLogo },
    { name: "Bosch", description: "Professional security technology", logo: boschLogo },
    { name: "Hanwha", description: "Advanced imaging technology" },
    // { name: "Uniview", description: "IP video surveillance solutions" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Video Surveillance & CCTV Systems | Sentinel Technologies"
        description="HD/4K CCTV cameras with night vision, motion detection, remote monitoring and video analytics. Sentinel designs and installs indoor and outdoor surveillance systems across India."
        canonical={`${SITE_URL}/solutions/cctv`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Video Surveillance (CCTV) Systems",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "IN",
            description: "HD/4K CCTV camera systems with night vision, motion detection, remote access and video analytics for commercial, residential, industrial and government facilities.",
          },
        ]}
        breadcrumbs={[
          { name: "Solutions", url: `${SITE_URL}/#solutions` },
          { name: "CCTV", url: `${SITE_URL}/solutions/cctv` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Solutions" }, { name: "CCTV Surveillance" }]} />
      <SolutionHero
        icon={Cctv}
        title="Video Surveillance (CCTV) Systems"
        description="Comprehensive video surveillance solutions with advanced analytics, remote monitoring, and intelligent security features to protect what matters most."
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
              Advanced CCTV Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our video surveillance systems combine cutting-edge technology with reliable performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
              CCTV Solution Types
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={heroSecurityImg}
                alt="Sentinel Technologies CCTV surveillance installation (representative image)"
                className="rounded-lg shadow-security w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">Indoor Solutions</Badge>
                <h3 className="text-2xl font-bold text-security-dark mb-3">Indoor Surveillance</h3>
                <p className="text-muted-foreground mb-4">
                  Discreet indoor cameras for offices, retail spaces, and residential areas with advanced features.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Dome and bullet cameras</li>
                  <li>• PTZ (Pan-Tilt-Zoom) capabilities</li>
                  <li>• Audio recording options</li>
                  <li>• Vandal-resistant designs</li>
                </ul>
              </div>

              <div>
                <Badge variant="secondary" className="mb-2">Outdoor Solutions</Badge>
                <h3 className="text-2xl font-bold text-security-dark mb-3">Outdoor Surveillance</h3>
                <p className="text-muted-foreground mb-4">
                  Weather-resistant outdoor cameras designed for perimeter security and wide-area monitoring.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• IP66/IP67 weather protection</li>
                  <li>• Long-range IR illumination</li>
                  <li>• License plate recognition</li>
                  <li>• Thermal imaging options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <PartnerLogos 
        title="CCTV Technology Partners"
        partners={cctvPartners}
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
            Ready to Secure Your Premises?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free consultation and customized quote for your CCTV surveillance needs.
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

export default CCTVPage;