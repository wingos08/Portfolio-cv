import { Reveal } from "@/components/ui/reveal"
import { SectionHeader } from "@/components/ui/section-header"

const interests = [
  { icon: "fa-futbol", label: "Football" },
  { icon: "fa-person-running", label: "Course à pied" },
  { icon: "fa-dumbbell", label: "Fitness" },
  { icon: "fa-drum", label: "Percussions" },
]

export function InterestsSection() {
  return (
    <section id="interests" className="relative py-16 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader tag="Personnel" title="Centres d&apos;intérêt" />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((item, i) => (
            <Reveal key={item.label} delay={i * 80} variant="scale">
              <div className="group flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border border-[rgba(201,168,76,0.1)] bg-[rgba(15,27,45,0.2)] hover:border-[rgba(201,168,76,0.3)] hover:bg-[rgba(15,27,45,0.45)] transition-all duration-200 cursor-default">
                <i
                  className={`fa-solid ${item.icon} text-2xl text-[#7a90ab] group-hover:text-[#c9a84c] transition-colors duration-200`}
                  aria-hidden="true"
                />
                <span className="text-sm text-[#7a90ab] group-hover:text-[#e8edf3] transition-colors duration-200 text-center">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
