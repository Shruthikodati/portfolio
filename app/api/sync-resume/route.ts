import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";

export async function POST(req: NextRequest) {
  try {
    const resumePath = path.join(process.cwd(), "public", "resume.pdf");

    // 1. Check if resume.pdf exists and is not empty
    if (!fs.existsSync(resumePath)) {
      return NextResponse.json(
        { 
          success: false, 
          error: "No resume.pdf found in the public folder. Please make sure Shruthi_Kodati_Resume.pdf is renamed to resume.pdf and uploaded to /public/ folder."
        },
        { status: 400 }
      );
    }

    const { size } = fs.statSync(resumePath);
    if (size === 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: "The resume.pdf in /public/ is empty. Please upload your actual PDF resume to the public folder first."
        },
        { status: 400 }
      );
    }

    // 2. Read the PDF as base64
    const fileBuffer = fs.readFileSync(resumePath);
    const base64Data = fileBuffer.toString("base64");

    // Load the existing resume.json data so we only modify skills
    const dataPath = path.join(process.cwd(), "data", "resume.json");
    if (!fs.existsSync(dataPath)) {
      return NextResponse.json(
        { success: false, error: "The resume.json file is missing." },
        { status: 500 }
      );
    }
    const originalJson = JSON.parse(fs.readFileSync(dataPath, "utf8"));

    // 3. Initiate Gemini API with GEMINI_API_KEY
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { 
          success: false, 
          error: "GEMINI_API_KEY is not defined in your environment secrets. Please navigate to Settings > Secrets to provide it."
        },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    // 4. Request Gemini to parse only the technical skills
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        {
          inlineData: {
            data: base64Data,
            mimeType: "application/pdf",
          },
        },
        "Accurately extract only the technical skills and core competencies mentioned in this professional resume. Group them precisely into relevant technical categories (e.g. Programming Languages, Databases & Data Engineering, Frontend & Backend, Machine Learning & AI, Cloud, DevOps & Tools, Security, Visualization & BI, Core Concepts) as structured categories.",
      ],
      config: {
        systemInstruction: "You are an expert resume parser specializing in extracting structured technical skills into a high-fidelity categorized list. Map only the technical skills exactly as they are written in the resume.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["skills"],
          properties: {
            skills: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                required: ["category", "items"],
                properties: {
                  category: { type: Type.STRING },
                  items: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  }
                }
              }
            }
          }
        }
      }
    });

    const parsedText = response.text;
    if (!parsedText) {
      return NextResponse.json(
        { success: false, error: "Failed to generate structured data from Gemini." },
        { status: 500 }
      );
    }

    const parsedJson = JSON.parse(parsedText);

    // Ensure the skills field exists and is valid
    if (!parsedJson.skills || !Array.isArray(parsedJson.skills)) {
      return NextResponse.json(
        { success: false, error: "Extracted data does not contain a valid skills array." },
        { status: 500 }
      );
    }

    // 5. Merge only the technical skills back to the original resume.json
    originalJson.skills = parsedJson.skills;

    fs.writeFileSync(dataPath, JSON.stringify(originalJson, null, 2), "utf8");

    // Return the response indicating success
    return NextResponse.json({
      success: true,
      message: "Successfully synchronized your technical skills and portfolio with the PDF resume!",
      skillsExtracted: parsedJson.skills
    });

  } catch (error: any) {
    console.error("Error syncing resume:", error);
    return NextResponse.json(
      { success: false, error: error.message || "An unexpected error occurred during Synchronization." },
      { status: 500 }
    );
  }
}
