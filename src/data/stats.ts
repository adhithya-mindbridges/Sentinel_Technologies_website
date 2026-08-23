import { Users, Building, Handshake, Wrench, MapPin, UsersRound, type LucideIcon } from "lucide-react";

export interface CompanyStat {
  icon: LucideIcon;
  value: string;
  label: string;
  color: "primary" | "accent";
}

/**
 * Single source of truth for Sentinel's trust/scale numbers.
 * Sourced from the company brochure - do not hardcode these elsewhere.
 */
export const companyStats: CompanyStat[] = [
  { icon: Users, value: "500+", label: "Projects", color: "primary" },
  { icon: Wrench, value: "20+", label: "Solutions", color: "accent" },
  { icon: Handshake, value: "60+", label: "Partners", color: "primary" },
  { icon: UsersRound, value: "100+", label: "Associates", color: "accent" },
  { icon: MapPin, value: "50+", label: "Delivery Locations", color: "primary" },
  { icon: Building, value: "14+", label: "Years", color: "accent" },
];

export const getStat = (label: CompanyStat["label"]) =>
  companyStats.find((s) => s.label === label)!;
