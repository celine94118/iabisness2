// lib/content-generator.ts
// This file would contain the logic for AI-powered content generation.
// It would typically interact with an AI model API (e.g., OpenAI, Groq, xAI).

import { generateText } from "ai"
import { openai } from "@ai-sdk/openai" // Example using OpenAI from AI SDK

interface GenerateContentOptions {
  prompt: string
  modelName?: string // e.g., "gpt-4o", "grok-3"
  systemPrompt?: string
}

export async function generateAIContent({
  prompt,
  modelName = "gpt-4o", // Default to gpt-4o
  systemPrompt = "You are a helpful assistant specialized in marketing and content creation.",
}: GenerateContentOptions): Promise<string> {
  try {
    // Select the model based on modelName
    let model
    if (modelName.startsWith("gpt")) {
      model = openai(modelName)
    } else {
      // Fallback or handle other models if integrated (e.g., xai, groq)
      // For now, we'll stick to openai for simplicity as per AI SDK examples
      model = openai("gpt-4o")
      console.warn(`Model "${modelName}" not explicitly supported, defaulting to gpt-4o.`)
    }

    const { text } = await generateText({
      model: model,
      prompt: prompt,
      system: systemPrompt,
    })

    return text
  } catch (error) {
    console.error("Error generating AI content:", error)
    throw new Error(`Failed to generate content: ${error instanceof Error ? error.message : String(error)}`)
  }
}

// Example usage (for demonstration, not directly called in components)
async function exampleContentGeneration() {
  try {
    const blogPostIdea = await generateAIContent({
      prompt: "Generate a blog post idea about the benefits of automated affiliate marketing.",
      systemPrompt: "You are a creative marketing content generator.",
    })
    console.log("Blog Post Idea:", blogPostIdea)

    const productDescription = await generateAIContent({
      prompt: "Write a compelling product description for a 'Digital Nomad's Guide to Passive Income'.",
      systemPrompt: "You are a persuasive copywriter.",
    })
    console.log("Product Description:", productDescription)
  } catch (error) {
    console.error("Example content generation failed:", error)
  }
}

// You might call exampleContentGeneration() in a script or a server action for testing.
// exampleContentGeneration();
