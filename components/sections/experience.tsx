import { Reveal } from "@/components/ui/reveal"
import { SectionHeader } from "@/components/ui/section-header"
import { TimelineItem } from "@/components/ui/timeline-item"

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader tag="Professionnel" title="Expériences" />
        </Reveal>

        <div className="relative timeline-line flex flex-col gap-8">
          <Reveal delay={100} variant="left">
            <TimelineItem
              gold
              period="Août 2025 — 3 semaines · Emploi saisonnier"
              org="Service Infrastructure — Université de Fribourg"
              place="Fribourg, Suisse"
              role="Intégration HEP à l'Université de Fribourg — Inventaire complet"
              desc="Participation à l'intégration de la HEP Fribourg au sein de l'Université de Fribourg. Réalisation d'un inventaire exhaustif de toutes les salles et du mobilier, avec organisation et structuration des données dans Excel."
            />
          </Reveal>
          <Reveal delay={200} variant="left">
            <TimelineItem
              gold
              period="Août 2024 — 2 semaines · Emploi saisonnier"
              org="Université de Fribourg"
              place="Fribourg, Suisse"
              role="Nettoyage de vitres — Bâtiments universitaires"
              desc="Mission de nettoyage de vitres sur plusieurs bâtiments universitaires. Travail en équipe et en autonomie avec rigueur et efficacité."
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
