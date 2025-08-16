import React from "react";
import "./CartPopup.css";
import { useCart } from "./cartcontext/CartContext";

const CartPopup = ({ onClose }) => {
  const { cartItems, removeFromCart, totalAmount } = useCart();

  return (
    <div className="cart-popup-overlay" onClick={onClose}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <button className="cart-close-btn" onClick={onClose}>×</button>
        <h2>Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <>
            <ul className="cart-items-list">
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <span>{item.name}</span>
                    <span>₹{item.price}</span>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-total">
              <h3>Total: ₹{totalAmount}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
