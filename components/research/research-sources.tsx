import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ResearchSource } from "@/lib/types"

interface ResearchSourcesProps {
	sources: ResearchSource[]
}

export function ResearchSources({ sources }: ResearchSourcesProps) {
	return (
		<div className="p-6 space-y-4">
			{sources.map((source) => (
				<Card key={source.id}>
					<CardContent className="p-4">
						<div className="flex items-start justify-between mb-3">
							<div className="flex-1">
								<h3 className="font-semibold text-gray-900">{source.title}</h3>
								<a
									href={source.url}
									className="text-sm text-purple-600 hover:underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									{source.url}
								</a>
							</div>
							<Badge variant="secondary">{source.relevanceScore}% relevant</Badge>
						</div>
						<p className="text-gray-700 text-sm">{source.content}</p>
					</CardContent>
				</Card>
			))}
		</div>
	)
}

