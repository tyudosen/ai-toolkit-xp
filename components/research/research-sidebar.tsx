"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sidebar } from "@/components/ui/sidebar"
import type { ResearchSession } from "@/lib/types"

interface ResearchSidebarProps {
	isOpen: boolean
	onToggle: () => void
	researchHistory: ResearchSession[]
	selectedResearchId: number
	onResearchSelect: (id: number) => void
}

export function ResearchSidebar({
	isOpen,
	onToggle,
	researchHistory,
	selectedResearchId,
	onResearchSelect,
}: ResearchSidebarProps) {
	return (
		<Sidebar isOpen={isOpen} onToggle={onToggle} className="w-80">
			<div className="flex items-center justify-between p-4 border-b border-gray-200">
				<h2 className="text-lg font-semibold text-gray-900">Research History</h2>
			</div>

			<ScrollArea className="flex-1 p-4">
				<div className="space-y-3">
					{researchHistory.map((research) => (
						<Card
							key={research.id}
							className={`cursor-pointer transition-colors ${selectedResearchId === Number(research.id) ? "bg-purple-50 border-purple-200" : "hover:bg-gray-50"
								}`}
							onClick={() => onResearchSelect(Number(research.id))}
						>
							<CardContent className="p-3">
								<div className="flex items-start justify-between">
									<div className="flex-1 min-w-0">
										<h3 className="font-medium text-sm text-gray-900 truncate">{research.title}</h3>
										<p className="text-xs text-gray-500 mt-1">{research.createdAt.toLocaleDateString()}</p>
									</div>
									<Badge variant={research.status === "completed" ? "default" : "secondary"} className="ml-2 text-xs">
										{research.status}
									</Badge>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</ScrollArea>
		</Sidebar>
	)
}

