import { Navbar } from "@/components/ui/navbar"
import { MeshBackground } from "@/components/ui/mesh-background"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { EducationSection } from "@/components/sections/education"
import { ExperienceSection } from "@/components/sections/experience"
import { SkillsSection } from "@/components/sections/skills"
import { InterestsSection } from "@/components/sections/interests"
import { ContactSection } from "@/components/sections/contact"

export default function Page() {
  return (
    <>
      <MeshBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <InterestsSection />
        <ContactSection />
      </main>
      <footer
        className="relative py-8 px-6 border-t border-[rgba(201,168,76,0.1)]"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="font-heading text-base font-bold text-[#c9a84c]">
            Quentin Maudry
          </span>
          <p className="text-xs text-[#7a90ab]">© 2026 — Tous droits réservés</p>
          <a
            href="/CV_Quentin_Maudry.pdf"
            download
            className="text-xs text-[#c9a84c] opacity-70 hover:opacity-100 transition-opacity"
          >
            Télécharger CV
          </a>
        </div>
      </footer>
    </>
  )
}
