import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { ArrowRight, Home } from "lucide-react";
import { solutions } from "@/data/solutions";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-20">
      <SEO
        title="Page Not Found | Sentinel Technologies"
        description="The page you're looking for doesn't exist or has moved."
        noindex
      />
      <div className="text-center max-w-lg">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">404 Error</p>
        <h1 className="text-4xl md:text-5xl font-bold text-security-dark mb-4">Page not found</h1>
        <p className="text-lg text-muted-foreground mb-10">
          The page you're looking for doesn't exist or may have moved. Here are some places to go
          instead.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        <div className="text-left border-t border-border pt-8">
          <p className="text-sm font-semibold text-security-dark mb-3">Popular pages</p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {solutions.map((s) => (
              <li key={s.path}>
                <Link
                  to={s.path}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
