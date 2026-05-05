import { Hero } from "./Hero";

/** `#inicio`: hero estilo Stitch (superficie limpia, sin marco fuerte). */
export function HomeSection() {
  return (
    <section id="inicio" aria-labelledby="hero-heading" className="scroll-mt-24 md:scroll-mt-28">
      <Hero />
    </section>
  );
}
