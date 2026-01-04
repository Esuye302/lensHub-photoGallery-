import Image from "next/image";
import { Photo } from "../types/photo";

const PhotoCard = ({ photo }: { photo: Photo }) => {
console.log(photo)
  return (


    <div className="flex flex-col items-center">
      <div className="relative w-full h-48">
        <Image
          src={photo.url}
          alt={photo.title}
          fill

          className="object-contain rounded"
        />
      </div>
      <h2 className="mt-2 font-semibold">{photo.title}</h2>

    </div>
  );
};

export default PhotoCard;
