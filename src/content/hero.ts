/** Rutas públicas (carpeta `public/` → raíz del sitio en Vite). */
export const assetPaths = {
  profilePhoto: "/assets/images/porfolio.png",
  cvPdf: "/assets/cv/CV-Jhonatan_Vanegas.pdf",
  cvDownloadFileName: "CV-Jhonatan_Vanegas.pdf",
} as const;

export const heroContent = {
  eyebrow: "Portafolio profesional · Open to work",
  headlineLead: "Construyo productos web",
  headlineAccent: "claros, rápidos y accesibles.",
  description:
    "Desarrollador full‑stack enfocado en experiencias pulidas, código mantenible y entrega iterativa. Transformo diseños en interfaces que tu equipo puede escalar.",
  photoAlt: "Foto de perfil de Jhonatan Vanegas",
  primaryCta: { label: "Ver proyectos", href: "#proyectos" },
  secondaryCta: { label: "Descargar CV", href: assetPaths.cvPdf },
  tertiaryLink: { label: "Contacto directo", href: "#contacto" },
  tags: ["React", "TypeScript", "Tailwind", "Node.js"],
} as const;
