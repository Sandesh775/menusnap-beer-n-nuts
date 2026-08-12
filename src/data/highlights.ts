import momoImg from "@/assets/momo-steamed.jpg";
import pizzaImg from "@/assets/pizza-margherita.jpg";
import coffeeImg from "@/assets/cat-coffee.jpg";
import snacksImg from "@/assets/cat-snacks.jpg";
import newariImg from "@/assets/cat-newari.jpg";
import beerImg from "@/assets/cat-beer.jpg";

export type HighlightKey = "signature" | "bestseller" | "chefs" | "popular";

export type Highlight = {
  key: HighlightKey;
  emoji: string;
  label: string;
  image?: string;
  items: { name: string; price: number | string }[];
};

/**
 * Owner-curated. MenuSnap never guesses these.
 */
export const highlights: Highlight[] = [
  {
    key: "signature",
    emoji: "⭐",
    label: "Signature",
    image: momoImg,
    items: [
      { name: "Chicken Momo (Steamed)", price: 210 },
      { name: "Buff Jhol Momo", price: 230 },
      { name: "Chicken Sekuwa", price: 280 },
      { name: "Newari Khaja Set (Buff)", price: 450 },
      { name: "Chatamari (Buff Keema)", price: 280 },
    ],
  },
  {
    key: "bestseller",
    emoji: "🔥",
    label: "Best Seller",
    image: snacksImg,
    items: [
      { name: "Crispy Chicken", price: 320 },
      { name: "Chicken Chilly Boneless", price: 320 },
      { name: "Buff Momo (Steamed)", price: 190 },
      { name: "Chicken Chowmein", price: 250 },
      { name: "Gorkha Beer (650 ml)", price: 550 },
    ],
  },
  {
    key: "chefs",
    emoji: "👨‍🍳",
    label: "Chef's Pick",
    image: newariImg,
    items: [
      { name: "Buff Choyella", price: 300 },
      { name: "Pork Sekuwa", price: 280 },
      { name: "Mixed Pizza (Medium)", price: 570 },
      { name: "Chicken Sizzler", price: 550 },
      { name: "Bara (Egg)", price: 150 },
    ],
  },
  {
    key: "popular",
    emoji: "❤️",
    label: "Popular",
    image: coffeeImg,
    items: [
      { name: "Cappuccino", price: 140 },
      { name: "Caramel Latte", price: 190 },
      { name: "Oreo Milkshake", price: 250 },
      { name: "Chicken Sadheko", price: 280 },
      { name: "Cheese Pizza (Small)", price: 420 },
    ],
  },
];

/** Primary badge shown over a category's image — one label only. */
export const sectionBadge: Record<string, HighlightKey> = {
  momo: "signature",
  newari: "chefs",
  coffee: "popular",
  "chicken-snacks": "bestseller",
  pizza: "chefs",
  beer: "bestseller",
};

export const badgeMeta: Record<HighlightKey, { emoji: string; label: string }> = {
  signature: { emoji: "⭐", label: "Signature" },
  bestseller: { emoji: "🔥", label: "Best Seller" },
  chefs: { emoji: "👨‍🍳", label: "Chef's Pick" },
  popular: { emoji: "❤️", label: "Popular" },
};

export { beerImg, pizzaImg };
