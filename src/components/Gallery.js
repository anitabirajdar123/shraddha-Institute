import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <h2>📸 Our Gallery</h2>
        <p>Explore glimpses of training, workshops, and joyful learning moments at Shraddha Institute.</p>
      </div>

      <div className="gallery-grid">
        <img src="/assets/gallery1.jpg" alt="Abacus Session" />
        <img src="/assets/gallery2.jpg" alt="Teacher Training" />
        <img src="/assets/gallery3.jpg" alt="Student Workshop" />
        {/* Add more images as needed */}
      </div>
    </section>
  );
};

export default Gallery;
