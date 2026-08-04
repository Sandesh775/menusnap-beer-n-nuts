import type { MenuItem } from "@/data/menu";

const badgeLabel: Record<string, string> = {
  veg: "Veg",
  spicy: "Spicy",
  chef: "Chef's pick",
};

export function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <article
      className="group overflow-hidden rounded-[var(--radius-card)] bg-card shadow-[var(--shadow-card)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
      style={{ animationDelay: `${Math.min(index, 6) * 60}ms` }}
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={900}
          height={700}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        {item.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-card/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-foreground backdrop-blur-md">
            {badgeLabel[item.badge]}
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-4 px-5 py-4">
        <div className="min-w-0">
          <h3 className="font-display text-[17px] leading-tight tracking-[-0.01em] text-foreground">
            {item.name}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-[13px] leading-snug text-muted-foreground">
            {item.description}
          </p>
        </div>
        <span className="shrink-0 pt-0.5 text-[15px] font-semibold tabular-nums tracking-tight text-primary">
          {item.price}
        </span>
      </div>
    </article>
  );
}
