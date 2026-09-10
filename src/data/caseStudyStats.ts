/**
 * Lightweight, standalone summary stats for case studies - kept separate from
 * caseStudies.ts (which pulls in every case study's full text and imagery) so
 * that components shown on every page (e.g. the header's industries mega
 * menu) don't force that entire dataset into the shared JS bundle.
 *
 * The project count is hardcoded rather than derived from caseStudies.length -
 * update it here if a case study is added or removed.
 */
export const enterpriseScaleStats = [
  { value: "10,000+", label: "Cameras Across Featured Deployments" },
  { value: "10M+", label: "Metres of CAT6 Infrastructure" },
  { value: "14", label: "Enterprise-Scale Projects Featured" },
];

export const technologyStrip = [
  "CCTV",
  "AI",
  "VMS",
  "Access Control",
  "Gate Automation",
  "RFID",
  "ANPR",
  "Data Centre",
  "Structured Cabling",
  "Command & Control",
];
