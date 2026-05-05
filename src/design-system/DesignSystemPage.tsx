import { colors, spacing, stitchMeta, typography, type TypographyRole } from "./tokens";

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-stack-lg space-y-2">
      <p className="font-body text-sm font-semibold uppercase tracking-widest text-brand">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl font-body text-lg text-muted">{description}</p>
      ) : null}
    </header>
  );
}

function ColorChip({ name, hex }: { name: string; hex: string }) {
  return (
    <div className="overflow-hidden rounded-card border border-outline-variant/40 bg-surface-container">
      <div className="aspect-4/3 w-full" style={{ backgroundColor: hex }} />
      <div className="space-y-0.5 p-4">
        <p className="font-display text-sm font-medium text-foreground">{name}</p>
        <p className="font-body text-xs uppercase tracking-wide text-muted">{hex}</p>
      </div>
    </div>
  );
}

function TypeSample({ role }: { role: TypographyRole }) {
  const t = typography[role];
  const style = {
    fontFamily: t.fontFamily,
    fontSize: t.fontSize,
    fontWeight: Number(t.fontWeight),
    lineHeight: t.lineHeight,
    letterSpacing: "letterSpacing" in t ? t.letterSpacing : undefined,
  };
  return (
    <div className="flex flex-col gap-3 border-b border-outline-variant/30 py-6 md:flex-row md:items-start md:gap-10">
      <div className="w-full shrink-0 md:w-48">
        <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted">{role}</p>
        <p className="font-body text-xs text-outline">{t.fontSize}</p>
      </div>
      <p style={style} className="text-foreground">
        Agente full‑stack enfocado en productos claros, rápidos y accesibles.
      </p>
    </div>
  );
}

export function DesignSystemPage() {
  const palette = Object.entries(colors).map(([name, hex]) => ({ name, hex }));

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-design px-6 py-page md:px-gutter">
        <header className="mb-section border-b border-outline-variant/40 pb-12">
          <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-brand">
            Stitch → código
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl md:leading-[1.1]">
            Design system
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-muted">
            Base visual para el portafolio, alineada al proyecto{" "}
            <span className="text-foreground">{stitchMeta.projectTitle}</span> · modo{" "}
            {stitchMeta.colorMode} · tipografía {stitchMeta.headlineFont} + {stitchMeta.bodyFont}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-control bg-brand px-6 py-3 font-body text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:brightness-110"
            >
              Botón principal
            </button>
            <button
              type="button"
              className="rounded-control border border-outline bg-transparent px-6 py-3 font-body text-sm font-semibold text-foreground transition hover:bg-surface-high"
            >
              Secundario
            </button>
            <button
              type="button"
              className="rounded-control bg-secondary px-6 py-3 font-body text-sm font-semibold text-on-secondary transition hover:brightness-110"
            >
              Acento frío
            </button>
          </div>
        </header>

        <section className="py-section">
          <SectionTitle
            eyebrow="Tokens"
            title="Paleta semántica"
            description="Colores Material / Stitch mapeados a superficies, texto y marcas para mantener contraste en modo oscuro."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {palette.map(({ name, hex }) => (
              <ColorChip key={name} name={name.replace(/_/g, " ")} hex={hex} />
            ))}
          </div>
        </section>

        <section className="py-section">
          <SectionTitle
            eyebrow="Tipografía"
            title="Escala tipográfica"
            description="Titulares en Space Grotesk; cuerpo y etiquetas en Inter, según la especificación del proyecto en Stitch."
          />
          <div className="rounded-card border border-outline-variant/40 bg-surface-container p-6 md:p-10">
            {(Object.keys(typography) as TypographyRole[]).map((role) => (
              <TypeSample key={role} role={role} />
            ))}
          </div>
        </section>

        <section className="py-section">
          <SectionTitle
            eyebrow="Espaciado"
            title="Ritmo vertical"
            description={`Unidad ${spacing.unit}; stacks ${spacing.stack_sm} / ${spacing.stack_md} / ${spacing.stack_lg}; secciones ${spacing.section_gap}.`}
          />
          <div className="flex flex-wrap items-end gap-4">
            {(["stack_sm", "stack_md", "stack_lg", "section_gap"] as const).map((key) => (
              <div key={key} className="flex flex-col items-center gap-2">
                <div
                  className="w-14 rounded-md bg-brand/80"
                  style={{ height: spacing[key] }}
                  title={spacing[key]}
                />
                <span className="font-body text-xs text-muted">{key}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-section pb-24">
          <SectionTitle
            eyebrow="Componentes base"
            title="Tarjetas y superficies"
            description="Patrones de elevación usando surface_container y bordes sutiles."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-card border border-outline-variant/40 bg-surface-container p-8 shadow-xl shadow-black/20">
              <h3 className="font-display text-xl font-semibold text-primary">Destacado</h3>
              <p className="mt-3 font-body text-muted">
                Contenedor medio para agrupar métricas o extractos de proyectos.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-surface-highest px-3 py-1 font-body text-xs text-muted">
                <span className="size-2 rounded-full bg-brand" />
                Disponible para trabajo remoto
              </div>
            </article>
            <article className="rounded-card border border-brand/30 bg-surface-high p-8">
              <h3 className="font-display text-xl font-semibold text-secondary">Llamado a la acción</h3>
              <p className="mt-3 font-body text-muted">
                Variante con borde teñido para CTAs secundarios o avisos importantes.
              </p>
              <button
                type="button"
                className="mt-6 rounded-control bg-primary px-5 py-2.5 font-body text-sm font-semibold text-on-primary"
              >
                Ver detalle
              </button>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
