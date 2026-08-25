import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { caseStudies, enterpriseScaleStats, technologyStrip } from "@/data/caseStudies";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Case Studies | Sentinel Technologies"
        description="Sentinel Technologies' project deployments across automotive, electronics, defence and port infrastructure - large-scale CCTV, access control, gate automation and network infrastructure delivered at enterprise scale."
        canonical={`${SITE_URL}/case-studies`}
        breadcrumbs={[{ name: "Case Studies", url: `${SITE_URL}/case-studies` }]}
      />
      <Breadcrumbs items={[{ name: "Case Studies" }]} />

      {/* Hero */}
      <section className="bg-gradient-hero py-20 lg:py-28 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[13px] font-bold uppercase tracking-[0.2em] text-primary mb-5"
          >
            Our Success Stories
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
          >
            Engineering Complex Infrastructure. Delivering at Scale.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/80 leading-relaxed"
          >
            Sentinel Technologies has successfully delivered large-scale Security, ELV, AI, Gate
            Automation, Access Control and Digital Infrastructure solutions across automotive,
            manufacturing, electronics, defence and critical infrastructure environments. Our
            capabilities extend from engineering and infrastructure deployment to system
            integration, command-and-control environments and intelligent automation.
          </motion.p>
        </div>
      </section>

      {/* Case study grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div key={cs.slug} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-security transition-all duration-300 bg-white"
                >
                  <div className="relative h-36">
                    <img
                      src={cs.image}
                      alt={cs.imageAlt}
                      loading="lazy"
                      width={800}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 p-2 rounded-lg bg-white/90">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <span className="text-[13px] font-semibold uppercase tracking-wide text-primary mb-2">
                      {cs.industry}
                    </span>
                    <h3 className="text-lg font-bold text-security-dark mb-1 group-hover:text-primary transition-colors">
                      {cs.client}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{cs.title}</p>
                    {cs.scale && (
                      <p className="text-sm font-semibold text-security-dark mb-3">{cs.scale}</p>
                    )}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cs.solutionTags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-auto">
                      Read Case Study <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven at Enterprise Scale */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Proven at Enterprise Scale</p>
            <h2 className="text-3xl font-bold text-balance">
              Our project experience demonstrates our ability to execute complex technology
              deployments across some of the most demanding operating environments
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-14 max-w-3xl mx-auto">
            {enterpriseScaleStats.map(({ value, label }, i) => (
              <motion.div key={label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 tabular-nums">{value}</div>
                <div className="text-sm text-white/70 leading-snug">{label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              From automotive manufacturing and electronics facilities to defence establishments
              and critical port infrastructure, Sentinel combines engineering expertise, technology
              integration and execution capability to deliver mission-critical projects at scale.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-2"
          >
            {technologyStrip.map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/15">
                {tech}
              </span>
            ))}
          </motion.div>
          <p className="text-center text-sm text-white/50 mt-6 font-semibold uppercase tracking-wide">
            One Partner. Multiple Technologies. Complete Integration.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-security-dark mb-3">
            Want to be our next success story?
          </h2>
          <p className="text-muted-foreground mb-8">
            Talk to our team about deploying Sentinel's security and infrastructure solutions at
            your facility.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Talk to Our Team <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
