"use client"

import { useState } from "react"
import { useSidebar } from "@/lib/hooks/use-sidebar"
import { ChatSidebar } from "@/components/chat/chat-sidebar"
import { ChatHeader } from "@/components/chat/chat-header"
import { ChatMessages } from "@/components/chat/chat-messages"
import { ChatInput } from "@/components/chat/chat-input"
import { AI_MODELS } from "@/lib/constants"
import type { ChatSession, ChatMessage } from "@/lib/types"

const mockChats: ChatSession[] = [
	{
		id: "1",
		title: "Getting Started",
		model: "GPT-4",
		createdAt: new Date(),
		updatedAt: new Date(),
		messages: [
			{
				id: "1",
				role: "assistant",
				content: "Hello! I'm your AI assistant. How can I help you today?",
				timestamp: new Date(),
			},
		],
	},
	{
		id: "2",
		title: "Code Review Help",
		model: "GPT-4",
		createdAt: new Date(Date.now() - 3600000),
		updatedAt: new Date(Date.now() - 3600000),
		messages: [
			{
				id: "1",
				role: "user",
				content: "Can you help me review this React component?",
				timestamp: new Date(Date.now() - 3600000),
			},
		],
	},
	{
		id: "3",
		title: "Writing Assistant",
		model: "Claude 3",
		createdAt: new Date(Date.now() - 7200000),
		updatedAt: new Date(Date.now() - 7200000),
		messages: [
			{
				id: "1",
				role: "user",
				content: "Help me write a professional email",
				timestamp: new Date(Date.now() - 7200000),
			},
		],
	},
]

export default function ChatPage() {
	const [chats, setChats] = useState<ChatSession[]>(mockChats)
	const [currentChatId, setCurrentChatId] = useState("1")
	const [selectedModel, setSelectedModel] = useState("gpt-4")
	const [isTyping, setIsTyping] = useState(false)
	const { isOpen: sidebarOpen, toggle: toggleSidebar } = useSidebar(true)

	const currentChat = chats.find((chat) => chat.id === currentChatId)
	const messages = currentChat?.messages || []

	const handleSend = async (content: string) => {
		if (!currentChat) return

		const userMessage: ChatMessage = {
			id: Date.now().toString(),
			role: "user",
			content,
			timestamp: new Date(),
		}

		setChats((prev) =>
			prev.map((chat) =>
				chat.id === currentChatId
					? { ...chat, messages: [...chat.messages, userMessage], updatedAt: new Date() }
					: chat,
			),
		)

		setIsTyping(true)

		// Simulate AI response
		setTimeout(() => {
			const aiMessage: ChatMessage = {
				id: (Date.now() + 1).toString(),
				role: "assistant",
				content: `I understand your question. This is a response from ${AI_MODELS.find((m) => m.id === selectedModel)?.name}. In a real implementation, this would connect to the selected AI service.`,
				timestamp: new Date(),
			}

			setChats((prev) =>
				prev.map((chat) =>
					chat.id === currentChatId
						? { ...chat, messages: [...chat.messages, aiMessage], updatedAt: new Date() }
						: chat,
				),
			)
			setIsTyping(false)
		}, 1500)
	}

	const copyMessage = (content: string) => {
		navigator.clipboard.writeText(content)
	}

	const createNewChat = () => {
		const newChat: ChatSession = {
			id: Date.now().toString(),
			title: "New Chat",
			model: selectedModel,
			createdAt: new Date(),
			updatedAt: new Date(),
			messages: [
				{
					id: "1",
					role: "assistant",
					content: "Hello! I'm your AI assistant. How can I help you today?",
					timestamp: new Date(),
				},
			],
		}
		setChats((prev) => [newChat, ...prev])
		setCurrentChatId(newChat.id)
	}

	const deleteChat = (chatId: string) => {
		setChats((prev) => prev.filter((chat) => chat.id !== chatId))
		if (currentChatId === chatId && chats.length > 1) {
			const remainingChats = chats.filter((chat) => chat.id !== chatId)
			setCurrentChatId(remainingChats[0]?.id || "")
		}
	}

	const handleThumbsUp = (messageId: string) => {
		console.log("Thumbs up for message:", messageId)
	}

	const handleThumbsDown = (messageId: string) => {
		console.log("Thumbs down for message:", messageId)
	}

	return (
		<div className="h-[calc(100vh-4rem)] bg-gradient-to-br from-white via-purple-50/30 to-purple-100/50 flex">
			<ChatSidebar
				isOpen={sidebarOpen}
				onToggle={toggleSidebar}
				chats={chats}
				currentChatId={currentChatId}
				selectedModel={selectedModel}
				onChatSelect={setCurrentChatId}
				onNewChat={createNewChat}
				onDeleteChat={deleteChat}
				onModelChange={setSelectedModel}
			/>

			<div className="flex-1 flex flex-col">
				<ChatHeader
					chatTitle={currentChat?.title || "AI Assistant"}
					selectedModel={selectedModel}
					onSidebarToggle={toggleSidebar}
					sidebarOpen={sidebarOpen}
				/>

				<ChatMessages
					messages={messages}
					isTyping={isTyping}
					onCopyMessage={copyMessage}
					onThumbsUp={handleThumbsUp}
					onThumbsDown={handleThumbsDown}
				/>

				<ChatInput onSend={handleSend} disabled={isTyping} />
			</div>
		</div>
	)
}

