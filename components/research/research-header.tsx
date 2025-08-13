"use client"

import { Button } from "@/components/ui/button"
import { SearchInput } from "@/components/ui/search-input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { StatusIndicator } from "@/components/ui/status-indicator"
import { Download, Share2 } from "lucide-react"

interface ResearchHeaderProps {
	searchQuery: string
	onSearchQueryChange: (query: string) => void
	onSearch: (query: string) => void
	isSearching: boolean
	onSidebarToggle: () => void
}

export function ResearchHeader({
	searchQuery,
	onSearchQueryChange,
	onSearch,
	isSearching,
	onSidebarToggle,
}: ResearchHeaderProps) {
	return (
		<div className="bg-white border-b border-gray-200 p-4">
			<div className="flex items-center gap-4">
				<SidebarTrigger onClick={onSidebarToggle} />

				<div className="flex-1 max-w-2xl">
					<SearchInput
						placeholder="Enter your research query..."
						onSubmit={onSearch}
						isLoading={isSearching}
						className="w-full"
					/>
					{isSearching && <StatusIndicator status="loading" message="Researching your query..." className="mt-2" />}
				</div>

				<div className="flex items-center gap-2">
					<Button variant="outline" size="sm">
						<Download className="h-4 w-4 mr-2" />
						Export
					</Button>
					<Button variant="outline" size="sm">
						<Share2 className="h-4 w-4 mr-2" />
						Share
					</Button>
				</div>
			</div>
		</div>
	)
}

