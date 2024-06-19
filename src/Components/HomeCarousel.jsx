import { useState } from 'react';

const images = [
  'https://via.placeholder.com/800x400/1abc9c/ffffff',
  'https://via.placeholder.com/800x400/3498db/ffffff',
  'https://via.placeholder.com/800x400/9b59b6/ffffff',
  'https://via.placeholder.com/800x400/e74c3c/ffffff',
];

const HomeCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={images[currentImage]}
          alt={`Slide ${currentImage}`}
        />
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          className="p-2 bg-gray-800 bg-opacity-50 text-white"
          onClick={prevImage}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          className="p-2 bg-gray-800 bg-opacity-50 text-white"
          onClick={nextImage}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
