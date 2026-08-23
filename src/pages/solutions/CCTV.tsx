import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PartnerLogos from "@/components/PartnerLogos";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Camera, Eye, Shield, Smartphone, Monitor, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

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
    { name: "Hikvision", description: "World's leading video surveillance brand" },
    { name: "Dahua", description: "Innovative video surveillance solutions" },
    { name: "Axis", description: "Network video pioneer" },
    { name: "Bosch", description: "Professional security technology" },
    { name: "Hanwha", description: "Advanced imaging technology" },
    { name: "Uniview", description: "IP video surveillance solutions" },
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
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                <Camera className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Video Surveillance (CCTV) Systems
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Comprehensive video surveillance solutions with advanced analytics, remote monitoring, 
              and intelligent security features to protect what matters most.
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
              Advanced CCTV Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our video surveillance systems combine cutting-edge technology with reliable performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
              CCTV Solution Types
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImagePlaceholder
                label="Photo of a Sentinel-installed CCTV/surveillance setup"
                className="rounded-lg shadow-security w-full h-80"
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
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-security-dark">
              <Link to="/solutions/access-control">View Access Control</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CCTVPage;