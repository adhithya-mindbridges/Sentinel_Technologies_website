import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO, { SITE_URL } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { getSolutionBySlug } from "@/data/solutions";
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

  return (
    <div className="min-h-screen">
      <SEO
        title={`${caseStudy.headline} | Sentinel Technologies`}
        description={caseStudy.summary.slice(0, 160)}
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
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: caseStudy.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
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
                <span className="text-primary-glow">{caseStudy.industry}</span>
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

      {/* Metrics grid - proof before the reader commits to reading */}
      <section className="py-14 bg-security-light border-b border-border">
        <div className="container mx-auto px-4">
          <div className={`grid sm:grid-cols-2 gap-6 ${caseStudy.metrics.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2 max-w-2xl mx-auto"}`}>
            {caseStudy.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-5 rounded-xl bg-white border border-border"
              >
                <p className="text-2xl font-bold text-primary tabular-nums mb-1">{metric.value}</p>
                <p className="text-sm text-muted-foreground leading-snug">{metric.label}</p>
              </motion.div>
            ))}
          </div>
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

      {/* The Challenge */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14">
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">The Challenge</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{caseStudy.challenge.intro}</p>
            <div className="space-y-3">
              {caseStudy.challenge.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
      <section className="py-20 bg-security-dark text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Impact</p>
            <p className="text-xl font-semibold leading-relaxed text-balance">{caseStudy.impact}</p>
          </motion.div>
        </div>
      </section>

      {/* Related solutions */}
      {relatedSolutions.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-bold text-security-dark mb-6">Solutions used in this project</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedSolutions.map((solution) => {
                if (!solution) return null;
                const Icon = solution.icon;
                return (
                  <Link
                    key={solution.slug}
                    to={solution.path}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-security-light transition-colors"
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

      {/* Who this is for */}
      <section className="py-16 bg-security-light border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-6">Is This Relevant to You?</p>
          <div className="grid sm:grid-cols-2 gap-10">
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-6">Frequently Asked Questions</p>
          <div className="space-y-4">
            {caseStudy.faqs.map((faq) => (
              <div key={faq.question} className="p-5 rounded-xl bg-white border border-border">
                <p className="font-bold text-security-dark mb-2">{faq.question}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-security-light border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-2xl font-bold text-security-dark mb-3">Still running on manual processes or disconnected systems?</h2>
          <p className="text-muted-foreground mb-8">
            This is the exact problem Sentinel solves. Talk to our team about scoping a similar deployment for your facility.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Talk to Our Team</Link>
          </Button>
        </div>
      </section>

      {/* Other case studies */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-security-dark mb-6">See how other facilities solved this</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherCaseStudies.map((other) => (
              <Link
                key={other.slug}
                to={`/case-studies/${other.slug}`}
                className="p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-security-light transition-colors"
              >
                <p className="text-[13px] font-semibold uppercase tracking-wide text-primary mb-1">{other.industry}</p>
                <p className="text-sm font-medium text-security-dark">{other.client}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
