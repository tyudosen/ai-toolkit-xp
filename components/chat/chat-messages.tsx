"use client"

import { useRef, useEffect } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageBubble } from "@/components/ui/message-bubble"
import { Bot } from "lucide-react"
import type { ChatMessage } from "@/lib/types"

interface ChatMessagesProps {
	messages: ChatMessage[]
	isTyping: boolean
	onCopyMessage: (content: string) => void
	onThumbsUp: (messageId: string) => void
	onThumbsDown: (messageId: string) => void
}

export function ChatMessages({ messages, isTyping, onCopyMessage, onThumbsUp, onThumbsDown }: ChatMessagesProps) {
	const messagesEndRef = useRef<HTMLDivElement>(null)

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	return (
		<ScrollArea className="flex-1 p-6">
			<div className="space-y-4">
				{messages.map((message) => (
					<MessageBubble
						key={message.id}
						message={message}
						onCopy={onCopyMessage}
						onThumbsUp={onThumbsUp}
						onThumbsDown={onThumbsDown}
					/>
				))}

				{/* Typing Indicator */}
				{isTyping && (
					<div className="flex justify-start">
						<div className="flex space-x-3 max-w-3xl">
							<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center flex-shrink-0">
								<Bot className="w-4 h-4 text-white" />
							</div>
							<div className="bg-gray-100 rounded-2xl px-4 py-3">
								<div className="flex space-x-1">
									<div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
									<div
										className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
										style={{ animationDelay: "0.1s" }}
									></div>
									<div
										className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
										style={{ animationDelay: "0.2s" }}
									></div>
								</div>
							</div>
						</div>
					</div>
				)}
				<div ref={messagesEndRef} />
			</div>
		</ScrollArea>
	)
}

