import { highlights, type Highlight } from "@/data/highlights";

export function DiscoveryTicker({ onSelect }: { onSelect: (h: Highlight) => void }) {
  const loop = [...highlights, ...highlights];

  return (
    <div
      className="group relative -mx-5 overflow-hidden py-2"
      aria-label="Discover highlights"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent" />
      <div className="ticker-track flex w-max items-center gap-6 pl-5 hover:[animation-play-state:paused]">
        {loop.map((h, i) => (
          <button
            key={`${h.key}-${i}`}
            type="button"
            onClick={() => onSelect(h)}
            aria-hidden={i >= highlights.length}
            tabIndex={i >= highlights.length ? -1 : 0}
            className="flex shrink-0 items-center gap-3 text-[12.5px] tracking-[0.06em] text-muted-foreground transition-colors hover:text-foreground active:text-foreground"
          >
            <span className="whitespace-nowrap">
              <span className="mr-1.5" aria-hidden>
                {h.emoji}
              </span>
              {h.label}
            </span>
            <span aria-hidden className="text-muted-foreground/40">
              ·
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
