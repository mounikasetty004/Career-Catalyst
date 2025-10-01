import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Images (replace with your own)
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.png";

const images = [
  { src: img1, quote: "Consistency will work." },
  { src: img2, quote: "Dream big, work hard." },
  { src: img3, quote: "Every step counts." },
];

const LandingHero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const handleGetStarted = () => {
    // Navigate to login page
    navigate("/login");
  };

  return (
    <section style={styles.hero}>
      <div style={styles.carousel}>
        <img
          src={images[current].src}
          alt="hero"
          style={styles.image}
        />
        <div style={styles.quote}>{images[current].quote}</div>

        {/* Left & Right Arrows */}
        <button onClick={prevSlide} style={{ ...styles.arrow, left: "10px" }}>
          &#10094;
        </button>
        <button onClick={nextSlide} style={{ ...styles.arrow, right: "10px" }}>
          &#10095;
        </button>

        {/* Dots */}
        <div style={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                ...styles.dot,
                backgroundColor: current === index ? "#0D6EFD" : "#ccc",
              }}
            ></span>
          ))}
        </div>

        {/* Get Started Button */}
        <button onClick={handleGetStarted} style={styles.button}>
          Get Started
        </button>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "90vh",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
  },
  carousel: {
    width: "100%",
    height: "100%",
    position: "relative",
    textAlign: "center",
    color: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(70%)",
  },
  quote: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "36px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "48px",
    color: "#fff",
    background: "rgba(0,0,0,0.3)",
    border: "none",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    zIndex: 2,
  },
  dots: {
    position: "absolute",
    bottom: "30px",
    width: "100%",
    textAlign: "center",
  },
  dot: {
    display: "inline-block",
    width: "15px",
    height: "15px",
    margin: "0 5px",
    borderRadius: "50%",
    cursor: "pointer",
  },
  button: {
    position: "absolute",
    bottom: "80px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "15px 30px",
    fontSize: "18px",
    backgroundColor: "#0D6EFD",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default LandingHero;
