import type { Metadata } from "next"
import HomePageClient from "./home-page-client"

export const metadata: Metadata = {
  title: "AI Toolkit - The Ultimate AI Tools Suite",
  description:
    "Unlock the power of artificial intelligence with our comprehensive suite of tools. From text generation to image creation, supercharge your productivity.",
}

export default function HomePage() {
  return <HomePageClient />
}

