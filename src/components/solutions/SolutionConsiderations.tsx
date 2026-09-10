import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { fadeUp, revealOnce } from "@/lib/motion";
import { solutionContent } from "@/data/solutionContent";

interface SolutionConsiderationsProps {
  solutionSlug: string;
}

/**
 * Practical "what to plan for" section - deployment/integration considerations
 * for enterprise evaluators scoping a system, not a marketing feature list.
 */
const SolutionConsiderations = ({ solutionSlug }: SolutionConsiderationsProps) => {
  const content = solutionContent[solutionSlug];
  if (!content || content.considerations.length === 0) return null;

  return (
    <section className="py-20 bg-security-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealOnce}
          variants={fadeUp}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <p className="text-primary text-[13px] font-bold uppercase tracking-[0.2em] mb-3">Deployment Considerations</p>
          <h2 className="text-3xl font-bold text-security-dark text-balance">What to plan for before rollout</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {content.considerations.map((item, i) => (
            <motion.div
              key={item}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={revealOnce}
              variants={fadeUp}
              className="flex items-start gap-3 p-4 rounded-xl border border-border bg-white"
            >
              <Wrench className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionConsiderations;
