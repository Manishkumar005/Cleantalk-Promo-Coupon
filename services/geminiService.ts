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