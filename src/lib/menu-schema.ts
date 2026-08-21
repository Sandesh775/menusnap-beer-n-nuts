import type { DocCategory, DocHighlight, MenuDoc } from "@/data/menu-doc";

/**
 * Hand-rolled validation (no extra dependency). Used server-side before any
 * menu document is committed — a malformed document must never overwrite a
 * working menu.
 */
export function validateMenuDoc(input: unknown): { ok: true; doc: MenuDoc } | { ok: false; error: string } {
  const fail = (error: string) => ({ ok: false as const, error });
  if (!input || typeof input !== "object") return fail("Menu data is missing.");
  const d = input as Record<string, unknown>;

  if (typeof d["slug"] !== "string" || !/^[a-z0-9-]{2,60}$/.test(d["slug"])) return fail("Invalid restaurant id.");

  const r = d["restaurant"] as Record<string, unknown> | undefined;
  if (!r || typeof r !== "object") return fail("Restaurant information is missing.");
  for (const key of ["name", "kicker", "location", "hours", "address", "phone", "instagram", "currency"]) {
    if (typeof r[key] !== "string" || (r[key] as string).length > 200) return fail(`Invalid restaurant ${key}.`);
  }
  if (!(r["name"] as string).trim()) return fail("Restaurant name cannot be empty.");

  const cats = d["categories"];
  if (!Array.isArray(cats) || cats.length === 0) return fail("At least one category is required.");
  const ids = new Set<string>();
  for (const c of cats as DocCategory[]) {
    if (!c || typeof c.id !== "string" || !c.id.trim()) return fail("A category is missing an id.");
    if (ids.has(c.id)) return fail(`Duplicate category id "${c.id}".`);
    ids.add(c.id);
    if (typeof c.title !== "string" || !c.title.trim()) return fail("A category is missing a name.");
    if (c.kind === "list") {
      if (!Array.isArray(c.items)) return fail(`Category "${c.title}" has invalid items.`);
      for (const i of c.items) {
        if (!i || typeof i.id !== "string" || !i.id.trim()) return fail("A menu item is missing an id.");
        if (typeof i.name !== "string" || !i.name.trim()) return fail("A menu item is missing a name.");
        if (typeof i.price !== "number" && typeof i.price !== "string") return fail(`Invalid price for "${i.name}".`);
        if (ids.has(i.id)) return fail(`Duplicate item id "${i.id}".`);
        ids.add(i.id);
      }
    } else if (c.kind === "table") {
      if (!Array.isArray(c.columns) || c.columns.length === 0) return fail(`Category "${c.title}" needs columns.`);
      if (!Array.isArray(c.rows)) return fail(`Category "${c.title}" has invalid rows.`);
      for (const row of c.rows) {
        if (!row || typeof row.id !== "string" || !row.id.trim()) return fail("A menu row is missing an id.");
        if (typeof row.name !== "string" || !row.name.trim()) return fail("A menu row is missing a name.");
        if (!Array.isArray(row.prices)) return fail(`Invalid prices for "${row.name}".`);
        if (ids.has(row.id)) return fail(`Duplicate item id "${row.id}".`);
        ids.add(row.id);
      }
    } else {
      return fail(`Category "${c.id}" has an unknown type.`);
    }
  }

  const hs = d["highlights"];
  if (!Array.isArray(hs)) return fail("Highlights are missing.");
  const hkeys = new Set<string>();
  for (const h of hs as DocHighlight[]) {
    if (!h || typeof h.key !== "string" || !h.key.trim()) return fail("A highlight is missing an id.");
    if (hkeys.has(h.key)) return fail(`Duplicate highlight "${h.key}".`);
    hkeys.add(h.key);
    if (typeof h.label !== "string" || !h.label.trim()) return fail("A highlight is missing a name.");
    if (typeof h.emoji !== "string" || h.emoji.length > 8) return fail(`Invalid icon for "${h.label}".`);
    if (!Array.isArray(h.items) || h.items.some((i) => typeof i !== "string"))
      return fail(`Invalid items in highlight "${h.label}".`);
  }

  const json = JSON.stringify(input);
  if (json.length > 2_000_000) return fail("Menu data is too large.");

  return { ok: true, doc: input as MenuDoc };
}

/** Drop highlight references to items that no longer exist. */
export function pruneHighlights(doc: MenuDoc): MenuDoc {
  const valid = new Set<string>();
  for (const c of doc.categories) {
    if (c.kind === "list") c.items.forEach((i) => valid.add(i.id));
    else c.rows.forEach((r) => r.prices.forEach((_, idx) => valid.add(`${r.id}#${idx}`)));
  }
  return {
    ...doc,
    highlights: doc.highlights.map((h) => ({ ...h, items: h.items.filter((ref) => valid.has(ref)) })),
  };
}
