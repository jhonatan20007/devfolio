export const aboutContent = {
  eyebrow: "Perfil profesional",
  title: "Sobre mí",
  subtitle:
    "Combino criterio de producto con ejecución técnica sólida para entregar software que se entiende, se mantiene y escala.",
  paragraphs: [
    "Soy desarrollador full‑stack con foco en interfaces claras y backends bien estructurados. Me gusta trabajar de forma iterativa: definir entregables pequeños, medir impacto y mejorar con feedback real.",
    "En el día a día priorizo TypeScript, componentes reutilizables, accesibilidad básica donde suma, y documentación mínima pero útil para el equipo. También disfruto cerrar la brecha entre diseño y código.",
    "Actualmente busco proyectos donde pueda aportar desde la idea hasta el despliegue, colaborando con equipos que valoren comunicación directa y calidad sostenible.",
  ],
  highlights: [
    {
      title: "Producto end‑to‑end",
      description: "De prototipo a producción: APIs, UI y despliegues cuando el contexto lo permite.",
    },
    {
      title: "Código mantenible",
      description: "Estructura legible, tipado donde aplica y revisiones orientadas a claridad.",
    },
    {
      title: "Colaboración",
      description: "Pairing, PRs concretos y alineación frecuente con diseño y negocio.",
    },
  ],
} as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Vite", "HTML semántico"],
  },
  {
    title: "Backend & datos",
    items: ["Node.js", "APIs REST", "SQL", "Integraciones"],
  },
  {
    title: "Prácticas & herramientas",
    items: ["Git", "CI/CD", "Pruebas manuales / smoke", "Figma"],
  },
] as const;
