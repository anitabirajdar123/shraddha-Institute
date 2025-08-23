import React from "react";
import "./Gallery.css";

import gallery1 from "../assets/galleryfolder/gallery1.jpg";
import gallery2 from "../assets/galleryfolder/gallery2.jpg";
import gallery3 from "../assets/galleryfolder/gallery3.jpg";
import gallery4 from "../assets/galleryfolder/gallery4.jpg";
import gallery5 from "../assets/galleryfolder/gallery5.jpg";

const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="marquee-container">
        <div className="marquee">
          {[...images, ...images].map((image, index) => (
            <div className="marquee-item" key={index}>
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
