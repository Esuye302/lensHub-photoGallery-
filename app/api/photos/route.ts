import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json(); // parse incoming JSON
    console.log("Received data:", data.file);

    // Mock saving the photo
    // In real app: store file, save metadata to DB, etc.

    return NextResponse.json({ message: "Photo uploaded!", data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Upload failed" }, { status: 500 });
  }
}
