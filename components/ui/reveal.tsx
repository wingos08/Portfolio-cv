"use client"

import { useEffect, useRef, ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealVariant = "up" | "left" | "right" | "scale"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: RevealVariant
}

const variantClass: Record<RevealVariant, string> = {
  up:    "reveal-up",
  left:  "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
}

export function Reveal({ children, className, delay = 0, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("is-visible"), delay)
          obs.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={cn("reveal-base", variantClass[variant], className)}>
      {children}
    </div>
  )
}
