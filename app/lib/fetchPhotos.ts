import fs from "fs";
import path from "path";
import { Photo } from "../types/photo";

export function getAllPhotos(): Photo[] {
  const uploadsDir = path.join(process.cwd(), "public/uploads");
  const metadataPath = path.join(uploadsDir, "metadata.json");

  if (!fs.existsSync(metadataPath)) {
    return [];
  }

  return JSON.parse(fs.readFileSync(metadataPath, "utf-8")) as Photo[];
}
