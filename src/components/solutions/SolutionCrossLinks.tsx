import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getIndustriesForSolution, getCaseStudiesForSolution } from "@/data/crossLinks";

interface SolutionCrossLinksProps {
  solutionSlug: string;
  /** Set false when the page already has its own dedicated case-study writeup, to avoid duplicating that link. */
  showCaseStudies?: boolean;
}

/**
 * "Where this is used, and proof it works" - links a solution page out to the
 * industry pages that deploy it and the case studies that used it, derived
 * from each industry/case study's own relatedSolutionSlugs (no new claims,
 * just surfacing relationships already recorded in the data).
 */
const SolutionCrossLinks = ({ solutionSlug, showCaseStudies = true }: SolutionCrossLinksProps) => {
  const relatedIndustries = getIndustriesForSolution(solutionSlug);
  const relatedCaseStudies = showCaseStudies ? getCaseStudiesForSolution(solutionSlug) : [];

  if (relatedIndustries.length === 0 && relatedCaseStudies.length === 0) return null;

  return (
    <section className="py-16 bg-security-light border-t border-border">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
        {relatedIndustries.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-security-dark mb-5">Industries we deploy this for</h3>
            <div className="flex flex-wrap gap-2">
              {relatedIndustries.map((industry) => (
                <Link
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="px-4 py-2 rounded-full border border-border bg-white hover:border-primary/40 hover:bg-white/60 text-sm font-medium text-security-dark transition-colors"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {relatedCaseStudies.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-security-dark mb-5">Proven in the field</h3>
            <div className="space-y-3">
              {relatedCaseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  to={`/case-studies/${cs.slug}`}
                  className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-border bg-white hover:border-primary/40 transition-colors"
                >
                  <div>
                    <p className="font-semibold text-security-dark group-hover:text-primary transition-colors">
                      {cs.client}
                    </p>
                    <p className="text-sm text-muted-foreground">{cs.title}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionCrossLinks;
