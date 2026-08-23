import { Card } from "@/components/ui/card";

interface Partner {
  name: string;
  description?: string;
  logo?: string;
}

interface PartnerLogosProps {
  title?: string;
  partners?: Partner[];
}

const PartnerLogos = ({
  title = "Our Technology Partners",
  partners = [],
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
              className="p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300 hover:scale-105 min-h-[100px]"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 max-w-[120px] w-auto h-auto object-contain mb-2"
                />
              ) : (
                <span className="text-sm font-semibold text-security-dark mb-2 leading-tight">
                  {partner.name}
                </span>
              )}
              {partner.description && (
                <p className="text-xs text-muted-foreground leading-tight">
                  {partner.description}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;

