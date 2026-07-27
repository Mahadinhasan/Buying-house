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

export interface ProductCategory {
  id: string;
  name: string;
  gender: "Men" | "Women" | "Kids" | "Workwear" | "Unisex" | "Fabrics";
  moq: string;
  lead: string;
  swatch: string;
  image: string;
  description: string;
  status: "Published" | "Draft";
}

export const productCategories: ProductCategory[] = [
  {
    id: "CAT-101",
    name: "Men's Woven & Shirts",
    gender: "Men",
    moq: "800 pcs",
    lead: "30–40 days",
    swatch: "#A9822E",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    description: "Premium tailored Oxford shirts, casual button-downs, formal dress shirts, and linen blazers.",
    status: "Published",
  },
  {
    id: "CAT-102",
    name: "Women's Tops & Outerwear",
    gender: "Women",
    moq: "500 pcs",
    lead: "25–35 days",
    swatch: "#C9A94E",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description: "Contemporary women's blouses, knit tops, dresses, trench coats, and sustainable loungewear.",
    status: "Published",
  },
  {
    id: "CAT-103",
    name: "Selvedge Denim & Jeans",
    gender: "Unisex",
    moq: "600 pcs",
    lead: "35–45 days",
    swatch: "#14181F",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    description: "Rope-dyed indigo jeans, trucker jackets, denim overalls, and sustainable wash finishes.",
    status: "Published",
  },
  {
    id: "CAT-104",
    name: "Activewear & Performance",
    gender: "Unisex",
    moq: "500 pcs",
    lead: "25–35 days",
    swatch: "#3F7566",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
    description: "4-way stretch active tops, moisture-wicking leggings, running shorts, and athleisure hoodies.",
    status: "Published",
  },
  {
    id: "CAT-105",
    name: "Kids & Childrenswear",
    gender: "Kids",
    moq: "600 pcs",
    lead: "28–38 days",
    swatch: "#2F5D50",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
    description: "OEKO-TEX certified kidswear, baby rompers, playwear sets, and soft organic cotton basics.",
    status: "Published",
  },
  {
    id: "CAT-106",
    name: "Workwear & Uniforms",
    gender: "Workwear",
    moq: "500 pcs",
    lead: "30–40 days",
    swatch: "#B23A2E",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "Industrial safety garments, corporate uniforms, medical scrubs, and flame-retardant jackets.",
    status: "Published",
  },
  {
    id: "CAT-107",
    name: "Knitwear & Sweaters",
    gender: "Unisex",
    moq: "400 pcs",
    lead: "30–40 days",
    swatch: "#8C4A32",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
    description: "Fine gauge sweaters, heavy knit cardigans, merino wool pullovers, and cozy fleece hoodies.",
    status: "Published",
  },
  {
    id: "CAT-108",
    name: "Mill Fabrics & Trims",
    gender: "Fabrics",
    moq: "300 yds",
    lead: "15–25 days",
    swatch: "#5B6C5D",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    description: "Raw fabric rolls, organic cotton jersey, selvedge denim, technical mesh, and custom trims.",
    status: "Published",
  },
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
  ...p,
  status: i === 2 ? ("Draft" as const) : ("Published" as const),
}));

