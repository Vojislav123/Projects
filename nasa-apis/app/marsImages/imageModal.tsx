import Image from 'next/image';
import React from 'react';

interface RoverPhoto {
  id: number;
  img_src: string;
  earth_date: string;
  camera: {
    full_name: string;
  };
  rover: {
    name: string;
  };
}

interface ImagePopupProps {
  photo: RoverPhoto;
  onClose: () => void;
}

const ImageModal: React.FC<ImagePopupProps> = ({ photo, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-black bg-opacity-75 absolute inset-0"></div>
      <div className="relative z-10 p-6 rounded-lg max-w-3xl">
        <button
          className="absolute top-0 right-0 m-4 text-white text-2xl font-bold"
          onClick={onClose}
        >
          X
        </button>
        <Image src={photo.img_src} width={1024} height={800} alt={`Mars Rover - ${photo.rover.name}`} className="w-60%" />
        <div className="mt-4 text-center">
          <h3 className="text-lg font-bold mb-2">{photo.rover.name}</h3>
          <p className="text-gray-400 m-2">{photo.camera.full_name}</p>
          <p className="text-gray-400">Earth Date: {photo.earth_date}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
