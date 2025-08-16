import React, { useState } from "react";
import "./Productsdetails1.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import classicbow from "../assets/products/classic.png";
import Ribbon from "../assets/products/ribbon.png";
import velvet from "../assets/products/velvet.png";
import satin from "../assets/products/satin.png";
import organza from "../assets/products/organza.png";
import grosgrain from "../assets/products/grosgrain.png";
import Taffeta from "../assets/products/Taffeta.png";
import Chiffon from "../assets/products/Chiffon.png";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const products = [
  {
    id: "1",
    name: "Classic Bow",
    image: classicbow,
    price: 35,
    rating: 5,
    offer: "20% cashback",
    color: "Purple",
    description:
      "A Classic Bow Ribbon is a timeless decorative element made by tying ribbon....",
  },
  {
    id: "2",
    name: "Ribbon Bow",
    image: Ribbon,
    price: 45,
    rating: 4,
    color: "Sky",
    offer: "20% cashback",
    description:
      "A Classic Bow Ribbon is a timeless decorative element made by tying ribbon....",
  },
  {
    id: "3",
    name: "Velvet Bow",
    image: velvet,
    price: 50,
    rating: 4,
    color: "Tan",
    offer: "25% cashback",
    description:
      "A Classic Bow Ribbon is a timeless decorative element made by tying ribbon....",
  },
  {
    id: "4",
    name: "Satin Bow",
    image: satin,
    price: 15,
    rating: 3,
    color: "BurlyWood",
    offer: "5% cashback",
    description:
      "A Classic Bow Ribbon is a timeless decorative element made by tying ribbon....",
  },
  {
    id: "5",
    name: "Organza Bow",
    image: organza,
    price: 49,
    rating: 5,
    color: "GoldenRod",
    offer: "20% cashback",
    description:
      "A Classic Bow Ribbon is a timeless decorative element made by tying ribbon....",
  },
  {
    id: "6",
    name: "Grosgrain Bow",
    image: grosgrain,
    price: 30,
    rating: 2,
    color: "DarkGray",
    offer: "25% cashback",
    description:
      "A Classic Bow Ribbon is a timeless decorative element made by tying ribbon....",
  },
  {
    id: "7",
    name: "Taffeta Bow",
    image: Taffeta,
    price: 20,
    rating: 3,
    color: "Tan",
    offer: "20% cashback",
    description:
      "A Classic Bow Ribbon is a timeless decorative element made by tying ribbon....",
  },
  {
    id: "8",
    name: "Chiffon Bow",
    image: Chiffon,
    price: 15,
    rating: 4,
    color: "Sky",
    offer: "5% cashback",
    description:
      "A Classic Bow Ribbon is a timeless decorative element made by tying ribbon....",
  },
];

const Productsdetails = () => {
  const [filters, setFilters] = useState({
    rating: [],
    category: [],
    price: [],
    color: [],
    offer: [],
  });

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const current = prev[type] || [];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [type]: updated };
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchRating =
      filters.rating.length === 0 || filters.rating.includes(product.rating);
    const matchCategory =
      filters.category.length === 0 || filters.category.includes(product.name);
    const matchPrice =
      filters.price.length === 0 ||
      filters.price.some((range) => {
        if (range === "0-20") return product.price >= 0 && product.price <= 20;
        if (range === "20-30") return product.price > 20 && product.price <= 30;
        if (range === "30-50") return product.price > 30 && product.price <= 50;
        if (range === "50+") return product.price > 50;
        return true;
      });
    const matchColor = filters.color.length === 0 || filters.color.includes(product.color);
    const matchOffer =
      filters.offer.length === 0 || filters.offer.includes(product.offer);
    return (
      matchRating && matchCategory && matchPrice && matchColor && matchOffer
    );
  });

  return (
    <div className="product1-container">
      <header className="product1-header">
        <div className="product1-logo-section">
          <div className="product1-logo-icon">🏠</div>
          <h2>Bowtiful</h2>
        </div>
        <div className="product1-nav-section">
          <nav>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
          <div className="product1-action-icons">
            <button>
              <SearchIcon style={{ width: "2vw", height: "2vw" }} />
            </button>
            <button>
              <ShoppingBagIcon style={{ width: "2vw", height: "2vw" }} />
            </button>
            <div className="product1-avatar"></div>
          </div>
        </div>
      </header>

      <div className="bow-tittle">
        <h1 style={{ fontSize: "2vw" }}>Bow Collection</h1>
      </div>

      <main className="product1-layout">
        <aside className="product1-filters">
          <div className="filter-section">
            <h3>Discount Offer</h3>
            {["20% cashback", "5% cashback", "25% cashback"].map((offer) => (
              <label key={offer}>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("offer", offer)}
                />{" "}
                {offer}
              </label>
            ))}
          </div>

          <div className="filter-section">
            <h3>Rating Item</h3>
            {[5, 4, 3, 2, 1].map((rate) => (
              <label key={rate}>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("rating", rate)}
                />{" "}
                {"⭐".repeat(rate)}...
              </label>
            ))}
          </div>

          <div className="filter-section">
            <h3>Categories</h3>
            {[
              "Classic Bow",
              "Ribbon Bow",
              "Velvet Bow",
              "Satin Bow",
              "Organza Bow",
              "Taffeta Bow",
              "Chiffon Bow",
            ].map((cat) => (
              <label key={cat}>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("category", cat)}
                />{" "}
                {cat}
              </label>
            ))}
          </div>

          <div className="filter-section">
            <h3>Price Filter</h3>
            {[
              { label: "₹0 - ₹20", value: "0-20" },
              { label: "₹20 - ₹30", value: "20-30" },
              { label: "₹30 - ₹50", value: "30-50" },
              { label: "₹50+", value: "50+" },
            ].map((range) => (
              <label key={range.value}>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("price", range.value)}
                />{" "}
                {range.label}
              </label>
            ))}
          </div>

          <div className="filter-section">
            <h3>Filter By Color</h3>
            <div className="color-options">
              {[ "Tan", "DarkGray", "GoldenRod", "BurlyWood"].map((color) => (
                <label key={color} style={{ display: "block", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("color", color)}
                    checked={filters.color.includes(color)}
                  />{" "}
                  <span className={`color ${color}`}></span> {color}
                </label>
              ))}
            </div>

          </div>
        </aside>

        <section className="product1-content">
          <div className="product1-grid">
            {filteredProducts.map((product, index) => (
              <div key={index} className="product1-card">
                <Link to={`products/${product.id}`}>
                  <div
                    className="product1-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                </Link>
                <p className="product1-name">{product.name}</p>
                <p className="product1-offer" style={{ color: "black" }}>
                  Offer:{product.offer}
                </p>
                <div className="product1-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < product.rating ? "#ffc107" : "#e4e5e9"}
                      size={50}
                    />
                  ))}
                </div>
                <div className="producy-colors">
                  <span className="color Tan"></span>
                  <span className="color DarkGray"></span>
                  <span className="color GoldenRod"></span>
                  <span className="color BurlyWood"></span>
                </div>

                <p className="product1-price">₹{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Productsdetails;
