import { assetPaths } from "../../content/hero";
import { complementaryCourses, experienceRoles } from "../../content/experience";
import { siteLinks } from "../../content/site";

export function ExperienceSection() {
  return (
    <section id="experiencia" aria-labelledby="experience-heading" className="stitch-section scroll-mt-24 md:scroll-mt-28">
      <div className="stitch-section-inner">
        <header className="max-w-2xl">
          <p className="stitch-eyebrow">Trayectoria</p>
          <h2 id="experience-heading" className="stitch-headline mt-3">
            Experiencia laboral
          </h2>
          <div className="stitch-rule" />
          <p className="mt-stack-md font-body text-[17px] leading-relaxed text-muted">
            Misma información que tu CV, en bloques fáciles de escanear.
          </p>
        </header>

        <div className="mt-stack-lg lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
          <div className="flex flex-col gap-stack-md">
            {experienceRoles.map((role) => (
              <article
                key={`${role.company}-${role.period}`}
                className="rounded-card border border-outline-variant/20 bg-surface-container/55 p-6 backdrop-blur-sm md:p-8"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                      {role.title}
                    </h3>
                    <p className="mt-1 font-body text-sm text-muted">
                      <span className="text-foreground">{role.company}</span>
                      <span className="text-outline"> · </span>
                      {role.location}
                    </p>
                  </div>
                  <span className="inline-flex w-fit shrink-0 rounded-full border border-brand/20 bg-brand/10 px-3 py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    {role.period}
                  </span>
                </div>
                <ul className="mt-stack-md space-y-2 border-t border-outline-variant/15 pt-stack-md font-body text-sm leading-relaxed text-muted">
                  {role.highlights.map((line, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-brand/70" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="mt-stack-lg flex flex-col gap-stack-md lg:mt-0">
            <div className="rounded-card border border-outline-variant/20 bg-surface-container/60 p-6 backdrop-blur-md">
              <h3 className="font-display text-base font-semibold text-foreground">Formación complementaria</h3>
              <p className="mt-1 font-body text-xs text-muted">Según tu CV.</p>
              <ul className="mt-stack-md space-y-3">
                {complementaryCourses.map((c) => (
                  <li
                    key={`${c.title}-${c.date}`}
                    className="flex items-baseline justify-between gap-3 border-b border-outline-variant/15 pb-3 font-body text-sm last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-foreground">
                      {c.title}
                      <span className="font-normal text-muted"> · {c.provider}</span>
                    </span>
                    <span className="shrink-0 text-xs text-muted">{c.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-card border border-outline-variant/20 bg-surface-container/60 p-6 backdrop-blur-md">
              <h3 className="font-display text-base font-semibold text-foreground">Enlaces</h3>
              <p className="mt-1 font-body text-xs text-muted">CV y perfiles.</p>
              <div className="mt-stack-md flex flex-col gap-2">
                <a
                  href={assetPaths.cvPdf}
                  download={assetPaths.cvDownloadFileName}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand font-body text-sm font-semibold text-white transition hover:bg-primary-container"
                >
                  Descargar CV
                </a>
                <a
                  href={siteLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-outline-variant/30 font-body text-sm font-semibold text-foreground transition hover:bg-surface-high"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={siteLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-outline-variant/30 font-body text-sm font-semibold text-foreground transition hover:bg-surface-high"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
