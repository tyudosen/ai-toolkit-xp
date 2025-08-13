"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useSidebar } from "@/lib/hooks/use-sidebar"
import { ResearchSidebar } from "@/components/research/research-sidebar"
import { ResearchHeader } from "@/components/research/research-header"
import { ResearchOverview } from "@/components/research/research-overview"
import { ResearchSources } from "@/components/research/research-sources"
import { ResearchInsights } from "@/components/research/research-insights"
import { ResearchReport } from "@/components/research/research-report"
import type { ResearchSession } from "@/lib/types"

const mockResearchData: Record<number, ResearchSession> = {
  1: {
    id: "1",
    query: "How to improve Italian listening skills",
    title: "Italian Listening Skills",
    status: "completed",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    sources: [
      {
        id: "1",
        title: "FluentU Italian - Listening Practice",
        url: "https://www.fluentu.com/blog/italian/italian-listening/",
        content:
          "FluentU offers authentic Italian videos with interactive subtitles to improve listening comprehension...",
        relevanceScore: 95,
        type: "article",
      },
      {
        id: "2",
        title: "ItalianPod101 - Audio Lessons",
        url: "https://www.italianpod101.com",
        content: "Comprehensive audio lessons designed specifically for improving Italian listening skills...",
        relevanceScore: 92,
        type: "article",
      },
      {
        id: "3",
        title: "News in Slow Italian",
        url: "https://newsinslowitalian.com",
        content: "Current events presented at a slower pace to help intermediate learners improve comprehension...",
        relevanceScore: 88,
        type: "news",
      },
    ],
    insights: [
      {
        id: "1",
        title: "Progressive Difficulty Approach",
        content: "Start with content slightly below your level and gradually increase difficulty",
        followUpQuestions: [
          "What specific Italian content types work best for beginners?",
          "How do you measure listening progress?",
        ],
        sources: ["1", "2"],
      },
      {
        id: "2",
        title: "Active vs Passive Listening",
        content: "Active listening with transcripts is more effective than passive listening",
        followUpQuestions: [
          "What are the best Italian podcasts with transcripts?",
          "How often should you practice active listening?",
        ],
        sources: ["1", "3"],
      },
    ],
    report:
      "Based on comprehensive research, improving Italian listening skills requires a structured approach combining multiple methods including authentic content consumption, active listening practice, and gradual difficulty progression...",
  },
  2: {
    id: "2",
    query: "Spanish Grammar Rules",
    title: "Spanish Grammar Rules",
    status: "completed",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    sources: [
      {
        id: "4",
        title: "SpanishDict Grammar Guide",
        url: "https://www.spanishdict.com/guide/spanish-grammar",
        content: "Comprehensive guide covering all essential Spanish grammar rules from beginner to advanced level...",
        relevanceScore: 98,
        type: "guide",
      },
      {
        id: "5",
        title: "Conjuguemos - Verb Conjugation",
        url: "https://conjuguemos.com",
        content: "Interactive platform for mastering Spanish verb conjugations across all tenses and moods...",
        relevanceScore: 94,
        type: "platform",
      },
      {
        id: "6",
        title: "StudySpanish.com Grammar Tutorials",
        url: "https://www.studyspanish.com",
        content: "Step-by-step grammar tutorials with examples and practice exercises for Spanish learners...",
        relevanceScore: 91,
        type: "tutorial",
      },
    ],
    insights: [
      {
        id: "3",
        title: "Systematic Verb Conjugation",
        content: "Master verb conjugations systematically, starting with present tense",
        followUpQuestions: [
          "What are the most common irregular verbs in Spanish?",
          "How to practice conjugations effectively?",
        ],
        sources: ["4", "5"],
      },
      {
        id: "4",
        title: "Gender and Number Agreement",
        content: "Gender and number agreement is crucial for proper Spanish grammar",
        followUpQuestions: ["What are the rules for determining noun gender?", "How do adjectives agree with nouns?"],
        sources: ["4", "6"],
      },
    ],
    report:
      "Spanish grammar mastery requires understanding fundamental concepts like verb conjugation, gender agreement, and sentence structure. Focus on systematic learning of verb tenses and consistent practice with real-world examples...",
  },
  3: {
    id: "3",
    query: "French Pronunciation",
    title: "French Pronunciation",
    status: "completed",
    createdAt: new Date(Date.now() - 72 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 72 * 60 * 60 * 1000),
    sources: [
      {
        id: "7",
        title: "Forvo French Pronunciation Dictionary",
        url: "https://forvo.com/languages/fr/",
        content: "Native speaker pronunciations for thousands of French words and phrases...",
        relevanceScore: 96,
        type: "dictionary",
      },
      {
        id: "8",
        title: "FrenchPod101 Pronunciation Guide",
        url: "https://www.frenchpod101.com/pronunciation/",
        content: "Comprehensive pronunciation lessons covering French phonetics and accent training...",
        relevanceScore: 93,
        type: "guide",
      },
      {
        id: "9",
        title: "IPA French Phonetic Guide",
        url: "https://en.wikipedia.org/wiki/French_phonology",
        content: "International Phonetic Alphabet guide for French sounds and pronunciation rules...",
        relevanceScore: 89,
        type: "reference",
      },
    ],
    insights: [
      {
        id: "5",
        title: "Nasal Vowels in French",
        content: "French nasal vowels are key to authentic pronunciation",
        followUpQuestions: [
          "How to practice nasal vowel sounds effectively?",
          "What are common pronunciation mistakes for English speakers?",
        ],
        sources: ["7", "8"],
      },
      {
        id: "6",
        title: "Silent Letters and Liaison",
        content: "Silent letters and liaison rules significantly affect spoken French",
        followUpQuestions: [
          "When should liaison be used in French?",
          "How to identify silent letters in French words?",
        ],
        sources: ["8", "9"],
      },
    ],
    report:
      "French pronunciation requires mastering unique sounds like nasal vowels, understanding liaison rules, and practicing with native speaker models. Focus on phonetic training and consistent listening practice...",
  },
}

