"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import type { SplashScreenProps } from "@/lib/types"

export default function SplashScreen({ onComplete }: SplashScreenProps) {
	const [progress, setProgress] = useState(0)
	const [currentPhase, setCurrentPhase] = useState(0)

	const phases = [
		"Initializing neural networks...",
		"Loading AI models...",
		"Calibrating algorithms...",
		"Optimizing performance...",
		"Ready to launch!",
	]

	const handleComplete = useCallback(() => {
		setTimeout(onComplete, 800)
	}, [onComplete])

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prev) => {
				const newProgress = prev + 1.5

				// Update phase based on progress
				const phaseIndex = Math.floor((newProgress / 100) * phases.length)
				setCurrentPhase(Math.min(phaseIndex, phases.length - 1))

				if (newProgress >= 100) {
					clearInterval(timer)
					handleComplete()
					return 100
				}
				return newProgress
			})
		}, 60)

		return () => clearInterval(timer)
	}, [handleComplete, phases.length])

	return (
		<motion.div
			className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden"
			exit={{ opacity: 0, scale: 1.1 }}
			transition={{ duration: 0.8, ease: "easeInOut" }}
		>
			{/* Animated grid background */}
			<div className="absolute inset-0 opacity-20" aria-hidden="true">
				<svg className="w-full h-full">
					<defs>
						<pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
							<path d="M 60 0 L 0 0 0 60" fill="none" stroke="#22d3ee" strokeWidth="0.5" opacity="0.3" />
						</pattern>
						<linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
							<stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
							<stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
						</linearGradient>
					</defs>
					<rect width="100%" height="100%" fill="url(#grid)" />
					<rect width="100%" height="100%" fill="url(#gridGradient)" />
				</svg>
			</div>

			{/* Floating geometric shapes */}
			<div className="absolute inset-0" aria-hidden="true">
				{Array.from({ length: 12 }, (_, i) => (
					<motion.div
						key={i}
						className="absolute"
						initial={{
							x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
							y: typeof window !== "undefined" ? Math.random() * window.innerHeight : 0,
							opacity: 0,
							scale: 0,
						}}
						animate={{
							opacity: [0, 0.6, 0],
							scale: [0, 1, 0],
							rotate: [0, 180, 360],
						}}
						transition={{
							duration: 4 + Math.random() * 2,
							repeat: Number.POSITIVE_INFINITY,
							delay: Math.random() * 3,
							ease: "easeInOut",
						}}
					>
						{i % 3 === 0 ? (
							<div className="w-4 h-4 border border-cyan-400 rotate-45" />
						) : i % 3 === 1 ? (
							<div className="w-3 h-3 bg-purple-500 rounded-full" />
						) : (
							<div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-pink-400" />
						)}
					</motion.div>
				))}
			</div>

			<div className="text-center relative z-10 w-full max-w-lg px-6">
				{/* Main logo with morphing effect */}
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="mb-8 relative"
				>
					{/* Outer morphing ring */}
					<motion.div
						className="w-32 h-32 sm:w-40 sm:h-40 mx-auto relative"
						animate={{
							scale: [1, 1.1, 1],
						}}
						transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
					>
						{/* Multiple rotating rings */}
						{Array.from({ length: 3 }, (_, i) => (
							<motion.div
								key={i}
								className="absolute inset-0 rounded-full border-2"
								style={{
									borderColor: i === 0 ? "#22d3ee" : i === 1 ? "#8b5cf6" : "#ec4899",
									borderStyle: "dashed",
									borderWidth: "2px",
									scale: 1 - i * 0.2,
								}}
								animate={{
									rotate: i % 2 === 0 ? 360 : -360,
									borderRadius: ["50%", "25%", "50%"],
								}}
								transition={{
									rotate: {
										duration: 8 + i * 2,
										repeat: Number.POSITIVE_INFINITY,
										ease: "linear",
									},
									borderRadius: {
										duration: 4,
										repeat: Number.POSITIVE_INFINITY,
										ease: "easeInOut",
									},
								}}
							/>
						))}

						{/* Central sparkle with pulsing effect */}
						<div className="absolute inset-0 flex items-center justify-center">
							<motion.div
								animate={{
									scale: [1, 1.3, 1],
									filter: [
										"drop-shadow(0 0 10px rgba(34, 211, 238, 0.5))",
										"drop-shadow(0 0 20px rgba(139, 92, 246, 0.8))",
										"drop-shadow(0 0 10px rgba(34, 211, 238, 0.5))",
									],
								}}
								transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
							>
								<Sparkles className="w-16 h-16 sm:w-20 sm:h-20 text-white" aria-label="AI Toolkit Logo" />
							</motion.div>
						</div>

						{/* Data streams */}
						{Array.from({ length: 6 }, (_, i) => (
							<motion.div
								key={i}
								className="absolute w-1 bg-gradient-to-t from-transparent via-cyan-400 to-transparent"
								style={{
									height: "60px",
									left: "50%",
									top: "50%",
									transformOrigin: "0 0",
									transform: `rotate(${i * 60}deg) translateY(-80px)`,
								}}
								animate={{
									scaleY: [0, 1, 0],
									opacity: [0, 1, 0],
								}}
								transition={{
									duration: 2,
									repeat: Number.POSITIVE_INFINITY,
									delay: i * 0.3,
									ease: "easeInOut",
								}}
							/>
						))}
					</motion.div>
				</motion.div>

				{/* Brand text with glitch effect */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.8 }}
				>
					<motion.h1
						className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 relative"
						style={{
							background: "linear-gradient(45deg, #22d3ee, #8b5cf6, #ec4899, #22d3ee)",
							backgroundSize: "300% 300%",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
						}}
						animate={{
							backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
						}}
						transition={{
							duration: 3,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					>
						AI TOOLKIT
						{/* Glitch overlay */}
						<motion.span
							className="absolute inset-0 text-cyan-400"
							animate={{
								opacity: [0, 0, 0, 0.3, 0],
								x: [0, -2, 2, 0],
							}}
							transition={{
								duration: 0.1,
								repeat: Number.POSITIVE_INFINITY,
								repeatDelay: 3,
							}}
							style={{ mixBlendMode: "screen" }}
						>
							AI TOOLKIT
						</motion.span>
					</motion.h1>

					<motion.p
						className="text-gray-400 text-lg mb-8 font-mono tracking-wider"
						animate={{
							opacity: [0.7, 1, 0.7],
						}}
						transition={{
							duration: 2,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					>
						NEXT-GEN ARTIFICIAL INTELLIGENCE
					</motion.p>
				</motion.div>

				{/* Advanced progress section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.8 }}
					className="w-full max-w-md mx-auto"
				>
					{/* Hexagonal progress indicator */}
					<div className="relative mb-6">
						<svg className="w-full h-4" viewBox="0 0 400 20">
							<defs>
								<linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" stopColor="#22d3ee" />
									<stop offset="50%" stopColor="#8b5cf6" />
									<stop offset="100%" stopColor="#ec4899" />
								</linearGradient>
							</defs>

							{/* Background track */}
							<rect x="0" y="8" width="400" height="4" rx="2" fill="rgba(255,255,255,0.1)" />

							{/* Progress fill */}
							<motion.rect
								x="0"
								y="8"
								height="4"
								rx="2"
								fill="url(#progressGradient)"
								initial={{ width: 0 }}
								animate={{ width: `${(progress / 100) * 400}px` }}
								transition={{ duration: 0.3, ease: "easeOut" }}
							/>

							{/* Progress nodes */}
							{Array.from({ length: 5 }, (_, i) => (
								<motion.circle
									key={i}
									cx={80 + i * 60}
									cy="10"
									r="6"
									fill={progress >= (i + 1) * 20 ? "url(#progressGradient)" : "rgba(255,255,255,0.2)"}
									stroke={progress >= (i + 1) * 20 ? "#ffffff" : "rgba(255,255,255,0.3)"}
									strokeWidth="2"
									animate={{
										scale: progress >= (i + 1) * 20 ? [1, 1.3, 1] : 1,
									}}
									transition={{
										duration: 0.5,
										repeat: progress >= (i + 1) * 20 ? Number.POSITIVE_INFINITY : 0,
										repeatDelay: 1,
									}}
								/>
							))}
						</svg>
					</div>

					{/* Status text with typing effect */}
					<div className="flex justify-between items-center mb-4">
						<motion.span
							className="text-cyan-400 font-mono text-sm tracking-wide"
							key={currentPhase}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							{phases[currentPhase]}
						</motion.span>
						<motion.span
							className="text-white font-bold text-lg"
							animate={{
								scale: [1, 1.1, 1],
								color: ["#ffffff", "#22d3ee", "#ffffff"],
							}}
							transition={{
								duration: 1,
								repeat: Number.POSITIVE_INFINITY,
							}}
						>
							{Math.round(progress)}%
						</motion.span>
					</div>

					{/* System status indicators */}
					<div className="grid grid-cols-3 gap-2 text-xs">
						{["CPU", "GPU", "RAM"].map((component, i) => (
							<motion.div
								key={component}
								className="bg-white/5 rounded px-2 py-1 text-center"
								animate={{
									backgroundColor: progress > i * 30 ? "rgba(34, 211, 238, 0.1)" : "rgba(255, 255, 255, 0.05)",
								}}
							>
								<div className="text-gray-400">{component}</div>
								<motion.div
									className="text-cyan-400 font-mono"
									animate={{
										opacity: [0.5, 1, 0.5],
									}}
									transition={{
										duration: 1.5,
										repeat: Number.POSITIVE_INFINITY,
										delay: i * 0.2,
									}}
								>
									{progress > i * 30 ? "ONLINE" : "INIT"}
								</motion.div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</motion.div>
	)
}

