import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[rgba(201,168,76,0.1)] bg-[rgba(15,27,45,0.35)] backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  )
}
