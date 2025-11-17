import { NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "survey-responses.json");

    let responses = [];

    try {
      const existingData = await readFile(filePath, "utf-8");
      responses = JSON.parse(existingData);
    } catch (error) {
      // File doesn't exist yet, will create it
      try {
        await writeFile(dataDir, "", { flag: "wx" });
      } catch {
        // Directory might already exist
      }
    }

    // Add new response with ID
    const newResponse = {
      id: Date.now().toString(),
      ...data,
    };

    responses.push(newResponse);

    // Write back to file
    await writeFile(filePath, JSON.stringify(responses, null, 2));

    return NextResponse.json({ success: true, id: newResponse.id });
  } catch (error) {
    console.error("Error saving survey response:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save response" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "survey-responses.json");

    try {
      const data = await readFile(filePath, "utf-8");
      const responses = JSON.parse(data);
      return NextResponse.json({ success: true, responses });
    } catch (error) {
      return NextResponse.json({ success: true, responses: [] });
    }
  } catch (error) {
    console.error("Error reading survey responses:", error);
    return NextResponse.json(
      { success: false, error: "Failed to read responses" },
      { status: 500 }
    );
  }
}
