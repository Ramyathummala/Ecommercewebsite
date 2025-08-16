import React, { useState } from "react";
import "./Productsdetails2.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { FaStar } from "react-icons/fa";
import scrunchieswithbow from "../assets/products/scrunchieswithbow.png";
import { Link } from "react-router-dom";

const Product2 = [
  {
    id: "1",
    name: "Classic Scrunchie",
    price: 10,
    rating: 4,
    offer: "2% cashback",
    color: "Purple",

    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvuEnH2cETc-RCMlTFNaAwsiCFVfJjAYHk-vjWArTA1TIwhxaX7GM1Z9XbEivIqcQo4YSOyGcAoPwSb3kftsxRj8Y0A1cGJa29Zx3X-zNxI1Sgqjumbz46Nqb6MLPGXE2hjEVEuSQtLBNzpvEDuequbbdIyN2k_WmKiaY_t6SFPlcj5-zt6JdDHLcFu2vJIj3kKOkUuBeQwIr3YCFgzlWOwG55OqwlEmOd3InK6O_cfzkI74oAaafNzCuLaiqTwGg63tLKcz2DQw",
  },
  {
    id: "3",
    name: "Scrunchies",
    price: 20,
    rating: 4,
    offer: "20% cashback",
    color: "Purple",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBo4-b-ypCGIPufV9RhAus0PtdpU8fZkCzRpaLxfHI6-6aZos1KEKb6ZxRxZk6eYX51BruX0YPyy9Leia2kRDpXK5k92cY_v4Hgs9ks4vNHlAO8ksEuHl0ueeMnwMZtydtYebQtg4fkaxW1PMk2idha4rFv_g7hvUY44W-_i0UFSXFywcSUnkriEpvi3YzCjQUabn240JNqxut9VEtsalre2MuoLsZnKGYdMrGUZckWxZFAazN2trguLPyhXpL3BxPRcM7hirdJItA",
  },
  {
    id: "4",
    name: "Classic Scrunchie",
    price: 35,
    rating: 5,
    offer: "20% cashback",
    color: "Purple",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvuEnH2cETc-RCMlTFNaAwsiCFVfJjAYHk-vjWArTA1TIwhxaX7GM1Z9XbEivIqcQo4YSOyGcAoPwSb3kftsxRj8Y0A1cGJa29Zx3X-zNxI1Sgqjumbz46Nqb6MLPGXE2hjEVEuSQtLBNzpvEDuequbbdIyN2k_WmKiaY_t6SFPlcj5-zt6JdDHLcFu2vJIj3kKOkUuBeQwIr3YCFgzlWOwG55OqwlEmOd3InK6O_cfzkI74oAaafNzCuLaiqTwGg63tLKcz2DQw",
  },
  {
    id: "5",
    name: "Ribbon Scrunchie",
    price: 35,
    rating: 5,
    offer: "20% cashback",
    color: "Purple",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGHiq1HEjAfQVqd-gVlyrQGjk7KWDqEEPytqmhckxQ550wZhxyShi8HAL32nVqgex6OBNUx4Mpxqh7T109oOe7zfFtLcpKOsspJKQzP_D1xP1DQytgicVU-TYHGvIgIaNIGcBoWHvu6IL0q5gcLUj-poY0W522kJlH1whzXk9MjyPpmYEbZqsRPl_-dO3xaXSHTYaZXXoE5eAgsWwWHKQZqHWwY_wEXvyxR0-CMeUJDsBBPBryqV99PiN7fgzhSxugq8gzZpVgPg",
  },
  {
    id: "6",
    name: "Classic Scrunchie",
    price: 35,
    rating: 5,
    offer: "20% cashback",
    color: "BurlyWood",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvuEnH2cETc-RCMlTFNaAwsiCFVfJjAYHk-vjWArTA1TIwhxaX7GM1Z9XbEivIqcQo4YSOyGcAoPwSb3kftsxRj8Y0A1cGJa29Zx3X-zNxI1Sgqjumbz46Nqb6MLPGXE2hjEVEuSQtLBNzpvEDuequbbdIyN2k_WmKiaY_t6SFPlcj5-zt6JdDHLcFu2vJIj3kKOkUuBeQwIr3YCFgzlWOwG55OqwlEmOd3InK6O_cfzkI74oAaafNzCuLaiqTwGg63tLKcz2DQw",
  },
 
  {
    id: "7",
    name: "Ribbon Scrunchie",
    price: 5,
    rating: 3,
    offer: "5% cashback",
    color: "Purple",
    image: scrunchieswithbow,
  },
];

const Productsdetails2 = () => {
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

  const filteredProducts = Product2.filter((product) => {
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
    <div className="product2-app">
      <header className="product2-header">
        <div className="product2-logo-section">
          <div className="product2-logo-icon">🏠</div>
          <h2 className="product2-logo-text">Bowtiful</h2>
        </div>
        <div className="product2-nav-section">
          <nav className="product2-nav-links">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
          <div className="product2-action-icons">
            <button className="product2-icon-button">
              <SearchIcon style={{ width: "2vw", height: "2vw" }} />
            </button>
            <button className="product2-icon-button">
              <ShoppingBagIcon style={{ width: "2vw", height: "2vw" }} />
            </button>
            <div className="product2-avatar"></div>
          </div>
        </div>
      </header>
      <div className="Scrunchie-tittle">
        <h1 style={{ fontSize: "2vw" }}>Scrunchie Collection</h1>
      </div>
      <main className="product2-layout">
        <aside className="product2-filters">
          <div className="product-filter-section">
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

          <div className="product-filter-section">
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

          <div className="product-filter-section">
            <h3>Categories</h3>
            {["Classic Scrunchie", "Ribbon Scrunchie"].map((cat) => (
              <label key={cat}>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("category", cat)}
                />{" "}
                {cat}
              </label>
            ))}
          </div>

          <div className="product-filter-section">
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

          <div className="product-filter-section">
            <h3>Filter By Color</h3>
            <div className="color-options">
              {["Tan", "DarkGray", "GoldenRod", "BurlyWood"].map((color) => (
                <label
                  key={color}
                  style={{ display: "block", cursor: "pointer" }}
                >
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

        <section className="product2-content">
          <div className="product2-grid">
            {filteredProducts.map((product, index) => (
              <div key={index} className="product2-card">
                <Link to={`/product2/${product.id}`}>
                  <div
                    className="product2-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                </Link>
                <p className="product2-name">{product.name}</p>
                <p className="product2-offer" style={{ color: "black" }}>
                  Offer:{product.offer}
                </p>
                <div className="product2-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < product.rating ? "#ffc107" : "#e4e5e9"}
                      size={50}
                    />
                  ))}
                </div>
                <div className="product-colors">
                  <span className="color Tan"></span>
                  <span className="color DarkGray"></span>
                  <span className="color GoldenRod"></span>
                  <span className="color BurlyWood"></span>
                </div>

                <p className="product2-price">₹{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Productsdetails2;
