import Link from "next/link";
import { getAllPhotos } from "./lib/fetchPhotos";
import Image from "next/image";
import PhotoCard from "./components/PhotoCard";
const GalleryPage = async () => {
  const photos = await getAllPhotos();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo,i) => {
  
          return (
            <li key={i} className="border p-4 rounded-lg">
              <PhotoCard photo={photo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GalleryPage;
/*
{photos.map((photo) => 
<li key={photo.id} className="border rounded p-2">
  <PhotoCard photo={photo} />
 
</li>


}
*/