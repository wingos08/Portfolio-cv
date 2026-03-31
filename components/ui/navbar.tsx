"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#about", label: "À propos" },
  { href: "#education", label: "Formation" },
  { href: "#experience", label: "Expérience" },
  { href: "#skills", label: "Compétences" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""))
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.3, rootMargin: "0px 0px -50% 0px" }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center px-6 transition-all duration-300",
          scrolled
            ? "py-3 bg-[#07080f]/90 backdrop-blur-xl border-b border-[rgba(201,168,76,0.12)]"
            : "py-5"
        )}
      >
        <div className="w-full flex items-center">
        <a
          href="#hero"
          className="font-heading text-xl font-bold tracking-widest text-[#e8edf3] mr-auto"
        >
          Quentin Maudry
        </a>

        <ul className="hidden md:flex items-center gap-8 mr-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "relative text-sm transition-colors duration-200 group",
                  active === l.href.replace("#", "") ? "text-[#c9a84c]" : "text-[#7a90ab] hover:text-[#e8edf3]"
                )}
              >
                {l.label}
                <span className={cn(
                  "absolute -bottom-0.5 left-0 h-px bg-[#c9a84c] transition-all duration-300",
                  active === l.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/CV_Quentin_Maudry.pdf"
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c9a84c] text-[#07080f] text-sm font-semibold hover:bg-[#e8c97e] transition-colors duration-200"
        >
          <i className="fa-solid fa-download text-xs" aria-hidden="true" />
          Télécharger CV
        </a>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2 ml-2"
          onClick={() => setOpen(true)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="w-5 h-[1.5px] bg-[#c9a84c] block" />
          <span className="w-5 h-[1.5px] bg-[#c9a84c] block" />
          <span className="w-5 h-[1.5px] bg-[#c9a84c] block" />
        </button>
        </div>
      </nav>

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[60] flex flex-col p-8 transition-transform duration-300 ease-in-out",
          "w-[min(320px,85vw)] bg-[#07080f]/98 backdrop-blur-2xl border-l border-[rgba(201,168,76,0.12)]",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => setOpen(false)}
          className="self-end text-[#7a90ab] hover:text-[#e8edf3] text-lg mb-10 transition-colors"
          aria-label="Fermer"
        >
          ✕
        </button>
        <nav className="flex flex-col gap-6 flex-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg text-[#e8edf3] hover:text-[#c9a84c] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/CV_Quentin_Maudry.pdf"
          target="_blank"
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#c9a84c] text-[#07080f] text-sm font-semibold"
        >
          Télécharger CV
        </a>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[55] bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
