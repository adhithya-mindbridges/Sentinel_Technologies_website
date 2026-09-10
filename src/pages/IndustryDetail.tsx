import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Building2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO, { SITE_URL, truncateDescription } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getIndustryBySlug, industries } from "@/data/industries";
import { industryChallenges } from "@/data/industryChallenges";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { getSolutionBySlug } from "@/data/solutions";

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

  const relatedSolutions = industry.relatedSolutionSlugs
    .map((s) => getSolutionBySlug(s))
    .filter(Boolean);

  const otherIndustries = industries.filter((i) => i.slug !== industry.slug).slice(0, 6);
  const challenges = industryChallenges[industry.slug] ?? [];

  return (
    <div className="min-h-screen">
      <SEO
        title={`${industry.name} Solutions | Sentinel Technologies`}
        description={truncateDescription(`${industry.tagline}. ${industry.intro}`)}
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
            className="inline-block text-[13px] font-bold uppercase tracking-[0.2em] text-primary mb-5"
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

      {/* Operational requirements - the "problem" band that sets up the Solutions
          section below. Dark and editorial (numbered, glass cards) so it reads as
          the stakes being named, not another checklist that blurs into Solutions. */}
      {challenges.length > 0 && (
        <section className="relative py-20 md:py-24 bg-security-dark text-white overflow-hidden">
          <div
            className="pointer-events-none absolute -top-32 right-0 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-40 -left-24 w-[24rem] h-[24rem] rounded-full bg-security-accent/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <p className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.2em] text-primary-glow mb-4">
                <AlertTriangle className="w-4 h-4" />
                Operational Requirements
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
                What {industry.name.toLowerCase()} facilities are up against
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
              {challenges.map((item, i) => (
                <motion.div
                  key={item}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/20 transition-colors"
                >
                  <span className="text-2xl font-bold text-white/15 tabular-nums leading-none pt-0.5" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-white/75 leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Solutions</p>
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

          {relatedSolutions.length > 0 && (
            <div className="max-w-4xl mx-auto mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="text-sm text-muted-foreground">Explore the systems:</span>
              {relatedSolutions.map((solution) => {
                if (!solution) return null;
                return (
                  <Link
                    key={solution.slug}
                    to={solution.path}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark hover:underline underline-offset-4"
                  >
                    {solution.title}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                );
              })}
            </div>
          )}
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
              <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Our Experience</p>
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
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">
              More Industries
            </p>
            <h2 className="text-3xl font-bold text-security-dark text-balance">
              Other sectors we secure
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherIndustries.map((other, i) => {
              const OtherIcon = other.icon;
              return (
                <motion.div key={other.slug} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Link
                    to={`/industries/${other.slug}`}
                    className="group relative flex h-40 flex-col justify-end overflow-hidden rounded-2xl border border-border hover:border-primary/40 hover:shadow-security transition-all duration-300"
                  >
                    <img
                      src={other.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-security-dark/90 via-security-dark/40 to-security-dark/10" />
                    <div className="absolute top-3 left-3 p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15">
                      <OtherIcon className="w-4 h-4 text-white" />
                    </div>
                    <div className="relative z-10 p-4 flex items-center justify-between gap-2">
                      <span className="font-semibold text-white leading-tight">{other.name}</span>
                      <ArrowRight className="w-4 h-4 text-white/70 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
