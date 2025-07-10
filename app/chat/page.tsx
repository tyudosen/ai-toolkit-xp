import type { Metadata } from "next"
import ChatInterface from "./components/chat-interface"

export const metadata: Metadata = {
  title: "AI Chat Assistant",
  description: "Intelligent conversational AI for questions, brainstorming, and problem-solving",
}

export default function ChatPage() {
  return <ChatInterface />
}