const researchHistory: ResearchSession[] = Object.values(mockResearchData)

export default function DeepResearch() {
  const { isOpen: sidebarOpen, toggle: toggleSidebar } = useSidebar(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("overview")
  const [isSearching, setIsSearching] = useState(false)
  const [selectedResearchId, setSelectedResearchId] = useState(1)

  const currentResearch = mockResearchData[selectedResearchId] || mockResearchData[1]

  const handleSearch = async (query: string) => {
    setIsSearching(true)
    setSearchQuery(query)

    setTimeout(() => {
      console.log("Searching for:", query)
      setIsSearching(false)
    }, 2000)
  }

  const handleResearchSelect = (researchId: number) => {
    setSelectedResearchId(researchId)
    setActiveTab("overview")
  }

  return (
    <div className="h-[calc(100vh-4rem)] flex bg-gray-50">
      <ResearchSidebar
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        researchHistory={researchHistory}
        selectedResearchId={selectedResearchId}
        onResearchSelect={handleResearchSelect}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <ResearchHeader
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          onSearch={handleSearch}
          isSearching={isSearching}
          onSidebarToggle={toggleSidebar}
        />

        <div className="flex-1 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <div className="border-b border-gray-200 px-4">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="overview" className="text-xs">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="sources" className="text-xs">
                  Sources
                </TabsTrigger>
                <TabsTrigger value="insights" className="text-xs">
                  Insights
                </TabsTrigger>
                <TabsTrigger value="report" className="text-xs">
                  Report
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-hidden">
              <TabsContent value="overview" className="h-full m-0 p-0">
                <ScrollArea className="h-full">
                  <ResearchOverview research={currentResearch} />
                </ScrollArea>
              </TabsContent>

              <TabsContent value="sources" className="h-full m-0 p-0">
                <ScrollArea className="h-full">
                  <ResearchSources sources={currentResearch.sources} />
                </ScrollArea>
              </TabsContent>

              <TabsContent value="insights" className="h-full m-0 p-0">
                <ScrollArea className="h-full">
                  <ResearchInsights insights={currentResearch.insights} />
                </ScrollArea>
              </TabsContent>

              <TabsContent value="report" className="h-full m-0 p-0">
                <ScrollArea className="h-full">
                  <ResearchReport report={currentResearch.report} />
                </ScrollArea>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

