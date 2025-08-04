// File: src/components/HomePage.js
import React from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/HomePage.css"; // ✅ Import the CSS here
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import icon1 from "../assets/sun.png";
import icon2 from "../assets/star.png";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`custom-arrow next-arrow`} onClick={onClick}>
      ➡
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`custom-arrow prev-arrow`} onClick={onClick}>
      ⬅
    </div>
  );
}

const sliderSettings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const slides = [
  {
    img: banner1,
    title: "Discover The Fun Of Math",
    subtitle: "For Kids 3-6 Years",
    desc: "Looking for Abacus, Vedicmaths & Maths Olympiad, Science Technology classes for Kids? Join Shiksha Abacus for Interactive Online classes which helps kids to learn faster.",
    videoUrl: "https://www.youtube.com/watch?v=jKPznf8tpzg",
  },
  {
    img: banner1,
    title: "We provide the best Abacus classes",
    subtitle: "",
    desc: "We provide the best Abacus classes in all over INDIA. Our teachers are highly experienced and talented in imparting Abacus knowledge to students.",
    videoUrl: "https://www.youtube.com/watch?v=jKPznf8tpzg",
  },
  {
    img: banner3,
    title: "Prep for maths Olympiads",
    subtitle: "",
    desc: "Abacus Online & Offline Classes for Kids. Abacus Online Teacher Training. Building Generations In A Smarter Way, Multiple Variety Of Courses Available.",
    videoUrl: "https://www.youtube.com/watch?v=jKPznf8tpzg",
  },
];

function AnimatedStats() {
  const [ref, inView] = useInView({ triggerOnce: true });

  const stats = [
    { end: 8000, suffix: "+", label: "Success Stories" },
    { end: 10, suffix: "+", label: "Expert Instructor" },
    { end: 108, suffix: "+", label: "Study Students" },
    { end: 100, suffix: "+", label: "Trendy Subjects" },
  ];

  return (
    <div ref={ref} className="stats-container">
      {stats.map((item, idx) => (
        <div key={idx} className="stat-item">
          <div className="stat-number">
            {inView && <CountUp end={item.end} suffix={item.suffix} duration={2.5} />}
          </div>
          <div className="stat-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="homepage-container">
      <style>{`@keyframes rotateInfinite { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>

      <div className="slider-section">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide-item">
              <img src={icon1} alt="Rotating Icon Top Left" className="rotating-icon top-left" />
              <img src={icon2} alt="Rotating Icon Bottom Left" className="rotating-icon bottom-left" />
              <img src={slide.img} alt={`Slide ${index + 1}`} className="slide-image" />
              <div className="slide-content">
                <h2>
                  {slide.title}{" "}
                  <span className="slide-subtitle">{slide.subtitle}</span>
                </h2>
                <p>{slide.desc}</p>
                <div className="slide-buttons">
                  <a href="/contact" className="join-button">Join Us</a>
                  <a href={slide.videoUrl} target="_blank" rel="noreferrer" className="video-button">
                    ▶ Watch Video
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <AnimatedStats />
    </div>
  );
}
