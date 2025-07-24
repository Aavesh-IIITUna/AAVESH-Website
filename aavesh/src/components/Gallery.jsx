import PropTypes from 'prop-types';
import { GALLERY_ITEMS } from '../constants/gallery';
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
        <header className="w-full max-w-5xl mb-20">
          <div className="inline-flex flex-col">
            <div className="self-start">
              <DecoratorCircleFirst className="text-gray-400" />
            </div>
            <div className="self-center">
              <h1 className="text-4xl font-light tracking-[0.3em] uppercase text-gray-200 py-2">
                Gallery
              </h1>
            </div>
            <div className="self-end">
              <DecoratorLinesFirst className="text-gray-400" />
            </div>
          </div>
        </header>
        <main className="w-full max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {GALLERY_ITEMS.map(item => (
              <div key={item.id} className="aspect-video rounded-md overflow-hidden cursor-pointer group">
                {item.type === 'image' ? (
                  <div className="relative w-full h-full">
                    <img 
                      src={item.src} 
                      alt={`Gallery item ${item.id}`} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/000000/FFFFFF?text=Image'; }}
                    />
                  </div>
                ) : (
                  <div 
                    className="relative w-full h-full bg-cover bg-center flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <h2 className="relative z-10 text-3xl text-gray-200 tracking-widest">
                      {item.title}
                    </h2>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};
export default Gallery;
