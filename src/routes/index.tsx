import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import logoImg from "@/assets/logo.png";
import { MenuSection } from "@/components/menu/MenuSection";
import { restaurant, sections, type Section } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beer N Nuts — Menu | MenuSnap" },
      {
        name: "description",
        content:
          "The full Beer N Nuts Restaurant & Bar menu in Jhamsikhel: momo, Newari special, pizza, coffee, snacks, beer and hard drinks with live NPR prices.",
      },
      { property: "og:title", content: "Beer N Nuts — Digital Menu" },
      {
        property: "og:description",
        content: "Scan, scroll, order. The whole menu on one calm page.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function filterSections(all: Section[], q: string): Section[] {
  const query = q.trim().toLowerCase();
  if (!query) return all;
  const out: Section[] = [];
  for (const s of all) {
    const titleHit = s.title.toLowerCase().includes(query);
    if (s.kind === "list") {
      const items = titleHit ? s.items : s.items.filter((i) => i.name.toLowerCase().includes(query));
      if (items.length) out.push({ ...s, items, image: undefined });
    } else {
      const rows = titleHit ? s.rows : s.rows.filter((r) => r.name.toLowerCase().includes(query));
      if (rows.length) out.push({ ...s, rows, image: undefined });
    }
  }
  return out;
}

function MenuPage() {
  const [query, setQuery] = useState("");
  const visible = useMemo(() => filterSections(sections, query), [query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto w-full max-w-[560px] px-5 pb-20">
        {/* Identity */}
        <header className="pt-9">
          <img
            src={logoImg}
            alt={`${restaurant.name} logo`}
            width={512}
            height={512}
            className="h-12 w-12 rounded-full object-contain"
          />
          <h1 className="mt-4 font-display text-[34px] leading-[1.05] tracking-[-0.02em]">
            {restaurant.name}
          </h1>
          <p className="mt-1.5 text-[11.5px] uppercase tracking-[0.22em] text-muted-foreground">
            {restaurant.kicker}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Open now
            </span>
            <span aria-hidden>·</span>
            <span>{restaurant.hours}</span>
          </div>
          <p className="mt-1 text-[13px] text-muted-foreground">{restaurant.location}</p>
        </header>

        {/* Hero */}
        <figure className="mt-6 overflow-hidden rounded-[12px]">
          <img
            src={restaurant.hero}
            alt="Table of food at Beer N Nuts"
            width={1600}
            height={900}
            className="aspect-[21/9] w-full object-cover"
          />
        </figure>

        {/* Search */}
        <div className="mt-6">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search menu"
            aria-label="Search menu"
            className="w-full rounded-full border border-border bg-card px-4 py-2.5 text-[14px] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/30"
          />
        </div>

        <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          All prices in {restaurant.currency} · Taxes included
        </p>

        {/* Menu */}
        {visible.length === 0 ? (
          <p className="py-16 text-center text-[14px] text-muted-foreground">
            Nothing on the menu matches “{query}”.
          </p>
        ) : (
          visible.map((s) => <MenuSection key={s.id} section={s} />)
        )}

        {/* Footer */}
        <footer className="mt-16 border-t border-border pt-7 text-[13px] leading-relaxed text-muted-foreground">
          <p className="font-display text-[17px] text-foreground">{restaurant.name}</p>
          <p className="mt-2">{restaurant.address}</p>
          <p className="mt-1">
            <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
              {restaurant.phone}
            </a>
          </p>
          <p className="mt-1">
            <a
              href={`https://instagram.com/${restaurant.instagram.slice(1)}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Instagram {restaurant.instagram}
            </a>
          </p>
          <p className="mt-1">{restaurant.hours}</p>
          <p className="mt-8 text-[10.5px] uppercase tracking-[0.28em] text-muted-foreground/60">
            MenuSnap
          </p>
        </footer>
      </main>
    </div>
  );
}
