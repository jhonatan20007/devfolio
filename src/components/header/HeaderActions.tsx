import { siteLinks } from "../../content/site";

type HeaderActionsProps = {
  onPrimaryClick?: () => void;
};

export function HeaderActions({ onPrimaryClick }: HeaderActionsProps) {
  return (
    <div className="flex shrink-0 items-center gap-2 md:gap-3">
      <a
        href={siteLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden h-10 items-center rounded-full border border-outline-variant/25 px-5 font-body text-sm font-semibold text-foreground transition hover:bg-surface-container/90 sm:inline-flex"
      >
        GitHub
      </a>
      <a
        href="#contacto"
        onClick={onPrimaryClick}
        className="inline-flex h-10 items-center justify-center rounded-full bg-brand px-6 font-body text-sm font-semibold text-white transition hover:bg-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Hablemos
      </a>
    </div>
  );
}
