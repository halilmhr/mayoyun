import { GoogleGenAI, Type } from "@google/genai";
import type { Question, Grade } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const questionSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      question: {
        type: Type.STRING,
        description: "Sorunun metni.",
      },
      options: {
        type: Type.ARRAY,
        description: "Soru için 4 adet seçenek.",
        items: {
          type: Type.STRING,
        },
      },
      correctAnswer: {
        type: Type.STRING,
        description: "Seçenekler arasından doğru olan cevap.",
      },
    },
    required: ["question", "options", "correctAnswer"],
  },
};

export const generateQuizQuestions = async (grade: Grade, topic: string): Promise<Question[]> => {
  try {
    const prompt = `${grade}. sınıf matematik müfredatından '${topic}' konusuyla ilgili, 4 seçenekli 5 adet çoktan seçmeli bilgi yarışması sorusu oluştur. Sorular sınıf seviyesine uygun olmalı. Cevaplar, verdiğin seçeneklerden biri olmalı. Matematiksel ifadeler, denklemler veya kesirler gerektiğinde, bunları MathJax uyumlu LaTeX formatında yaz. Örneğin: \\(3 \\times 4 = 12\\) veya \\(\\frac{1}{2}\\).`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: questionSchema,
        temperature: 0.8, // Add a bit of creativity to questions
      },
    });

    const jsonText = response.text.trim();
    const questions = JSON.parse(jsonText);
    
    // Validate the structure of the response
    if (!Array.isArray(questions) || questions.length === 0) {
        throw new Error("API did not return a valid array of questions.");
    }

    return questions.map((q: any) => ({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
    }));

  } catch (error) {
    console.error("Error generating quiz questions:", error);
    // You could return a set of fallback questions here if needed
    throw new Error("Soruları oluştururken bir hata oluştu. Lütfen tekrar deneyin.");
  }
};