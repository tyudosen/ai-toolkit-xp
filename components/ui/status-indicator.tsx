import { cn } from "@/lib/utils"
import { Loader2, CheckCircle, XCircle, Clock } from "lucide-react"

interface StatusIndicatorProps {
  status: "pending" | "loading" | "success" | "error"
  message?: string
  className?: string
}

export function StatusIndicator({ status, message, className }: StatusIndicatorProps) {
  const icons = {
    pending: Clock,
    loading: Loader2,
    success: CheckCircle,
    error: XCircle,
  }

  const colors = {
    pending: "text-yellow-500",
    loading: "text-blue-500",
    success: "text-green-500",
    error: "text-red-500",
  }

  const Icon = icons[status]

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Icon className={cn("h-4 w-4", colors[status], status === "loading" && "animate-spin")} />
      {message && <span className={cn("text-sm", colors[status])}>{message}</span>}
    </div>
  )
}

