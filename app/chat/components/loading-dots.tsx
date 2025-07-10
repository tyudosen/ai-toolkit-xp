"use client"

interface LoadingDotsProps {
	model: string
}

export function LoadingDots({ model }: LoadingDotsProps) {
	return (
		<div className="flex items-center gap-2">
			<div className="flex gap-1">
				{[0, 1, 2].map((i) => (
					<div
						key={i}
						className="w-2 h-2 bg-white rounded-full animate-bounce"
						style={{ animationDelay: `${i * 0.1}s` }}
					/>
				))}
			</div>
			<span className="text-xs text-gray-300 font-mono">{model.toUpperCase()}</span>
		</div>
	)
}

