
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };
  const totalAmount = cartItems.reduce(
  (total, item) => total + item.price * (item.quantity || 1),
  0
);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isInCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
