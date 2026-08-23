import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import sentinelLogo from "@/assets/sentinel-logo.png";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

const companyLinks = [
  { label: "About Us", path: "/about" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Partners", path: "/partners" },
  { label: "Contact", path: "/contact" },
];

const FooterColumnHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-sm font-display font-semibold uppercase tracking-wide text-white/90 mb-4">
    {children}
  </h3>
);

const FooterLink = ({ children, className, ...props }: React.ComponentProps<typeof Link>) => (
  <Link {...props} className={cn("text-sm text-white/65 hover:text-white transition-colors", className)}>
    {children}
  </Link>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-security-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 sm:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={sentinelLogo} alt="Sentinel Technologies" className="h-9 w-9" />
              <span className="text-lg font-display font-bold">Sentinel Technologies</span>
            </Link>
            <p className="text-sm text-white/65 max-w-xs leading-relaxed">
              Comprehensive ELV and security solutions - from standalone systems to
              fully integrated infrastructure - trusted across industries.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <FooterColumnHeading>Solutions</FooterColumnHeading>
            <ul className="space-y-3">
              <li>
                <FooterLink to="/solutions" className="font-semibold">
                  View All Solutions
                </FooterLink>
              </li>
              {solutions.map((solution) => (
                <li key={solution.path}>
                  <FooterLink to={solution.path}>{solution.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <FooterColumnHeading>Industries</FooterColumnHeading>
            <ul className="space-y-3">
              <li>
                <FooterLink to="/industries" className="font-semibold">
                  View All Industries
                </FooterLink>
              </li>
              {industries.slice(0, 6).map((industry) => (
                <li key={industry.slug}>
                  <FooterLink to={`/industries/${industry.slug}`}>{industry.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <FooterColumnHeading>Company</FooterColumnHeading>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink to={link.path}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterColumnHeading>Get In Touch</FooterColumnHeading>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-security-accent" />
                <span className="text-sm text-white/65 leading-relaxed">
                  No: 51, 2nd Floor, Tower B, Tek Meadows, OMR,
                  Sholinganallur, Chennai, Tamil Nadu 600119
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-security-accent" />
                <a href="tel:+919840906522" className="text-sm text-white/65 hover:text-white transition-colors">
                  +91 98409 06522
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-security-accent" />
                <a href="mailto:info@sentinel-technologies.net" className="text-sm text-white/65 hover:text-white transition-colors">
                  info@sentinel-technologies.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {year} Sentinel Technologies Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Mon - Fri, 8:00 AM - 6:00 PM &middot; 24/7 Emergency Support
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
