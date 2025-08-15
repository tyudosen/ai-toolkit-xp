export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "..."
}

export function generateTitle(text: string, maxLength = 50): string {
  const cleaned = text.trim().replace(/\n+/g, " ")
  return truncateText(cleaned, maxLength)
}

export function wordCount(text: string): number {
  return text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length
}

export function readingTime(text: string, wordsPerMinute = 200): number {
  const words = wordCount(text)
  return Math.ceil(words / wordsPerMinute)
}

export function highlightText(text: string, query: string): string {
  if (!query.trim()) return text

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  return text.replace(regex, "<mark>$1</mark>")
}

