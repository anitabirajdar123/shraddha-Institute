import React, { useState, useEffect, useCallback } from 'react';
import Masonry from 'react-masonry-css';
import { FaTrophy, FaAward, FaUsers, FaCalendarAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import './GalleryPage.css';

// Import images
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
  const galleryData = [
    {
      id: 'national-events',
      title: "National Level Events",
      icon: <FaTrophy className="section-icon" />,
      description: "Our students shining at national championships",
      images: [
        { src: gallery1, caption: "National Abacus Championship 2023", year: 2023, highlight: "1st Place Team" },
        { src: gallery2, caption: "All India Vedic Math Olympiad", year: 2022, highlight: "3 Gold Medals" },
        { src: gallery3, caption: "National Mental Math Competition", year: 2021, highlight: "Champion Trophy" }
      ]
    },
    {
      id: 'award-ceremonies',
      title: "Award Ceremonies",
      icon: <FaAward className="section-icon" />,
      description: "Celebrating excellence and achievement",
      images: [
        { src: gallery4, caption: "Annual Excellence Awards 2023", year: 2023, highlight: "50+ Awards Given" },
        { src: gallery5, caption: "Top Performers Gala", year: 2022, highlight: "Scholarships Awarded" },
        { src: gallery6, caption: "Year-End Recognition", year: 2021, highlight: "Special Achievers" }
      ]
    },
    {
      id: 'training-events',
      title: "Training & Workshops",
      icon: <FaUsers className="section-icon" />,
      description: "Building skills beyond the classroom",
      images: [
        { src: gallery7, caption: "National Teachers Workshop", year: 2023, highlight: "120 Participants" },
        { src: gallery8, caption: "Student Summer Camp", year: 2022, highlight: "Interactive Sessions" },
        { src: gallery9, caption: "Math Olympiad Prep", year: 2021, highlight: "Guest Champions" }
      ]
    }
  ];

  const [activeSection, setActiveSection] = useState(galleryData[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);

  const openLightbox = (sectionId, imgIndex) => {
    const section = galleryData.find(s => s.id === sectionId);
    setCurrentImage({ ...section.images[imgIndex], sectionTitle: section.title });
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Fixed: Wrap navigateImage in useCallback with proper dependencies
  const navigateImage = useCallback((direction) => {
    if (!currentImage) return;

    const currentSectionIndex = galleryData.findIndex(s => s.id === activeSection);
    const currentSection = galleryData[currentSectionIndex];
    const currentImgIndex = currentSection.images.findIndex(img => img.src === currentImage.src);

    if (direction === 'next') {
      if (currentImgIndex < currentSection.images.length - 1) {
        setCurrentImage({ ...currentSection.images[currentImgIndex + 1], sectionTitle: currentSection.title });
      } else {
        const nextSectionIndex = (currentSectionIndex + 1) % galleryData.length;
        const nextSection = galleryData[nextSectionIndex];
        setActiveSection(nextSection.id);
        setCurrentImage({ ...nextSection.images[0], sectionTitle: nextSection.title });
      }
    } else {
      if (currentImgIndex > 0) {
        setCurrentImage({ ...currentSection.images[currentImgIndex - 1], sectionTitle: currentSection.title });
      } else {
        const prevSectionIndex = (currentSectionIndex - 1 + galleryData.length) % galleryData.length;
        const prevSection = galleryData[prevSectionIndex];
        setActiveSection(prevSection.id);
        setCurrentImage({ ...prevSection.images[prevSection.images.length - 1], sectionTitle: prevSection.title });
      }
    }
  }, [activeSection, currentImage, galleryData]);

  // Fixed: Added navigateImage to dependency array
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navigateImage('next');
        if (e.key === 'ArrowLeft') navigateImage('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, navigateImage]); // Added navigateImage to dependencies

  const breakpointColumnsObj = {
    default: 3,
    992: 2,
    768: 1
  };

  return (
    <div className="gallery-page">
      {/* Hero Banner */}
      <div className="gallery-hero" style={{ backgroundImage: `url(${gallery10})` }}>
        <div className="hero-content">
          <h1>Our Legacy of Excellence</h1>
          <p>Celebrating a decade of achievements in Abacus & Vedic Math education</p>
          
          <div className="achievement-stats">
            <div className="stat-card">
              <div className="stat-icon"><FaTrophy /></div>
              <div className="stat-number">25+</div>
              <div className="stat-label">National Awards</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><FaUsers /></div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><FaCalendarAlt /></div>
              <div className="stat-number">10</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Navigation */}
      <div className="gallery-nav">
        {galleryData.map(section => (
          <button
            key={section.id}
            className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.icon}
            {section.title}
          </button>
        ))}
      </div>

      {/* Gallery Sections */}
      <div className="gallery-container">
        {galleryData.map(section => (
          <div 
            key={section.id} 
            className={`gallery-section ${activeSection === section.id ? 'active' : ''}`}
          >
            <div className="section-header">
              <h2>{section.title}</h2>
              <p className="section-description">{section.description}</p>
            </div>

            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="masonry-grid"
              columnClassName="masonry-column"
            >
              {section.images.map((img, index) => (
                <div 
                  key={index}
                  className="gallery-item"
                  onClick={() => openLightbox(section.id, index)}
                >
                  <div className="image-container">
                    <img 
                      src={img.src} 
                      alt={img.caption}
                      className={`gallery-image ${loadedImages.includes(img.src) ? 'loaded' : ''}`}
                      onLoad={() => setLoadedImages(prev => [...prev, img.src])}
                    />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <h3>{img.caption}</h3>
                        <div className="image-meta">
                          <span className="year-badge">{img.year}</span>
                          <span className="highlight-badge">{img.highlight}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>
            <FaTimes />
          </button>
          
          <div className="lightbox-content">
            <button className="nav-btn prev" onClick={() => navigateImage('prev')}>
              <FaChevronLeft />
            </button>
            
            <div className="lightbox-image-container">
              <img 
                src={currentImage.src} 
                alt={currentImage.caption}
                className="lightbox-image"
              />
              <div className="lightbox-caption">
                <h3>{currentImage.caption}</h3>
                <div className="caption-meta">
                  <span className="section-tag">{currentImage.sectionTitle}</span>
                  <span className="year-tag">{currentImage.year}</span>
                </div>
                <p className="highlight-text">{currentImage.highlight}</p>
              </div>
            </div>
            
            <button className="nav-btn next" onClick={() => navigateImage('next')}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;