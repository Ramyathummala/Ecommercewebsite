import React from "react";
import "./SingleProduct3.css";
import { useParams } from "react-router-dom";
import clawclip from "../assets/all-products/clowclip.png";
import clip1 from "../assets/all-products/clip1.png";
import { useCart } from "../components/cartcontext/CartContext";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const SingleProduct3 = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, isInCart } = useCart();
  const Product3 = [
    {
      id: 1,
      name: "claw clip",
      price: 10,
      rating: 4,
      offer: "2% cashback",
      image: clawclip,
    },
    {
      id: 2,
      name: "Butterfly Clip",
      price: 10,
      rating: 4,
      offer: "2% cashback",
      image: clip1,
    },
    {
      id: 3,
      name: "clawclip",
      price: 20,
      rating: 2,
      offer: "2% cashback",
      image: clawclip,
    },
    {
      id: 4,
      name: "clawclip",
      price: 30,
      rating: 3,
      offer: "2% cashback",
      image: clawclip,
    },
  ];
  const productimage3 = Product3.find((p) => p.id === Number(id));
  if (!productimage3) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <div className="single-product3-wrapper">
        <div className="product3-gallery">
          <div className="product3-main-image">
            <img src={productimage3.image} alt={productimage3.name} />
          </div>
        </div>
        <div className="product3-info">
          <h2>{productimage3.name}</h2>

          <div className="product3-rating">
            {"⭐"} <span>({productimage3.rating})</span>
          </div>

          <div className="product3-price">
            <span className="current">{productimage3.price}</span>
            <span className="old">₹32.00</span>
          </div>

          <div className="label">Color:{productimage3.color}</div>

          <p className="product3-description">
            {productimage3.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
          </p>
          <p className="product3-price-offer">Offer:{productimage3.offer}</p>

          <div className="product3-buttons">
            <button
              className="product3-add-to-cart"
              onClick={() => addToCart(productimage3)}
            >
              Add To Cart
            </button>
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
              <strong>Share:  <FacebookIcon style={{fontSize:"1vw"}} />  <TwitterIcon  style={{fontSize:"1vw"}}/>  <InstagramIcon style={{fontSize:"1vw"}} /> </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProduct3;
