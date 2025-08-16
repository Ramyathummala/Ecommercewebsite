import React from "react";
import "./SingleProduct1.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {useCart} from "../components/cartcontext/CartContext.jsx";

const SingleProduct1 = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, isInCart, } = useCart();
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Description", "Additional Info", "Reviews", "Video"];

  const Product2 = [
    {
      id: 1,
      name: "Classic Scrunchie",
      price: 10,
      rating: 4,
      offer: "2% cashback",
      color: "Purple",

      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAvuEnH2cETc-RCMlTFNaAwsiCFVfJjAYHk-vjWArTA1TIwhxaX7GM1Z9XbEivIqcQo4YSOyGcAoPwSb3kftsxRj8Y0A1cGJa29Zx3X-zNxI1Sgqjumbz46Nqb6MLPGXE2hjEVEuSQtLBNzpvEDuequbbdIyN2k_WmKiaY_t6SFPlcj5-zt6JdDHLcFu2vJIj3kKOkUuBeQwIr3YCFgzlWOwG55OqwlEmOd3InK6O_cfzkI74oAaafNzCuLaiqTwGg63tLKcz2DQw",
    },
    {
      id: 2,
      name: "Ribbon Scrunchie",
      price: 15,
      rating: 4,
      offer: "15% cashback",
      color: "Purple",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDGHiq1HEjAfQVqd-gVlyrQGjk7KWDqEEPytqmhckxQ550wZhxyShi8HAL32nVqgex6OBNUx4Mpxqh7T109oOe7zfFtLcpKOsspJKQzP_D1xP1DQytgicVU-TYHGvIgIaNIGcBoWHvu6IL0q5gcLUj-poY0W522kJlH1whzXk9MjyPpmYEbZqsRPl_-dO3xaXSHTYaZXXoE5eAgsWwWHKQZqHWwY_wEXvyxR0-CMeUJDsBBPBryqV99PiN7fgzhSxugq8gzZpVgPg",
    },
    {
      id: 3,
      name: "Scrunchies",
      price: 20,
      rating: 4,
      offer: "20% cashback",
      color: "Purple",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBo4-b-ypCGIPufV9RhAus0PtdpU8fZkCzRpaLxfHI6-6aZos1KEKb6ZxRxZk6eYX51BruX0YPyy9Leia2kRDpXK5k92cY_v4Hgs9ks4vNHlAO8ksEuHl0ueeMnwMZtydtYebQtg4fkaxW1PMk2idha4rFv_g7hvUY44W-_i0UFSXFywcSUnkriEpvi3YzCjQUabn240JNqxut9VEtsalre2MuoLsZnKGYdMrGUZckWxZFAazN2trguLPyhXpL3BxPRcM7hirdJItA",
    },
    {
      id: 4,
      name: "Ribbon Scrunchie",
      price: 35,
      rating: 5,
      offer: "5% cashback",
      color: "Purple",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDGHiq1HEjAfQVqd-gVlyrQGjk7KWDqEEPytqmhckxQ550wZhxyShi8HAL32nVqgex6OBNUx4Mpxqh7T109oOe7zfFtLcpKOsspJKQzP_D1xP1DQytgicVU-TYHGvIgIaNIGcBoWHvu6IL0q5gcLUj-poY0W522kJlH1whzXk9MjyPpmYEbZqsRPl_-dO3xaXSHTYaZXXoE5eAgsWwWHKQZqHWwY_wEXvyxR0-CMeUJDsBBPBryqV99PiN7fgzhSxugq8gzZpVgPg",
    },
    {
      id: 5,
      name: "Classic Scrunchie",
      price: 35,
      rating: 5,
      offer: "20% cashback",
      color: "Purple",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAvuEnH2cETc-RCMlTFNaAwsiCFVfJjAYHk-vjWArTA1TIwhxaX7GM1Z9XbEivIqcQo4YSOyGcAoPwSb3kftsxRj8Y0A1cGJa29Zx3X-zNxI1Sgqjumbz46Nqb6MLPGXE2hjEVEuSQtLBNzpvEDuequbbdIyN2k_WmKiaY_t6SFPlcj5-zt6JdDHLcFu2vJIj3kKOkUuBeQwIr3YCFgzlWOwG55OqwlEmOd3InK6O_cfzkI74oAaafNzCuLaiqTwGg63tLKcz2DQw",
    },
    {
      id: 6,
      name: "Ribbon Scrunchie",
      price: 35,
      rating: 5,
      offer: "20% cashback",
      color: "Purple",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDGHiq1HEjAfQVqd-gVlyrQGjk7KWDqEEPytqmhckxQ550wZhxyShi8HAL32nVqgex6OBNUx4Mpxqh7T109oOe7zfFtLcpKOsspJKQzP_D1xP1DQytgicVU-TYHGvIgIaNIGcBoWHvu6IL0q5gcLUj-poY0W522kJlH1whzXk9MjyPpmYEbZqsRPl_-dO3xaXSHTYaZXXoE5eAgsWwWHKQZqHWwY_wEXvyxR0-CMeUJDsBBPBryqV99PiN7fgzhSxugq8gzZpVgPg",
    },
    {
      id: 7,
      name: "Classic Scrunchie",
      price: 35,
      rating: 5,
      offer: "20% cashback",
      color: "Purple",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAvuEnH2cETc-RCMlTFNaAwsiCFVfJjAYHk-vjWArTA1TIwhxaX7GM1Z9XbEivIqcQo4YSOyGcAoPwSb3kftsxRj8Y0A1cGJa29Zx3X-zNxI1Sgqjumbz46Nqb6MLPGXE2hjEVEuSQtLBNzpvEDuequbbdIyN2k_WmKiaY_t6SFPlcj5-zt6JdDHLcFu2vJIj3kKOkUuBeQwIr3YCFgzlWOwG55OqwlEmOd3InK6O_cfzkI74oAaafNzCuLaiqTwGg63tLKcz2DQw",
    },
    {
      id: 8,
      name: "Ribbon Scrunchie",
      price: 5,
      rating: 3,
      offer: "5% cashback",
      color: "Purple",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDGHiq1HEjAfQVqd-gVlyrQGjk7KWDqEEPytqmhckxQ550wZhxyShi8HAL32nVqgex6OBNUx4Mpxqh7T109oOe7zfFtLcpKOsspJKQzP_D1xP1DQytgicVU-TYHGvIgIaNIGcBoWHvu6IL0q5gcLUj-poY0W522kJlH1whzXk9MjyPpmYEbZqsRPl_-dO3xaXSHTYaZXXoE5eAgsWwWHKQZqHWwY_wEXvyxR0-CMeUJDsBBPBryqV99PiN7fgzhSxugq8gzZpVgPg",
    },
  ];

