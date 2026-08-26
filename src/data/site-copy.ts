export const site = {
  name: "Shipfront",
  url: "https://www.myshipfront.com",
  email: "info@myshipfront.com",
  addressLine: "1933 S. Broadway, Los Angeles CA 90007",
  address: {
    name: "Shipfront",
    street: "1933 S. Broadway",
    cityLine: "Los Angeles, CA 90007",
  },
  hours: {
    weekdays: "Monday – Friday: 9 am – 5 pm",
    weekend: "Saturday – Sunday: Appointment only",
  },
  footerLine: "1933 S. Broadway, Los Angeles CA 90007 | info@myshipfront.com",
} as const;

export const hero = {
  eyebrow: "Warehousing & Fulfillment Solutions",
  headlineLine1: "You Sell. We Ship.",
  headlineLine2: "eCommerce at Scale",
  headline: "You Sell. We Ship. eCommerce at Scale",
  body: "Shipfront helps eCommerce merchants scale by taking care of their logistics needs, so that they can focus on growing their business.",
} as const;

export const customerSuccess = {
  copy: "Customer-success is our obsession, with dedicated account managers for every merchant and industry-leading capabilities across temperature control, same-day delivery, FBA prep, and much more.",
} as const;

export const services = {
  warehousing: {
    title: "WAREHOUSING",
    copy: "Our warehouses provide the necessary space, security, temperature-control, and FDA compliant capabilities to store your products before shipping them to customers. Our inventory management system tracks all items across every SKU to know where they are located, how long they have been there, and the quantity on hand. We actively forecast inventory demand to keep your supply chain running optimally.",
  },
  fulfillment: {
    title: "FULFILLMENT",
    copy: "We build custom workflows to pick, pack, label, and ship your products exactly how you would like. That means working with any carrier across traditional partners, as well as the most innovative companies in last-mile and same-day delivery. We get your products to your customers, quickly and accurately.",
    capabilities:
      "Inbound | Kitting | Storage | FBA Prep | Outbound | Last-Mile Delivery | Same-Day Delivery",
  },
  integrations: {
    title: "ECOMMERCE INTEGRATIONS",
    copy: "Shipfront is built on the Flowspace Warehouse Management System (WMS) - an innovative software solution for managing the needs of today’s warehousing & fulfillment operations. Through the WMS, Shipfront integrates with partners across the supply chain ecosystem - from eCommerce platforms to same-day delivery services.",
  },
  location: {
    title: "LOCATION IS EVERYTHING",
    copy: "Situated in downtown L.A., next to the 10, 110, and 101 freeways - Shipfront is perfectly positioned to serve your eCommerce business. Not only do we inbound your products efficiently, we also deliver them quickly to your customers through our strong carrier and same-day delivery integrations.",
    note: "Easy access to interstate freeways, courier depots, train stations, and airports",
  },
} as const;

export const capabilityList = [
  "Inbound",
  "Kitting",
  "Storage",
  "FBA Prep",
  "Outbound",
  "Last-Mile Delivery",
  "Same-Day Delivery",
] as const;

export const howItWorks = {
  headline: "Fulfillment looks and feels complicated, but Shipfront will make it easy!",
  steps: [
    { title: "Find a cool product" },
    { title: "Get it manufactured" },
    { title: "Ship inventory from supplier to Shipfront" },
    { title: "Shipfront receives and inventories" },
    { title: "Integrate sales channels" },
    { title: "We ship" },
    { title: "Happy Customers!" },
  ],
} as const;

export const quote = {
  title: "Fast & Easy Quotes",
  body: "Please take a moment to give us some information. We have expert agents standing by to take care of your logistics needs.",
  submit: "Send",
  success:
    "Thank you for your interest, one of our agent will reach out to you shortly!",
  cta: "Get a Quote",
} as const;

export const contactPage = {
  title: "Call or Visit Us Today",
} as const;

