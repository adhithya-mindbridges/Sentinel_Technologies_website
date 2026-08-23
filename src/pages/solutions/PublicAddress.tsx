import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerLogos from "@/components/PartnerLogos";
import { Volume2, Mic, Radio, Speaker, Settings, Shield } from "lucide-react";
import { Link } from "react-router-dom";

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
    { name: "Bosch", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=Bosch", description: "Professional audio systems" },
    { name: "TOA", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=TOA", description: "Public address solutions" },
    { name: "Bose", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=Bose", description: "Commercial audio systems" },
    { name: "JBL", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=JBL", description: "Professional loudspeakers" },
    { name: "Honeywell", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=Honeywell", description: "Voice evacuation systems" },
    { name: "Yamaha", logo: "https://via.placeholder.com/120x60/f8f9fa/6c757d?text=Yamaha", description: "Commercial audio equipment" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                <Volume2 className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Public Address Systems
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Clear communication solutions for emergency announcements, background music, 
              and general facility-wide communications with professional audio quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Get Audio Consultation</Link>
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
              PA System Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional audio solutions for effective communication and ambiance
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
              PA System Applications
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop" 
                alt="Professional audio mixing console"
                className="rounded-lg shadow-security w-full h-80 object-cover"
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
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-security-dark">
              <Link to="/solutions/building-automation">View Building Automation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicAddressPage;