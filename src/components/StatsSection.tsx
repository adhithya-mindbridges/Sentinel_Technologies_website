import { Users, Building, Handshake, Wrench, MapPin, Award, GraduationCap } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { icon: Users, value: "70+", label: "Clients", color: "text-primary" },
    { icon: Building, value: "3,500+", label: "Engagements", color: "text-security-accent" },
    { icon: Handshake, value: "60+", label: "Partners", color: "text-primary" },
    { icon: Wrench, value: "20+", label: "Solutions", color: "text-security-accent" },
    { icon: Users, value: "65+", label: "Associates", color: "text-primary" },
    { icon: GraduationCap, value: "100%", label: "Trained Team", color: "text-security-accent" },
    { icon: MapPin, value: "50+", label: "Delivery Locations", color: "text-primary" }
  ];

  return (
    <section className="py-20 bg-security-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-security-dark mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. See why businesses across industries trust Sentinel Technology.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-white shadow-card-custom group-hover:shadow-security transition-all duration-300">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-security-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;