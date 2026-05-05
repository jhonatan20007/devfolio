/**
 * Design tokens exportados desde Stitch (proyecto Professional Developer Portfolio Showcase).
 * Úsalos en lógica o documentación; los estilos visibles viven en `src/index.css` (@theme).
 */
export const stitchMeta = {
  projectTitle: "Professional Developer Portfolio Showcase",
  colorMode: "DARK" as const,
  accent: "#6366F1",
  headlineFont: "Space Grotesk",
  bodyFont: "Inter",
} as const;

export const colors = {
  background: "#0b1326",
  surface: "#0b1326",
  surface_container_low: "#131b2e",
  surface_container: "#171f33",
  surface_container_high: "#222a3d",
  surface_container_highest: "#2d3449",
  surface_bright: "#31394d",
  on_surface: "#dae2fd",
  on_surface_variant: "#c7c4d7",
  outline: "#908fa0",
  primary: "#c0c1ff",
  primary_container: "#8083ff",
  brand: "#6366F1",
  on_primary: "#1000a9",
  secondary: "#89ceff",
  on_secondary: "#00344d",
  error: "#ffb4ab",
  error_container: "#93000a",
} as const;

export const spacing = {
  unit: "4px",
  stack_sm: "8px",
  stack_md: "16px",
  stack_lg: "32px",
  gutter: "24px",
  margin_page: "48px",
  section_gap: "120px",
  container_max: "1200px",
} as const;

export const typography = {
  "headline-xl": {
    fontFamily: "Space Grotesk",
    fontSize: "48px",
    fontWeight: "700",
    lineHeight: "1.1",
    letterSpacing: "-0.02em",
  },
  "headline-lg": {
    fontFamily: "Space Grotesk",
    fontSize: "32px",
    fontWeight: "600",
    lineHeight: "1.2",
    letterSpacing: "-0.01em",
  },
  "headline-md": {
    fontFamily: "Space Grotesk",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "1.3",
  },
  "body-lg": {
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "1.6",
  },
  "body-md": {
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.6",
  },
  "body-sm": {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "1.5",
  },
  "label-md": {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "1",
    letterSpacing: "0.05em",
  },
  "mono-sm": {
    fontFamily: "Space Grotesk",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "1.5",
  },
} as const;

export type TypographyRole = keyof typeof typography;
