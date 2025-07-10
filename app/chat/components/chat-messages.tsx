"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { LoadingDots } from "./loading-dots"
import { User, Bot } from "lucide-react"
import type { ChatMessage } from "@/lib/types"

interface ChatMessagesProps {
	messages: ChatMessage[]
	isLoading: boolean
	currentModel: string
}

export function ChatMessages({ messages, isLoading, currentModel }: ChatMessagesProps) {
	const messagesEndRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}, [messages, isLoading])

	return (
		<div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6">
			{messages.map((message, index) => (
				<MessageBubble key={`${message.timestamp?.getTime()}-${index}`} message={message} index={index} />
			))}

			{isLoading && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="flex items-start gap-3 sm:gap-4"
				>
					<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
						<Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
					</div>
					<div className="bg-white/10 border border-white/20 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl rounded-tl-md max-w-xs sm:max-w-md lg:max-w-lg shadow-lg">
						<LoadingDots model={currentModel} />
					</div>
				</motion.div>
			)}

			<div ref={messagesEndRef} />
		</div>
	)
}

interface MessageBubbleProps {
	message: ChatMessage
	index: number
}

function MessageBubble({ message, index }: MessageBubbleProps) {
	const isUser = message.role === "user"

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.1 }}
			className={`flex items-start gap-3 sm:gap-4 ${isUser ? "flex-row-reverse" : ""}`}
		>
			{/* Avatar */}
			<div
				className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${isUser ? "bg-gradient-to-r from-cyan-500 to-purple-500" : "bg-gradient-to-r from-purple-500 to-pink-500"
					}`}
			>
				{isUser ? (
					<User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
				) : (
					<Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
				)}
			</div>

			{/* Message Content */}
			<div
				className={`flex flex-col max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl ${isUser ? "items-end" : "items-start"}`}
			>
				<div
					className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base leading-relaxed shadow-lg ${isUser
							? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-tr-md"
							: "bg-white/10 border border-white/20 text-white rounded-tl-md"
						}`}
				>
					<p className="whitespace-pre-wrap break-words">{message.content}</p>
				</div>

				{/* Timestamp */}
				{message.timestamp && (
					<time className="text-xs text-gray-400 mt-2 px-2">
						{message.timestamp.toLocaleTimeString([], {
							hour: "2-digit",
							minute: "2-digit",
						})}
					</time>
				)}
			</div>
		</motion.div>
	)
}

