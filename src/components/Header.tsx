import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { AnimatePresence } from "framer-motion";
import { Menu, Phone, ChevronDown } from "lucide-react";
import sentinelLogo from "@/assets/sentinel-logo.png";
import MobileMenu from "@/components/MobileMenu";

const loadSolutionsMegaMenu = () => import("@/components/MegaMenu/SolutionsMegaMenu");
const loadIndustriesMegaMenu = () => import("@/components/MegaMenu/IndustriesMegaMenu");
const SolutionsMegaMenu = lazy(loadSolutionsMegaMenu);
const IndustriesMegaMenu = lazy(loadIndustriesMegaMenu);

type MenuId = "solutions" | "industries" | null;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuId>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const prefetch = () => {
      loadSolutionsMegaMenu();
      loadIndustriesMegaMenu();
    };
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(prefetch);
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(prefetch, 200);
    return () => window.clearTimeout(id);
  }, []);

  const openMenu = useCallback((id: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(id);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const closeAll = useCallback(() => setActiveMenu(null), []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const megaNavItems: { id: MenuId; label: string }[] = [
    { id: "solutions", label: "Solutions" },
    { id: "industries", label: "Industries" },
  ];

  return (
    <header
      className={`bg-white sticky top-0 z-50 border-b transition-shadow duration-300 ${
        scrolled ? "shadow-security border-border/60" : "shadow-none border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={sentinelLogo} alt="Sentinel Technologies" className="h-9 w-9" />
            <span className="text-xl font-display font-bold text-security-dark tracking-tight">
              Sentinel Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className={`inline-flex items-center h-10 px-4 text-sm font-medium transition-colors relative ${
                      isActive("/")
                        ? "text-primary after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:rounded-full after:bg-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Solutions / Industries mega menus (custom, hover-driven) */}
            {megaNavItems.map(({ id, label }) => (
              <div
                key={id}
                className="relative"
                onMouseEnter={() => openMenu(id)}
                onMouseLeave={scheduleClose}
              >
                <button
                  aria-expanded={activeMenu === id}
                  aria-haspopup="true"
                  onClick={() => (activeMenu === id ? setActiveMenu(null) : openMenu(id))}
                  className={`inline-flex items-center gap-1 h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
                    activeMenu === id
                      ? "text-primary after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:rounded-full after:bg-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === id ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === id && (
                    <div
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                      className="fixed left-0 right-0 z-50"
                      style={{ top: 64 }}
                    >
                      <Suspense fallback={null}>
                        {id === "solutions" && <SolutionsMegaMenu onClose={closeAll} />}
                        {id === "industries" && <IndustriesMegaMenu onClose={closeAll} />}
                      </Suspense>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    to="/case-studies"
                    className={`inline-flex items-center h-10 px-4 text-sm font-medium transition-colors relative ${
                      isActive("/case-studies")
                        ? "text-primary after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:rounded-full after:bg-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    Case Studies
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/partners"
                    className={`inline-flex items-center h-10 px-4 text-sm font-medium transition-colors relative ${
                      isActive("/partners")
                        ? "text-primary after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:rounded-full after:bg-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    Partners
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/about"
                    className={`inline-flex items-center h-10 px-4 text-sm font-medium transition-colors relative ${
                      isActive("/about")
                        ? "text-primary after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:rounded-full after:bg-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center h-10 px-4 text-sm font-medium transition-colors relative ${
                      isActive("/contact")
                        ? "text-primary after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:rounded-full after:bg-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button asChild className="hidden md:flex">
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((v) => !v)}
            >
              <Menu className="w-4 h-4" />
            </Button>
            <MobileMenu open={isOpen} onOpenChange={setIsOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
