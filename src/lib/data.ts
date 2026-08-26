export const navItems = [
  { href: "#product", label: "Product" },
  { href: "#why", label: "Why Shipfront" },
  { href: "#network", label: "Network" },
  { href: "#developers", label: "Developers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#resources", label: "Resources" },
] as const;

export const partners = [
  { name: "Meridian", mark: "M" },
  { name: "Northline", mark: "N" },
  { name: "Helix", mark: "H" },
  { name: "Forge", mark: "F" },
  { name: "Harborline", mark: "Hb" },
  { name: "Atlas Exchange", mark: "Ax" },
] as const;

export const featuredShipment = {
  id: "SF-2408-1187",
  route: "Long Beach → Chicago",
  origin: "Long Beach",
  destination: "Chicago",
  mode: "Intermodal",
  status: "In transit",
  eta: "Aug 28, 09:40",
  risk: "Low",
  owner: "Priya Nandakumar",
};

export const heroEvents = [
  "Container gated out - Long Beach",
  "Customs documents verified",
  "Rail departure confirmed",
];

export const heroTimeline = [
  { label: "Origin pickup", done: true },
  { label: "Port departure", done: true },
  { label: "Rail transfer", done: false, current: true },
  { label: "Final delivery", done: false },
];

export const ports = [
  { id: "lbg", name: "Long Beach", x: 214, y: 248, status: "clear" },
  { id: "lax", name: "Los Angeles", x: 198, y: 262, status: "clear" },
  { id: "chi", name: "Chicago", x: 292, y: 198, status: "transit" },
  { id: "nyc", name: "New York", x: 352, y: 208, status: "clear" },
  { id: "rtm", name: "Rotterdam", x: 528, y: 168, status: "watch" },
  { id: "sha", name: "Shanghai", x: 818, y: 228, status: "clear" },
  { id: "sin", name: "Singapore", x: 786, y: 338, status: "clear" },
] as const;

export const routes = [
  { from: "sha", to: "lbg", key: "transpacific" },
  { from: "lbg", to: "chi", key: "featured" },
  { from: "chi", to: "nyc", key: "domestic" },
  { from: "sin", to: "rtm", key: "asia-eu" },
  { from: "rtm", to: "nyc", key: "transatlantic" },
  { from: "sha", to: "sin", key: "intra-asia" },
] as const;

export const shipments = [
  {
    id: "SF-2408-1187",
    route: "Long Beach → Chicago",
    mode: "Intermodal",
    status: "In transit",
    eta: "Aug 28, 09:40",
    risk: "Low" as const,
    owner: "Priya Nandakumar",
    progress: 62,
  },
  {
    id: "SF-2408-0944",
    route: "Shanghai → Rotterdam",
    mode: "Ocean",
    status: "On vessel",
    eta: "Sep 04, 16:10",
    risk: "Watch" as const,
    owner: "Evan Holt",
    progress: 41,
  },
  {
    id: "SF-2408-1312",
    route: "Singapore → Los Angeles",
    mode: "Ocean",
    status: "Customs",
    eta: "Aug 27, 11:05",
    risk: "Low" as const,
    owner: "Mei Chen",
    progress: 78,
  },
  {
    id: "SF-2408-0771",
    route: "Rotterdam → Chicago",
    mode: "Ocean + rail",
    status: "Exception",
    eta: "Aug 30, 08:20",
    risk: "High" as const,
    owner: "Rafael Ortiz",
    progress: 54,
  },
  {
    id: "SF-2408-1508",
    route: "New York → Chicago",
    mode: "Rail",
    status: "Arrived",
    eta: "Delivered",
    risk: "Low" as const,
    owner: "Priya Nandakumar",
    progress: 100,
  },
];

export const bookingRows = [
  {
    carrier: "Northline Intermodal",
    code: "NLI",
    transit: "4d 6h",
    hours: 102,
    price: 3840,
    reliability: 97.4,
    carbon: 1.8,
    capacity: "Confirmed",
    recommended: true,
    mode: "Intermodal",
  },
  {
    carrier: "Pacific Gate Lines",
    code: "PGL",
    transit: "5d 2h",
    hours: 122,
    price: 3510,
    reliability: 93.1,
    carbon: 2.1,
    capacity: "8 spots",
    recommended: false,
    mode: "Intermodal",
  },
  {
    carrier: "Helix Rail Co",
    code: "HRC",
    transit: "3d 20h",
    hours: 92,
    price: 4295,
    reliability: 98.2,
    carbon: 1.4,
    capacity: "2 spots",
    recommended: false,
    mode: "Rail",
  },
  {
    carrier: "Harborline",
    code: "HBL",
    transit: "6d 4h",
    hours: 148,
    price: 3120,
    reliability: 90.6,
    carbon: 2.6,
    capacity: "Available",
    recommended: false,
    mode: "Truck",
  },
];

export const promptExamples = [
  "Which shipments are most likely to miss their delivery window this week?",
  "Show all containers delayed at Long Beach.",
  "Why did spend increase on our Asia-to-US routes?",
  "Draft customer updates for shipments with high-risk ETAs.",
  "Which carriers had the best on-time performance this quarter?",
];

export const journey = [
  {
    key: "plan",
    title: "Plan",
    copy: "Compare routes, capacity, cost, and confidence.",
  },
  {
    key: "book",
    title: "Book",
    copy: "Commit with carrier and document requirements in view.",
  },
  {
    key: "track",
    title: "Track",
    copy: "Follow milestones, location signals, and ETA changes.",
  },
  {
    key: "resolve",
    title: "Resolve",
    copy: "Turn exceptions into owned, time-bound actions.",
  },
  {
    key: "learn",
    title: "Learn",
    copy: "Use network performance to make the next move better.",
  },
] as const;
