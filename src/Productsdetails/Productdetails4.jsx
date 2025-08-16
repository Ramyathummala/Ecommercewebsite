import React from "react";
import "./Productdetails4.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Earrings from "../assets/all-products/earrings.png";
import Studs from "../assets/all-products/Stud-Earrings.jpg";
import Dangles from "../assets/all-products/dangles-1.png";
import chandelier from "../assets/all-products/chandelier.jpg";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const ProductDetails4 = () => {
  const product4 = [
    {
      id: 1,
      name: "Earrings",
      price: 10,
      rating: 4,
      offer: "2% cashback",
      image: Earrings,
    },
    {
      id: 2,
      name: "Studs",
      price: 30,
      rating: 4,
      offer: "2% cashback",
      image: Studs,
    },
    {
      id: 3,
      name: "Dangles",
      price: 25,
      rating: 4,
      offer: "2% cashback",
      image: Dangles,
    },
    {
      id: 4,
      name: "Chandelier",
      price: 10,
      rating: 4,
      offer: "2% cashback",
      image: chandelier,
    },
  ];
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

  const filteredProducts = product4.filter((product) => {
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
    const matchColor =
      filters.color.length === 0 || filters.color.includes(product.color);
    const matchOffer =
      filters.offer.length === 0 || filters.offer.includes(product.offer);
    return (
      matchRating && matchCategory && matchPrice && matchColor && matchOffer
    );
  });
  return (
    <>
      <div className=" product4-container">
        <header className="product4-header">
          <div className="product4-logo-section">
            <div className="product4-logo-icon">🏠</div>
            <h2>Bowtiful</h2>
          </div>
          <div className="product4-nav-section">
            <nav>
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </nav>
            <div className="product4-action-icons">
              <button className="product4-icon-button">
                <SearchIcon style={{ width: "2vw", height: "2vw" }} />
              </button>
              {/* <button className="produc4-icon-button">
                <ShoppingBagIcon style={{ width: "2vw", height: "2vw" }} />
              </button> */}
              <button className="product4-icon-button">
                <ShoppingBagIcon style={{ width: "2vw", height: "2vw" }} />
              </button>
              <div className="product4-avatar"></div>
            </div>
          </div>
        </header>
      </div>
      <div className="earrings-tittle">
        <h1>Earing Collections</h1>
      </div>
      <main className="product4-layout">
        <aside className="product4-filters">
          <div className="product4-filter-section">
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

          <div className="product4-filter-section">
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

          <div className="product4-filter-section">
            <h3>Categories</h3>
            {["Studs", "Dangles", "Chandelier", "Earrings"].map((cat) => (
              <label key={cat}>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("category", cat)}
                />{" "}
                {cat}
              </label>
            ))}
          </div>

          <div className="product4-filter-section">
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

          <div className="product4-filter-section">
            <h3>Filter By Color</h3>
            <div className="product2-color-options">
              <span className="color purple"></span> Purple
              <span className="color sky"></span> Sky
              <span className="color Tan"></span>Tan
              <span className="color DarkGray"></span>DarkGray
              <span className="color GoldenRod"></span>GoldenRod
              <span className="color BurlyWood"></span>BurlyWood
            </div>
          </div>
        </aside>

        <section className="product4-content">
          <div className="product4-grid">
            {filteredProducts.map((product, index) => (
              <div key={index} className="product4-card">
                <Link to={`/product4/${product.id}`}>
                  <div
                    className="product4-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                </Link>
                <p className="product4-name">{product.name}</p>
                <p className="product4-offer" style={{ color: "black" }}>
                  Offer:{product.offer}
                </p>
                <div className="product4-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < product.rating ? "#ffc107" : "#e4e5e9"}
                      size={50}
                    />
                  ))}
                </div>
                <div className="product4-colors">
                  <span className="color Tan"></span>
                  <span className="color DarkGray"></span>
                  <span className="color GoldenRod"></span>
                  <span className="color BurlyWood"></span>
                </div>

                <p className="product4-price">₹{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
export default ProductDetails4;
