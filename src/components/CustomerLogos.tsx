import { Card } from "@/components/ui/card";

const CustomerLogos = () => {
  const customers = [
    { name: "Infosys" },
    { name: "TCS" },
    { name: "Wipro" },
    { name: "HCL" },
    { name: "Tech Mahindra" },
    { name: "Cognizant" },
    { name: "Accenture" },
    { name: "IBM" },
    { name: "Microsoft" },
    { name: "Amazon" },
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
                <div className="h-12 w-32 flex items-center justify-center border border-dashed border-border rounded text-center px-2">
                  <span className="text-[10px] font-medium text-muted-foreground leading-tight">
                    Logo needed: {customer.name}
                  </span>
                </div>
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
