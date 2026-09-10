import { useReducedMotion } from "framer-motion";

/**
 * Suspense fallback shown while a lazy-loaded route's JS chunk downloads.
 * Without this, <main> renders empty during that gap - Header sits directly
 * above Footer with a blank space between, which reads as a broken/black
 * page rather than "still loading". min-h keeps that gap from collapsing so
 * the footer doesn't jump up flush against the header while it loads.
 *
 * The four aperture squares from the brand mark build in one-by-one, hold
 * as the assembled logo, then dismantle and repeat - calmer and more
 * minimal than a spinner, and built from the same shape as the header logo
 * so it reads as "the brand assembling" rather than a generic loading icon.
 */
const PageLoader = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6" role="status" aria-label="Loading page">
      {!reduceMotion && (
        <style>{`
          @keyframes logoBuildIn {
            0%, 100% { opacity: 0; transform: scale(0.55); }
            12% { opacity: 1; transform: scale(1.08); }
            20%, 65% { opacity: 1; transform: scale(1); }
            80% { opacity: 0; transform: scale(0.55); }
          }
          .page-loader-sq {
            transform-origin: center;
            transform-box: fill-box;
            opacity: 0;
            animation: logoBuildIn 2.4s ease-in-out infinite;
          }
          .page-loader-sq:nth-child(1) { animation-delay: 0s; }
          .page-loader-sq:nth-child(2) { animation-delay: 0.18s; }
          .page-loader-sq:nth-child(3) { animation-delay: 0.36s; }
          .page-loader-sq:nth-child(4) { animation-delay: 0.54s; }
        `}</style>
      )}

      <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className="w-16 h-16 text-primary">
        <rect
          className={reduceMotion ? undefined : "page-loader-sq"}
          x="34" y="8" width="30" height="30" rx="9"
          transform="rotate(18 49 23)"
          stroke="currentColor" strokeWidth="4"
          opacity={reduceMotion ? 1 : undefined}
        />
        <rect
          className={reduceMotion ? undefined : "page-loader-sq"}
          x="58" y="14" width="24" height="24" rx="7"
          transform="rotate(-10 70 26)"
          stroke="currentColor" strokeWidth="4"
          opacity={reduceMotion ? 1 : undefined}
        />
        <rect
          className={reduceMotion ? undefined : "page-loader-sq"}
          x="55" y="42" width="24" height="24" rx="7"
          transform="rotate(30 67 54)"
          stroke="currentColor" strokeWidth="4"
          opacity={reduceMotion ? 1 : undefined}
        />
        <rect
          className={reduceMotion ? undefined : "page-loader-sq"}
          x="8" y="40" width="42" height="42" rx="12"
          transform="rotate(-8 29 61)"
          stroke="currentColor" strokeWidth="5"
          opacity={reduceMotion ? 1 : undefined}
        />
      </svg>

      <p className="text-sm font-medium text-muted-foreground tracking-wide">Just a moment&hellip;</p>
    </div>
  );
};

export default PageLoader;
