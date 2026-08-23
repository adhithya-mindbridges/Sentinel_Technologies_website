import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerLogos from "@/components/PartnerLogos";
import honeywellLogo from "@/assets/partners/logos/honeywell.png";
import boschLogo from "@/assets/partners/logos/bosch.png";
import hidGlobalLogo from "@/assets/partners/logos/hid Global.png";
import supremaLogo from "@/assets/partners/logos/suprema.png";


import ImagePlaceholder from "@/components/ImagePlaceholder";
import controlRoomImg from "@/assets/control-room.jpg";

import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Lock, Fingerprint, Smartphone, Users, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, iconSpring, staggerContainer, staggerItem, revealOnce, revealOnceTight } from "@/lib/motion";

const AccessControlPage = () => {
  const features = [
    {
      icon: Fingerprint,
      title: "Biometric Access",
      description: "Advanced fingerprint, facial recognition, and iris scanning for maximum security."
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      description: "Smartphone-based access control with Bluetooth and NFC technology."
    },
    {
      icon: Users,
      title: "User Management",
      description: "Comprehensive user database with role-based access permissions."
    },
    {
      icon: Clock,
      title: "Time & Attendance",
      description: "Integrated time tracking and attendance management system."
    },
    {
      icon: Shield,
      title: "Security Zones",
      description: "Multi-level security zones with customizable access restrictions."
    },
    {
      icon: Lock,
      title: "Card Readers",
      description: "RFID and proximity card readers with encrypted communication."
    }
  ];

  const accessPartners = [
    { name: "HID Global", description: "Secure identity solutions", logo: hidGlobalLogo },
    { name: "ZKTeco", description: "Biometric access control" },
    { name: "Honeywell", description: "Access control systems", logo: honeywellLogo },
    { name: "Bosch", description: "Professional security", logo: boschLogo },
    { name: "Suprema", description: "Biometric technology", logo: supremaLogo },
    { name: "Salto", description: "Smart access solutions" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Access Control Systems | Sentinel Technologies"
        description="Biometric, card-reader and mobile access control with audit trails and role-based permissions. Sentinel designs identity management systems for offices, campuses and facilities."
        canonical={`${SITE_URL}/solutions/access-control`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Access Control Systems",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "IN",
            description: "Biometric access, card readers, mobile credentials and audit-trail access control for employees, visitors, contractors and vehicles.",
          },
        ]}
        breadcrumbs={[
          { name: "Solutions", url: `${SITE_URL}/#solutions` },
          { name: "Access Control", url: `${SITE_URL}/solutions/access-control` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Solutions" }, { name: "Access Control" }]} />
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
                <Lock className="w-12 h-12" />
              </div>
            </motion.div>
            <motion.h1 variants={staggerItem} className="text-4xl md:text-5xl font-bold mb-6">
              Access Control Systems
            </motion.h1>
            <motion.p variants={staggerItem} className="text-xl mb-8 opacity-90 leading-relaxed">
              Sophisticated entry management solutions with biometric authentication, 
              mobile integration, and comprehensive user management capabilities.
            </motion.p>
            <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
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
              Advanced Access Control Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive access management with cutting-edge security technology
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
              Access Control Solutions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={controlRoomImg}
                alt="Sentinel Technologies access control system installation (representative image)"
                className="rounded-lg shadow-security w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">Enterprise Solutions</Badge>
                <h3 className="text-2xl font-bold text-security-dark mb-3">Enterprise Access Control</h3>
                <p className="text-muted-foreground mb-4">
                  Large-scale access control systems for corporate buildings and campuses.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Multi-site management</li>
                  <li>• Integration with HR systems</li>
                  <li>• Visitor management</li>
                  <li>• Compliance reporting</li>
                </ul>
              </div>

              <div>
                <Badge variant="secondary" className="mb-2">Small Business</Badge>
                <h3 className="text-2xl font-bold text-security-dark mb-3">Small Business Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Cost-effective access control for small to medium businesses.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Simple installation and setup</li>
                  <li>• Cloud-based management</li>
                  <li>• Mobile app control</li>
                  <li>• Affordable pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <PartnerLogos 
        title="Access Control Technology Partners"
        partners={accessPartners}
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
            Secure Your Access Points Today
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get expert consultation for your access control requirements and implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-security-dark">
              <Link to="/solutions/fire-alarm">View Fire Alarm Systems</Link>
            </Button>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AccessControlPage;