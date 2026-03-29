import { Reveal } from "@/components/ui/reveal"
import { SectionHeader } from "@/components/ui/section-header"
import { TimelineItem } from "@/components/ui/timeline-item"

export function EducationSection() {
  return (
    <section id="education" className="relative py-28 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader tag="Académique" title="Formation" />
        </Reveal>

        <div className="relative timeline-line flex flex-col gap-8">
          <Reveal delay={100} variant="left">
            <TimelineItem
              period="2023 — présent"
              org="École de Commerce de Gambach"
              place="Fribourg"
              role="CFC employée de commerce avec Maturité Professionnelle Commerciale"
              desc="Actuellement en 3e année. En recherche d'un stage MPC 3+1 afin de valider ma formation."
            />
          </Reveal>
          <Reveal delay={200} variant="left">
            <TimelineItem
              period="2020 — 2023"
              org="CO de Sarine-Ouest"
              place="Avry-sur-Matran"
              role="Section pré-gymnasiale"
              desc="Cursus secondaire en section pré-gymnasiale. Dernière année effectuée en classe bilingue."
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
