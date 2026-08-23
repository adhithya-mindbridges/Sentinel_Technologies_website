/**
 * Brand graphic motif derived from the Sentinel logo mark - four rotated,
 * rounded-square "aperture" frames. Used as a subtle watermark/divider so the
 * logo's geometry appears beyond the header icon.
 *
 * Kept intentionally faint and decorative (aria-hidden) - never used as the
 * only carrier of information.
 */
const LogoMotif = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <rect x="34" y="8" width="30" height="30" rx="9" transform="rotate(18 49 23)" stroke="currentColor" strokeWidth="4" />
    <rect x="58" y="14" width="24" height="24" rx="7" transform="rotate(-10 70 26)" stroke="currentColor" strokeWidth="4" />
    <rect x="55" y="42" width="24" height="24" rx="7" transform="rotate(30 67 54)" stroke="currentColor" strokeWidth="4" />
    <rect x="8" y="40" width="42" height="42" rx="12" transform="rotate(-8 29 61)" stroke="currentColor" strokeWidth="5" />
  </svg>
);

export default LogoMotif;
