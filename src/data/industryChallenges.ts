/**
 * Sector-specific operational requirements shown on each industry detail page,
 * keyed by industry slug. Kept out of industries.ts because that file is also
 * imported by the header's industries mega menu (mounted on every page) -
 * this content is only needed on the lazy-loaded /industries/:slug route.
 */
export const industryChallenges: Record<string, string[]> = {
  "automotive-ev-mobility": [
    "High vehicle throughput across a limited number of gates, where manual checks can't keep pace with production schedules",
    "Production floors where forklift and pedestrian movement share the same space and safety incidents need to be caught as they happen",
    "Supplier, staff and contractor traffic across large campuses that needs centralised visibility rather than isolated camera feeds",
    "EV-specific facilities - battery handling areas, charging depots - carrying fire-safety and asset-protection needs beyond a standard plant",
  ],
  "manufacturing-industrial": [
    "Continuous, often round-the-clock shift operations where safety monitoring can't rely on manual patrols alone",
    "PPE compliance and hazardous-zone entry that needs to be enforced consistently across every shift, not spot-checked",
    "Forklifts and heavy machinery operating in the same floor space as pedestrians",
    "Large factory footprints where one control room needs visibility across multiple buildings and production lines",
  ],
  "electronics-high-tech": [
    "Campuses that scale into thousands of cameras and hundreds of controlled doors, straining systems designed for smaller sites",
    "Cleanroom and IP-sensitive zones needing stricter, auditable access control than a general factory floor",
    "Integration requirements with existing ERP and production systems rather than a standalone security silo",
    "Network and cabling infrastructure that has to be engineered alongside the security layer, not bolted on afterward",
  ],
  "ports-maritime": [
    "Continuous vehicle and container movement through a limited number of gates, where manual logging can't keep pace",
    "Verifiable vehicle and driver identification needed at every entry and exit point",
    "Large, open perimeters spanning both water-adjacent and land-side boundaries",
    "Physical security and yard/vehicle operations that are often run by separate teams and need a shared view",
  ],
  "airports-aviation": [
    "Zoned environments - landside, terminal, airside - each carrying different access and monitoring requirements",
    "High passenger volumes that require crowd and queue visibility without slowing legitimate movement",
    "Perimeter and airside intrusion risks that need to be detected immediately, not reviewed after the fact",
    "Multiple stakeholders - the airport operator, airlines, ground handlers - sharing the same physical space",
  ],
  "defence-government": [
    "Access that must be independently auditable, not just physically restricted",
    "Sensitivity levels that vary by zone, calling for layered rather than uniform security architecture",
    "Long procurement and compliance cycles that favour proven, integratable systems over one-off installs",
    "Physical security that has to work reliably with minimal dependence on external connectivity",
  ],
  "transportation-metro-rail": [
    "High passenger throughput at stations and platforms, needing crowd and incident visibility in real time",
    "Emergency communication systems that must reach passengers reliably across dispersed station environments",
    "Multi-site operations - many stations, one control centre - that need centralised rather than per-station monitoring",
    "Public-facing assets and infrastructure that require resilient, tamper-aware equipment",
  ],
  "warehousing-logistics": [
    "High-volume vehicle and personnel movement in and out of a facility that's difficult to track manually",
    "Inventory and loading-bay areas where visibility gaps translate directly into shrinkage or safety incidents",
    "Large floor plates that a single guard or fixed camera feed can't realistically cover",
    "Round-the-clock shift operations that need monitoring not dependent solely on staffed hours",
  ],
  "data-centres": [
    "Multiple layers of physical access that must be independently verified, not just badged through one door",
    "Uptime requirements that make environmental and infrastructure monitoring as critical as intrusion detection",
    "Visitor and vendor access that needs to be logged and time-bound rather than open-ended",
    "Zoning between shared and client-restricted areas in colocation environments",
  ],
  healthcare: [
    "Facilities that operate continuously, with public, patient and restricted zones existing side by side",
    "Emergency and ambulance areas that need clear, unobstructed monitoring and access at all times",
    "Asset tracking - trolleys, wheelchairs, equipment - that affects both safety and day-to-day efficiency",
    "Visitor volumes that can spike unpredictably, requiring flexible rather than fixed-capacity monitoring",
  ],
  "commercial-corporate-campuses": [
    "Mixed-use buildings - office, retail, parking - where each zone carries different access requirements",
    "Visitor and contractor traffic that needs to be managed without slowing legitimate employee access",
    "Facility and maintenance operations (HVAC, MEP, housekeeping) often tracked on paper or disconnected tools",
    "Energy and building-system costs that scale with square footage, rewarding centralised management",
  ],
  "fmcg-food-manufacturing": [
    "Hygiene and safety compliance that needs continuous monitoring, not just scheduled audits",
    "PPE and process-adherence checks across large production floors and multiple shifts",
    "Environmental conditions - temperature, air quality - that directly affect product quality and need continuous tracking",
    "Maintenance and asset upkeep that, left on paper, is difficult to audit or predict failures from",
  ],
  "energy-utilities": [
    "Remote or unmanned sites - substations, plants - that need monitoring without a permanent on-site security presence",
    "Perimeters spread across large areas, where intrusion has to be detected early rather than discovered after the fact",
    "Equipment failures or tampering that can cascade into wider outages, raising the cost of delayed detection",
    "Regulatory expectations for continuous, auditable monitoring of critical infrastructure",
  ],
  "smart-cities": [
    "Independently built systems - traffic, surveillance, utilities - that need to operate as one coordinated view",
    "Public spaces where incident detection has to happen without relying on someone watching every feed",
    "Traffic and vehicle volumes that call for automated classification rather than manual observation",
    "Infrastructure spread across many sites, needing centralised command rather than per-site control rooms",
  ],
  "education-campuses": [
    "Open campuses that must stay accessible to students and staff while still controlling who enters",
    "Visitor and parent traffic that spikes at specific times - drop-off, events - and needs to be managed without bottlenecks",
    "Parking and vehicle movement across large sites that benefits from automation rather than manual gate staff",
    "Emergency communication that needs to reach every building on campus, not just a central office",
  ],
};
