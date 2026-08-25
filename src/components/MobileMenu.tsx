import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { X, Phone, Mail, ArrowRight, type LucideIcon, Cctv } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import sentinelLogo from "@/assets/sentinel-logo.png";
import xlabsIcon from "@/assets/xlabs/xlabs-icon.png";
import LogoMotif from "@/components/graphics/LogoMotif";
import { industries } from "@/data/industries";
import {
  BrainCircuit,
  Boxes,
  Fingerprint,
  ScanLine,
  ShieldCheck,
  Flame,
  Volume2,
  Activity,
  Server,
} from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Feature {
  icon: LucideIcon;
  label: string;
  href: string;
}

const solutionGroups: { label: string; features: Feature[] }[] = [
  {
    label: "Video & Intelligence",
    features: [
      { icon: Cctv, label: "CCTV & Video Surveillance", href: "/solutions/cctv" },
      { icon: BrainCircuit, label: "A.I - Video Analytics", href: "/solutions/ai-video-analytics" },
      { icon: Boxes, label: "VMS - Video Management", href: "/solutions/vms" },
    ],
  },
  {
    label: "Access & Perimeter",
    features: [
      { icon: Fingerprint, label: "Access Control & Identity", href: "/solutions/access-control" },
      { icon: ScanLine, label: "RFID & ANPR Gate Automation", href: "/solutions/gate-automation" },
      { icon: Flame, label: "Fire Detection & Life Safety", href: "/solutions/fire-alarm" },
    ],
  },
  {
    label: "Communication & Operations",
    features: [
      { icon: Volume2, label: "Public Address & Voice Alarm", href: "/solutions/public-address" },
      { icon: Activity, label: "TraqOPS - Building & Operations", href: "/solutions/building-automation" },
    ],
  },
  {
    label: "Digital Infrastructure",
    features: [
      { icon: Server, label: "Data Centre & IT Infrastructure", href: "/solutions/it-infrastructure" },
    ],
  },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { x: "100%", transition: { duration: 0.28, ease: [0.4, 0, 1, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
};

const staggerItem = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
};

const MobileMenu = ({ open, onOpenChange }: MobileMenuProps) => {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const isActive = (path: string) => location.pathname === path;
  const close = () => onOpenChange(false);

  const topLinks = [
    { label: "Case Studies", path: "/case-studies" },
    { label: "Partners", path: "/partners" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                variants={reduceMotion ? undefined : overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 z-[60] bg-security-dark/70 backdrop-blur-sm lg:hidden"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount id="mobile-menu" className="lg:hidden">
              <motion.div
                variants={reduceMotion ? undefined : panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-y-0 right-0 z-[60] w-full sm:w-[380px] bg-white flex flex-col overflow-hidden"
              >
                <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>
                <Dialog.Description className="sr-only">
                  Sentinel Technologies site navigation
                </Dialog.Description>

                {/* Faint brand geometry watermark */}
                <LogoMotif className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 text-primary/[0.04]" />

                {/* Header */}
                <div
                  className="flex items-center justify-between px-5 border-b border-border flex-shrink-0"
                  style={{ paddingTop: "max(1rem, env(safe-area-inset-top))", paddingBottom: "1rem" }}
                >
                  <Link to="/" onClick={close} className="flex items-center gap-2.5">
                    <img src={sentinelLogo} alt="Sentinel Technologies" className="h-8 w-8" />
                    <span className="text-base font-display font-bold text-security-dark tracking-tight">
                      Sentinel Technologies
                    </span>
                  </Link>
                  <Dialog.Close asChild>
                    <button
                      aria-label="Close menu"
                      className="flex items-center justify-center w-11 h-11 rounded-full border border-border text-security-dark hover:bg-security-light active:scale-95 transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                </div>

                {/* Scrollable nav */}
                <motion.nav
                  variants={reduceMotion ? undefined : staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex-1 overflow-y-auto px-5 py-3 relative"
                  aria-label="Primary"
                >
                  <motion.div variants={reduceMotion ? undefined : staggerItem}>
                    <Link
                      to="/"
                      onClick={close}
                      className="flex items-center gap-3 py-2.5 group"
                    >
                      <span className="font-mono text-xs text-primary/50 w-6 flex-shrink-0">01</span>
                      <span className={`text-lg font-display font-semibold flex-1 ${isActive("/") ? "text-primary" : "text-security-dark group-active:text-primary"}`}>
                        Home
                      </span>
                      {isActive("/") && <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />}
                    </Link>
                  </motion.div>

                  {/* Solutions accordion */}
                  <motion.div variants={reduceMotion ? undefined : staggerItem}>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="solutions" className="border-none">
                        <AccordionTrigger className="py-2.5 hover:no-underline [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-primary">
                          <span className="flex items-center gap-3">
                            <span className="font-mono text-xs text-primary/50 w-6 flex-shrink-0">02</span>
                            <span className="text-lg font-display font-semibold text-security-dark">Solutions</span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pl-9 pb-2">
                          <div className="space-y-4">
                            {solutionGroups.map((group) => (
                              <div key={group.label}>
                                <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground mb-1.5">
                                  {group.label}
                                </p>
                                <div className="space-y-0.5">
                                  {group.features.map((f) => (
                                    <Link
                                      key={f.label}
                                      to={f.href}
                                      onClick={close}
                                      className="flex items-center gap-2.5 py-2 text-sm text-security-dark/85 hover:text-primary transition-colors"
                                    >
                                      <f.icon className="w-4 h-4 text-primary/70 flex-shrink-0" />
                                      {f.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}

                            {/* X-Labs - featured, not nested under any group */}
                            <Link
                              to="/solutions/sentinel-x-labs"
                              onClick={close}
                              className="flex items-center gap-2.5 mt-2 px-3 py-2.5 rounded-xl bg-security-dark text-white"
                            >
                              <img src={xlabsIcon} alt="" className="w-5 h-5 flex-shrink-0" />
                              <span className="text-sm font-semibold flex-1">Sentinel X-Labs</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                            </Link>

                            <Link
                              to="/solutions"
                              onClick={close}
                              className="flex items-center gap-1 text-sm font-semibold text-primary pt-1"
                            >
                              View All Products &amp; Solutions <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </motion.div>

                  {/* Industries accordion */}
                  <motion.div variants={reduceMotion ? undefined : staggerItem}>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="industries" className="border-none">
                        <AccordionTrigger className="py-2.5 hover:no-underline [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-primary">
                          <span className="flex items-center gap-3">
                            <span className="font-mono text-xs text-primary/50 w-6 flex-shrink-0">03</span>
                            <span className="text-lg font-display font-semibold text-security-dark">Industries</span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pl-9 pb-2">
                          <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                            {industries.map((industry) => (
                              <Link
                                key={industry.slug}
                                to={`/industries/${industry.slug}`}
                                onClick={close}
                                className="py-2 text-sm text-security-dark/85 hover:text-primary transition-colors truncate"
                              >
                                {industry.name}
                              </Link>
                            ))}
                          </div>
                          <Link
                            to="/industries"
                            onClick={close}
                            className="flex items-center gap-1 text-sm font-semibold text-primary pt-2"
                          >
                            View All Industries <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </motion.div>

                  {topLinks.map((link, i) => (
                    <motion.div key={link.path} variants={reduceMotion ? undefined : staggerItem}>
                      <Link
                        to={link.path}
                        onClick={close}
                        className="flex items-center gap-3 py-2.5 group"
                      >
                        <span className="font-mono text-xs text-primary/50 w-6 flex-shrink-0">
                          {String(i + 4).padStart(2, "0")}
                        </span>
                        <span className={`text-lg font-display font-semibold flex-1 ${isActive(link.path) ? "text-primary" : "text-security-dark group-active:text-primary"}`}>
                          {link.label}
                        </span>
                        {isActive(link.path) && <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>

                {/* Bottom: CTA + contact */}
                <motion.div
                  initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.4 }}
                  className="flex-shrink-0 border-t border-border px-5 pt-4 relative"
                  style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
                >
                  <Link
                    to="/contact"
                    onClick={close}
                    className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg py-3 transition-colors active:scale-[0.98]"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="flex items-center justify-center gap-5 mt-4">
                    <a href="tel:+919840906522" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                      +91 98409 06522
                    </a>
                    <a href="mailto:info@sentinel-technologies.net" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                      Email Us
                    </a>
                  </div>

                  <p className="text-center text-[11px] text-muted-foreground/70 mt-4">
                    &copy; {new Date().getFullYear()} Sentinel Technologies
                  </p>
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default MobileMenu;
