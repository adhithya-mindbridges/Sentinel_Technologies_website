import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import ptzPoster from "@/assets/ptz/ptz-video-poster.jpg";

// Served from public/videos - Vite doesn't process public/ files through the
// module graph, so this is a plain root-relative URL, not an import.
const ptzVideo = "/videos/ptz-exploded-view.mp4";

/**
 * Scroll-scrubbed "exploded view" engineering showcase for the CCTV
 * solutions page, built from a real photorealistic 3D-rendered PTZ camera
 * animation supplied by the client (public/videos/ptz-exploded-view.mp4).
 *
 * This is NOT an autoplaying video: the <video> element never calls play().
 * Scroll position directly sets video.currentTime (a standard scroll-scrub
 * technique - the same one large product sites use for pinned reveals), so
 * the assembled -> explode -> reassemble sequence is fully scroll-controlled
 * while getting genuine photorealistic 3D rendering quality that a flat
 * SVG/photo-layer composite can't reach.
 */

const COMPONENTS = [
  "Weatherproof front cover",
  "Camera lens module",
  "Internal PCB & imaging electronics",
  "Internal wiring & connectors",
  "Left & right pan/tilt yoke arms",
  "Main cylindrical body housing",
  "Pivot bearing assemblies",
  "Rotating base",
  "Bottom mounting flange & screws",
];

const PTZAccessibleSummary = () => (
  <p className="sr-only">
    Interactive diagram of a Sentinel professional PTZ (pan-tilt-zoom) surveillance camera,
    shown assembled and then exploded into its mechanical components: {COMPONENTS.join(", ")}.
    The camera reassembles at the end of the sequence.
  </p>
);

const useLabelOpacity = (progress: MotionValue<number>, start: number, end: number) => {
  const fadeIn = Math.max(0, start - 0.025);
  const fadeOut = Math.min(1, end + 0.025);
  return useTransform(progress, [fadeIn, start, end, fadeOut], [0, 1, 1, 0]);
};

const PTZExplodedView = () => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [errored, setErrored] = useState(false);

  // Bound 1:1 to scroll, not spring-smoothed: a spring lags behind on fast
  // scrolls, which read as the video falling out of sync. Direct binding
  // keeps currentTime exactly matched to scroll position at any speed.
  const { scrollYProgress: progress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  // Drive the video's currentTime directly from scroll progress - the core
  // "scroll controls animation" requirement, no autoplay involved.
  useMotionValueEvent(progress, "change", (v) => {
    const video = videoRef.current;
    if (!video || !video.duration || Number.isNaN(video.duration)) return;
    video.currentTime = Math.min(Math.max(v, 0), 1) * video.duration;
  });

  useEffect(() => {
    if (reduceMotion) return;
    const video = videoRef.current;
    if (!video) return;
    const onReady = () => setReady(true);
    const onError = () => setErrored(true);
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("error", onError);
    if (video.readyState >= 2) setReady(true);
    return () => {
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("error", onError);
    };
  }, [reduceMotion]);

  const glowX = useTransform(progress, [0, 0.15], [42, 58]);
  const glowXPercent = useTransform(glowX, (v) => `${v}%`);

  const label1 = useLabelOpacity(progress, 0.01, 0.135);
  const label2 = useLabelOpacity(progress, 0.58, 0.68);
  const label3 = useTransform(progress, [0.87, 0.91, 1], [0, 1, 1]);
  const legendOpacity = useLabelOpacity(progress, 0.56, 0.69);

  if (reduceMotion) {
    return (
      <section className="relative bg-security-dark py-24 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="w-full max-w-lg mx-auto">
            <img
              src={ptzPoster}
              alt="Sentinel professional PTZ (pan-tilt-zoom) surveillance camera"
              className="w-full h-auto rounded-lg drop-shadow-2xl"
            />
          </div>
          <div>
            <p className="text-primary-glow text-sm font-semibold tracking-wide uppercase mb-3">
              PTZ / Intelligent Surveillance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Engineered for Intelligent Surveillance
            </h2>
            <p className="text-white/70 text-lg mb-6 max-w-xl">
              Explore the precision engineering behind Sentinel&apos;s professional PTZ surveillance
              technology.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/60">
              {COMPONENTS.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <PTZAccessibleSummary />
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-security-dark h-[240vh] sm:h-[280vh] lg:h-[320vh]"
      aria-label="PTZ camera engineering exploded-view diagram"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <motion.div
          className="absolute w-[520px] h-[520px] rounded-full blur-3xl pointer-events-none"
          style={{
            top: "14%",
            left: glowXPercent,
            translateX: "-50%",
            background: "radial-gradient(circle, hsl(var(--primary) / 0.22) 0%, transparent 70%)",
          }}
        />

        <span className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 text-primary-glow text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
          PTZ / Intelligent Surveillance
        </span>

        <div className="relative w-[88vw] max-w-[820px] aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          {errored ? (
            <img src={ptzPoster} alt="" className="w-full h-full object-cover" />
          ) : (
            <video
              ref={videoRef}
              src={ptzVideo}
              poster={ptzPoster}
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          )}
          {!ready && !errored && (
            <div className="absolute inset-0 flex items-center justify-center bg-security-dark/80 backdrop-blur-sm">
              <span className="text-white/60 text-xs sm:text-sm font-medium tracking-wide uppercase">
                Loading engineering model&hellip;
              </span>
            </div>
          )}
        </div>

        <div className="w-[88vw] max-w-[820px] mt-4">
          <motion.div
            style={{ opacity: legendOpacity }}
            className="hidden md:flex flex-wrap justify-center gap-x-5 gap-y-1.5 pointer-events-none"
          >
            {COMPONENTS.map((c) => (
              <span key={c} className="flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-white/60 uppercase">
                <span className="w-1 h-1 rounded-full bg-primary/70" />
                {c}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 w-[92%] max-w-2xl px-4">
          <div className="relative h-14 sm:h-10 text-center">
            <PhaseText opacity={label1} title="Professional PTZ Surveillance" />
            <PhaseText opacity={label2} title="Precision Engineering. Reliable Surveillance." />
            <PhaseText opacity={label3} title="Built for Continuous Protection" />
          </div>
        </div>
      </div>
      <PTZAccessibleSummary />
    </section>
  );
};

const PhaseText = ({ opacity, title }: { opacity: MotionValue<number>; title: string }) => (
  <motion.h3
    style={{ opacity }}
    className="absolute inset-x-0 bottom-0 text-lg leading-snug sm:text-2xl md:text-3xl font-bold text-white"
  >
    {title}
  </motion.h3>
);

export default PTZExplodedView;
