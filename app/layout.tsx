import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import { AppHeader } from "@/components/ui/app-header"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "AI Toolkit - Innovation at Your Fingertips",
  description:
    "Discover a unified platform of AI-powered tools built for creators, developers, and thinkers. Transform your workflow with intelligent automation.",
  keywords: ["AI tools", "artificial intelligence", "productivity", "automation", "creators", "developers"],
  authors: [{ name: "AI Toolkit Team" }],
  creator: "AI Toolkit",
  publisher: "AI Toolkit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ai-toolkit.vercel.app"),
  openGraph: {
    title: "AI Toolkit - Innovation at Your Fingertips",
    description: "Discover a unified platform of AI-powered tools built for creators, developers, and thinkers.",
    url: "https://ai-toolkit.vercel.app",
    siteName: "AI Toolkit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Toolkit - Innovation at Your Fingertips",
    description: "Discover a unified platform of AI-powered tools built for creators, developers, and thinkers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen">
        <AppHeader />
        {children}
      </body>
    </html>
  )
}

