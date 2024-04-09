import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react'

interface ImageWithOverlayProps {
    src: StaticImageData;
    alt: string;
    category: string;
  }
  
  const EventCard: FC<ImageWithOverlayProps> = ({ src, alt, category }) => (
    <a className="relative flex flex-col justify-end overflow-hidden px-8 pb-8 pt-40 w-full mb-10 mx-auto">
      <Image
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        width={300}
        height={200}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <h3 className="z-10 mt-3 text-3xl font-bold text-white">{category}</h3>
    </a>
  );

export default EventCard