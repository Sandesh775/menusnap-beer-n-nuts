export const themes = ["modern", "dark", "luxury", "traditional", "minimal"] as const;
export type Theme = (typeof themes)[number];

export function ThemeSwitcher({
  theme,
  onChange,
}: {
  theme: Theme;
  onChange: (t: Theme) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5">
      {themes.map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => onChange(t)}
          aria-pressed={theme === t}
          className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.14em] transition-all duration-300 ${
            theme === t
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border text-muted-foreground hover:border-primary/40"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
