"use client";

import { useState, useEffect } from "react";
import {
  company as initialCompany,
  process as initialProcess,
  team as initialTeam,
  certifications as initialCerts,
  stats as initialStats,
  productCategories as initialCategories,
  blogPosts as initialBlogPosts,
  inquiries as initialInquiries,
  fabricMillsLogos as initialMills,
  fabricGallery as initialFabrics,
  ProductCategory,
} from "./data";

export interface BrandingConfig {
  name: string;
  shortName: string;
  tagline: string;
  founded: number;
  city: string;
  logoType: "icon" | "image" | "text";
  logoUrl: string;
  logoIcon: "Stamp" | "Shirt" | "Scissors" | "Layers" | "Sparkles" | "Crown" | "Gem" | "Factory" | "Shield" | "Globe";
  adminTitle: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  phone: string;
  address: string;
  officeHours: string;
  mapLabel: string;
}

export interface ThemeColorsConfig {
  activePreset: string;
  loom: string;
  loomLight: string;
  loomDark: string;
  brass: string;
  brassLight: string;
  brassDark: string;
  stamp: string;
  stampLight: string;
  canvas: string;
  paper: string;
  ink: string;
}

export interface ProcessStep {
  id?: string;
  step: string;
  title: string;
  desc: string;
  tag?: string;
}

export interface AddOnService {
  id: string;
  title: string;
  desc: string;
  tag: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  avatar?: string;
  bio?: string;
  email?: string;
}

export interface CoreValue {
  id: string;
  title: string;
  desc: string;
}

