// File: src/components/HomePage.js
import React from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ ...arrowStyle, right: 10 }}>
      ➡
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ ...arrowStyle, left: 10 }}>
      ⬅
    </div>
  );
}

const arrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-40%)",
  fontSize: "30px",
  zIndex: 5,
  color: "#fff",
  backgroundColor: "blue",
  padding: "10px",
  borderRadius: "50%",
  width: "10px",
  height: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.3s ease",
};

const globalStyle = `
@keyframes rotateInfinite {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;

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
    img: "./assets/banner1.jpg",
    title: "Discover The Fun Of Math",
    subtitle: "For Kids 3-6 Years",
    desc: "Looking for Abacus, Vedicmaths & Maths Olympiad, Science Technology classes for Kids? Join Shiksha Abacus for Interactive Online classes which helps kids to learn faster.",
    videoUrl: "https://www.youtube.com/watch?v=jKPznf8tpzg",
  },
  {
    img: "./assets/banner2.jpg",
    title: "We provide the best Abacus classes",
    subtitle: "",
    desc: "We provide the best Abacus classes in all over INDIA. Our teachers are highly experienced and talented in imparting Abacus knowledge to students.",
    videoUrl: "https://www.youtube.com/watch?v=jKPznf8tpzg",
  },
  {
    img: "./assets/banner3.jpg",
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
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        backgroundImage: 'url("/images/home-design.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px 20px",
        borderRadius: "20px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {stats.map((item, idx) => (
        <div
          key={idx}
          style={{
            textAlign: "center",
            margin: "20px",
            minWidth: "150px",
          }}
        >
          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#007bff",
            }}
          >
            {inView && (
              <CountUp end={item.end} suffix={item.suffix} duration={2.5} />
            )}
          </div>
          <div
            style={{
              fontSize: "1rem",
              color: "#333",
              marginTop: "5px",
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <style>{globalStyle}</style>

      {/* Header */}
      <header style={{ backgroundColor: "#f7f7f7", padding: "10px 0", fontSize: 14, color: "#333" }}>
        <div style={{ maxWidth: 1200, margin: "auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div>45465423123</div>
          <div>shraddha institue</div>
          <div>Opening Time : 9:30am-5:30pm</div>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{ backgroundColor: "#007bff", padding: "30px 0" }}>
        <ul style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          margin: 5,
          padding: 0,
          gap: 10,
          flexWrap: "wrap",
          color: "#fff",
          fontWeight: "bold",
          fontSize: 16,
        }}>
          <li><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
          <li><a href="/about" style={{ color: "#fff", textDecoration: "none" }}>About us</a></li>
          <li><a href="/services" style={{ color: "#fff", textDecoration: "none" }}>Services</a></li>
          <li><a href="/teachers" style={{ color: "#fff", textDecoration: "none" }}>Teachers</a></li>
          <li><a href="/videos" style={{ color: "#fff", textDecoration: "none" }}>Videos</a></li>
          <li><a href="/gallery" style={{ color: "#fff", textDecoration: "none" }}>Our gallery</a></li>
          <li><a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact Us</a></li>
          <li><a href="/free-demo" style={{ color: "#fff", textDecoration: "none" }}>Free Demo</a></li>
        </ul>
      </nav>

      {/* Slider Section */}
      <div style={{ maxWidth: 1200, margin: "60px auto 0" }}>
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide-item" style={{ position: "relative", borderRadius: 50, overflow: "hidden" }}>
              <img
                src="./assets/sun.png"
                alt="Rotating Icon Top Left"
                style={{
                  position: "absolute",
                  top: 80,
                  left: 100,
                  width: 100,
                  height: 100,
                  zIndex: 1,
                  animation: "rotateInfinite 20s linear infinite",
                  pointerEvents: "none"
                }}
              />
              <img
                src="./assets/star.png"
                alt="Rotating Icon Bottom Left"
                style={{
                  position: "absolute",
                  bottom: 80,
                  left: 100,
                  width: 100,
                  height: 100,
                  zIndex: 1,
                  animation: "rotateInfinite 25s linear infinite reverse",
                  pointerEvents: "none"
                }}
              />
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="slide-content" style={{
                position: "absolute",
                top: "20%",
                left: "40%",
                color: "blue",
                padding: "10px",
                maxWidth: "600px",
                borderRadius: "10px",
              }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
                  {slide.title} <span style={{ color: "#ffcc00" }}>{slide.subtitle}</span>
                </h2>
                <p style={{ marginBottom: "15px" }}>{slide.desc}</p>
                <div style={{ display: "flex", gap: 10 }}>
                  <a href="/contact" className="btn" style={{
                    padding: "10px 20px",
                    backgroundColor: "#ffcc00",
                    color: "#000",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontWeight: "bold"
                  }}>Join Us</a>
                  <a href={slide.videoUrl} target="_blank" rel="noreferrer" className="video-btn" style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "bold"
                  }}>
                    ▶ Watch Video
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Counter Section */}
      <AnimatedStats />
    </div>
  );
}
