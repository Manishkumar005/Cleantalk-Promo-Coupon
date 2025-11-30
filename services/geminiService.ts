import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

export const analyzeSpamImpact = async (websiteType: string, trafficLevel: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning mock data for demo purposes if environment is restricted.");
    return "API Key missing. Please ensure process.env.API_KEY is set to use the AI analysis feature.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `
      Act as a senior SEO and Security expert. 
      Analyze the negative impact of spam on a website described as: "${websiteType}" with "${trafficLevel}" traffic.
      
      Focus on:
      1. SEO degradation (keywords, bounce rate).
      2. User Trust (E-E-A-T impact).
      3. Server resource consumption.
      
      Keep the tone human, professional, and urgent. No jargon. 
      Limit response to 3 short paragraphs.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate analysis. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "We are experiencing high traffic. Please try the analysis tool again in a moment.";
  }
};

export const generatePromoImage = async (): Promise<string | null> => {
  if (!apiKey) return null;

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A high-quality 3D render of a futuristic cybersecurity shield glowing green on a dark blue technological background. The image should be clean, professional, and suitable for a software discount promotion. It should visually represent "Protection" and "Value". Minimalist style.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        }
      },
    });

    for (const candidate of response.candidates || []) {
      for (const part of candidate.content.parts) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Gen Error:", error);
    return null;
  }
};