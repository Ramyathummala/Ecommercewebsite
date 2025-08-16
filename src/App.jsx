import React from "react";
import Pages from "./components/Pages.jsx";
import Homepage from './components/Homepage';
import Products from "./Productsdetails/Productsdetails1";
import Products1 from "./Productsdetails/Productsdetails2";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx"
import SingleProduct from "./Productsdetails/SingleProduct.jsx"
import AboutUs from "./components/Pages/About.jsx";
import SingleProduct1 from "./Productsdetails/SingleProduct1.jsx";
import ProductDetails3 from "./Productsdetails/Productdetails3.jsx";
import SingleProduct3 from "./Productsdetails/SingleProduct3.jsx";
import Blogs from "./components/blog/Blog.jsx";
import ProductDetails4 from "./Productsdetails/Productdetails4.jsx";
import SingleProduct4 from "./Productsdetails/SingleProduct4.jsx";
import ContactUs from "./components/Contact.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
     <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/product1" element={<Products />} />
        <Route path="/product2" element={<Products1 />} />
        <Route path="/product1/products/:id" element={<SingleProduct/>}/>
        <Route path="/About" element={<AboutUs/>}/>
        <Route  path="product2/:id" element={<SingleProduct1/>}/>
        <Route path="/Product3" element={<ProductDetails3/>}/>
        <Route path="product3/:id" element={<SingleProduct3/>}/>
        <Route  path="/Blogs" element={<Blogs/>}/>
        <Route path="/product4" element={<ProductDetails4/>}/>
        <Route path="/product4/:id" element={<SingleProduct4/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
