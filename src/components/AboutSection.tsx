import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Eye, Users, Award, Clock, Building2, Home, Factory, Landmark } from "lucide-react";
import controlRoomImage from "@/assets/control-room.jpg";
import teamWorkImage from "@/assets/team-work.jpg";

const AboutSection = () => {
  const industries = [
    { 
      icon: Building2, 
      name: "Commercial", 
      description: "Office buildings, retail spaces, and corporate facilities",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center"
    },
    { 
      icon: Home, 
      name: "Residential", 
      description: "Apartments, condominiums, and housing complexes",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop&crop=center"
    },
    { 
      icon: Factory, 
      name: "Industrial", 
      description: "Manufacturing plants, warehouses, and industrial facilities",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=300&h=200&fit=crop&crop=center"
    },
    { 
      icon: Landmark, 
      name: "Government", 
      description: "Public buildings, institutions, and government facilities",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop&crop=center"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Uncompromising commitment to security and safety standards"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering superior quality in every project we undertake"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building lasting relationships through exceptional service"
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "24/7 support and maintenance for peace of mind"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-security-dark mb-6">
              Leading ELV & Security Solutions Provider
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience, Sentinel Technologies has established itself as a trusted partner 
              in delivering comprehensive Extra Low Voltage (ELV) and security solutions across diverse industries.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our expertise spans from simple standalone systems to complex integrated solutions, 
              ensuring scalable and cost-effective security infrastructure for businesses of all sizes.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
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

        {/* Team & Expertise */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1 relative">
            <img 
              src={teamWorkImage} 
              alt="Professional security technicians installing systems"
              className="rounded-lg shadow-card-custom w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-security-dark/20 to-transparent rounded-lg"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-security-dark mb-6">
              Expert Team & Professional Installation
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our certified technicians and security experts ensure seamless installation and integration 
              of all security systems with minimal disruption to your operations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Certified security professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Professional project management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Ongoing support and maintenance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-security-light rounded-2xl p-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-security-dark mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enhancing safety and efficiency with innovative technology solutions that protect what matters most. 
                  We strive to deliver excellence in every project while building lasting partnerships with our clients.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-security-dark mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the trusted global partner in intelligent security and automation solutions, 
                  setting industry standards for innovation, quality, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-security-dark mb-4">Our Core Values</h3>
            <p className="text-lg text-muted-foreground">Principles that guide every aspect of our business</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-card-custom transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-security-dark mb-3">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Industries Served */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-security-dark mb-4">Industries We Serve</h3>
            <p className="text-lg text-muted-foreground">Delivering tailored security solutions across diverse sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-card-custom transition-all duration-300 hover:scale-105">
                  <div className="relative h-32">
                    <img 
                      src={industry.image} 
                      alt={`${industry.name} sector`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-security-dark/40 to-transparent"></div>
                    <div className="absolute top-4 left-4 p-2 rounded-lg bg-white/90">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-security-dark mb-2">
                      {industry.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;