import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  name: string;
  /** Omit for a non-clickable intermediate crumb (e.g. a section with no dedicated route). */
  path?: string;
}

const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className="bg-security-light border-b border-border">
    <div className="container mx-auto px-4 py-3">
      <ol className="flex items-center flex-wrap gap-1.5 text-sm">
        <li className="flex items-center gap-1.5">
          <Link to="/" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
            {i === items.length - 1 || !item.path ? (
              <span className="font-medium text-security-dark" aria-current={i === items.length - 1 ? "page" : undefined}>
                {item.name}
              </span>
            ) : (
              <Link to={item.path} className="text-muted-foreground hover:text-primary transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </div>
  </nav>
);

export default Breadcrumbs;
