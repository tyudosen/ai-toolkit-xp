"use client"
import { Brain, MessageSquare, ImageIcon, FileText, Code, Zap } from "lucide-react"
import { Suspense } from "react"
import HomeClient from "@/components/home-client"

const aiTools = [
  {
    id: "chat",
    title: "AI Chat Assistant",
    description: "Intelligent conversational AI for questions, brainstorming, and problem-solving",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500",
    href: "/chat",
  },
  {
    id: "image",
    title: "Image Generator",
    description: "Create stunning images from text descriptions using advanced AI models",
    icon: ImageIcon,
    color: "from-purple-500 to-pink-500",
    href: "/image-generator",
  },
  {
    id: "text",
    title: "Text Analyzer",
    description: "Analyze sentiment, extract insights, and summarize text content",
    icon: FileText,
    color: "from-green-500 to-emerald-500",
    href: "/text-analyzer",
  },
  {
    id: "code",
    title: "Code Assistant",
    description: "Generate, debug, and optimize code across multiple programming languages",
    icon: Code,
    color: "from-orange-500 to-red-500",
    href: "/code-assistant",
  },
  {
    id: "brain",
    title: "Knowledge Base",
    description: "Query and explore vast knowledge databases with AI-powered search",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
    href: "/knowledge-base",
  },
  {
    id: "automation",
    title: "Task Automation",
    description: "Automate repetitive tasks and workflows with intelligent AI agents",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    href: "/automation",
  },
]

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-white text-xl">Loading AI Toolkit...</div>
    </div>
  )
}

export default function HomePageClient() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HomeClient />
    </Suspense>
  )
}

