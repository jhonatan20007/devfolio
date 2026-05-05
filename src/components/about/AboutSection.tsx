import { aboutContent, skillGroups } from "../../content/about";

function HighlightCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-card border border-outline-variant/20 bg-surface-container/40 p-5 transition-colors hover:border-brand/25 hover:bg-surface-container/70 md:p-6">
      <h3 className="font-display text-base font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

export function AboutSection() {
  const { eyebrow, title, subtitle, paragraphs, highlights } = aboutContent;

  return (
    <section id="sobre-mi" aria-labelledby="about-heading" className="stitch-section scroll-mt-24 md:scroll-mt-28">
      <div className="stitch-section-inner">
        <div className="flex flex-col gap-stack-lg lg:flex-row lg:items-start lg:gap-16">
          <div className="min-w-0 flex-1 space-y-stack-lg">
            <header className="max-w-xl">
              <p className="stitch-eyebrow">{eyebrow}</p>
              <h2 id="about-heading" className="stitch-headline mt-3">
                {title}
              </h2>
              <div className="stitch-rule" />
              <p className="mt-stack-md font-body text-[17px] leading-relaxed text-muted">{subtitle}</p>
            </header>

            <div className="max-w-xl space-y-4 font-body leading-relaxed text-muted">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="grid gap-stack-md sm:grid-cols-3">
              {highlights.map((h) => (
                <HighlightCard key={h.title} title={h.title} description={h.description} />
              ))}
            </div>
          </div>

          <aside className="w-full shrink-0 lg:sticky lg:top-28 lg:w-[min(100%,340px)]">
            <div className="rounded-card border border-outline-variant/20 bg-surface-container/60 p-6 backdrop-blur-md md:p-8">
              <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">Habilidades</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                Inventario de stack agrupado por áreas de trabajo.
              </p>
              <ul className="mt-stack-lg space-y-stack-md">
                {skillGroups.map((group) => (
                  <li key={group.title}>
                    <p className="stitch-eyebrow text-[10px] text-secondary">{group.title}</p>
                    <ul className="mt-stack-sm flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li key={item}>
                          <span className="inline-flex rounded-full bg-surface-low px-3 py-1 font-body text-xs font-medium text-foreground ring-1 ring-outline-variant/15">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
