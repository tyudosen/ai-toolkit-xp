"use client"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Copy, ThumbsUp, ThumbsDown } from "lucide-react"
import type { ChatMessage } from "@/lib/types"

interface MessageBubbleProps {
  message: ChatMessage
  onCopy?: (content: string) => void
  onThumbsUp?: (messageId: string) => void
  onThumbsDown?: (messageId: string) => void
}

export function MessageBubble({ message, onCopy, onThumbsUp, onThumbsDown }: MessageBubbleProps) {
  const isUser = message.role === "user"

  return (
    <div className={cn("flex gap-3", isUser && "flex-row-reverse")}>
      <Avatar className="h-8 w-8 flex-shrink-0">
        <AvatarImage src={isUser ? "/user-avatar.png" : "/ai-avatar.png"} />
        <AvatarFallback>{isUser ? "U" : "AI"}</AvatarFallback>
      </Avatar>

      <div className={cn("flex flex-col gap-2", isUser && "items-end")}>
        <div
          className={cn(
            "rounded-lg px-4 py-2 max-w-[80%]",
            isUser ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-900",
          )}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        </div>

        {!isUser && (
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={() => onCopy?.(message.content)} className="h-6 w-6 p-0">
              <Copy className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => onThumbsUp?.(message.id)} className="h-6 w-6 p-0">
              <ThumbsUp className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => onThumbsDown?.(message.id)} className="h-6 w-6 p-0">
              <ThumbsDown className="h-3 w-3" />
            </Button>
          </div>
        )}

        <span className="text-xs text-gray-500">{message.timestamp.toLocaleTimeString()}</span>
      </div>
    </div>
  )
}

