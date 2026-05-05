import { assetPaths, heroContent } from "../../content/hero";

export function Hero() {
  const {
    eyebrow,
    headlineLead,
    headlineAccent,
    description,
    photoAlt,
    primaryCta,
    secondaryCta,
    tertiaryLink,
    tags,
  } = heroContent;

  return (
    <div className="relative overflow-hidden bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-18%] h-[min(420px,55vw)] w-[min(520px,70vw)] rounded-[40%] bg-brand/[0.14] blur-[120px]" />
        <div className="absolute bottom-[-35%] left-[-25%] h-[340px] w-[min(520px,85vw)] rounded-[45%] bg-secondary/[0.07] blur-[100px]" />
      </div>

      <div className="stitch-section-inner relative pb-[clamp(3rem,8vw,5rem)] pt-[clamp(2.5rem,7vw,4rem)]">
        <div className="grid items-center gap-stack-lg lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] lg:gap-16">
          <div className="max-w-xl lg:max-w-none lg:pr-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-outline-variant/25 bg-surface-container/70 px-4 py-2 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-muted backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand" />
              {eyebrow}
            </p>

            <h1
              id="hero-heading"
              className="mt-stack-md font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-foreground"
            >
              {headlineLead}{" "}
              <span className="bg-linear-to-r from-primary to-brand bg-clip-text text-transparent">
                {headlineAccent}
              </span>
            </h1>

            <p className="mt-stack-md max-w-lg font-body text-base leading-[1.65] text-muted md:text-[17px]">
              {description}
            </p>

            <div className="mt-stack-lg flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={primaryCta.href}
                className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-8 font-body text-sm font-semibold text-white transition hover:bg-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {primaryCta.label}
              </a>
              <a
                href={secondaryCta.href}
                download={assetPaths.cvDownloadFileName}
                className="inline-flex h-11 items-center justify-center rounded-full border border-outline-variant/35 bg-surface-container/80 px-8 font-body text-sm font-semibold text-foreground backdrop-blur-sm transition hover:border-outline-variant/55 hover:bg-surface-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-variant"
              >
                {secondaryCta.label}
              </a>
              <a
                href={tertiaryLink.href}
                className="inline-flex h-11 items-center gap-1 px-4 font-body text-sm font-semibold text-primary transition hover:text-brand"
              >
                {tertiaryLink.label}
                <span aria-hidden className="opacity-70">
                  →
                </span>
              </a>
            </div>

            <ul className="mt-stack-lg flex flex-wrap gap-2" aria-label="Stack principal">
              {tags.map((tag) => (
                <li key={tag}>
                  <span className="inline-flex rounded-full bg-surface-highest/90 px-3.5 py-1.5 font-body text-xs font-medium text-muted ring-1 ring-outline-variant/20">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <figure className="relative w-full max-w-[320px] lg:max-w-none">
              <div className="relative overflow-hidden rounded-card bg-surface-container ring-1 ring-outline-variant/25 lg:shadow-[0_24px_80px_-24px_rgba(0,0,0,0.55)]">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-brand/12 to-transparent"
                />
                <img
                  src={assetPaths.profilePhoto}
                  alt={photoAlt}
                  width={432}
                  height={432}
                  className="aspect-square w-full object-cover"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
