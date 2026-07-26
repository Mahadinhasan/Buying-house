export const company = {
  name: "Demo",
  shortName: "Demo Company name",
  founded: 2011,
  tagline: "Precision sourcing, tag to shipment.",
  city: "Dhaka, Bangladesh",
  whatsappNumber: "8801700000000", // demo number, no country + or leading 0s per wa.me format
  whatsappMessage: "Hello Demo, I'd like to discuss a sourcing order.",
  email: "demo.info@gmail.com",
  phone: "018xxxxxxxxxxx",
  address: "Address Demo",
};

export const certifications = [
  { code: "BSCI", label: "Business Social Compliance" },
  { code: "WRAP", label: "Worldwide Responsible Accredited Production" },
  { code: "ISO 9001", label: "Quality Management" },
  { code: "SEDEX", label: "Ethical Trade Audit" },
  { code: "OEKO-TEX", label: "Standard 100 Fabric Safety" },
  { code: "GOTS", label: "Organic Textile Standard" },
];

export const stats = [
  { value: "40+", label: "Vetted factory partners" },
  { value: "18", label: "Countries shipped to" },
  { value: "2.4M", label: "Units produced / yr" },
  { value: "13", label: "Years in operation" },
];

export const process = [
  {
    step: "01",
    title: "Sourcing & Design",
    desc: "We translate your tech pack and moodboard into a shortlist of mills and trims that hit your price and quality target.",
  },
  {
    step: "02",
    title: "Sampling & Costing",
    desc: "Proto, fit, and PP samples move between factory and buyer with full costing transparency at every round.",
  },
  {
    step: "03",
    title: "Production Management",
    desc: "A dedicated merchandiser tracks the line daily — fabric in-house, cutting, sewing, and finishing — against your critical path.",
  },
  {
    step: "04",
    title: "Quality Control",
    desc: "In-line and final AQL inspections by our own QC team, independent of the factory, before anything ships.",
  },
  {
    step: "05",
    title: "Logistics & Shipping",
    desc: "Documentation, freight booking, and customs handling for sea, air, or rail — delivered DDP or FOB, your choice.",
  },
];

export const productCategories = [
  { name: "Knitwear", moq: "500 pcs", lead: "25–35 days", swatch: "#2F5D50" },
  { name: "Woven Shirts", moq: "800 pcs", lead: "30–40 days", swatch: "#A9822E" },
  { name: "Denim", moq: "600 pcs", lead: "35–45 days", swatch: "#14181F" },
  { name: "Sweaters", moq: "400 pcs", lead: "30–40 days", swatch: "#B23A2E" },
  { name: "Activewear", moq: "500 pcs", lead: "25–35 days", swatch: "#3F7566" },
  { name: "Kidswear", moq: "600 pcs", lead: "28–38 days", swatch: "#C9A94E" },
];

export const factories = [
  { name: "Greenway Textiles Ltd.", location: "Gazipur", specialty: "Knitwear & Activewear", workers: 2200 },
  { name: "Delta Apparel Group", location: "Narayanganj", specialty: "Woven Shirts & Trousers", workers: 1800 },
  { name: "Chattogram Denim Works", location: "Chattogram", specialty: "Denim & Bottoms", workers: 2600 },
  { name: "Northern Knit Composite", location: "Savar", specialty: "Sweaters & Fleece", workers: 1500 },
];

export const team = [
  { name: "Farah Islam", role: "Founder & Managing Director", initials: "FI" },
  { name: "Rakib Hasan", role: "Head of Compliance", initials: "RH" },
  { name: "Nusrat Jahan", role: "Merchandising Manager", initials: "NJ" },
  { name: "Tanvir Ahmed", role: "Quality Control Lead", initials: "TA" },
  { name: "Sadia Karim", role: "Logistics & Shipping Lead", initials: "SK" },
  { name: "Imran Chowdhury", role: "Costing & Sourcing Lead", initials: "IC" },
];

export const testimonials = [
  {
    quote:
      "Demo Company name caught a fabric shading issue before our final inspection and re-ran the batch without us losing our ship date.",
    author: "Sourcing Manager",
    company: "Nordreise Apparel, Sweden",
  },
  {
    quote:
      "Their merchandising team answers within the hour, even across the time difference. We stopped worrying about our Dhaka production.",
    author: "Head of Production",
    company: "Fielding & Co., United Kingdom",
  },
  {
    quote:
      "Three years, six factories, zero missed shipments. That track record is why we consolidated all our knitwear through them.",
    author: "VP Supply Chain",
    company: "Harlow Basics, Canada",
  },
];

export const blogPosts = [
  {
    title: "What Buyers Should Know About the 2026 EU Due Diligence Rules",
    excerpt:
      "A practical breakdown of the upcoming compliance documentation brands will need from their Bangladesh suppliers.",
    date: "2026-06-02",
    tag: "Compliance",
  },
  {
    title: "Inside a Pre-Production Meeting: What We Check Before Cutting Starts",
    excerpt:
      "The checklist our merchandisers run through before a single roll of fabric is cut, and why it prevents 90% of line issues.",
    date: "2026-05-14",
    tag: "Production",
  },
  {
    title: "Recycled Cotton Blends: Costing Reality vs. the Marketing",
    excerpt:
      "Where recycled-blend fabrics genuinely save cost at scale, and where they quietly add it back through wastage.",
    date: "2026-04-22",
    tag: "Sourcing",
  },
];

export const inquiries = [
  {
    id: "INQ-2417",
    name: "Elin Karlsson",
    company: "Nordreise Apparel",
    channel: "WhatsApp",
    subject: "Knitwear costing for FW26",
    received: "2026-07-24",
    status: "New",
  },
  {
    id: "INQ-2416",
    name: "James Whitfield",
    company: "Fielding & Co.",
    channel: "Email",
    subject: "PP sample approval — Style DW-114",
    received: "2026-07-23",
    status: "In progress",
  },
  {
    id: "INQ-2415",
    name: "Marc Dubois",
    company: "Atelier Rive",
    channel: "Website form",
    subject: "New factory audit request",
    received: "2026-07-22",
    status: "Resolved",
  },
  {
    id: "INQ-2414",
    name: "Priya Nair",
    company: "Harlow Basics",
    channel: "WhatsApp",
    subject: "Shipment delay — container CNTR-8827",
    received: "2026-07-21",
    status: "In progress",
  },
];

export const adminProducts = productCategories.map((p, i) => ({
  id: `SKU-${1000 + i}`,
  ...p,
  status: i === 2 ? "Draft" : "Published",
}));
