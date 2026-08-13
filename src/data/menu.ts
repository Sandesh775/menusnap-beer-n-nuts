import heroImg from "@/assets/hero.jpg";
import coffeeImg from "@/assets/cat-coffee.jpg";
import snacksImg from "@/assets/cat-snacks.jpg";
import beerImg from "@/assets/cat-beer.jpg";
import newariImg from "@/assets/cat-newari.jpg";
import momoImg from "@/assets/momo-steamed.jpg";
import pizzaImg from "@/assets/pizza-margherita.jpg";
import sandwichImg from "@/assets/cat-sandwich.jpg";
import burgerImg from "@/assets/cat-burger.jpg";
import noodlesImg from "@/assets/cat-noodles.jpg";
import chowmeinImg from "@/assets/cat-chowmein.jpg";

export type SimpleItem = { name: string; price: number | string };

export type ListSection = {
  id: string;
  title: string;
  kind: "list";
  note?: string;
  image?: string;
  items: SimpleItem[];
};

export type TableSection = {
  id: string;
  title: string;
  kind: "table";
  note?: string;
  image?: string;
  columns: string[];
  rows: { name: string; prices: (number | string)[] }[];
};

export type Section = ListSection | TableSection;

export const restaurant = {
  name: "Beer N Nuts",
  kicker: "Restaurant & Bar",
  location: "Basantapur, Kathmandu",
  hours: "8:00 AM — 9:00 PM · Everyday",
  openUntil: "9:00 PM",
  address: "Basantapur, Kathmandu, Nepal",
  phone: "9803339489",
  instagram: "@beer_n_nuts_cafe",
  currency: "Rs.",
  hero: heroImg,
};