const productimage2 = Product2.find((p) => p.id === Number(id));

  if (!productimage2) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <div className="single-product1-wrapper">
        <div className="product1-gallery">
          <div className="product-main-image">
            <img src={productimage2.image} alt={productimage2.name} />
          </div>
        </div>
        <div className="product1-info">
          <h2>{productimage2.name}</h2>

          <div className="product1-rating">
            {"⭐"} <span>({productimage2.rating})</span>
          </div>

          <div className="product1-price">
            <span className="product1-current">{productimage2.price}</span>
            <span className="product1-old">₹32.00</span>
          </div>

          <div className="label">Color:{productimage2.color}</div>

          <p className="product1-description">
            {productimage2.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
          </p>
          <p className="product1-price-offer">Offer:{productimage2.offer}</p>

          <div className="product1-buttons">
            <button className="product1-add-to-cart" onClick={()=>addToCart(productimage2)}>Add To Cart</button>
            {/* <FavoriteBorder className="wishlist-icon" /> */}
          </div>

          <div className="extra-info">
            <p>
              <strong>Categories:</strong> Bows, Accessories
            </p>
            <p>
              <strong>Tags:</strong> Gift, Ribbon, Fashion
            </p>
            <p>
              <strong>Share:</strong>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="tabs-container">
        <div className="tabs-header">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === 0 && (
            <>
              <h3>Varius tempor.</h3>
              <p> {productimage2.description}</p>
              <h4>More details</h4>
              <ul>
                <li>
                  <span className="arrow" style={{ fontSize: "1.5vw" }}>
                    →
                  </span>{" "}
                  {productimage2.moredetails}
                </li>
                <li>
                  <span className="arrow" style={{ fontSize: "1.5vw" }}>
                    →
                  </span>
                  {productimage2.moredetails}
                </li>
                <li>
                  <span className="arrow" style={{ fontSize: "1.5vw" }}>
                    →
                  </span>{" "}
                  {productimage2.moredetails}
                </li>
                <li>
                  <span className="arrow" style={{ fontSize: "1.5vw" }}>
                    →
                  </span>{" "}
                  {productimage2.moredetails}
                </li>
              </ul>
            </>
          )}

          {activeTab === 1 && <p>Additional Info content here.</p>}
          {activeTab === 2 && <p>Reviews content here.</p>}
          {activeTab === 3 && <p>Video content here.</p>}
        </div>
      </div>
    </>
  );
};
export default SingleProduct1;
