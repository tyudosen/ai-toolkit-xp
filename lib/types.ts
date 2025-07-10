import type React from "react"
export interface AITool {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  href: string
  category?: "text" | "image" | "code" | "analysis" | "automation"
}

export interface SplashScreenProps {
  onComplete: () => void
}

export interface ChatMessage {
  role: "user" | "assistant"
  content: string
  timestamp?: Date
}

