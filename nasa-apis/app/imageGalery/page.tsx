'use client'

import React, { useState } from 'react';
import NasaImageGrid from './NasaImageGrid';

interface NasaImage {
  data: {
    nasa_id: string;
    title: string;
  }[];
  links: {
    href: string;
  }[];
}

const NasaImages: React.FC = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState<NasaImage[]>([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image`
      );
      const data = await response.json();
      setImages(data.collection.items);
    } catch (error) {
      console.error('Error searching images:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    handleSearch();
  };

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-10 mt-20 text-center">Nasa Image Gallery</h1>
      <p className="text-l mb-10">Try me?</p>
      <input
        type="text"
        value={query}
        className="px-4 py-2 border border-gray-300 mb-10 focus:outline-none focus:ring focus:border-blue-300 text-black rounded-xl"
        onChange={handleInputChange}
        placeholder="Search images..."
      />

      <NasaImageGrid images={images} />
    </div>
  );
};

export default NasaImages;