export interface Milestone {
  id: string;
  year: string;
  text: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface CertItem {
  id: string;
  code: string;
  label: string;
}

export interface AboutConfig {
  heroTagline: string;
  headline: string;
  story: string[];
  values: CoreValue[];
  milestones: Milestone[];
  stats: StatItem[];
  certifications: CertItem[];
}

export interface InquiryItem {
  id: string;
  name: string;
  company: string;
  email?: string;
  phone?: string;
  channel: "WhatsApp" | "Email" | "Website form";
  subject: string;
  message?: string;
  received: string;
  status: "New" | "In progress" | "Resolved";
}

export interface BlogPostItem {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  tag: string;
  readTime?: string;
  published: boolean;
}

export interface SiteStoreState {
  branding: BrandingConfig;
  theme: ThemeColorsConfig;
  processSteps: ProcessStep[];
  addOnServices: AddOnService[];
  team: TeamMember[];
  about: AboutConfig;
  categories: ProductCategory[];
  inquiries: InquiryItem[];
  blogPosts: BlogPostItem[];
}

// Preset Theme Palettes
export const THEME_PRESETS: Record<string, { label: string; colors: ThemeColorsConfig }> = {
  atelier: {
    label: "Classic Atelier (Emerald & Gold)",
    colors: {
      activePreset: "atelier",
      loom: "#2F5D50",
      loomLight: "#3F7566",
      loomDark: "#1F3F36",
      brass: "#A9822E",
      brassLight: "#C9A94E",
      brassDark: "#8C6B1C",
      stamp: "#B23A2E",
      stampLight: "#D15246",
      canvas: "#F1ECE1",
      paper: "#FAF7EF",
      ink: "#14181F",
    },
  },
  sapphire: {
    label: "Royal Sapphire (Navy & Champagne)",
    colors: {
      activePreset: "sapphire",
      loom: "#1B3B6F",
      loomLight: "#2B5292",
      loomDark: "#0F2447",
      brass: "#C59B27",
      brassLight: "#E0B746",
      brassDark: "#A67F18",
      stamp: "#C84B31",
      stampLight: "#E0644B",
      canvas: "#F0F4F8",
      paper: "#FAFCFE",
      ink: "#0D1B2A",
    },
  },
  crimson: {
    label: "Crimson Luxury (Burgundy & Gold)",
    colors: {
      activePreset: "crimson",
      loom: "#6B1D2F",
      loomLight: "#8B2B42",
      loomDark: "#4A121F",
      brass: "#C8963E",
      brassLight: "#E2B25E",
      brassDark: "#A67727",
      stamp: "#B83A2E",
      stampLight: "#D45649",
      canvas: "#F7F3EE",
      paper: "#FCFAF7",
      ink: "#231215",
    },
  },
  onyx: {
    label: "Modern Onyx (Charcoal & Silver)",
    colors: {
      activePreset: "onyx",
      loom: "#2D3748",
      loomLight: "#4A5568",
      loomDark: "#1A202C",
      brass: "#4A5568",
      brassLight: "#718096",
      brassDark: "#2D3748",
      stamp: "#E53E3E",
      stampLight: "#FC8181",
      canvas: "#EDF2F7",
      paper: "#F7FAFC",
      ink: "#1A202C",
    },
  },
  terracotta: {
    label: "Terracotta & Forest (Clay & Sage)",
    colors: {
      activePreset: "terracotta",
      loom: "#8C4A32",
      loomLight: "#A85B40",
      loomDark: "#6E3622",
      brass: "#556B2F",
      brassLight: "#6B8E23",
      brassDark: "#3E5020",
      stamp: "#C0392B",
      stampLight: "#E74C3C",
      canvas: "#F6F1EB",
      paper: "#FCF9F6",
      ink: "#281E19",
    },
  },
  indigo: {
    label: "Midnight Indigo & Cyan",
    colors: {
      activePreset: "indigo",
      loom: "#312E81",
      loomLight: "#4338CA",
      loomDark: "#1E1B4B",
      brass: "#0284C7",
      brassLight: "#38BDF8",
      brassDark: "#0369A1",
      stamp: "#E11D48",
      stampLight: "#F43F5E",
      canvas: "#EEF2FF",
      paper: "#F8FAFC",
      ink: "#0F172A",
    },
  },
};

export const defaultSiteData: SiteStoreState = {
  branding: {
    name: initialCompany.name,
    shortName: initialCompany.shortName,
    tagline: initialCompany.tagline,
    founded: initialCompany.founded,
    city: initialCompany.city,
    logoType: "icon",
    logoUrl: "",
    logoIcon: "Stamp",
    adminTitle: "Demo Company name Staff Admin",
    whatsappNumber: initialCompany.whatsappNumber,
    whatsappMessage: initialCompany.whatsappMessage,
    email: initialCompany.email,
    phone: initialCompany.phone,
    address: initialCompany.address,
    officeHours: "Sun–Thu, 9:00–18:00 (GMT+6)",
    mapLabel: "Baridhara DOHS, Dhaka, Bangladesh",
  },
  theme: THEME_PRESETS.atelier.colors,
  processSteps: initialProcess.map((p, idx) => ({ ...p, id: `STEP-${idx + 1}` })),
  addOnServices: [
    {
      id: "ADDON-1",
      title: "Fabric & Trim R&D",
      desc: "Lab-dip matching, wash-down testing, and alternate fiber sourcing when a spec fabric is unavailable at target cost.",
      tag: "Textile R&D",
    },
    {
      id: "ADDON-2",
      title: "Third-Party Audit Coordination",
      desc: "We schedule and accompany BSCI, WRAP, or Sedex audits, and manage corrective action plans (CAP) afterward.",
      tag: "Compliance",
    },
    {
      id: "ADDON-3",
      title: "Consolidation & Warehousing",
      desc: "Multi-factory orders consolidated at our Dhaka warehouse into a single container shipment, reducing freight cost.",
      tag: "Logistics",
    },
    {
      id: "ADDON-4",
      title: "Design & Tech Pack Support",
      desc: "For brands without an in-house pattern team, we build complete tech packs from sketches or reference garments.",
      tag: "Patterning",
    },
  ],
  team: initialTeam.map((t, idx) => ({
    id: `TEAM-${idx + 1}`,
    name: t.name,
    role: t.role,
    initials: t.initials,
    avatar: "",
    bio: `${t.role} leading client accounts and order execution with precision across Bangladesh mills.`,
    email: `${t.name.toLowerCase().replace(/\s+/g, ".")}@buyinghouse.demo`,
  })),
  about: {
    heroTagline: "About Our Buying House",
    headline: "Built by merchandisers who were tired of being the excuse between buyer and factory.",
    story: [
      "We started in 2011 when our founder, a garment merchandiser herself, saw the same failure repeat across every order: buyers blamed factories, factories blamed buyers, and nobody in the middle was accountable to either.",
      "We built the buying house we wished we had — one dedicated team in Dhaka, answerable to both sides, providing rigorous on-ground QA/QC, transparent costing, and smooth delivery worldwide.",
    ],
    values: [
      {
        id: "VAL-1",
        title: "Accountability over excuses",
        desc: "When something goes wrong on the line, we tell you before you ask — with a plan to fix it, not a reason it happened.",
      },
      {
        id: "VAL-2",
        title: "Independent quality control",
        desc: "Our inspectors are on our payroll, not the factory's. Their only job is protecting your standard, not the factory's output number.",
      },
      {
        id: "VAL-3",
        title: "Transparent costing",
        desc: "You see the same cost breakdown our merchandisers do — fabric, trims, CM, and freight, line by line.",
      },
    ],
    milestones: [
      { id: "MIL-1", year: "2011", text: "Founded in Dhaka with two partner factories and a single knitwear buyer in Denmark." },
      { id: "MIL-2", year: "2015", text: "Opened an in-house QC lab and grew the factory network to twelve certified partners." },
      { id: "MIL-3", year: "2019", text: "Reached 15 countries served; added dedicated denim and activewear sourcing teams." },
      { id: "MIL-4", year: "2023", text: "Achieved GOTS and OEKO-TEX chain-of-custody certification across top four mills." },
      { id: "MIL-5", year: "2026", text: "40+ audited factory partners, shipping to 18 countries year-round." },
    ],
    stats: initialStats.map((s, idx) => ({ id: `STAT-${idx + 1}`, ...s })),
    certifications: initialCerts.map((c, idx) => ({ id: `CERT-${idx + 1}`, ...c })),
  },
  categories: initialCategories,
  inquiries: initialInquiries.map((inq) => ({
    ...inq,
    channel: inq.channel as "WhatsApp" | "Email" | "Website form",
    status: inq.status as "New" | "In progress" | "Resolved",
    message: `Inquiry regarding ${inq.subject} for upcoming apparel collection lines.`,
  })),
  blogPosts: [
    ...initialBlogPosts.map((p, idx) => ({
      id: `BLOG-${idx + 1}`,
      title: p.title,
      excerpt: p.excerpt,
      content: p.excerpt,
      date: p.date,
      tag: p.tag,
      readTime: "4 min read",
      published: true,
    })),
    {
      id: "BLOG-4",
      title: "Reading a Factory Audit Report Without a Compliance Background",
      excerpt: "A plain-language walkthrough of the sections that matter most in a BSCI or Sedex report.",
      date: "2026-03-10",
      tag: "Compliance",
      readTime: "6 min read",
      published: true,
    },
    {
      id: "BLOG-5",
      title: "Why Lead Times Slip in Week Three, Not Week One",
      excerpt: "The mid-production bottlenecks that quietly cost brands their delivery window.",
      date: "2026-02-18",
      tag: "Production",
      readTime: "5 min read",
      published: true,
    },
    {
      id: "BLOG-6",
      title: "Choosing Between FOB and DDP for a First Order",
      excerpt: "A cost and risk comparison for buyers shipping from Bangladesh for the first time.",
      date: "2026-01-27",
      tag: "Logistics",
      readTime: "5 min read",
      published: true,
    },
  ],
};

const MASTER_STORAGE_KEY = "buying_house_master_site_store_v2";
const MASTER_EVENT_NAME = "buying_house_master_site_updated";

// Helper: Convert Hex color / RGB color to RGB space-separated string (e.g. "#2F5D50" -> "47 93 80")
export function hexToRgbString(colorStr: string): string {
  if (!colorStr) return "47 93 80";
  const str = colorStr.trim();
  
  // If already space-separated RGB numbers "47 93 80"
  const spaceParts = str.split(/\s+/);
  if (spaceParts.length === 3 && spaceParts.every((p) => !isNaN(Number(p)) && Number(p) >= 0 && Number(p) <= 255)) {
    return str;
  }

  // If rgb(47, 93, 80) or rgba(47, 93, 80, 1)
  if (str.startsWith("rgb")) {
    const matches = str.match(/\d+/g);
    if (matches && matches.length >= 3) {
      return `${matches[0]} ${matches[1]} ${matches[2]}`;
    }
  }

  // If hex code "#2F5D50" or "2F5D50" or "#fff"
  let cleaned = str.replace("#", "").trim();
  if (cleaned.length === 3) {
    cleaned = cleaned.split("").map((c) => c + c).join("");
  }
  if (cleaned.length === 6) {
    const num = parseInt(cleaned, 16);
    if (!isNaN(num)) {
      const r = (num >> 16) & 255;
      const g = (num >> 8) & 255;
      const b = num & 255;
      return `${r} ${g} ${b}`;
    }
  }

  return "47 93 80";
}

export function getStoredSiteData(): SiteStoreState {
  if (typeof window === "undefined") return defaultSiteData;
  try {
    const raw = localStorage.getItem(MASTER_STORAGE_KEY);
    if (!raw) return defaultSiteData;
    const parsed = JSON.parse(raw);
    return {
      branding: { ...defaultSiteData.branding, ...(parsed.branding || {}) },
      theme: { ...defaultSiteData.theme, ...(parsed.theme || {}) },
      processSteps: Array.isArray(parsed.processSteps) ? parsed.processSteps : defaultSiteData.processSteps,
      addOnServices: Array.isArray(parsed.addOnServices) ? parsed.addOnServices : defaultSiteData.addOnServices,
      team: Array.isArray(parsed.team) ? parsed.team : defaultSiteData.team,
      about: {
        ...defaultSiteData.about,
        ...(parsed.about || {}),
        values: Array.isArray(parsed.about?.values) ? parsed.about.values : defaultSiteData.about.values,
        milestones: Array.isArray(parsed.about?.milestones) ? parsed.about.milestones : defaultSiteData.about.milestones,
        stats: Array.isArray(parsed.about?.stats) ? parsed.about.stats : defaultSiteData.about.stats,
        certifications: Array.isArray(parsed.about?.certifications) ? parsed.about.certifications : defaultSiteData.about.certifications,
      },
      categories: Array.isArray(parsed.categories) ? parsed.categories : defaultSiteData.categories,
      inquiries: Array.isArray(parsed.inquiries) ? parsed.inquiries : defaultSiteData.inquiries,
      blogPosts: Array.isArray(parsed.blogPosts) ? parsed.blogPosts : defaultSiteData.blogPosts,
    };
  } catch (e) {
    console.error("Failed to load site data from localStorage", e);
    return defaultSiteData;
  }
}

export function saveSiteDataToStore(data: SiteStoreState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(MASTER_STORAGE_KEY, JSON.stringify(data));
    // Also sync categories to existing key for backward compatibility
    try {
      localStorage.setItem("buying_house_categories_v1", JSON.stringify(data.categories));
    } catch {}
    window.dispatchEvent(new Event(MASTER_EVENT_NAME));
    window.dispatchEvent(new Event("buying_house_categories_updated"));
  } catch (e) {
    console.error("Failed to save site data to localStorage", e);
  }
}

