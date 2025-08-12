import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import './GalleryPage.css';

import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.JPG';
import gallery7 from '../assets/gallery7.jpg';
import gallery8 from '../assets/gallery8.jpg';
import gallery9 from '../assets/gallery9.jpg';
import gallery10 from '../assets/gallery10.JPG';


const GalleryPage = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,gallery7, gallery8, gallery9];
  const captions = [
    "Inspiring Math Moments",
    "Celebrating Achievements",
    "Workshops and Events",
    "Interactive Sessions",
    "Student Spotlights",
    "Behind the Scenes",
     "Interactive Sessions",
    "Student Spotlights",
    "Behind the Scenes"
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const navigateImage = (direction) => {
    setCurrentImage((prev) =>
      direction === 'next'
        ? (prev + 1) % images.length
        : (prev - 1 + images.length) % images.length
    );
  };

  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    480: 1
  };

  return (
    <section className="gallery-page">
      <div
  className="gallery-hero"
  style={{ backgroundImage: `url(${gallery10})` }}
>
  <h1>Shraddha Institute Gallery</h1>
  <p>Celebrating Excellence in Abacus & Vedic Math Education</p>
</div>


      <div className="gallery-content">
        <h2>Gallery Highlights</h2>
        <p className="gallery-description">
          A collection of special moments captured from various events.
        </p>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="image-grid"
          columnClassName="image-grid-column"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img
                src={img}
                alt={captions[index]}
                onLoad={(e) => e.target.classList.add('loaded')}
              />
              <div className="image-overlay">
                <p>{captions[index]}</p>
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      {lightboxOpen && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>×</button>
          <button className="nav-btn prev" onClick={() => navigateImage('prev')}>‹</button>

          <div className="lightbox-content">
            <img src={images[currentImage]} alt={captions[currentImage]} />
            <div className="lightbox-caption">
              <h3>{captions[currentImage]}</h3>
              <p>Gallery Highlights</p>
            </div>
          </div>

          <button className="nav-btn next" onClick={() => navigateImage('next')}>›</button>
        </div>
      )}
    </section>
  );
};

export default GalleryPage;