export const fabricGallery = [
  {
    id: "organic-cotton",
    name: "Organic Cotton Twill",
    category: "Knitwear & Woven",
    gsm: "180 - 240 GSM",
    composition: "100% GOTS Organic Cotton",
    recommendedFor: "T-shirts, Polos, Casual Shirts",
    moq: "300 kg / Color",
    image: "/images/fabrics/organic-cotton.png",
    tags: ["GOTS Certified", "Eco-Dyed", "Combed Yarn"],
    description: "High-count combed organic yarn offering superior breathability and a smooth surface ideal for premium luxury tees and branded casual wear.",
  },
  {
    id: "indigo-denim",
    name: "Selvedge Indigo Denim",
    category: "Denim",
    gsm: "12 - 14.5 oz",
    composition: "98% Cotton, 2% Spandex",
    recommendedFor: "Jeans, Jackets, Denim Overalls",
    moq: "1,200 Yds / Wash",
    image: "/images/fabrics/indigo-denim.png",
    tags: ["Rope-Dyed Indigo", "Ring Spun", "Comfort Stretch"],
    description: "Heavyweight authentic indigo selvedge denim with rich character, slub texture, and durable construction for high-end denim collections.",
  },
  {
    id: "rib-knit",
    name: "Merino & Cotton Rib Knit",
    category: "Sweaters & Knits",
    gsm: "280 - 350 GSM",
    composition: "70% Combed Cotton, 30% Fine Merino Wool",
    recommendedFor: "Cardigans, Sweaters, Beanies",
    moq: "400 pcs / Style",
    image: "/images/fabrics/rib-knit.png",
    tags: ["Thermal Retentive", "Anti-Pilling", "Ribbed Weave"],
    description: "Ultra-soft ribbed structure providing natural insulation, shape recovery, and elevated luxury hand-feel for autumn/winter lines.",
  },
  {
    id: "activewear-mesh",
    name: "Technical Performance Mesh",
    category: "Activewear",
    gsm: "140 - 180 GSM",
    composition: "88% Recycled Polyester, 12% Spandex",
    recommendedFor: "Gym Wear, Running Tees, Sportswear",
    moq: "500 kg / Color",
    image: "/images/fabrics/activewear-mesh.png",
    tags: ["Moisture Wicking", "4-Way Stretch", "Quick Dry"],
    description: "Engineered breathable micro-mesh structure engineered for high-mobility activewear with anti-bacterial and sweat-wicking finish.",
  },
];

export const fabricMillsLogos = [
  {
    name: "Envoy Textiles Ltd.",
    shortName: "Envoy Denim",
    type: "Denim & Woven Mill",
    location: "Bhaluka, Mymensingh",
    certifications: ["LEED Platinum", "OEKO-TEX 100"],
    symbol: "envoy",
  },
  {
    name: "Beximco Textiles",
    shortName: "Beximco",
    type: "Composite Fabric & Yarn",
    location: "Gazipur, Dhaka",
    certifications: ["GOTS Certified", "ISO 9001"],
    symbol: "beximco",
  },
  {
    name: "Square Textiles PLC",
    shortName: "Square",
    type: "Spinning & Knit Fabrics",
    location: "Habiganj & Gazipur",
    certifications: ["BSCI Audited", "SEDEX Ethical"],
    symbol: "square",
  },
  {
    name: "Paramount Textile PLC",
    shortName: "Paramount",
    type: "Yarn Dyed Fabrics",
    location: "Sreepur, Gazipur",
    certifications: ["OEKO-TEX", "WRAP Gold"],
    symbol: "paramount",
  },
  {
    name: "Ha-Meem Denim",
    shortName: "Ha-Meem",
    type: "High-Tech Denim Mill",
    location: "Tongi, Gazipur",
    certifications: ["BSCI Audited", "ISO 14001"],
    symbol: "hameem",
  },
  {
    name: "Viyellatex Fabrics",
    shortName: "Viyellatex",
    type: "Eco Knit & Dyeing",
    location: "Gazipur, Dhaka",
    certifications: ["GOTS Organic", "LEED Gold"],
    symbol: "viyellatex",
  },
  {
    name: "Apex Spinning & Knitting",
    shortName: "Apex Textiles",
    type: "Functional & Knit Fabrics",
    location: "Chandora, Gazipur",
    certifications: ["OEKO-TEX 100", "SEDEX"],
    symbol: "apex",
  },
  {
    name: "Zaber & Yasin Textiles",
    shortName: "Zaber & Yasin",
    type: "Woven & Finishing Mill",
    location: "Narayanganj, Dhaka",
    certifications: ["ISO 9001", "GOTS Certified"],
    symbol: "zy",
  },
];

