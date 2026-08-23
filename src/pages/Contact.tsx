import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  CalendarCheck,
  ArrowRight,
  Award,
  Boxes,
  Handshake,
  BrainCircuit,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 95660 40007", "24/7 Emergency Support"],
    color: "text-primary",
    bg: "bg-primary/10",
    href: "tel:+919566040007",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@sentinel-technologies.net", "support@sentinel-technologies.net"],
    color: "text-security-accent",
    bg: "bg-security-accent/10",
    href: "mailto:info@sentinel-technologies.net",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["No: 51, 2nd Floor, Tower B, Tek Meadows", "OMR, Sholinganallur", "Chennai, Tamil Nadu 600119"],
    color: "text-primary",
    bg: "bg-primary/10",
    href: "https://maps.google.com/?q=Tek+Meadows+OMR+Sholinganallur+Chennai",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "24/7 Emergency Support"],
    color: "text-security-accent",
    bg: "bg-security-accent/10",
  },
];

const process = [
  { icon: MessageSquare, step: "01", title: "You share your needs", desc: "Fill out the form with your requirements, or call us directly." },
  { icon: ShieldCheck, step: "02", title: "We assess your site", desc: "Our specialists review your facility, risks and compliance needs." },
  { icon: CalendarCheck, step: "03", title: "We propose a solution", desc: "You get a tailored proposal within 24 hours - no obligation." },
];

const whyChooseUs = [
  { icon: Award, title: "10+ Years of Experience", desc: "A decade engineering security, ELV and automation solutions across 500+ projects." },
  { icon: Boxes, title: "Vendor-Neutral, Best-Fit Technology", desc: "We recommend the right technology ecosystem for your requirement, not a single brand." },
  { icon: Handshake, title: "End-to-End Lifecycle Partner", desc: "From consultation and design through implementation, commissioning and long-term support." },
  { icon: BrainCircuit, title: "AI-Driven & Future-Ready", desc: "Continuously investing in AI, computer vision and intelligent automation." },
  { icon: Clock, title: "24/7 Emergency Support", desc: "Round-the-clock support so critical issues get a rapid response." },
  { icon: ShieldCheck, title: "ISO Certified Quality", desc: "Engineering and delivery held to certified quality standards." },
];

const trustStats = [
  { value: "24/7", label: "Emergency Support", color: "text-primary" },
  { value: "ISO", label: "Certified Quality", color: "text-security-accent" },
  { value: "10+", label: "Years Experience", color: "text-primary" },
  { value: "500+", label: "Projects Completed", color: "text-security-accent" },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us | Sentinel Technologies"
        description="Get in touch with Sentinel Technologies' security and automation experts. Contact us for custom CCTV, access control, fire safety, and building automation solutions."
        canonical={`${SITE_URL}/contact`}
        breadcrumbs={[{ name: "Contact", url: `${SITE_URL}/contact` }]}
      />
      <Breadcrumbs items={[{ name: "Contact" }]} />

      {/* Hero */}
      <section className="bg-gradient-hero py-20 lg:py-28 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5"
          >
            Contact Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
          >
            Ready to Secure Your Future?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/80 leading-relaxed mb-10"
          >
            Get in touch with our security experts to discuss your specific requirements and
            discover how Sentinel Technologies can protect what matters most to you.
          </motion.p>

          {/* Quick connect */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <a href="tel:+919566040007">
                <Phone className="w-4 h-4 mr-2" />
                Call +91 95660 40007
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-security-dark"
            >
              <a href="mailto:info@sentinel-technologies.net">
                <Mail className="w-4 h-4 mr-2" />
                info@sentinel-technologies.net
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Sentinel Technologies */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Why Choose Us</p>
            <h2 className="text-3xl font-bold text-security-dark text-balance">Why Choose Sentinel Technologies</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-2xl bg-white border border-border hover:border-primary/40 hover:shadow-card-custom transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-security-dark mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background text-security-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-3 text-security-dark">Get In Touch</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have questions about our solutions or need support? Our team is here to help you
                design, implement, and maintain your security infrastructure.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, i) => {
                  const IconComponent = info.icon;
                  const CardWrapper = info.href ? "a" : "div";
                  const wrapperProps = info.href
                    ? { href: info.href, target: "_blank", rel: "noopener noreferrer" }
                    : {};

                  return (
                    <motion.div key={info.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                      <Card className="border-border hover:border-primary/40 hover:shadow-card-custom transition-all duration-300">
                        <CardContent className="p-5">
                          <CardWrapper {...wrapperProps} className={info.href ? "flex items-start gap-4 group cursor-pointer" : "flex items-start gap-4"}>
                            <div className={`p-3 rounded-xl ${info.bg} group-hover:scale-105 transition-transform flex-shrink-0`}>
                              <IconComponent className={`w-5 h-5 ${info.color}`} />
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-semibold text-security-dark mb-1">{info.title}</h4>
                              {info.details.map((detail) => (
                                <p key={detail} className="text-sm text-muted-foreground group-hover:text-security-dark transition-colors">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </CardWrapper>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-3 relative rounded-2xl border border-border shadow-card-custom overflow-hidden"
            >
              <div className="h-1.5 w-full bg-gradient-primary" />
              <div className="bg-security-light p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <CalendarCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-security-dark">Schedule a Consultation</h2>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our security specialists are ready to assess your needs and provide tailored
                  solutions. Share a few details below and we'll get back to you.
                </p>

                <ContactForm />
              </div>
            </motion.div>
          </div>

          {/* What happens next */}
          <div className="mt-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-xl mx-auto mb-12">
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">What Happens Next</p>
              <h2 className="text-3xl font-bold text-security-dark">From enquiry to installation</h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {process.map(({ icon: Icon, step, title, desc }, i) => (
                <motion.div
                  key={step}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative p-6 rounded-2xl border border-border bg-security-light text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">{step}</p>
                  <h3 className="font-semibold text-security-dark mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  {i < process.length - 1 && (
                    <ArrowRight className="hidden sm:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 text-primary/40" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-20 pt-16 border-t border-border"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-3xl mx-auto">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
