import pizza from "@/assets/pizza-margherita.jpg";
import burger from "@/assets/burger-truffle.jpg";
import momo from "@/assets/momo-steamed.jpg";
import matcha from "@/assets/drink-matcha.jpg";
import dessert from "@/assets/dessert-basque.jpg";

export type Badge = "veg" | "spicy" | "chef";

export type MenuItem = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: Badge;
};

export const categories = [
  { id: "pizza", label: "Pizza", emoji: "🍕" },
  { id: "burger", label: "Burger", emoji: "🍔" },
  { id: "momo", label: "Momo", emoji: "🥟" },
  { id: "drinks", label: "Drinks", emoji: "🥤" },
  { id: "dessert", label: "Dessert", emoji: "🍰" },
];

export const menu: MenuItem[] = [
  {
    id: "margherita",
    category: "pizza",
    name: "Margherita Fiore",
    description: "San Marzano tomato, fior di latte, basil from the terrace garden.",
    price: "Rs 640",
    image: pizza,
    badge: "veg",
  },
  {
    id: "diavola",
    category: "pizza",
    name: "Diavola Nera",
    description: "Spiced salami, chili honey, smoked scamorza on a 48-hour crust.",
    price: "Rs 780",
    image: pizza,
    badge: "spicy",
  },
  {
    id: "truffle-burger",
    category: "burger",
    name: "Truffle Smash",
    description: "Dry-aged beef, aged cheddar, black truffle aioli, brioche bun.",
    price: "Rs 890",
    image: burger,
    badge: "chef",
  },
  {
    id: "steam-momo",
    category: "momo",
    name: "Steamed Chicken Momo",
    description: "Hand-folded, ginger-scented broth pocket, roasted sesame achar.",
    price: "Rs 320",
    image: momo,
  },
  {
    id: "jhol-momo",
    category: "momo",
    name: "Jhol Momo",
    description: "Ten pieces bathed in a smoky tomato-sesame jhol. Properly hot.",
    price: "Rs 380",
    image: momo,
    badge: "spicy",
  },
  {
    id: "matcha",
    category: "drinks",
    name: "Iced Ceremonial Matcha",
    description: "Single-origin Uji matcha, oat milk, a whisper of cane syrup.",
    price: "Rs 420",
    image: matcha,
    badge: "veg",
  },
  {
    id: "basque",
    category: "dessert",
    name: "Basque Burnt Cheesecake",
    description: "Slow-caramelised top, molten centre, Himalayan sea salt.",
    price: "Rs 460",
    image: dessert,
    badge: "chef",
  },
];

export const restaurant = {
  name: "Maison Solail",
  tagline: "Wood fire · Small plates · Slow mornings",
  location: "Jhamsikhel, Lalitpur",
  rating: "4.9",
  reviews: "412",
  address: "14 Chakupat Marg, Jhamsikhel, Lalitpur 44700",
  phone: "+977 1 552 8890",
  instagram: "@maisonsolail",
  hours: "Every day · 8:00 — 22:30",
};
