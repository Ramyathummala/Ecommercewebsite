import React from "react";
import { NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCart } from "./cartcontext/CartContext";
import CartPopup from "./CartPopup";
import { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const { cartItems } = useCart();

  const [showPopup, setShowPopup] = useState(false); // ⬅️ Add state

  const toggleCartPopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="Tcontact-info">
            <div className="info-item">
              <span className="material-icons">email</span>
              <span>mhhasanul@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="material-icons">phone</span>
              <span>(12345)67890</span>
            </div>
          </div>

          <div className="top-actions">
            <a href="#">Wishlist</a>
            <FavoriteBorderIcon
              style={{ fontSize: "2vw" }}
              className="FavoriteBorderIcon"
            />
            <span onClick={toggleCartPopup}>
              <ShoppingCartIcon
                style={{ fontSize: "2vw", color: "white" }}
                className="ShoppingCart"
              />
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </span>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            Access In Touch
          </a>
          <div className="nav-links">
            <NavLink to="/">
              <a href="#" className="active">
                Home
              </a>
            </NavLink>
            <NavLink to="/About">
              <a href="">About</a>
            </NavLink>
            <NavLink to="/pages">
              <a href="#">Pages</a>
            </NavLink>
            <NavLink to="/product1">
              <a href="#">Products</a>
            </NavLink>
            <NavLink to="/Blogs">
              <a href="#">Blog</a>
            </NavLink>
            <a href="#">Shop</a>
            <NavLink to="/ContactUs">
              <a href="#">Contact Us</a>
            </NavLink>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>
              <span className="material-icons">search</span>
            </button>
          </div>
        </div>
      </nav>
      {showPopup && <CartPopup onClose={toggleCartPopup} />}
    </>
  );
};
export default Menu;
