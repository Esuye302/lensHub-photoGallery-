import Link from "next/link";
import { getMockPhotos } from "./lib/fetchPhotos";
import Image from "next/image";
const GalleryPage = async () => {
  const photos = await getMockPhotos();
 
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <li key={photo.id} className="border rounded p-2">
            <div className="relative w-full h-48">
              <Image
                src={photo.imageUrl}
                alt={photo.title}
              
                width={100}
                height={100}
                className="object-cover rounded"
              />
            </div>
            <h2 className="mt-2 font-semibold">{photo.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GalleryPage;
