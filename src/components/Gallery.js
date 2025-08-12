import React from 'react';
import './Gallery.css';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery1.jpg';
import gallery5 from '../assets/gallery2.jpg';
import gallery6 from '../assets/gallery3.jpg';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  const scrollingImages = [...images, ...images, ...images]; // Triple for smoother loop

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <h2>Our Gallery</h2>
        <p>Explore glimpses of training, workshops, and joyful learning moments at Shraddha Institute.</p>
      </div>

      <div className="gallery-track-container">
        <div className="gallery-track">
          {scrollingImages.map((imgSrc, idx) => (
            <div className="gallery-slide" key={idx}>
              <img 
                src={imgSrc} 
                alt={`Gallery ${idx % images.length + 1}`} 
                className="gallery-image"
              />
              <div className="image-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;