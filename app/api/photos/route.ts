import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import fs from "fs";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  let title = formData.get("title") as string;

  if (!file) {
    return NextResponse.json({ error: "File is required" }, { status: 400 });
  }

  // If no title provided by user, use the filename (without extension)
  if (!title) {
    const fileName = file.name;
    title = fileName.replace(/\.[^/.]+$/, ""); // Regex to remove the extension
  }

  // Convert file to bytes
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Ensure upload folder exists
  const uploadsDir = path.join(process.cwd(), "public/uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Save the file
  const filePath = path.join(uploadsDir, file.name);
  await writeFile(filePath, buffer);

  // Save metadata
  const metadataPath = path.join(uploadsDir, "metadata.json");
  let metadata: { title: string; url: string }[] = [];
  if (fs.existsSync(metadataPath)) {
    metadata = JSON.parse(fs.readFileSync(metadataPath, "utf-8"));
  }
  metadata.push({ title, url: `/uploads/${file.name}` });
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

  return NextResponse.json({ title, url: `/uploads/${file.name}` });
}
