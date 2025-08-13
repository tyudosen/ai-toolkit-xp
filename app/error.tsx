"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Brain, RefreshCw } from "lucide-react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Brain className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="font-heading font-black text-4xl text-gray-900 mb-4">Something went wrong</h1>
        <p className="font-sans text-gray-600 mb-8 leading-relaxed">
          We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
        </p>
        <Button onClick={reset} className="bg-purple-500 hover:bg-purple-600 text-white font-sans font-semibold">
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      </div>
    </div>
  )
}

