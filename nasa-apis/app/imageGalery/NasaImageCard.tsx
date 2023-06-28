import React, { useState, useEffect } from 'react';


import nasaLogo from '@/service/nasaLogo.png';
import ImagePopup from '@/service/imagePopup';
import Image from 'next/image';

interface NasaImage {
  data: {
    nasa_id: string;
    title: string;
  }[];
  links: {
    href: string;
  }[];
}

const NasaImageCard: React.FC<{ image: NasaImage }> = ({ image }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    simulateLoading(image).then(() => {
      setLoading(false);
    });
  }, [image]);

  const simulateLoading = (image: NasaImage): Promise<NasaImage> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(image);
      }, 2000);
    });
  };

  if (loading) {
    return (
      <div className="justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Image width={100} height={100} src={nasaLogo.src} alt="NASA Placeholder" />
        <p>Loading...</p>
      </div>
    );
  }

  return <ImagePopup image={image} />;
};

export default NasaImageCard;
