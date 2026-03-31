"use client"

import { useState, FormEvent } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Reveal } from "@/components/ui/reveal"
import { SectionHeader } from "@/components/ui/section-header"
import { GlassCard } from "@/components/ui/glass-card"

const contactInfo = [
  {
    icon: "fa-envelope",
    label: "quentin.maudry@studentfr.ch",
    href: "mailto:quentin.maudry@studentfr.ch",
  },
  {
    icon: "fa-phone",
    label: "+41 77 505 97 11",
    href: "tel:+41775059711",
  },
  {
    icon: "fa-location-dot",
    label: "En Meinoud 6, 1745 Lentigny",
    href: undefined,
  },
]

const inputBase =
  "w-full px-4 py-3 rounded-xl border bg-[rgba(15,27,45,0.5)] text-[#e8edf3] text-sm placeholder:text-[#3a4f66] focus:outline-none focus:border-[#c9a84c] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] transition-all duration-200"

export function ContactSection() {
  const [state, handleFormspree] = useForm("mgopynvk")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const [errors, setErrors] = useState<{ name?: string; email?: string; msg?: string }>({})

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errs: typeof errors = {}
    if (!name.trim()) errs.name = "Veuillez entrer votre nom."
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Veuillez entrer un email valide."
    if (!msg.trim()) errs.msg = "Veuillez entrer un message."
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    handleFormspree(e)
  }

  return (
    <section id="contact" className="relative py-16 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader tag="Me joindre" title="Contact" center />
          <p className="text-center mt-4 mb-8 text-base md:text-lg text-[#e8edf3] font-medium max-w-xl mx-auto leading-relaxed">
            Une opportunité ?{" "}
            <span className="text-[#c9a84c]">N&apos;hésitez pas à me contacter directement.</span>
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.7fr] gap-5 items-start">

          {/* Info cards */}
          <Reveal variant="left">
            <div className="flex flex-col gap-3">
              {contactInfo.map((item) => (
                <GlassCard key={item.icon} className="p-4 transition-all duration-300 hover:border-[rgba(201,168,76,0.35)] hover:shadow-[0_0_20px_rgba(201,168,76,0.07)] hover:-translate-y-0.5">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-3 text-sm text-[#7a90ab] hover:text-[#c9a84c] transition-colors duration-200"
                    >
                      <i className={`fa-solid ${item.icon} text-[#c9a84c] w-4 text-center`} aria-hidden="true" />
                      {item.label}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 text-sm text-[#7a90ab]">
                      <i className={`fa-solid ${item.icon} text-[#c9a84c] w-4 text-center`} aria-hidden="true" />
                      {item.label}
                    </div>
                  )}
                </GlassCard>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} variant="right">
            <GlassCard className="p-6 md:p-8">
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-[rgba(201,168,76,0.12)] flex items-center justify-center">
                    <i className="fa-solid fa-check text-[#c9a84c] text-xl" aria-hidden="true" />
                  </div>
                  <p className="text-[#e8edf3] font-medium">Message envoyé !</p>
                  <p className="text-sm text-[#7a90ab]">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#c9a84c] mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })) }}
                    placeholder="Jean Dupont"
                    className={`${inputBase} ${errors.name ? "border-red-500" : "border-[rgba(201,168,76,0.12)]"}`}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#c9a84c] mb-2">
                    Votre email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })) }}
                    placeholder="jean@exemple.com"
                    className={`${inputBase} ${errors.email ? "border-red-500" : "border-[rgba(201,168,76,0.12)]"}`}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#c9a84c] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={msg}
                    onChange={(e) => { setMsg(e.target.value); setErrors((p) => ({ ...p, msg: undefined })) }}
                    placeholder="Votre message..."
                    className={`${inputBase} resize-none ${errors.msg ? "border-red-500" : "border-[rgba(201,168,76,0.12)]"}`}
                  />
                  {errors.msg && <p className="text-xs text-red-400 mt-1">{errors.msg}</p>}
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#c9a84c] text-[#07080f] text-sm font-semibold overflow-hidden transition-all duration-300 hover:bg-[#e8c97e] hover:shadow-[0_4px_24px_rgba(201,168,76,0.35)] hover:-translate-y-0.5 active:scale-[0.97] active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
                  {!state.submitting && <i className="fa-solid fa-paper-plane text-xs" aria-hidden="true" />}
                </button>
              </form>
              )}
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
