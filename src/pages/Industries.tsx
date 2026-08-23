import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { industries } from "@/data/industries";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const IndustriesPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Industries We Serve | Sentinel Technologies"
        description="Sentinel Technologies delivers integrated Security, ELV, AI, Video Management, Access Control, Automation, IoT and Digital Infrastructure solutions across automotive, manufacturing, ports, aviation, defence, data centres and more."
        canonical={`${SITE_URL}/industries`}
        breadcrumbs={[{ name: "Industries", url: `${SITE_URL}/industries` }]}
      />
      <Breadcrumbs items={[{ name: "Industries" }]} />
      <section className="bg-gradient-hero py-20 lg:py-28 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5"
          >
            Industries We Serve
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
          >
            Intelligent Technology for Mission-Critical Industries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/80 leading-relaxed"
          >
            Sentinel Technologies delivers integrated Security, ELV, Artificial Intelligence, Video
            Management, Access Control, Automation, IoT and Digital Infrastructure solutions across
            diverse industries - combining engineering expertise with intelligent technology to
            address each sector's unique challenges.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="group flex flex-col h-full rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-security transition-all duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.imageAlt}
                        loading="lazy"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 p-2 rounded-lg bg-white/90">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-security-dark">{industry.name}</h3>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <p className="text-sm text-muted-foreground flex-1">{industry.description}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-security-dark text-white">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Don't see your industry?</h2>
          <p className="text-white/70 mb-8">
            Our solutions are modular and scalable — talk to our team and we'll design a system
            tailored to your facility.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-primary hover:bg-primary-dark transition-colors"
          >
            Contact Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
