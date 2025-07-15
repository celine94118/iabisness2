import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface ListChecksProps {
  items: string[]
  className?: string
}

export function ListChecks({ items, className }: ListChecksProps) {
  return (
    <ul className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2 text-gray-300">
          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
