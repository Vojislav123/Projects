import { useState } from "react";

interface ImagePopupProps {
  image: {
    data: {
      nasa_id: string;
      title: string;
    }[];
    links: {
      href: string;
    }[];
  };
}

const ImagePopup: React.FC<ImagePopupProps> = ({ image }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <img
        src={image.links[0].href}
        alt={image.data[0].title}
        onClick={togglePopup}
      />
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50" onClick={togglePopup}>
          <div className="fixed inset-0 bg-gray-900 opacity-75"></div>
          <div className="relative z-60 mx-auto max-h-screen p-4">
            <button
              className="absolute top-0 right-0 m-4 text-white text-2xl font-bold"
              onClick={togglePopup}
            >
              X
            </button>
            <img
              src={image.links[0].href}
              alt={image.data[0].title}
              className="max-h-full"
            />
            <p className="text-white text-center">{image.data[0].title}</p>
          </div>
        </div>
      )}
    </div>
  );
};


export default ImagePopup