export const about = {
  headline:
    "We rely on core values to build a strong business culture and achieve our visions for the future",
  body: "There are a lot of companies that do what we do. They share the same what and how, but our partners work with us for our why and our who. We are your partners with a proven business sense, set out to provide you with what matters most — getting your product into your customers hands on time and on budget. And we spend each day doing so by sharpening the tools of our trade and constantly evolving and improving.",
  valuesTitle: "Core Company Values",
  values: [
    {
      title: "Safety",
      copy: "Our worker safety will always be our first priority. We will proactively reach out to team members to understand how we can make improvements and will operate at the highest compliance standards.",
    },
    {
      title: "Adaptability",
      copy: "In an ever-changing ecosystem, we will be able to adapt to disruption in any form. We will respond to changes quickly and methodically, driving the business forward under any circumstances.",
    },
    {
      title: "Growth Mindset",
      copy: "We will consistently explore new ways to improve and expand business, while prioritizing long-term values over short-term returns.",
    },
    {
      title: "Data-driven Decisioning",
      copy: "We will create detailed documentation and capture critical data points in organized, scalable solutions to iteratively evaluate business choices and arrive at the strongest decisions.",
    },
  ],
} as const;

export const partners = {
  title: "Partners",
  intro: "Our partners are extremely important and help us accomplish our goals.",
  ctaTitle: "Become a Partner",
  ctaBody:
    "If you would like to partner with us, fill out the form below and one of our staff members will get back to you.",
} as const;

export const quoteFields = [
  { id: "name-yui_3_17_2_1_1555014059115_8407", name: "name", title: "Name", type: "name", required: true },
  { id: "email-yui_3_17_2_1_1555014059115_8408", name: "email", title: "Email", type: "email", required: true },
  { id: "phone-yui_3_17_2_1_1561411592099_24888", name: "phone", title: "Phone", type: "phone", required: true },
  { id: "text-yui_3_17_2_1_1597780632049_37722", name: "company", title: "Company Name", type: "text", required: false },
  { id: "website-yui_3_17_2_1_1597780632049_38392", name: "website", title: "Website", type: "website", required: false },
  { id: "textarea-yui_3_17_2_1_1597780632049_40579", name: "product", title: "Product Description", type: "textarea", required: false },
  { id: "number-yui_3_17_2_1_1597780632049_41244", name: "skus", title: "Number of SKUs", type: "number", required: false },
  { id: "number-yui_3_17_2_1_1597780632049_41907", name: "shipments", title: "Shipments per Month", type: "number", required: false },
  { id: "number-yui_3_17_2_1_1597780632049_42571", name: "turns", title: "Turns per Month", type: "number", required: false },
  { id: "textarea-yui_3_17_2_1_1597780632049_43237", name: "additional", title: "Additional Information", type: "textarea", required: false },
] as const;

export const squarespaceForm = {
  formId: "5f3c378e2566e9145f1cafcb",
  collectionId: "5f2c55b008bdc2593378edc7",
  endpoint: "https://shipfront.squarespace.com/api/form/SaveFormSubmission",
} as const;

export const network = {
  heading: "How Shipfront moves with you",
  visualName: "SHIPFRONT NETWORK",
  workflowLabel: "ILLUSTRATIVE WORKFLOW",
  nodes: [
    { id: "store", label: "STORE", copy: "Integrate sales channels" },
    { id: "inventory", label: "INVENTORY", copy: "Shipfront receives and inventories." },
    { id: "fulfillment", label: "FULFILLMENT", copy: "We build custom workflows to pick, pack, label, and ship your products exactly how you would like." },
    { id: "quality", label: "QUALITY CHECK", copy: "We get your products to your customers, quickly and accurately." },
    { id: "carrier", label: "CARRIER", copy: "Working with any carrier across traditional partners, as well as the most innovative companies in last-mile and same-day delivery." },
    { id: "customer", label: "CUSTOMER", copy: "Happy Customers!" },
  ],
  statuses: [
    "ORDER SIGNAL RECEIVED",
    "INVENTORY RESERVED",
    "PICK LIST CREATED",
    "LABEL GENERATED",
    "FULFILLMENT COMPLETE",
  ],
} as const;

export const flowLabels = [
  "ORDER RECEIVED",
  "INVENTORY ALLOCATED",
  "PICKING",
  "PACKED",
  "IN TRANSIT",
  "DELIVERED",
] as const;
