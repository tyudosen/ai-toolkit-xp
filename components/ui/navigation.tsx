import { Button } from "@/components/ui/button"
import { Brain } from "lucide-react"
import Link from "next/link"

export function Navigation() {
	return (
		<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link href="/" className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-purple-800 rounded-lg flex items-center justify-center">
							<Brain className="w-5 h-5 text-white" />
						</div>
						<span className="font-heading font-black text-xl text-purple-800">AI Toolkit</span>
					</Link>
					<div className="hidden md:flex items-center space-x-8">
						<a href="#tools" className="font-sans text-gray-700 hover:text-purple-800 transition-colors">
							Tools
						</a>
						<a href="#features" className="font-sans text-gray-700 hover:text-purple-800 transition-colors">
							Features
						</a>
						<a href="#pricing" className="font-sans text-gray-700 hover:text-purple-800 transition-colors">
							Pricing
						</a>
						<Button variant="outline" className="border-purple-200 text-purple-800 hover:bg-purple-50 bg-transparent">
							Sign In
						</Button>
						<Button className="bg-purple-500 hover:bg-purple-600 text-white">Get Started</Button>
					</div>
				</div>
			</div>
		</nav>
	)
}

