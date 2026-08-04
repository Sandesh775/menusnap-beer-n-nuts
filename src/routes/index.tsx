import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero.jpg";
import logoImg from "@/assets/logo.png";
import { MenuCard } from "@/components/menu/MenuCard";
import { ThemeSwitcher, type Theme } from "@/components/menu/ThemeSwitcher";
import { categories, menu, restaurant } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Solail — Digital Menu | MenuSnap" },
      {
        name: "description",
        content:
          "Scan-to-view digital menu for Maison Solail in Jhamsikhel: wood-fired pizza, momo, matcha and desserts with live prices.",
      },
      { property: "og:title", content: "Maison Solail — Digital Menu" },
      {
        property: "og:description",
        content: "Wood fire, small plates and slow mornings. View the full menu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [theme, setTheme] = useState<Theme>("modern");
  const [active, setActive] = useState(categories[0]!.id);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(`section-${c.id}`))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id.replace("section-", ""));
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const pill = barRef.current?.querySelector<HTMLElement>(`[data-cat="${active}"]`);
    pill?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  return (
    <div data-theme={theme} className="min-h-screen bg-background text-foreground">
      <main className="mx-auto w-full max-w-[520px] pb-16">
        {/* Hero */}
        <header className="rise px-5 pt-7">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt={`${restaurant.name} logo`}
              width={512}
              height={512}
              className="h-11 w-11 rounded-full bg-card object-contain ring-1 ring-border"
            />
            <div className="min-w-0 flex-1">
              <h1 className="font-display text-[22px] font-semibold leading-tight tracking-[-0.02em]">
                {restaurant.name}
              </h1>
              <p className="mt-0.5 truncate text-[12px] text-muted-foreground">
                {restaurant.tagline}
              </p>
            </div>
            <span className="rounded-full bg-accent px-2.5 py-1 text-[12px] font-medium text-accent-foreground">
              ★ {restaurant.rating}
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2 text-[12px] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Open now · until 22:30
            </span>
            <span className="truncate">{restaurant.location}</span>
          </div>

          <figure className="mt-5 overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
            <img
              src={heroImg}
              alt="Wood-fired pizza and steamed momo on a dark stone table"
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </header>

        {/* Sticky category bar */}
        <nav className="sticky top-0 z-20 mt-6 bg-background/85 py-3 backdrop-blur-xl">
          <div
            ref={barRef}
            className="no-scrollbar flex gap-2 overflow-x-auto scroll-smooth px-5"
          >
            {categories.map((c) => (
              <a
                key={c.id}
                data-cat={c.id}
                href={`#section-${c.id}`}
                className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                  active === c.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground"
                }`}
              >
                <span className="mr-1.5">{c.emoji}</span>
                {c.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Menu */}
        <div className="px-5">
          {categories.map((c) => {
            const items = menu.filter((m) => m.category === c.id);
            if (!items.length) return null;
            return (
              <section key={c.id} id={`section-${c.id}`} className="scroll-mt-20 pt-9">
                <div className="mb-4 flex items-baseline justify-between">
                  <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {c.label}
                  </h2>
                  <span className="text-[12px] tabular-nums text-muted-foreground/70">
                    {items.length}
                  </span>
                </div>
                <div className="flex flex-col gap-5">
                  {items.map((item, i) => (
                    <MenuCard key={item.id} item={item} index={i} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-14 border-t border-border px-5 pt-8 text-[12.5px] leading-relaxed text-muted-foreground">
          <p>📍 {restaurant.address}</p>
          <p className="mt-1.5">
            ☎{" "}
            <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
              {restaurant.phone}
            </a>
          </p>
          <p className="mt-1.5">
            <a
              href={`https://instagram.com/${restaurant.instagram.slice(1)}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              Instagram {restaurant.instagram}
            </a>
          </p>
          <p className="mt-1.5">🕘 {restaurant.hours}</p>

          <div className="mt-7">
            <ThemeSwitcher theme={theme} onChange={setTheme} />
            <p className="mt-4 text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground/60">
              MenuSnap
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
