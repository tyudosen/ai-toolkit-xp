"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Search, RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function ResearchError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Research error:", error)
  }, [error])

  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="font-heading font-black text-2xl text-gray-900 mb-4">Research Tool Error</h1>
        <p className="font-sans text-gray-600 mb-8 leading-relaxed">
          We couldn't load the research interface. This might be a temporary issue with the research service.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} className="bg-purple-500 hover:bg-purple-600 text-white font-sans font-semibold">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" className="border-purple-200 text-purple-800 hover:bg-purple-50 bg-transparent">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

