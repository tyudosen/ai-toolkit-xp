import { Brain } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Brain className="w-8 h-8 text-purple-600" />
        </div>
        <h2 className="font-heading font-bold text-xl text-gray-900 mb-2">Loading AI Toolkit</h2>
        <p className="font-sans text-gray-600">Please wait while we prepare your experience...</p>
      </div>
    </div>
  )
}

