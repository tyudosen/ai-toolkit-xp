"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Zap, Brain, Sparkles, Cpu, Clock, Database, DollarSign } from "lucide-react"

const MODELS = [
	{
		id: "gpt-4",
		name: "GPT-4",
		description: "Most capable model for complex reasoning",
		icon: Brain,
		color: "from-purple-500 to-pink-500",
		speed: "Medium",
		contextLength: "128K tokens",
		capabilities: ["Reasoning", "Analysis", "Creative Writing"],
		cost: "High",
		tokensPerSecond: "20-30",
	},
	{
		id: "gpt-3.5-turbo",
		name: "GPT-3.5 Turbo",
		description: "Fast and efficient for most tasks",
		icon: Zap,
		color: "from-cyan-500 to-blue-500",
		speed: "Fast",
		contextLength: "16K tokens",
		capabilities: ["Chat", "Q&A", "Summarization"],
		cost: "Low",
		tokensPerSecond: "50-80",
	},
	{
		id: "claude-3",
		name: "Claude 3",
		description: "Excellent for analysis and reasoning",
		icon: Sparkles,
		color: "from-orange-500 to-red-500",
		speed: "Medium",
		contextLength: "200K tokens",
		capabilities: ["Analysis", "Research", "Long Documents"],
		cost: "Medium",
		tokensPerSecond: "25-40",
	},
	{
		id: "gemini-pro",
		name: "Gemini Pro",
		description: "Google's advanced multimodal model",
		icon: Cpu,
		color: "from-green-500 to-emerald-500",
		speed: "Fast",
		contextLength: "32K tokens",
		capabilities: ["Multimodal", "Code", "Math"],
		cost: "Medium",
		tokensPerSecond: "40-60",
	},
] as const

interface ModelSelectorProps {
	selectedModel: string
	onModelChange: (modelId: string) => void
	variant: "desktop" | "mobile"
}

export function ModelSelector({ selectedModel, onModelChange, variant }: ModelSelectorProps) {
	const [isOpen, setIsOpen] = useState(false)
	const selectedModelData = MODELS.find((m) => m.id === selectedModel)

	if (variant === "desktop") {
		return (
			<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 lg:p-6 shadow-lg">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-white font-semibold text-base lg:text-lg">AI Model Selection</h3>
					<div className="flex items-center gap-2">
						<div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
						<span className="text-xs text-gray-400">Active</span>
					</div>
				</div>

				<div className="relative">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="w-full flex items-center justify-between p-3 lg:p-4 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
					>
						<div className="flex items-center gap-3 lg:gap-4 min-w-0">
							<div
								className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0"
								style={{
									background: `linear-gradient(to right, ${selectedModelData?.color.replace("from-", "").replace("to-", ", ")})`,
								}}
							>
								{selectedModelData?.icon && <selectedModelData.icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />}
							</div>
							<div className="text-left min-w-0 flex-1">
								<div className="font-semibold text-sm lg:text-lg truncate">{selectedModelData?.name}</div>
								<div className="text-xs lg:text-sm text-gray-400 truncate">{selectedModelData?.description}</div>
							</div>
						</div>
						<ChevronDown
							className={`w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-200 flex-shrink-0 ml-2 ${isOpen ? "rotate-180" : ""}`}
						/>
					</button>

					<AnimatePresence>
						{isOpen && (
							<>
								{/* Backdrop */}
								<div className="fixed inset-0 z-[9998]" onClick={() => setIsOpen(false)} aria-hidden="true" />
								<motion.div
									initial={{ opacity: 0, y: -10, scale: 0.95 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: -10, scale: 0.95 }}
									transition={{ duration: 0.2 }}
									className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl z-[9999] overflow-hidden"
									style={{ maxHeight: "400px" }}
								>
									<div className="overflow-y-auto max-h-96 p-2">
										{MODELS.map((model) => (
											<button
												key={model.id}
												onClick={() => {
													onModelChange(model.id)
													setIsOpen(false)
												}}
												className={`w-full flex items-start gap-3 lg:gap-4 p-3 lg:p-4 rounded-lg transition-all duration-200 text-left hover:bg-white/10 ${selectedModel === model.id ? "bg-white/10 ring-1 ring-cyan-500/50" : ""
													}`}
											>
												<div
													className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg"
													style={{
														background: `linear-gradient(to right, ${model.color.replace("from-", "").replace("to-", ", ")})`,
													}}
												>
													<model.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
												</div>

												<div className="flex-1 min-w-0">
													<div className="flex items-center justify-between mb-2">
														<h4 className="text-white font-semibold text-sm lg:text-lg truncate">{model.name}</h4>
														{selectedModel === model.id && (
															<div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse flex-shrink-0 ml-2" />
														)}
													</div>

													<p className="text-gray-300 text-xs lg:text-sm mb-3 leading-relaxed">{model.description}</p>

													<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3 text-xs">
														<div className="flex items-center gap-2">
															<Clock className="w-3 h-3 text-cyan-400 flex-shrink-0" />
															<span className="text-gray-400">Speed:</span>
															<span className="text-white font-medium">{model.speed}</span>
														</div>

														<div className="flex items-center gap-2">
															<Zap className="w-3 h-3 text-green-400 flex-shrink-0" />
															<span className="text-gray-400">{model.tokensPerSecond} tok/s</span>
														</div>

														<div className="flex items-center gap-2">
															<Database className="w-3 h-3 text-purple-400 flex-shrink-0" />
															<span className="text-gray-400">Context:</span>
															<span className="text-white font-medium truncate">{model.contextLength}</span>
														</div>

														<div className="flex items-center gap-2">
															<DollarSign className="w-3 h-3 text-yellow-400 flex-shrink-0" />
															<span className="text-gray-400">Cost:</span>
															<span className="text-white font-medium">{model.cost}</span>
														</div>
													</div>

													<div className="mt-3 pt-3 border-t border-white/10">
														<div className="flex flex-wrap gap-1">
															{model.capabilities.map((capability) => (
																<span
																	key={capability}
																	className="px-2 py-1 bg-white/10 text-white text-xs rounded-full whitespace-nowrap"
																>
																	{capability}
																</span>
															))}
														</div>
													</div>
												</div>
											</button>
										))}
									</div>
								</motion.div>
							</>
						)}
					</AnimatePresence>
				</div>
			</div>
		)
	}

	// Mobile variant
	return (
		<div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl">
			<div className="flex items-center gap-3 min-w-0 flex-1">
				<div
					className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0"
					style={{
						background: `linear-gradient(to right, ${selectedModelData?.color.replace("from-", "").replace("to-", ", ")})`,
					}}
				>
					{selectedModelData?.icon && <selectedModelData.icon className="w-4 h-4 text-white" />}
				</div>
				<div className="min-w-0 flex-1">
					<div className="text-white font-medium text-sm truncate">{selectedModelData?.name}</div>
					<div className="text-gray-400 text-xs truncate">
						{selectedModelData?.speed} • {selectedModelData?.cost} cost
					</div>
				</div>
			</div>

			<div className="relative flex-shrink-0 ml-3">
				<select
					value={selectedModel}
					onChange={(e) => onModelChange(e.target.value)}
					className="appearance-none bg-white/10 border border-white/20 rounded-lg px-3 py-2 pr-8 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer hover:bg-white/20 transition-colors"
				>
					{MODELS.map((model) => (
						<option key={model.id} value={model.id} className="bg-gray-800 text-white">
							{model.name}
						</option>
					))}
				</select>
				<ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60 pointer-events-none" />
			</div>
		</div>
	)
}

