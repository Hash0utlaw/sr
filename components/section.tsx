import { cn } from "@/lib/utils"

interface SectionProps {
  className?: string
  children: React.ReactNode
  dark?: boolean
}

export function Section({ className, children, dark = false }: SectionProps) {
  return (
    <section className={cn(
      "py-16 md:py-24",
      dark ? "bg-gray-900 text-orange-500" : "bg-black text-orange-500",
      className
    )}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

