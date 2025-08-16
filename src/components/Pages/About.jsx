import React from "react";
import "./About.css";
import aboutimg from "../../assets/aboutimg.png";
import cashback from "../../assets/cashback.png";
import freedelivary from "../../assets/freedelivery.png";
import quality from "../../assets/quality.png";
import support from "../../assets/support.png";
import client1 from "../../assets/client1.png";
import { useState, useEffect } from "react";

const AboutUs = () => {
   const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const Clients = [
    {
    name: "Selina Gomez",
    role: "CEO at Webstack",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.",
    img: client1,
    },
        {
    name: "Selina ",
    role: "CEO at Webstack",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.",
    img: client1,
    },
        {
    name: " Gomez",
    role: "CEO at Web",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.",
    img: client1,
    }
  ]
    const features = [
  {
    title: "Free Delivery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    icon: freedelivary,
  },
  {
    title: "100% Cash Back",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    icon: cashback,
    highlight: true,
  },
  {
    title: "Quality Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    icon: quality,
  },
  {
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    icon: support,
  },
];
  return (
    <>
      <div className="aboutus-container">
        <div className="aboutus-header">
          <h2>About Us</h2>
          <p>
            Home <span className="">   /</span> Pages
            <span className=""> /  </span>
            <span className="active">About Us</span>
          </p>
        </div>

        <div className="aboutus-content">
          <div className="aboutus-image">
            <img src={aboutimg} alt="About Us" />
          </div>

          <div className="aboutus-text">
            <h3>
              Know About Our Ecommerce
              <br /> Business, History
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <button>Contact us</button>
          </div>
        </div>
        <section className="features">
      <h2 className="features-title">Our Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            className={`feature-card ${feature.highlight ? "highlight" : ""}`}
            key={index}
          >
            <img src={feature.icon} alt={feature.title} className="feature-icon" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
<section className="client-carousel">
      <h2 className="carousel-title">Our Client Say!</h2>

      <div className="carousel-images">
        {Clients.map((t, index) => (
          <img
            key={index}
            src={t.img}
            alt={t.name}
            className={`carousel-img ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      <h3 className="carousel-name">{Clients[current].name}</h3>
      <p className="carousel-role">{Clients[current].role}</p>
      <p className="carousel-text">{Clients[current].text}</p>

      <div className="carousel-indicators">
        {Clients.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
      </div>
    </>
  );
};
export default AboutUs;
