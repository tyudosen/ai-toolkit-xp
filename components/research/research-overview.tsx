import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ExternalLink, Lightbulb } from "lucide-react"
import type { ResearchSession } from "@/lib/types"

interface ResearchOverviewProps {
	research: ResearchSession
}

export function ResearchOverview({ research }: ResearchOverviewProps) {
	return (
		<div className="p-6 space-y-6">
			<div>
				<h1 className="text-2xl font-bold text-gray-900 mb-2">{research.query}</h1>
				<div className="flex items-center gap-4 text-sm text-gray-600">
					<span className="flex items-center gap-1">
						<Clock className="h-4 w-4" />
						Completed {research.updatedAt.toLocaleDateString()}
					</span>
					<span>{research.sources.length} sources analyzed</span>
					<span>{research.insights.length} key insights</span>
				</div>
			</div>

			<div className="grid md:grid-cols-2 gap-6">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<ExternalLink className="h-5 w-5 text-purple-600" />
							Top Sources
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3">
						{research.sources.slice(0, 3).map((source) => (
							<div key={source.id} className="flex items-start gap-3">
								<Badge variant="secondary" className="text-xs">
									{source.relevanceScore}%
								</Badge>
								<div className="flex-1 min-w-0">
									<h4 className="font-medium text-sm text-gray-900 truncate">{source.title}</h4>
									<p className="text-xs text-gray-600 mt-1 line-clamp-2">{source.content}</p>
								</div>
							</div>
						))}
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Lightbulb className="h-5 w-5 text-purple-600" />
							Key Insights
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3">
						{research.insights.map((insight) => (
							<div key={insight.id} className="p-3 bg-purple-50 rounded-lg">
								<p className="text-sm font-medium text-gray-900">{insight.title}</p>
								<p className="text-xs text-gray-600 mt-1">{insight.followUpQuestions.length} follow-up questions</p>
							</div>
						))}
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

