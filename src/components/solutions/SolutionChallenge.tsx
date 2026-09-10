import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { fadeUp, revealOnce } from "@/lib/motion";
import { solutionContent } from "@/data/solutionContent";

interface SolutionChallengeProps {
  solutionSlug: string;
  /** e.g. "video surveillance" - used in "Why facilities need {heading}" */
  heading: string;
}

/**
 * "The problem" band for a solution page - why a facility needs this category
 * of system, not another feature list. Styled to match the industry detail
 * page's "Operational Requirements" section (dark, numbered, glass cards) so
 * "problem" framing reads consistently everywhere it appears on the site.
 */
const SolutionChallenge = ({ solutionSlug, heading }: SolutionChallengeProps) => {
  const content = solutionContent[solutionSlug];
  if (!content || content.challenges.length === 0) return null;

  return (
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
          viewport={revealOnce}
          variants={fadeUp}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <p className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.2em] text-primary-glow mb-4">
            <AlertTriangle className="w-4 h-4" />
            Why It Matters
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            What facilities are up against without {heading}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {content.challenges.map((item, i) => (
            <motion.div
              key={item}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={revealOnce}
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
  );
};

export default SolutionChallenge;
