import { motion, useReducedMotion } from "framer-motion";

/**
 * Radar/scan motif for solution detail page heroes - concentric rings with a
 * sweeping detection wedge, distinct from the homepage's brand-geometry
 * network graphic. "Scanning" is a literal, on-brand metaphor for a
 * surveillance/detection company rather than an abstract tech visual.
 */
const SolutionRadarGraphic = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();

  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" role="presentation">
      <defs>
        <radialGradient id="radarGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="radarSweep" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.45" />
        </linearGradient>
        <clipPath id="radarClip">
          <circle cx="200" cy="200" r="178" />
        </clipPath>
      </defs>

      <motion.circle
        cx="200"
        cy="200"
        r="200"
        fill="url(#radarGlow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.1 }}
      />

      {/* Concentric rings */}
      {[68, 122, 178].map((r, i) => (
        <motion.circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          fill="none"
          stroke="white"
          strokeOpacity="0.16"
          strokeWidth="1"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      {/* Radar sweep */}
      <g clipPath="url(#radarClip)">
        <motion.g
          style={{ transformOrigin: "200px 200px" }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        >
          <path d="M 200 200 L 200 22 A 178 178 0 0 1 320 60 Z" fill="url(#radarSweep)" />
        </motion.g>
      </g>

      {/* Crosshair ticks */}
      <g stroke="white" strokeOpacity="0.2" strokeWidth="1.5">
        <line x1="200" y1="14" x2="200" y2="30" />
        <line x1="200" y1="370" x2="200" y2="386" />
        <line x1="14" y1="200" x2="30" y2="200" />
        <line x1="370" y1="200" x2="386" y2="200" />
      </g>

      {/* Detected points on the outer ring */}
      {[20, 130, 200, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const cx = 200 + 178 * Math.cos(rad);
        const cy = 200 + 178 * Math.sin(rad);
        return (
          <motion.circle
            key={deg}
            cx={cx}
            cy={cy}
            r="4"
            fill="hsl(var(--primary))"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          />
        );
      })}

      {/* Inner hub ring (icon badge sits on top of this, in HTML) */}
      <motion.circle
        cx="200"
        cy="200"
        r="46"
        fill="hsl(var(--security-dark))"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
};

export default SolutionRadarGraphic;
