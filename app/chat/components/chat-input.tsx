"use client"

import type React from "react"

import { useState, useRef, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Send, Paperclip, Mic } from "lucide-react"

interface ChatInputProps {
	onSendMessage: (message: string) => void
	isLoading: boolean
	selectedModel: string
}

export function ChatInput({ onSendMessage, isLoading, selectedModel }: ChatInputProps) {
	const [input, setInput] = useState("")
	const [isFocused, setIsFocused] = useState(false)
	const inputRef = useRef<HTMLTextAreaElement>(null)

	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault()
			if (input.trim() && !isLoading) {
				onSendMessage(input)
				setInput("")
				inputRef.current?.focus()
			}
		},
		[input, isLoading, onSendMessage],
	)

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (e.key === "Enter" && !e.shiftKey) {
				e.preventDefault()
				handleSubmit(e)
			}
		},
		[handleSubmit],
	)

	const adjustTextareaHeight = useCallback(() => {
		const textarea = inputRef.current
		if (textarea) {
			textarea.style.height = "auto"
			textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`
		}
	}, [])

	useEffect(() => {
		adjustTextareaHeight()
	}, [input, adjustTextareaHeight])

	return (
		<form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
			{/* Input Container */}
			<div
				className={`flex items-end gap-2 sm:gap-3 p-3 sm:p-4 bg-white/10 border-2 rounded-xl sm:rounded-2xl transition-all duration-200 ${isFocused ? "border-cyan-500/50 bg-white/15" : "border-white/20"
					}`}
			>
				{/* Attachment Button */}
				<Button
					type="button"
					variant="ghost"
					size="sm"
					className="text-gray-400 hover:text-white hover:bg-white/10 p-2 h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0"
					aria-label="Attach file"
				>
					<Paperclip className="w-4 h-4" />
				</Button>

				{/* Text Input */}
				<div className="flex-1 relative min-w-0">
					<textarea
						ref={inputRef}
						value={input}
						onChange={(e) => {
							setInput(e.target.value)
							adjustTextareaHeight()
						}}
						onKeyDown={handleKeyDown}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
						placeholder={`Message ${selectedModel.toUpperCase()}...`}
						disabled={isLoading}
						rows={1}
						className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none text-sm sm:text-base leading-relaxed"
						style={{ minHeight: "24px", maxHeight: "120px" }}
					/>
				</div>

				{/* Voice Input Button */}
				<Button
					type="button"
					variant="ghost"
					size="sm"
					className="text-gray-400 hover:text-white hover:bg-white/10 p-2 h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0"
					aria-label="Voice input"
				>
					<Mic className="w-4 h-4" />
				</Button>

				{/* Send Button */}
				<Button
					type="submit"
					disabled={isLoading || !input.trim()}
					className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed p-2 sm:p-3 h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl transition-all duration-200 flex-shrink-0 shadow-lg"
					aria-label="Send message"
				>
					<Send className="w-4 h-4 sm:w-5 sm:h-5" />
				</Button>
			</div>

			{/* Input Footer */}
			<div className="flex items-center justify-between text-xs text-gray-400 px-1">
				<div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
					<span className="hidden sm:inline truncate">Press Enter to send, Shift+Enter for new line</span>
					<span className="sm:hidden truncate">Enter to send</span>
				</div>
				<div className="flex items-center gap-2 flex-shrink-0 ml-2">
					<span className="whitespace-nowrap">{input.length}/4000</span>
					{input.length > 3500 && <span className="text-yellow-400 whitespace-nowrap">• Limit</span>}
				</div>
			</div>
		</form>
	)
}

