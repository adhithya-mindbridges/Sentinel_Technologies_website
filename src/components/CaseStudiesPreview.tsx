import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Building2 } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const featured = caseStudies.slice(0, 3);

const CaseStudiesPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Success Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-security-dark text-balance">
              Engineering complex infrastructure, delivering at scale
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all flex-shrink-0"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((cs, i) => (
            <motion.div key={cs.slug} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link
                to={`/case-studies/${cs.slug}`}
                className="group flex flex-col h-full rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-security transition-all duration-300"
              >
                <div className="relative h-36">
                  <img
                    src={cs.image}
                    alt={cs.imageAlt}
                    loading="lazy"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 p-2 rounded-lg bg-white/90">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">{cs.industry}</span>
                  <h3 className="font-bold text-security-dark mb-1 group-hover:text-primary transition-colors">{cs.client}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{cs.title}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-4">
                    Read Case Study <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
