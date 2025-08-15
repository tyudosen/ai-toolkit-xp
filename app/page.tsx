// import type { Metadata } from "next"
// import { cookies } from 'next/headers'
// import HomePageClient from "./home-page-client"
// import { getSignUpUrl, withAuth } from "@workos-inc/authkit-nextjs";
// import Link from "next/link";
// import { env } from "@/env";
//
// export const metadata: Metadata = {
//   title: "AI Toolkit - The Ultimate AI Tools Suite",
//   description:
//     "Unlock the power of artificial intelligence with our comprehensive suite of tools. From text generation to image creation, supercharge your productivity.",
// }
//
// export default async function HomePage() {
//   const { user, accessToken } = await withAuth();
//
//   console.log('access_token', accessToken)
//
//   const signUpUrl = await getSignUpUrl();
//
//   if (!user) {
//     return (
//       <>
//         <a href="/login">Sign in</a>
//         <Link href={signUpUrl}>Sign up</Link>
//       </>
//     );
//   }
//
//   const cookie_store = await cookies()
//   const wos_session = cookie_store.get(env.WORKS_OS_COOKIE_NAME)
//   const testRes = await fetch('http://localhost:3007/research?query=tips for improving my italian listening skills', {
//     credentials: 'include',
//     headers: {
//       'Cookie': wos_session?.value || ''
//     }
//   })
//
//   const testData = await testRes.json();
//
//   console.log('check -->', {
//     testRes,
//     testData
//   })
//
//
//   return <HomePageClient />
// }
import { Navigation } from "@/components/ui/navigation"
import { HeroSection } from "@/components/ui/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Zap, Users, Bot, ImageIcon, FileText, Code, Mic, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-gray-900 mb-4">
              Powerful Features for Every Creator
            </h2>
            <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive suite of AI tools is designed to enhance your productivity and unleash your creative
              potential.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "No-code AI Tools",
                desc: "Access powerful AI capabilities without any technical knowledge. Simple, intuitive interfaces for instant productivity.",
              },
              {
                icon: Brain,
                title: "Advanced Models",
                desc: "Powered by the latest AI models with simple, intuitive controls. Get professional results with minimal effort.",
              },
              {
                icon: Users,
                title: "Seamless Integration",
                desc: "Integrate effortlessly into your existing workflows. Export, share, and collaborate with ease.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
                  <p className="font-sans text-gray-600 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Showcase */}
      <section id="tools" className="py-20 bg-gradient-to-br from-purple-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-gray-900 mb-4">Explore Our AI Tools</h2>
            <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From content creation to code generation, discover tools that transform how you work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Bot,
                title: "AI Chat Assistant",
                desc: "Intelligent conversations and Q&A",
                color: "bg-blue-500",
                href: "/chat",
              },
              {
                icon: Search,
                title: "Deep Research",
                desc: "AI-powered research and analysis",
                color: "bg-purple-500",
                href: "/research",
              },
              {
                icon: ImageIcon,
                title: "Image Generator",
                desc: "Create stunning visuals from text",
                color: "bg-green-500",
                href: "#",
              },
              {
                icon: FileText,
                title: "Content Writer",
                desc: "Generate articles, blogs, and copy",
                color: "bg-orange-500",
                href: "#",
              },
              {
                icon: Code,
                title: "Code Generator",
                desc: "AI-powered development assistance",
                color: "bg-indigo-500",
                href: "#",
              },
              {
                icon: Mic,
                title: "Voice Tools",
                desc: "Speech-to-text and voice synthesis",
                color: "bg-red-500",
                href: "#",
              },
            ].map((tool, index) => (
              <Card
                key={index}
                className="group border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{tool.title}</h3>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed mb-4">{tool.desc}</p>
                  {tool.href === "#" ? (
                    <Button
                      variant="ghost"
                      className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0 h-auto font-sans font-semibold"
                      disabled
                    >
                      Coming soon <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  ) : (
                    <Link href={tool.href}>
                      <Button
                        variant="ghost"
                        className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0 h-auto font-sans font-semibold"
                      >
                        Try it now <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/abstract-wave-pattern.png" alt="" fill className="opacity-10 object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-heading font-black text-4xl lg:text-5xl text-white mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="font-sans text-xl text-purple-100 mb-8 leading-relaxed">
            Join thousands of creators, developers, and innovators who are already using AI Toolkit to enhance their
            productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-800 hover:bg-purple-50 font-sans font-semibold px-8 py-4 text-lg"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-sans font-semibold px-8 py-4 text-lg bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-heading font-black text-xl">AI Toolkit</span>
              </div>
              <p className="font-sans text-gray-400 leading-relaxed">
                Empowering creators with intelligent AI tools for the modern workflow.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2 font-sans text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 font-sans text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2 font-sans text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="font-sans text-gray-400">© 2025 AI Toolkit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

