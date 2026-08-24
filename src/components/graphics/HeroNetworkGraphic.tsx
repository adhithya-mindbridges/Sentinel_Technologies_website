import { motion, useReducedMotion } from "framer-motion";

/**
 * Brand-specific hero graphic - built entirely from the Sentinel logo's
 * rotated rounded-square "aperture" geometry (see LogoMotif), arranged as a
 * layered sensor network: faint background frames, a connected node graph
 * (background/dark inline as "sensor" and "signal" motion nodes, midground),
 * and the actual logo mark rendered large in the foreground.
 *
 * No generic AI/circuit/globe imagery - the shapes are Sentinel's own.
 */
const nodes = [
  { x: 96, y: 96 },
  { x: 300, y: 56 },
  { x: 384, y: 168 },
  { x: 268, y: 268 },
  { x: 80, y: 244 },
  { x: 196, y: 356 },
  { x: 380, y: 340 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
  [0, 3],
  [3, 6],
  [3, 5],
];

const HeroNetworkGraphic = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();

  return (
    <svg viewBox="0 0 480 480" className={className} aria-hidden="true" role="presentation">
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="46%" r="55%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <filter id="heroMarkGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.circle
        cx="240"
        cy="220"
        r="240"
        fill="url(#heroGlow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
      />

      {/* Outer orbit ring - slow continuous rotation, sensor-array feel */}
      <motion.g
        style={{ transformOrigin: "240px 220px" }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="240" cy="220" r="206" fill="none" stroke="white" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="2 10" />
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 240 + 206 * Math.cos(rad);
          const cy = 220 + 206 * Math.sin(rad);
          return <circle key={deg} cx={cx} cy={cy} r="2.5" fill="white" fillOpacity="0.35" />;
        })}
      </motion.g>

      {/* Background - large faint rotated frames, echoing the logo geometry */}
      <motion.g
        stroke="white"
        strokeOpacity="0.09"
        strokeWidth="3"
        fill="none"
        style={{ transformOrigin: "240px 220px" }}
        animate={reduceMotion ? undefined : { rotate: [0, 3, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="50" y="30" width="270" height="270" rx="72" transform="rotate(12 185 165)" />
        <rect x="170" y="150" width="230" height="230" rx="62" transform="rotate(-9 285 265)" />
      </motion.g>

      {/* Midground - connected node graph */}
      <g stroke="white" strokeOpacity="0.28" strokeWidth="1.5">
        {edges.map(([a, b], i) => (
          <motion.line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.7 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </g>

      {!reduceMotion && (
        <>
          <motion.circle
            r="3.5"
            fill="hsl(var(--primary))"
            animate={{
              cx: [nodes[0].x, nodes[1].x, nodes[2].x, nodes[3].x, nodes[0].x],
              cy: [nodes[0].y, nodes[1].y, nodes[2].y, nodes[3].y, nodes[0].y],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2 }}
          />
          <motion.circle
            r="3"
            fill="white"
            animate={{
              cx: [nodes[3].x, nodes[6].x, nodes[5].x, nodes[3].x],
              cy: [nodes[3].y, nodes[6].y, nodes[5].y, nodes[3].y],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "linear", delay: 3.5 }}
          />
        </>
      )}

      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 3 ? 6 : 4.5}
          fill={i === 3 ? "hsl(var(--primary))" : "white"}
          fillOpacity={i === 3 ? 1 : 0.7}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, delay: 1.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        />
      ))}

      {/* Foreground - the actual Sentinel mark, large */}
      <motion.g
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        filter="url(#heroMarkGlow)"
      >
        <rect x="182" y="118" width="92" height="92" rx="27" transform="rotate(18 228 164)" stroke="white" strokeWidth="7" fill="none" />
        <rect x="254" y="144" width="74" height="74" rx="22" transform="rotate(-10 291 181)" stroke="white" strokeWidth="7" fill="none" />
        <rect x="244" y="224" width="74" height="74" rx="22" transform="rotate(30 281 261)" stroke="white" strokeWidth="7" fill="none" />
        <rect x="126" y="214" width="130" height="130" rx="37" transform="rotate(-8 191 279)" stroke="hsl(var(--primary))" strokeWidth="8" fill="none" />
      </motion.g>
    </svg>
  );
};

export default HeroNetworkGraphic;
