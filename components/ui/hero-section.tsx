import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Shield, Sparkles, Bot, ImageIcon, FileText, Code } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-purple-100/50 py-20 lg:py-32">
			<div className="absolute inset-0">
				<Image src="/abstract-neural-network.png" alt="" fill className="opacity-5 object-cover" priority />
			</div>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<Badge className="bg-purple-100 text-purple-800 border-purple-200 font-sans">
							<Sparkles className="w-4 h-4 mr-2" />
							Innovation at Your Fingertips
						</Badge>
						<h1 className="font-heading font-black text-5xl lg:text-7xl text-gray-900 leading-tight">
							Your AI{" "}
							<span className="text-purple-800 relative">
								Toolkit
								<div className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500 rounded-full"></div>
							</span>
						</h1>
						<p className="font-sans text-xl text-gray-600 leading-relaxed max-w-lg">
							Discover a unified platform of AI-powered tools built for creators, developers, and thinkers. Transform
							your workflow with intelligent automation.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								size="lg"
								className="bg-purple-500 hover:bg-purple-600 text-white font-sans font-semibold px-8 py-4 text-lg animate-pulse-glow"
							>
								Explore the Toolkit
								<ArrowRight className="ml-2 w-5 h-5" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-purple-200 text-purple-800 hover:bg-purple-50 font-sans font-semibold px-8 py-4 text-lg bg-transparent"
							>
								See How It Works
							</Button>
						</div>
						<div className="flex items-center space-x-6 text-sm text-gray-500">
							<div className="flex items-center space-x-2">
								<Users className="w-4 h-4" />
								<span>Trusted by 10,000+ creators</span>
							</div>
							<div className="flex items-center space-x-2">
								<Shield className="w-4 h-4" />
								<span>Enterprise-grade security</span>
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="grid grid-cols-2 gap-4 animate-float">
							{[
								{ icon: Bot, title: "AI Chat", desc: "Intelligent conversations" },
								{ icon: ImageIcon, title: "Image Gen", desc: "Create stunning visuals" },
								{ icon: FileText, title: "Text Tools", desc: "Smart writing assistance" },
								{ icon: Code, title: "Code AI", desc: "Intelligent development" },
							].map((tool, index) => (
								<Card
									key={tool.title}
									className={`bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${index % 2 === 1 ? "mt-8" : ""
										}`}
								>
									<CardContent className="p-6 text-center">
										<tool.icon className="w-8 h-8 text-purple-500 mx-auto mb-3" />
										<h3 className="font-heading font-bold text-gray-900">{tool.title}</h3>
										<p className="text-sm text-gray-600 mt-2">{tool.desc}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

