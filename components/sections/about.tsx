import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"
import { SectionHeader } from "@/components/ui/section-header"

const infos = [
  { label: "Date de naissance", value: "08.06.2008" },
  { label: "Nationalité", value: "Suisse" },
  { label: "Localité", value: "Lentigny, FR" },
  { label: "Disponibilité", value: "2026 – 2027", gold: true },
]

export function AboutSection() {
  return (
    <section id="about" className="relative pt-0 pb-28 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[240px_1fr] gap-16 items-start">

          {/* Photo */}
          <Reveal variant="left">
            <div className="relative w-48 md:w-full max-w-[200px]">
              <div className="relative rounded-2xl overflow-hidden border border-[rgba(201,168,76,0.15)]" style={{ height: "267px" }}>
                <Image
                  src="/photo.jpg"
                  alt="Quentin Maudry"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              {/* Deco frame */}
              <div
                className="absolute rounded-2xl border border-[rgba(201,168,76,0.07)]"
                style={{ top: "16px", left: "16px", right: "-16px", bottom: "-16px", zIndex: -1 }}
                aria-hidden="true"
              />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={120}>
            <SectionHeader tag="Profil" title="Qui suis-je ?" />
            <p className="text-[#7a90ab] leading-relaxed text-sm md:text-base mb-8">
              Actuellement en 3e année à l&apos;École de Commerce de Gambach, je suis à la recherche d&apos;un stage MPC 3+1 pour la période 2026-2027 afin de compléter ma formation.
              <br /><br />
              En dehors des cours, le sport occupe une grande place dans mon quotidien — football, course à pied, fitness. Cette pratique régulière m&apos;a transmis des valeurs comme la discipline, la constance et l&apos;esprit de compétition, que je retrouve dans ma manière de travailler. À l&apos;aise avec les outils informatiques et capable de m&apos;adapter rapidement à de nouveaux logiciels, je suis prêt à m&apos;investir pleinement dans un cadre professionnel.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {infos.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#7a90ab]">
                    {item.label}
                  </span>
                  <span
                    className={
                      item.gold
                        ? "text-sm font-medium text-[#c9a84c]"
                        : "text-sm text-[#e8edf3]"
                    }
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
