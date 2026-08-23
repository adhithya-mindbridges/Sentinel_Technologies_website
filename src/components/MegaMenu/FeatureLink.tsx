import { type LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface FeatureLinkProps {
  icon: LucideIcon;
  label: string;
  href: string;
  onClick?: () => void;
}

const FeatureLink = ({ icon: Icon, label, href, onClick }: FeatureLinkProps) => (
  <motion.div whileHover={{ x: 3 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.15, ease: "easeOut" }}>
    <Link
      to={href}
      onClick={onClick}
      className="group flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-150"
    >
      <div className="flex items-center gap-2 min-w-0">
        <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.75} />
        </div>
        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors truncate">
          {label}
        </span>
      </div>
      <ArrowRight className="w-3 h-3 text-white/25 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all duration-150 flex-shrink-0" />
    </Link>
  </motion.div>
);

export default FeatureLink;
