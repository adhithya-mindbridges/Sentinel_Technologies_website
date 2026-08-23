import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import controlRoomImage from "@/assets/control-room.jpg";
import { industries } from "@/data/industries";

const featuredIndustries = industries.slice(0, 4);

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-security-dark mb-6">
              Engineering Security. Empowering Intelligence.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2012, Sentinel Technologies has evolved from a security and ELV systems
              integrator into a technology-driven organization delivering intelligent security,
              AI-powered surveillance, automation and digital infrastructure solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From initial consultation and design through implementation, integration, commissioning
              and long-term support - we bring engineering expertise, system integration and AI together
              to deliver complete, scalable solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">2012</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>

            <Button asChild size="lg">
              <Link to="/about">
                Read Our Full Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <img
              src={controlRoomImage}
              alt="Modern security control center with multiple monitoring screens"
              className="rounded-lg shadow-card-custom w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-security-dark/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Industries Served */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-security-dark mb-4">Industries We Serve</h3>
            <p className="text-lg text-muted-foreground">Intelligent technology for mission-critical industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {featuredIndustries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <Link key={industry.slug} to={`/industries/${industry.slug}`}>
                  <Card className="overflow-hidden hover:shadow-card-custom transition-all duration-300 hover:scale-105 h-full">
                    <div className="relative h-32">
                      <img
                        src={industry.image}
                        alt={industry.imageAlt}
                        loading="lazy"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 p-2 rounded-lg bg-white/90">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-security-dark">
                          {industry.name}
                        </h4>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {industry.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/industries">
                View All 15 Industries
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
