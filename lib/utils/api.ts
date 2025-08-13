export interface ApiResponse<T> {
  data?: T
  error?: string
  success: boolean
}

export async function apiRequest<T>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return { data, success: true }
  } catch (error) {
    console.error("API request failed:", error)
    return {
      error: error instanceof Error ? error.message : "Unknown error occurred",
      success: false,
    }
  }
}

export function buildQueryString(params: Record<string, string | number | boolean>): string {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value))
    }
  })

  return searchParams.toString()
}

export function getApiUrl(endpoint: string, params?: Record<string, string | number | boolean>): string {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api"
  const url = `${baseUrl}${endpoint}`

  if (params) {
    const queryString = buildQueryString(params)
    return queryString ? `${url}?${queryString}` : url
  }

  return url
}

