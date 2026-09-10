/**
 * Substantive, generic domain content for each solution page - the operational
 * problem the solution category addresses, and practical considerations that
 * come up when planning a deployment. This is standard security/ELV/IT
 * industry knowledge (not claims about a specific Sentinel project, and not
 * fabricated statistics), kept in its own file so it's only pulled into the
 * already lazy-loaded solution pages that need it, not the eager shared
 * bundle (solutions.ts itself is imported by the header/footer).
 */
export interface SolutionContent {
  /** The operational problem this solution category addresses - why a facility needs it, not a feature list. */
  challenges: string[];
  /** Practical things to plan for when scoping or installing this kind of system. */
  considerations: string[];
}

export const solutionContent: Record<string, SolutionContent> = {
  cctv: {
    challenges: [
      "Incidents are often discovered after the fact from recorded footage rather than caught as they happen",
      "Blind spots and low-light conditions leave gaps that a single camera type can't close",
      "Growing camera counts create storage and bandwidth demands that outpace typical office IT infrastructure",
      "Multiple buildings or sites need one consolidated view, not per-site recorders nobody actually watches",
    ],
    considerations: [
      "Camera placement and lens choice depend on lighting, distance and whether identification (faces, plates) or general awareness is the goal",
      "Storage (local NVR, cloud, or hybrid) needs to be sized to camera count, resolution and required retention period",
      "Network bandwidth and PoE power budget should be planned before rollout, especially for 4K or high camera-count sites",
      "Integration with access control and analytics is far easier when planned at design time than retrofitted later",
    ],
  },
  "access-control": {
    challenges: [
      "Physical keys can't be revoked remotely or limited to specific hours - a lost key is a standing risk until locks change",
      "Shared PIN pads or logins make it impossible to know who actually passed through a door",
      "Contractors, visitors and short-term staff often need access without inheriting a permanent credential",
      "Facilities with multiple zones - server rooms, labs, executive floors - need different rules per area, not one blanket policy",
    ],
    considerations: [
      "Credential type - card, biometric, mobile - should match the sensitivity of each zone rather than being uniform site-wide",
      "Door hardware (electric strikes, maglocks, turnstiles) needs to satisfy fire-egress and building-code requirements",
      "Integration with CCTV and visitor management multiplies the value of an access log beyond just entry and exit",
      "Fail-safe behaviour during a power or network outage needs to be defined before installation, not after an incident",
    ],
  },
  "fire-alarm": {
    challenges: [
      "Manual fire watches and unmonitored detectors delay response exactly when speed matters most",
      "Different areas - server rooms, kitchens, warehouses - face different fire risks a single detector type can't reliably cover",
      "False alarms from poorly zoned or poorly maintained systems erode trust and can lead to alarms being ignored",
      "A life-safety system that isn't centrally monitored can develop a fault that goes unnoticed between inspections",
    ],
    considerations: [
      "Detector type - smoke, heat, flame, aspirating - needs to match the specific risk profile of each zone",
      "Integration with building automation lets a fire event trigger HVAC shutdown, door release and evacuation messaging automatically",
      "Local fire code and NBC/NFPA-aligned design requirements shape zoning, panel placement and cabling",
      "Routine testing and monitoring plans should be defined at handover, not treated as an afterthought",
    ],
  },
  "public-address": {
    challenges: [
      "Emergency announcements that aren't clearly audible in every zone put people at risk during an evacuation",
      "Manually paging each zone during an incident wastes time a pre-configured system would save",
      "Background-music and paging systems installed separately create redundant wiring and control points",
      "Facilities without zone control can't target a message to one area without alarming the whole building",
    ],
    considerations: [
      "Speaker placement and zoning need to account for ambient noise levels and room acoustics, not just floor area",
      "Integration with the fire alarm system allows automatic evacuation messaging without manual intervention",
      "Amplifier and cabling capacity should be sized for the facility's full zone count, not just the initial rollout",
      "Message priority - emergency override versus background audio - needs to be defined in the system design",
    ],
  },
  "building-automation": {
    challenges: [
      "Facility, maintenance and asset data often live in spreadsheets or separate tools that don't talk to each other",
      "Reactive maintenance - fixing things after they break - costs more than scheduled, usage-based upkeep",
      "Facility managers lack real-time visibility across multiple buildings or sites from a single dashboard",
      "Manual attendance, invoicing and reporting processes are slow to compile and easy to get wrong",
    ],
    considerations: [
      "Which modules to enable - operations, facility, field services, preventive maintenance, asset management - depends on current processes and pain points",
      "Integration with existing HVAC, energy and access-control systems determines how much data the platform can surface automatically",
      "Rollout is usually staged by site or module rather than a single switch-over to a new tool",
      "User roles and permissions need to reflect who actually manages each part of a facility, not a one-size-fits-all login",
    ],
  },
  "it-infrastructure": {
    challenges: [
      "Security and automation systems are only as reliable as the network and cabling carrying their data",
      "Ad-hoc cabling added over time becomes difficult to trace, maintain or expand without a structured plan",
      "Undersized network capacity becomes a bottleneck once camera counts or connected devices scale up",
      "Server rooms without proper cabling standards make troubleshooting and future upgrades slower and riskier",
    ],
    considerations: [
      "Cabling standard - Cat6, Cat6A, fibre - should be chosen against projected bandwidth needs, not just current requirements",
      "Structured cabling and labelling at install time saves significant troubleshooting time later",
      "Network segmentation between security systems and general IT traffic reduces risk and improves performance",
      "Power planning - PoE budget, UPS backup - needs to happen alongside cabling, not as a separate afterthought",
    ],
  },
  "gate-automation": {
    challenges: [
      "Manual vehicle logging at gates creates delay and an inconsistent, often incomplete record of who entered and left",
      "High vehicle throughput at a single gate creates queues when identification depends on a person checking each vehicle",
      "Facilities can't reliably distinguish authorised from unauthorised vehicles without an automated identification layer",
      "Paper or spreadsheet gate logs are difficult to audit after the fact",
    ],
    considerations: [
      "RFID versus ANPR - or both - depends on whether vehicles can carry a tag or need passive plate-based recognition",
      "Boom barriers and physical gate hardware need to be sized for the vehicle types and traffic volume at each entry point",
      "Integration with existing access-control and visitor-management systems avoids a separate, disconnected vehicle log",
      "Manual backup procedures should be defined for power or network outages so gates don't become a bottleneck",
    ],
  },
  "ai-video-analytics": {
    challenges: [
      "Recorded CCTV footage is typically reviewed only after an incident, not monitored for one in real time",
      "Manually reviewing hours of video for a specific event is slow and easy to miss details in",
      "Safety violations - PPE, restricted-zone entry, forklift-pedestrian conflicts - often go undetected until an incident occurs",
      "Manual vehicle and people counting doesn't scale across large sites or multiple shifts",
    ],
    considerations: [
      "Analytics accuracy depends on camera placement, angle and lighting - not every existing camera is suitable without adjustment",
      "Compute location - on-camera, on-premise server, or cloud - needs to be sized to the number of analysed streams and required latency",
      "Alert routing (who gets notified, and how) should be defined before go-live so detections translate into real response",
      "Analytics can typically be layered onto existing camera infrastructure, though very old or low-resolution cameras may need replacing",
    ],
  },
  vms: {
    challenges: [
      "Multiple camera brands and models on one site are difficult to manage without a unified viewing and control layer",
      "Growing multi-site operations struggle to centralise monitoring without a platform built for it",
      "Ad-hoc recording setups make footage hard to search and retrieve quickly when it's actually needed",
      "Adding AI analytics to a fragmented camera setup is difficult without a VMS layer to plug them into",
    ],
    considerations: [
      "ONVIF compatibility and multi-brand support should be verified against the facility's existing camera estate",
      "Server and storage architecture - centralised versus distributed - depends on site count and available inter-site bandwidth",
      "User roles and permissions need to reflect who should see which cameras across a multi-site deployment",
      "Integration points - access control, analytics, command centre - are best planned before rollout to avoid rework later",
    ],
  },
  "sentinel-x-labs": {
    challenges: [
      "Large or hard-to-access areas - perimeters, rooftops, remote sites - are difficult to monitor with fixed cameras alone",
      "Manual inspection of hazardous or hard-to-reach infrastructure puts personnel at risk",
      "Underwater or submerged infrastructure is largely invisible to conventional surveillance systems",
      "Periodic manual patrols can't provide the continuous, real-time coverage critical sites increasingly need",
    ],
    considerations: [
      "Regulatory approval and flight planning are required before any drone deployment in Indian airspace",
      "Fixed-wing versus multi-rotor choice depends on coverage area, required flight duration and site layout",
      "Edge AI processing on the platform reduces dependence on constant high-bandwidth connectivity back to a command centre",
      "Integration with a facility's existing command-and-control centre determines how the data actually gets used day to day",
    ],
  },
};
