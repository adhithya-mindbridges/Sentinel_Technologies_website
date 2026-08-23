import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerLogos from "@/components/PartnerLogos";
import { Network, Server, Cable, Shield, Database, Router } from "lucide-react";
import { Link } from "react-router-dom";

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
    { name: "Cisco", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=Cisco", description: "Network infrastructure solutions" },
    { name: "HPE", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=HPE", description: "Enterprise server solutions" },
    { name: "Dell", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=Dell", description: "IT infrastructure hardware" },
    { name: "Juniper", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=Juniper", description: "Network security solutions" },
    { name: "Panduit", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=Panduit", description: "Network cabling solutions" },
    { name: "Ubiquiti", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=Ubiquiti", description: "Enterprise wireless systems" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                <Network className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IT Infrastructure Solutions
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Structured cabling, network infrastructure, and IT solutions that form the 
              backbone of modern security systems and business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Get Network Assessment</Link>
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
              IT Infrastructure Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete IT infrastructure solutions for modern business requirements
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
              IT Infrastructure Types
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop" 
                alt="Data center server room"
                className="rounded-lg shadow-security w-full h-80 object-cover"
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
        </div>
      </section>
    </div>
  );
};

export default ITInfrastructurePage;