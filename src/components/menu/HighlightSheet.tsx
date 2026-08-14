import { Drawer, DrawerContent, DrawerTitle, DrawerClose } from "@/components/ui/drawer";
import { X } from "lucide-react";
import type { Highlight } from "@/data/highlights";

function fmt(v: number | string) {
  return typeof v === "number" ? v.toLocaleString("en-IN") : v;
}

export function HighlightSheet({
  highlight,
  onClose,
}: {
  highlight: Highlight | null;
  onClose: () => void;
}) {
  return (
    <Drawer open={!!highlight} onOpenChange={(o) => !o && onClose()}>
      <DrawerContent className="mx-auto max-w-[480px] border-border bg-background">
        {highlight && (
          <div className="max-h-[78vh] overflow-y-auto px-5 pb-9">
            <div className="flex items-center justify-between pt-2">
              <DrawerTitle className="text-[11.5px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                <span className="mr-1.5">{highlight.emoji}</span>
                {highlight.label}
              </DrawerTitle>
              <DrawerClose
                aria-label="Close"
                className="-mr-1 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </DrawerClose>
            </div>

            {highlight.image && (
              <figure className="mt-4 overflow-hidden rounded-[10px]">
                <img
                  src={highlight.image}
                  alt={highlight.label}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
              </figure>
            )}

            <ul className="mt-4">
              {highlight.items.map((i) => (
                <li
                  key={i.name}
                  className="flex items-baseline gap-3 border-b border-border/50 py-[13px] last:border-0"
                >
                  <span className="min-w-0 flex-1 text-[15px] leading-snug text-foreground">
                    {i.name}
                  </span>
                  <span className="shrink-0 text-[15px] tabular-nums text-muted-foreground">
                    {fmt(i.price)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}
