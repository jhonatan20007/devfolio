import { featuredProjects } from "../../content/projects";

function ProjectCard({
  index,
  title,
  description,
  tags,
  repoUrl,
  liveUrl,
}: {
  index: number;
  title: string;
  description: string;
  tags: readonly string[];
  repoUrl: string;
  liveUrl?: string | null;
}) {
  const demo = liveUrl?.trim();
  const num = String(index).padStart(2, "0");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-outline-variant/20 bg-surface-container/50 transition-colors hover:border-brand/22 hover:bg-surface-container/85">
      <div className="relative h-36 overflow-hidden bg-linear-to-br from-brand/18 via-surface-highest to-surface-low md:h-40">
        <span className="absolute bottom-3 left-5 font-display text-5xl font-bold tabular-nums text-foreground/[0.07] transition-colors group-hover:text-brand/25">
          {num}
        </span>
        <div className="absolute inset-0 bg-linear-to-t from-surface-container/90 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="mt-stack-sm flex-1 font-body text-sm leading-relaxed text-muted md:text-[15px]">{description}</p>

        <ul className="mt-stack-md flex flex-wrap gap-2" aria-label="Tecnologías">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="inline-flex rounded-full bg-surface-low px-2.5 py-1 font-body text-[11px] font-medium uppercase tracking-wide text-muted ring-1 ring-outline-variant/15">
                {tag}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-stack-md flex flex-wrap gap-4 border-t border-outline-variant/15 pt-stack-md">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-body text-sm font-semibold text-brand transition hover:text-primary"
          >
            Repositorio
            <span aria-hidden className="text-xs opacity-70">
              ↗
            </span>
          </a>
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-body text-sm font-semibold text-secondary transition hover:text-foreground"
            >
              Demo en vivo
              <span aria-hidden className="text-xs opacity-70">
                ↗
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="proyectos" aria-labelledby="projects-heading" className="stitch-section scroll-mt-24 md:scroll-mt-28">
      <div className="stitch-section-inner">
        <header className="max-w-2xl">
          <p className="stitch-eyebrow">Portafolio</p>
          <h2 id="projects-heading" className="stitch-headline mt-3">
            Proyectos destacados
          </h2>
          <div className="stitch-rule" />
          <p className="mt-stack-md font-body text-[17px] leading-relaxed text-muted">
            Cabecera tonal, jerarquía tipográfica clara y chips compactos para cada stack.
          </p>
        </header>

        <div className="mt-stack-lg grid gap-stack-md md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <ProjectCard
              key={p.repoUrl}
              index={i + 1}
              title={p.title}
              description={p.description}
              tags={p.tags}
              repoUrl={p.repoUrl}
              liveUrl={p.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
