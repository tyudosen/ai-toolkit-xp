export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface ChatMessage {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export interface ChatSession {
  id: string
  title: string
  messages: ChatMessage[]
  model: string
  createdAt: Date
  updatedAt: Date
}

export interface ResearchSource {
  id: string
  title: string
  url: string
  content: string
  relevanceScore: number
  type: "article" | "paper" | "blog" | "news" | "documentation"
}

export interface ResearchInsight {
  id: string
  title: string
  content: string
  followUpQuestions: string[]
  sources: string[] // source IDs
}

export interface ResearchSession {
  id: string
  query: string
  title: string
  sources: ResearchSource[]
  insights: ResearchInsight[]
  report: string
  status: "pending" | "researching" | "completed" | "error"
  createdAt: Date
  updatedAt: Date
}

export interface AIModel {
  id: string
  name: string
  description: string
  provider: string
  capabilities: string[]
}

export type TabType = "overview" | "sources" | "insights" | "report"

export interface SidebarItem {
  id: string
  title: string
  subtitle?: string
  timestamp: Date
  isActive?: boolean
}

