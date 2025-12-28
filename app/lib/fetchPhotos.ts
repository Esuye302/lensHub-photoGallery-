
import { Photo } from "../types/photo";

export async function getMockPhotos(): Promise<Photo[]> {
    return [
    {
      id: "1",
      title: "Sunset",
      imageUrl: "https://example.com/photos/sunset.jpg",
      createdAt: "2023-01-01T12:00:00Z",
    },
    {
      id: "2",
      title: "Mountain",
      imageUrl: "https://example.com/photos/mountain.jpg",
      createdAt: "2023-01-02T12:00:00Z",
    },
  ];
}
