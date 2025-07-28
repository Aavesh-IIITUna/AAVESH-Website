import PropTypes from 'prop-types';
import { useState } from 'react';
import { GALLERY_ALBUMS } from '../constants/gallery';
const DecoratorCircleFirst = ({ className }) => (
  <svg width="70" height="12" viewBox="0 0 70 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="4" cy="6" r="3.5" fill="currentColor"/>
    <path d="M8 6H70" stroke="currentColor" strokeWidth="1"/>
  </svg>
);
DecoratorCircleFirst.propTypes = {
  className: PropTypes.string,
};
const DecoratorLinesFirst = ({ className }) => (
  <svg width="70" height="12" viewBox="0 0 70 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 6H62" stroke="currentColor" strokeWidth="1"/>
    <circle cx="66" cy="6" r="3.5" fill="currentColor"/>
  </svg>
);
DecoratorLinesFirst.propTypes = {
  className: PropTypes.string,
};
// galleryItems now imported from constants
const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setSelectedImageIndex(0);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setIsModalOpen(false);
  };

  const openImageModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    if (selectedAlbum) {
      setSelectedImageIndex((prev) => 
        prev === selectedAlbum.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedAlbum) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedAlbum.images.length - 1 : prev - 1
      );
    }
  };

  const handleKeyPress = (e) => {
    if (isModalOpen) {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeImageModal();
    }
  };

  // Add event listener for keyboard navigation
  useState(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen]);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Iceland&display=swap');
          .font-iceland {
            font-family: 'Iceland', cursive;
          }
        `}
      </style>
      <div className="flex flex-col items-center min-h-screen bg-black text-white p-4 md:p-8 font-iceland">
        <header className="w-full max-w-6xl mb-20">
          <div className="flex items-center justify-between">
            <div className="inline-flex flex-col">
              <div className="self-start">
                <DecoratorCircleFirst className="text-gray-400" />
              </div>
              <div className="self-center">
                <h1 className="text-4xl font-light tracking-[0.3em] uppercase text-gray-200 py-2">
                  {selectedAlbum ? selectedAlbum.title : 'Gallery'}
                </h1>
              </div>
              <div className="self-end">
                <DecoratorLinesFirst className="text-gray-400" />
              </div>
            </div>
            {selectedAlbum && (
              <button
                onClick={closeAlbum}
                className="text-gray-400 hover:text-white transition-colors text-2xl font-light"
              >
                ← Back to Albums
              </button>
            )}
          </div>
        </header>

        <main className="w-full max-w-6xl">
          {!selectedAlbum ? (
            // Album Grid View
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {GALLERY_ALBUMS.map(album => (
                <div 
                  key={album.id} 
                  className="group cursor-pointer"
                  onClick={() => openAlbum(album)}
                >
                  <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-6">
                    <img 
                      src={album.coverImage} 
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src='https://placehold.co/600x400/000000/FFFFFF?text=Album'; 
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block bg-teal-500 text-black px-4 py-2 rounded-full text-base font-medium">
                        {album.images.length} photos
                      </span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-medium text-gray-200 group-hover:text-teal-400 transition-colors">
                    {album.title}
                  </h3>
                  <p className="text-gray-400 text-lg mt-2">{album.description}</p>
                </div>
              ))}
            </div>
          ) : (
            // Album Image Grid View
            <div>
              <div className="mb-8">
                <p className="text-gray-400 text-lg">{selectedAlbum.description}</p>
                <p className="text-gray-500 text-sm mt-2">{selectedAlbum.images.length} photos</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {selectedAlbum.images.map((image, index) => (
                  <div 
                    key={image.id}
                    className="group cursor-pointer"
                    onClick={() => openImageModal(index)}
                  >
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.caption}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => { 
                          e.target.onerror = null; 
                          e.target.src='https://placehold.co/300x300/000000/FFFFFF?text=Image'; 
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* Image Modal */}
        {isModalOpen && selectedAlbum && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 text-2xl font-light"
              >
                ✕
              </button>
              
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <img 
                  src={selectedAlbum.images[selectedImageIndex].src}
                  alt={selectedAlbum.images[selectedImageIndex].caption}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                
                {selectedAlbum.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-3xl font-light bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 text-3xl font-light bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                    >
                      ›
                    </button>
                  </>
                )}
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                  <p className="text-white text-lg font-medium mb-2">
                    {selectedAlbum.images[selectedImageIndex].caption}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {selectedImageIndex + 1} of {selectedAlbum.images.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Gallery;