export function resetSiteDataStore(): SiteStoreState {
  if (typeof window === "undefined") return defaultSiteData;
  try {
    localStorage.removeItem(MASTER_STORAGE_KEY);
    localStorage.removeItem("buying_house_categories_v1");
    window.dispatchEvent(new Event(MASTER_EVENT_NAME));
    window.dispatchEvent(new Event("buying_house_categories_updated"));
  } catch (e) {
    console.error("Failed to reset site data", e);
  }
  return defaultSiteData;
}

export function useSiteStore() {
  const [siteData, setSiteData] = useState<SiteStoreState>(defaultSiteData);

  useEffect(() => {
    setSiteData(getStoredSiteData());

    const handleUpdate = () => {
      setSiteData(getStoredSiteData());
    };

    window.addEventListener(MASTER_EVENT_NAME, handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener(MASTER_EVENT_NAME, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const updateState = (updater: (prev: SiteStoreState) => SiteStoreState) => {
    setSiteData((prev) => {
      const updated = updater(prev);
      saveSiteDataToStore(updated);
      return updated;
    });
  };

  return {
    siteData,
    branding: siteData.branding,
    theme: siteData.theme,
    processSteps: siteData.processSteps,
    addOnServices: siteData.addOnServices,
    team: siteData.team,
    about: siteData.about,
    categories: siteData.categories,
    publishedCategories: siteData.categories.filter((c) => c.status === "Published"),
    inquiries: siteData.inquiries,
    blogPosts: siteData.blogPosts,
    publishedBlogPosts: siteData.blogPosts.filter((p) => p.published),

    // Branding updates
    updateBranding: (partial: Partial<BrandingConfig>) => {
      updateState((prev) => ({
        ...prev,
        branding: { ...prev.branding, ...partial },
      }));
    },

    // Theme updates
    updateTheme: (partial: Partial<ThemeColorsConfig>) => {
      updateState((prev) => ({
        ...prev,
        theme: { ...prev.theme, ...partial },
      }));
    },

    applyThemePreset: (presetKey: string) => {
      if (THEME_PRESETS[presetKey]) {
        updateState((prev) => ({
          ...prev,
          theme: { ...THEME_PRESETS[presetKey].colors },
        }));
      }
    },

    // Services updates
    updateProcessSteps: (steps: ProcessStep[]) => {
      updateState((prev) => ({ ...prev, processSteps: steps }));
    },
    updateAddOnServices: (addOns: AddOnService[]) => {
      updateState((prev) => ({ ...prev, addOnServices: addOns }));
    },

    // Team updates
    updateTeam: (members: TeamMember[]) => {
      updateState((prev) => ({ ...prev, team: members }));
    },

    // About updates
    updateAbout: (aboutData: Partial<AboutConfig>) => {
      updateState((prev) => ({
        ...prev,
        about: { ...prev.about, ...aboutData },
      }));
    },

    // Categories updates
    updateCategories: (cats: ProductCategory[]) => {
      updateState((prev) => ({ ...prev, categories: cats }));
    },

    // Inquiries updates
    addInquiry: (inquiry: Omit<InquiryItem, "id" | "received" | "status">) => {
      const newInq: InquiryItem = {
        ...inquiry,
        id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
        received: new Date().toISOString().split("T")[0],
        status: "New",
      };
      updateState((prev) => ({
        ...prev,
        inquiries: [newInq, ...prev.inquiries],
      }));
      return newInq;
    },
    updateInquiryStatus: (id: string, status: "New" | "In progress" | "Resolved") => {
      updateState((prev) => ({
        ...prev,
        inquiries: prev.inquiries.map((i) => (i.id === id ? { ...i, status } : i)),
      }));
    },
    deleteInquiry: (id: string) => {
      updateState((prev) => ({
        ...prev,
        inquiries: prev.inquiries.filter((i) => i.id !== id),
      }));
    },

    // Blog updates
    updateBlogPosts: (posts: BlogPostItem[]) => {
      updateState((prev) => ({ ...prev, blogPosts: posts }));
    },

    // Reset & Backup
    resetAll: () => {
      const def = resetSiteDataStore();
      setSiteData(def);
    },
    exportJson: () => {
      return JSON.stringify(siteData, null, 2);
    },
    importJson: (jsonStr: string) => {
      try {
        const parsed = JSON.parse(jsonStr);
        saveSiteDataToStore(parsed);
        setSiteData(parsed);
        return { success: true };
      } catch (e: any) {
        return { success: false, error: e.message };
      }
    },
  };
}
