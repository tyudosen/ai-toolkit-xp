import { MessageSquare, ImageIcon } from "lucide-react"
import type { AITool } from "./types"

export const AI_TOOLS: AITool[] = [
  {
    id: "chat",
    title: "AI Chat Assistant",
    description: "Intelligent conversational AI for questions, brainstorming, and problem-solving",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500",
    href: "/chat",
    category: "text",
  },
  {
    id: "image",
    title: "Image Generator",
    description: "Create stunning images from text descriptions using advanced AI models",
    icon: ImageIcon,
    color: "from-purple-500 to-pink-500",
    href: "/image-generator",
    category: "image",
  },
] as const

