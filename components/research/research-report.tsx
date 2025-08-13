import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"

interface ResearchReportProps {
	report: string
}

export function ResearchReport({ report }: ResearchReportProps) {
	return (
		<div className="p-6">
			<Card className="h-full">
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<FileText className="h-5 w-5 text-purple-600" />
						Comprehensive Report
					</CardTitle>
				</CardHeader>
				<CardContent className="prose prose-sm max-w-none">
					<p className="text-gray-700 leading-relaxed">{report}</p>
				</CardContent>
			</Card>
		</div>
	)
}

