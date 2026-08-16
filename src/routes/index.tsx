import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";

import logoUrl from "@/assets/beer-n-nuts-logo.png";
import { MenuSection } from "@/components/menu/MenuSection";
import { HighlightSheet } from "@/components/menu/HighlightSheet";
import { DiscoveryTicker } from "@/components/menu/DiscoveryTicker";
import { type Highlight } from "@/data/highlights";
import { restaurant, sections, type Section } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beer N Nuts — Restaurant & Bar | Digital Menu" },
      {
        name: "description",
        content:
          "Explore the Beer N Nuts restaurant and bar menu, including food, drinks, coffee, snacks and more.",
      },
      { property: "og:title", content: "Beer N Nuts — Restaurant & Bar | Digital Menu" },
      {
        property: "og:description",
        content:
          "Explore the Beer N Nuts restaurant and bar menu, including food, drinks, coffee, snacks and more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://menusnap-elegant-view.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://menusnap-elegant-view.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Beer N Nuts Restaurant & Bar",
          servesCuisine: ["Nepalese", "Newari", "Continental"],
          telephone: "+977 9803339489",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Basantapur",
            addressLocality: "Kathmandu",
            addressCountry: "NP",
          },
          openingHours: "Mo-Su 08:00-21:00",
          hasMenu: "https://menusnap-elegant-view.lovable.app/",
        }),
      },
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
      const items = titleHit
        ? s.items
        : s.items.filter((i) => i.name.toLowerCase().includes(query));
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

function MenuPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Highlight | null>(null);
  const visible = useMemo(() => filterSections(sections, query), [query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto w-full max-w-[480px] px-5 pb-20 md:border-x md:border-border/60">
        {/* Identity */}
        <header className="pt-7 text-center">
          <img
            src={logoUrl}
            alt={`${restaurant.name} — Restaurant & Bar logo`}
            width={1664}
            height={624}
            fetchPriority="high"
            decoding="async"
            className="mx-auto w-full max-w-[380px] object-contain"
          />
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
        <figure className="mt-6 overflow-hidden rounded-[12px]">
          <img
            src={restaurant.hero}
            alt="Table of food at Beer N Nuts"
            decoding="async"
            fetchPriority="high"
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
            className="w-full rounded-full border border-border bg-card px-4 py-3 text-[15px] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/30"
          />
        </div>

        {/* Discovery ticker */}
        <DiscoveryTicker onSelect={setActive} />

        <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
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
                href={`https://instagram.com/${restaurant.instagram.slice(1)}`}
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
