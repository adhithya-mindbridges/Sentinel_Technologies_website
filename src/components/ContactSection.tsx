import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 95660 40007", "24/7 Emergency Support"],
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@sentinel-technologies.net", "support@sentinel-technologies.net"],
      color: "text-security-accent"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["No: 173, Block B, Floor 8, TECCI Park", "Rajiv Gandhi Salai (OMR) Sholinganalur", "Chennai - 600 117, Tamil Nadu, India"],
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "24/7 Emergency Support"],
      color: "text-security-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-security-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Get in touch with our security experts to discuss your specific requirements and discover how Sentinel Technology can protect what matters most to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <IconComponent className={`w-5 h-5 ${info.color}`} />
                        </div>
                        <h4 className="font-semibold text-white">{info.title}</h4>
                      </div>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-white/80">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-6">
              Schedule a Consultation
            </h3>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Our security specialists are ready to assess your needs and provide tailored solutions. Contact us today for a free consultation and security assessment.
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg rounded-lg shadow-security transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Schedule Free Consultation
              </Button>
              
              <div className="text-sm opacity-75">
                Response within 24 hours • Free security assessment • No obligation
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm opacity-80">Emergency Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-security-accent mb-2">ISO</div>
              <div className="text-sm opacity-80">Certified Quality</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;