import { useMemo, useState } from "react";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";

import { MenuSection } from "@/components/menu/MenuSection";
import { HighlightSheet } from "@/components/menu/HighlightSheet";
import { DiscoveryTicker } from "@/components/menu/DiscoveryTicker";
import {
  toHighlights,
  toRestaurant,
  toSections,
  type Highlight,
  type MenuDoc,
  type Section,
} from "@/data/menu-doc";

function filterSections(all: Section[], q: string): Section[] {
  const query = q.trim().toLowerCase();
  if (!query) return all;
  const out: Section[] = [];
  for (const s of all) {
    const titleHit = s.title.toLowerCase().includes(query);
    if (s.kind === "list") {
      const items = titleHit ? s.items : s.items.filter((i) => i.name.toLowerCase().includes(query));
      if (items.length) {
        const { image: _img, ...rest } = s;
        out.push({ ...rest, items });
      }
    } else {
      const rows = titleHit ? s.rows : s.rows.filter((r) => r.name.toLowerCase().includes(query));
      if (rows.length) {
        const { image: _img, ...rest } = s;
        out.push({ ...rest, rows });
      }
    }
  }
  return out;
}

/**
 * The customer-facing MenuSnap menu. Presentation is owned by MenuSnap; the
 * document only supplies content (the owner dashboard preview renders this
 * exact component with the draft document).
 */
export function MenuView({ doc }: { doc: MenuDoc }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Highlight | null>(null);

  const restaurant = useMemo(() => toRestaurant(doc), [doc]);
  const sections = useMemo(() => toSections(doc), [doc]);
  const highlights = useMemo(() => toHighlights(doc), [doc]);
  const visible = useMemo(() => filterSections(sections, query), [sections, query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto w-full max-w-[480px] px-5 pb-20 md:border-x md:border-border/60">
        {/* Identity */}
        <header className="pt-7 text-center">
          {restaurant.logo ? (
            <img
              src={restaurant.logo}
              alt={`${restaurant.name} — ${restaurant.kicker} logo`}
              width={1664}
              height={624}
              fetchPriority="high"
              decoding="async"
              className="mx-auto w-full max-w-[380px] object-contain"
            />
          ) : (
            <p className="font-display text-[26px] leading-none text-foreground">{restaurant.name}</p>
          )}
          <h1 className="sr-only">
            {restaurant.name} — {restaurant.kicker} Menu
          </h1>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[13px] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Open now
            </span>
            <span aria-hidden>·</span>
            <span>{restaurant.hours}</span>
          </div>
        </header>

        {/* Hero */}
        {restaurant.hero && (
          <figure className="mt-6 overflow-hidden rounded-[12px]">
            <img
              src={restaurant.hero}
              alt={`Table of food at ${restaurant.name}`}
              decoding="async"
              fetchPriority="high"
              width={1600}
              height={900}
              className="aspect-[21/9] w-full object-cover"
            />
          </figure>
        )}

        {/* Search */}
        <div className="mt-6">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search menu"
            aria-label="Search menu"
            className="w-full rounded-full border border-border bg-card px-4 py-3 text-[15px] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/30"
          />
        </div>

        {/* Discovery ticker */}
        <DiscoveryTicker items={highlights.filter((h) => h.items.length > 0)} onSelect={setActive} />

        <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          All prices in {restaurant.currency} · Taxes included
        </p>

        {/* Menu */}
        {visible.length === 0 ? (
          <p className="py-16 text-center text-[14px] text-muted-foreground">
            Nothing on the menu matches “{query}”.
          </p>
        ) : (
          visible.map((s) => <MenuSection key={s.id} section={s} badges={highlights} />)
        )}

        {/* Footer */}
        <footer className="mt-16 border-t border-border pt-8 text-[13.5px] leading-relaxed text-muted-foreground">
          <p className="font-display text-[20px] leading-none text-foreground">{restaurant.name}</p>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {restaurant.kicker}
          </p>

          <ul className="mt-5 space-y-2.5">
            <li className="flex items-center gap-2.5">
              <MapPin className="h-[15px] w-[15px] shrink-0 text-muted-foreground/70" />
              <span>{restaurant.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-[15px] w-[15px] shrink-0 text-muted-foreground/70" />
              <a
                href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-foreground"
              >
                {restaurant.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="h-[15px] w-[15px] shrink-0 text-muted-foreground/70" />
              <span>{restaurant.hours}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Instagram className="h-[15px] w-[15px] shrink-0 text-muted-foreground/70" />
              <a
                href={`https://instagram.com/${restaurant.instagram.replace(/^@/, "")}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Instagram ${restaurant.instagram}`}
                className="transition-colors hover:text-foreground"
              >
                {restaurant.instagram}
              </a>
            </li>
          </ul>

          <p className="mt-10 text-center text-[10.5px] uppercase tracking-[0.28em] text-muted-foreground/60">
            Powered by MenuSnap
          </p>
        </footer>
      </main>

      <HighlightSheet highlight={active} onClose={() => setActive(null)} />
    </div>
  );
}
