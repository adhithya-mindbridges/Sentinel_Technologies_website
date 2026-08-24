import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Lock, Headphones } from "lucide-react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { getStat } from "@/data/stats";
import { staggerContainer, staggerItem, EASE_PREMIUM } from "@/lib/motion";
import HeroNetworkGraphic from "@/components/graphics/HeroNetworkGraphic";

const FOUNDED_YEAR = 2012;
const yearsInBusiness = new Date().getFullYear() - FOUNDED_YEAR;

const serviceChips = [
  { icon: Camera, label: "CCTV Systems" },
  { icon: Lock, label: "Access Control" },
  { icon: Headphones, label: "24/7 Support" },
];

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  const graphicRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.4 });
  const springY = useSpring(my, { stiffness: 60, damping: 18, mass: 0.4 });

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = graphicRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(relX * 16);
    my.set(relY * 16);
  };

  const handlePointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section className="relative bg-gradient-hero py-20 lg:py-28 text-white overflow-hidden">
      {/* Ambient background layer - subordinate to content */}
      {/* <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }} /> */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-primary/25 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/3 -right-32 w-[36rem] h-[36rem] rounded-full bg-security-accent/20 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 left-1/3 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
      />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
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

          {/* Hero Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM }}
          >
            <div
              ref={graphicRef}
              onMouseMove={handlePointerMove}
              onMouseLeave={handlePointerLeave}
              className="relative aspect-square w-full max-w-[540px] mx-auto"
            >
              <motion.div style={{ x: springX, y: springY }} className="absolute inset-0">
                <HeroNetworkGraphic className="w-full h-full" />
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                className="absolute bottom-2 -left-2 sm:-left-6 bg-white text-security-dark p-4 rounded-xl shadow-security animate-float"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <div className="text-2xl font-bold text-primary tabular-nums">{getStat("Projects").value}</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </motion.div>

              <motion.div
                className="absolute top-2 -right-2 sm:-right-6 bg-white text-security-dark p-4 rounded-xl shadow-security animate-float"
                style={{ animationDelay: "1.2s" }}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <div className="text-2xl font-bold text-primary tabular-nums">{getStat("Years").value}</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 right-2 sm:right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm text-security-dark pl-2.5 pr-3.5 py-2 rounded-full shadow-security animate-float"
                style={{ animationDelay: "0.6s" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.55, duration: 0.5 }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span className="text-xs font-semibold">24/7 Monitoring</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-16 lg:mt-20 pt-10 border-t border-white/15"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
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
