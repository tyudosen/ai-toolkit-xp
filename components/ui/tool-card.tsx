"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import type { AITool } from "@/lib/types"

interface ToolCardProps {
  tool: AITool
  index: number
}

const gradientMap = {
  "from-blue-500 to-cyan-500": "linear-gradient(to right, #3b82f6, #06b6d4)",
  "from-purple-500 to-pink-500": "linear-gradient(to right, #8b5cf6, #ec4899)",
  "from-green-500 to-emerald-500": "linear-gradient(to right, #10b981, #059669)",
  "from-orange-500 to-red-500": "linear-gradient(to right, #f97316, #ef4444)",
  "from-indigo-500 to-purple-500": "linear-gradient(to right, #6366f1, #8b5cf6)",
  "from-yellow-500 to-orange-500": "linear-gradient(to right, #eab308, #f97316)",
}

export function ToolCard({ tool, index }: ToolCardProps) {
  const gradient = gradientMap[tool.color as keyof typeof gradientMap] || gradientMap["from-blue-500 to-cyan-500"]

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 h-full hover:border-white/40 hover:shadow-2xl hover:shadow-purple-500/20">
        <CardHeader className="pb-4 p-4 sm:p-6">
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg mx-auto sm:mx-0"
            style={{ background: gradient }}
          >
            <tool.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <CardTitle className="text-white text-xl sm:text-2xl mb-2 sm:mb-3 text-center sm:text-left">
            {tool.title}
          </CardTitle>
          <CardDescription className="text-gray-300 text-sm sm:text-base leading-relaxed text-center sm:text-left">
            {tool.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0 p-4 sm:p-6">
          <Button
            className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 py-3 text-sm sm:text-base font-medium transition-all duration-300 touch-manipulation"
            variant="outline"
            asChild
          >
            <a href={tool.href}>
              Try Now <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

