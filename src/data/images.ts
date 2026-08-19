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
import logoImg from "@/assets/beer-n-nuts-logo.png";

/**
 * Bundled imagery shipped with MenuSnap. Menu data references images by key so
 * the JSON stays portable; owner-uploaded images are referenced by path/URL.
 */
export const bundledImages: Record<string, string> = {
  hero: heroImg,
  "cat-coffee": coffeeImg,
  "cat-snacks": snacksImg,
  "cat-beer": beerImg,
  "cat-newari": newariImg,
  "momo-steamed": momoImg,
  "pizza-margherita": pizzaImg,
  "cat-sandwich": sandwichImg,
  "cat-burger": burgerImg,
  "cat-noodles": noodlesImg,
  "cat-chowmein": chowmeinImg,
  "beer-n-nuts-logo": logoImg,
};

/** Resolve an image reference (bundled key, absolute path, or URL) to a src. */
export function resolveImage(ref?: string): string | undefined {
  if (!ref) return undefined;
  if (ref.startsWith("http") || ref.startsWith("/") || ref.startsWith("data:")) return ref;
  return bundledImages[ref];
}

export const imageKeys = Object.keys(bundledImages);
