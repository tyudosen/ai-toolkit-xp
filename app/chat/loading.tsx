import { Bot } from "lucide-react"

export default function ChatLoading() {
  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Bot className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="font-heading font-bold text-xl text-gray-900 mb-2">Loading AI Chat</h2>
        <p className="font-sans text-gray-600">Initializing your conversation...</p>
      </div>
    </div>
  )
}

