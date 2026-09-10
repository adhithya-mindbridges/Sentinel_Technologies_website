import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, AlertTriangle, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO, { SITE_URL, truncateDescription } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { getSolutionBySlug } from "@/data/solutions";
import { getIndustryForCaseStudy } from "@/data/crossLinks";
import LogoMotif from "@/components/graphics/LogoMotif";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!caseStudy) return <Navigate to="/case-studies" replace />;

  const relatedSolutions = caseStudy.relatedSolutionSlugs
    .map((s) => getSolutionBySlug(s))
    .filter(Boolean);

  const otherCaseStudies = caseStudies.filter((c) => c.slug !== caseStudy.slug).slice(0, 3);
  const industry = getIndustryForCaseStudy(caseStudy.slug);

  return (
    <div className="min-h-screen">
      <SEO
        title={`${caseStudy.client} Case Study | Sentinel Technologies`}
        description={truncateDescription(caseStudy.summary)}
        canonical={`${SITE_URL}/case-studies/${caseStudy.slug}`}
        ogType="article"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: caseStudy.headline,
            about: caseStudy.client,
            description: caseStudy.summary,
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
          ...(caseStudy.faqs && caseStudy.faqs.length > 0
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: caseStudy.faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: { "@type": "Answer", text: faq.answer },
                  })),
                },
              ]
            : []),
        ]}
        breadcrumbs={[
          { name: "Case Studies", url: `${SITE_URL}/case-studies` },
          { name: caseStudy.client, url: `${SITE_URL}/case-studies/${caseStudy.slug}` },
        ]}
      />
      <Breadcrumbs items={[{ name: "Case Studies", path: "/case-studies" }, { name: caseStudy.client }]} />

      {/* Hero */}
      <section className="relative bg-gradient-hero py-16 lg:py-20 text-white overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-security-accent/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <LogoMotif className="pointer-events-none absolute -bottom-20 -right-10 w-72 h-72 text-white/[0.05] hidden lg:block" />

        <div className="container relative mx-auto px-4">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="mb-8">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Case Studies
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.2em] text-white/70 mb-5"
              >
                <span className="w-6 h-px bg-primary-glow" />
                {industry ? (
                  <Link to={`/industries/${industry.slug}`} className="text-primary-glow hover:underline underline-offset-4">
                    {caseStudy.industry}
                  </Link>
                ) : (
                  <span className="text-primary-glow">{caseStudy.industry}</span>
                )}
                <span className="text-white/40">&middot;</span>
                <span>{caseStudy.client}</span>
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-3 text-balance"
              >
                {caseStudy.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="text-lg text-white/80 mb-6"
              >
                {caseStudy.title}
              </motion.p>

              {caseStudy.location && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.18 }}
                  className="flex items-center gap-2 text-white/70 text-sm mb-4"
                >
                  <MapPin className="w-4 h-4" />
                  {caseStudy.location}
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-2"
              >
                {caseStudy.solutionTags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/15">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-security">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.imageAlt}
                  width={800}
                  height={450}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-security-dark/50 via-transparent to-transparent" />
              </div>

              {caseStudy.scale && (
                <motion.div
                  className="absolute -bottom-5 -left-5 bg-white text-security-dark px-4 py-3 rounded-xl shadow-security animate-float"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                >
                  <div className="text-xl font-bold text-primary tabular-nums leading-tight">{caseStudy.scale}</div>
                  <div className="text-xs text-muted-foreground">Deployment Scale</div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics grid - proof before the reader commits to reading. Hidden entirely when no
          verified metrics or highlights exist yet, rather than rendering an empty section. */}
      {((caseStudy.metrics && caseStudy.metrics.length > 0) ||
        (caseStudy.highlights && caseStudy.highlights.length > 0)) && (
        <section className="py-14 bg-security-light border-b border-border">
          <div className="container mx-auto px-4">
            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div className={`grid sm:grid-cols-2 gap-6 ${caseStudy.metrics.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2 max-w-2xl mx-auto"}`}>
                {caseStudy.metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="relative text-center p-6 pt-7 rounded-xl bg-white border border-border overflow-hidden"
                  >
                    <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-security-accent" aria-hidden="true" />
                    <p className="text-3xl font-bold text-primary tabular-nums mb-1.5">{metric.value}</p>
                    <p className="text-sm text-muted-foreground leading-snug">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            )}
            {caseStudy.highlights && caseStudy.highlights.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {caseStudy.highlights.map((highlight, i) => (
                  <motion.div
                    key={highlight}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center p-4 rounded-xl bg-white/60 border border-border"
                  >
                    <p className="text-sm font-semibold text-security-dark leading-snug">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* The Challenge - omitted entirely for case studies where the specific pre-deployment
          problem hasn't been confirmed yet. */}
      {caseStudy.challenge && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
              <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">The Challenge</p>
              <p className="text-lg text-security-dark leading-relaxed font-medium text-balance">{caseStudy.challenge.intro}</p>
            </motion.div>
            <div className="space-y-3">
              {caseStudy.challenge.points.map((point, i) => (
                <motion.div
                  key={point}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-security-light/60"
                >
                  <AlertTriangle className="w-5 h-5 text-security-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Summary + Scope */}
      <section className="py-20 bg-security-light">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">The Sentinel Solution</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{caseStudy.summary}</p>
            {caseStudy.scale && (
              <p className="text-security-dark font-semibold mt-4">Scale: {caseStudy.scale}</p>
            )}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Scope of Work</p>
            <h2 className="text-2xl font-bold text-security-dark mb-6">What we delivered</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {caseStudy.scope.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-white">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="relative py-20 bg-security-dark text-white overflow-hidden">
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-4 max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Quote className="w-8 h-8 text-primary-glow/50 mx-auto mb-4" aria-hidden="true" />
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Impact</p>
            <p className="text-xl md:text-2xl font-semibold leading-relaxed text-balance">{caseStudy.impact}</p>
          </motion.div>
        </div>
      </section>

      {/* Related solutions */}
      {relatedSolutions.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-10 max-w-2xl mx-auto"
            >
              <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Solutions Deployed</p>
              <h2 className="text-2xl font-bold text-security-dark">Solutions used in this project</h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {relatedSolutions.map((solution) => {
                if (!solution) return null;
                const Icon = solution.icon;
                return (
                  <Link
                    key={solution.slug}
                    to={solution.path}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-security-light transition-colors w-full sm:w-64"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-security-dark">{solution.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Who this is for - omitted until confirmed facility types / buyer roles exist for this case study. */}
      {((caseStudy.targetFacilities && caseStudy.targetFacilities.length > 0) ||
        (caseStudy.targetRoles && caseStudy.targetRoles.length > 0)) && (
        <section className="py-16 bg-security-light border-t border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-6">Is This Relevant to You?</p>
            <div className="grid sm:grid-cols-2 gap-10">
              {caseStudy.targetFacilities && caseStudy.targetFacilities.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-security-dark mb-3 uppercase tracking-wide">Facility types</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.targetFacilities.map((facility) => (
                      <span key={facility} className="px-3 py-1.5 rounded-full text-xs font-medium bg-security-light border border-border text-security-dark">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {caseStudy.targetRoles && caseStudy.targetRoles.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-security-dark mb-3 uppercase tracking-wide">Written for</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.targetRoles.map((role) => (
                      <span key={role} className="px-3 py-1.5 rounded-full text-xs font-medium bg-security-light border border-border text-security-dark">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ - omitted until real, confirmed objection-handling answers exist for this case study. */}
      {caseStudy.faqs && caseStudy.faqs.length > 0 && (
        <section className="py-16 bg-background border-t border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-6">Frequently Asked Questions</p>
            <Accordion type="single" collapsible className="rounded-xl border border-border bg-white overflow-hidden">
              {caseStudy.faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${i}`}
                  className={i === caseStudy.faqs!.length - 1 ? "border-b-0" : ""}
                >
                  <AccordionTrigger className="px-5 font-bold text-security-dark hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-balance">
            Still running on manual processes or disconnected systems?
          </h2>
          <p className="text-white/70 mb-8">
            This is the exact problem Sentinel solves. Talk to our team about scoping a similar deployment for your facility.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
            <Link to="/contact">Talk to Our Team</Link>
          </Button>
          {industry && (
            <p className="mt-5 text-sm text-white/60">
              Working in {caseStudy.industry.toLowerCase()}?{" "}
              <Link to={`/industries/${industry.slug}`} className="font-semibold text-primary-glow hover:underline underline-offset-4">
                See what we deploy for {industry.name.toLowerCase()}
              </Link>
            </p>
          )}
        </div>
      </section>

      {/* Other case studies */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">More Proof</p>
            <h2 className="text-3xl font-bold text-security-dark text-balance">See how other facilities solved this</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCaseStudies.map((other, i) => (
              <motion.div key={other.slug} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link
                  to={`/case-studies/${other.slug}`}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-security transition-all duration-300 bg-white"
                >
                  <div className="relative h-40">
                    <img src={other.image} alt={other.imageAlt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-security-dark/70 via-security-dark/10 to-transparent" />
                    <p className="absolute bottom-3 left-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/85">
                      {other.industry}
                    </p>
                  </div>
                  <div className="p-5 flex items-center justify-between gap-2">
                    <p className="font-bold text-security-dark group-hover:text-primary transition-colors">{other.client}</p>
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
