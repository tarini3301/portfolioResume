
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PortfolioData } from '../types';

const API_KEY = process.env.API_KEY;

let ai: GoogleGenAI | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  console.warn("API_KEY environment variable is not set. Gemini API functionality will be disabled. Ensure process.env.API_KEY is configured in your environment.");
}

const getPortfolioContext = (data: PortfolioData): string => {
  let context = `
Name: ${data.name}
Title: ${data.title}
Profile Summary: ${data.profileSummary}

Education:
${data.education.map(e => `- ${e.degree} ${e.specialization ? `(${e.specialization})` : ''} at ${e.institution} (${e.duration}, Grade: ${e.grade}).`).join('\n')}

Experience:
${data.experience.map(e => `- ${e.role} at ${e.company} (${e.duration}). Responsibilities: ${e.description.join(' ')}`).join('\n')}

Key Projects:
${data.projects.map(p => `- ${p.name}: ${p.description} Technologies: ${p.technologies.join(', ')}.`).join('\n')}

Technical Skills:
- Languages: ${data.technicalSkills.languages.join(', ')}
- Libraries/Frameworks: ${data.technicalSkills.librariesFrameworks.join(', ')}
- Tools/Platforms: ${data.technicalSkills.toolsPlatforms.join(', ')}
- Concepts: ${data.technicalSkills.concepts.join(', ')}
`;
  // Limit context to avoid overly long prompts. A more sophisticated truncation or summarization could be used.
  return context.substring(0, 7000); 
};


export const queryResumeWithGemini = async (question: string, portfolioData: PortfolioData): Promise<string> => {
  if (!ai) {
    return "Gemini API is not configured. Please ensure the API_KEY environment variable is set.";
  }
  if (!question.trim()) {
    return "Please ask a specific question about the resume.";
  }

  const model = 'gemini-2.5-flash-preview-04-17';
  const portfolioContext = getPortfolioContext(portfolioData);

  const prompt = `
    You are an AI assistant for Tarini Rudrashetty's interactive portfolio.
    Your knowledge is based SOLELY on the following resume information provided for Tarini Rudrashetty:
    --- START OF TARINI'S RESUME CONTEXT ---
    ${portfolioContext}
    --- END OF TARINI'S RESUME CONTEXT ---

    The user has asked the following question: "${question}"

    Please answer the user's question based *only* on the provided resume context.
    - Be concise and professional.
    - If the question cannot be answered from the provided resume context, politely state that the information is not available in the resume or that you can only answer questions based on the provided resume details.
    - Do not invent information or answer questions outside the scope of the resume.
    - Do not mention that you are an AI or language model. Respond as if you are a knowledgeable assistant with access to Tarini's resume.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: prompt,
      // No thinkingConfig, defaults to enabled for higher quality. For game AI/low latency, use:
      // config: { thinkingConfig: { thinkingBudget: 0 } } 
    });
    
    // As per guidelines, directly use response.text
    let textResponse = response.text;

    // Optional: Basic cleanup if needed, though model should ideally format well.
    // textResponse = textResponse.replace(/^```json\s*|```\s*$/g, ''); // Example for JSON, not needed for text.

    return textResponse || "I am unable to provide a response at this moment.";
  } catch (error) {
    console.error("Error querying Gemini API:", error);
    let errorMessage = "Sorry, I encountered an error trying to process your request. Please try again later.";
    if (error instanceof Error) {
        if (error.message.includes('API key not valid') || error.message.includes('API_KEY_INVALID')) {
             errorMessage = "Error: The Gemini API key is invalid or missing. Please check the application configuration.";
        } else if (error.message.includes('quota')) {
            errorMessage = "Error: The API quota has been exceeded. Please try again later.";
        }
    }
    return errorMessage;
  }
};

export const isGeminiAvailable = (): boolean => {
    return !!ai;
};
