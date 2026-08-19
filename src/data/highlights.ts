import { menuDoc } from "./menu";
import { toHighlights } from "./menu-doc";

export type { Highlight } from "./menu-doc";

/** Owner-curated in the MenuSnap dashboard — never guessed. */
export const highlights = toHighlights(menuDoc);

export const DEFAULT_HIGHLIGHTS: { key: string; emoji: string; label: string }[] = [
  { key: "signature", emoji: "⭐", label: "Signature" },
  { key: "bestseller", emoji: "🔥", label: "Best Seller" },
  { key: "chefs", emoji: "👨‍🍳", label: "Chef's Pick" },
  { key: "favorite", emoji: "❤️", label: "Customer Favorite" },
  { key: "special", emoji: "✨", label: "Special" },
  { key: "popular", emoji: "❤️", label: "Popular" },
];
