import { Card, CardContent } from "@/components/ui/card"
import type { ResearchInsight } from "@/lib/types"

interface ResearchInsightsProps {
	insights: ResearchInsight[]
}

export function ResearchInsights({ insights }: ResearchInsightsProps) {
	return (
		<div className="p-6 space-y-6">
			{insights.map((insight) => (
				<Card key={insight.id}>
					<CardContent className="p-6">
						<h3 className="font-semibold text-gray-900 mb-3">{insight.title}</h3>
						<p className="text-gray-700 mb-4">{insight.content}</p>
						<div className="space-y-2">
							<h4 className="text-sm font-medium text-gray-700">Follow-up Questions:</h4>
							<ul className="space-y-1">
								{insight.followUpQuestions.map((question, index) => (
									<li key={index} className="text-sm text-gray-600 flex items-start gap-2">
										<span className="text-purple-600 mt-1">•</span>
										{question}
									</li>
								))}
							</ul>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	)
}

