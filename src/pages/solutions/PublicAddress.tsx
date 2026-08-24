import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerLogos from "@/components/PartnerLogos";
import boschLogo from "@/assets/partners/logos/bosch.png";
import honeywellLogo from "@/assets/partners/logos/honeywell.png";
import yamahaLogo from "@/assets/partners/logos/yamaha.png";
import mAudioLogo from "@/assets/partners/logos/m-audio.png";
import paSystemApplications from "@/assets/pa system applications.png";

import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import SolutionHero from "@/components/solutions/SolutionHero";
import { Volume2, Mic, Radio, Speaker, Settings, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, iconSpring, revealOnce, revealOnceTight } from "@/lib/motion";

const PublicAddressPage = () => {
  const features = [
    {
      icon: Speaker,
      title: "Zone Control",
      description: "Multi-zone audio distribution with independent volume and content control."
    },
    {
      icon: Mic,
      title: "Emergency Override",
      description: "Priority announcement capability for emergency situations and safety alerts."
    },
    {
      icon: Volume2,
      title: "Background Music",
      description: "Ambient music systems for retail, hospitality, and office environments."
    },
    {
      icon: Radio,
      title: "Clear Audio",
      description: "High-fidelity sound systems with noise cancellation and echo reduction."
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Integration with fire alarms, access control, and building management systems."
    },
    {
      icon: Shield,
      title: "Reliable Performance",
      description: "Professional-grade equipment designed for 24/7 operation and reliability."
    }
  ];

  const paPartners = [
    { name: "Bosch", description: "Professional audio systems", logo: boschLogo },
    { name: "TOA", description: "Public address solutions" },
    { name: "Bose", description: "Commercial audio systems" },
    { name: "JBL", description: "Professional loudspeakers" },
    { name: "Honeywell", description: "Voice evacuation systems", logo: honeywellLogo },
    { name: "Yamaha", description: "Commercial audio equipment", logo: yamahaLogo },
    { name: "M-Audio", description: "Professional audio interface & speakers", logo: mAudioLogo },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Public Address & Voice Alarm Systems | Sentinel Technologies"
        description="Zone-controlled public address systems for emergency announcements, evacuation and facility-wide communication across factories, campuses and commercial buildings."
        canonical={`${SITE_URL}/solutions/public-address`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Public Address & Voice Alarm Systems",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "IN",
            description: "Zone-controlled public address and voice alarm systems for emergency announcements and facility-wide communication.",
          },
        ]}
        breadcrumbs={[
          { name: "Solutions", url: `${SITE_URL}/#solutions` },
          { name: "Public Address", url: `${SITE_URL}/solutions/public-address` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Solutions" }, { name: "Public Address Systems" }]} />
      <SolutionHero
        icon={Volume2}
        title="Public Address Systems"
        description="Clear communication solutions for emergency announcements, background music, and general facility-wide communications with professional audio quality."
        primaryLabel="Get Audio Consultation"
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
              PA System Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional audio solutions for effective communication and ambiance
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
              PA System Applications
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={paSystemApplications}
                alt="Sentinel Technologies public address / voice alarm system installation (representative image)"
                className="rounded-lg shadow-security w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">Commercial Applications</Badge>
                <h3 className="text-2xl font-bold text-security-dark mb-3">Business Communications</h3>
                <p className="text-muted-foreground mb-4">
                  Professional PA systems for offices, retail spaces, and commercial facilities.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• General announcements</li>
                  <li>• Background music systems</li>
                  <li>• Paging and intercom</li>
                  <li>• Conference room audio</li>
                </ul>
              </div>

              <div>
                <Badge variant="secondary" className="mb-2">Emergency Systems</Badge>
                <h3 className="text-2xl font-bold text-security-dark mb-3">Voice Evacuation</h3>
                <p className="text-muted-foreground mb-4">
                  Life safety PA systems for emergency evacuation and mass notification.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Emergency announcements</li>
                  <li>• Evacuation instructions</li>
                  <li>• Fire alarm integration</li>
                  <li>• Automatic voice messages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <PartnerLogos 
        title="Audio Technology Partners"
        partners={paPartners}
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
            Enhance Your Communication
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get professional audio consultation for your public address system requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white text-security-dark">
              <Link to="/solutions/building-automation">View Building Automation</Link>
            </Button>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PublicAddressPage;