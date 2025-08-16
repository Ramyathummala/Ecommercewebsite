import React from "react";
import './Footer.css';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <>
              <footer className="hekto-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2>Access In Touch</h2>
              <div className="subscribe">
                <input type="email" placeholder="Enter Email Address" />
                <button>Sign Up</button>
              </div>
              <p className="contact-info">Contact Info</p>
              <p className="address">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            <div className="footer-column">
              <h3>Categories</h3>
              <ul>
                <Link to="/"><li>Home</li></Link>
               <Link to="/About"> <li>About</li></Link>
               <Link to="/pages">
                 <li>Pages</li>
               </Link>
              
                <li>Products</li>
               <Link to="/Blogs"> <li>Blogs</li></Link>
               <Link to="/ContactUs"> <li>Contact us</li></Link>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Customer Care</h3>
              <ul>
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Pages</h3>
              <ul>
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©Webecy - All Rights Reserved</p>
          <div className="social-icons">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </footer>
        </>
    )
}
export default Footer;