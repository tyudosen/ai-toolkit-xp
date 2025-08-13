import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Brain className="w-8 h-8 text-purple-600" />
        </div>
        <h1 className="font-heading font-black text-4xl text-gray-900 mb-4">Page Not Found</h1>
        <p className="font-sans text-gray-600 mb-8 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. The page might have been moved or doesn't exist.
        </p>
        <Link href="/">
          <Button className="bg-purple-500 hover:bg-purple-600 text-white font-sans font-semibold">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

