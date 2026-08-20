"use client";

import {
  Stamp,
  Shirt,
  Scissors,
  Layers,
  Sparkles,
  Crown,
  Gem,
  Factory,
  Shield,
  Globe,
  LucideIcon,
} from "lucide-react";

export const BRAND_ICONS: Record<string, { label: string; icon: LucideIcon }> = {
  Stamp: { label: "Artisan Stamp", icon: Stamp },
  Shirt: { label: "Apparel Shirt", icon: Shirt },
  Scissors: { label: "Tailor Scissors", icon: Scissors },
  Layers: { label: "Fabric Layers", icon: Layers },
  Sparkles: { label: "Luxury Sparkles", icon: Sparkles },
  Crown: { label: "Royal Crown", icon: Crown },
  Gem: { label: "Quality Gem", icon: Gem },
  Factory: { label: "Garment Mill", icon: Factory },
  Shield: { label: "Audit Shield", icon: Shield },
  Globe: { label: "Global Export", icon: Globe },
};

export default function BrandLogoIcon({
  name = "Stamp",
  size = 20,
  className = "",
  strokeWidth = 1.75,
}: {
  name?: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  const IconComponent = (BRAND_ICONS[name] || BRAND_ICONS.Stamp).icon;
  return <IconComponent size={size} className={className} strokeWidth={strokeWidth} />;
}
