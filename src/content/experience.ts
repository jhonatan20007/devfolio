/**
 * Datos tomados del CV (CV-Jhonatan_Vanegas.pdf).
 * Textos adaptados al español del portafolio; revisa fechas si actualizas el PDF.
 */
export type ExperienceRole = {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: readonly string[];
};

export const experienceRoles: readonly ExperienceRole[] = [
  {
    title: "Semi senior — desarrollo y automatización",
    company: "2NV",
    location: "Medellín",
    period: "Oct 2023 — Ago 2025",
    highlights: [
      "Automatización de un proceso manual crítico con una reducción aproximada del 40% anual en carga operativa.",
      "Diseño, desarrollo y pruebas de bots RPA con Automation Anywhere y UiPath.",
      "Documentación: manuales de usuario, diagramas de flujo y procesos.",
      "Pruebas unitarias, de integración y de rendimiento para asegurar soluciones robustas.",
      "Análisis de procesos para detectar e implementar oportunidades de optimización.",
      "Scrum para gestionar el ciclo de vida de los proyectos.",
      "Automatizaciones que contribuyeron a reducir el uso de recursos computacionales en torno a un 30%.",
    ],
  },
  {
    title: "Junior — desarrollo full stack",
    company: "Softools",
    location: "Medellín",
    period: "Feb 2021 — Sep 2023",
    highlights: [
      "Desarrollo y mantenimiento de soluciones full stack para aplicaciones empresariales.",
      "Optimización de bases de datos con procedimientos almacenados, funciones, vistas e índices.",
      "Control de versiones con GitHub para seguimiento y colaboración.",
      "Automatización de tareas recurrentes mediante scripts y jobs programados.",
      "Uso de patrones de diseño orientados a modularidad y escalabilidad.",
    ],
  },
  {
    title: "Auxiliar de software",
    company: "IoSoft",
    location: "Medellín",
    period: "Jun 2019 — Ene 2021",
    highlights: [
      "Soluciones web y backend para proyectos internos.",
      "Implementación de nuevas funcionalidades y optimización de sistemas existentes.",
      "Código mantenible en Python, JavaScript y C#.",
      "Maquetas de interfaz en Figma para guiar el front.",
      "Documentación y trabajo colaborativo con Confluence, Jira, Miro y Azure DevOps.",
      "Metodología ágil (Scrum) para hitos y entregables.",
      "Contribución a servicios de firma digital de documentos con Python y bibliotecas de almacenamiento en AWS.",
    ],
  },
];

export type ShortCourse = {
  title: string;
  provider: string;
  date: string;
};

/** Cursos del CV (sección COURSES). */
export const complementaryCourses: readonly ShortCourse[] = [
  { title: "AWS", provider: "Coursera", date: "Feb 2025" },
  { title: "Python", provider: "Coursera", date: "Ene 2025" },
];
