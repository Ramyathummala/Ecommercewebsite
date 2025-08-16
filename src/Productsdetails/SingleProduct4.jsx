import React from "react";
import "./SingleProduct4.css";
import { FavoriteBorder } from "@mui/icons-material";
import Earrings from "../assets/all-products/earrings.png";
import Studs from "../assets/all-products/Stud-Earrings.jpg";
import Dangles from "../assets/all-products/dangles-1.png";
import chandelier from "../assets/all-products/chandelier.jpg";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../components/cartcontext/CartContext";

const SingleProduct4=()=>{
      const { id } = useParams();
  const { addToCart, removeFromCart, isInCart } = useCart();
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Description", "Additional Info", "Reviews", "Video"];
      const product4 = [
        {
          id: 1,
          name: "Earrings",
          price: 10,
          rating: 4,
          offer: "2% cashback",
          image: Earrings,
         description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      moredetails: " timeless decorative element made by tying ribbon....",
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
          name: "chandelier",
          price: 10,
          rating: 4,
          offer: "2% cashback",
          image:chandelier,
        },
      ];

 const productimage4 = product4.find((p) =>  p.id === Number(id));
  if (!productimage4) {
    return <div>Product not found</div>;
  }
    return(
        <>
              <div className="single-product4-wrapper">
        <div className="product4-gallery">
          <div className="product4-main-image">
            <img src={productimage4.image} alt={productimage4.name} />
          </div>
        </div>
        <div className="product4-info">
          <h2>{productimage4.name}</h2>

          <div className="product4-rating">
            {"⭐"} <span>({productimage4.rating})</span>
          </div>

          <div className="product4-price">
            <span className="current">{productimage4.price}</span>
            <span className="old">₹32.00</span>
          </div>

          <div className="label">Color:{productimage4.color}</div>

          <p className="product4-description">
            {productimage4.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
          </p>
          <p className="product4-price-offer">Offer:{productimage4.offer}</p>

          <div className="product4-buttons">
            <button
              className="product4-add-to-cart"
              onClick={() => addToCart(productimage4)}
            >
              Add To Cart
            </button>
            <FavoriteBorder className="wishlist-icon" fontSize="5vw"  />
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
            <section>
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
                <p> {productimage4.description}</p>
                <h4>More details</h4>
                <ul>
                  <li>
                    <span className="arrow" style={{ fontSize: "1.5vw" }}>
                      →
                    </span>{" "}
                    {productimage4.moredetails}
                  </li>
                  <li>
                    <span className="arrow" style={{ fontSize: "1.5vw" }}>
                      →
                    </span>
                    {productimage4.moredetails}
                  </li>
                  <li>
                    <span className="arrow" style={{ fontSize: "1.5vw" }}>
                      →
                    </span>{" "}
                    {productimage4.moredetails}
                  </li>
                  <li>
                    <span className="arrow" style={{ fontSize: "1.5vw" }}>
                      →
                    </span>{" "}
                    {productimage4.moredetails}
                  </li>
                </ul>
              </>
            )}

            {activeTab === 1 && <p>Additional Info content here.</p>}
            {activeTab === 2 && <p>Reviews content here.</p>}
            {activeTab === 3 && <p>Video content here.</p>}
          </div>
        </div>
      </section>
        </>
    )
}
export default SingleProduct4