import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  gradient: string;
  onClick?: () => void;
}

const IndustryCard = ({ icon: Icon, title, description, href, gradient, onClick }: IndustryCardProps) => (
  <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 380, damping: 20 }}>
    <Link
      to={href}
      onClick={onClick}
      className="group flex items-start gap-3 p-3 rounded-xl border border-white/10 hover:border-white/25 hover:bg-white/5 transition-colors duration-150"
    >
      <motion.div
        className={`w-9 h-9 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}
        whileHover={{ scale: 1.15, rotate: 8 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <Icon className="w-4.5 h-4.5 text-white" strokeWidth={1.75} style={{ width: 18, height: 18 }} />
      </motion.div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors leading-tight truncate">
          {title}
        </p>
        <p className="text-xs text-white/50 mt-0.5 leading-tight line-clamp-1">{description}</p>
      </div>
    </Link>
  </motion.div>
);

export default IndustryCard;