export const sections: Section[] = [
  {
    id: "breakfast",
    title: "Breakfast & Light Meals",
    kind: "list",
    items: [
      { name: "Simple Breakfast", price: 400 },
      { name: "Grilled Breakfast", price: 475 },
      { name: "American Breakfast", price: 475 },
    ],
  },
  {
    id: "toast",
    title: "Toast",
    kind: "list",
    items: [
      { name: "Plain Toast", price: 40 },
      { name: "Butter Toast", price: 60 },
      { name: "Cheese Toast", price: 120 },
      { name: "French Toast", price: 120 },
    ],
  },
  {
    id: "eggs",
    title: "Eggs",
    kind: "list",
    items: [
      { name: "Boiled Eggs", price: 100 },
      { name: "Plain Omelet", price: 120 },
      { name: "Masala Omelet", price: 150 },
      { name: "Cheese Omelet", price: 250 },
    ],
  },
  {
    id: "soup",
    title: "Soup",
    kind: "list",
    items: [
      { name: "Veg Soup", price: 160 },
      { name: "Mushroom Soup", price: 200 },
      { name: "Chicken Soup", price: 220 },
      { name: "Chicken Mushroom Soup", price: 250 },
      { name: "Hot & Sour Soup", price: 250 },
    ],
  },
  {
    id: "sandwich",
    title: "Sandwich",
    kind: "list",
    image: sandwichImg,
    items: [
      { name: "Veg Sandwich", price: 170 },
      { name: "Cheese Sandwich", price: 200 },
      { name: "Chicken Sandwich", price: 250 },
      { name: "Club Sandwich", price: 300 },
    ],
  },
  {
    id: "burger",
    title: "Burger",
    kind: "list",
    note: "With cheese",
    image: burgerImg,
    items: [
      { name: "Veg Burger", price: 240 },
      { name: "Buff / Chicken Burger", price: 300 },
    ],
  },
  {
    id: "coffee",
    title: "Coffee",
    kind: "list",
    image: coffeeImg,
    items: [
      { name: "Espresso", price: 100 },
      { name: "Doppio", price: 160 },
      { name: "Americano Single", price: 120 },
      { name: "Americano Double", price: 160 },
      { name: "Cappuccino", price: 140 },
      { name: "Café Latte", price: 160 },
      { name: "Honey Latte", price: 190 },
      { name: "Caramel Latte", price: 190 },
      { name: "Caramel Macchiato", price: 170 },
      { name: "Cafe Mocha", price: 180 },
      { name: "Affogato", price: 220 },
    ],
  },
  {
    id: "coffee-alternatives",
    title: "Coffee Alternatives",
    kind: "list",
    items: [
      { name: "Hot Chocolate", price: 150 },
      { name: "Black Tea", price: 50 },
      { name: "Green Tea", price: 50 },
      { name: "Hot Lemon", price: 70 },
      { name: "Hot Lemon Honey", price: 100 },
      { name: "Hot Lemon Honey Ginger", price: 110 },
      { name: "Lemon Tea", price: 80 },
      { name: "Lemon Grass Tea", price: 50 },
      { name: "Ginger Lemon Tea", price: 80 },
      { name: "Milk Tea", price: 80 },
      { name: "Masala Tea", price: 90 },
      { name: "Peach / Apple / Lemon Tea", price: 150 },
    ],
  },
  {
    id: "frappe",
    title: "Frappe / Blended",
    kind: "list",
    items: [
      { name: "Mocha", price: 250 },
      { name: "Vanilla", price: 250 },
      { name: "Caramel", price: 250 },
      { name: "Strawberry", price: 250 },
      { name: "Oreo", price: 270 },
      { name: "Choco Chips", price: 270 },
    ],
  },
  {
    id: "iced",
    title: "Iced Drinks",
    kind: "list",
    items: [
      { name: "Iced Americano", price: 180 },
      { name: "Iced Latte", price: 200 },
      { name: "Iced Caramel Macchiato", price: 240 },
      { name: "Iced Mocha", price: 220 },
      { name: "Peach / Lemon / Apple Ice Tea", price: 180 },
      { name: "Cold Lemon", price: 120 },
    ],
  },
  {
    id: "juice",
    title: "Fresh Juice",
    kind: "list",
    items: [
      { name: "Watermelon Juice", price: 180 },
      { name: "Orange Juice", price: 220 },
    ],
  },
  {
    id: "milkshakes",
    title: "Milkshakes",
    kind: "list",
    items: [
      { name: "Chocolate Milkshake", price: 200 },
      { name: "Strawberry Milkshake", price: 200 },
      { name: "Vanilla Milkshake", price: 200 },
      { name: "Oreo Milkshake", price: 220 },
    ],
  },
  {
    id: "lassi",
    title: "Lassi & Smoothies",
    kind: "list",
    items: [
      { name: "Banana Lassi", price: 140 },
      { name: "Sweet Lassi", price: 120 },
      { name: "Seasonal Smoothies", price: 250 },
    ],
  },
  {
    id: "lemonade",
    title: "Lemonade",
    kind: "list",
    items: [
      { name: "Blended Lemonade", price: 180 },
      { name: "Mint Lemonade", price: 200 },
      { name: "Strawberry Lemonade", price: 220 },
      { name: "Mojito", price: 220 },
    ],
  },
  {
    id: "cold-drink",
    title: "Cold Drink",
    kind: "list",
    items: [
      { name: "Coke / Fanta / Sprite / Soda", price: 80 },
      { name: "Coke with Lemon", price: 100 },
      { name: "Mineral Water", price: 50 },
      { name: "Water (Small)", price: 30 },
    ],
  },
  {
    id: "veg-snacks",
    title: "Vegetarian Snacks",
    kind: "list",
    items: [
      { name: "Plain Peanuts", price: 140 },
      { name: "Black Bhattmas", price: 160 },
      { name: "French Fries", price: 190 },
      { name: "Chilly Crispy Potato", price: 280 },
      { name: "Chips Chilly", price: 250 },
      { name: "Dry Papad", price: 70 },
      { name: "Fry Papad", price: 80 },
      { name: "Masala Papad", price: 150 },
      { name: "Mushroom Chilly", price: 250 },
      { name: "Paneer Chilly", price: 270 },
      { name: "Paneer Pakoda", price: 250 },
      { name: "Veg Tempura", price: 250 },
      { name: "Egg Pakoda", price: 180 },
      { name: "Cheese Balls", price: 320 },
      { name: "Cheese Pop-Corn", price: 100 },
      { name: "Cheese Slice", price: 300 },
      { name: "Mustang Aloo", price: 200 },
    ],
  },
  {
    id: "sadeko",
    title: "Sadeko",
    kind: "list",
    items: [
      { name: "Peanuts Sadeko", price: 180 },
      { name: "Bhattmas Sadeko", price: 190 },
      { name: "Aloo Sadeko", price: 130 },
      { name: "Waiwai Sadeko", price: 100 },
      { name: "Waiwai Sukuti Sadeko", price: 200 },
    ],
  },
  {
    id: "salad",
    title: "Salad",
    kind: "list",
    items: [
      { name: "Green Salad", price: 200 },
      { name: "Fruit Salad", price: 280 },
    ],
  },
  {
    id: "chicken-snacks",
    title: "Chicken Snacks",
    kind: "list",
    image: snacksImg,
    items: [
      { name: "Chicken Fry (Nepali Style)", price: 280 },
      { name: "Crispy Chicken", price: 320 },
      { name: "Chicken Sadheko", price: 280 },
      { name: "Chicken Nuggets", price: 320 },
      { name: "Chicken Chilly Boneless", price: 320 },
      { name: "Chicken Choyella", price: 280 },
      { name: "Chicken Sekuwa", price: 280 },
      { name: "Chicken Sausage Fry", price: 180 },
      { name: "Chicken Sausage Chilly", price: 200 },
      { name: "Chicken Drumstick Fry", price: 280 },
      { name: "Chicken Drumstick Chilly", price: 300 },
      { name: "Chicken Wings Fry", price: 280 },
      { name: "Chicken Wings Chilly", price: 300 },
      { name: "Chicken Pangra", price: 200 },
      { name: "Chicken Manchurian", price: 300 },
    ],
  },
  {
    id: "buff-snacks",
    title: "Buff Snacks",
    kind: "list",
    items: [
      { name: "Boiled Buff", price: 250 },
      { name: "Buff Fry", price: 250 },
      { name: "Buff Fry Sausage", price: 200 },
      { name: "Buff Sausage Chilly", price: 250 },
      { name: "Buff Meatball Fry", price: 250 },
      { name: "Buff Meatball Chilly", price: 300 },
      { name: "Buff Chilly", price: 300 },
      { name: "Anda Keema Chiura Fry", price: 200 },
    ],
  },
  {
    id: "pork-snacks",
    title: "Pork Snacks",
    kind: "list",
    items: [
      { name: "Pork Chilly", price: 330 },
      { name: "Pork Tawa", price: 280 },
      { name: "Pork Sekuwa", price: 280 },
    ],
  },
  {
    id: "momo",
    title: "Momo",
    kind: "table",
    image: momoImg,
    columns: ["Steamed", "Fry / Kothey", "Jhol", "C. Chilly"],
    rows: [
      { name: "Buff Momo", prices: [190, 200, 230, 230] },
      { name: "Chicken Momo", prices: [210, 220, 250, 250] },
      { name: "Paneer Momo", prices: [230, 240, 270, 270] },
    ],
  },
  {
    id: "newari",
    title: "Newari Special",
    kind: "list",
    image: newariImg,
    items: [
      { name: "Buff Jibro Fry", price: 280 },
      { name: "Buff Jibro Chilly", price: 350 },
      { name: "Foksho Fry", price: 150 },
      { name: "Buff Anda Keema", price: 150 },
      { name: "Sapumhicha", price: 350 },
      { name: "Buff Tauko Fry", price: 300 },
      { name: "Buff Tauko Chilly", price: 350 },
      { name: "Buff Choyella", price: 300 },
      { name: "Buff Sekuwa", price: 300 },
      { name: "Buff Fry Sukuti", price: 350 },
      { name: "Buff Sadheko Sukuti", price: 380 },
      { name: "Buff Bhutan", price: 150 },
      { name: "Alu Tama", price: 80 },
    ],
  },
  {
    id: "khaja",
    title: "Khaja Set",
    kind: "list",
    note: "Choyella, Alu Tama, Black Bhatmas, Plain Bara, Chura, Egg, Alu Sadeko",
    items: [
      { name: "Veg Khaja Set", price: 350 },
      { name: "Buff / Chicken Khaja Set", price: 400 },
    ],
  },
  {
    id: "chatamari",
    title: "Chatamari",
    kind: "list",
    items: [
      { name: "Veg Chatamari", price: 100 },
      { name: "Buff / Chicken Chatamari", price: 150 },
      { name: "Egg Chatamari with Veg", price: 130 },
      { name: "Buff Egg Chatamari", price: 170 },
      { name: "Chicken Egg Chatamari", price: 170 },
      { name: "Mix Chatamari", price: 200 },
    ],
  },
  {
    id: "yomari",
    title: "Yomari",
    kind: "list",
    items: [
      { name: "Chaku Yomari", price: 70 },
      { name: "Khuwa Yomari", price: 70 },
      { name: "Chocolate Yomari", price: 70 },
    ],
  },
  {
    id: "bara",
    title: "Bara",
    kind: "list",
    items: [
      { name: "Plain Bara", price: 100 },
      { name: "Buff / Chicken Bara", price: 150 },
      { name: "Egg Bara", price: 120 },
      { name: "Buff Egg Bara", price: 170 },
      { name: "Chicken Egg Bara", price: 170 },
      { name: "Mix Bara", price: 200 },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    kind: "table",
    image: pizzaImg,
    columns: ['Small 9"', 'Medium 10"', 'Large 12"'],
    rows: [
      { name: "Cheese Pizza", prices: [420, 530, 680] },
      { name: "Chicken Pizza", prices: [450, 570, 730] },
      { name: "Mushroom Pizza", prices: [450, 570, 730] },
      { name: "Sausage Pizza", prices: [450, 570, 730] },
      { name: "Mixed Pizza", prices: [480, 570, 780] },
    ],
  },
  {
    id: "fried-rice",
    title: "Fried Rice",
    kind: "list",
    items: [
      { name: "Veg Fry Rice", price: 200 },
      { name: "Egg Fry Rice", price: 220 },
      { name: "Buff Fry Rice", price: 270 },
      { name: "Mix Fry Rice", price: 300 },
      { name: "Plain Rice", price: 150 },
    ],
  },
  {
    id: "noodles",
    title: "Keema Noodles",
    kind: "list",
    image: noodlesImg,
    items: [
      { name: "Buff Keema Noodles", price: 290 },
      { name: "Chicken Keema Noodles", price: 290 },
    ],
  },
  {
    id: "chopsuey",
    title: "Chopsuey",
    kind: "list",
    items: [
      { name: "American Chopsuey Veg", price: 250 },
      { name: "American Chopsuey Non-Veg", price: 310 },
      { name: "Chinese Chopsuey Veg", price: 250 },
      { name: "Chinese Chopsuey Non-Veg", price: 310 },
    ],
  },
  {
    id: "chowmein",
    title: "Chowmein / Thukpa",
    kind: "list",
    image: chowmeinImg,
    items: [
      { name: "Veg", price: 170 },
      { name: "Egg", price: 220 },
      { name: "Buff / Chicken", price: 250 },
      { name: "Mix", price: 280 },
    ],
  },
  {
    id: "sizzler",
    title: "Sizzler",
    kind: "list",
    items: [
      { name: "Veg Sizzler", price: 400 },
      { name: "Buff / Chicken Sizzler", price: 550 },
      { name: "Pork Sizzler", price: 550 },
    ],
  },
  {
    id: "beer",
    title: "Beer",
    kind: "list",
    image: beerImg,
    note: "Barahsinghe · Sherpa · Imported",
    items: [
      { name: "Draught Beer 550ml Glass", price: 550 },
      { name: "Draught Beer 1450ml Jar", price: 1450 },
      { name: "Pilsner 650ml", price: 620 },
      { name: "Pilsner Can", price: 425 },
      { name: "Hazy IPA 650ml", price: 695 },
      { name: "Hazy IPA 350ml", price: 355 },
      { name: "Carlsberg 650ml Bottle", price: 705 },
      { name: "Carlsberg Can", price: 565 },
      { name: "Gorkha Strong", price: 520 },
      { name: "Gorkha Extra Strong 330ml", price: 275 },
      { name: "Tuborg", price: 630 },
      { name: "Tuborg Can", price: 500 },
    ],
  },
  {
    id: "sherpa",
    title: "Sherpa Craft Beer",
    kind: "table",
    columns: ["Glass", "Big Glass", "Pitcher"],
    rows: [
      { name: "Khumbu Kolsch", prices: [400, 600, 1600] },
      { name: "Himalayan Red", prices: [400, 600, 1600] },
    ],
  },
  {
    id: "hard-drinks",
    title: "Hard Drinks",
    kind: "table",
    columns: ["60ml", "Qtr", "Half", "Full"],
    rows: [
      { name: "Khukuri Rum", prices: [260, 780, 1560, 3120] },
      { name: "Khukuri Rum White", prices: [260, 780, 1560, 3120] },
      { name: "Khukuri Rum Black", prices: [310, 920, 1840, 3680] },
      { name: "8848 Vodka", prices: [275, 820, 1740, 3280] },
      { name: "Ruslan Vodka", prices: [275, 820, 1740, 3280] },
      { name: "Gorkha & Guns", prices: [370, 1100, 2200, 4400] },
      { name: "Signature", prices: [300, 885, 1770, 3540] },
      { name: "Old Durbar Regular", prices: [340, 1200, 2040, 4080] },
      { name: "Old Durbar Black Chimney", prices: [420, 1260, 2520, 5040] },
      { name: "Black Oak", prices: [180, 540, 1080, 2160] },
      { name: "Golden Oak", prices: [150, 440, 880, 1760] },
      { name: "Mustang", prices: [130, 390, 780, 1560] },
      { name: "Highlander Vodka", prices: [150, 440, 880, 1750] },
      { name: "Honey Hunter Rum", prices: [290, 860, 1710, 3410] },
      { name: "Governor Vodka", prices: [250, 740, 1480, 2950] },
      { name: "Nude Vodka", prices: [270, 800, 1600, 3200] },
    ],
  },
  {
    id: "wine",
    title: "Wine & Punch",
    kind: "list",
    items: [
      { name: "Wine (Bottle)", price: 1440 },
      { name: "Hot Rum Punch", price: 350 },
    ],
  },
  {
    id: "shisha",
    title: "Shisha / Hukka",
    kind: "list",
    note: "Mint · Double Apple · Blueberry · Strawberry",
    items: [
      { name: "Hukka", price: 350 },
      { name: "Cloud Hukka", price: 600 },
      { name: "Extra Coil", price: 50 },
    ],
  },
  {
    id: "cigarette",
    title: "Cigarette",
    kind: "list",
    items: [
      { name: "Surya (1 piece)", price: 30 },
      { name: "Mini Pack (10 pieces)", price: 250 },
      { name: "Full Pack", price: 450 },
      { name: "Sikhar Ice", price: 25 },
      { name: "Camel", price: 25 },
    ],
  },
];
