import { AboutSection } from "../components/about/AboutSection";
import { ContactSection } from "../components/contact/ContactSection";
import { ExperienceSection } from "../components/experience/ExperienceSection";
import { HomeSection } from "../components/home/HomeSection";
import { ProjectsSection } from "../components/projects/ProjectsSection";

export function HomePage() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
