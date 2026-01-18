"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Photo } from "../types/photo";

const PhotoCard = ({ photo }: { photo: Photo }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="group bg-neutral-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl"
    >
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={photo.url}
          alt={photo.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-3">
        <h2 className="text-sm font-medium text-neutral-300 truncate">
          {photo.title}
        </h2>
      </div>
    </motion.div>
  );
};

export default PhotoCard;
