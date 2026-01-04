import Image from "next/image";
import { Photo } from "../types/photo";

const PhotoCard = ({ photo }: { photo: Photo }) => {

  return (


    <div className="flex flex-col items-center">
      <div className="relative w-full h-48">
        {/* <Image
          src={photo.imageUrl}
          alt={photo.title}
          width={400}
          height={300}
          className="w-full h-auto"
        /> */}
      </div>
      <h2 className="mt-2 font-semibold">{photo.title}</h2>

    </div>
  );
};

export default PhotoCard;
