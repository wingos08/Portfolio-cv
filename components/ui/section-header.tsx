import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  className?: string
  center?: boolean
}

export function SectionHeader({ tag, title, subtitle, className, center }: SectionHeaderProps) {
  return (
    <div className={cn("mb-6", center && "text-center", className)}>
      {tag && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c] mb-3">
          {tag}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#e8edf3]">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-sm text-[#7a90ab] max-w-lg">{subtitle}</p>
      )}
    </div>
  )
}
