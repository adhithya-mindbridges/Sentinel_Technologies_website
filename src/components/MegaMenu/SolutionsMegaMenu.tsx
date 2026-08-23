import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  BrainCircuit,
  Boxes,
  Fingerprint,
  ScanLine,
  ShieldCheck,
  Flame,
  Volume2,
  Activity,
  LayoutDashboard,
  Layers,
  Server,
  Network,
  Rocket,
} from "lucide-react";
import FeatureLink from "./FeatureLink";

const menuVariants = {
  hidden: { opacity: 0, y: -12, scaleY: 0.97, transformOrigin: "top" as const },
  visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { opacity: 0, y: -8, scaleY: 0.98, transition: { duration: 0.14, ease: "easeIn" as const } },
};

const colContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
};

const colItem = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const } },
};

const ColumnBanner = ({ gradient, label, sublabel }: { gradient: string; label: string; sublabel: string }) => (
  <div className={`relative w-full h-14 rounded-xl bg-gradient-to-br ${gradient} overflow-hidden mb-3 flex items-center px-3`}>
    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full" />
    <div className="absolute -bottom-3 left-1/3 w-14 h-14 bg-black/10 rounded-full" />
    <div className="relative z-10 min-w-0">
      <p className="text-white font-bold text-sm leading-tight truncate">{label}</p>
      <p className="text-white/75 text-[10px] font-medium truncate">{sublabel}</p>
    </div>
  </div>
);

const columns = [
  {
    id: "video",
    banner: { gradient: "from-blue-600 via-blue-500 to-cyan-400", label: "Video & Intelligence", sublabel: "Surveillance built for scale" },
    features: [
      { icon: Camera, label: "CCTV & Video Surveillance", href: "/solutions/cctv" },
      { icon: BrainCircuit, label: "A.I - Video Analytics", href: "/solutions#solution-02" },
      { icon: Boxes, label: "VMS - Video Management", href: "/solutions#solution-03" },
    ],
  },
  {
    id: "access",
    banner: { gradient: "from-violet-600 via-indigo-500 to-blue-500", label: "Access & Perimeter", sublabel: "Every entry, controlled" },
    features: [
      { icon: Fingerprint, label: "Access Control & Identity", href: "/solutions/access-control" },
      { icon: ScanLine, label: "RFID & ANPR Gate Automation", href: "/solutions#solution-05" },
      { icon: ShieldCheck, label: "Physical & Perimeter Security", href: "/solutions#solution-06" },
      { icon: Flame, label: "Fire Detection & Life Safety", href: "/solutions/fire-alarm" },
    ],
  },
  {
    id: "operations",
    banner: { gradient: "from-orange-500 via-amber-500 to-yellow-400", label: "Communication & Operations", sublabel: "Connected facility operations" },
    features: [
      { icon: Volume2, label: "Public Address & Voice Alarm", href: "/solutions/public-address" },
      { icon: Activity, label: "TraqOPS - Building & Operations", href: "/solutions/building-automation" },
      { icon: LayoutDashboard, label: "Command & Control Centres", href: "/solutions#solution-10" },
      { icon: Layers, label: "ELV Systems Integration", href: "/solutions#solution-13" },
    ],
  },
  {
    id: "infrastructure",
    banner: { gradient: "from-emerald-600 via-teal-500 to-cyan-500", label: "Digital Infrastructure", sublabel: "The backbone of intelligence" },
    features: [
      { icon: Server, label: "Data Centre & IT Infrastructure", href: "/solutions/it-infrastructure" },
      { icon: Network, label: "Structured Cabling & Fibre", href: "/solutions#solution-12" },
      { icon: Rocket, label: "Sentinel X-Labs", href: "/solutions#solution-14" },
    ],
  },
];

interface SolutionsMegaMenuProps {
  onClose?: () => void;
}

const SolutionsMegaMenu = ({ onClose }: SolutionsMegaMenuProps) => (
  <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
    <div className="border-y border-white/10 shadow-2xl shadow-black/40 overflow-hidden bg-security-dark">
      {/* Top bar */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 pt-3 pb-2 border-b border-white/10">
        <div>
          <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Products &amp; Solutions</p>
          <h3 className="text-sm font-bold text-white mt-0.5">14 Integrated Technology Categories</h3>
        </div>
        <Link
          to="/solutions"
          onClick={onClose}
          className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-white transition-colors group"
        >
          View All Solutions
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* 4-column grid */}
      <motion.div
        variants={colContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 max-w-7xl mx-auto"
      >
        {columns.map((col) => (
          <motion.div key={col.id} variants={colItem} className="p-3.5">
            <ColumnBanner {...col.banner} />
            <div className="space-y-1">
              {col.features.map((f) => (
                <FeatureLink key={f.label} icon={f.icon} label={f.label} href={f.href} onClick={onClose} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA strip */}
      <div className="border-t border-white/10 bg-white/5">
        <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto px-6 py-2">
          <p className="text-xs text-white/50">
            Need a custom solution?{" "}
            <Link to="/contact" onClick={onClose} className="font-semibold text-primary hover:text-white hover:underline">
              Talk to our team →
            </Link>
          </p>
          <Link
            to="/solutions"
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-3 py-1.5 rounded-lg transition-all"
          >
            Compare All Solutions
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

export default SolutionsMegaMenu;
