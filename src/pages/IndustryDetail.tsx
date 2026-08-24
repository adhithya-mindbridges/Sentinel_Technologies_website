import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getIndustryBySlug, industries } from "@/data/industries";
import { getCaseStudyBySlug } from "@/data/caseStudies";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const IndustryDetail = () => {
  const { slug } = useParams();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  if (!industry) return <Navigate to="/industries" replace />;

  const relatedCaseStudies = (industry.caseStudySlugs ?? [])
    .map((s) => getCaseStudyBySlug(s))
    .filter(Boolean);

  const otherIndustries = industries.filter((i) => i.slug !== industry.slug).slice(0, 6);

  return (
    <div className="min-h-screen">
      <SEO
        title={`${industry.name} Security Solutions | Sentinel Technologies`}
        description={`${industry.tagline}. ${industry.intro}`.slice(0, 160)}
        canonical={`${SITE_URL}/industries/${industry.slug}`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `${industry.name} Security Solutions`,
            about: industry.name,
            description: industry.intro,
          },
        ]}
        breadcrumbs={[
          { name: "Industries", url: `${SITE_URL}/industries` },
          { name: industry.name, url: `${SITE_URL}/industries/${industry.slug}` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Industries", path: "/industries" }, { name: industry.name }]} />

      {/* Hero */}
      <section className="relative pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-hero">
        <img
          src={industry.image}
          alt={industry.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Industries
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5"
          >
            Industry &middot; {industry.name}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-5 max-w-2xl text-balance"
          >
            {industry.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-white/80 leading-relaxed max-w-2xl"
          >
            {industry.intro}
          </motion.p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Solutions</p>
            <h2 className="text-3xl font-bold text-security-dark text-balance">
              What we deploy for {industry.name.toLowerCase()}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {industry.solutions.map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-white"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Experience</p>
              <h2 className="text-3xl font-bold text-security-dark">
                Real deployments in {industry.name.toLowerCase()}
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCaseStudies.map((cs, i) => {
                if (!cs) return null;
                return (
                  <motion.div key={cs.slug} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <Link
                      to={`/case-studies/${cs.slug}`}
                      className="group flex flex-col h-full rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-security transition-all duration-300 bg-white"
                    >
                      <div className="relative h-36">
                        <img src={cs.image} alt={cs.imageAlt} loading="lazy" className="w-full h-full object-cover" />
                        <div className="absolute top-3 left-3 p-2 rounded-lg bg-white/90">
                          <Building2 className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-security-dark mb-1 group-hover:text-primary transition-colors">{cs.client}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{cs.title}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          Read Case Study <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to secure your {industry.name.toLowerCase()} facility?
          </h2>
          <p className="text-white/70 mb-8">
            Talk to our team about a system scoped to your building, budget, and compliance
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white text-security-dark"
            >
              <Link to="/industries">Explore Other Industries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-security-dark mb-6">Other Industries</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherIndustries.map((other) => (
              <Link
                key={other.slug}
                to={`/industries/${other.slug}`}
                className="p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-security-light transition-colors text-sm font-medium text-security-dark"
              >
                {other.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
