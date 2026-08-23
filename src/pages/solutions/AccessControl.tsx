import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerLogos from "@/components/PartnerLogos";
import { Lock, Fingerprint, Smartphone, Users, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

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
    { name: "HID Global", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=HID+Global", description: "Secure identity solutions" },
    { name: "ZKTeco", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=ZKTeco", description: "Biometric access control" },
    { name: "Honeywell", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=Honeywell", description: "Access control systems" },
    { name: "Bosch", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=Bosch", description: "Professional security" },
    { name: "Suprema", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=Suprema", description: "Biometric technology" },
    { name: "Salto", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=Salto", description: "Smart access solutions" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                <Lock className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Access Control Systems
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Sophisticated entry management solutions with biometric authentication, 
              mobile integration, and comprehensive user management capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Get Free Consultation</Link>
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
              Advanced Access Control Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive access management with cutting-edge security technology
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
              Access Control Solutions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop" 
                alt="Modern access control system"
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
        </div>
      </section>
    </div>
  );
};

export default AccessControlPage;