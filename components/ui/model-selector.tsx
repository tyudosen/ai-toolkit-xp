"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Sparkles } from "lucide-react"
import { AI_MODELS } from "@/lib/constants"

interface ModelSelectorProps {
  selectedModel: string
  onModelChange: (modelId: string) => void
  className?: string
}

export function ModelSelector({ selectedModel, onModelChange, className }: ModelSelectorProps) {
  const currentModel = AI_MODELS.find((m) => m.id === selectedModel) || AI_MODELS[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={`justify-between min-w-[200px] ${className}`}>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <div className="text-left">
              <div className="font-medium">{currentModel.name}</div>
              <div className="text-xs text-gray-500 truncate">{currentModel.description}</div>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[250px]">
        {AI_MODELS.map((model) => (
          <DropdownMenuItem
            key={model.id}
            onClick={() => onModelChange(model.id)}
            className="flex flex-col items-start gap-1 p-3"
          >
            <div className="flex items-center gap-2 w-full">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="font-medium">{model.name}</span>
              {model.id === selectedModel && <div className="ml-auto h-2 w-2 bg-purple-600 rounded-full" />}
            </div>
            <p className="text-xs text-gray-500">{model.description}</p>
            <div className="flex gap-1 mt-1">
              {model.capabilities.map((cap) => (
                <span key={cap} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                  {cap}
                </span>
              ))}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

