import { industries, type Industry } from "./industries";
import { caseStudies, type CaseStudy } from "./caseStudies";

/**
 * Reverse lookups across the industries/case-studies/solutions data so detail
 * pages can link to related content without duplicating relationships by hand.
 *
 * Deliberately its own module, not part of solutions.ts: solutions.ts is
 * imported by eager, every-page components (Header/Footer/HeroSection), and
 * pulling the full industries/case-studies datasets in there would bloat the
 * shared bundle. These lookups are only used by the already lazy-loaded
 * solution and detail pages.
 */

export const getIndustriesForSolution = (solutionSlug: string): Industry[] =>
  industries.filter((industry) => industry.relatedSolutionSlugs.includes(solutionSlug));

export const getCaseStudiesForSolution = (solutionSlug: string): CaseStudy[] =>
  caseStudies.filter((caseStudy) => caseStudy.relatedSolutionSlugs.includes(solutionSlug));

export const getIndustryForCaseStudy = (caseStudySlug: string): Industry | undefined =>
  industries.find((industry) => industry.caseStudySlugs?.includes(caseStudySlug));
