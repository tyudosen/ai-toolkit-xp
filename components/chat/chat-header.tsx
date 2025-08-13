"use client"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Bot } from "lucide-react"
import { AI_MODELS } from "@/lib/constants"

interface ChatHeaderProps {
	chatTitle: string
	selectedModel: string
	onSidebarToggle: () => void
	sidebarOpen: boolean
}

export function ChatHeader({ chatTitle, selectedModel, onSidebarToggle, sidebarOpen }: ChatHeaderProps) {
	const currentModel = AI_MODELS.find((m) => m.id === selectedModel)

	return (
		<nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 p-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-4">
					{!sidebarOpen && <SidebarTrigger onClick={onSidebarToggle} />}
					<div className="flex items-center space-x-3">
						<div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
							<Bot className="w-5 h-5 text-white" />
						</div>
						<div>
							<h1 className="font-heading font-bold text-gray-900">{chatTitle}</h1>
							<p className="text-sm text-gray-500">Using {currentModel?.name}</p>
						</div>
					</div>
				</div>
				<div className="flex items-center space-x-2">
					<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
					<span className="text-gray-600 text-sm">Online</span>
				</div>
			</div>
		</nav>
	)
}

