import type React from "react"
import { ExternalLinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExternalLinkProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export function ExternalLink({ className, ...props }: ExternalLinkProps) {
  return <ExternalLinkIcon className={cn("inline-block", className)} {...props} />
}
