import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Camera, ScanLine, Radar, Share2 } from "lucide-react";

/**
 * Full-bleed hero background: a single 18.2s color-graded loop (VMS control
 * room -> aerial infrastructure monitoring -> ANPR/vehicle recognition ->
 * connected data intelligence) crossfaded server-side into one file, filling
 * the entire hero section behind the content - the Mirador reference's
 * "video runs the whole hero" treatment, not a small contained panel.
 *
 * Lightweight SVG/DOM UI chrome is layered on top, synced to the video's own
 * clock via the hero-scene-* CSS keyframes in index.css (no JS timer drives
 * the visuals - only the text-label swap in the corner badge needs JS).
 * See -> Detect -> Understand -> Respond, using Sentinel's actual
 * capabilities (CCTV/VMS, Sentinel X-Labs drones, ANPR via AI Video
 * Analytics, Command & Control integration) - not invented ones.
 */

const DESKTOP_SRC = "/videos/hero/sentinel-hero.mp4";
const MOBILE_SRC = "/videos/hero/sentinel-hero.mp4";
const DESKTOP_POSTER = "/images/hero/hero-poster.webp";
const MOBILE_POSTER = "/images/hero/hero-poster-mobile.webp";

const scenes = [
  // { icon: Camera, label: "VMS · Live Feeds" },
  // { icon: Radar, label: "Drone · Area Monitoring" },
  // { icon: ScanLine, label: "ANPR · Vehicle Recognition" },
  // { icon: Share2, label: "Connected Intelligence" },
];

const HeroVideoBackground = () => {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
  );
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const sceneStarts = [0, 4.4, 8.8, 13.2];
    const id = window.setInterval(() => {
      const t = videoRef.current?.currentTime ?? 0;
      let idx = 0;
      for (let i = 0; i < sceneStarts.length; i++) {
        if (t >= sceneStarts[i]) idx = i;
      }
      setSceneIndex(idx);
    }, 400);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const ActiveIcon = scenes[sceneIndex]?.icon ?? Camera;

  return (
    <div className="absolute inset-0 overflow-hidden bg-security-dark">
      {/* Background video / poster fallback - fills the entire hero */}
      {reduceMotion ? (
        <img
          src={isMobile ? MOBILE_POSTER : DESKTOP_POSTER}
          alt="Sentinel intelligence platform: VMS camera feeds, drone area monitoring, ANPR vehicle recognition and connected command-and-control, shown as a static preview"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={isMobile ? MOBILE_SRC : DESKTOP_SRC}
          poster={isMobile ? MOBILE_POSTER : DESKTOP_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      )}

      {/* Contrast scrims - opaque toward the text on the left, a soft
          bottom gradient for the trust-indicator row, video reads clearly
          on the right where the scene UI chrome lives */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-security-dark via-security-dark/85 to-security-dark/35 lg:to-security-dark/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-security-dark/90 via-transparent to-security-dark/30" />
      {/* <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      /> */}

      {!reduceMotion && (
        <>
          {/* Scene 1 - VMS: quad camera-grid chrome, right-hand third of the frame */}
          {/* <div className="hero-scene-vms absolute inset-0 hidden md:block">
            <div className="absolute right-[6%] top-1/2 -translate-y-1/2 w-[34%] max-w-sm aspect-[4/3] border border-white/15 rounded-xl">
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                <div className="border-r border-b border-white/10" />
                <div className="border-b border-white/10" />
                <div className="border-r border-white/10" />
                <div />
              </div>
              {["CAM 01", "CAM 02", "CAM 03", "CAM 04"].map((cam, i) => (
                <span
                  key={cam}
                  className="absolute flex items-center gap-1.5 bg-security-dark/70 backdrop-blur-sm text-[10px] font-semibold tracking-wide text-white/90 px-2 py-1 rounded"
                  style={{
                    top: i < 2 ? "0.6rem" : "auto",
                    bottom: i >= 2 ? "0.6rem" : "auto",
                    left: i % 2 === 0 ? "0.6rem" : "auto",
                    right: i % 2 === 1 ? "0.6rem" : "auto",
                  }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                  </span>
                  {cam} · LIVE
                </span>
              ))}
            </div>
          </div> */}

          {/* Scene 2 - Drone: drifting tracking reticle */}
          {/* <div className="hero-scene-drone absolute inset-0 hidden md:block">
            <div className="hero-drone-drift absolute right-[22%] top-[38%] w-32 h-32 rounded-full border border-primary-glow/70">
              <span className="absolute -top-px left-1/2 -translate-x-1/2 w-px h-3 bg-primary-glow/70" />
              <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-px h-3 bg-primary-glow/70" />
              <span className="absolute -left-px top-1/2 -translate-y-1/2 h-px w-3 bg-primary-glow/70" />
              <span className="absolute -right-px top-1/2 -translate-y-1/2 h-px w-3 bg-primary-glow/70" />
            </div>
            <span className="absolute right-[8%] bottom-[16%] inline-flex items-center gap-1.5 bg-security-dark/70 backdrop-blur-sm text-[10px] font-semibold tracking-wide text-white/90 px-2 py-1 rounded">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              AREA MONITORING · ACTIVE
            </span>
          </div> */}

          {/* Scene 3 - ANPR: detection box sweeping across the right-hand band */}
          {/* <div className="hero-scene-anpr absolute inset-0 hidden md:block">
            <div className="hero-anpr-sweep absolute top-1/2 -translate-y-1/2 right-0 w-24 h-16 border-2 border-primary-glow rounded-md">
              <span className="absolute -top-6 left-0 bg-security-dark/80 backdrop-blur-sm text-[9px] font-semibold tracking-wide text-white/90 px-1.5 py-0.5 rounded whitespace-nowrap">
                PLATE RECOGNIZED
              </span>
            </div>
            <span className="absolute right-[8%] top-[20%] inline-flex items-center gap-1.5 bg-security-dark/70 backdrop-blur-sm text-[10px] font-semibold tracking-wide text-white/90 px-2 py-1 rounded">
              <ScanLine className="w-3 h-3 text-primary-glow" />
              VEHICLE DETECTED
            </span>
          </div> */}

          {/* Scene 4 - Connected intelligence */}
          {/* <div className="hero-scene-connected absolute inset-0 hidden md:block">
            <span className="absolute right-[8%] top-[20%] inline-flex items-center gap-1.5 bg-security-dark/70 backdrop-blur-sm text-[10px] font-semibold tracking-wide text-white/90 px-2 py-1 rounded">
              <Share2 className="w-3 h-3 text-primary-glow" />
              CONNECTED INTELLIGENCE
            </span>
          </div> */}
        </>
      )}

      {/* Persistent scene-label chip, bottom-right */}
      {/* <div className="absolute bottom-6 right-6 hidden sm:inline-flex items-center gap-1.5 bg-security-dark/70 backdrop-blur-sm border border-white/10 text-[11px] font-semibold tracking-wide text-white px-3 py-1.5 rounded-full">
        <ActiveIcon className="w-3.5 h-3.5 text-primary-glow" aria-hidden="true" />
        {reduceMotion ? "Sentinel Intelligence Platform" : scenes[sceneIndex]?.label}
      </div> */}
    </div>
  );
};

export default HeroVideoBackground;
