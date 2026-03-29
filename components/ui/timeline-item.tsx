import { cn } from "@/lib/utils"

interface TimelineItemProps {
  period: string
  org: string
  place: string
  role: string
  desc: string
  gold?: boolean
  className?: string
}

export function TimelineItem({ period, org, place, role, desc, gold, className }: TimelineItemProps) {
  return (
    <div className={cn("relative pl-14", className)}>
      {/* Dot */}
      <div
        className={cn(
          "absolute left-0 top-0 w-10 h-10 rounded-full border flex items-center justify-center",
          gold
            ? "border-[rgba(201,168,76,0.4)] bg-[#0f1b2d]"
            : "border-[rgba(201,168,76,0.2)] bg-[#0f1b2d]"
        )}
      >
        <i
          className={cn(
            "text-xs",
            gold ? "fa-solid fa-briefcase text-[#c9a84c]" : "fa-solid fa-graduation-cap text-[#7a90ab]"
          )}
          aria-hidden="true"
        />
      </div>

      <div className="rounded-2xl border border-[rgba(201,168,76,0.1)] bg-[rgba(15,27,45,0.35)] backdrop-blur-sm p-5 cursor-pointer transition-all duration-300 hover:border-[rgba(201,168,76,0.35)] hover:shadow-[0_0_28px_rgba(201,168,76,0.08)] active:scale-[0.98] active:shadow-[0_0_40px_rgba(201,168,76,0.15)] active:border-[rgba(201,168,76,0.5)]">
        <p className="text-xs text-[#7a90ab] mb-1">{period}</p>
        <h3 className="font-heading text-lg font-bold text-[#e8edf3] mb-0.5">{org}</h3>
        <p className="text-xs text-[#7a90ab] mb-2">{place}</p>
        <p className="text-sm font-medium text-[#c9a84c] mb-2">{role}</p>
        <p className="text-sm text-[#7a90ab] leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
