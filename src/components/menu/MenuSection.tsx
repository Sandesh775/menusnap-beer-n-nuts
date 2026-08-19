import type { Section } from "@/data/menu";
import { DEFAULT_HIGHLIGHTS } from "@/data/highlights";

function fmt(v: number | string) {
  return typeof v === "number" ? v.toLocaleString("en-IN") : v;
}

export function MenuSection({
  section,
  badges,
}: {
  section: Section;
  badges?: { key: string; emoji: string; label: string }[];
}) {
  const all = badges ?? DEFAULT_HIGHLIGHTS;
  const badge = section.badge ? all.find((b) => b.key === section.badge) : null;

  return (
    <section id={section.id} className="scroll-mt-16 pt-11">
      <header className="mb-4">
        <h2 className="font-display text-[22px] leading-none tracking-[-0.01em] text-foreground">
          {section.title}
        </h2>
        <div className="mt-3 h-px w-full bg-border" />
        {section.note && (
          <p className="mt-2 text-[11.5px] uppercase tracking-[0.14em] text-muted-foreground">
            {section.note}
          </p>
        )}
      </header>

      {section.image && (
        <figure className="relative mb-5 overflow-hidden rounded-[10px]">
          {badge && (
            <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-foreground backdrop-blur-sm">
              <span aria-hidden>{badge.emoji}</span>
              {badge.label}
            </span>
          )}
          <img
            src={section.image}
            alt={section.title}
            loading="lazy"
            decoding="async"
            width={1200}
            height={800}
            className="aspect-[16/9] w-full object-cover"
          />
        </figure>
      )}

      {section.kind === "list" ? (
        <ul className="space-y-0">
          {section.items.map((item) => (
            <li
              key={item.name}
              className="flex items-baseline gap-3 border-b border-border/50 py-[11px] last:border-0"
            >
              <span className="min-w-0 flex-1 text-[15px] leading-snug text-foreground">
                {item.name}
              </span>
              <span className="shrink-0 text-[15px] tabular-nums text-muted-foreground">
                {fmt(item.price)}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="-mx-5 overflow-x-auto overscroll-x-contain px-5 [-webkit-overflow-scrolling:touch]">
          <table className="w-full min-w-max border-collapse text-[14.5px]">
            <thead>
              <tr>
                <th className="sticky left-0 bg-background pb-2 text-left text-[10.5px] font-medium uppercase tracking-[0.14em] text-muted-foreground" />
                {section.columns.map((c) => (
                  <th
                    key={c}
                    className="pb-2 pl-5 text-right text-[10.5px] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((r) => (
                <tr key={r.name} className="border-t border-border/50">
                  <td className="sticky left-0 bg-background py-[11px] pr-4 text-left text-foreground">
                    {r.name}
                  </td>
                  {r.prices.map((p, i) => (
                    <td
                      key={i}
                      className="py-[11px] pl-5 text-right tabular-nums text-muted-foreground"
                    >
                      {fmt(p)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
