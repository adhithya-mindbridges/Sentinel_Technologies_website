import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Lock, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getStat } from "@/data/stats";
import { solutions } from "@/data/solutions";
import { staggerContainer, staggerItem, EASE_PREMIUM } from "@/lib/motion";
import HeroVideoBackground from "@/components/graphics/HeroVideoBackground";

const FOUNDED_YEAR = 2012;
const yearsInBusiness = new Date().getFullYear() - FOUNDED_YEAR;

const serviceChips = [
  { icon: Camera, label: "CCTV Systems" },
  { icon: Lock, label: "Access Control" },
  { icon: Headphones, label: "24/7 Support" },
];

const HeroSection = () => {
  return (
    <section className="relative flex items-center text-white overflow-hidden py-28 sm:py-28 md:py-26 lg:py-28 2xl:py-0 2xl:min-h-screen">
      <HeroVideoBackground />

      {/* Capability list - fills the open right-hand edge of the frame on
          wide viewports, clear of the video's own scene graphics. Sourced
          from solutions.ts (the same data SolutionsSection uses). Styled to
          match the bracketed HUD-panel language the video itself uses for
          its own labels ("DRONE ACTIVE", "Connected Intelligence") - corner
          ticks, cyan accent, uppercase tracked type - so it reads as part of
          the same graphic system instead of a generic glass card. */}
      {/* <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="hidden xl:block absolute right-8 bottom-24 z-10 w-64"
      >
        <div className="relative bg-security-dark/55 backdrop-blur-md border border-cyan-400/25 px-4 pt-3.5 pb-3">
          <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-cyan-300/70" />
          <span className="absolute -top-px -right-px w-3 h-3 border-t border-r border-cyan-300/70" />
          <span className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-cyan-300/70" />
          <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-cyan-300/70" />

          <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-cyan-400/20">
            <span className="w-1 h-3 bg-cyan-300" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Sentinel Systems
            </span>
          </div>

          <div className="flex flex-col">
            {solutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-2.5 py-1.5 border-b border-white/5 last:border-b-0"
                >
                  <Icon className="w-3.5 h-3.5 text-cyan-300/80 flex-shrink-0" />
                  <span className="text-[11px] font-medium uppercase tracking-wide text-white/85">
                    {solution.title}
                  </span>
                  <span className="ml-auto w-1 h-1 rounded-full bg-cyan-300/60 flex-shrink-0" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div> */}

      <div className="container relative z-10 mx-auto px-4 min-w-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.p variants={staggerItem} className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-5">
            <span className="w-6 h-px bg-primary-glow" />
            Since {FOUNDED_YEAR} &middot; Security, AI &amp; Automation
          </motion.p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08] text-balance">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.5, ease: EASE_PREMIUM }}
              className="block"
            >
              Advanced Security
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.64, ease: EASE_PREMIUM }}
              className="block text-primary-glow"
            >
              &amp; ELV Solutions
            </motion.span>
          </h1>

          <motion.p variants={staggerItem} className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-xl">
            Comprehensive security infrastructure including CCTV surveillance, access control,
            fire safety, and building automation. Trusted by leading organizations across industries.
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 mb-9">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-base sm:text-lg rounded-lg shadow-security hover:shadow-[0_0_0_4px_hsl(var(--primary)/0.25)] transition-all duration-300 focus-visible:ring-white focus-visible:ring-offset-transparent"
            >
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-security-dark px-8 py-6 text-base sm:text-lg rounded-lg transition-all duration-300 focus-visible:ring-white focus-visible:ring-offset-transparent"
              onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Our Solutions
            </Button>
          </motion.div>

          <motion.div variants={staggerItem} className="flex flex-wrap gap-2.5">
            {serviceChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-medium text-white/90"
                >
                  <Icon className="w-3.5 h-3.5 text-primary-glow" />
                  {chip.label}
                </span>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-10 lg:mt-20 pt-8 lg:pt-10 border-t border-white/15 max-w-3xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center md:text-left">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1.5 tabular-nums">24/7</div>
              <div className="text-white/70 text-sm">Operational Support</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1.5 tabular-nums">3&times;</div>
              <div className="text-white/70 text-sm">ISO Certified</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1.5 tabular-nums">{getStat("Partners").value}</div>
              <div className="text-white/70 text-sm">Technology Partners</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1.5 tabular-nums">{yearsInBusiness}+</div>
              <div className="text-white/70 text-sm">Years Excellence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
