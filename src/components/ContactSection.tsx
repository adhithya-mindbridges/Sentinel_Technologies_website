import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 95660 40007", "24/7 Emergency Support"],
    color: "text-primary",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@sentinel-technologies.net", "support@sentinel-technologies.net"],
    color: "text-security-accent",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["No: 51, 2nd Floor, Tower B, Tek Meadows", "OMR, Sholinganallur", "Chennai, Tamil Nadu 600119"],
    color: "text-primary",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "24/7 Emergency Support"],
    color: "text-security-accent",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-security-dark text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_40%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-tight">
            Ready to Secure Your Future?
          </h2>
          <p className="text-lg opacity-85 leading-relaxed mb-8">
            Get in touch with our security experts to discuss your specific requirements, request a
            tailored proposal, and discover how Sentinel Technologies can protect what matters most.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white hover:text-security-dark"
          >
            <a href="tel:+919566040007">
              <Phone className="w-4 h-4 mr-2" />
              Call +91 95660 40007
            </a>
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={info.title}
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <IconComponent className={`w-5 h-5 ${info.color}`} />
                        </div>
                        <h4 className="font-semibold text-white">{info.title}</h4>
                      </div>
                      <div className="space-y-1">
                        {info.details.map((detail) => (
                          <p key={detail} className="text-sm text-white/80">
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

          {/* Form */}
          <div id="consultation-form">
            <h3 className="text-2xl font-bold mb-6">Schedule a Consultation</h3>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Our security specialists are ready to assess your needs and provide tailored
              solutions. Share a few details below and we'll get back to you.
            </p>
            <ContactForm variant="dark" />
          </div>
        </div>

        {/* Small trust banner */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center opacity-75 max-w-3xl mx-auto">
          <div>
            <div className="text-lg font-bold text-primary">24/7</div>
            <div className="text-xs uppercase tracking-wider opacity-80 mt-1">Emergency Support</div>
          </div>
          <div>
            <div className="text-lg font-bold text-security-accent">ISO</div>
            <div className="text-xs uppercase tracking-wider opacity-80 mt-1">Certified Quality</div>
          </div>
          <div>
            <div className="text-lg font-bold text-primary">10+</div>
            <div className="text-xs uppercase tracking-wider opacity-80 mt-1">Years Experience</div>
          </div>
          <div>
            <div className="text-lg font-bold text-security-accent">500+</div>
            <div className="text-xs uppercase tracking-wider opacity-80 mt-1">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
