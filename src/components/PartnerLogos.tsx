import { Card } from "@/components/ui/card";

interface PartnerLogosProps {
  title?: string;
  partners?: Array<{ name: string; logo: string; description?: string }>;
}

const PartnerLogos = ({ 
  title = "Our Technology Partners",
  partners = [
    { name: "Hikvision", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=60&fit=crop&crop=center", description: "Leading video surveillance technology" },
    { name: "Dahua", logo: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=120&h=60&fit=crop&crop=center", description: "Advanced security solutions" },
    { name: "Honeywell", logo: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=120&h=60&fit=crop&crop=center", description: "Fire safety and automation" },
    { name: "Bosch", logo: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=120&h=60&fit=crop&crop=center", description: "Professional security systems" },
    { name: "Axis", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=60&fit=crop&crop=center", description: "Network video solutions" },
    { name: "Schneider", logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=120&h=60&fit=crop&crop=center", description: "Building automation systems" },
  ]
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
              <img 
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-8 w-auto object-contain mx-auto mb-2 grayscale hover:grayscale-0 transition-all duration-300"
              />
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