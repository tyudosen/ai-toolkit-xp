"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { ToolCard } from "@/components/ui/tool-card"
import { ArrowRight, Zap, Brain, Sparkles, Menu, X } from "lucide-react"
import { AI_TOOLS } from "@/lib/constants"

// Dynamically import the splash screen to reduce initial bundle size
const SplashScreen = dynamic(() => import("@/components/splash-screen"), {
	ssr: false,
})

export default function HomeClient() {
	const [showSplash, setShowSplash] = useState(true)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const handleSplashComplete = () => {
		setShowSplash(false)
	}

	return (
		<div className="min-h-screen" style={{ background: "linear-gradient(135deg, #0f172a, #581c87, #0f172a)" }}>
			<AnimatePresence>{showSplash && <SplashScreen onComplete={handleSplashComplete} />}</AnimatePresence>

			{!showSplash && (
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
					{/* Header */}
					<motion.header
						initial={{ y: -50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className="container mx-auto py-4 sm:py-8"
					>
						<nav className="flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<div
									className="w-8 h-8 rounded-lg flex items-center justify-center"
									style={{ background: "linear-gradient(to right, #22d3ee, #c084fc)" }}
								>
									<Sparkles className="w-5 h-5 text-white" />
								</div>
								<span className="text-xl sm:text-2xl font-bold text-white">AI Toolkit</span>
							</div>

							{/* Desktop navigation */}
							<div className="hidden sm:block">
								<Button
									variant="outline"
									className="text-white border-white hover:bg-white hover:text-black bg-transparent"
								>
									Sign In
								</Button>
							</div>

							{/* Mobile menu button */}
							<button
								className="sm:hidden text-white p-2"
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
								aria-label="Toggle menu"
							>
								{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
							</button>
						</nav>

						{/* Mobile menu */}
						<AnimatePresence>
							{mobileMenuOpen && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									className="sm:hidden mt-4 pb-4 border-t border-white/20"
								>
									<div className="pt-4">
										<Button
											variant="outline"
											className="w-full text-white border-white hover:bg-white hover:text-black bg-transparent"
											onClick={() => setMobileMenuOpen(false)}
										>
											Sign In
										</Button>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.header>

					{/* Hero Section */}
					<motion.section
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="container mx-auto py-8 sm:py-16 text-center"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
							The Ultimate{" "}
							<span
								style={{
									background: "linear-gradient(to right, #22d3ee, #c084fc)",
									backgroundClip: "text",
									WebkitBackgroundClip: "text",
									color: "transparent",
								}}
							>
								AI Toolkit
							</span>
						</h1>
						<p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
							Unlock the power of artificial intelligence with our comprehensive suite of tools. From intelligent
							conversations to stunning image creation, we've got everything you need to supercharge your productivity.
						</p>
						<Button
							size="lg"
							className="text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto touch-manipulation"
							style={{ background: "linear-gradient(to right, #06b6d4, #8b5cf6)" }}
						>
							Get Started <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
						</Button>
					</motion.section>

					{/* Tools Grid */}
					<motion.section
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className="container mx-auto py-8 sm:py-16"
					>
						<h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">Choose Your AI Tool</h2>

						{/* Responsive grid for 2 tools */}
						<div className="flex justify-center">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl w-full">
								{AI_TOOLS.map((tool, index) => (
									<div key={tool.id} className="flex justify-center">
										<div className="w-full max-w-md lg:max-w-none">
											<ToolCard tool={tool} index={index} />
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Coming Soon Section */}
						<motion.div
							initial={{ y: 30, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 1.4, duration: 0.8 }}
							className="text-center mt-12 sm:mt-16"
						>
							<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
								<h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">More Tools Coming Soon</h3>
								<p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
									We're constantly expanding our AI toolkit. Stay tuned for text analysis, code assistance, knowledge
									base search, and task automation tools.
								</p>
								<Button
									variant="outline"
									className="text-white border-white/30 hover:bg-white/10 bg-transparent w-full sm:w-auto"
								>
									Get Notified
								</Button>
							</div>
						</motion.div>
					</motion.section>

					{/* Features Section */}
					<motion.section
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 1.2, duration: 0.8 }}
						className="container mx-auto py-8 sm:py-16"
					>
						<div className="text-center mb-8 sm:mb-12">
							<h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Why Choose Our AI Toolkit?</h2>
							<p className="text-lg sm:text-xl text-gray-300">Built for professionals, designed for everyone</p>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
							<div className="text-center">
								<div
									className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
									style={{ background: "linear-gradient(to right, #22d3ee, #3b82f6)" }}
								>
									<Zap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
								</div>
								<h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Lightning Fast</h3>
								<p className="text-gray-300 text-sm sm:text-base">
									Get results in seconds with our optimized AI models
								</p>
							</div>
							<div className="text-center">
								<div
									className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
									style={{ background: "linear-gradient(to right, #c084fc, #ec4899)" }}
								>
									<Brain className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
								</div>
								<h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Advanced AI</h3>
								<p className="text-gray-300 text-sm sm:text-base">
									Powered by the latest machine learning technologies
								</p>
							</div>
							<div className="text-center sm:col-span-2 lg:col-span-1">
								<div
									className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
									style={{ background: "linear-gradient(to right, #4ade80, #10b981)" }}
								>
									<Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
								</div>
								<h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Easy to Use</h3>
								<p className="text-gray-300 text-sm sm:text-base">Intuitive interface designed for all skill levels</p>
							</div>
						</div>
					</motion.section>

					{/* Footer */}
					<footer className="container mx-auto py-6 sm:py-8 border-t border-white/20">
						<div className="text-center text-gray-400 text-sm sm:text-base">
							<p>&copy; 2024 AI Toolkit. All rights reserved.</p>
						</div>
					</footer>
				</motion.div>
			)}
		</div>
	)
}

