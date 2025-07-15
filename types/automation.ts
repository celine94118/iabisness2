import type React from "react"

export interface AutomationTask {
  id: string
  name: string
  description: string
  status: "active" | "paused" | "completed" | "error" | "inactive" | "pending"
  lastRun: string // Date string
  nextRun?: string // Date string
  type: "content_generation" | "social_post" | "email_campaign" | "link_tracking"
  config: Record<string, any>
}

export interface AutomationMetric {
  label: string
  value: string | number
  unit?: string
  icon: React.ElementType
  color: string
}

export interface AutomationSetting {
  id: string
  name: string
  description: string
  enabled: boolean
  config: Record<string, any>
}

export interface ContentGenerationConfig {
  topic: string
  keywords: string[]
  length: "short" | "medium" | "long"
  tone: "formal" | "informal" | "persuasive"
}

export interface EmailAutomationConfig {
  senderEmail: string
  templateId: string
  triggerEvent: "purchase" | "signup" | "custom"
}

export interface SocialMediaConfig {
  platform: "facebook" | "twitter" | "linkedin"
  autoPost: boolean
  schedule: string // e.g., "daily", "weekly"
}

export interface AutomationLog {
  timestamp: string // Date string
  message: string
  level: "info" | "warn" | "error"
  taskId?: string
}
