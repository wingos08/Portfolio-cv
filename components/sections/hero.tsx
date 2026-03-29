export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col items-center justify-center text-center px-6 pb-0"
      style={{ zIndex: 1 }}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.05)] text-xs text-[#7a90ab] mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
        Recherche stage MPC 3+1 · 2026 – 2027
      </div>

      {/* Name block */}
      <div className="mb-8">
        <h1
          className="font-heading font-black leading-none tracking-[0.12em] uppercase"
          style={{ fontSize: "clamp(60px, 13vw, 220px)" }}
        >
          <span className="block text-[#e8edf3]">QUENTIN</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(90deg, #a8893a, #e8c97e, #c9a84c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            MAUDRY
          </span>
        </h1>
      </div>

      <p className="text-sm text-[#7a90ab] mb-10 whitespace-nowrap leading-relaxed">
        Étudiant en 3e année à l&apos;École de Commerce de Gambach
      </p>

      <div className="flex items-center gap-4">
        <a
          href="#experience"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c9a84c] text-[#07080f] text-sm font-semibold hover:bg-[#e8c97e] transition-colors duration-200"
        >
          Mon parcours
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(201,168,76,0.35)] text-[#c9a84c] text-sm font-medium hover:border-[#c9a84c] hover:bg-[rgba(201,168,76,0.06)] transition-all duration-200"
        >
          Me contacter
        </a>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#7a90ab] hover:text-[#c9a84c] transition-colors"
        aria-label="Défiler"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </a>
    </section>
  )
}
