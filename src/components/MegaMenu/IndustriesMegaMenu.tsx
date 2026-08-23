import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Camera, BrainCircuit, Radio } from "lucide-react";
import IndustryCard from "./IndustryCard";
import { industries } from "@/data/industries";
import { enterpriseScaleStats } from "@/data/caseStudies";

const menuVariants = {
  hidden: { opacity: 0, y: -12, scaleY: 0.97, transformOrigin: "top" as const },
  visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, y: -8, scaleY: 0.98, transition: { duration: 0.14, ease: "easeIn" as const } },
};

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.08 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] as const } },
};

const gradients = [
  "from-blue-500 to-blue-600",
  "from-orange-500 to-amber-500",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-500",
  "from-cyan-500 to-sky-600",
];

const badges = [
  { icon: ShieldCheck, label: "Integrated Security" },
  { icon: Camera, label: "24/7 Video Monitoring" },
  { icon: BrainCircuit, label: "AI-Powered Analytics" },
  { icon: Radio, label: "Command & Control" },
];

const InfoPanel = ({ onClose }: { onClose?: () => void }) => (
  <div
    className="relative rounded-xl overflow-hidden flex flex-col justify-between p-5"
    style={{ minHeight: "320px", background: "linear-gradient(135deg, hsl(214 60% 18%) 0%, hsl(214 70% 12%) 60%, hsl(210 40% 8%) 100%)" }}
  >
    <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/5" />
    <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/5" />

    <div className="relative z-10">
      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1 mb-3">
        <ShieldCheck className="w-3 h-3" />
        Sector-Focused Solutions
      </span>
      <h3 className="text-lg font-bold text-white leading-snug">
        Intelligent Technology<br />
        <span className="text-primary">for Every Industry</span>
      </h3>
      <p className="text-xs text-white/55 mt-2 leading-relaxed max-w-[180px]">
        Engineering expertise combined with intelligent technology, scaled to each sector's challenges.
      </p>
    </div>

    <div className="relative z-10 space-y-1.5 my-3">
      {badges.map(({ icon: Icon, label }) => (
        <div key={label} className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg text-sm font-semibold border border-white/10 bg-white/5 text-white/80 w-full">
          <Icon className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
          {label}
        </div>
      ))}
    </div>

    <div className="relative z-10 grid grid-cols-3 gap-2 mb-3">
      <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
        <p className="text-sm font-bold text-white">15</p>
        <p className="text-[10px] text-white/50 font-medium">Industries</p>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
        <p className="text-sm font-bold text-white">{enterpriseScaleStats[2].value}</p>
        <p className="text-[10px] text-white/50 font-medium">Projects Featured</p>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
        <p className="text-sm font-bold text-white">{enterpriseScaleStats[0].value}</p>
        <p className="text-[10px] text-white/50 font-medium">Cameras Deployed</p>
      </div>
    </div>

    <Link
      to="/industries"
      onClick={onClose}
      className="relative z-10 flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-white transition-colors group"
    >
      Explore all industries
      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
    </Link>
  </div>
);

interface IndustriesMegaMenuProps {
  onClose?: () => void;
}

const half = Math.ceil(industries.length / 2);
const colA = industries.slice(0, half);
const colB = industries.slice(half);

const IndustriesMegaMenu = ({ onClose }: IndustriesMegaMenuProps) => (
  <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
    <div className="border-y border-white/10 shadow-2xl shadow-black/40 overflow-hidden bg-security-dark">
      {/* Top bar */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 pt-4 pb-3 border-b border-white/10">
        <div>
          <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Industries We Serve</p>
          <h3 className="text-sm font-bold text-white mt-0.5">Intelligent Technology for Mission-Critical Industries</h3>
        </div>
        <Link
          to="/industries"
          onClick={onClose}
          className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-white transition-colors group"
        >
          All Industries
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* 3-column layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 divide-x divide-white/10">
        <div className="p-4 hidden lg:block">
          <InfoPanel onClose={onClose} />
        </div>

        <motion.div variants={cardContainer} initial="hidden" animate="visible" className="p-4 space-y-1">
          {colA.map((industry, i) => (
            <motion.div key={industry.slug} variants={cardItem}>
              <IndustryCard
                icon={industry.icon}
                title={industry.name}
                description={industry.description}
                href={`/industries/${industry.slug}`}
                gradient={gradients[i % gradients.length]}
                onClick={onClose}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={cardContainer} initial="hidden" animate="visible" className="p-4 space-y-1">
          {colB.map((industry, i) => (
            <motion.div key={industry.slug} variants={cardItem}>
              <IndustryCard
                icon={industry.icon}
                title={industry.name}
                description={industry.description}
                href={`/industries/${industry.slug}`}
                gradient={gradients[(i + half) % gradients.length]}
                onClick={onClose}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10 bg-white/5">
        <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto px-6 py-3">
          <p className="text-xs text-white/50">
            Don't see your industry?{" "}
            <Link to="/contact" onClick={onClose} className="font-semibold text-primary hover:text-white hover:underline">
              Contact us →
            </Link>
          </p>
          <Link
            to="/case-studies"
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1.5 rounded-lg transition-all"
          >
            View Case Studies
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

export default IndustriesMegaMenu;
