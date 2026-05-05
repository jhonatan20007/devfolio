import { siteLinks } from "./site";

export type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  /** URL del repositorio */
  repoUrl: string;
  /** Deploy o demo; omitir o null si no aplica */
  liveUrl?: string | null;
};

/**
 * Proyectos destacados — enlaces basados en repos públicos de tu GitHub.
 * Ajusta textos, tags y añade `liveUrl` cuando tengas demo desplegada.
 */
export const featuredProjects: readonly Project[] = [
  {
    title: "Backend API (Java)",
    description:
      "API backend en Java para practicar capas de servicio, persistencia y exposición REST. Ideal para documentar decisiones de diseño y patrones que aplicaste.",
    tags: ["Java", "REST", "Backend"],
    repoUrl: `${siteLinks.github}/backendapiJava`,
    liveUrl: null,
  },
  {
    title: "React Student",
    description:
      "Proyecto front con React para ejercicios o entregas académicas: componentes, estado y consumo de datos. Resume aquí el objetivo del curso o del reto.",
    tags: ["React", "JavaScript", "Frontend"],
    repoUrl: `${siteLinks.github}/React-Student`,
    liveUrl: null,
  },
  {
    title: "API — Admin module",
    description:
      "Módulo administrativo sobre API en JavaScript: rutas, validaciones y flujos típicos de panel interno. Describe qué dominio cubre (usuarios, inventario, etc.).",
    tags: ["Node.js", "JavaScript", "API"],
    repoUrl: `${siteLinks.github}/API_ADMINMODULE`,
    liveUrl: null,
  },
  {
    title: "React Native",
    description:
      "Experiencia móvil con React Native: navegación, vistas y build. Indica si fue prototipo, curso o app orientada a un caso de uso concreto.",
    tags: ["React Native", "Mobile"],
    repoUrl: `${siteLinks.github}/ReaactNative`,
    liveUrl: null,
  },
];
