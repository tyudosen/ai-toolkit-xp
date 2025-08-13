import type { AIModel } from "./types"

export const AI_MODELS: AIModel[] = [
  {
    id: "gpt-4",
    name: "GPT-4",
    description: "Most capable model for complex tasks",
    provider: "OpenAI",
    capabilities: ["reasoning", "coding", "analysis"],
  },
  {
    id: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    description: "Fast and efficient for most tasks",
    provider: "OpenAI",
    capabilities: ["general", "coding", "writing"],
  },
  {
    id: "claude-3",
    name: "Claude 3",
    description: "Excellent for analysis and writing",
    provider: "Anthropic",
    capabilities: ["analysis", "writing", "reasoning"],
  },
  {
    id: "gemini-pro",
    name: "Gemini Pro",
    description: "Google's latest multimodal model",
    provider: "Google",
    capabilities: ["general", "coding", "analysis", "multimodal"],
  },
]

export const RESEARCH_TABS = [
  { id: "overview", label: "Overview", icon: "BarChart3" },
  { id: "sources", label: "Sources", icon: "FileText" },
  { id: "insights", label: "Insights", icon: "Lightbulb" },
  { id: "report", label: "Report", icon: "BookOpen" },
] as const

export const CONTENT_TYPES = {
  ARTICLE: "article",
  PAPER: "paper",
  BLOG: "blog",
  NEWS: "news",
  DOCUMENTATION: "documentation",
  GUIDE: "guide",
  TUTORIAL: "tutorial",
  REFERENCE: "reference",
} as const

export const RESEARCH_STATUS = {
  PENDING: "pending",
  RESEARCHING: "researching",
  COMPLETED: "completed",
  ERROR: "error",
} as const

export const MESSAGE_ROLES = {
  USER: "user",
  ASSISTANT: "assistant",
} as const

export const STORAGE_KEYS = {
  CHAT_HISTORY: "ai-toolkit-chat-history",
  RESEARCH_HISTORY: "ai-toolkit-research-history",
  USER_PREFERENCES: "ai-toolkit-user-preferences",
  SELECTED_MODEL: "ai-toolkit-selected-model",
} as const

export const API_ENDPOINTS = {
  CHAT: "/api/chat",
  RESEARCH: "/api/research",
  MODELS: "/api/models",
  USER: "/api/user",
} as const

export const LIMITS = {
  MESSAGE_MAX_LENGTH: 2000,
  CHAT_TITLE_MAX_LENGTH: 50,
  RESEARCH_QUERY_MAX_LENGTH: 500,
  MAX_CHAT_HISTORY: 100,
  MAX_RESEARCH_HISTORY: 50,
} as const

export const TIMEOUTS = {
  API_REQUEST: 30000, // 30 seconds
  TYPING_SIMULATION: 1500, // 1.5 seconds
  DEBOUNCE_SEARCH: 300, // 300ms
} as const

