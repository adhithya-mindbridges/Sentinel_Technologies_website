import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerLogos from "@/components/PartnerLogos";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Flame, AlertTriangle, Bell, Shield, Radio, Eye } from "lucide-react";
import { Link } from "react-router-dom";

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
    { name: "Honeywell", description: "Fire safety solutions" },
    { name: "Bosch", description: "Fire detection systems" },
    { name: "Siemens", description: "Building safety technology" },
    { name: "Johnson Controls", description: "Fire protection systems" },
    { name: "Notifier", description: "Fire alarm control panels" },
    { name: "Edwards", description: "Fire safety devices" },
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
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                <Flame className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fire Alarm Systems
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Comprehensive fire detection and notification systems designed to protect lives 
              and property with early warning capabilities and reliable performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Get Free Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark mb-4">
              Fire Safety Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced fire detection technology for comprehensive safety coverage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="h-full hover:shadow-security transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-security-dark">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
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
              <ImagePlaceholder
                label="Photo of a Sentinel-installed fire alarm control panel or detector"
                className="rounded-lg shadow-security w-full h-80"
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
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-security-dark">
              <Link to="/solutions/public-address">View PA Systems</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FireAlarmPage;