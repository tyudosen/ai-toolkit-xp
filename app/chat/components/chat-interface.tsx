"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { ChatHeader } from "./chat-header"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"
import { ModelSelector } from "./model-selector"
import type { ChatMessage } from "@/lib/types"

const INITIAL_MESSAGES: ChatMessage[] = [
	{
		role: "assistant",
		content: "Hello! I'm your AI assistant. How can I help you today?",
		timestamp: new Date(),
	},
]

const MODEL_RESPONSES = {
	"gpt-4": "This is a detailed response from GPT-4. I can help with complex reasoning, analysis, and creative tasks.",
	"gpt-3.5-turbo": "Quick response from GPT-3.5 Turbo! I'm fast and efficient for most conversational tasks.",
	"claude-3": "Claude 3 here. I excel at thoughtful analysis and can help with reasoning through complex problems.",
	"gemini-pro": "Gemini Pro responding. I can handle multimodal tasks and provide comprehensive assistance.",
} as const

export default function ChatInterface() {
	const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES)
	const [selectedModel, setSelectedModel] = useState<keyof typeof MODEL_RESPONSES>("gpt-4")
	const [isLoading, setIsLoading] = useState(false)

	const handleSendMessage = useCallback(
		async (content: string) => {
			if (!content.trim() || isLoading) return

			const userMessage: ChatMessage = {
				role: "user",
				content: content.trim(),
				timestamp: new Date(),
			}

			setMessages((prev) => [...prev, userMessage])
			setIsLoading(true)

			// Simulate AI response
			setTimeout(
				() => {
					const assistantMessage: ChatMessage = {
						role: "assistant",
						content: MODEL_RESPONSES[selectedModel],
						timestamp: new Date(),
					}
					setMessages((prev) => [...prev, assistantMessage])
					setIsLoading(false)
				},
				1000 + Math.random() * 1000,
			)
		},
		[selectedModel, isLoading],
	)

	const handleModelChange = useCallback((modelId: keyof typeof MODEL_RESPONSES) => {
		setSelectedModel(modelId)
		const systemMessage: ChatMessage = {
			role: "assistant",
			content: `Switched to ${modelId.toUpperCase()}. How can I assist you with this model?`,
			timestamp: new Date(),
		}
		setMessages((prev) => [...prev, systemMessage])
	}, [])

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
			<div className="h-screen flex flex-col w-full max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="flex-shrink-0"
				>
					<ChatHeader />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="flex-1 flex flex-col min-h-0 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6"
				>
					{/* Desktop Model Selector */}
					<div className="hidden xl:block mb-4 lg:mb-6 relative z-10">
						<ModelSelector selectedModel={selectedModel} onModelChange={handleModelChange} variant="desktop" />
					</div>

					{/* Chat Container */}
					<div className="flex-1 flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl">
						{/* Chat Header */}
						<div className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-white/5">
							<div className="flex items-center justify-between">
								<h2 className="text-white text-base sm:text-lg lg:text-xl font-semibold truncate">
									Chat with {selectedModel.toUpperCase()}
								</h2>
								<div className="hidden sm:block flex-shrink-0 ml-4">
									<span className="text-xs text-gray-400 bg-white/10 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
										{messages.length - 1} messages
									</span>
								</div>
							</div>
						</div>

						{/* Messages Area */}
						<div className="flex-1 min-h-0">
							<ChatMessages messages={messages} isLoading={isLoading} currentModel={selectedModel} />
						</div>

						{/* Input Area */}
						<div className="flex-shrink-0 p-3 sm:p-4 lg:p-6 border-t border-white/10 bg-white/5">
							{/* Mobile/Tablet Model Selector */}
							<div className="xl:hidden mb-3 sm:mb-4">
								<ModelSelector selectedModel={selectedModel} onModelChange={handleModelChange} variant="mobile" />
							</div>

							<ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} selectedModel={selectedModel} />
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

