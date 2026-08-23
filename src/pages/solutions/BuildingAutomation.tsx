import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerLogos from "@/components/PartnerLogos";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Building, Thermometer, Lightbulb, Gauge, Smartphone, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const BuildingAutomationPage = () => {
  const features = [
    {
      icon: Thermometer,
      title: "HVAC Control",
      description: "Intelligent heating, ventilation, and air conditioning management for optimal comfort."
    },
    {
      icon: Lightbulb,
      title: "Lighting Automation",
      description: "Smart lighting systems with occupancy sensing and daylight harvesting."
    },
    {
      icon: Gauge,
      title: "Energy Management",
      description: "Real-time energy monitoring and optimization to reduce operational costs."
    },
    {
      icon: Smartphone,
      title: "Remote Monitoring",
      description: "Mobile and web-based control interfaces for system management anywhere."
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless integration with security, fire safety, and IT infrastructure."
    },
    {
      icon: Building,
      title: "Facility Analytics",
      description: "Data analytics and reporting for informed facility management decisions."
    }
  ];

  const baPartners = [
    { name: "Schneider Electric", description: "Building automation solutions" },
    { name: "Johnson Controls", description: "Smart building technology" },
    { name: "Siemens", description: "Building management systems" },
    { name: "Honeywell", description: "Building automation platforms" },
    { name: "Trane", description: "HVAC control systems" },
    { name: "ABB", description: "Electrical automation" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Building Automation & BMS Systems | Sentinel Technologies"
        description="HVAC control, lighting automation and energy management. Sentinel designs building management systems that improve efficiency, comfort and operational performance."
        canonical={`${SITE_URL}/solutions/building-automation`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Building Automation Systems",
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: "IN",
            description: "HVAC control, lighting automation, energy management and remote monitoring for intelligent building operations.",
          },
        ]}
        breadcrumbs={[
          { name: "Solutions", url: `${SITE_URL}/#solutions` },
          { name: "Building Automation", url: `${SITE_URL}/solutions/building-automation` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Solutions" }, { name: "Building Automation" }]} />
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                <Building className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Automation Systems
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Intelligent building management systems that optimize energy efficiency, 
              comfort, and operational performance through advanced automation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Get Energy Assessment</Link>
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
              Smart Building Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive automation solutions for modern intelligent buildings
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
              Building Automation Solutions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImagePlaceholder
                label="Photo of a Sentinel building-automation/BMS control interface"
                className="rounded-lg shadow-security w-full h-80"
              />
            </div>
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-2">Commercial Buildings</Badge>
                <h3 className="text-2xl font-bold text-security-dark mb-3">Enterprise Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive building management for large commercial facilities and campuses.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Central building management system</li>
                  <li>• Energy optimization algorithms</li>
                  <li>• Predictive maintenance</li>
                  <li>• Tenant billing and reporting</li>
                </ul>
              </div>

              <div>
                <Badge variant="secondary" className="mb-2">Smart Buildings</Badge>
                <h3 className="text-2xl font-bold text-security-dark mb-3">IoT Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Next-generation smart buildings with IoT sensors and AI-driven automation.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• IoT sensor networks</li>
                  <li>• Machine learning optimization</li>
                  <li>• Cloud-based management</li>
                  <li>• Mobile app control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <PartnerLogos 
        title="Building Automation Partners"
        partners={baPartners}
      />

      {/* CTA Section */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Optimize Your Building Performance
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get expert consultation for building automation and energy management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">Schedule Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-security-dark">
              <Link to="/solutions/it-infrastructure">View IT Infrastructure</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingAutomationPage;