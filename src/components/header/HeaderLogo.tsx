type HeaderLogoProps = {
  mark?: string;
  title?: string;
  subtitle?: string;
};

export function HeaderLogo({
  mark = "JV",
  title = "Portafolio",
  subtitle = "Full‑stack dev",
}: HeaderLogoProps) {
  return (
    <a
      href="#inicio"
      className="group flex items-center gap-3 rounded-full py-1 ps-1 pe-2 outline-none transition hover:bg-surface-container/50 focus-visible:ring-2 focus-visible:ring-brand/40"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold tracking-tight text-white">
        {mark}
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">{title}</span>
        <span className="truncate font-body text-[11px] uppercase tracking-wider text-muted">{subtitle}</span>
      </span>
    </a>
  );
}
