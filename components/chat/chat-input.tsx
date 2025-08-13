"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Send, Sparkles } from "lucide-react"

interface ChatInputProps {
	onSend: (message: string) => void
	disabled?: boolean
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
	const [input, setInput] = useState("")
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	const handleSend = () => {
		if (!input.trim() || disabled) return
		onSend(input.trim())
		setInput("")
	}

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault()
			handleSend()
		}
	}

	return (
		<div className="border-t border-purple-100 p-4 bg-white/80 backdrop-blur-sm">
			<div className="flex space-x-3">
				<div className="flex-1 relative">
					<textarea
						ref={textareaRef}
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyPress={handleKeyPress}
						placeholder="Type your message here..."
						className="w-full resize-none rounded-xl border border-purple-200 px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-sans"
						rows={1}
						style={{ minHeight: "48px", maxHeight: "120px" }}
						disabled={disabled}
					/>
					<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-1">
						<Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400 hover:text-purple-600">
							<Sparkles className="w-4 h-4" />
						</Button>
					</div>
				</div>
				<Button
					onClick={handleSend}
					disabled={!input.trim() || disabled}
					className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-sans font-semibold disabled:opacity-50 disabled:cursor-not-allowed h-12 flex items-center justify-center"
				>
					<Send className="w-4 h-4" />
				</Button>
			</div>
			<div className="flex items-center justify-between mt-3 text-xs text-gray-500">
				<span>Press Enter to send, Shift + Enter for new line</span>
				<span>{input.length}/2000</span>
			</div>
		</div>
	)
}

