"use client"

import { useEffect, useRef } from "react"
import { Reveal } from "@/components/ui/reveal"
import { SectionHeader } from "@/components/ui/section-header"
import { GlassCard } from "@/components/ui/glass-card"

const languages = [
  { name: "Français", level: "Langue maternelle", width: 100 },
  { name: "Anglais", level: "C1 — EF SET 61/100 · Lecture & Écoute", width: 80 },
  { name: "Allemand", level: "Niveau scolaire — Environ B1", width: 60 },
]

const softSkills = ["Autonome", "Polyvalent", "Adaptable", "Débrouillard", "Curieux"]
const tools = ["Excel", "Word", "PowerPoint", "Photoshop", "CapCut", "Crésus"]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const barsRef = useRef<(HTMLDivElement | null)[]>([])
  const animated = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          barsRef.current.forEach((bar, i) => {
            if (bar) {
              const width = languages[i]?.width ?? 0
              setTimeout(() => { bar.style.width = `${width}%` }, 900)
            }
          })
          obs.unobserve(section)
        }
      },
      { threshold: 0.3 }
    )

    obs.observe(section)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="relative py-16 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader tag="Savoir-faire" title="Compétences" />
        </Reveal>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-5">

          {/* Languages */}
          <Reveal variant="scale">
            <GlassCard className="p-6 h-full">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9a84c] mb-6">
                Langues
              </h3>
              <div className="flex flex-col gap-5">
                {languages.map((lang, i) => (
                  <div key={lang.name} className="group cursor-default pb-5 last:pb-0 border-b border-[rgba(201,168,76,0.06)] last:border-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-sm text-[#e8edf3] transition-colors duration-200 group-hover:text-[#c9a84c]">{lang.name}</span>
                      <span className="text-xs text-[#7a90ab]">{lang.level}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex-1 h-[2px] bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
                        <div
                          ref={(el) => { barsRef.current[i] = el }}
                          className="lang-fill"
                          style={{ height: "2px" }}
                        />
                      </div>
                      <span className="text-xs font-medium text-[#c9a84c] w-8 text-right">{lang.width}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          {/* Soft + Tools */}
          <div className="flex flex-col gap-5">
            <Reveal delay={100} variant="scale">
              <GlassCard className="p-6">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9a84c] mb-4">
                  Savoir-être
                </h3>
                <ul className="flex flex-col gap-1">
                  {softSkills.map((skill, i) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-[#7a90ab] px-3 py-2 rounded-lg cursor-default transition-all duration-200 hover:text-[#e8edf3] hover:bg-[rgba(201,168,76,0.05)] hover:translate-x-1 group"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#7a90ab] group-hover:bg-[#c9a84c] flex-shrink-0 transition-colors duration-200" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>

            <Reveal delay={200} variant="scale">
              <GlassCard className="p-6">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9a84c] mb-4">
                  Logiciels
                </h3>
                <ul className="flex flex-col gap-1">
                  {tools.map((tool, i) => (
                    <li
                      key={tool}
                      className="flex items-center gap-3 text-sm text-[#7a90ab] px-3 py-2 rounded-lg cursor-default transition-all duration-200 hover:text-[#c9a84c] hover:bg-[rgba(201,168,76,0.05)] hover:translate-x-1 group"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#7a90ab] group-hover:bg-[#c9a84c] flex-shrink-0 transition-colors duration-200" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
