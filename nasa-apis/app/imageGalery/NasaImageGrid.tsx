

import React from 'react';
import NasaImageCard from './NasaImageCard';

interface NasaImage {
  data: {
    nasa_id: string;
    title: string;
  }[];
  links: {
    href: string;
  }[];
}

const NasaImageGrid: React.FC<{ images: NasaImage[] }> = ({ images }) => {
  return (
    <div className="p-30 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image) => (
        <NasaImageCard key={image.data[0].nasa_id} image={image} />
      ))}
    </div>
  );
};

export default NasaImageGrid;
