import { resolveImage } from "./images";

/* ------------------------------------------------------------------ */
/* Source-of-truth document (data/<slug>/menu.json)                    */
/* ------------------------------------------------------------------ */

export type RestaurantInfo = {
  name: string;
  kicker: string;
  location: string;
  hours: string;
  openUntil?: string;
  address: string;
  phone: string;
  instagram: string;
  currency: string;
  hero?: string;
  logo?: string;
};

export type DocItem = { id: string; name: string; price: number | string };
export type DocRow = { id: string; name: string; prices: (number | string)[] };

export type ListCategory = {
  id: string;
  title: string;
  kind: "list";
  note?: string;
  image?: string;
  badge?: string;
  items: DocItem[];
};

export type TableCategory = {
  id: string;
  title: string;
  kind: "table";
  note?: string;
  image?: string;
  badge?: string;
  columns: string[];
  rows: DocRow[];
};

export type DocCategory = ListCategory | TableCategory;

export type DocHighlight = {
  key: string;
  emoji: string;
  label: string;
  builtIn?: boolean;
  image?: string;
  /** References to menu items: "item-id" or "row-id#columnIndex". */
  items: string[];
};

export type MenuDoc = {
  slug: string;
  restaurant: RestaurantInfo;
  categories: DocCategory[];
  highlights: DocHighlight[];
};

/* ------------------------------------------------------------------ */
/* Presentation shapes consumed by the customer-facing menu             */
/* ------------------------------------------------------------------ */

export type SimpleItem = { name: string; price: number | string };

export type ListSection = {
  id: string;
  title: string;
  kind: "list";
  note?: string;
  image?: string;
  badge?: string;
  items: SimpleItem[];
};

export type TableSection = {
  id: string;
  title: string;
  kind: "table";
  note?: string;
  image?: string;
  badge?: string;
  columns: string[];
  rows: { name: string; prices: (number | string)[] }[];
};

export type Section = ListSection | TableSection;

export type Highlight = {
  key: string;
  emoji: string;
  label: string;
  image?: string;
  items: SimpleItem[];
};

/** Every selectable menu entry, flattened — used by the menu + highlight editors. */
export function flattenRefs(doc: MenuDoc): { ref: string; name: string; price: number | string; category: string }[] {
  const out: { ref: string; name: string; price: number | string; category: string }[] = [];
  for (const c of doc.categories) {
    if (c.kind === "list") {
      for (const i of c.items) out.push({ ref: i.id, name: i.name, price: i.price, category: c.title });
    } else {
      for (const r of c.rows)
        r.prices.forEach((p, idx) =>
          out.push({
            ref: `${r.id}#${idx}`,
            name: `${r.name} (${c.columns[idx] ?? idx + 1})`,
            price: p,
            category: c.title,
          }),
        );
    }
  }
  return out;
}

export function resolveRef(doc: MenuDoc, ref: string): SimpleItem | null {
  const [id, colRaw] = ref.split("#");
  for (const c of doc.categories) {
    if (c.kind === "list") {
      const item = c.items.find((i) => i.id === id);
      if (item) return { name: item.name, price: item.price };
    } else {
      const row = c.rows.find((r) => r.id === id);
      if (row) {
        const idx = Number(colRaw ?? 0) || 0;
        return { name: `${row.name} (${c.columns[idx] ?? ""})`.replace(" ()", ""), price: row.prices[idx] ?? "" };
      }
    }
  }
  return null;
}

export function toSections(doc: MenuDoc): Section[] {
  return doc.categories.map((c) => {
    const base = {
      id: c.id,
      title: c.title,
      note: c.note,
      image: resolveImage(c.image),
      badge: c.badge,
    };
    return c.kind === "list"
      ? ({ ...base, kind: "list", items: c.items.map(({ name, price }) => ({ name, price })) } as ListSection)
      : ({
          ...base,
          kind: "table",
          columns: c.columns,
          rows: c.rows.map(({ name, prices }) => ({ name, prices })),
        } as TableSection);
  });
}

export function toHighlights(doc: MenuDoc): Highlight[] {
  return doc.highlights.map((h) => ({
    key: h.key,
    emoji: h.emoji,
    label: h.label,
    image: resolveImage(h.image),
    items: h.items.map((r) => resolveRef(doc, r)).filter((i): i is SimpleItem => !!i),
  }));
}

export function toRestaurant(doc: MenuDoc) {
  return {
    ...doc.restaurant,
    hero: resolveImage(doc.restaurant.hero),
    logo: resolveImage(doc.restaurant.logo),
  };
}
