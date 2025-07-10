"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageSquare } from "lucide-react"

export function ChatHeader() {
	return (
		<header className="flex items-center justify-between px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6">
			<div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
				<Link href="/" className="flex-shrink-0">
					<Button
						variant="ghost"
						size="sm"
						className="text-white hover:bg-white/10 p-2 h-9 w-9 sm:h-10 sm:w-auto sm:px-3 lg:px-4"
						aria-label="Back to toolkit"
					>
						<ArrowLeft className="w-4 h-4" />
						<span className="hidden sm:inline ml-2">Back to Toolkit</span>
					</Button>
				</Link>

				<div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
					<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
						<MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
					</div>
					<div className="flex flex-col min-w-0 flex-1">
						<h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight truncate">
							AI Chat Assistant
						</h1>
						<p className="text-xs sm:text-sm text-gray-400 hidden sm:block truncate">Powered by advanced AI models</p>
					</div>
				</div>
			</div>

			<div className="hidden sm:flex items-center gap-2 flex-shrink-0 ml-4">
				<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
				<span className="text-xs text-gray-400 whitespace-nowrap">Online</span>
			</div>
		</header>
	)
}

