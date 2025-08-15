"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sidebar } from "@/components/ui/sidebar"
import { ModelSelector } from "@/components/ui/model-selector"
import { Brain, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import type { ChatSession } from "@/lib/types"

interface ChatSidebarProps {
	isOpen: boolean
	onToggle: () => void
	chats: ChatSession[]
	currentChatId: string
	selectedModel: string
	onChatSelect: (chatId: string) => void
	onNewChat: () => void
	onDeleteChat: (chatId: string) => void
	onModelChange: (modelId: string) => void
}

export function ChatSidebar({
	isOpen,
	onToggle,
	chats,
	currentChatId,
	selectedModel,
	onChatSelect,
	onNewChat,
	onDeleteChat,
	onModelChange,
}: ChatSidebarProps) {
	return (
		<Sidebar
			isOpen={isOpen}
			onToggle={onToggle}
			className="w-80 bg-white/90 backdrop-blur-sm border-r border-purple-100 flex flex-col"
		>
			{/* Sidebar Header */}
			<div className="p-4 border-b border-purple-100 flex-shrink-0">
				<div className="flex items-center justify-between mb-4">
					<Link href="/" className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-purple-800 rounded-lg flex items-center justify-center">
							<Brain className="w-5 h-5 text-white" />
						</div>
						<span className="font-heading font-black text-lg text-purple-800">AI Toolkit</span>
					</Link>
				</div>

				<Button onClick={onNewChat} className="w-full bg-purple-500 hover:bg-purple-600 text-white font-sans">
					<Plus className="w-4 h-4 mr-2" />
					New Chat
				</Button>
			</div>

			{/* Made chat history scrollable and take remaining space */}
			<div className="flex-1 overflow-hidden">
				<ScrollArea className="h-full p-4">
					<h3 className="font-heading font-bold text-sm text-gray-600 mb-3 uppercase tracking-wide">Recent Chats</h3>
					<div className="space-y-2">
						{chats.map((chat) => (
							<div
								key={chat.id}
								onClick={() => onChatSelect(chat.id)}
								className={`group p-3 rounded-lg cursor-pointer transition-all ${currentChatId === chat.id
										? "bg-purple-100 border border-purple-200"
										: "hover:bg-gray-50 border border-transparent"
									}`}
							>
								<div className="flex items-start justify-between">
									<div className="flex-1 min-w-0">
										<h4 className="font-sans font-medium text-sm text-gray-900 truncate">{chat.title}</h4>
										<p className="text-xs text-gray-500 mt-1">{chat.updatedAt.toLocaleDateString()}</p>
										<div className="flex items-center mt-2">
											<Badge variant="secondary" className="text-xs">
												{chat.model}
											</Badge>
										</div>
									</div>
									<Button
										variant="ghost"
										size="sm"
										onClick={(e) => {
											e.stopPropagation()
											onDeleteChat(chat.id)
										}}
										className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0 text-gray-400 hover:text-red-600"
									>
										<Trash2 className="w-3 h-3" />
									</Button>
								</div>
							</div>
						))}
					</div>
				</ScrollArea>
			</div>

			{/* Pinned model selector to bottom */}
			<div className="p-4 border-t border-purple-100 flex-shrink-0">
				<label className="block text-sm font-medium text-gray-700 mb-2">AI Model</label>
				<ModelSelector selectedModel={selectedModel} onModelChange={onModelChange} className="w-full" />
			</div>
		</Sidebar>
	)
}

