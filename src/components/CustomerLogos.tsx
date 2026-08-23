import { Card } from "@/components/ui/card";

const CustomerLogos = () => {
  const customers = [
    { name: "Infosys", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop&crop=center" },
    { name: "TCS", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=80&fit=crop&crop=center" },
    { name: "Wipro", logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=150&h=80&fit=crop&crop=center" },
    { name: "HCL", logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&h=80&fit=crop&crop=center" },
    { name: "Tech Mahindra", logo: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=150&h=80&fit=crop&crop=center" },
    { name: "Cognizant", logo: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=150&h=80&fit=crop&crop=center" },
    { name: "Accenture", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=150&h=80&fit=crop&crop=center" },
    { name: "IBM", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=80&fit=crop&crop=center" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=150&h=80&fit=crop&crop=center" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=150&h=80&fit=crop&crop=center" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-security-dark mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to serve some of the most respected companies across various industries
          </p>
        </div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...customers, ...customers].map((customer, index) => (
              <Card 
                key={`${customer.name}-${index}`}
                className="flex-shrink-0 mx-4 p-6 bg-white hover:shadow-md transition-shadow duration-300"
              >
                <img 
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </Card>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default CustomerLogos;