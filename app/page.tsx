import { getAllPhotos } from "./lib/fetchPhotos";
import PhotoCard from "./components/PhotoCard";

const GalleryPage = async () => {
  const photos = await getAllPhotos();

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>

      {photos.length === 0 ? (
        <p className="text-center text-gray-500">No photos uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <PhotoCard key={photo.url} photo={photo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
