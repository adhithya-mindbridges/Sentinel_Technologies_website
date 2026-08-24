import { Button } from "@/components/ui/button";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { staggerContainer, staggerItem, EASE_PREMIUM } from "@/lib/motion";
import SolutionRadarGraphic from "@/components/graphics/SolutionRadarGraphic";

interface SolutionHeroProps {
  icon: LucideIcon;
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  /** 3-4 real capability names from the page's own feature list - shown as orbiting tags. */
  highlights?: string[];
}

const highlightPositions = [
  "top-2 left-1/2 -translate-x-1/2",
  "top-1/2 -right-2 -translate-y-1/2 sm:right-2",
  "bottom-4 left-2",
  "bottom-4 right-2",
];

/**
 * Shared hero for the individual solution detail pages. Deliberately
 * different from the homepage hero: a radar/scan motif (a literal metaphor
 * for detection/surveillance) with the page's own icon at the hub and its
 * real capabilities orbiting as tags, instead of the homepage's abstract
 * brand-network graphic and trust-number cards.
 */
const SolutionHero = ({
  icon: Icon,
  eyebrow = "Solutions",
  title,
  description,
  primaryLabel,
  primaryTo = "/contact",
  secondaryLabel = "Request Quote",
  secondaryTo = "/contact",
  highlights = [],
}: SolutionHeroProps) => {
  const reduceMotion = useReducedMotion();
  const shownHighlights = highlights.slice(0, 4);

  return (
    <section className="relative bg-gradient-hero py-20 lg:py-24 text-white overflow-hidden">
      <motion.div
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-security-accent/20 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Content */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p
              variants={staggerItem}
              className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-5"
            >
              <span className="w-6 h-px bg-primary-glow" />
              {eyebrow}
            </motion.p>

            <motion.h1
              variants={staggerItem}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-balance mb-6"
            >
              {title}
            </motion.h1>

            <motion.p variants={staggerItem} className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-xl">
              {description}
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-base sm:text-lg rounded-lg shadow-security hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.25)] transition-all duration-300 focus-visible:ring-white focus-visible:ring-offset-transparent"
              >
                <Link to={primaryTo}>
                  {primaryLabel}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/5 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-security-dark px-8 py-6 text-base sm:text-lg rounded-lg transition-all duration-300 focus-visible:ring-white focus-visible:ring-offset-transparent"
              >
                <Link to={secondaryTo}>{secondaryLabel}</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Radar graphic */}
          <div className="relative aspect-square w-full max-w-[380px] mx-auto">
            <SolutionRadarGraphic className="w-full h-full" />

            {/* Icon hub, centered on the graphic's inner ring */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: EASE_PREMIUM }}
            >
              <Icon className="w-10 h-10 text-primary-glow" />
            </motion.div>

            {/* Orbiting capability tags - the page's real features, not generic stats */}
            {shownHighlights.map((label, i) => (
              <motion.div
                key={label}
                className={`absolute ${highlightPositions[i % highlightPositions.length]} bg-white text-security-dark px-3.5 py-2 rounded-full shadow-security text-xs font-semibold whitespace-nowrap animate-float`}
                style={{ animationDelay: `${i * 0.4}s` }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.12, duration: 0.4, ease: EASE_PREMIUM }}
              >
                {label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;
