import { Card } from "@/components/ui/card";

interface PartnerLogosProps {
  title?: string;
  partners?: Array<{ name: string; description?: string }>;
}

const PartnerLogos = ({
  title = "Our Technology Partners",
  partners = [
    { name: "Hikvision", description: "Leading video surveillance technology" },
    { name: "Dahua", description: "Advanced security solutions" },
    { name: "Honeywell", description: "Fire safety and automation" },
    { name: "Bosch", description: "Professional security systems" },
    { name: "Axis", description: "Network video solutions" },
    { name: "Schneider", description: "Building automation systems" },
  ],
}: PartnerLogosProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-security-dark mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground">
            We work with the world's leading technology providers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="p-4 text-center hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <div className="h-8 w-full flex items-center justify-center border border-dashed border-border rounded mb-2 px-1">
                <span className="text-[9px] font-medium text-muted-foreground leading-tight">
                  Logo needed
                </span>
              </div>
              <h4 className="text-sm font-medium text-security-dark">{partner.name}</h4>
              {partner.description && (
                <p className="text-xs text-muted-foreground mt-1">{partner.description}</p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
