import React from "react";
import "./SingleProduct.css";
import classicbow from "../assets/products/classic.png";
import Ribbon from "../assets/products/ribbon.png";
import velvet from "../assets/products/velvet.png";
import satin from "../assets/products/satin.png";
import organza from "../assets/products/organza.png";
import grosgrain from "../assets/products/grosgrain.png";
import Taffeta from "../assets/products/Taffeta.png";
import Chiffon from "../assets/products/Chiffon.png";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FavoriteBorder } from "@mui/icons-material";
import { useCart } from "../components/cartcontext/CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const { addToCart, removeFromCart, isInCart } = useCart();

  const tabs = ["Description", "Additional Info", "Reviews", "Video"];

  const products = [
    {
      id: 1,
      name: "Classic Bow",
      image: classicbow,
      price: 35,
      rating: 5,
      offer: "20% cashback",
      color: "Purple",
      description:
        "A Classic Bow Ribbon is a timeless decorative element made by tying ribbon....",
      moredetails: " timeless decorative element made by tying ribbon....",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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


  const productimage = products.find((p) => p.id === Number(id));

  if (!productimage) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <div className="product-page">
        <h1>Product Details</h1>
      </div>
      <div className="single-product-wrapper">
        <div className="product-gallery">
          <div className="thumbnails">
            {[classicbow, Ribbon, velvet, organza].map((thumb, index) => (
              <img src={thumb} alt={`thumb-${index}`} key={index} />
            ))}
          </div>
          <div className="main-image">
            <img src={productimage.image} alt={productimage.name} />
          </div>
        </div>

        <div className="product-info">
          <h2>{productimage.name}</h2>

          <div className="rating">
            {"⭐"} <span>({productimage.rating})</span>
          </div>

          <div className="price">
            <span className="current">{productimage.price}</span>
            <span className="old">₹32.00</span>
          </div>

          <div className="label">Color: {productimage.color}</div>

          <p className="description">
            {productimage.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
          </p>
          <p className="price-offer">Offer: {productimage.offer}</p>

          <div className="buttons">
            <button className="add-to-cart" onClick={()=>addToCart(productimage)}>Add To Cart</button>
            <FavoriteBorder className="wishlist-icon-favorite" fontSize="5vw" />
          </div>

          <div className="extra-info">
            <p>
              <strong>Categories: </strong> Bows, Accessories
            </p>
            <p>
              <strong>Tags: </strong> Gift, Ribbon, Fashion
            </p>
            <p>
              <strong>Share:  <FacebookIcon style={{fontSize:"1vw"}} />  <TwitterIcon  style={{fontSize:"1vw"}}/>  <InstagramIcon style={{fontSize:"1vw"}} /> </strong>
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
                <p> {productimage.description}</p>
                <h4>More details</h4>
                <ul>
                  <li>
                    <span className="arrow" style={{ fontSize: "1.5vw" }}>
                      →
                    </span>{" "}
                    {productimage.moredetails}
                  </li>
                  <li>
                    <span className="arrow" style={{ fontSize: "1.5vw" }}>
                      →
                    </span>
                    {productimage.moredetails}
                  </li>
                  <li>
                    <span className="arrow" style={{ fontSize: "1.5vw" }}>
                      →
                    </span>{" "}
                    {productimage.moredetails}
                  </li>
                  <li>
                    <span className="arrow" style={{ fontSize: "1.5vw" }}>
                      →
                    </span>{" "}
                    {productimage.moredetails}
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
  );
};
export default SingleProduct;
