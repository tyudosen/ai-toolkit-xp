import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "AI Toolkit - The Ultimate AI Tools Suite",
    template: "%s | AI Toolkit",
  },
  description:
    "Unlock the power of artificial intelligence with our comprehensive suite of tools. From text generation to image creation, supercharge your productivity.",
  keywords: ["AI tools", "artificial intelligence", "machine learning", "productivity", "automation"],
  authors: [{ name: "AI Toolkit Team" }],
  creator: "AI Toolkit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-toolkit.com",
    title: "AI Toolkit - The Ultimate AI Tools Suite",
    description: "Comprehensive suite of AI tools for enhanced productivity",
    siteName: "AI Toolkit",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Toolkit - The Ultimate AI Tools Suite",
    description: "Comprehensive suite of AI tools for enhanced productivity",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

